import type { Metadata, MetadataRoute } from "next";
import { getDictionary, type Locale } from "@/lib/site";

const SITE_URL = "https://hcc.av.tr";

type ServiceSection = {
  heading?: string;
  paragraphs: string[];
};

type LocalizedServiceMeta = {
  slug: string;
  longDescription: string;
  sections: ServiceSection[];
};

type ServiceRecord = {
  id: string;
  iconKey: string;
  relatedIds?: string[];
  locales: Record<Locale, LocalizedServiceMeta>;
};

export type ServiceListItem = {
  title: string;
  slug: string;
  shortDescription: string;
  href: string;
  iconKey: string;
};

export type ServiceDetail = ServiceListItem & {
  longDescription: string;
  sections: ServiceSection[];
  relatedServices: ServiceListItem[];
  alternateHref: string;
};

const serviceRecords: ServiceRecord[] = [
  {
    id: "family-and-inheritance",
    iconKey: "scale",
    relatedIds: ["consumer-law", "real-estate-law"],
    locales: {
      tr: {
        slug: "aile-ve-miras-hukuku",
        longDescription:
          "Aile ve miras hukuku, kişisel ilişkiler ile malvarlığına ilişkin sonuçların birlikte değerlendirildiği hassas bir alandır. HCC Avukatlık Bürosu, aile içi uyuşmazlıklar ve mirasın paylaşımına ilişkin süreçlerde hakların korunmasını, sürecin mümkün olan en dengeli biçimde yönetilmesini ve kalıcı hukuki çözümler oluşturulmasını hedefleyen danışmanlık ve temsil hizmeti sunmaktadır.",
        sections: [
          {
            heading: "Hizmetin Kapsamı",
            paragraphs: [
              "Evlilik sözleşmeleri, boşanma süreçleri, nafaka, velayet, mal rejiminin tasfiyesi ve aile hukukuna ilişkin diğer uyuşmazlıklarda, somut olayın özelliklerine uygun hukuki yol haritaları oluşturuyoruz.",
              "Miras hukuku alanında ise vasiyetname hazırlanması, tereke tespiti, mirasın paylaşımı, tenkis ve mirasçılık ilişkilerine dair uyuşmazlıklarda kapsamlı hukuki destek sağlıyoruz.",
            ],
          },
          {
            heading: "Yaklaşımımız",
            paragraphs: [
              "Bu alandaki uyuşmazlıklarda yalnızca dava sürecine değil, taraflar arasındaki ilişkinin niteliğine ve gelecekte doğabilecek etkilerine de dikkat ediyoruz.",
              "Mümkün olan durumlarda uzlaşma ve alternatif çözüm yollarını değerlendiriyor; gerekli hâllerde ise müvekkillerimizin haklarını yargı mercileri önünde kararlılıkla temsil ediyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "family-and-inheritance-law",
        longDescription:
          "Family and inheritance law requires careful handling because personal relationships and patrimonial consequences often intersect. HCC Law Office provides advisory and representation services aimed at protecting rights, managing the process in a balanced manner and establishing sustainable legal solutions in family and succession-related matters.",
        sections: [
          {
            heading: "Scope of Service",
            paragraphs: [
              "We advise on marital agreements, divorce proceedings, maintenance, custody, liquidation of matrimonial property regimes and other family law disputes by building legal roadmaps tailored to the circumstances of each matter.",
              "In inheritance law, we provide comprehensive support in will drafting, estate determination, division of inheritance, reduction claims and disputes arising from heirship relationships.",
            ],
          },
          {
            heading: "Our Approach",
            paragraphs: [
              "In this field, we consider not only the litigation stage but also the nature of the relationship between the parties and the longer-term effects that may arise from the dispute.",
              "Where appropriate, we evaluate settlement and other alternative resolution methods, while firmly representing our clients before the courts when formal proceedings become necessary.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "technology-and-internet",
    iconKey: "lightbulb",
    relatedIds: ["data-protection", "intellectual-property"],
    locales: {
      tr: {
        slug: "bilgi-teknolojileri-ve-internet-hukuku",
        longDescription:
          "Bilgi teknolojileri ve internet hukuku, dijital faaliyetlerin hızla çeşitlenmesiyle birlikte teknik ve hukuki değerlendirmeyi bir arada gerektiren bir çalışma alanı hâline gelmiştir. HCC Avukatlık Bürosu, dijital platformlar, e-ticaret faaliyetleri, çevrimiçi içerikler ve bilişim temelli iş modelleri bakımından güncel mevzuata uyumlu hukuki destek sunmaktadır.",
        sections: [
          {
            heading: "Danışmanlık Başlıkları",
            paragraphs: [
              "E-ticaret sitelerinde ve dijital platformlarda ihtiyaç duyulan kullanıcı sözleşmeleri, üyelik metinleri, gizlilik politikaları ve benzeri hukuki belgelerin hazırlanmasına destek veriyoruz.",
              "Ayrıca dijital sözleşmelerin kurulması ve uygulanması, içerik sorumluluğu, bilişim kaynaklı uyuşmazlıklar ve çevrimiçi faaliyetlerin hukuki çerçevesi konusunda danışmanlık sağlıyoruz.",
            ],
          },
          {
            heading: "Risk ve Uyum Yönetimi",
            paragraphs: [
              "Dijital mecralarda doğabilecek hukuki risklerin önceden tespiti, iş süreçlerinin hukuki açıdan değerlendirilmesi ve uyuşmazlıkların etkili biçimde yönetilmesi bakımından müvekkillerimize yol gösteriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "information-technology-and-internet-law",
        longDescription:
          "Information technology and internet law has become an area that requires technical and legal assessment to be addressed together as digital activity continues to diversify. HCC Law Office provides legal support aligned with current legislation for digital platforms, e-commerce activities, online content and technology-based business models.",
        sections: [
          {
            heading: "Advisory Scope",
            paragraphs: [
              "We assist with the preparation of user agreements, membership terms, privacy policies and similar legal documentation required by e-commerce websites and digital platforms.",
              "We also advise on the formation and performance of digital contracts, content liability, technology-related disputes and the legal framework applicable to online activities.",
            ],
          },
          {
            heading: "Risk and Compliance Management",
            paragraphs: [
              "We guide clients in identifying legal risks arising in digital environments at an early stage, evaluating operational processes from a legal perspective and managing disputes effectively.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "litigation-and-dispute-resolution",
    iconKey: "gavel",
    relatedIds: ["employment-law", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "dava-takibi-ve-uyusmazlik-cozumu",
        longDescription:
          "Uyuşmazlıkların doğru stratejiyle yönetilmesi, hak kayıplarının önlenmesi ve ticari ya da kişisel menfaatlerin korunması bakımından belirleyici önemdedir. HCC Avukatlık Bürosu, gerçek ve tüzel kişiler için dava takibi, hukuki danışmanlık ve uyuşmazlık çözümü süreçlerinde sistemli ve sonuç odaklı temsil sunmaktadır.",
        sections: [
          {
            heading: "Temsil ve Süreç Yönetimi",
            paragraphs: [
              "Adli ve idari yargı mercileri ile tahkim süreçlerinde dava öncesi değerlendirme, delil analizi, dava stratejisinin kurulması ve dosya takibi hizmetleri sunuyoruz.",
              "Her uyuşmazlıkta hukuki zemini, ticari etkileri ve sürecin olası sonuçlarını birlikte değerlendirerek müvekkillerimizin menfaatlerini koruyan bir yol haritası oluşturuyoruz.",
            ],
          },
          {
            heading: "Alternatif Çözüm Yolları",
            paragraphs: [
              "Arabuluculuk, uzlaştırma ve müzakere gibi alternatif çözüm yöntemlerini de uyuşmazlığın niteliğine göre değerlendiriyor; zaman, maliyet ve ilişki yönetimi bakımından en uygun çözüm modelini belirlemeye çalışıyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "litigation-and-dispute-resolution",
        longDescription:
          "Managing disputes with the right strategy is decisive for preventing loss of rights and protecting commercial or personal interests. HCC Law Office provides structured and results-oriented representation for individuals and legal entities in litigation, legal advisory and dispute resolution processes.",
        sections: [
          {
            heading: "Representation and Process Management",
            paragraphs: [
              "We offer pre-litigation assessment, evidence analysis, litigation strategy development and file management before judicial and administrative authorities as well as in arbitration proceedings.",
              "In each dispute, we evaluate the legal framework, commercial impact and likely procedural outcomes together in order to establish a roadmap that protects our clients' interests.",
            ],
          },
          {
            heading: "Alternative Resolution Methods",
            paragraphs: [
              "We also consider mediation, reconciliation and negotiation according to the nature of the dispute, seeking the most suitable model from the perspective of time, cost and relationship management.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "intellectual-property",
    iconKey: "shield",
    relatedIds: ["technology-and-internet", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "fikri-mulkiyet-hukuku",
        longDescription:
          "Fikri mülkiyet hukuku, markaların, tasarımların, telif konusu eserlerin ve diğer fikri hakların korunması bakımından ticari değer taşıyan bir alandır. HCC Avukatlık Bürosu, müvekkillerinin fikri varlıklarını korumaya ve bu varlıklardan doğan hukuki riskleri yönetmeye yönelik danışmanlık ve temsil hizmeti sunmaktadır.",
        sections: [
          {
            heading: "Koruma ve Uyuşmazlık Yönetimi",
            paragraphs: [
              "Marka hakkına tecavüz, benzer marka uyuşmazlıkları, hükümsüzlük ve iptal süreçleri ile telif haklarının ihlali gibi konularda kapsamlı hukuki destek sağlıyoruz.",
              "Hak sahiplerinin fikri varlıklarını korumak kadar, bu varlıkların ticari kullanımı ve lisanslanması süreçlerinin de sağlam hukuki temellere oturtulmasını önemsiyoruz.",
            ],
          },
          {
            heading: "Stratejik Danışmanlık",
            paragraphs: [
              "Fikri mülkiyet portföyünün oluşturulması, hakların etkin biçimde yönetilmesi ve ihlal risklerine karşı önleyici adımların belirlenmesi konusunda müvekkillerimize stratejik danışmanlık veriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "intellectual-property-law",
        longDescription:
          "Intellectual property law is an area of significant commercial value for the protection of trademarks, designs, copyrighted works and other intellectual assets. HCC Law Office provides advisory and representation services aimed at safeguarding clients' intellectual property and managing the legal risks arising from those assets.",
        sections: [
          {
            heading: "Protection and Dispute Management",
            paragraphs: [
              "We provide comprehensive support in matters such as trademark infringement, similar-mark disputes, invalidation and cancellation proceedings, as well as copyright violations.",
              "We place importance not only on the protection of intellectual assets, but also on ensuring that their commercial exploitation and licensing processes rest on a sound legal foundation.",
            ],
          },
          {
            heading: "Strategic Advisory",
            paragraphs: [
              "We advise clients strategically on building intellectual property portfolios, managing rights effectively and determining preventive steps against infringement risk.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "real-estate-law",
    iconKey: "building2",
    relatedIds: ["family-and-inheritance", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "gayrimenkul-hukuku",
        longDescription:
          "Gayrimenkul hukuku, taşınmaz mülkiyetinin korunması, işlem güvenliğinin sağlanması ve proje süreçlerinin hukuka uygun şekilde yürütülmesi bakımından kapsamlı değerlendirme gerektirir. HCC Avukatlık Bürosu, taşınmaz işlemleri ve gayrimenkul yatırımlarına ilişkin süreçlerde hukuki güvenliği önceleyen danışmanlık sunmaktadır.",
        sections: [
          {
            heading: "İşlem ve Sözleşme Süreçleri",
            paragraphs: [
              "Taşınmaz alım satımı, kira ilişkileri, tapu işlemleri, ipotek tesisi ve proje geliştirme süreçlerinde sözleşmesel ve hukuki risklerin değerlendirilmesine destek veriyoruz.",
              "Kat karşılığı inşaat sözleşmeleri ve benzeri yapılandırmalarda tarafların hak ve yükümlülüklerinin açık, dengeli ve uygulanabilir biçimde düzenlenmesini hedefliyoruz.",
            ],
          },
          {
            heading: "Uyuşmazlık ve Dönüşüm Süreçleri",
            paragraphs: [
              "Gayrimenkul uyuşmazlıkları ile 6306 sayılı Kanun kapsamındaki dönüşüm süreçlerinde, müvekkillerimizin haklarını koruyan ve işlem güvenliğini güçlendiren hukuki çözümler geliştiriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "real-estate-law",
        longDescription:
          "Real estate law requires comprehensive assessment to protect property rights, secure transactions and ensure that project processes are conducted in accordance with law. HCC Law Office offers legal advisory services that prioritise legal certainty in property transactions and real estate investments.",
        sections: [
          {
            heading: "Transaction and Contract Processes",
            paragraphs: [
              "We assist in evaluating contractual and legal risks in property sales and acquisitions, lease relationships, title deed procedures, mortgage establishment and project development processes.",
              "In construction-for-land-share agreements and similar structures, we aim to ensure that the parties' rights and obligations are regulated in a clear, balanced and workable manner.",
            ],
          },
          {
            heading: "Disputes and Urban Transformation",
            paragraphs: [
              "We develop legal solutions that protect our clients' rights and reinforce transactional security in real estate disputes and urban transformation matters under Law No. 6306.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "enforcement-and-bankruptcy",
    iconKey: "landmark",
    relatedIds: ["litigation-and-dispute-resolution", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "icra-ve-iflas-hukuku",
        longDescription:
          "İcra ve iflas hukuku, alacaklı ile borçlu arasındaki ilişkinin etkin şekilde yönetilmesini ve mali süreçlerin hukuki çerçevede çözümlenmesini gerektirir. HCC Avukatlık Bürosu, alacak tahsili, icra takipleri, konkordato ve iflas süreçlerinde müvekkillerinin haklarını korumaya yönelik kapsamlı hukuki destek sunmaktadır.",
        sections: [
          {
            heading: "Takip ve Tahsil Süreçleri",
            paragraphs: [
              "Alacakların tahsili, icra takiplerinin başlatılması, itiraz süreçlerinin yönetilmesi ve takip işlemlerinin etkin şekilde yürütülmesi bakımından sistemli hukuki temsil sağlıyoruz.",
              "Borçlu taraf bakımından ise icra takibine karşı başvuru yolları, itiraz ve korunma mekanizmaları hakkında kapsamlı danışmanlık sunuyoruz.",
            ],
          },
          {
            heading: "Yapılandırma ve İflas Süreçleri",
            paragraphs: [
              "Konkordato, iflas ve yeniden yapılandırma süreçlerinde hukuki zeminin doğru kurulması, sürecin usule uygun ilerlemesi ve ticari menfaatlerin korunması amacıyla yol gösteriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "enforcement-and-bankruptcy-law",
        longDescription:
          "Enforcement and bankruptcy law requires the effective management of creditor-debtor relationships and the resolution of financial processes within a sound legal framework. HCC Law Office offers comprehensive legal support to protect clients' rights in debt recovery, enforcement proceedings, concordat and bankruptcy matters.",
        sections: [
          {
            heading: "Recovery and Enforcement Processes",
            paragraphs: [
              "We provide systematic legal representation in the recovery of receivables, the initiation of enforcement proceedings, the management of objections and the effective follow-up of enforcement measures.",
              "From the debtor's perspective, we also advise on available remedies, objections and legal protection mechanisms against enforcement actions.",
            ],
          },
          {
            heading: "Restructuring and Bankruptcy",
            paragraphs: [
              "We guide clients through concordat, bankruptcy and restructuring matters with a focus on establishing the correct legal basis, ensuring procedural compliance and safeguarding commercial interests.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "employment-law",
    iconKey: "scale",
    relatedIds: ["litigation-and-dispute-resolution", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "is-hukuku",
        longDescription:
          "İş hukuku, işçi ile işveren arasındaki ilişkinin dengeli biçimde yürütülmesi ve çalışma hayatından doğan uyuşmazlıkların hukuka uygun şekilde çözümlenmesi bakımından önemli bir alandır. HCC Avukatlık Bürosu, iş ilişkilerinin kurulması, sürdürülmesi ve sona erdirilmesine ilişkin süreçlerde kapsamlı hukuki destek sunmaktadır.",
        sections: [
          {
            heading: "İş İlişkisinin Kurulması ve Yönetimi",
            paragraphs: [
              "İş sözleşmelerinin hazırlanması, işyeri uygulamalarının hukuki çerçevesinin belirlenmesi ve işveren-işçi ilişkilerinde doğabilecek risklerin önceden değerlendirilmesi konularında danışmanlık veriyoruz.",
              "Tarafların hak ve yükümlülüklerini açık şekilde ortaya koyan sözleşmesel ve kurumsal düzenlemelerle, ileride ortaya çıkabilecek uyuşmazlıkların azaltılmasını hedefliyoruz.",
            ],
          },
          {
            heading: "Uyuşmazlık ve Fesih Süreçleri",
            paragraphs: [
              "İş kazaları, işe iade davaları, tazminat talepleri, fesih süreçleri ve işçilik alacaklarına ilişkin uyuşmazlıklarda müvekkillerimizin haklarını etkin biçimde temsil ediyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "employment-law",
        longDescription:
          "Employment law is a key field for maintaining a balanced employer-employee relationship and resolving workplace disputes in accordance with law. HCC Law Office provides comprehensive legal support in the establishment, continuation and termination of employment relationships.",
        sections: [
          {
            heading: "Establishment and Management of Employment Relationships",
            paragraphs: [
              "We advise on the preparation of employment contracts, the legal framework of workplace practices and the early assessment of risks that may arise in employer-employee relations.",
              "Through contractual and institutional arrangements that clearly define the parties' rights and obligations, we aim to reduce disputes that may arise at a later stage.",
            ],
          },
          {
            heading: "Disputes and Termination Processes",
            paragraphs: [
              "We represent clients effectively in matters concerning occupational accidents, reinstatement claims, compensation demands, termination processes and disputes relating to employee receivables.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "data-protection",
    iconKey: "shield",
    relatedIds: ["technology-and-internet", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "kisisel-verilerin-korunmasi",
        longDescription:
          "Kişisel verilerin korunması, yalnızca yasal yükümlülüklerin yerine getirilmesi değil, aynı zamanda kurumsal itibarın ve veri güvenliğinin korunması bakımından da önem taşır. HCC Avukatlık Bürosu, 6698 sayılı Kanun ve ilgili mevzuat çerçevesinde uyum süreçlerinin planlanması ve yürütülmesine yönelik hukuki danışmanlık sunmaktadır.",
        sections: [
          {
            heading: "Uyum ve Politika Süreçleri",
            paragraphs: [
              "Veri envanterinin oluşturulması, veri işleme faaliyetlerinin değerlendirilmesi, aydınlatma metinleri ve saklama politikalarının hazırlanması gibi uyum adımlarında müvekkillerimize rehberlik ediyoruz.",
              "Kuruluşların veri işleme süreçlerinin hukuki gerekliliklere uygun şekilde yapılandırılması ve güncellenmesi için somut uygulama desteği sağlıyoruz.",
            ],
          },
          {
            heading: "Veri Güvenliği ve İhlal Yönetimi",
            paragraphs: [
              "Teknik ve idari tedbirlerin değerlendirilmesi, veri güvenliği risklerinin analiz edilmesi ve veri ihlali durumunda izlenecek hukuki sürecin belirlenmesi bakımından kapsamlı destek sunuyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "personal-data-protection",
        longDescription:
          "Personal data protection is important not only for complying with statutory obligations, but also for safeguarding institutional reputation and data security. HCC Law Office advises on the planning and implementation of compliance processes under Law No. 6698 and the related legislation.",
        sections: [
          {
            heading: "Compliance and Policy Processes",
            paragraphs: [
              "We guide clients through compliance steps such as preparing data inventories, assessing processing activities and drafting privacy notices and retention policies.",
              "We also provide practical support for structuring and updating data processing operations in a manner consistent with legal requirements.",
            ],
          },
          {
            heading: "Data Security and Breach Management",
            paragraphs: [
              "We offer comprehensive support in evaluating technical and organisational measures, analysing data security risks and determining the legal course to follow in the event of a data breach.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "criminal-law",
    iconKey: "gavel",
    relatedIds: ["litigation-and-dispute-resolution", "financial-and-white-collar-crimes"],
    locales: {
      tr: {
        slug: "ceza-hukuku",
        longDescription:
          "Ceza hukuku, soru\u015fturma ve kovu\u015fturma s\u00fcre\u00e7lerinde haklar\u0131n korunmas\u0131, delillerin do\u011fru de\u011ferlendirilmesi ve usuli g\u00fcvencelerin etkin bi\u00e7imde kullan\u0131lmas\u0131 bak\u0131m\u0131ndan dikkatli bir hukuki yakla\u015f\u0131m gerektirir. HCC Avukatl\u0131k B\u00fcrosu, ceza hukuku kapsam\u0131ndaki uyu\u015fmazl\u0131klarda m\u00fcvekkillerine s\u00fcrecin her a\u015famas\u0131nda \u00f6zenli temsil ve dan\u0131\u015fmanl\u0131k sunmaktad\u0131r.",
        sections: [
          {
            heading: "Soru\u015fturma ve Kovu\u015fturma S\u00fcre\u00e7leri",
            paragraphs: [
              "Ceza soru\u015fturmalar\u0131nda ifade, delil de\u011ferlendirmesi, koruma tedbirleri ve ba\u015fvuru yollar\u0131 bak\u0131m\u0131ndan m\u00fcvekkillerimize hukuki destek sa\u011fl\u0131yoruz.",
              "Kovu\u015fturma a\u015famas\u0131nda ise dosyan\u0131n maddi ve hukuki y\u00f6nlerini birlikte ele alarak savunma stratejisinin kurulmas\u0131 ve duru\u015fma s\u00fcre\u00e7lerinin takibi konular\u0131nda temsil hizmeti sunuyoruz.",
            ],
          },
          {
            heading: "Haklar\u0131n Korunmas\u0131",
            paragraphs: [
              "Ceza hukuku alan\u0131ndaki dosyalarda, ki\u015fisel hak ve \u00f6zg\u00fcrl\u00fckleri ilgilendiren s\u00fcre\u00e7lerin hassasiyetini g\u00f6zeterek usule uygun, dikkatli ve sonu\u00e7 odakl\u0131 bir yakla\u015f\u0131m benimsiyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "criminal-law",
        longDescription:
          "Criminal law requires a careful legal approach to protect rights, assess evidence correctly and use procedural safeguards effectively throughout investigation and prosecution stages. HCC Law Office provides attentive representation and advisory support to clients in criminal-law matters at every stage of the process.",
        sections: [
          {
            heading: "Investigation and Prosecution Processes",
            paragraphs: [
              "We support clients during criminal investigations in relation to statements, evidence assessment, protective measures and available legal remedies.",
              "At the prosecution stage, we provide representation in building the defence strategy and following hearing processes by evaluating both the factual and legal aspects of the file.",
            ],
          },
          {
            heading: "Protection of Rights",
            paragraphs: [
              "In criminal-law matters, we adopt a careful, procedurally sound and results-oriented approach while taking into account the sensitivity of processes involving personal rights and freedoms.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "financial-and-white-collar-crimes",
    iconKey: "gavel",
    relatedIds: ["litigation-and-dispute-resolution", "tax-and-financial-services"],
    locales: {
      tr: {
        slug: "mali-ve-beyaz-yaka-suclari",
        longDescription:
          "Mali ve beyaz yaka suçları, şirketlerin mali yapısını, yöneticilerin sorumluluğunu ve kurumsal itibarı doğrudan etkileyebilen hassas süreçler doğurur. HCC Avukatlık Bürosu, bu nitelikteki soruşturma ve uyuşmazlıklarda teknik değerlendirme ile savunma stratejisini birlikte ele alan hukuki destek sunmaktadır.",
        sections: [
          {
            heading: "Soruşturma ve Savunma Süreci",
            paragraphs: [
              "Güveni kötüye kullanma, mali usulsüzlükler, veri hırsızlığı, belgede sahtecilik ve benzeri fiiller bakımından delil değerlendirmesi, hukuki analiz ve süreç planlaması yapıyoruz.",
              "Şirket yöneticileri, çalışanlar veya ilgili üçüncü kişiler bakımından ortaya çıkabilecek cezai ve hukuki riskleri bütüncül bir bakışla ele alıyoruz.",
            ],
          },
          {
            heading: "Kurumsal Etki ve Süreç Yönetimi",
            paragraphs: [
              "Bu alandaki dosyalarda yalnızca ceza hukuku boyutunu değil, aynı zamanda şirket itibarı, iş süreçleri ve operasyonel etkileri de dikkate alarak temsil ve danışmanlık hizmeti sunuyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "financial-and-white-collar-crimes",
        longDescription:
          "Financial and white-collar crimes can trigger sensitive processes that directly affect a company's financial structure, managerial responsibility and institutional reputation. HCC Law Office provides legal support that combines technical assessment with a carefully structured defence strategy in investigations and disputes of this nature.",
        sections: [
          {
            heading: "Investigation and Defence Process",
            paragraphs: [
              "We assess evidence, conduct legal analysis and plan the procedural course in matters involving breach of trust, financial irregularities, data theft, document forgery and similar acts.",
              "We address the criminal and civil risks that may arise for company directors, employees and relevant third parties through a comprehensive and coordinated perspective.",
            ],
          },
          {
            heading: "Institutional Impact and Process Management",
            paragraphs: [
              "In these matters, we take into account not only the criminal-law dimension but also the implications for company reputation, internal processes and operational continuity.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "commercial-and-corporate",
    iconKey: "building2",
    relatedIds: ["real-estate-law", "litigation-and-dispute-resolution"],
    locales: {
      tr: {
        slug: "ticaret-ve-sirketler-hukuku",
        longDescription:
          "Ticaret ve şirketler hukuku, şirketlerin kuruluşundan günlük faaliyetlerine, ortaklık ilişkilerinden yeniden yapılanma süreçlerine kadar uzanan geniş bir alanı kapsar. HCC Avukatlık Bürosu, yerli ve yabancı sermayeli şirketlere kurumsal ihtiyaçlarına uygun hukuki danışmanlık sunmaktadır.",
        sections: [
          {
            heading: "Kuruluş ve Kurumsal Yapılanma",
            paragraphs: [
              "Şirket kuruluş işlemleri, gerekli belgelerin hazırlanması, yasal kayıt süreçleri ve kurumsal yapının hukuki zemininin oluşturulmasına ilişkin destek veriyoruz.",
              "Ortaklık yapıları, pay devri, genel kurul ve yönetim kurulu süreçleri gibi şirket içi ilişkilerin hukuka uygun biçimde yürütülmesini amaçlıyoruz.",
            ],
          },
          {
            heading: "İşlem ve Uyuşmazlık Yönetimi",
            paragraphs: [
              "Ticari sözleşmeler, birleşme ve devralmalar, ortaklar arası uyuşmazlıklar ve ticari karar alma süreçlerinde müvekkillerimizin menfaatlerini koruyan stratejik hukuki çözümler geliştiriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "commercial-and-corporate-law",
        longDescription:
          "Commercial and corporate law covers a broad field ranging from company formation and day-to-day operations to shareholder relations and restructuring processes. HCC Law Office provides corporate legal advisory services tailored to the needs of domestic and foreign-invested companies.",
        sections: [
          {
            heading: "Formation and Corporate Structuring",
            paragraphs: [
              "We support clients in company formation procedures, the preparation of required documentation, statutory registration processes and the establishment of a sound legal basis for the corporate structure.",
              "We also aim to ensure that internal corporate relationships, including shareholder structures, share transfers, general assembly matters and board processes, are conducted in compliance with law.",
            ],
          },
          {
            heading: "Transactions and Dispute Management",
            paragraphs: [
              "We develop strategic legal solutions that protect our clients' interests in commercial agreements, mergers and acquisitions, shareholder disputes and corporate decision-making processes.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "consumer-law",
    iconKey: "scale",
    relatedIds: ["family-and-inheritance", "real-estate-law"],
    locales: {
      tr: {
        slug: "tuketici-hukuku",
        longDescription:
          "Tüketici hukuku, günlük hayatta sık karşılaşılan sözleşmesel ilişkiler ve hizmet sunumları bakımından önemli hak ve yükümlülükler doğurur. HCC Avukatlık Bürosu, tüketicilerin korunmasına ilişkin uyuşmazlıklarda etkili, dengeli ve çözüm odaklı hukuki destek sunmaktadır.",
        sections: [
          {
            heading: "Uyuşmazlık Konuları",
            paragraphs: [
              "Ön ödemeli konut satışları, ayıplı mal ve hizmetler, elektronik ticaret kaynaklı uyuşmazlıklar ve tüketici sözleşmelerinden doğan sorunlarda kapsamlı değerlendirme yapıyoruz.",
              "Tüketici hakem heyeti başvuruları ile mahkeme süreçlerinde, somut olayın niteliğine uygun hukuki temsil ve danışmanlık hizmeti sağlıyoruz.",
            ],
          },
          {
            heading: "Hakların Korunması",
            paragraphs: [
              "Tüketicilerin yasal haklarını etkin biçimde kullanılması ve karşı tarafla olan hukuki ilişkinin doğru çerçevede değerlendirilmesi için süreci dikkatle yönetiyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "consumer-law",
        longDescription:
          "Consumer law creates important rights and obligations in the contractual relationships and service transactions encountered in everyday life. HCC Law Office provides effective, balanced and solution-oriented legal support in disputes concerning consumer protection.",
        sections: [
          {
            heading: "Types of Disputes",
            paragraphs: [
              "We assess matters arising from prepaid housing sales, defective goods and services, e-commerce-related disputes and issues stemming from consumer agreements in a comprehensive manner.",
              "We also represent and advise clients before consumer arbitration committees and courts in line with the characteristics of each specific matter.",
            ],
          },
          {
            heading: "Protection of Rights",
            paragraphs: [
              "We manage the process carefully so that statutory consumer rights may be exercised effectively and the legal relationship with the counterparty may be assessed within the proper framework.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "tax-and-financial-services",
    iconKey: "landmark",
    relatedIds: ["financial-and-white-collar-crimes", "commercial-and-corporate"],
    locales: {
      tr: {
        slug: "vergi-ve-mali-hizmetler",
        longDescription:
          "Vergi ve mali hizmetler alanı, şirketlerin finansal kararları ile hukuki yükümlülüklerinin birlikte değerlendirilmesini gerektirir. HCC Avukatlık Bürosu, vergi uyuşmazlıkları ve mali süreçlerde teknik boyutu güçlü, ticari gerçeklikle uyumlu hukuki danışmanlık sunmaktadır.",
        sections: [
          {
            heading: "Mali Planlama ve Değerlendirme",
            paragraphs: [
              "Finansman ihtiyaçlarının belirlenmesi, kredi görüşmeleri öncesi hukuki ve mali çerçevenin değerlendirilmesi, mali tabloların analizi ve yeniden yapılandırma süreçlerine ilişkin destek veriyoruz.",
              "Şirketlerin mali sürdürülebilirliğini etkileyen hukuki başlıklarda riskleri önceden değerlendirmeye ve süreci planlı biçimde yönetmeye odaklanıyoruz.",
            ],
          },
          {
            heading: "Vergi Uyuşmazlıkları ve Başvurular",
            paragraphs: [
              "Vergi uyuşmazlıkları, idari başvurular, alacak tahsilat süreçleri ve ilgili dava aşamalarında müvekkillerimizin haklarını korumaya yönelik hukuki çözümler geliştiriyoruz.",
            ],
          },
        ],
      },
      en: {
        slug: "tax-and-financial-services",
        longDescription:
          "Tax and financial services require legal obligations and financial decision-making to be evaluated together. HCC Law Office provides legal advisory support in tax disputes and financial processes with strong technical grounding and close alignment with commercial realities.",
        sections: [
          {
            heading: "Financial Planning and Assessment",
            paragraphs: [
              "We assist with determining financing needs, evaluating the legal and financial framework before credit negotiations, analysing financial statements and structuring restructuring processes.",
              "We focus on assessing risks in advance and managing the process in a planned manner on legal issues that affect a company's financial sustainability.",
            ],
          },
          {
            heading: "Tax Disputes and Applications",
            paragraphs: [
              "We develop legal solutions aimed at protecting our clients' rights in tax disputes, administrative applications, debt collection processes and the related stages of litigation.",
            ],
          },
        ],
      },
    },
  },
];

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

function getServiceRecordByLocaleSlug(locale: Locale, slug: string) {
  return serviceRecords.find((service) => service.locales[locale].slug === slug) ?? null;
}

function mapService(locale: Locale, service: ServiceRecord, index: number): ServiceDetail {
  const dictionary = getDictionary(locale);
  const summary = dictionary.services.items[index];
  const localized = service.locales[locale];
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const alternate = service.locales[alternateLocale];

  const relatedServices = (service.relatedIds ?? [])
    .map((relatedId) => {
      const relatedRecord = serviceRecords.find((item) => item.id === relatedId);

      if (!relatedRecord) {
        return null;
      }

      const relatedIndex = serviceRecords.findIndex((item) => item.id === relatedId);
      const relatedSummary = getDictionary(locale).services.items[relatedIndex];
      const relatedLocalized = relatedRecord.locales[locale];

      return {
        title: relatedSummary.title,
        shortDescription: relatedSummary.description,
        slug: relatedLocalized.slug,
        href: getServicePath(locale, relatedLocalized.slug),
        iconKey: relatedRecord.iconKey,
      };
    })
    .filter((serviceItem): serviceItem is ServiceListItem => Boolean(serviceItem));

  return {
    title: summary.title,
    shortDescription: summary.description,
    slug: localized.slug,
    href: getServicePath(locale, localized.slug),
    iconKey: service.iconKey,
    longDescription: localized.longDescription,
    sections: localized.sections,
    relatedServices,
    alternateHref: getServicePath(alternateLocale, alternate.slug),
  };
}

export function getServicePath(locale: Locale, slug: string) {
  return locale === "tr" ? `/hizmetlerimiz/${slug}` : `/en/services/${slug}`;
}

export function getAllServices(locale: Locale): ServiceListItem[] {
  return serviceRecords.map((service, index) => {
    const mapped = mapService(locale, service, index);

    return {
      title: mapped.title,
      shortDescription: mapped.shortDescription,
      slug: mapped.slug,
      href: mapped.href,
      iconKey: mapped.iconKey,
    };
  });
}

export function getServiceBySlug(locale: Locale, slug: string): ServiceDetail | null {
  const service = getServiceRecordByLocaleSlug(locale, slug);

  if (!service) {
    return null;
  }

  const index = serviceRecords.findIndex((item) => item.id === service.id);
  return mapService(locale, service, index);
}

export function getServiceStaticParams(locale: Locale) {
  return serviceRecords.map((service) => ({
    slug: service.locales[locale].slug,
  }));
}

export function translateServicePath(pathname: string, targetLocale: Locale) {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  for (const service of serviceRecords) {
    const trPath = getServicePath("tr", service.locales.tr.slug);
    const enPath = getServicePath("en", service.locales.en.slug);

    if (normalizedPath === trPath || normalizedPath === enPath) {
      return targetLocale === "tr" ? trPath : enPath;
    }
  }

  return null;
}

export function buildServiceMetadata(locale: Locale, slug: string): Metadata | null {
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    return null;
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: service.href,
      languages: {
        tr: locale === "tr" ? service.href : service.alternateHref,
        en: locale === "en" ? service.href : service.alternateHref,
        "x-default": locale === "tr" ? service.href : service.alternateHref,
      },
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      url: absoluteUrl(service.href),
      siteName: locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [
        {
          url: "/HCC_LOGO-removebg-preview.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
      images: ["/HCC_LOGO-removebg-preview.png"],
    },
  };
}

export function getServiceSitemapEntries(): MetadataRoute.Sitemap {
  return serviceRecords.flatMap((service) => {
    const trPath = getServicePath("tr", service.locales.tr.slug);
    const enPath = getServicePath("en", service.locales.en.slug);
    const lastModified = new Date();

    return [
      {
        url: absoluteUrl(trPath),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            tr: absoluteUrl(trPath),
            en: absoluteUrl(enPath),
          },
        },
      },
      {
        url: absoluteUrl(enPath),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            tr: absoluteUrl(trPath),
            en: absoluteUrl(enPath),
          },
        },
      },
    ];
  });
}
