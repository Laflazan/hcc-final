import type { Metadata } from "next";

export type Locale = "tr" | "en";
export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "team"
  | "articles"
  | "contact";

const SITE_URL = "https://hcc.av.tr";

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
            "Miras planlaması, paylaşım ve aile hukukuna ilişkin uyuşmazlıklarda kapsamlı danışmanlık ve temsil.",
        },
        {
          title: "Bilgi Teknolojileri ve İnternet Hukuku",
          description:
            "E-ticaret, dijital platformlar ve bilişim hukuku kapsamında sözleşmeler ve hukuki süreç yönetimi.",
        },
        {
          title: "Dava Takibi ve Uyuşmazlık Çözümü",
          description:
            "Ticari, idari ve özel hukuk alanlarında dava takibi ve stratejik uyuşmazlık çözümü.",
        },
        {
          title: "Fikri Mülkiyet Hukuku",
          description:
            "Marka, patent ve telif haklarının korunması ve ihlallerin önlenmesine yönelik hukuki hizmetler.",
        },
        {
          title: "Gayrimenkul Hukuku",
          description:
            "Taşınmaz işlemleri, proje geliştirme ve kira ilişkilerine dair hukuki danışmanlık.",
        },
        {
          title: "İcra ve İflas Hukuku",
          description:
            "Alacak tahsili, icra takipleri ve iflas süreçlerinin etkin yönetimi.",
        },
        {
          title: "İş Hukuku",
          description:
            "İşçi-işveren ilişkileri, sözleşmeler ve iş uyuşmazlıklarında hukuki destek.",
        },
        {
          title: "Kişisel Verilerin Korunması",
          description:
            "KVKK uyum süreçleri, veri güvenliği ve hukuki risk yönetimi.",
        },
        {
          title: "Mali ve Beyaz Yaka Suçları",
          description:
            "Finansal suçlar ve ceza soruşturmalarında savunma ve danışmanlık.",
        },
        {
          title: "Ticaret ve Şirketler Hukuku",
          description:
            "Şirket kuruluşları, birleşme ve devralmalar (M&A) ve ticari sözleşmeler.",
        },
        {
          title: "Tüketici Hukuku",
          description:
            "Tüketici uyuşmazlıkları ve sözleşmelere ilişkin hukuki danışmanlık.",
        },
        {
          title: "Vergi ve Mali Hizmetler",
          description:
            "Vergi ihtilafları ve mali süreçlere ilişkin hukuki çözümler.",
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
          role: "Avukat",
          image: "/hasan.png",
          description:
            "Bireysel ve kurumsal müvekkillere yönelik hukuki süreçlerde stratejik, titiz ve çözüm odaklı danışmanlık sunmaktadır.",
          longDescription:
            "Hasan Can Cebeci, bireysel ve kurumsal müvekkillere yönelik hukuki süreçlerde stratejik analiz ve sonuç odaklı temsil anlayışıyla çalışmalarını sürdürmektedir.",
          expertise: [
            "Hukuki Danışmanlık",
            "Dava Takibi",
            "Stratejik Süreç Yönetimi",
          ],
          email: "info@hcc.av.tr",
        },
        {
          name: "Gerçek Onur Oy",
          role: "Avukat",
          image: "/onur.png",
          description:
            "Uyuşmazlık çözümü, hukuki danışmanlık ve dava süreçlerinin etkin şekilde yönetilmesi alanlarında çalışmalar yürütmektedir.",
          longDescription:
            "Uyuşmazlık çözümü ve dava süreçlerinde analitik yaklaşımı ile müvekkillerine güven veren bir temsil sunmaktadır.",
          expertise: ["Uyuşmazlık Çözümü", "Hukuki İnceleme"],
          email: "info@hcc.av.tr",
        },
        {
          name: "Osman Oy",
          role: "Avukat",
          image: "/osmann.png",
          description:
            "Hukuki risklerin önceden tespiti ve müvekkil menfaatlerinin korunmasına yönelik sistematik bir yaklaşım benimser.",
          longDescription:
            "Risk analizi ve önleyici hukuk alanında uzmanlaşmış olup süreçleri planlı şekilde yönetir.",
          expertise: ["Risk Analizi", "Önleyici Hukuk"],
          email: "info@hcc.av.tr",
        },
        {
          name: "M. Batuhan Çelik",
          role: "Stajyer Avukat",
          image: "/batuhan.png",
          description:
            "Araştırma ve dosya hazırlığı konularında ekibe destek sağlar.",
          longDescription:
            "Hukuki araştırma ve operasyonel süreçlerde disiplinli çalışmasıyla katkı sağlar.",
          expertise: ["Araştırma", "Dosya Hazırlığı"],
          email: "info@hcc.av.tr",
        },
        {
          name: "Zümra Miray Feyzi",
          role: "Stajyer Avukat",
          image: "/zumra.png",
          description:
            "Dokümantasyon ve hukuki inceleme süreçlerinde destek sağlar.",
          longDescription:
            "Ofis içi operasyonlarda düzenli ve dikkatli çalışmasıyla sürece katkı sunar.",
          expertise: ["Dokümantasyon", "Hukuki İnceleme"],
          email: "info@hcc.av.tr",
        },
      ],
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
      socialSoonLinkedIn: "LinkedIn bağlantısı eklenecek",
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
            "Comprehensive advisory and representation in inheritance planning, division matters and family law disputes.",
        },
        {
          title: "Information Technology and Internet Law",
          description:
            "Contracts and legal process management for e-commerce, digital platforms and IT law matters.",
        },
        {
          title: "Litigation and Dispute Resolution",
          description:
            "Litigation follow-up and strategic dispute resolution in commercial, administrative and private law matters.",
        },
        {
          title: "Intellectual Property Law",
          description:
            "Legal services for protecting trademarks, patents and copyrights and preventing infringements.",
        },
        {
          title: "Real Estate Law",
          description:
            "Legal advice on real estate transactions, project development and lease relationships.",
        },
        {
          title: "Enforcement and Bankruptcy Law",
          description:
            "Efficient management of debt recovery, enforcement proceedings and bankruptcy processes.",
        },
        {
          title: "Employment Law",
          description:
            "Legal support on employer-employee relations, contracts and employment disputes.",
        },
        {
          title: "Personal Data Protection",
          description:
            "Compliance processes, data security and legal risk management under personal data protection law.",
        },
        {
          title: "Financial and White-Collar Crimes",
          description:
            "Defense and advisory services in financial crimes and criminal investigations.",
        },
        {
          title: "Commercial and Corporate Law",
          description:
            "Company formations, mergers and acquisitions (M&A) and commercial agreements.",
        },
        {
          title: "Consumer Law",
          description:
            "Legal advisory services on consumer disputes and agreements.",
        },
        {
          title: "Tax and Financial Services",
          description:
            "Legal solutions for tax disputes and financial processes.",
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
            "Provides strategic, meticulous and solution-oriented legal counsel for individual and corporate clients.",
          longDescription:
            "Hasan Can Cebeci continues his work with a strategic analysis and results-oriented representation approach in legal processes concerning both individual and corporate clients.",
          expertise: ["Legal Advisory", "Litigation", "Strategic Process Management"],
          email: "info@hcc.av.tr",
        },
        {
          name: "Gerçek Onur Oy",
          role: "Attorney at Law",
          image: "/onur.png",
          description:
            "Works on dispute resolution, legal advisory and effective management of litigation processes.",
          longDescription:
            "Offers a reassuring representation style to clients through an analytical approach in dispute resolution and litigation matters.",
          expertise: ["Dispute Resolution", "Legal Review"],
          email: "info@hcc.av.tr",
        },
        {
          name: "Osman Oy",
          role: "Attorney at Law",
          image: "/osmann.png",
          description:
            "Adopts a systematic approach focused on identifying legal risks in advance and protecting client interests.",
          longDescription:
            "Specializes in risk analysis and preventive law, managing processes in a planned and disciplined manner.",
          expertise: ["Risk Analysis", "Preventive Law"],
          email: "info@hcc.av.tr",
        },
        {
          name: "M. Batuhan Çelik",
          role: "Trainee Attorney",
          image: "/batuhan.png",
          description:
            "Supports the team in legal research and file preparation tasks.",
          longDescription:
            "Contributes through disciplined work in legal research and operational processes.",
          expertise: ["Research", "File Preparation"],
          email: "info@hcc.av.tr",
        },
        {
          name: "Zümra Miray Feyzi",
          role: "Trainee Attorney",
          image: "/zumra.png",
          description:
            "Provides support in documentation and legal review processes.",
          longDescription:
            "Contributes to the workflow through careful and organized support in office operations.",
          expertise: ["Documentation", "Legal Review"],
          email: "info@hcc.av.tr",
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
      socialSoonLinkedIn: "LinkedIn link will be added",
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
  return getDictionary(locale).insights.articles;
}

export function getFeaturedArticle(locale: Locale) {
  return getDictionary(locale).insights.featured;
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
