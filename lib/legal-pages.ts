import type { Metadata } from "next";
import { getPath, type Locale, type RouteKey } from "@/lib/site";

export type LegalPageKey =
  | "privacyPolicy"
  | "termsOfUse"
  | "cookiePolicy"
  | "privacyNotice";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageContent = {
  routeKey: LegalPageKey;
  title: string;
  description: string;
  updatedLabel: string;
  updatedAt: string;
  sections: LegalSection[];
};

const legalPages: Record<Locale, Record<LegalPageKey, LegalPageContent>> = {
  tr: {
    privacyPolicy: {
      routeKey: "privacyPolicy",
      title: "Gizlilik Politikası",
      description:
        "HCC Avukatlık Bürosu web sitesini ziyaret eden kişilerin gizliliğine ve kişisel verilerinin korunmasına önem verir.",
      updatedLabel: "Son güncelleme",
      updatedAt: "27 Nisan 2026",
      sections: [
        {
          title: "Genel Esaslar",
          paragraphs: [
            "Bu politika, hcc.av.tr alan adlı web sitesinin kullanımı sırasında elde edilebilecek bilgilerin hangi amaçlarla işlendiğine ilişkin genel bilgilendirme sunar.",
            "HCC Avukatlık Bürosu, kişisel verilerin hukuka, dürüstlük kurallarına ve ölçülülük ilkesine uygun şekilde işlenmesi için gerekli idari ve teknik tedbirleri almaya özen gösterir.",
          ],
        },
        {
          title: "İşlenen Veriler",
          paragraphs: [
            "İletişim formu aracılığıyla ad soyad, e-posta adresi, şirket veya kurum bilgisi ve mesaj içeriği işlenebilir.",
            "Web sitesinin güvenli ve verimli çalışması için çerezler, cihaz bilgileri, IP adresi ve ziyaret kullanımına ilişkin sınırlı teknik veriler de işlenebilir.",
          ],
        },
        {
          title: "Amaç ve Hukuki Sebep",
          paragraphs: [
            "Veriler; taleplerin yanıtlanması, iletişim süreçlerinin yürütülmesi, web sitesinin güvenliğinin sağlanması ve hukuki yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.",
            "Kişisel veriler KVKK başta olmak üzere yürürlükteki mevzuatta öngörülen hukuki sebeplere dayanılarak işlenir.",
          ],
        },
        {
          title: "Başvuru ve İletişim",
          paragraphs: [
            "Gizlilik ve kişisel verilerinizle ilgili taleplerinizi info@hcc.av.tr adresi üzerinden HCC Avukatlık Bürosu'na iletebilirsiniz.",
          ],
        },
      ],
    },
    termsOfUse: {
      routeKey: "termsOfUse",
      title: "Kullanım Şartları",
      description:
        "Bu kullanım şartları, HCC Avukatlık Bürosu web sitesinin ziyaret edilmesine ve içeriklerinin kullanılmasına ilişkin genel kuralları açıklar.",
      updatedLabel: "Son güncelleme",
      updatedAt: "27 Nisan 2026",
      sections: [
        {
          title: "Web Sitesinin Kullanımı",
          paragraphs: [
            "Bu web sitesinde yer alan tüm bilgi ve içerikler genel bilgilendirme amacıyla sunulmaktadır.",
            "Siteyi kullanan ziyaretçiler, içerikleri hukuka uygun amaçlarla kullanmayı ve sitenin güvenliğini ya da işleyişini olumsuz etkileyecek davranışlardan kaçınmayı kabul eder.",
          ],
        },
        {
          title: "Hukuki Danışmanlık Niteliği",
          paragraphs: [
            "Web sitesindeki açıklamalar avukatlık hizmeti, hukuki görüş veya belirli bir uyuşmazlığa yönelik danışmanlık niteliği taşımaz.",
            "Somut hukuki ihtiyaçlar bakımından doğrudan profesyonel hukuki destek alınması gerekir.",
          ],
        },
        {
          title: "Fikri Haklar",
          paragraphs: [
            "Web sitesindeki metinler, tasarım unsurları, görseller ve marka kullanımına ilişkin haklar ilgili sahiplerine aittir.",
            "İçerikler HCC Avukatlık Bürosu'nun yazılı izni olmaksızın ticari amaçla çoğaltılamaz, yayımlanamaz veya dağıtılamaz.",
          ],
        },
        {
          title: "Değişiklikler",
          paragraphs: [
            "HCC Avukatlık Bürosu, kullanım şartlarını ve web sitesindeki içerikleri gerektiğinde güncelleme hakkını saklı tutar.",
          ],
        },
      ],
    },
    cookiePolicy: {
      routeKey: "cookiePolicy",
      title: "Çerez Politikası",
      description:
        "Bu politika, HCC Avukatlık Bürosu web sitesinde kullanılan çerezlere ilişkin genel bilgileri içerir.",
      updatedLabel: "Son güncelleme",
      updatedAt: "27 Nisan 2026",
      sections: [
        {
          title: "Çerez Nedir?",
          paragraphs: [
            "Çerezler, web sitesini ziyaret ettiğinizde tarayıcınız veya cihazınız üzerinde saklanabilen küçük metin dosyalarıdır.",
            "Çerezler, sitenin çalışmasını sağlamak, tercihlerinizi hatırlamak ve kullanım deneyimini geliştirmek amacıyla kullanılabilir.",
          ],
        },
        {
          title: "Kullanılan Çerez Türleri",
          paragraphs: [
            "Zorunlu çerezler web sitesinin temel işlevleri için gereklidir ve kapatılmaları halinde bazı alanlar beklenen şekilde çalışmayabilir.",
            "Tercih ve analitik çerezler, kullanıcı deneyimini geliştirmek ve site performansını değerlendirmek için kullanılabilir.",
          ],
        },
        {
          title: "Çerez Tercihleri",
          paragraphs: [
            "Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilir, çerezleri silebilir veya belirli çerez türlerini engelleyebilirsiniz.",
            "Çerezleri devre dışı bırakmanız web sitesinin bazı işlevlerini etkileyebilir.",
          ],
        },
      ],
    },
    privacyNotice: {
      routeKey: "privacyNotice",
      title: "Aydınlatma Metni",
      description:
        "HCC Avukatlık Bürosu tarafından kişisel verilerin işlenmesine ilişkin KVKK kapsamındaki genel aydınlatma metni.",
      updatedLabel: "Son güncelleme",
      updatedAt: "27 Nisan 2026",
      sections: [
        {
          title: "Veri Sorumlusu",
          paragraphs: [
            "Kişisel verileriniz, HCC Avukatlık Bürosu tarafından veri sorumlusu sıfatıyla işlenebilir.",
            "Büromuz, kişisel verilerin korunmasına ilişkin mevzuata uygun hareket edilmesi için gerekli özeni gösterir.",
          ],
        },
        {
          title: "İşleme Amaçları",
          paragraphs: [
            "Kişisel verileriniz; iletişim taleplerinin yanıtlanması, danışmanlık süreçlerinin planlanması, sözleşmesel ve hukuki yükümlülüklerin yerine getirilmesi, kayıt ve arşiv faaliyetlerinin yürütülmesi amaçlarıyla işlenebilir.",
          ],
        },
        {
          title: "Aktarım ve Saklama",
          paragraphs: [
            "Kişisel verileriniz, mevzuatın izin verdiği hallerde ve işleme amaçlarıyla sınırlı olarak yetkili kurumlara, hizmet sağlayıcılara veya iş ortaklarına aktarılabilir.",
            "Veriler, işleme amacının gerektirdiği süre ve yasal saklama süreleri boyunca muhafaza edilir.",
          ],
        },
        {
          title: "Haklarınız",
          paragraphs: [
            "KVKK'nın 11. maddesi kapsamındaki haklarınızı kullanmak için taleplerinizi info@hcc.av.tr adresi üzerinden iletebilirsiniz.",
          ],
        },
      ],
    },
  },
  en: {
    privacyPolicy: {
      routeKey: "privacyPolicy",
      title: "Privacy Policy",
      description:
        "HCC Law Office values the privacy of website visitors and the protection of personal data.",
      updatedLabel: "Last updated",
      updatedAt: "27 April 2026",
      sections: [
        {
          title: "General Principles",
          paragraphs: [
            "This policy provides general information on how information may be processed during use of the hcc.av.tr website.",
            "HCC Law Office takes reasonable administrative and technical measures to process personal data lawfully, fairly and proportionately.",
          ],
        },
        {
          title: "Data Processed",
          paragraphs: [
            "When you use the contact form, your full name, email address, company or institution information and message content may be processed.",
            "Limited technical data such as cookies, device information, IP address and website usage information may also be processed to maintain website security and functionality.",
          ],
        },
        {
          title: "Purposes",
          paragraphs: [
            "Data may be processed to respond to requests, manage communication, maintain website security and comply with legal obligations.",
            "Personal data is processed on the legal grounds provided under applicable data protection legislation.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "You may send privacy and personal data requests to HCC Law Office at info@hcc.av.tr.",
          ],
        },
      ],
    },
    termsOfUse: {
      routeKey: "termsOfUse",
      title: "Terms of Use",
      description:
        "These terms explain the general rules applicable to visiting and using the HCC Law Office website.",
      updatedLabel: "Last updated",
      updatedAt: "27 April 2026",
      sections: [
        {
          title: "Use of the Website",
          paragraphs: [
            "All information and materials on this website are provided for general informational purposes.",
            "Visitors agree to use the website for lawful purposes and to avoid actions that may negatively affect website security or operation.",
          ],
        },
        {
          title: "No Legal Advice",
          paragraphs: [
            "The content on this website does not constitute legal advice, a legal opinion or attorney services for any specific matter.",
            "Professional legal support should be obtained for concrete legal needs.",
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "Texts, design elements, visuals and brand-related materials on the website belong to their respective owners.",
            "The content may not be reproduced, published or distributed for commercial purposes without written permission from HCC Law Office.",
          ],
        },
        {
          title: "Changes",
          paragraphs: [
            "HCC Law Office reserves the right to update these terms and website content when necessary.",
          ],
        },
      ],
    },
    cookiePolicy: {
      routeKey: "cookiePolicy",
      title: "Cookie Policy",
      description:
        "This policy provides general information about cookies used on the HCC Law Office website.",
      updatedLabel: "Last updated",
      updatedAt: "27 April 2026",
      sections: [
        {
          title: "What Are Cookies?",
          paragraphs: [
            "Cookies are small text files that may be stored on your browser or device when you visit a website.",
            "They may be used to keep the website functioning, remember preferences and improve the user experience.",
          ],
        },
        {
          title: "Types of Cookies",
          paragraphs: [
            "Strictly necessary cookies are required for core website functions and some areas may not work as expected if they are disabled.",
            "Preference and analytics cookies may be used to improve user experience and evaluate site performance.",
          ],
        },
        {
          title: "Managing Preferences",
          paragraphs: [
            "You can manage cookie preferences through your browser settings, delete cookies or block certain types of cookies.",
            "Disabling cookies may affect some website functions.",
          ],
        },
      ],
    },
    privacyNotice: {
      routeKey: "privacyNotice",
      title: "Privacy Notice",
      description:
        "General privacy notice regarding the processing of personal data by HCC Law Office.",
      updatedLabel: "Last updated",
      updatedAt: "27 April 2026",
      sections: [
        {
          title: "Data Controller",
          paragraphs: [
            "Your personal data may be processed by HCC Law Office as data controller.",
            "Our office takes care to comply with applicable personal data protection legislation.",
          ],
        },
        {
          title: "Processing Purposes",
          paragraphs: [
            "Your personal data may be processed to respond to contact requests, plan advisory processes, comply with contractual and legal obligations, and carry out recordkeeping and archiving activities.",
          ],
        },
        {
          title: "Transfers and Retention",
          paragraphs: [
            "Where permitted by law and limited to processing purposes, personal data may be transferred to competent authorities, service providers or business partners.",
            "Data is retained for the period required by the processing purpose and applicable statutory retention periods.",
          ],
        },
        {
          title: "Your Rights",
          paragraphs: [
            "You may send requests concerning your data protection rights to info@hcc.av.tr.",
          ],
        },
      ],
    },
  },
};

export function getLegalPageContent(locale: Locale, key: LegalPageKey) {
  return legalPages[locale][key];
}

export function buildLegalPageMetadata(
  locale: Locale,
  key: LegalPageKey,
): Metadata {
  const page = getLegalPageContent(locale, key);
  const canonical = getPath(locale, page.routeKey as RouteKey);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        tr: getPath("tr", page.routeKey as RouteKey),
        en: getPath("en", page.routeKey as RouteKey),
        "x-default": getPath("tr", page.routeKey as RouteKey),
      },
    },
  };
}
