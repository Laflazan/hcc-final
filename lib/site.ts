import type { Metadata } from "next";
import {
  getAllArticles as getLocalizedArticles,
  getFeaturedArticle as getLocalizedFeaturedArticle,
  translateArticlePath,
} from "@/lib/articles";
import { translateServicePath } from "@/lib/services";

export type Locale = "tr" | "en";
export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "team"
  | "articles"
  | "contact";

const SITE_URL = "https://hcc.av.tr";
export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/hcc-avukatlık-bürosu/";

export const routeMap: Record<RouteKey, Record<Locale, string>> = {
  home: {
    tr: "/",
    en: "/en",
  },
  about: {
    tr: "/hakkimizda",
    en: "/en/about",
  },
  services: {
    tr: "/hizmetlerimiz",
    en: "/en/services",
  },
  team: {
    tr: "/ekibimiz",
    en: "/en/team",
  },
  articles: {
    tr: "/makalelerimiz",
    en: "/en/articles",
  },
  contact: {
    tr: "/iletisim",
    en: "/en/contact",
  },
};

export function isLocale(value: string): value is Locale {
  return value === "tr" || value === "en";
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

export function getPath(locale: Locale, routeKey: RouteKey): string {
  return routeMap[routeKey][locale];
}

export function getSectionHref(
  locale: Locale,
  sectionId: "services" | "contact" | "about" | "team" | "insights",
) {
  const homePath = getPath(locale, "home");
  return `${homePath}#${sectionId}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const matchedEntry = Object.entries(routeMap).find(([, localizedPaths]) => {
    return localizedPaths.tr === pathname || localizedPaths.en === pathname;
  });

  if (matchedEntry) {
    const [, localizedPaths] = matchedEntry;
    return localizedPaths[targetLocale];
  }

  const translatedArticlePath = translateArticlePath(pathname, targetLocale);

  if (translatedArticlePath) {
    return translatedArticlePath;
  }

  const translatedServicePath = translateServicePath(pathname, targetLocale);

  if (translatedServicePath) {
    return translatedServicePath;
  }

  if (targetLocale === "en") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

type StatItem = {
  value: string;
  label: string;
};

type ServiceItem = {
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  longDescription: string;
  expertise: string[];
  email?: string;
  officePhone?: string;
  mobilePhone?: string;
  education?: string;
  languages?: string[];
  birthInfo?: string;
  startYear?: string;
};

type ArticleItem = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href?: string;
};

type FooterLink = {
  name: string;
  routeKey?: RouteKey;
};

type PageMetadataContent = {
  title: string;
  description: string;
};

type SiteDictionary = {
  language: {
    localeName: string;
    toggleLabel: string;
    switchTo: string;
    shortCurrent: string;
  };
  metadata: Record<RouteKey, PageMetadataContent>;
  navbar: {
    about: string;
    services: string;
    team: string;
    articles: string;
    contact: string;
    contactCta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    highlight: string;
    description: string;
    servicesButton: string;
    contactButton: string;
  };
  about: {
    title: string;
    highlight: string;
    paragraphs: string[];
    indicators: string[];
    stats: StatItem[];
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  industries: {
    title: string;
    description: string;
    items: string[];
  };
  team: {
    title: string;
    description: string;
    pageIntro: string;
    openProfile: string;
    closeProfile: string;
    profileLinkSoon: string;
    members: TeamMember[];
  };
    insights: {
      title: string;
      description: string;
      viewAll: string;
      readMore: string;
      continueReading: string;
      loadMore: string;
      imagePlaceholder: string;
      collectionLabel: string;
      featured: ArticleItem;
      articles: ArticleItem[];
    loadMoreNote: string;
  };
  contact: {
    title: string;
    description: string;
    pageIntro: string;
    preMeetingTitle: string;
    preMeetingDescription: string;
    addressLabel: string;
    address: string[];
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
    formTitle: string;
    formDescription: string;
    nameLabel: string;
    emailInputLabel: string;
    companyLabel: string;
    messageLabel: string;
    submit: string;
    submitting: string;
    consent: string;
    validation: {
      invalidFields: string;
      success: string;
      failure: string;
      nameRequired: string;
      emailInvalid: string;
      messageMin: string;
      messageMax: string;
    };
  };
  cookieBanner: {
    message: string;
    accept: string;
    reject: string;
    details?: string;
  };
  footer: {
    summary: string;
    servicesTitle: string;
    companyTitle: string;
    legalTitle: string;
    services: FooterLink[];
    company: FooterLink[];
    legal: FooterLink[];
    copyright: string;
    disclaimer: string;
    socialSoonLinkedIn: string;
    socialSoonX: string;
  };
  pages: {
    aboutIntro: string;
    aboutCards: {
      title: string;
      description: string;
    }[];
    aboutCta: string;
    servicesIntro: string;
    servicesCards: {
      title: string;
      description: string;
    }[];
    servicesCta: string;
    contactIntro: string;
  };
};

export const siteContent: Record<Locale, SiteDictionary> = {
  tr: {
    language: {
      localeName: "Türkçe",
      toggleLabel: "Dil değiştir",
      switchTo: "English",
      shortCurrent: "TR",
    },
    metadata: {
      home: {
        title: "HCC Avukatlık Bürosu | İstanbul Hukuk Hizmetleri",
        description:
          "HCC Avukatlık Bürosu, bireysel ve kurumsal müvekkillere güvenilir, stratejik ve çözüm odaklı hukuk hizmetleri sunmaktadır.",
      },
      about: {
        title: "Hakkımızda",
        description:
          "HCC Avukatlık Bürosu'nun tarihçesi, çalışma yaklaşımı ve kurumsal bakış açısı.",
      },
      services: {
        title: "Hizmetlerimiz",
        description:
          "HCC Avukatlık Bürosu'nun sunduğu temel hukuk hizmetleri ve çalışma alanları.",
      },
      team: {
        title: "Ekibimiz",
        description:
          "HCC Avukatlık Bürosu ekibini ve uzmanlık alanlarını yakından tanıyın.",
      },
      articles: {
        title: "Makalelerimiz",
        description:
          "HCC Avukatlık Bürosu tarafından hazırlanan güncel hukuk makaleleri.",
      },
      contact: {
        title: "İletişim",
        description:
          "HCC Avukatlık Bürosu ile iletişime geçin ve hukuki ihtiyaçlarınız için bize ulaşın.",
      },
    },
    navbar: {
      about: "Hakkımızda",
      services: "Hizmetlerimiz",
      team: "Ekibimiz",
      articles: "Makalelerimiz",
      contact: "İletişim",
      contactCta: "İletişime Geçin",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
    },
    hero: {
      title: "Stratejik ve Güçlü",
      highlight: "Hukuki Çözümler",
      description:
        "Müvekkillerimize ticari bakış açısıyla, güvenilir ve yüksek nitelikli hukuki hizmetler sunuyoruz. Yerel ve uluslararası ölçekte karmaşık hukuki süreçlerde etkin danışmanlık sağlıyoruz.",
      servicesButton: "Hizmet Alanlarımız",
      contactButton: "İletişime Geçin",
    },
    about: {
      title: "Köklü Miras,",
      highlight: "Güvenilir Hukuki Yaklaşım",
      paragraphs: [
        "HCC Avukatlık Bürosu, hukukun evrensel ilkelerini temel alan, müvekkillerine etkin, güvenilir ve sürdürülebilir çözümler sunmayı amaçlayan bir hukuk bürosudur. Büromuzun kökleri, 1955 yılında mesleğe adım atan Avukat Ömer Baş ile başlayan ve üç kuşağa yayılan güçlü bir hukuk geleneğine dayanmaktadır.",
        "Bu köklü mirasın kazandırdığı değerler ve mesleki bakış açısıyla hareket eden HCC Avukatlık Bürosu, bireyler ve şirketler başta olmak üzere geniş bir müvekkil kitlesine çeşitli hukuk alanlarında danışmanlık ve dava avukatlığı hizmeti sunmaktadır.",
        "Büromuz, yalnızca mevcut uyuşmazlıkların çözümüne odaklanmakla kalmayıp, önleyici hukuk anlayışıyla olası riskleri önceden tespit etmeyi ve hukuki süreçleri stratejik biçimde yönetmeyi hedeflemektedir. Her dosyada özgün değerlendirme yaparak müvekkil odaklı ve çözüm temelli bir yaklaşım benimser.",
        "İnsan ilişkilerini merkeze alan çalışma kültürümüz doğrultusunda; güvene dayalı, şeffaf ve etik ilkelere bağlı bir hizmet anlayışıyla hareket ediyor, hukuki temsilin ötesinde müvekkillerimizle uzun soluklu bir çözüm ortaklığı kurmayı amaçlıyoruz.",
      ],
      indicators: [
        "Şeffaf iletişim ve süreç yönetimi",
        "Müvekkil odaklı hizmet anlayışı",
        "Hızlı ve etkili çözümler",
        "Deneyimli ve uzman ekip",
      ],
      stats: [
        { value: "1955", label: "KÖKLÜ HUKUK GELENEĞİ" },
        { value: "3 Kuşak", label: "MESLEKİ BİRİKİM" },
        { value: "Etkin", label: "ÇÖZÜM ODAKLI YAKLAŞIM" },
        { value: "Güvenilir", label: "HİZMET ANLAYIŞI" },
      ],
    },
    services: {
      title: "Hizmet Alanlarımız",
      description:
        "HCC Avukatlık Bürosu, müvekkillerine geniş kapsamlı hukuki danışmanlık ve avukatlık hizmetleri sunmaktadır. Farklı hukuk alanlarında uzmanlaşmış ekibimizle, her ihtiyaca özel stratejik çözümler üretmekteyiz.",
      
      
      items: [
        {
          title: "Aile ve Miras Hukuku",
          description:
            "Aile hukuku uyu\u015fmazl\u0131klar\u0131, miras planlamas\u0131, tereke payla\u015f\u0131m\u0131 ve miras\u0131n intikali s\u00fcre\u00e7lerinde m\u00fcvekkillere \u00f6zenli, gizlili\u011fe duyarl\u0131 ve sonu\u00e7 odakl\u0131 hukuki destek sunuyoruz.",
        },
        {
          title: "Bilgi Teknolojileri ve \u0130nternet Hukuku",
          description:
            "E-ticaret, dijital platformlar, yaz\u0131l\u0131m s\u00f6zle\u015fmeleri, i\u00e7erik sorumlulu\u011fu ve \u00e7evrimi\u00e7i ticari faaliyetlere ili\u015fkin hukuki s\u00fcre\u00e7lerde g\u00fcncel mevzuata uygun dan\u0131\u015fmanl\u0131k sa\u011fl\u0131yoruz.",
        },
        {
          title: "Dava Takibi ve Uyu\u015fmazl\u0131k \u00c7\u00f6z\u00fcm\u00fc",
          description:
            "Ticari, idari ve \u00f6zel hukuk uyu\u015fmazl\u0131klar\u0131nda dava \u00f6ncesi de\u011ferlendirme, dava takibi ve alternatif \u00e7\u00f6z\u00fcm yollar\u0131n\u0131 birlikte ele alan stratejik temsil hizmeti sunuyoruz.",
        },
        {
          title: "Fikri M\u00fclkiyet Hukuku",
          description:
            "Marka, patent, tasar\u0131m ve telif haklar\u0131n\u0131n korunmas\u0131, lisans s\u00f6zle\u015fmeleri ile hak ihlallerine kar\u015f\u0131 \u00f6nleyici ve koruyucu hukuki \u00e7\u00f6z\u00fcmler geli\u015ftiriyoruz.",
        },
        {
          title: "Gayrimenkul Hukuku",
          description:
            "Ta\u015f\u0131nmaz al\u0131m sat\u0131m\u0131, kira ili\u015fkileri, proje geli\u015ftirme s\u00fcre\u00e7leri ve tapu i\u015flemlerine ili\u015fkin hukuki riskleri \u00f6ng\u00f6ren kapsaml\u0131 dan\u0131\u015fmanl\u0131k hizmeti veriyoruz.",
        },
        {
          title: "\u0130cra ve \u0130flas Hukuku",
          description:
            "Alacak tahsili, icra takipleri, konkordato ve iflas s\u00fcre\u00e7lerinde m\u00fcvekkillerin hak ve menfaatlerini korumaya y\u00f6nelik etkin ve sistematik hukuki temsil sunuyoruz.",
        },
        {
          title: "\u0130\u015f Hukuku",
          description:
            "\u0130\u015f s\u00f6zle\u015fmeleri, i\u015fyeri uygulamalar\u0131, fesih s\u00fcre\u00e7leri ve i\u015f\u00e7i-i\u015fveren uyu\u015fmazl\u0131klar\u0131nda i\u015f hayat\u0131n\u0131n ihtiya\u00e7lar\u0131na uygun hukuki destek sa\u011fl\u0131yoruz.",
        },
        {
          title: "Ki\u015fisel Verilerin Korunmas\u0131",
          description:
            "KVKK uyum s\u00fcre\u00e7leri, veri i\u015fleme faaliyetlerinin de\u011ferlendirilmesi, ayd\u0131nlatma ve saklama politikalar\u0131 ile veri g\u00fcvenli\u011fine ili\u015fkin hukuki risk y\u00f6netimi sunuyoruz.",
        },
        {
          title: "Mali ve Beyaz Yaka Su\u00e7lar\u0131",
          description:
            "Mali nitelikli su\u00e7lar, \u015firket y\u00f6neticilerine y\u00f6nelik soru\u015fturmalar ve beyaz yaka ceza dosyalar\u0131nda dikkatli, teknik ve itibari riskleri g\u00f6zeten savunma hizmeti veriyoruz.",
        },
        {
          title: "Ticaret ve \u015eirketler Hukuku",
          description:
            "\u015eirket kurulu\u015flar\u0131, kurumsal yap\u0131land\u0131rmalar, pay devri, birle\u015fme ve devralmalar ile ticari s\u00f6zle\u015fmelerin haz\u0131rlanmas\u0131nda stratejik hukuki dan\u0131\u015fmanl\u0131k sunuyoruz.",
        },
        {
          title: "T\u00fcketici Hukuku",
          description:
            "T\u00fcketici i\u015flemleri, sat\u0131\u015f ve hizmet s\u00f6zle\u015fmeleri ile ay\u0131pl\u0131 mal ve hizmetten kaynaklanan uyu\u015fmazl\u0131klarda dengeli ve \u00e7\u00f6z\u00fcm odakl\u0131 hukuki destek sa\u011fl\u0131yoruz.",
        },
        {
          title: "Vergi ve Mali Hizmetler",
          description:
            "Vergi uyu\u015fmazl\u0131klar\u0131, mali y\u00fck\u00fcm\u00fcl\u00fcklerin de\u011ferlendirilmesi ve idari ba\u015fvuru s\u00fcre\u00e7lerinde teknik boyutu g\u00fc\u00e7l\u00fc hukuki \u00e7\u00f6z\u00fcmler geli\u015ftiriyoruz.",
        },
      ],
    },
    industries: {
      title: "Sektörel Tecrübe",
      description:
        "Farklı sektörlerdeki müvekkillerin ihtiyaçlarına göre şekillenen hukuki destek sunuyoruz.",
      items: [
        "Teknoloji ve dijital hizmetler",
        "Gayrimenkul ve inşaat",
        "Perakende ve ticaret",
        "Aile şirketleri ve girişimler",
      ],
    },
    team: {
      title: "Ekibimiz",
      description:
        "HCC Avukatlık Bürosu, alanında uzman ve deneyimli kadrosuyla müvekkillerine güvenilir, etkin ve çözüm odaklı hukuki hizmet sunmaktadır.",
      pageIntro:
        "HCC Avukatlık Bürosu, farklı hukuk alanlarında çalışan uzman kadrosu ile müvekkillerine güvenilir, özenli ve sonuç odaklı hizmet sunmaktadır.",
      openProfile: "profili aç",
      closeProfile: "Profili kapat",
      profileLinkSoon: "Profil bağlantısı eklenecek",
      members: [
  {
    name: "Hasan Can Cebeci",
    role: "Kurucu ve Yönetici Avukat",
    description: "Bireysel ve kurumsal müvekkillere danışmanlık ve dava süreçlerinde stratejik hukuki çözümler sunmaktadır.",
    longDescription: "Av. Hasan Can Cebeci, bireysel ve kurumsal müvekkillere yönelik hukuki danışmanlık, uyuşmazlık çözümü ve dava takibi alanlarında kapsamlı hizmet sunmaktadır. Özellikle ticaret ve şirketler hukuku başta olmak üzere, farklı hukuk disiplinlerinde stratejik süreç yönetimi ile müvekkillerine etkin ve sonuç odaklı çözümler sağlamaktadır.",
    expertise: [
      "Ticaret ve Şirketler Hukuku",
      "İcra ve İflas Hukuku",
      "Gayrimenkul Hukuku",
      "İş Hukuku",
      "Aile ve Miras Hukuku"
    ],
    image: "/hasan.png",
    email: "can.cebeci@hcc.av.tr",
    officePhone: "0212 216 07 24"
  },
  {
    name: "Gerçek Onur Oy",
    role: "Avukat",
    description: "Bireysel ve kurumsal müvekkillere danışmanlık ve dava süreçlerinde etkin hukuki çözümler sunmaktadır.",
    longDescription: "Av. Gerçek Onur Oy, bireysel ve kurumsal müvekkillere yönelik hukuki danışmanlık, uyuşmazlık çözümü ve dava takibi alanlarında faaliyet göstermektedir.",
    expertise: [
      "Aile Hukuku",
      "Gayrimenkul Hukuku",
      "Borçlar Hukuku",
      "İcra ve İflas Hukuku",
      "Ticaret ve Şirketler Hukuku"
    ],
    image: "/onur.png",
    email: "gercek.oy@hcc.av.tr",
    officePhone: "0212 216 07 24"
  },
  {
    name: "Osman Oy",
    role: "Avukat",
    description: "Uzun yıllara dayanan mesleki tecrübesiyle hukuk, finans ve gayrimenkul alanlarında danışmanlık sunmaktadır.",
    longDescription: "Av. Osman Oy, 1974 yılından bu yana avukatlık mesleğini sürdürmekte olup, hukuk, finans ve gayrimenkul alanlarında müvekkillerine danışmanlık hizmeti sunmaktadır.",
    expertise: [
      "Hukuk",
      "Finans",
      "Gayrimenkul Danışmanlığı"
    ],
    image: "/osmann.png",
    email: "",
    officePhone: "0212 216 07 24",
    startYear: "1974"
  },
  {
    name: "M. Batuhan Çelik",
    role: "Stajyer Avukat",
    description: "Çeşitli özel hukuk alanlarında uyuşmazlık çözümü ve dava süreçlerinde çalışmalarını sürdürmektedir.",
    longDescription: "Stajyer Avukat Muhammed Batuhan Çelik, ceza hukuku, aile hukuku ve icra-iflas hukuku başta olmak üzere çeşitli alanlarda çalışmalarına devam etmektedir.",
    expertise: [
      "Ceza Hukuku",
      "Aile Hukuku",
      "Miras Hukuku",
      "İcra ve İflas Hukuku"
    ],
    image: "/batuhan.png",
    email: "batuhan.celik@hcc.av.tr",
    officePhone: "0212 216 07 24"
  },
  {
    name: "Zümra Miray Feyzi",
    role: "Stajyer Avukat",
    description: "Ticaret hukuku ve iş hukuku alanlarında dava takibi ve uyuşmazlık çözümüne yönelik çalışmalar yürütmektedir.",
    longDescription: "Stajyer Avukat Zümra Miray Feyzi, ticaret ve şirketler hukuku ile iş hukuku alanlarında çalışmalarını sürdürmektedir.",
    expertise: [
      "Ticaret ve Şirketler Hukuku",
      "İş Hukuku",
      "Rekabet Hukuku"
    ],
    image: "/zumra.png",
    email: "zumra.feyzi@hcc.av.tr",
    officePhone: "0212 216 07 24"
  }
]
    },
    insights: {
      title: "Makalelerimiz",
      description:
        "HCC Avukatlık Bürosu olarak, hukukun farklı alanlarında hazırladığımız makaleler bu sayfada yer almaktadır. Aşağıda güncel içeriklerimize ulaşabilirsiniz.",
      viewAll: "Tüm Makaleleri Gör",
      readMore: "Devamı",
      continueReading: "Devamını Oku",
      loadMore: "Daha Fazlasını Gör",
      imagePlaceholder: "Görsel",
      collectionLabel: "HCC Yayınları",
      featured: {
        title: "Tasarrufun İptali Davalarında Arabuluculuk",
        excerpt:
          "Tasarrufun iptali davalarında arabuluculuğun uygulanabilirliği, dava şartı olup olmadığı ve güncel hukuki değerlendirmeler üzerine kısa bir inceleme.",
        category: "Hukuki Vizyon",
        date: "18 Şubat 2024",
        image: "/articles/makale-5.jpg",
      },
      articles: [
        {
          title: "Beyaza İmza ve Okunmadan İmzalanan Belge",
          excerpt:
            "Beyaza atılan imzanın hukuki sonuçları, okunmadan imzalanan belgelerde sorumluluk ve uygulamadaki temel riskler üzerine değerlendirme.",
          category: "Borçlar Hukuku",
          date: "12 Mayıs 2024",
          image: "/articles/beyaza-imza.jpg",
        },
        {
          title: "Kötü Niyet Tazminatı",
          excerpt:
            "İş ilişkisinin sona ermesinde kötü niyet tazminatının şartları, uygulama alanı ve işçi ile işveren bakımından hukuki sonuçları.",
          category: "İş Hukuku",
          date: "08 Nisan 2024",
          image: "/articles/kotu-niyet-tazminati.jpg",
        },
        {
          title: "Ön Ödemeli Konut Satış Sözleşmesi",
          excerpt:
            "Ön ödemeli konut satış sözleşmelerinin hukuki niteliği, tüketicinin korunması ve cayma hakkı bakımından dikkat edilmesi gereken başlıca noktalar.",
          category: "Tüketici Hukuku",
          date: "21 Mart 2024",
          image: "/articles/on-odemeli-konut-satis-sozlesmesi.jpg",
        },
        {
          title: "Şirketlerde Yapısal Değişiklikler ve Ticaret Siciline Tescil",
          excerpt:
            "Birleşme, bölünme, tür değiştirme ve benzeri yapısal değişikliklerin ticaret siciline tescil süreci ile hukuki etkilerine genel bakış.",
          category: "Ticaret Hukuku",
          date: "05 Mart 2024",
          image: "/articles/sirketlerde-yapisal-degisiklikler.jpg",
        },
        {
          title: "Tasarrufun İptali Davalarında Arabuluculuk",
          excerpt:
            "Tasarrufun iptali davalarında arabuluculuğun sınırları, dava süreçlerine etkisi ve uygulamada karşılaşılan temel tartışma başlıkları.",
          category: "İcra ve İflas Hukuku",
          date: "18 Şubat 2024",
          image: "/articles/makale-5.jpg",
        },
      ],
      loadMoreNote:
        "Yeni makaleler yayınlandığında sayfalama veya liste genişletmesi bağlanmalıdır.",
    },
    contact: {
      title: "İletişime Geçin",
      description:
        "Hukuki ihtiyaçlarınız doğrultusunda bizimle iletişime geçebilirsiniz. Uzman ekibimiz, size en uygun çözümü sunmak için hazırdır.",
      pageIntro:
        "Hukuki ihtiyaçlarınız, danışmanlık talepleriniz veya iş birliği başvurularınız için bizimle iletişime geçebilirsiniz.",
      preMeetingTitle: "İlk Görüşme Öncesi",
      preMeetingDescription:
        "Talebinizin daha hızlı değerlendirilebilmesi için konu başlığınızı, mümkünse ilgili şirket veya kurum bilgilerini ve sizi hangi yolla geri aramamızı tercih ettiğinizi mesajınızda belirtebilirsiniz.",
      addressLabel: "Adres",
      address: ["Balmumcu Mah. Gazi Umur Paşa Sok. No:24/7", "Beşiktaş / İstanbul"],
      phoneLabel: "Telefon",
      phone: "0212 216 07 24",
      emailLabel: "E-posta",
      email: "info@hcc.av.tr",
      hoursLabel: "Çalışma Saatleri",
      hours: "Pazartesi - Cuma, 09:00 - 18:00",
      formTitle: "Bize Mesaj Gönderin",
      formDescription: "Taleplerinize en kısa sürede dönüş yapılacaktır.",
      nameLabel: "Ad Soyad",
      emailInputLabel: "E-posta",
      companyLabel: "Şirket / Kurum (Opsiyonel)",
      messageLabel: "Mesajınız",
      submit: "Mesaj Gönder",
      submitting: "Gönderiliyor...",
      consent:
        "Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz.",
      validation: {
        invalidFields: "Lütfen form alanlarını kontrol ediniz.",
        success:
          "Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçilecektir.",
        failure:
          "Mesajınız şu anda gönderilemedi. Lütfen daha sonra tekrar deneyiniz.",
        nameRequired: "Lütfen ad soyad bilgisini giriniz.",
        emailInvalid: "Lütfen geçerli bir e-posta adresi giriniz.",
        messageMin: "Mesajınız en az 10 karakter olmalıdır.",
        messageMax: "Mesajınız en fazla 2000 karakter olabilir.",
      },
    },
    cookieBanner: {
      message:
        "Bu web sitesi, deneyiminizi iyileştirmek ve temel site işlevlerini sürdürebilmek için çerezler kullanır.",
      accept: "Kabul Et",
      reject: "Reddet",
      details: "Detaylar",
    },
    footer: {
      summary:
        "HCC Avukatlık Bürosu, müvekkillerine etkin, güvenilir ve çözüm odaklı hukuki hizmetler sunmaktadır. Köklü geçmişi ve uzman kadrosu ile sürdürülebilir hukuki danışmanlık sağlamayı amaçlar.",
      servicesTitle: "Hizmetlerimiz",
      companyTitle: "Kurumsal",
      legalTitle: "Hukuki",
      services: [
        { name: "Şirketler Hukuku", routeKey: "services" },
        { name: "Uyuşmazlık Çözümü", routeKey: "services" },
        { name: "Fikri Mülkiyet Hukuku", routeKey: "services" },
        { name: "Kişisel Verilerin Korunması", routeKey: "services" },
        { name: "Rekabet Hukuku", routeKey: "services" },
        { name: "Finans Hukuku", routeKey: "services" },
      ],
      company: [
        { name: "Hakkımızda", routeKey: "about" },
        { name: "Ekibimiz", routeKey: "team" },
        { name: "Kariyer" },
        { name: "Yayınlar", routeKey: "articles" },
        { name: "İletişim", routeKey: "contact" },
      ],
      legal: [
        { name: "Gizlilik Politikası" },
        { name: "Kullanım Şartları" },
        { name: "Çerez Politikası" },
        { name: "Aydınlatma Metni" },
      ],
      copyright: "HCC Avukatlık Bürosu. Tüm hakları saklıdır.",
      disclaimer:
        "Bu web sitesinde yer alan bilgiler yalnızca bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.",
      socialSoonLinkedIn: "LinkedIn",
      socialSoonX: "X bağlantısı eklenecek",
    },
    pages: {
      aboutIntro:
        "HCC Avukatlık Bürosu, köklü hukuk birikimini güncel ihtiyaçlarla buluşturarak müvekkillerine güvenilir ve sürdürülebilir çözümler sunmaktadır.",
      aboutCards: [
        {
          title: "Çalışma Yaklaşımımız",
          description:
            "Her dosyayı somut ihtiyaçlar, sektör dinamikleri ve hukuki risk dengesi içinde ele alıyor; uygulanabilir, açık ve sürdürülebilir çözüm önerileri sunuyoruz.",
        },
        {
          title: "Müvekkil İletişimi",
          description:
            "Şeffaf bilgilendirme, öngörülebilir süreç yönetimi ve düzenli geri bildirim yaklaşımı ile hukuki süreci müvekkillerimiz için anlaşılır hale getirmeyi önemsiyoruz.",
        },
        {
          title: "Kurumsal Perspektif",
          description:
            "Bireysel ve kurumsal müvekkillerin değişen ihtiyaçlarına uyum sağlayan, stratejik düşünceyi pratik uygulama ile birleştiren bir hizmet anlayışı benimsiyoruz.",
        },
      ],
      aboutCta: "Bizimle İletişime Geçin",
      servicesIntro:
        "Müvekkillerimizin ihtiyaçlarına göre şekillenen danışmanlık ve dava takibi hizmetlerimizi, farklı hukuk alanlarında bütüncül bir bakış açısıyla sunuyoruz.",
      servicesCards: [
        {
          title: "Ön Değerlendirme",
          description:
            "Her talebi hukuki çerçeve, ticari etki ve süreç öncelikleri bakımından değerlendiriyor; yol haritasını açık şekilde belirliyoruz.",
        },
        {
          title: "Stratejik Planlama",
          description:
            "Danışmanlık ve temsil süreçlerini somut hedeflere göre yapılandırıyor, her aşamada hukuki riskleri ve olası sonuçları birlikte değerlendiriyoruz.",
        },
        {
          title: "Süreç Takibi",
          description:
            "Süreç boyunca düzenli bilgilendirme sağlayarak müvekkillerimizin karar alma sürecini destekliyor ve temsil sorumluluğunu titizlikle yürütüyoruz.",
        },
      ],
      servicesCta: "Talebinizi İletin",
      contactIntro:
        "Hukuki ihtiyaçlarınız, danışmanlık talepleriniz veya iş birliği başvurularınız için bizimle iletişime geçebilirsiniz.",
    },
  },
  en: {
    language: {
      localeName: "English",
      toggleLabel: "Change language",
      switchTo: "Türkçe",
      shortCurrent: "EN",
    },
    metadata: {
      home: {
        title: "HCC Law Office | Legal Services in Istanbul",
        description:
          "HCC Law Office provides reliable, strategic and solution-oriented legal services to individual and corporate clients.",
      },
      about: {
        title: "About Us",
        description:
          "Discover the history, working approach and institutional perspective of HCC Law Office.",
      },
      services: {
        title: "Our Services",
        description:
          "Explore the core legal services and practice areas offered by HCC Law Office.",
      },
      team: {
        title: "Our Team",
        description:
          "Meet the team of HCC Law Office and explore their areas of expertise.",
      },
      articles: {
        title: "Articles",
        description:
          "Browse current legal articles prepared by HCC Law Office.",
      },
      contact: {
        title: "Contact",
        description:
          "Get in touch with HCC Law Office for your legal needs and inquiries.",
      },
    },
    navbar: {
      about: "About",
      services: "Services",
      team: "Team",
      articles: "Articles",
      contact: "Contact",
      contactCta: "Get in Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "Strategic and Strong",
      highlight: "Legal Solutions",
      description:
        "We deliver reliable, high-quality legal services with a commercial perspective. We provide effective counsel in complex legal processes at both local and international scale.",
      servicesButton: "Our Services",
      contactButton: "Get in Touch",
    },
    about: {
      title: "A Deep-Rooted Legacy,",
      highlight: "A Reliable Legal Approach",
      paragraphs: [
        "HCC Law Office is a law firm grounded in the universal principles of law and committed to delivering effective, reliable and sustainable solutions to its clients. Our roots trace back to Attorney Ömer Baş, who entered the profession in 1955, and to a strong legal tradition spanning three generations.",
        "Guided by the values and professional perspective shaped by this legacy, HCC Law Office provides consultancy and litigation services across a broad range of legal practice areas for individuals and companies alike.",
        "Our office focuses not only on resolving existing disputes but also on identifying potential risks in advance through a preventive law approach and managing legal processes strategically. We evaluate each matter on its own merits and adopt a client-oriented, solution-based perspective.",
        "With a working culture centered on human relationships, we act with a service approach based on trust, transparency and ethics, aiming to build long-term solution partnerships with our clients beyond legal representation.",
      ],
      indicators: [
        "Transparent communication and process management",
        "Client-focused service approach",
        "Fast and effective solutions",
        "Experienced and expert team",
      ],
      stats: [
        { value: "1955", label: "ROOTED LEGAL TRADITION" },
        { value: "3 Generations", label: "PROFESSIONAL LEGACY" },
        { value: "Effective", label: "SOLUTION-ORIENTED APPROACH" },
        { value: "Reliable", label: "SERVICE MINDSET" },
      ],
    },
    services: {
      title: "Our Practice Areas",
      description:
        "HCC Law Office provides broad legal advisory and advocacy services to its clients. With a team specialized in different areas of law, we develop strategic solutions tailored to each need.",
      items: [
        {
          title: "Family and Inheritance Law",
          description:
            "We provide discreet and carefully structured legal counsel in family law disputes, inheritance planning, estate division and succession matters, with a strong focus on protecting personal and financial interests.",
        },
        {
          title: "Information Technology and Internet Law",
          description:
            "We advise on e-commerce, digital platforms, software agreements, online content liability and technology-related legal processes in line with current regulatory and commercial requirements.",
        },
        {
          title: "Litigation and Dispute Resolution",
          description:
            "We offer strategic representation in commercial, administrative and private law disputes, covering pre-litigation assessment, court proceedings and alternative dispute resolution processes.",
        },
        {
          title: "Intellectual Property Law",
          description:
            "We develop preventive and protective legal strategies for trademarks, patents, designs and copyrights, including licensing arrangements and actions against infringement.",
        },
        {
          title: "Real Estate Law",
          description:
            "We provide comprehensive legal support in real estate transactions, lease relationships, title deed matters and project development processes, with close attention to legal risk and transactional security.",
        },
        {
          title: "Enforcement and Bankruptcy Law",
          description:
            "We represent clients in debt recovery, enforcement proceedings, concordat and bankruptcy matters through an efficient and structured legal approach aimed at protecting commercial interests.",
        },
        {
          title: "Employment Law",
          description:
            "We advise on employment contracts, workplace practices, termination procedures and labour disputes, delivering practical legal support aligned with business and workforce needs.",
        },
        {
          title: "Personal Data Protection",
          description:
            "We assist with data protection compliance, the assessment of processing activities, privacy documentation and legal risk management relating to data security obligations.",
        },
        {
          title: "Financial and White-Collar Crimes",
          description:
            "We provide careful and technically grounded defence and advisory services in financial crime investigations and white-collar criminal matters, with due regard for legal and reputational risk.",
        },
        {
          title: "Commercial and Corporate Law",
          description:
            "We advise on company formation, corporate restructuring, share transfers, mergers and acquisitions and the preparation of commercial agreements from a strategic business-law perspective.",
        },
        {
          title: "Consumer Law",
          description:
            "We offer balanced and solution-oriented legal support in consumer transactions, sales and service agreements, and disputes arising from defective goods or services.",
        },
        {
          title: "Tax and Financial Services",
          description:
            "We develop technically sound legal solutions for tax disputes, financial obligations and administrative application processes, with a focus on compliance and effective representation.",
        },
      ],
    },
    industries: {
      title: "Industry Experience",
      description:
        "We provide legal support shaped around the needs of clients operating in different sectors.",
      items: [
        "Technology and digital services",
        "Real estate and construction",
        "Retail and commerce",
        "Family businesses and ventures",
      ],
    },
    team: {
      title: "Our Team",
      description:
        "HCC Law Office delivers reliable, effective and solution-oriented legal services through its experienced and specialized team.",
      pageIntro:
        "HCC Law Office serves its clients with a team of professionals working across different areas of law, combining care, reliability and a results-oriented mindset.",
      openProfile: "open profile",
      closeProfile: "Close profile",
      profileLinkSoon: "Profile link will be added",
      members: [
        {
          name: "Hasan Can Cebeci",
          role: "Attorney at Law",
          image: "/hasan.png",
          description:
            "Advises individual and corporate clients with a strategic, meticulous and solutions-focused approach across a broad range of legal matters.",
          longDescription:
            "Hasan Can Cebeci approaches legal matters with careful analysis, commercial awareness and a strong focus on practical outcomes, providing representation and advisory support tailored to the needs of both individual and corporate clients.",
          expertise: ["Legal Advisory", "Litigation", "Strategic Case Management"],
          email: "can.cebeci@hcc.av.tr",
          officePhone: "0212 216 07 24",
        },
        {
          name: "Gerçek Onur Oy",
          role: "Attorney at Law",
          image: "/onur.png",
          description:
            "Works on dispute resolution, legal advisory and the effective management of contentious and non-contentious legal processes.",
          longDescription:
            "Gerçek Onur Oy supports clients with a measured and analytical approach to disputes, combining thorough legal review with clear guidance throughout negotiation, litigation and related proceedings.",
          expertise: ["Dispute Resolution", "Legal Assessment"],
          email: "gercek.oy@hcc.av.tr",
          officePhone: "0212 216 07 24",
        },
        {
          name: "Osman Oy",
          role: "Attorney at Law",
          image: "/osmann.png",
          description:
            "Applies a structured and forward-looking approach to identifying legal risk and safeguarding client interests at every stage of a matter.",
          longDescription:
            "Osman Oy focuses on risk assessment and preventive legal strategy, helping clients manage legal processes in a disciplined, organised and commercially conscious manner.",
          expertise: ["Risk Assessment", "Preventive Law"],
          email: "",
          officePhone: "0212 216 07 24",
          startYear: "1974",
        },
        {
          name: "M. Batuhan Çelik",
          role: "Trainee Attorney",
          image: "/batuhan.png",
          description:
            "Supports the team through legal research, document review and the careful preparation of case and advisory files.",
          longDescription:
            "M. Batuhan Çelik contributes to the office through disciplined legal research, attentive file preparation and reliable support across day-to-day legal and operational workflows.",
          expertise: ["Legal Research", "File Preparation"],
          email: "batuhan.celik@hcc.av.tr",
          officePhone: "0212 216 07 24",
        },
        {
          name: "Zümra Miray Feyzi",
          role: "Trainee Attorney",
          image: "/zumra.png",
          description:
            "Provides support in documentation, legal review and the organisation of internal legal processes.",
          longDescription:
            "Zümra Miray Feyzi supports the office with a careful and organised working style, contributing to documentation, legal review and the smooth coordination of internal processes.",
          expertise: ["Documentation", "Legal Review"],
          email: "zumra.feyzi@hcc.av.tr",
          officePhone: "0212 216 07 24",
        },
      ],
    },
    insights: {
      title: "Articles",
      description:
        "At HCC Law Office, we publish articles across different areas of law. You can find our current content below.",
      viewAll: "View All Articles",
      readMore: "Read More",
      continueReading: "Continue Reading",
      loadMore: "Show More",
      imagePlaceholder: "Image",
      collectionLabel: "HCC Publications",
      featured: {
        title: "Mediation in Actions for Annulment of Disposition",
        excerpt:
          "A concise review of whether mediation is applicable in actions for annulment of disposition, whether it constitutes a procedural requirement, and current legal evaluations.",
        category: "Legal Perspective",
        date: "18 February 2024",
        image: "/articles/makale-5.jpg",
      },
      articles: [
        {
          title: "Blank Signature and Signing a Document Without Reading",
          excerpt:
            "An overview of the legal consequences of a blank signature, liability in documents signed without reading, and the main practical risks involved.",
          category: "Law of Obligations",
          date: "12 May 2024",
          image: "/articles/beyaza-imza.jpg",
        },
        {
          title: "Bad Faith Compensation",
          excerpt:
            "A general review of the conditions, scope and legal consequences of bad faith compensation in employment relationships.",
          category: "Employment Law",
          date: "08 April 2024",
          image: "/articles/kotu-niyet-tazminati.jpg",
        },
        {
          title: "Prepaid Housing Sale Agreement",
          excerpt:
            "Key points regarding the legal nature of prepaid housing sale agreements, consumer protection and the right of withdrawal.",
          category: "Consumer Law",
          date: "21 March 2024",
          image: "/articles/on-odemeli-konut-satis-sozlesmesi.jpg",
        },
        {
          title: "Structural Changes in Companies and Trade Registry Registration",
          excerpt:
            "A general overview of the registration process and legal effects of mergers, demergers, conversion and other structural changes in companies.",
          category: "Commercial Law",
          date: "05 March 2024",
          image: "/articles/sirketlerde-yapisal-degisiklikler.jpg",
        },
        {
          title: "Mediation in Actions for Annulment of Disposition",
          excerpt:
            "A review of the limits of mediation in annulment actions, its impact on litigation and the key issues encountered in practice.",
          category: "Enforcement and Bankruptcy Law",
          date: "18 February 2024",
          image: "/articles/makale-5.jpg",
        },
      ],
      loadMoreNote:
        "Pagination or list expansion should be connected once new articles are published.",
    },
    contact: {
      title: "Get in Touch",
      description:
        "You may contact us regarding your legal needs. Our team is ready to provide the most suitable solution for you.",
      pageIntro:
        "You may contact us for your legal needs, advisory requests or collaboration inquiries.",
      preMeetingTitle: "Before the Initial Meeting",
      preMeetingDescription:
        "To help us review your matter more efficiently, you may include the subject of your inquiry, relevant company or institution details if any, and your preferred callback method in your message.",
      addressLabel: "Address",
      address: ["Balmumcu Mah. Gazi Umur Paşa Sok. No:24/7", "Beşiktaş / Istanbul"],
      phoneLabel: "Phone",
      phone: "0212 216 07 24",
      emailLabel: "Email",
      email: "info@hcc.av.tr",
      hoursLabel: "Office Hours",
      hours: "Monday - Friday, 09:00 - 18:00",
      formTitle: "Send Us a Message",
      formDescription: "We will get back to you as soon as possible.",
      nameLabel: "Full Name",
      emailInputLabel: "Email",
      companyLabel: "Company / Institution (Optional)",
      messageLabel: "Your Message",
      submit: "Send Message",
      submitting: "Sending...",
      consent:
        "By submitting this form, you agree to our privacy policy.",
      validation: {
        invalidFields: "Please review the form fields.",
        success:
          "Your message has been received. We will contact you as soon as possible.",
        failure:
          "Your message could not be sent at the moment. Please try again later.",
        nameRequired: "Please enter your full name.",
        emailInvalid: "Please enter a valid email address.",
        messageMin: "Your message must be at least 10 characters.",
        messageMax: "Your message must not exceed 2000 characters.",
      },
    },
    cookieBanner: {
      message:
        "This website uses cookies to improve your experience and maintain essential site functionality.",
      accept: "Accept",
      reject: "Reject",
      details: "Details",
    },
    footer: {
      summary:
        "HCC Law Office provides effective, reliable and solution-oriented legal services to its clients. With its deep-rooted history and expert team, the office aims to deliver sustainable legal advisory services.",
      servicesTitle: "Services",
      companyTitle: "Corporate",
      legalTitle: "Legal",
      services: [
        { name: "Corporate Law", routeKey: "services" },
        { name: "Dispute Resolution", routeKey: "services" },
        { name: "Intellectual Property", routeKey: "services" },
        { name: "Personal Data Protection", routeKey: "services" },
        { name: "Competition Law", routeKey: "services" },
        { name: "Finance Law", routeKey: "services" },
      ],
      company: [
        { name: "About", routeKey: "about" },
        { name: "Team", routeKey: "team" },
        { name: "Careers" },
        { name: "Publications", routeKey: "articles" },
        { name: "Contact", routeKey: "contact" },
      ],
      legal: [
        { name: "Privacy Policy" },
        { name: "Terms of Use" },
        { name: "Cookie Policy" },
        { name: "Privacy Notice" },
      ],
      copyright: "HCC Law Office. All rights reserved.",
      disclaimer:
        "The information provided on this website is for general information purposes only and does not constitute legal advice.",
      socialSoonLinkedIn: "LinkedIn",
      socialSoonX: "X link will be added",
    },
    pages: {
      aboutIntro:
        "HCC Law Office combines a deep-rooted legal legacy with present-day needs to deliver reliable and sustainable solutions for its clients.",
      aboutCards: [
        {
          title: "Our Working Approach",
          description:
            "We evaluate each matter within the context of concrete needs, sector dynamics and legal risk, offering practical, clear and sustainable solutions.",
        },
        {
          title: "Client Communication",
          description:
            "We value making legal processes understandable to our clients through transparent communication, predictable process management and regular updates.",
        },
        {
          title: "Institutional Perspective",
          description:
            "We adopt a service approach that adapts to the evolving needs of individual and corporate clients, combining strategic thinking with practical execution.",
        },
      ],
      aboutCta: "Contact Us",
      servicesIntro:
        "We provide advisory and litigation services shaped around our clients' needs through a comprehensive perspective across different areas of law.",
      servicesCards: [
        {
          title: "Initial Assessment",
          description:
            "We review each request in terms of legal framework, business impact and process priorities, then set out the roadmap clearly.",
        },
        {
          title: "Strategic Planning",
          description:
            "We structure advisory and representation processes around concrete objectives, evaluating legal risks and possible outcomes at every stage.",
        },
        {
          title: "Process Follow-Up",
          description:
            "We support our clients' decision-making with regular updates throughout the process and carry out representation responsibilities with diligence.",
        },
      ],
      servicesCta: "Share Your Request",
      contactIntro:
        "You may contact us for your legal needs, advisory requests or collaboration inquiries.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return siteContent[locale];
}

export function getArticles(locale: Locale) {
  return getLocalizedArticles(locale);
}

export function getFeaturedArticle(locale: Locale) {
  return getLocalizedFeaturedArticle(locale);
}

export function getTeamMembers(locale: Locale) {
  return getDictionary(locale).team.members;
}

export function buildPageMetadata(
  locale: Locale,
  routeKey: RouteKey,
): Metadata {
  const dictionary = getDictionary(locale);
  const meta = dictionary.metadata[routeKey];
  const canonicalPath = getPath(locale, routeKey);
  const trPath = getPath("tr", routeKey);
  const enPath = getPath("en", routeKey);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        tr: trPath,
        en: enPath,
        "x-default": trPath,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl(canonicalPath),
      siteName: locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [
        {
          url: "/HCC_LOGO-removebg-preview.png",
          width: 1200,
          height: 630,
          alt: locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/HCC_LOGO-removebg-preview.png"],
    },
  };
}
