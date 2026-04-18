import { NextResponse } from "next/server";
import { createContactSchema, resolveContactLocale } from "@/lib/contact";
import { getDictionary } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const locale = resolveContactLocale(body.locale);
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

    const { name, email, company, message } = parsed.data;

    console.info("New contact request received.", {
      locale,
      name,
      email,
      company,
      messagePreview: message.slice(0, 120),
    });

    return NextResponse.json({
      success: true,
      message: dictionary.contact.validation.success,
    });
  } catch {
    const dictionary = getDictionary("tr");

    return NextResponse.json(
      {
        success: false,
        message: dictionary.contact.validation.failure,
      },
      { status: 500 },
    );
  }
}
