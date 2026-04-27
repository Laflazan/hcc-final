import { NextResponse } from "next/server";
import { createContactSchema, resolveContactLocale } from "@/lib/contact";
import { getDictionary, type Locale } from "@/lib/site";

const CONTACT_TO_EMAIL = "info@hcc.av.tr";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "HCC Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendContactEmail(values: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const companyLine = values.company
    ? `<p><strong>Şirket / Kurum:</strong> ${escapeHtml(values.company)}</p>`
    : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: values.email,
      subject: `HCC iletişim formu: ${values.name}`,
      text: [
        `Ad Soyad: ${values.name}`,
        `E-posta: ${values.email}`,
        values.company ? `Şirket / Kurum: ${values.company}` : null,
        "",
        values.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>HCC iletişim formu</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(values.name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(values.email)}</p>
        ${companyLine}
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(values.message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend failed: ${response.status} ${errorText}`);
  }
}

export async function POST(request: Request) {
  let locale: Locale = "tr";

  try {
    const body = await request.json();
    locale = resolveContactLocale(body.locale);
    const dictionary = getDictionary(locale);
    const schema = createContactSchema(locale);
    const parsed = schema.safeParse({
      name: body.name,
      email: body.email,
      company: body.company,
      message: body.message,
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          message: dictionary.contact.validation.invalidFields,
          errors: fieldErrors,
        },
        { status: 400 },
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({
      success: true,
      message: dictionary.contact.validation.success,
    });
  } catch (error) {
    console.error("Contact form submission failed", error);
    const dictionary = getDictionary(locale);

    return NextResponse.json(
      {
        success: false,
        message: dictionary.contact.validation.failure,
      },
      { status: 500 },
    );
  }
}
