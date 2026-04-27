import type { Metadata, MetadataRoute } from "next";
import type { Locale } from "@/lib/site";

const SITE_URL = "https://hcc.av.tr";

type ArticleSection = {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  bullets?: string[];
};

type ArticleLocaleContent = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  sections: ArticleSection[];
};

type ArticleRecord = {
  id: string;
  image: string;
  publishedAt: string;
  featured?: boolean;
  locales: Record<Locale, ArticleLocaleContent>;
};

export type ArticleListItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  href: string;
};

export type ArticleDetail = ArticleListItem & {
  publishedAt: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  sections: ArticleSection[];
  alternateHref: string;
};

const articleRecords: ArticleRecord[] = [
  {
    id: "blank-signature",
    image: "/articles/beyaza-imza.jpg",
    publishedAt: "2024-05-12",
    locales: {
      tr: {
        slug: "beyaza-imza-ve-okunmadan-imzalanan-belge",
        title: "Beyaza İmza ve Okunmadan İmzalanan Belge",
        category: "Borçlar Hukuku",
        date: "İstanbul, 2020",
        author: "Av. Hasan Can Cebeci",
        excerpt:
          "Beyaza atılan imzanın hukuki sonuçları, okunmadan imzalanan belgelerde sorumluluk ve uygulamadaki temel riskler üzerine değerlendirme.",
        seoTitle:
          "Beyaza İmza ve Okunmadan İmzalanan Belge | HCC Avukatlık Bürosu",
        seoDescription:
          "Beyaza imza ve okunmadan imzalanan belge uyuşmazlıklarında hukuki sonuçlar, ispat sorunları ve uygulamada dikkat edilmesi gereken başlıca riskler.",
        introduction:
          "Günlük hayatımızda veya ticari hayat içerisinde bazı durumlar, belgeleri okumadan imzalamayı ve beyaza (açığa) imza atmayı zorunlu kılabiliyor. Bu gibi haller genel olarak karşımıza muhataba duyulan güven sebebiyle çıkmaktadır. Kişilerin birbirlerine duyduğu güven sebebiyle gerçekleştirmiş olduğu işlemin sonucunun tasavvur edilememiş olmasının sonuçları öğretide tartışma konusu olmuştur. Bununla birlikte sözleşmenin kurulmasında yanılmanın etkisi ve sonuçları hakkında da yazarlar arasında görüş farklılıkları bulunmaktadır. Okunmadan imzalanan belgenin ve beyaza imzanın, kişinin iradesini yansıtmadığının düşünüldüğü durumlarda veya taraflar arasındaki anlaşmaya aykırı olarak metnin doldurulduğu hallerde, ispatın ne şekilde yapılması gerektiği öğretide tartışma konusu olduğu kadar yıllar içerisinde Yargıtay kararlarında da farklılık göstermiştir. Bugün gelinen noktada söz konusu durumların ne şekilde ispatlanması gerektiği Yargıtay kararlarında sabit halinde gelmiş olmasına rağmen kimi durumlarda verilen kararlara eleştiriler devam etmektedir. Taraflar arasındaki hukuki ilişki incelenirken kuşkusuz göz ardı edilmemesi gereken bir durumda bu belgelerin üçüncü kişilere etkisidir. Birbirinden farklı ihtimallere göre, kişinin veya tarafların iradelerini yansıtmayan belgelerin, iktisap eden üçüncü kişi yönünden geçerliliği ile üçüncü kişinin haklarının ne olduğuna değinmekte fayda bulunmaktadır.",
        sections: [
          {
            heading: "1. Beyaza İmza",
            paragraphs: [
              "Beyaza imza genel olarak, bir kimsenin muhatabına veya üçüncü kişiye, tarafların anlaştıkları hususları daha sonra yazılmak üzere vermiş olduğu, imzalı boş bir belge olarak tanımlanmaktadır. Her ne kadar imzalı boş bir belge verilmeden evvel, tarafların metinde geçecek konularda anlaşmış oldukları varsayılsa da, imzalı boş bir belge karşı tarafa teslim edildikten sonra da, imzalayanın ileteceği talimatlara göre de yazılması mümkündür.",
              "Yargıtay beyaza imza ile ilgili olarak uygulamada, muhataba güvenilerek teslim edilen imzalı boş kağıdın, daha sonra imzayı verenin arzusu dışında doldurulmasından kaynaklı sıklıkla sorunlar yaşandığını belirtmektedir. Kişinin, çalışanına vize işlemlerinde kullanılmak üzere beyaza imzalı boş belge teslim etmesi fakat çalışanı tarafından belgenin borç senedi haline getirilmesi gibi durumlar uygulamada çokça yaşanmaktadır.(1) Yargıtay bu gibi durumlarda imzalı boş belgeyi muhataba veren kişinin, metnin arzusu dışında doldurulma ihtimalini göze aldığı görüşündedir. Bu haliyle de meydana gelebilecek rizikoları imzayı atarken kabul ettiği kabul edilmektedir.",
              "Bir kimse tarafından imzalanarak muhataba teslim edilen kağıdın tamamen boş olması durumunda tam beyaza imzadan, kağıdın kısmen boş olması durumunda ise kısmi beyaza imzadan söz edilebilir.(2)",
              "Açığa imza suretiyle verilmiş boş bir belge, kanunun geçerlilik şekline bağladığı hukuki işlemin gerçekleşmesine yönelik olabileceği gibi, yasal bir şekle bağlı olmayan hukuki işlemin yapılmasına ilişkin de olabilir.",
              "Maddi anlamda beyaza imza ile, şekli manada beyaza imza olguları karşımıza çıkmaktadır. Maddi anlamda açığa imzada, boş belgeyi imzalayan kimseyle belgeyi dolduracak olan muhatap arasında, boş belgenin ne şekilde doldurulacağına ilişkin anlaşma bulunmaktadır. Boş belgeyi imzalayan tarafın irade beyanı ve irade beyanında riayet edilmesi gereken hususlar belirlenmektedir. Şekli anlamda beyaza imzada ise, imzalı boş belgeyi veren kimse, belgenin ne şekilde yazılması gerektiğini ve irade beyanının içeriğini muhataba bildirmektedir. Maddi ve şekli anlamda beyaza imza arasındaki fark, belgeyi yazacak olan muhatabın belgeyi doldururken serbest olmaması şeklinde ifade edilebilir. Başka bir ifadeyle, şekli manada irade açıklamasının içeriğinin nasıl olacağı belli fakat maddi anlamda belirlenebilir durumdadır. Maddi anlamda beyaza imza sırasında, imzayı veren kişinin iradesi, şekli anlamda olduğunun aksine, belli değildir.",
              "Beyaza imzalı boş belgeyi doldurmak üzere teslim alan kişi, irade açıklamasına uygun olarak ve tarafların önceden anlaşmış olduğu konuda metni doldurmak üzere imza sahibinden bir yetki almış olduğu kabul edilmektedir. Bu yetkinin, irade açıklamasına aykırı olarak kullanılması durumlarda sorunlar yaşanmaktadır. İmzalı boş belgeyi doldurmak için teslim alan muhatap, taraflar arasında anlaşılan hususların aksine metni düzenlemesi durumunda; sözleşmenin kurulup kurulmadığı, güven ilkesinin sözleşmenin kurulmasına etkisi ve yanılma hükümlerinden yararlanılıp yararlanılamayacağı konuları gündeme gelecektir.",
            ],
          },
          {
            heading: "a. Beyaza İmzada Yetki",
            paragraphs: [
              "Karşı tarafın doldurması için verilmiş boş belgeyi dolduran tarafın yetkisinin, temsil yetkisi olup olmadığı tartışmalıdır. Öğretide bir görüş, belgeyi dolduran muhatabın durumunun temsilcinin durumu ile aynı olduğunu savunmaktadır. Bir kimsenin sonradan doldurulmak üzere imzalayıp boş bir kağıdı karşı tarafa vermesi, namına hukuki bir işlem yapılması için temsil yetkisi niteliğinde bir belge verilmesiyle eşdeğer olduğu kabul edilmektedir. Temsil yetkisinin karşı tarafa tanınması, temsil edilen adına irade beyanında bulunulması anlamına gelmektedir. Bir kimseye, imzalı boş bir kağıdın sonradan doldurulmak üzere teslim edilmesi de, belgeyi imzalayan adına irade açıklamasında bulunma olanağını tanımaktadır. Temsilcinin veya boş belgeyi doldurmak üzere teslim alan kimsenin daha sonra işlemi yaparken, belgeyi imzalayan kişinin irade açıklamasının dışına çıkması veya temsil ettiği kimsenin vermiş olduğu yetkiyi aşması halinde doğacak sonuçların aynı olduğu savunulmaktadır.",
              "Diğer bir görüşe ise, beyaza imzalı kağıdı teslim alan muhataba, belgeyi doldurmak için imza sahibi tarafından tanınan yetkinin, temsil yetkisi olmadığını savunmaktadır. İmzalı boş belgenin doldurulması için kendisine teslim edilen kimsenin görevi, imza sahibine ait irade açıklamasına uygun olarak belgeyi tamamlamasıdır. Adi yazılı şekle bağlanmış bir işlemin, temsilci olarak başkası namına yapılması için imza sahibinin temsilci olması gerekmektedir. Çünkü adi yazılı şekle uygun irade açıklamasında, temsilcinin iradesi olduğu kabul edildiğinde, imza sahibinin de temsilci olması gerekmektedir. Söz konusu yetki temsil yetkisi olmadığından, sonradan geri alınmasının olanağı bulunmamaktadır.",
            ],
          },
          {
            heading: "b. Güven Teorisinin ve Yanılmanın Etkisi",
            paragraphs: [
              "Beyaza imzalı boş bir belgenin, karşı tarafça anlaşmaya uygun olmayarak doldurulması halinde, imzayı atanın başvurabileceği hukuki imkanlardan yanılma konusunda öğretide görüş farklılıkları bulunmaktadır. Bununla beraber açığa imzada yaşanan problemlerin çözümlenmesinde kabul edilen güven teorisinin uygulanmasında yazarlar yönünden görüş ayrılıkları mevcuttur.",
              "Doktrinde bir görüş, beyaza imza konusunda yanılmanın söz konusu olmayacağını belirtmektedir. Bu görüşü savunan yazarların argümanlarından ilki, beyaza imza atmak suretiyle boş kağıdı doldurmak üzere karşı tarafa teslim eden kişi, aralarındaki anlaşmaya aykırı şekilde metnin yazılacağını bilebilecek durumda olduğudur. Beyaza imzayı atan kişi söz konusu riski, belgeyi muhataba teslim ederken peşinen almıştır. Söz konusu durumda, muhataba duyulan güvenin kötüye kullanılması gerçekleşmiş olmaktadır. Bu sebeple beyaza imzayı atan kişi, almış olduğu riskten dolayı yanılma hükümlerinden yararlanamamaktadır.(3) Bu görüşü savunan diğer bir argüman ise, beyaza imza atıp boş belgeyi karşı tarafa teslim eden kişinin, sonradan doldurulacak metinle ilgili herhangi bir tasavvuru yok ise yanılma hükümlerinden söz edilebilmesinin mümkün olmadığından bahsetmektedir.",
              "Bu haliyle, beyaza imzalı boş kağıdın taraflar arasındaki anlaşmaya aykırı olarak düzenlendiğinde, imzayı atan kişinin hataya düşmüş olduğunun kabulü geçerli olmadığı gibi, aldatılmış olamayacağı da kabul edilmektedir. Bu gibi durumlarda irdelenmesi gereken husus, güven teorisine göre sözleşmenin kurulup kurulmadığı olacaktır. Başka bir ifadeyle söz konusu metni dolduran muhatabın, beyaza imzalı boş kağıdı veren kişinin gerçek iradesine aykırı bir şekilde düzenlediğinin farkında olup olmaması durumunda sözleşmenin geçerliliği tartışılmaktadır.(4)",
              "Diğer görüşe göre, bazı durumlarda yanılma hükümlerine müracaat edilebileceği savunulmaktadır. Bu görüşü savunan yazarların bir kısmına göre, yine beyaza imzalı boş belgenin anlaşmaya aykırı şekilde düzenlenmesi halinde yanılma hükümlerine müracaat edilemeyeceğini söylemekle birlikte, korkutma veya aldatma ile imzalı boş metnin alınması halinde bir sakatlığın söz konusu olabileceğini savunmaktadırlar. HMK hükümleri uyarınca bu yanılmanın tanıkla ispatı mümkün olmayacağı için ancak, aksinin senetle ispatlanmasının olanak dahilinde olduğu görüşündedirler. Beyaza imzalı boş belge karşı tarafa teslim edilirken, karşı taraftan boş belge teslim aldığına ilişkin bir belgenin alınma imkanı olmasına rağmen almayan kimsenin, hukuken korunmaya değer olmadığını düşünmektedirler.",
              "Bu görüşü savunan diğer yazarlar, beyaza imzalı boş belgenin taraflar arasındaki anlaşmaya aykırı düzenlenmesi halinde, yanılma hükümlerinin uygulanabileceği ancak muhatabın güveninin korunmaya elverişli olup olmadığının tespit edilmesi gerektiğini savunmaktadırlar. Yazarlardan bir tanesi, imzalı boş kağıdı teslim alan kişinin belgeyi doldururken sözleşmeye aykırı düzenlediğinin farkında değilse ve güven teorisine göre farkında olması da gerekmiyorsa, imza atan kişinin yanılma hükümlerinden yararlanacağı görüşündedir. Başka bir yazar da, kendisine doldurulması için teslim edilen beyaza imzalı boş kağıt düzenlenirken, hakkaniyete uygun hareket edip etmemek bağlamında değerlendirmektedir. Söz konusu beyaza imzalı boş kağıdı, taraflar arasındaki anlaşmaya aykırı doldurduğunun farkında değilse veya bilmiyorsa, hakkaniyete uygun hareket ettiğinin kabulü ile sözleşme kurulmuş olacaktır. İmza sahibi bu durumda yanılma hükümlerine dayanabilecektir. Muhatap bu yetkisini kötüye kullanır ise, imza sahibinin sonradan düzenlenen metin sebebiyle sorumlu olmadığının kabulü gerekecektir. Bahsedilen bu durumlarda her ne kadar imza sahibi metin içeriğiyle bağlı olmasa da, muhatap, imza sahibinin gerçek iradesine göre önceki anlaşmaya bağlı olduğunu ileri sürebilecektir.",
              "Bu görüşe örnek olarak, bir kimsenin bankaya olan borcuna karşılık kefil 60.000 Mark üst sınırından kefalet vermek istemekte iken, banka bu tutarı 250.000 Mark olarak sözleşmeye aykırı olarak doldurmuştur. Bankanın bu talebi kefile karşı ileri sürebilmesinin olanağı bulunmamakla birlikte, kefilin iradesini yansıtan 60.000 Mark tutarındaki bedeli talep etme imkanı bulunmaktadır. Bu durumda kefil, hak ettiğinden daha fazla korunmamalıdır.(5)",
              "Yargıtay’ın vermiş olduğu bir kararda ise, açığa imza atan kişi, başkasının borcundan dolayı 150.000.-TL üst limitle kefil olmuştur. Daha sonra banka tarafından, sözleşmenin boş olan sayfaları doldurularak kefalet limiti 3.500.000.-TL’ye yükseltilmiş ve kefilden söz konusu tutar talep edilmesine rağmen Mahkeme talebin geçersiz olduğuna karar vermiş ve Yargıtay’da kararı onamıştır. Mahkeme bu kararında bankanın talebini, kefilin ikrarı olsa bile, kefalet miktarı belirtilmediğinden reddetmiştir ve açığa imza atanın kefalet sözleşmesinden dolayı borçlu olmadığına karar vermiştir.(6)",
            ],
          },
          {
            heading: "c. İspat Yükü",
            paragraphs: [
              "Beyaza imzanın geçerli olduğu, boş kağıdın sonradan doldurulması halinde, tarafların arasındaki anlaşmaya uygun düzenlendiği karine olarak kabul edilmektedir. Yargıtay, boş kağıda imza atan kişinin iradesine veya tarafların arasındaki anlaşmaya aykırı olarak metnin doldurulduğunun, HMK m.201 uyarınca tanıkla ispat edilemeyeceğini kabul etmektedir.(7) Bu haliyle, söz konusu metnin taraflar arasındaki anlaşmaya aykırı olarak düzenlenmesi durumunda, ispatın nasıl yapılacağı ve kime ait olduğu sorunu ortaya çıkmaktadır. Genel kanı, metnin taraflar arasındaki anlaşmaya aykırı doldurulduğunu ispat etmesi gerekenin beyaza imzayı veren tarafın olduğudur.(8)",
              "Bir olayda; dava konusu imzalı belgeyi veren kişi, evin abonelik işlemleri için imzalı belgenin verildiğini fakat muhatap tarafından, anlaşmaya aykırı olarak inanç sözleşmesi şeklinde doldurulduğundan bahisle belge ile bağlı olmadığını iddia etmektedir. Yargıtay kararında, beyaza imzayı atan kişinin, boş kağıdı muhataba teslim ederken, verilen boş belgenin muhatap tarafından anlaşmaya aykırı şekilde doldurulabileceğini öngörmesi gerektiğinden bahsetmektedir. Beyaza imzalı belgenin, kişinin arzusuna aykırı şekilde düzenlendiği ispatlanmadığı sürece geçerli olduğu ve bu ispatın tanıkla yapılamayacağına değinmektedir. (9)",
              "Yargıtay başka bir kararında yine, açığa imza atanın elinden çıkan belgenin, hata veya aldatma ile elinden alındığı sabit olmadıkça, ancak yasal delillerle kanıtlanabileceği ve metnin sonradan doldurulduğunun tanıkla ispat edilemeyeceği görüşündedir.(10)",
              "Açığa atılan imzada metnin, taraflar arasındaki anlaşmaya aykırı olarak yazıldığı iddiası, senede karşı senetle ispat zorunluluğu kapsamında ele alınması gerekmektedir. HMK 203/ç maddesinde, senetle ispat zorunluluğunun istisnaları arasında irade bozukluğundan bahsediliyor olsa da, bu hükümden yararlanabilmek için, söz konusu belgenin korkutma veya aldatma yoluyla imzayı atandan alınması gerekmektedir.",
              "Yargıtay’ın 24.03.1989 tarihli İçtihadı Birleştirme kararında, senetle ispatın bazı istisnalarının HUMK’da düzenlendiğine ve bu istisnalar dışında, ileri sürülen iddiaların senetle ispatlanması gerektiğinden bahsetmektedir. Kararın devamında, beyaza imzalı boş kağıdı muhataba veren kişinin, karşı tarafa güvendiğini ve buna dayalı olarak da muhtemel rizikoları göze aldığının kabulü gerektiğini belirtmektedir. Kararda, beyaza imzalı boş kağıdın iradesine aykırı olarak doldurulduğunu iddia eden kişinin iddiasını yazılı delille ispat etmesi gerektiğine ve HUMK yönünden tanıkla ispat edemeyeceği şeklinde bahsetmektedir.(11)",
              "Başka bir olayda, boş kağıda imza atan davalı, metnin, taraflar arasındaki anlaşmaya aykırı olarak doldurulduğunu iddia etmektedir. Mahkeme davalının lehine karar vermesine karşın Yargıtay, beyaza imza atan kişinin, daha sonra metnin kendi arzusuna aykırı olarak doldurulabileceği ihtimalini göze aldığının kabul edilmesi gerektiğini ve ispatın sadece kesin delille yapılması gerektiğinden, başka bir deyişle ispat yükünün beyaza imza atan tarafta olması ve yazılı delille ispat edilmesi zorunlu olduğundan Mahkeme’nin kararını bozmuştur.(12)",
              "HMK’ya göre tanık dinletilebilmesi için, irade bozukluğunun, beyaza imzalı kağıdın, kişinin elinden çıktığı sırada olması gerekmektedir.(13) İşbu durumda yanılma hükümlerine başvurulamayacağından sadece korkutma ve aldatma halinde söz konusu olacaktır.",
              "Bir olayda, kooperatifte yönetici olan kişi, kooperatifteki işlerde kullanılmak üzere boş kağıtları imzalayıp, kooperatifteki üyeye teslim etmiştir. Daha sonra beyaza imzalı boş kağıt, üçüncü bir kişi tarafından hileli bir şekilde ele geçirildiği iddiasıyla doldurularak, beyaza imza atan kişi borçlandırılmıştır. Mahkeme, beyaza imza şeklinde düzenlenen senedin anlaşmaya aykırı olarak doldurulduğunu yazılı delile ispatlanması gerektiğinden ve yemin teklifinde de bulunulmadığından davanın reddine karar vermiştir. Yargıtay, Mahkeme’nin vermiş olduğu kararda yerleşik içtihatların, yanlış şekilde yorumlanarak dayanak aldığını tespit etmiştir. Yerleşik içtihatlarda, beyaza imzalı boş kağıdın muhataba teslimi, kişinin rızasıyla gerçekleşmektedir. Başka bir ifadeyle, muhataba verilen beyaza imzalı boş kağıt, tarafların arasındaki anlaşmaya aykırı olarak doldurulduğundan bahsedilmektedir. Halbuki dava konusu olayda davacı, belgenin ele geçirilmesi yönünden hile hükümlerine dayanmış olduğundan, durumun tanıkla ispat edilebileceğinin göz ardı edilmemesi gerekmektedir. Bu haliyle, diğer ispat olanakları değerlendirilmediği için Yargıtay, Mahkeme’nin kararını bozmuştur.(14)",
            ],
          },
          {
            heading: "d. Üçüncü Kişiler Yönünden Sonuçları",
            paragraphs: [
              "Bir kimsenin beyaza imza yoluyla vermiş olduğu boş kağıdın, tarafların arasındaki anlaşmaya aykırı şekilde yazılması halinde, belgeye dayanan üçüncü kişinin iyi niyetinin korunup korunmayacağı iki halde kendini göstermektedir. Birinci durumda örneğin, mevcut bir borç için kefil olmak isteyen kişi, muhataba beyaza imzalı boş bir belge verir ve belgenin kefalet sözleşmesi şeklinde düzenlenmesini talep edebilir. Bu durumda söz konusu belgenin muhatabı, onu dolduracak olan kişi değil, muhataptan alacaklı olan üçüncü kişi olacaktır. Borçlu tarafından kefalet sözleşmesi şeklinde doldurulan belge, alacaklı üçüncü kişi tarafından kabul edilmesiyle birlikte kefalet sözleşmesi kurulacaktır. Beyaza imzalı boş belgeyi teslim alan borçlu, aralarındaki anlaşmaya aykırı şekilde belgeyi doldurması halinde ise, beyaza imzayı veren kimseyle bu belge ile aralarında kefalet sözleşmesi kurulan alacaklı arasında ihtilaf yaşanması durumu söz konusu olacaktır. Bu halde, iyiniyetli alacaklının güveninin korunup korunmayacağı hususu ortaya çıkmaktadır.",
              "Diğer bir duruma göre ise, beyaza imzalı boş belgeyi, tarafların aralarındaki anlaşmadan daha yüksek bir bedelle dolduran muhatap, belgeye dayalı alacak hakkını iyiniyetli üçüncü kişiye devretmesi halinde, üçüncü kişi alacaklının iyi niyetinin korunup korunmayacağı konusudur.",
              "Üçüncü kişi alacaklının güveninin korunmasını kabul eden görüşte iki farklı çözüm yolu bulunmaktadır. Bunlardan bir tanesi, beyaza imzalı belgeyi teslim eden kişi, belgenin anlaşmaya aykırı olarak doldurulduğunu ve kendisinin bu belgeyle sorumlu tutulamayacağını iddia edebilir. Söz konusu durumda, MK.988 de yer alan haliyle, emin sıfatıyla zilyetten iyi niyetle ayni hak kazanılması gibi, iyi niyete hak kazandırabilecek bir durum da bulunmamaktadır. Bu durumda, iyi niyetli üçüncü kişilerin, anlaşmaya aykırı doldurulan belgeye dayalı olarak hak kazandıklarından bahsedilemeyecektir. Diğer taraftan, belgeye güvenen üçüncü kişinin de iyi niyetinin korunması gerekecektir. Bu haliyle, boş kağıda imza atmak suretiyle karşısındaki kişiye doldurması için belgeyi teslim eden kişinin, belgeye güvenerek işlem yapan üçüncü kişinin zararlarını karşılaması doğru olacaktır.",
              "Diğer bir çözüm yolu olarak kabul edilen görüşte ise, beyaza imzalı belgenin doldurulması için karşı tarafa veren kimsenin, iradesine aykırı şekilde belgenin doldurulmasıyla, belgeye güvenip işlem yapan üçüncü kişinin iyi niyetinin korunması gerektiğini ve bu belgeye dayanarak imza sahibine müracaat edebilmesini savunmaktadır. Çünkü, beyazı imzalı boş kağıdı teslim alan kişinin, güveni kötüye kullanıp, tarafların arasındaki anlaşmaya aykırı olarak belgeyi doldurma ihtimali bulunmaktadır. Beyaza imzalı belgeyi teslim eden kişinin de bu rizikoyu göze aldığı ileri sürülmektedir. Bu görüşe göre de, rizikoyu taşıması gereken kişi, belgeye güvenip işlem yapan üçüncü kişi değil, beyaza imzalı belgeyi teslim eden kişi olmalıdır.(15)",
              "Bu haliyle Türk hukukunda hakim olan genel kanı, “kimsenin sahip olduğundan fazlasını devredemeyeceği” ilkesini, “yaratılan hukuki görüşün sonuçlarına katlanma” ilkesiyle sınırlandırmakta olduğudur. (16)",
              "Temsil yetkisine yönelik düzenlemelerde, bu görüşü destekleyecek durumlar bulunmaktadır. Temsil yetkisini ve içeriğini üçüncü kişilere bildiren temsil olunan, bildirimiyle bağlıdır. Bu nedenle temsil edilenin iç ilişkide kısıtlamaya gitmesi durumunda, önceden bildirimde bulunduğu iyi niyetli üçüncü kişilere karşı bu kısıtlamaları ileri sürememektedir. Ortaya çıkan hukuki durumu yaratan kişi, bu duruma dayanarak alacak hakkını devralan üçüncü kişiye karşı muvazaa iddiasında bulunamamaktadır. TMK 988’de taşınırın zilyetliğinin rıza ile elden çıktığı halde, emin sıfatıyla zilyetten iyiniyetli olarak hak kazanan kişinin hakkı korunmaktadır.",
              "Bununla beraber şayet üçüncü kişi, beyaza imzalı belgenin tarafların arasındaki anlaşmaya aykırı olarak veya beyaza imzalı boş kağıdı verenin iradesine aykırı doldurulduğunu biliyor veya bilmesi gerekiyor ise bu durumda üçüncü kişinin iyi niyetinden söz edilemeyecektir. Beyaza imzalı boş belgeyi veren kimse muhataba ileri sürebileceği iddiaları, üçüncü kişiye karşı da ileri sürebilecektir.",
              "Beyaza imzalı belgenin aldatma veya korkutma ile kişinin elinden alındığı düşünüldüğünde ise, doktrinde iyi niyetli üçüncü kişinin menfaatinin değil beyaza imzalı belgeyi veren kişinin haklarının korunacağı benimsenmektedir.",
            ],
          },
          {
            heading: "2. Okunmadan İmzalanan Belge",
            paragraphs: [
              "Bir kimsenin, arzusuna uygun olmadan hazırlanan metni, arzusuna uygun olduğunu sanarak imzalaması halidir.(17) Söz konusu metin ile irade arasında uyumsuzluk bulunmaktadır. Bu durum eksik okuma veya okuduğunu anlamama şeklinde de ortaya çıkabilmektedir.",
              "Söz konusu durum incelenirken dikkat edilmesi gereken husus sözleşmenin, metnin içeriğine göre mi kurulduğu ile durumun fark edilmesinden sonra yanılma hükümlerinden yararlanılıp yararlanılmayacağı konusudur.",
              "Kural olarak kabul edilen, okumadan imzalanan metnin içeriği, imzayı atan tarafından kabul edilmiş olmasıdır. Başka bir ifadeyle belgeyi imzalayan tarafından metnin içeriğini bildiği ve kabul ettiği varsayılmaktadır. Bununla beraber, karşı taraftaki muhatabın güven ilkesi gereğince, metni imzalayanın iradesine uygun halde hazırlandığını düşünüyor ve dürüstlük kuralı gereği iradesine uygun olmadığını anlamamış olması halinde, metni imzalayan kişi metin içeriği ile bağlı olacaktır.(18)",
              "Diğer taraftan muhatap, söz konusu metnin içeriğinin, imzalayan kişinin iradesini yansıtmadığını biliyor veya bilmesi gerekiyor ise, metni imzalayan kişi metinle sorumlu tutulamayacaktır. Bu durumda iki olasılık söz konusudur. İlkinde, muhatabın, metni imzalayan kişinin iradesini bilmemesi veya bilmesinin gerekmediği durumda sözleşmenin kurulmadığıdır. Örneğin muhatap, sözleşmedeki cezai şartın olduğunu bilmesine karşın, metni imzalayacak kişinin bu şartı bilmediğini düşünerek şayet bunu belirtmesi halinde, metni imzalamayacağını düşünmesidir. Bununla beraber metni imzalaması konusunda ikna etmesi halinde aldatma hali de söz konusu olacaktır. Bu durumda yanılma hükümlerine gitmeye gerek kalmayacaktır. Diğer olasılıkta ise, muhatap tarafından metni imzalayacak olan kişinin iradesinin biliniyor veya bilinebilecek durumda olması halidir. Bu durumda sözleşme, metni imzalayan kişinin gerçek iradesine göre kurulacaktır.",
              "Yanılma hükümlerine başvuru imkanı ise, okumadan imzalanan metnin sözleşme içeriğine göre doldurulduğu hallerde bulunmaktadır. Metni okumadan imzalayan kimsenin sözleşmeyi iptal edebilme durumunda iki ihtimalin birbirinden ayrılması gerekmektedir. İlk ihtimale göre, okumadan metni imzalayan kimse, metnin içeriğinin arzusu dışında sonuçlar doğurabileceği ihtimalini peşinen göze almış ve metni dolduracak kişinin iradesini kabul etmiş halidir. Yargıtay’da bu görüşte olup, bir takım yazarlar, okunmadan imzalanan metnin muhatapta güven oluşturduğu için dürüstlük kuralı gereği yanılma hükümlerine dayanılmayacağından bahsetmektedir. Aksi görüş ise, yanılma hükümlerine dürüstlük kuralı sebebiyle gidilemeyeceği değil, metni imzalayan kişinin hataya düşmemiş olmasından kaynaklandığıdır.(19)",
              "Okunmadan imzalanan metne ilişkin bilgisizlik sebebiyle yanılma hükümlerine dayanılamayacağı kuralı doktrinde bazı hallerde istisnalar getirmektedir. Bir görüşe göre kişi, okunmadan imzalanan metin hakkında bilgi sahibi değilse, başka bir ifadeyle hesaba katması gereken hususlar hakkında herhangi bir fikri olmadan metni imzalamış ise, sözleşmenin iptal edilebilmesi mümkündür. Diğer bir görüşe göre de, okunmadan imzalanan metindeki olağandışı konuların, muhatap tarafından biliniyor veya bilinmesi gerekiyor olduğu durumlarda, bu konular sözleşme içeriğine dahil olmadığı için ortada iptali gerektiren bir durum söz konusu olmayacaktır.",
              "İkinci ihtimalde ise, ilk ihtimalden farklı olan kısmı, okunmadan belgeye imza atan kişinin metnin içeriğine dair ufak da olsa fikrinin bulunmasıdır. Okunmadan metni imzalayan kimse, metni daha sonra değerlendirdiğinde olmasını arzu ettiği kaydın metin içeriğinde bulunmaması durumunda, açıklamada yanılma hükümlerine başvurabilecektir.(20) Fakat açıklamada yanılma hükümlerine başvurabilmek için, sözleşmenin ikinci derecede unsurlarında hataya düşmüş olunması gerekmektedir. Makbuz imzaladığını düşünen kişinin ibraname imzalaması örnek olabilir. Bu durumda imza atan kişinin ihmali olduğundan, sözleşmenin iptal edilmesi halinde, imzaya atan kişi karşı tarafın olumsuz zararlarını ve hatta bazı hallerde ise olumlu zararlarını dahi tazmin etmek durumunda kalacaktır.",
              "Okunmadan imzalanan belgeyi imzalayan kişinin, metnin içeriğinin arzusuna göre olmadığı iddiasıyla sözleşmenin kurulmadığını, beyaza imzada olduğu gibi, HMK .m.201 gereği senede karşı senetle ispat etmek zorundadır. Okunmadan imzalanan belgede yanılma hükümlerinden yararlanmak isteyen kişi öncelikle, yanılmayı objektif olgularla ispat edebilmesi gerekmektedir. Ancak bu durumda, HMK 203/ç maddesindeki istisnai hallerden yararlanma imkanı bulabilecek ve her ne kadar tanıkla ispat edilmesi mümkün olmasa da, bu durumda tanıkla ispat yoluna müracaat edebilecektir. (21)",
              "Yargıtay bir kararında; davacı eş, davalı kocasından düğünde takılan ziynet eşyalarının iadesini talep etmektedir. Davacı eş ile davalı koca arasında imzalanan belgede, taraflara ait olan eşyaların listesi yer almakta olup, bu eşyaların davacı eş tarafından alınmadığı belirtilmektedir. Davalı koca ise, belgeyi okumadan imzaladığını, eşinin giderken söz konusu eşyaları üzerine takıp ve yanına alıp gittiğini iddia etmektedir. Yargıtay, davalı kocanın belgeyi imzalamakla içeriğini kabul etmiş sayılacağına karar vermiştir. Belgenin hazırlanması sırasında orada bulunan şahitler de belgenin içeriğini teyit ettiklerinden Yargıtay Mahkeme’nin kararını bozmuştur.(22)",
              "Yargıtay Hukuk Genel Kurulu başka bir kararında ise; kadastro çalışmalarında mahalli bilirkişi olarak görev alan kişi, kendisinin zilyet ve tasarrufu altında olan taşınmazı, kadastro tespiti sırasında, mer’a olarak tespit edildiği için kadastro tespitinin iptalini ve taşınmazın adına tescil edilmesini talep etmektedir. Davacı mahalli bilirkişi olarak bulunduğu kadastro tespiti sırasında, kendisine toplu olarak verilen tutanakları okumadan imzaladığını iddia etmektedir. Yargıtay yapmış olduğu değerlendirmede, davacının belgede yer alan ikrar niteliğindeki beyanının koşullarının oluşup oluşmadığı üzerinde durmuştur. Sonuç olarak da, okunmadan imzalanan belgedeki metnin davacıya açıkça okunmadığı ve vermiş olduğu beyanın iradesini yansıtmadığına kanaat getirmiştir.(23)",
              "Yargıtay’ın başka bir kararında; Kişi üzerine kayıtlı daireyi oğluna, tapuda ölünceye bakma sözleşmesine göre devretme arzusundayken, oğlunun babasına okunmadan imzalattığı belge sebebiyle taşınmazdaki tüm daireleri kendi adına geçirmiştir. Durumun farkına varan baba ise, okumadan imza attığını ileri sürerek tapu iptali ve tescil davası açmıştır. Mahkeme, babanın oğlu tarafından yanıltılarak, bir tane daire yerine taşınmazın tamamının devredildiği gerekçesiyle davanın kabulüne karar vermiştir. Temyiz aşamasında davacı tarafından önce feragat dilekçesi verilmiş, daha sonra dilekçenin iradesini yansıtmadığını, içeriğini idrak edebilecek durumda olmadığını ve imzanın da kendisine ait olmadığı iddiasıyla feragat beyanını reddetmiştir. Yargıtay tarafından feragat beyanındaki eksiklik sebebiyle bozulan dosyada, Mahkeme tarafından yapılan değerlendirme davacı babanın, feragat beyanının altındaki imza kendisine ait olsa dahi sonuçlarını idrak edebilecek durumda olmadığından ve oğlu tarafından yanıltıldığından bahisle kararında direnmiştir. Yargıtay kararında, feragat beyanına ilişkin aldatma, yanıltma veya korkutma olabileceği konusunda görüşünü bildirmekle beraber, öncelikle imza itirazındaki incelemenin yapılması gerektiğinden direnme kararını reddetmiştir. Bu Yargıtay ve Mahkeme kararında üzerinde durulması gereken husus, oğlu tarafından iradesi yanıltılan babanın sonuçlarının ne olabileceğini bilmediği feragat beyanını Mahkeme’ye sunması neticesinde irade sakatlığı sebebiyle beyanının geçersiz olduğu ve okumadan imzalamış olduğu belgenin geçerli olmadığı yönünde verilen Mahkeme kararıdır.(24)",
              "Başka bir olayda, taraflar arasında iki adet sözleşme imzalanmıştır. Bunlardan bir tanesi kooperatif hissesinin devrine ilişkin olup diğeri ise arsa satışına ilişkindir. Davacının iddiası, arsa satışına ilişkin sözleşmenin ikinci nüshası olarak hazırlandığını düşündüğü sözleşmeyi okumadan imzalaması sebebiyle yanıltıldığını aslında kooperatifteki hissesini devretme iradesinin olmadığını iddia etmektedir. Davacı BK31. Maddede (Yeni BK m.39) belirtilen 1 yıllık hak düşürücü süre içerisinde kooperatife, hissesini devretmediğine dair müracaat ettiği ve beş yıllık zamanaşımı süresi içerisinde davasını ikame ettiği, her iki sözleşmede de tutarların aynı olduğu fakat hisse devrinin değeri aslında daha yüksek olduğundan bunun hayatın olağan akışına ters düştüğü gerekçesiyle sözleşmeye bağlı kalmayacağı şeklinde Mahkeme tarafından verilen karar Yargıtay tarafından da onanmıştır. Davalıların karar düzeltme talepleri de Yargıtay tarafından reddedilmiştir. Bu karardan da anlaşılacağı üzere, okunmadan imzalanan belgeyi imzalayan kişinin iradesi olmamasına rağmen yanıltılarak elinden alınan belgenin geçersiz olduğuna değinilmiştir.(25)",
              "Yargıtay’ın tanık dinlenmesine ilişkin bir kararında; senedi okumadan imzalamanın kural olarak hile özelliğini taşımadığını kabul etmektedir. Olayda, gidilen arzu halcide yerin dar olması sebebiyle davalının tek başına metni yazdırmasından sonra davalı, tarafların anlaşmalarına uygun şekilde metnin düzenlendiğini söyleyerek davacının belgeyi okumadan imzalamasına sebebiyet vermiştir. Mahkeme’nin vermiş olduğu iptal kararı, Yargıtay tarafından hile koşulları oluşmadığından bahisle, tanık da dinlenemeyeceğinden Mahkeme’nin kararını bozmuştur. Direnme sebebiyle yeniden Yargıtay’ın önüne gelen dosyada, tarafların anlaşmalarının aksine metnin doldurulması ve belgeyi imzalayan kişinin metni okumaya dahi fırsat tanınmadan belgeye imza atılmasına sebebiyet verildiği için, hile olgusunun varlığında tanık dinlenebileceğinin göz önünde tutulması gerektiğine karar vererek direnme kararında gösterilen sebepten dolayı hükmü bozmuştur.(26)",
              "Yargıtay’ın bir kararında ise, belgeyi bile bile okumadan imzalayan kimse, belge içeriğinin, kayıtsız şartsız kendi iradesini yansıttığını kabul etmekte olduğu görüşündedir. Kişi içeriği hakkında herhangi bir tasavvuru olmadan imzalamış olduğu belge için daha sonra yanılma sebebiyle iptalini talep edemeyecektir. Belgenin okunmadan imzalanması, söz konusu belgenin güven ilkesince geçerli olduğu sonucunu doğurmaktadır.(27)",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: [
              "Güven üzerine muhataba teslim edilen boş belgenin, imzayı atan kişinin iradesine aykırı olarak doldurulması ve kişinin güttüğü amaç dışında hazırlanmış bir metnin, arzusuna yönelik hazırlandığını düşünerek okumadan imzalaması günlük hayatımızda çokça karşılaşılan bir durumdur. Haliyle imzayı atan kişinin güveninin kötüye kullanılması ve yanılması gibi durumlarda, bunun imzayı atan kişi tarafından tasavvur edilmesi gerekliliği hakkında öğretide görüş ayrılıkları bulunmaktadır. Uygulamada, imzayı veren kişinin olası tehlikenin farkında olduğu ve yapılan işlemin hukuki sonucuna katlanması gerektiği sonucu hakimdir.",
              "Hukuk Muhakemeleri Kanunu’nun kıyasen uygulanması neticesinde bu gibi durumların tanıkla ispatını mümkün kılmamaktadır. Yaşanan hak kayıpları karşısında yapılacak savunmanın, hukukumuzda hakim olan haliyle senede karşı senetle ispat şeklinde olabileceği kabul edilmektedir. Senede karşı senetle ispat zorunluluğunun istisnaları arasında HMK’da irade bozukluğundan bahsediliyor olsa da, bu hükümden yararlanabilmek için, söz konusu belgenin korkutma veya aldatma yoluyla imzayı atandan alınması gerekmekte olduğu Yargıtay kararlarında hakim görüştür.",
            ],
          },
          {
            heading: "Kaynakça",
            paragraphs: [
              "Deynekli, Adnan., “Türk Borçlar Kanunu’nda Yer Alan Usul Hükümleri”, İstanbul Ünv. Hukuk Fakültesi Dergisi, C:2, Sayı 2, 2011, SS.45-97 (www.legalbank.com) (Erişim Tarihi:24.04.2020)",
              "Kanışlı, Erhan., İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, 1.Baskı, İstanbul: Onikilevha, 2018",
              "Kuru, Baki/Arslan, Ramazan/Yılmaz, Ejder., Medeni Usul Hukuku, 16.Baskı, Ankara: Yetkin Basımevi, 2005",
              "Oğuzman, Kemal / Öz, Turgut., Borçlar Hukuku Genel Hükümler, C:1, 16.Bası, İstanbul: Vedat Kitapçılık, 2018",
              "Özen, Burak., “Beyaza İmza Sorunu Üzerine Düşünceler”, Legal Hukuk Dergisi, Yayın 62, 2008, SS:409-428 (www.legalbank.com) (Erişim Tarihi:24.04.2020)",
              "1 Y13HD 2002/3176 E. 2002/6062 K. 23.05.2002 ↩",
              "2 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.325 ↩",
              "3 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.327 ↩",
              "4 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.328 ↩",
              "5 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.333 ↩",
              "6 Y19HD 2002/7505 E. 2003/4998 K. 12.05.2003 ↩",
              "7 Deynekli, A., “Türk Borçlar Kanunu’nda Yer Alan Usul Hükümleri”, İstanbul Ünv. Hukuk Fakültesi Dergisi, C:2, Sayı 2, 2011, ss:45-97, s.52 ↩",
              "8 Kuru, B./Arslan, R./Yılmaz, E., Medeni Usul Hukuku, s.422 ↩",
              "9 Y14.HD 2006/14101 E. 2007/914 K. 06.02.2007 ↩",
              "10 Y13HD 1980/4411 E. 1980/5805 K. 12.11.1980 ↩",
              "11 YİBK., 24.03.1989, 1988/1 E., 1989/2 K. ↩",
              "12 Y13HD 2016/28448 E. 2019/8367 K. 16.09.2019 ↩",
              "13 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.338 ↩",
              "14 Y13HD 1999/5372 E. 1999/6920 12.10.1999 ↩",
              "15 Özen, Burak., “Beyaza İmza Sorunu Üzerine Düşünceler”, Legal Hukuk Dergisi, Yayın 62, 2008, SS:409-428, s.415 ↩",
              "16 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.345 ↩",
              "17 Oğuzman, K/Öz,Turgut., Borçlar Hukuku Genel Hükümler,C:1, s.98 ↩",
              "18 Kanışlı, E. , İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.349 ↩",
              "19 Kanışlı, E., İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.352 ↩",
              "20 Kanışlı, E., İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.353 ↩",
              "21 Kanışlı, E., İsviçre-Türk Hukukuna Göre Sözleşmenin Kurulmasında Yanılma, s.355 ↩",
              "22 Y6HD. 2012/5339 E. 2012/10043 K. 04.07.2012 ↩",
              "23 YHGK 2003/7-438 E. 2003/463 K. 02.07.2003 ↩",
              "24 YHGK 2017/1-2144 E. 2019/994 K. 03.10.2019 ↩",
              "25 Y23HD 2014/244 E. 2014/2953 K. 15.04.2014 ↩",
              "26 YHGK 1963/4-76 E. 1963/40 K. 03.04.1963 ↩",
              "27 Y4HD 1977/9842 E. 1978/7238 K. 30.05.1978 ↩",
            ],
          },
        ],
      },
      en: {
        slug: "blank-signature-and-signing-without-reading",
        title: "Blank Signature and Signing Without Reading",
        category: "Law of Obligations",
        date: "12 May 2024",
        author: "HCC Law Office",
        excerpt:
          "An overview of the legal consequences of a blank signature, liability in documents signed without reading, and the main practical risks involved.",
        seoTitle:
          "Blank Signature and Signing Without Reading | HCC Law Office",
        seoDescription:
          "A concise review of blank signatures, unread documents, evidentiary issues and key legal risks in contractual practice.",
        introduction:
          "Disputes involving blank signatures or documents signed without full review often arise from the tension between actual intent and the final text of the document. This article is structured to address the legal character of such disputes, their evidentiary dimension and the principal risk areas in contractual practice.",
        sections: [
          {
            heading: "General Overview",
            subheading: "Assessing intent, text and evidence together",
            paragraphs: [
              "A blank signature or a document signed without being fully reviewed may, as a rule, produce binding legal consequences for the signatory. Even so, the parties' actual intent, later insertions into the document and the surrounding factual context remain central to the legal assessment.",
              "These disputes frequently require a combined review of contractual intent, commercial practice and documentary evidence rather than a narrow formal reading of the signature alone.",
            ],
            bullets: [
              "When and under what understanding the document was signed",
              "Whether any blank fields were later completed",
              "The nature of the relationship between the parties",
            ],
          },
          {
            heading: "Practical Considerations",
            subheading: "Core safeguards in contract workflow",
            paragraphs: [
              "Written approval trails, complete documents and confirmation of final document versions are among the most effective safeguards against later disputes. Internal approval and revision records are especially useful in corporate settings.",
              "If a dispute has already arisen, emails, draft versions, delivery records and witness statements may all become relevant in establishing the scope and effect of the signature.",
            ],
            bullets: [
              "Avoid signing documents containing blank fields",
              "Retain the final approved version before signature",
              "Preserve revision and approval history in corporate workflows",
            ],
          },
          {
            heading: "Closing Assessment",
            paragraphs: [
              "Blank signature disputes rarely turn on a single rule alone. A careful case-specific review of document preparation, party conduct and the available evidence is usually required.",
              "For that reason, both preventive documentation practices and an early evidence strategy remain essential.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "bad-faith-compensation",
    image: "/articles/kotu-niyet-tazminati.jpg",
    publishedAt: "2024-04-08",
    locales: {
      tr: {
        slug: "kotu-niyet-tazminati",
        title: "Kötü Niyet Tazminatı",
        category: "İş Hukuku",
        date: "İstanbul, 2020",
        author: "Av. Hasan Can Cebeci",
        excerpt:
          "İş ilişkisinin sona ermesinde kötü niyet tazminatının şartları, uygulama alanı ve işçi ile işveren bakımından hukuki sonuçları.",
        seoTitle: "Kötü Niyet Tazminatı | HCC Avukatlık Bürosu",
        seoDescription:
          "Kötü niyet tazminatının şartları, fesih süreçlerindeki uygulama alanı ve iş ilişkilerinde doğurduğu hukuki sonuçlara genel bakış.",
        introduction:
          "İş güvencesinden yararlanamayan işçilerin, iş akitlerinin işverence, fesih hakkının kötüye kullanılması suretiyle sona erdirilmesi sonucunda doğan hukuki problemler Yasa’da yeterince açıklığa kavuşturulmamıştır. İş güvencesi kapsamına girmeyen işçilerin belirsiz süreli iş sözleşmeleri, çoğu zaman işverenler tarafından dürüstlük kuralına aykırı ve hakkın kötüye kullanılması suretiyle sonlandırılmaktadır. İşveren tarafından fesih hakkının kötüye kullanılması suretiyle sonlandırılan iş sözleşmeleri neticesinde, işçinin kötüniyet tazminatına hak kazanabilmesi için ispat külfeti bakımından uygulamada zorluklarla karşılaşmaktadır. İşverenin, işçiye eşit davranma borcuna aykırı davranışları sebebiyle mahkum edileceği tazminatlarla kötüniyet tazminatının ilişkisi öğretide tartışma konusu olduğu kadar, her işin özeline göre Yargıtay tarafından da farklı değerlendirildiği durumlar söz konusu olabilmektedir.",
        sections: [
          {
            heading:
              "I. İşverenin Fesih Hakkını Kötüye Kullanmasının Yaptırımı Olarak Kötüniyet Tazminatı",
            subheading:
              "1. Fesih Hakkının Kötüye Kullanılması",
            paragraphs: [],
          },
          {
            heading: "I.1. Genel Olarak Hakkın Kötüye Kullanılması",
            paragraphs: [
              "4721 sayılı Türk Medeni Kanunun dürüst davranma başlıklı 2. maddesinde dürüstlük kuralı ve hakkın kötüye kullanılması yasağı ilkleri yer almaktadır. İşbu maddenin 1. fıkrasında dürüstlük kuralı ilkesi “Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır.” şeklinde yer almaktadır. Maddenin 2. fıkrasında ise “Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz” şeklinde hakkın kötüye kullanılması ilkesine yer verilmiştir.(1)",
              "Genel olarak amaç, hukuki netice doğuran insan davranışları ve sosyal ilişki içerisindeki bireylerin haklarını kullanırken veya borçlarını yerine getirirken namuslu, ahlaklı, dürüst ve yaptığı eylemin neticesini bilen orta zekalı bir insan gibi hareket etmeleri gerektiğini öngörmektedir.(2)",
              "Dürüstlük kuralı, Yasa’dan doğan borçların ifa edilmesinin ve hakların kullanılmasının yanında sözleşmelerden doğan borçlar için de uygulanabilir.(3)",
              "Yargıtay kararında hakkın kötüye kullanımı, “hukuken var olan bir hakkın sınırlarını aşarak ya da o hakkı gerekçe göstererek hukuka aykırı eylemler yapma durumu olarak veya bir hakkın, yasaların tanıdığı yetkilerin sınırları içinde olmakla birlikte, amacından saptırarak kullanılması” olarak açıklanmıştır.(4)",
              "Hakkın kötüye kullanılması, hakkın dürüstlük kuralına aykırı olarak kullanılmasıdır. Dürüstlük kuralı ve hakkın kötüye kullanılması, birbirlerinden farklı fakat aynı zamanda birbirlerini tamamlayan iki hukuki kurumun tabiridir.(5)",
              "Fesih hakkının kötüye kullanılmasının ölçütü olarak öğretide(6) yer alan ve Yargıtayın(7) da benimsemiş olduğu görüş, objektif dürüstlük kurallarına aykırılık ölçütüdür. Objektif dürüstlük kuralı ölçütü, her işverenin işçisine karşı samimi ve dürüst olarak nasıl davranması gerektiği şeklinde açıklanabilir.(8) İşverenin, kendi menfaatlerini ön planda tutup zarar verme kastıyla davranması, objektif iyi niyet kuralarına aykırılık oluşturur. Bununla beraber hakkın kötüye kullanılması ölçütleri arasında, hakkın kullanılması yönünden kişiye sağlayacak menfaatlerle başkasında oluşacak zarar arasında açık orantısızlık bulunması, kanuna karşı hile, kişinin ahlaka aykırı davranışlarına dayanarak hak kullanması, uyandırdığı güvene aykırı olarak hakkın kullanması gibi durumlar da dikkate alınan ölçütlerdir.",
              "Yargıtay Hukuk Genel Kurulu’nun kararında, objektif iyi niyet olarak da ifade edilen ve dürüstlük kuralının düzenlendiği Türk Medeni Kanunu 2. maddesi belirtilerek, bütün haklar kullanılırken dürüstlük kuralı çerçevesinde hareket edilmesi gerektiği ve başkasının zararına veya güç duruma düşürmek maksadıyla haklarını kötüye kullanmasını Kanunun korumayacağı ifade edilmiştir. 6100 sayılı Hukuk Muhakemeleri Kanunu’nun 29. maddesinin 1. fıkrasına göre, tarafların dürüstlük kuralına uygun davranmalarının zorunda olduğu anlatılmıştır. Kararın devamında, “işverenin ihbar önellerine uymak sureti ile veya uymadan gerçekleştirdiği böylesi bir fesihte, her hak gibi işverenin sahip olduğu fesih hak ve yetkisini de dürüstlük ve objektif iyi niyet kurallarına uygun biçimde kullanması gerekir.”(9) şeklinde yer alan görüşüyle, fesih hakkının işveren tarafından dürüstlük kuralına uygun olarak kullanılması gerektiğini belirtmiştir.",
              "İş güvencesi kapsamında olmayan işçilerin iş sözleşmesi işveren tarafından kötüniyetle feshedilmesi halinde uygulanacak yaptırım 4857 Sayılı İş Kanunu’nun 17. maddesinin 6. fıkrasında belirtilmiştir. Bu maddeye göre “18 inci maddenin birinci fıkrası uyarınca İş Kanunu’nun 18, 19, 20 ve 21 inci maddelerinin uygulanma alanı dışında kalan işçilerin iş sözleşmesinin, fesih hakkının kötüye kullanılarak sona erdirildiği durumlarda işçiye bildirim süresinin üç katı tutarında tazminat ödenir. Fesih için bildirim şartına da uyulmaması ayrıca dördüncü fıkra uyarınca tazminat ödenmesini gerektirir.” Öğretide bir görüş, bu maddede düzenlenen kötüniyet tazminatının Türk Medeni Kanunu 2. maddesinin karşılığı olarak değerlendirmektedir.(10)",
              "Maddede belirtilen 18-21. maddeleri, iş güvencesine tabi işçilerin haklarını korumakta olup, işbu maddelerde iş güvencesine tabi olmayan işçiler ile ilgili bir düzenleme bulunmamaktadır.",
              "O halde 17. maddede belirtilen haliyle, iş güvencesine tabi olmayan işçilerin, iş sözleşmelerinin işveren tarafından hakkın kötüye kullanılması suretiyle sonlandırılması durumunda işçi, bildirim önellerinin üç katı tutarında kötüniyet tazminatına hak kazanmaktadır. Diğer taraftan, iş güvencesine tabi olan işçiler kötüniyet tazminatı talebinde bulunamamaktadırlar.",
            ],
          },
          {
            heading: "I.2. Kötüniyetli Feshe Örnek Teşkil Eden Durumlar",
            paragraphs: [
              "Yasa’da hangi durumların kötüniyetli sayılacağı belirtilmemiştir. 1475 sayılı Yasa’da, işçinin şikayete başvurması veya sendikaya üye olması gibi nedenler ileri sürülerek iş akdinin işverence sonlandırılması kötüniyetin varlığı bakımından örnek olarak gösterilmesine rağmen, 4857 sayılı Kanun’da fesih hakkının kötüye kullanılmasında örneksenme yapılmamıştır. Kötüniyetli fesihlerde, her somut olayın kendi içinde değerlendirilmesinde fayda bulunmaktadır. En yaygın haliyle işçinin sendika üyesi olması, işvereni şikayet etmesi, Yasa’dan doğan hakkını talep etmesi, özel yaşamı gibi durumlar sebebiyle iş akdinin işverence kötüniyetli feshedilmesi karşımıza çıkmaktadır.",
              "Yargıtay tarafından bir olayda işçinin, işverenini SSK’ya şikayet etmesi sonucunda iş akdinin feshedilmesini kötüniyetli olarak kabul etmiş ve işveren aleyhine kötüniyet tazminatına hükmedilmesi gerektiğinden Mahkeme’nin kararını bozmuştur.(11)",
              "İşveren tarafından hizmet sözleşmesinin kötüniyetli olarak sonlandırıldığının kabul edildiği başka bir olayda; işçinin, evlenmesinin gündemde olduğu bir zamanda, vizite ve sevk kağıdı almak suretiyle işyerinin bilgisi dahilinde geçirmiş olduğu ameliyattan dolayı, işverenin kıdem tazminatı ödememek için, işçinin iş akdinin devamsızlık sebebiyle sonlandırılması kötüniyetli fesih olarak kabul edilmiştir.(12)",
              "Yargıtay tarafların iyi niyet ve dürüstlük kuralları çerçevesinde hareket edip etmediklerinin denetimini yapmaktadır. Örneğin Yargıtay, personel yönetmeliğindeki değişikliği kabul etmeyen işçinin, iş akdinin feshedilmiş olmasından dolayı işverenin kötüniyetli sayılamayacağına dair karar vermiştir. İşveren tarafından personel yönetmeliği, işletme gerekleri bakımından işçilik maliyetlerini azaltmak için değiştirilmiş ve işçi, işçilik hakları sınırlandırıldığı için kendisine ibraz edilen yazıları imzalamamıştır. İşveren tarafından, işçinin iş akdi bu nedenle feshedilmiş ve hak kazanmış olduğu tüm haklar kendisine ödenmiş olduğundan Yargıtay işverenin, işletmesine dair karar aldığı ve bunu ispatladığı için kötüniyetli sayılamayacağına hükmetmiştir.(13)",
              "Diğer taraftan işçinin Kanun’dan veya iş akdinden doğan kaklarını talep etmesi sebebiyle işveren tarafından gerçekleştirilen fesih, hakkın kötüye kullanılmasını teşkil ettiğinden, Yargıtay bir kararında, işçinin ödenmemiş ücretini talep etmesinden dolayı iş sözleşmesinin sona erdirilmesini dürüstlük kuralıyla bağdaşmadığı yönünde karar vermiştir.(14)",
            ],
          },
          {
            heading: "I.3. İşçinin Kötüniyet Tazminatına Hak Kazanmasının Koşulları",
            paragraphs: [
              "Kötüniyet tazminatının düzenlendiği 17. maddeye göre, iş güvencesinden yararlanamayan ve belirsiz süreli iş sözleşmeleri olan işçiler, kötüniyet tazminatı talebinde bulunabilmektedirler. Belirli süreli iş sözleşmelerinde, süreli fesih olmadığından, belirlenen süreden evvel sözleşmenin işveren tarafından kötüniyetli olarak sonlandırılması halinde, haksız fesihten söz edilebilmektedir. Başka bir ifadeyle haksız fesihte, doğmamış olan fesih hakkının kullanılması; fesih hakkının kötüye kullanılmasındaysa doğmuş fesih hakkının objektif iyi niyet kurallarına aykırı kullanılması söz konusudur.(15) Bu haliyle, kötüniyet tazminatı, belirsiz süreli iş sözleşmelerinde talep edilebilmektedir.",
              "Yargıtay da kötüniyet tazminatını incelerken öncelikle işçinin iş güvencesi hükümlerinden yararlanıp yararlanamadığına bakmaktadır. Yargıtay vermiş olduğu bir kararında dosyadaki evraklardan işçinin iş güvencesinden yararlanıp yararlanamadığını anlayamadığından; Mahkeme’nin, “işçinin iş güvencesinden yararlanıp yararlanmadığı hususunu kesin olarak belirlemek ve iş güvencesine tabi işçilerden olduğunun anlaşılması halinde feshin kötüniyetli olduğu gerekçesi ile tazminat talep edemeyeceği gözetilerek bu talebin reddine, davacı işçinin iş güvencesinden yararlanmıyor olduğunun tespiti halinde ise önceki gibi karar verilmesi” şeklinde hüküm kurmuştur.(16) Yargıtayın bu kararından da anlaşılacağı üzere, işçinin kötüniyet tazminatını talep edebilmesi için öncelikle işçinin, iş güvencesi hükümlerinden yararlanamıyor olması gerekmektedir.",
              "İş güvencesi hükümlerinden yararlanamayan işçinin belirsiz süreli iş sözleşmesinin, hakkın kötüye kullanılması sebebiyle sonlandırılmasında tatbik edilecek yaptırım, bildirim sürelerine ait ücretin üç katı tutarında tazminat olmalıdır.",
            ],
          },
          {
            heading: "I.4. İspat Yükü",
            paragraphs: [
              "İş güvencesi kapsamında bulunmayan işçiler, kötüniyet tazminatından yararlanmaktadırlar. İş sözleşmesinin kötüniyetli feshedildiğini iddia eden işçi, iddiasını ispat etmek zorundadır. İspat yükünün işçide olmasının sebebi Türk Medeni Kanunu 3. maddesinden kaynaklanmaktadır. İlgili maddede, Türk Medeni Kanunu iyi niyete hukuki bir sonuç bağladığı durumlarda, esas olan iyi niyetin varlığı olduğu belirtilmektedir. Yasa, taraflarda iyi niyetin varlığını kabul ettiği için, iş akdinin feshinde süreli fesih bildirim hakkını kullanan işverenin, iyi niyetli olduğu kabul edilmekle birlikte aksinin ispatlanması işçiden talep edilecektir.(17)",
              "Yargıtay Hukuk Genel Kurulu vermiş olduğu bir kararda; işveren tarafından iş sözleşmesinin kötüniyetli olarak feshedildiğini, “örneğin işvereni hakkında şikayet yoluna başvurduğu ya da aleyhine tanıklık yaptığı için, işten bu nedenle çıkarıldığını iddia eden işçinin, bu iddiasını ispat etmesi gerekir” yönünde değerlendirmede bulunmuştur. Kararın devamında ise bu hususun Türk Medeni Kanunu’nun 3. maddesinin birinci fıkrasındaki \" Kanunun iyi niyete hukukî bir sonuç bağladığı durumlarda, asıl olan iyi niyetin varlığıdır.\" hükmünün bir sonucu olduğu görüşüyle, işverence kötüniyetle işten çıkarıldığını ileri süren işçinin, işverenin kötüniyetini ispat etmek durumunda olduğuna karar vermiştir. Kararın devamında ise davada dinlenen işçinin tanıklarının, feshin kötüniyetli yapılıp yapılmadığı konusunda yeterli bilgilerinin olmadığı; feshe ilişkin bilgi veya beyanlarının olmadığı sonucuna varılmıştır. Yargıtayın bu değerlendirmesinden, kötüniyetli olarak iş akdinin sonlandırılmasına dair tanıklık yapacak kimselerin, bu olaya tanıklık etmiş olmaları üzerinde durulmuştur.(18)",
              "İş güvencesi hükümlerine tabi olmayan işçiler yönünden, sendikal faaliyete dahil olsun olmasın, iş akdinin feshinde kötüniyet olduğunu veya iddia edilen fesih nedeninin gerçeği yansıtmadığını ispat etme yükümlülüğünün işçide olması, işçi açısından uygulamada güçlük yaratmaktadır.(19)",
              "İspat yükü bakımından Yargıtay bir takım kararlarında, değerlendirmesini hangi koşullara göre yaptığına değinmektedir. Yargıtay bir kararında, belirsiz süreli iş sözleşmesinin taraflarca ihbar öneli tanınmak suretiyle veya ihbar tazminatı ödenerek her zaman feshi mümkün olsa da, bu hakkın da her hak gibi Türk Medenî Kanunun 2. maddesi uyarınca dürüstlük ve objektif iyi niyet kurallarına uygun biçimde kullanılması gerektiği, aksi halde fesih hakkının kötüye kullanılmış olduğu değerlendirmesinde bulunmaktadır. Yerel Mahkeme kararında, işçinin davalı işverenin iş akdini kötüniyetle feshettiği iddiasını ispat edemediği gerekçesiyle kötüniyet tazminatı talebinin reddine karar vermiştir. Yargıtay, mahkeme tarafından gerekçelendirilmeyen bu kararın, eksik incelemeye dayandığına kanaat getirmekle mahkemenin kararını bozmuştur. Yargıtay bozma kararını verirken, Yerel Mahkeme’den farklı olarak, olaylar arasında kronolojik ilişkiyi irdelemiştir. Bu kronolojik ilişki; eski yönetim zamanında çalışan işçilerin tamamına yakınının, yeni yönetimin idareye gelmesiyle birlikte, aynı gerekçe ile işten çıkartılması ve yerlerine daha fazla işçi alınması şeklinde gerçekleşmiştir. Davalı işverenin, maddi sebeplerden dolayı işçilerin işten çıkartıldıklarını iddia etmesi, Mahkeme nazarında itibar görmesine rağmen, Mahkeme’nin bu hususta inceleme yapmamış olmaması da bir başka bozma sebebi olarak Yargıtay tarafından kabul edilmiştir.(20)",
              "Yargıtay, kötüniyetli fesihlerin ispatlanmasında, tanık beyanının ne şekilde olması gerektiğini belirtmektedir. Yargıtayın kararında; işverenin, işçinin iş akdini haklı bir nedene dayalı olarak sonlandırdığını ispat edemediği durumda, kıdem ve ihbar tazminatına hükmedilmesini yerinde bulurken, kötüniyet tazminatı yönünden ispat külfetini işçiye yüklemiştir. Yerel Mahkeme işveren aleyhine kötüniyet tazminatına karar verirken tanık beyanına dayalı olarak karar vermesi Yargıtay tarafından kabul görmemiştir. Yargıtay, tanığın görgüye dayalı bir bilgisinin olmamasını ve tanıklığının soyut beyana dayanmasını, işçinin ispat yükü bakımından yeterli görmemiş ve Mahkeme’nin kötüniyet tazminatı yönünden vermiş olduğu kararı bozmuştur.(21)",
              "Yargıtayın kararlarında üzerinde durduğu husus, mahkemelerin kötüniyet tazminatının kabulüne veya reddine karar verirken, olayın esasına girmesi ve kararını gerekçelendirmesidir. Son olarak Yargıtayın bir kararında bu hususa örnek olarak, işçinin iş akdinin, geçirdiği iş kazası sebebiyle açtığı dava sonrasında, kötüniyetle feshedildiğini iddia etmiş olmasına rağmen, bu talebin mahkemece gerekçesiz biçimde reddedilmiş olmasını bozma sebebi olarak kabul etmiştir.(22)",
            ],
          },
          {
            heading: "I.5. Zamanaşımı ve Faiz",
            paragraphs: [
              "Yasa koyucu tarafından 12.10.2017 tarihinde yapılan düzenleme ile, kötüniyet tazminatının zamanaşımı süresi, İş Kanunu’na eklenen ek 3. maddesi uyarınca beş yıl olarak kararlaştırılmıştır.",
              "Kötüniyet tazminatının süresinde ödenmemesi halinde uygulanacak faiz hususunda Yasa’da düzenleme bulunmamaktadır. İşveren temerrüde düşürülmemiş ise dava tarihinden itibaren yasal faiz yürütülmektedir. Şayet işveren ihtarname çekilerek temerrüde düşürülmüş ise, o zaman ihtarnamedeki sürenin bitim tarihinin sonraki gününden başlamak üzere yasal faiz yürütülebilir.",
            ],
          },
          {
            heading:
              "II.1. Bildirim Süresinde Hak Kazanılan Ücretin Üç Katı Tutarında Olması",
            subheading: "II. Kötüniyet Tazminatının Hesaplanması",
            paragraphs: [
              "İş Kanunu’nun 17. maddesin 6. fıkrasındaki düzenlemeye göre, iş akdinin feshini kötüniyetli kullanan işveren, bildirim süresindeki ücretin üç katı tutarında kötüniyet tazminatı ödemek durumundadır.",
              "Belirsiz süreli iş sözleşmesinin sonlandırılmasından evvel durumun karşı tarafa bildirilmesi gerektiği İş Kanunu 17. maddesinde düzenlenmiştir. Böylelikle hem diğer tarafın uğrayacağı zarar azaltılmış hem de tarafların menfaatleri dengelenmeye çalışılmıştır.(23)",
              "İş Kanunu’nun 17. maddesi 2. Fıkrasına göre bildirim süreleri, bildirimin diğer tarafa yapılmasından itibaren başlamakta olup bu süreler işi altı aydan az sürmüş işçi için iki hafta, işi altı aydan birbuçuk yıla kadar sürmüş işçi için dört hafta, işi birbuçuk yıldan üç yıla kadar sürmüş işçi için altı hafta, işi üç yıldan fazla sürmüş işçi için sekiz haftadır.",
              "Örneğin işyerindeki kıdemi beş ay olan bir işçinin bildirim süresi iki hafta olduğundan, kötüniyet tazminatı iki haftalık ücretinin üç katı olacaktır.",
              "Ücret, çıplak ücret ve giydirilmiş ücret olarak ikiye ayrılmaktadır. Çıplak ücret başka bir ifadeyle temel ücret, işçinin aylık aldığı sabit ücret miktarıdır. Giydirilmiş ücret yani geniş anlamda ücret ise, işçiye ödenen temel ücretin yanı sıra, kendisine sağlanan ve maddi karşılığı olan bütün menfaatlerin ücrete yansıtılması suretiyle bulunan ücrete denmektedir.",
              "İş Kanunu’nun 17. maddesinin son fıkrasına göre kötüniyet tazminatın hesabında, işçinin almış olduğu ücreti dışında ek olarak işçiye sağlanmış para ve para ile ölçülebilir menfaatlerin de göz önünde tutulması gerekmektedir. İş Kanunu 32. maddesinde yer alan işçinin almış olduğu ücrete ek olarak aldığı ikramiye, devamlılık arz eden prim, yakacak yardımı, kira, yemek yardımı, servis yardımı ve benzeri ödemeler giydirilmiş ücret olarak kabul edilmektedir.(25)",
              "Yargıtay yerleşik içtihatlarında da Kanun’da yer alan haliyle, kötüniyet tazminatının hesaplanmasında, işçiye ücreti dışında sağlanmış para veya para ile ölçülebilir menfaatlerin dikkati alınması gerektiğinin üzerinde durmaktadır.(26)",
              "Bu haliyle kötüniyet tazminatı hesabının, işçinin hak kazanmış olduğu giydirilmiş ücret ücreti üzerinden yapılması gerekmektedir.",
            ],
          },
          {
            heading: "II.2. Bildirim Önellerinin Arttırılması Halinde Kötüniyet Tazminatı",
            subheading: "II. Kötüniyet Tazminatının Hesaplanması",
            paragraphs: [
              "İşveren ile işçi arasındaki sözleşmeler veya toplu iş sözleşmeleri ile, İş Kanunu 17. maddesinde belirtilen bildirim süreleri arttırılabilmektedir. Kötüniyet tazminatı hesaplanırken, Yasa’da bildirim süresindeki ücretin üç katı tutarında arttırılacağına dair ibare olduğu için, taraflar arasında kararlaştırılan sürenin mi yoksa Yasa’da yer alan sürenin mi esas alınacağı konusunda Yargıtay ve öğretideki görüşler farklılık göstermektedir.",
              "Öğretideki görüşlerden bir tanesinde, İş Kanunu’nun 17. maddesinde yer alan hükümde, “bildirim süresi” ibaresinin yalnızca kanuni değil, sözleşmelerdeki bildirim süresini de kapsadığı için, sözleşmelerdeki bildirim süresinin arttırılması halinde kötüniyet tazminatının hesabında arttırılmış bildirim süresinin esas alınması gerektiğini ileri sürmektedir.(27)",
              "Diğer taraftan Yargıtay ise bir kararında, işçi ve işveren arasındaki sözleşme ile bildirim süresi arttırılmış olsa dahi kötüniyet tazminatı hesaplanırken İş Kanunu’nda yer alan yasal bildirim sürelerinin esas alınması gerektiği yönünde karar vermiştir.(28)",
            ],
          },
          {
            heading: "III.1. Kötüniyet Tazminatı ve Sendikal Tazminat",
            subheading: "III. Kötüniyet Tazminatının Diğer Tazminatlarla İlişkisi",
            paragraphs: [
              "İşveren tarafından, iş sözleşmesini fesih hakkının kötüye kullanılmasını sağlayan sebeplerden bir tanesi, işçinin sendikal faaliyetleridir.(29) Sendikalar ve Toplu İş Sözleşmeleri Kanunu’nun 25. maddesi 2. fıkrasına göre işveren, sendikal faaliyetlerde bulunan işçiler ile diğer işçiler arasında ayrımcılık yapılamayacağını belirtmektedir. Yine aynı maddenin 3. fıkrasında işverenin, işçinin bir sendikaya üye olması, sendikal faaliyetlerde bulunması v.b. hallerde bulunması durumunda işten çıkartılamayacağından dolayı, işverenin aksi davranışı hakkın kötüye kullanılması olarak yorumlanmaktadır. Sendikal bir nedenle iş sözleşmesinin feshi halinde işçi, dava açma hakkına sahiptir. İlgili maddedeki sebeplere aykırılık halinde, işçinin bir yıllık ücret tutarından az olmamak üzere sendikal tazminata hükmedilir. İşçi herhangi bir zarara uğramasa dahi, sendikal tazminata hak kazanmaktadır.",
              "Sendikal tazminat, kötüniyet tazminatının özel bir halini oluşturduğundan, işveren hem kötüniyet tazminatından hem de sendikal tazminattan sorumlu tutulamaz.(30)",
              "Yargıtay da içtihatlarında, hem kötüniyet tazminatının hem de sendikal tazminatın aynı anda talep edilemeyeceğinden bahsetmektir. Bir içtihadında; hakkın kötüye kullanılmasını oluşturan fesih nedenleri arasında en önemlisinin, işçinin sendikaya üye olması veya sendikal faaliyette bulunmasının sebep olmasını kabul etmiştir. Sendikal tazminatın, kötüniyet tazminatının özel bir halini oluşturduğundan işçi lehine hem sendikal hem de kötüniyet tazminatının hüküm altına alınması mümkün olmayacağına değinmiştir. Sendika üyeliği veya sendikal faaliyet nedeniyle iş sözleşmesinin feshedildiğinin iddia ve ispat edilmesi halinde münhasıran Sendikalar Kanunu’nun 31. maddesinde ( Sendikalar ve Toplu İş Sözleşmeleri Kanununun 25. maddesi ) öngörülen sendikal tazminatın uygulanması gerektiğini belirtmektedir.(31)",
              "Yargıtay Genel Kurulu vermiş olduğu bir kararda kötüniyet tazminatı ile sendikal tazminatı yorumlarken; \"iş güvencesine tabi olmayan işçiler işverence iş sözleşmesinin kötüniyetle feshi hâlinde İş Kanununun 17. maddesindeki kötüniyet tazminatını ve sendikal nedenle fesihlerde 6356 Sayılı Kanunun 25. maddesindeki tazminatı talep edebilecekler” şeklinde kararında yer almıştır.(32) Yargıtayın bu kararındaki cümleden, kötüniyetle fesih halinde kötüniyet tazminatı ve sendikal nedenlerdeki fesih tazminatını aynı anda talep edebileceği şeklinde algılansa da, kararın tamamı değerlendirildiğinde birlikte talep edilemeyecekleri sonucu çıkmaktadır. Yargıtayın yerleşik içtihatlarında sendikal tazminatın, kötüniyet tazminatının özel bir halini oluşturduğu kabul edildiğinden, birlikte hak kazanılmasına imkan bulunmamaktadır.",
            ],
          },
          {
            heading: "III.2. Kötüniyet Tazminatı ve Ayrımcılık Tazminatı",
            subheading: "III. Kötüniyet Tazminatının Diğer Tazminatlarla İlişkisi",
            paragraphs: [
              "Ayrımcılık tazminatı, işveren tarafından eşit davranma borcunun ihlali sonucunda, işçiye ödenen bir tazminat çeşididir. İşveren, İş Kanunu 5. maddesinde belirtilen eşit davranma yükümlülüğünü yerine getirmediği hallerde, ilgi maddenin 6. fıkrası gereği tazminata mahkum edilmektedir. Aynı fıkranın devamında ise, 2821 sayılı Sendikalar Kanunu 31. maddesi (Sendikalar ve Toplu İş Sözleşmeleri Kanunu’nun 25. maddesi) saklı tutulmuştur. Buradan hareketle, sendikal tazminat ile ayrımcılık tazminatının aynı anda talep edilemeyeceği sonucuna varılmaktadır.",
              "Kötüniyet tazminatının, ayrımcılık tazminatıyla birlikte talep edilip edilemeyeceği hususunda öğretide farklı görüşler mevcuttur. Bir görüşe göre; ayrımcılık tazminatının sadece sendikal tazminatla birlikte talep edilemeyeceğini belirtmektedir. Yasa maddesinde anılan hükmün, karşıt kavramından, ayrımcılık tazminatının kötüniyet tazminatıyla birlikte istenebileceği sonucu öğretideki görüşlerden biridir.(33)",
              "Bir diğer görüşe göre; Yasa’da ayrımcılık yapılmak suretiyle gerçekleşen fesih sebebiyle ayrımcılık tazminatı talep edilebildiği gibi, aynı zamanda, kötüniyetin yaptırımı olarak da tazminata hükmedileceği ayrı ayrı düzenlenmiş olduğundan, her iki tazminat da talep edilebilir durumdadır.(34)",
              "İki görüş netice itibariyle birbiriyle paralellik göstermektedir. Karşıt görüş olarak ise; işçilerin hem ayrımcılık tazminatına hem de kötüniyet tazminatına hak kazanmalarının mümkün olma¬dığını ifade etmektedir.(35)",
              "Yargıtay ise, 2012 tarihli bir kararında, işverenin aynı davranışı nedeniyle birden fazla hukuki yaptırım ile karşılaşmasının mümkün olmaması nedeniyle, iş güvencesi tazminatı ile aynı zamanda ayrımcılık tazminatına hükmedilmesinin mümkün olmadığını kabul etmiştir. Yargıtay, kötüniyet tazminatı ile ayrımcılık tazminatının birlikte istenemeyeceğini kabul etmiştir.(36)",
              "Yargıtayın benimsemiş oluğu ve öğretide bazı görüşlerin aksine Süzek vermiş olduğu bir örnekte; işveren aleyhine tanıklık eden ve iş güvencesinin kapsamı dışındaki işçilerden, sadece kadınların işten çıkartılması durumunda hem ayrımcı nitelikte hem de kötüniyetli bir feshin olduğunu savunmakta olup her iki tazminatı da aynı zamanda talep edilebileceğini söylemektedir.(37)",
              "Yargıtay sonraki senelerde vermiş olduğu bir kararında ise evvelki kararından farklı olarak, ayrımcılık tazminatı ile kötüniyet tazminatının birlikte istenememesine ilişkin herhangi bir yorum yapmamış ve her iki tazminatın da birlikte istenebileceğini zımnen kabul etmiş görünmekte ise de kararın bütün olarak değerlendirilmesinde fayda bulunmaktadır. Şöyle ki; işçi, davalı şirket bünyesinde editör olarak çalıştığını, iş akdinin hiçbir haklı ve geçerli nedene dayanmaksızın feshedildiğini, yasal doğum iznini kullanmak üzere işyerinden ayrıldığını, işe başlamak için işyerine geldiğinde, iş sözleşmesinin feshedildiğini, fesih nedeninin gebelik durumu olduğunu, işverenin ayrımcı bir tavır sergilediğini, bebek sahibi birinin işe yaramayacağı düşüncesiyle iş akdinin feshedildiğini, bu durumun eşit davranma ilkesine aykırı olduğunu ileri sürerek, eşit davranmama ve kötüniyet tazminatının işverenden tahsilini istemiştir. Mahkeme yasal koşullar oluşmadığı sebebiyle davanın reddine karar vermiştir. Yerel mahkemenin kararı, eksik inceleme ve araştırma sebebiyle Yargıtay tarafından bozulmuştur.(38) Yerel Mahkeme bu defa, davacının kötüniyet tazminatı yönünden davanın kabulüne karar vermiş fakat ayrımcılık tazminatı yönünden ise herhangi bir hüküm tesis etmemiştir. Yargıtayın önüne ikinci defa gelen dosyada yapılan incelemede; talep edilen kötüniyet tazminatı yönünden harç yatırılmadığı için karar verilmesine yer olmadığına dair karar verilmesi gerekirken, davanın bu yönden kabulü ile ayrımcılık tazminatı içinde yine araştırma yapılmadan karar verildiğinden, yerel mahkemenin kararını ikinci kez bozmuştur.(39) Yargıtay tarafından bozulan karar sonucundan yapılan yargılamada Mahkeme, kötüniyet tazminatı yönünden karar verilmesine yer olmadığına ve ayrımcılık tazminatı için ise şartları oluşmadığından davanın reddine karar vermiştir. Yargıtayın önüne üçüncü kez gelen dosyada ise Yargıtay, ayrımcılık tazminatı yönünden Mahkeme tarafından yine inceleme yapılmadığı gerekçesi ile kararı üçüncü kere bozmuştur. (40)",
              "Yargıtayın vermiş olduğu kararlarda görüldüğü üzere, ısrarla ayrımcılık yönünden şartların oluşup oluşmadığına dair araştırmanın ve değerlendirmenin yapılmasını istemektedir. Fakat yerel mahkeme kötüniyetle iş akdinin feshi ile ayrımcılığın arasında yapmış olduğu değerlendirme ile ayrımcılık tazminatı değerlendirmesini eş tutmuştur. Yukarıda belirtilen Yargıtayın kararlarında her iki tazminat için de inceleme yapılmış olsa da, yapılan bu araştırma sebebiyle her iki tazminatın da talep edilebileceği sonucuna varılmaması gerekmektedir. Çünkü, kötüniyet tazminatı talep edilirken usul yönünden işlemler eksik ikmal edilmiştir. Usul, esastan önce gelir ilkesinden dolayı Yargıtay, kötüniyet tazminatı açısından işin esasına girmeden eksik harç yatırıldığından talebin reddine dair hüküm tesis etmiştir.",
              "Bu haliyle Yargıtayın değerlendirme yaparken üzerinde durduğu husus, her iki tazminatın da koşullarının oluşması halinde, hangi tazminat işçinin lehine ise o tazminat yönünden karar vermesidir. Yani Yargıtay tek bir eyleme iki farklı ceza verilemeyeceği görüşünden yola çıktığında, her iki tazminata aynı anda karar vermemektedir.",
            ],
          },
          {
            heading:
              "III.3. Kötüniyet Tazminatı ile İhbar Tazminatı ve Kıdem Tazminatı İlişkisi",
            subheading: "III. Kötüniyet Tazminatının Diğer Tazminatlarla İlişkisi",
            paragraphs: [
              "İşçinin iş sözleşmesi, İş Kanunu 25. maddesi 2. bendinde yer alan ahlak ve iyi niyet kurallarına uymayan davranışlar haricinde feshedilmişse ve işçi işyerinde bir seneden fazla çalışmış ise kıdem tazminatına hak kazanmaktadır. Bu haliyle iş akdi kötüniyetle feshedilen işçi, kıdem tazminatına hak kazanmaktadır.",
              "İhbar tazminatı yönünden ise, iş akdinin usulüne uygun feshi ve usulsüz feshi olarak ikiye ayrılmaktadır. İş Kanunu’nda ihbar tazminatı ile ilgili düzenleme 17. maddede yer almaktadır. İşveren, süreli fesih hakkını usulüne uygun bir şekilde kullanmış ise ihbar tazminatı doğmayacaktır. Fakat işveren, İş Kanunu 17. maddesi 2. bendinde yer alan bildirim sürelerine uymadan iş akdini feshetmesi halinde usulsüz feshin varlığı kabul edilmektedir.",
              "İşçinin iş sözleşmesinin usulsüz feshedilmesi halinde, başka bir deyişle bildirim sürelerine riayet edilmemesi halinde, işçi hem ihbar tazminatına(41) hak kazanacak hem de kötüniyetli feshin koşullarının oluşması durumunda kötüniyet tazminatını talep etme hakkı olacaktır.",
              "Kötüniyet tazminatı hesaplanırken bildirim süreleri esas alınmaktadır. İki tazminat arasındaki en belirgin fark ise, ihbar tazminatı yönünden bildirim süreleri işçi ve işveren arasında arttırılabilir iken Yargıtay kötüniyet tazminatının hesaplanmasında taraflar arasında arttırılan bildirim sürelerinin değil, yasal bildirim sürelerinin esas alınacağı yönünde kararlar vermektedir. (42)",
            ],
          },
          {
            heading:
              "III.4. Kötüniyet Tazminatı ile Maddi ve Manevi Tazminat İlişkisi",
            subheading: "III. Kötüniyet Tazminatının Diğer Tazminatlarla İlişkisi",
            paragraphs: [
              "İş Kanunu’nda, iş akdinin usulsüz feshedilmesi sebebiyle işçinin hak kazanacağı tazminatların, zararını karşılamaması durumunda, oluşan zararını tazmin edebilmek için herhangi bir düzenleme bulunmamaktadır. Bu sebeple, işçinin hak kazandığı tazminat tutarının zararını karşılamaması halinde, tazminat talebini genel hükümlere göre yapması yerinde olacaktır.",
              "İşçinin maddi tazminat talebi, sözleşmenin kötüniyetli feshi sebebiyle hak kazanacağı tazminat tutarının zararını karşılamaması durumunda söz konusu olabilir. Manevi tazminat talebi ise, kötüniyetli fesih sebebiyle işçinin haysiyetinin zarar görmesi halinde işverenden talepte bulunulabilir.",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: [
              "İş güvencesi kapsamında bulunmayan işçiler, belirsiz süreli iş sözleşmelerinin işveren tarafından, fesih hakkının kötüye kullanılması suretiyle sonlandırıldığını ispat etme konusunda zorluklarla karşılaşmaktadır. İşveren tarafından iş akdinin feshi hakkın kötüye kullanılması suretiyle sonlandırıldığında işçi kötüniyet tazminatı isteyebilir. Bu durumda, işveren tarafından yapılan fesih geçerli fesih gibi sonuç doğurur ve işçinin fesih bildirim sürelerinin üç katı tutarında tazminatı söz konusu olmaktadır.",
              "Yasa maddelerinin yorumlanmasında öğretide karşıt görüşler olduğu gibi Yargıtayın da öğretiden ayrıldığı görüşleri bulunmaktadır. Kanun’da belirleyici ayrımlar yapılmadığı için uygulamada çoğu zaman kötüniyet tazminatı ile ayrımcılık tazminatı karıştırılmaktadır. Aynı olaylar için mahkemeler, kimi zaman ayrımcılık tazminatına, kimi zamanda kötüniyet tazminatına hükmetmektedirler. Tazminat çeşitleri her ne kadar Yasa’da farklı maddelerde yer alsalar da, birlikte talep edilip edilemeyeceğine dair herhangi bir madde bulunmadığı için uygulamada zorluklar yaşanmaktadır.",
              "Bunun yanında sendikal faaliyetleri sebebiyle kötüniyetli olarak iş akdi sonlandırılmış olan işçinin, sendikal tazminatı ile beraber kötüniyet tazminatını beraber talep edip edemeyeceği hususu da Kanun’da yer almamaktadır. Bu bağlamda, iş güvencesi hükümlerinin uygulanmadığı veya iş güvencesi hükümlerinden yararlanamayan işçilerin, ihbar ve kıdem tazminatları dışında talep edebilecekleri kötüniyet tazminatının, diğer tazminatlarla olan ilişkilerinin Yasa’da daha net olarak açıklanmaması, ispat külfeti altında olan işçi yönünden durumu daha da zorlaştırmaktadır.",
            ],
          },
          {
            heading: "Kaynakça",
            paragraphs: [
              "Alaslan, F., “Medeni Hukuk’da Dürüstlük Kuralı ve Hakkın Kötüye Kullanılması Yasağı”, Çankaya Üniversitesi Hukuk Fakültesi Dergisi, C:1, S:2, Ekim 2016, s.413-434, (https://www.jurix.com.tr/article/5496 , 30.05.2020).",
              "Ateş, Derya., “Sözleşme Özgürlüğü Yönünden Dürüstlük Kuralı”, TBB Dergisi, S:72, 2007, s.:75-93, (http://tbbdergisi.barobirlik.org.tr/m2007-72-352 , 30.05.2020).",
              "Çelik, N., İş Hukuku Dersleri, Yenilenmiş 18.Bası, İstanbul: Beta, 2005.",
              "Demir, F., Sorularla Bireysel İş Hukuku, C:1, TBB Yayınları:98, Ankara: Şen Matbaa, 2006, (http://tbbyayinlari.barobirlik.org.tr/TBBBooks/sorularla-bireysel-is-hukuku-cilt1.pdf , 02.06.2020).",
              "Doğan, G., Ayrımcılık Tazminatı-Sendikal Tazminat (Dayandıkları Esaslar Ve Farklılıklar), Ankara Barosu Dergisi, S.2014/1, s.361-390, ( http://www.ankarabarosu.org.tr/siteler/ankarabarosu/tekmakale/2014-1/13.pdf , 01.06.2020)",
              "Kamu-İş; Kamu İşletmeleri İşveren Sendikası, Çalışma Hayatı İle İlgili Yargıtay Kararları 2000-2005, Ankara, 2006, ( http://www.kamu-is.org.tr/pdf/2000_2005.pdf , 02.06.2020).",
              "Kandemir, M. / Yardımcıoğlu D., İş Hukukunda Eşitlik İlkesi, Dicle Üniversitesi Hukuk Fakültesi Dergisi, C:19, S:30-31, 2014, s.1-44, (https://dergipark.org.tr/en/download/ issue-full-file/23030 , 30.04.2020).",
              "Kılıçoğlu, M., “İş Hukukunda Dürüstlük Kuralı Ve Hakkın Açıkça Kötüye Kullanılması Yasağı ( Özellikle Yargıtay Uygulaması Açısından )”, İstanbul Kültür Üniversitesi Hukuk Fakültesi Dergisi, C:15, Sayı:1-1, Ocak-Şubat 2016, s.721-747, (https://www.jurix.com.tr/article/5527 , 01.06.2020).",
              "Kılıçoğlu, M. / Şenocak, K., İş Kanunu Şerhi Cilt: I, Birinci Baskı, İstanbul: Legal Yayıncılık, 2008.",
              "Süzer, S., İş Hukuku, 18. Baskı, İstanbul: Beta, 2019.",
              "Tunçomağ, K. / Centel, T., İş Hukukunun Esasları, 4. Bası, İstanbul: Beta Basım, 2005",
              "Uyar, T., Yargıtay Kararlarında “Dürüstlük Kuralı” ve “Hakkın Kötüye Kullanılması Yasağı”, Prof. Dr. Seyfullah Edis’e Armağan, Dokuz Eylül Üniversitesi Hukuk Fakültesi Yayınları, İzmir, 2000 , s.439-465, (https://hukuk.deu.edu.tr/wp-content/uploads/2020/01/T.Uyar-3.pdf , 25.05.2020).",
              "1 Alaslan, F., Medeni Hukuk’da Dürüstlük Kuralı ve Hakkın Kötüye Kullanılması Yasağı, Çankaya Üniversitesi Hukuk Fakültesi Dergisi, C:1, S:2, s.413-434, Ekim 2016, s.414. ↩",
              "2 Uyar, T., Yargıtay Kararlarında “Dürüstlük Kuralı” ve “Hakkın Kötüye Kullanılması Yasağı” ( Prof. Dr. Seyfullah Edis’e Armağan ), Dokuz Eylül Üniversitesi Hukuk Fakültesi Yayınları, İzmir, 2000, s.440. ↩",
              "3 Alaslan, F., Medeni Hukuk’da Dürüstlük Kuralı ve Hakkın Kötüye Kullanılması Yasağı, Çankaya Üniversitesi Hukuk Fakültesi Dergisi, C:1, S:2, s.413-434, Ekim 2016, s.415. ↩",
              "4 Y12HD 2012/18690 E. 2012/25539 K. 10.09.2012. ↩",
              "5 Ateş, Derya., Sözleşme Özgürlüğü Yönünden Dürüstlük Kuralı, TBB Dergisi, S:72, s.75-93, 2007, s.83. ↩",
              "6 Süzek, S., İş Hukuku, s.525. ↩",
              "7 Y 9 HD 23.01.2006, 2005/18877 E. 2006/960 K. ↩",
              "8 Süzek, S., İş Hukuku, s.525. ↩",
              "9 YHGK 07.02.2019, 2015/22-2548 E. 2019-92 K. ↩",
              "10 Kılıçoğlu, M., İş Hukukunda Dürüstlük Kuralı Ve Hakkın Açıkça Kötüye Kullanılması Yasağı ( Özellikle Yargıtay Uygulaması Açısından ),C:15, Sayı:1-1, Ocak-Şubat 2016, s.721-747, s.729. ↩",
              "11 Y9HD 2005/1104 E. 2005/31842 K. 03.10.2005. ↩",
              "12 Y9HD 2001/11407 E. 2001/15322 K. 02.10.2001. ↩",
              "13 YHGK 5.5.2004 , 20049-256 E. 2004/264 K., Kılıçoğlu, M. / Şenocak, K. İş Kanunu Şerhi, s.332. ↩",
              "14 Y9HD 18.2.1970 , 1970/12236 E. 1970/14417 K., Kılıçoğlu, M. / Şenocak, K. İş Kanunu Şerhi, s.321. ↩",
              "15 Süzek, S., İş Hukuku, s.525. ↩",
              "16 Y 9 HD 26.03.2019, 2015/31771 E. 2019/6786 K. ↩",
              "17 Süzek, S., İş Hukuku, s.532. ↩",
              "18 YHGK 2015/22-2548 E. 2019/92 K. 07.02.2019. ↩",
              "19 Y 9HD 2007/24019 E. 2008/15755 K. 03.07.2008. ↩",
              "20 Y 9HD 2019/6388 E. 2019/19765 K. 13.11.2019. ↩",
              "21 Y 9HD 2017/9196 E. 2018/23598 K. 19.12.2018. ↩",
              "22 Y 9HD 2015/18872 E. 2018/10854 K. 15.05.2018. ↩",
              "23 Süzek, S., İş Hukuku, s.508. ↩",
              "24 Tunçomağ, K / Centel, T., İş Hukukunun Esasları, s.191 ↩",
              "25 Y22HD 2017/16451 E. 2018/1291 K. 24.01.2018. ↩",
              "26 Y 9HD 2007/21422 E. 2008/15336 K. 12.06.2008. ↩",
              "27 Kılıçoğlu, M. / Şenocak, K. İş Kanunu Şerhi,s.323. ↩",
              "28 Y 9HD 2003/21909 E. 2003/22733 K. 15.12.2003, Demir, F., Sorularla Bireysel İş Hukuku, C:1, s.427. ↩",
              "29 Süzek, S., İş Hukuku, s.530. ↩",
              "30 Kılıçoğlu, M. / Şenocak, K. İş Kanunu Şerhi, s.322. ↩",
              "31 Y9HD, 12.04.2011, 2011/17360 E. 2011/10837 K. ↩",
              "32 YHGK 07.02.2019, 2015/22-2548 E. 2019-92 K. ↩",
              "33 Süzek, S., İş Hukuku, s.456. ↩",
              "34 Doğan, G., Ayrımcılık Tazminatı-Sendikal Tazminat (Dayandıkları Esaslar Ve Farklılıklar), Ankara Barosu Dergisi, S.2014/1, s.361-390, s.373. ↩",
              "35 Kandemir, M. / Yardımcıoğlu D., İş Hukukunda Eşitlik İlkesi, Dicle Üniversitesi Hukuk Fakültesi Dergisi, C:19, S:30-31, 2014, s.1-44, s.37. ↩",
              "36 Y22.HD. 2012/29053 E. 2013/27095 K. 29.11.2013. ↩",
              "37 Süzek, S. İş Hukuku,s.457. ↩",
              "38 Y9.HD. 2014/36886 E. 2016/8241 K. 04.04.2016. ↩",
              "39 Y9.HD. 2018/1222 E. 2018/3833 K. 22.02.2018. ↩",
              "40 Y9.HD. 2018/8282 E. 2018/17510 K. 04.10.2018. ↩",
              "41 Çelik, N., İş Hukuku Dersleri, s.192. ↩",
              "42 Y9HD 2000/9727 E. 2000/8950 K. 21.06.2000, Kamu-İş; Kamu İşletmeleri İşveren Sendikası, Çalışma Hayatı İle İlgili Yargıtay Kararları 2000-2005, s.70. ↩",
            ],
          },
        ],
      },
      en: {
        slug: "bad-faith-compensation",
        title: "Bad Faith Compensation",
        category: "Employment Law",
        date: "08 April 2024",
        author: "HCC Law Office",
        excerpt:
          "A concise review of the conditions, scope and legal consequences of bad faith compensation in employment relationships.",
        seoTitle: "Bad Faith Compensation | HCC Law Office",
        seoDescription:
          "An overview of bad faith compensation, its legal framework and the practical implications of termination disputes in employment law.",
        introduction:
          "Bad faith compensation is a specific concept that comes into focus where the right of termination is alleged to have been exercised contrary to good faith. This article is structured to examine its legal basis, practical limits and the key considerations that arise in employment disputes.",
        sections: [
          {
            heading: "Legal Framework",
            subheading: "Balancing good faith and termination rights",
            paragraphs: [
              "Bad faith compensation becomes relevant where the employer's termination right is said to have been exercised in a manner inconsistent with objective good faith. Its interaction with job security rules means that each case requires careful legal classification.",
              "In practice, the outcome often depends on the reasons advanced for termination, the surrounding process and the conduct of the parties before and during the dispute.",
            ],
            bullets: [
              "The reason relied upon for termination",
              "Whether job security provisions apply",
              "How party conduct is assessed under good faith principles",
            ],
          },
          {
            heading: "Evidence and Process",
            subheading: "Building the evidentiary foundation of the dispute",
            paragraphs: [
              "Correspondence, performance records, warning procedures and documented reasons for termination frequently shape the outcome of the dispute. Proper documentation is critical for employers, while contextual evidence remains equally important for employees.",
              "Early legal review helps clarify which claims can be advanced on which evidentiary basis and reduces avoidable procedural risk.",
            ],
            bullets: [
              "Written termination notices and supporting documents",
              "Performance and process records",
              "Prior communications relevant to the employment relationship",
            ],
          },
          {
            heading: "Closing Remarks",
            paragraphs: [
              "Bad faith compensation requires a broader assessment than the mere fact of termination. The purpose, method and surrounding circumstances of the termination must be reviewed together.",
              "Accordingly, a structured and well-documented process remains essential for both employers and employees.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "prepaid-housing-sale",
    image: "/articles/on-odemeli-konut-satis-sozlesmesi.jpg",
    publishedAt: "2024-03-21",
    locales: {
      tr: {
        slug: "on-odemeli-konut-satis-sozlesmesi",
        title: "Ön Ödemeli Konut Satış Sözleşmesi",
        category: "Tüketici Hukuku",
        date: "İstanbul, 2020",
        author: "Av. Hasan Can Cebeci",
        excerpt:
          "Ön ödemeli konut satış sözleşmelerinin tanımı, şekil şartları, zorunlu içeriği ve şekle aykırılığın sonuçları bakımından temel hukuki değerlendirmeler.",
        seoTitle:
          "Ön Ödemeli Konut Satış Sözleşmesi | HCC Avukatlık Bürosu",
        seoDescription:
          "Ön ödemeli konut satış sözleşmelerinde tüketicinin korunması, şekil şartı, satış vaadi ve şekle aykırılığın sonuçlarına ilişkin temel hukuki değerlendirmeler.",
        introduction:
          "Çoğu insanın hayalleri arasında kendine ait bir evinin olması vardır. Günümüz ekonomik koşullarında ise bireylerin para biriktirmek suretiyle konut sahibi olabilmeleri çok uzun yıllarını almaktadır. Toplum arasında “sat-yap” veya “maketten satış” olarak tabir edilen ve genelde henüz ortada olmayan çok katlı yapılar, inşaat firmaları tarafından henüz inşasına başlanmadan veya inşası sırasında satışa çıkartılarak, satıcılara finansman olanağı sağlamakla birlikte, tüketici yönünden ise fiyat sabitlemesi ve inşaatı tamamlanmış bir yapıya göre daha makul fiyat avantajı olduğundan sıklıkla tercih edilmektedir.\n\nGüçlü inşaat firmaları karşısında tüketiciler, çeşitli zamanlarda işletmede yaşanan sorunlar veya su istimal sebebiyle mağduriyetler yaşamışlardır. Tüketicilerin yaşamış olduğu bu mağduriyetleri azaltmak için Tüketicinin Korunması Hakkında Kanun’da ön ödemeli konut satışı düzenlenmiştir. Genelde inşaat firmalarının bireylerin konut sahibi olma arzularını su istimal etmemeleri için Yasa’da tüketiciyi korumaya yönelik bir takım düzenlemelere yer verilmiştir. Ön ödemeli konut satış sözleşmeleri için şekil zorunluluğunun getirilmesi de Yasa’da yer alan düzenlemelerden bir tanesidir.",
        sections: [
          {
            heading: "I.1. Tanımı ve Kapsamı",
            subheading: "I. Ön Ödemeli Konut Satış Sözleşmesi",
            paragraphs: [
              "Halk arasında “maketten satış veya sat-yap” olarak da isimlendirilen ve genellikle inşasına henüz başlanmamış konutlar için, tüketicinin ön ödemeli konut satış sözleşmesi ile ödeme yapmaya başlaması sebebiyle özel bir korumayı gerektirdiğinden, 6502 sayılı Tüketicinin Korunması Hakkında Kanun’da özel olarak düzenlenmiştir.(1) 6502 sayılı Kanunun 40. maddesinin 1. fıkrasında “Ön ödemeli konut satış sözleşmesi, tüketicinin konut amaçlı bir taşınmazın satış bedelini önceden peşin veya taksitle ödemeyi, satıcının da bedelin tamamen veya kısmen ödenmesinden sonra taşınmazı tüketiciye devir veya teslim etmeyi üstlendiği sözleşmedir” olarak tanımlanmıştır.",
              "Ön ödemeli konut sözleşmesinden doğan uyuşmazlıklarda 6502 sayılı Kanunun 40-46. maddeleri uygulanmak olup, uyuşmazlıklara ilişkin ilgili maddelerde düzenleme olmaması halinde 6502 sayılı Kanun’da düzenlenen taksitli satış sözleşmesi ve Türk Borçlar Kanunu’nda yer alan ön ödemeli taksitle satış sözleşmesini düzenleyen maddeler kıyasen uygulanabilmektedir. (2)",
              "Yasa’da yer alan haliyle sözleşmenin kurulduğu tarih itibariyle henüz inşasına başlanmamış olan konutlar için bir sınırlandırılmada bulunulmamıştır. Bu haliyle, ön ödemeli konut satış sözleşmeleri sadece “maketten satış” şeklinde isimlendirilen konutlar için değil, sözleşmenin kurulduğu tarih itibariyle inşası bitmiş konutlar için de yapılabilmektedir.(3)",
              "Ön ödemeli konut satış sözleşmeleri, Türk Borçlar Kanunu 264. maddesindeki ön ödemeli taksitle satış sözleşmesinden iki konuda ayrılmaktadır. Ön ödemeli taksitle satış sözleşmesinde satıcı, sözleşmeye konu satış bedelinin tamamının ödenmesinden sonra, satışa konu malı devretme borcuna altına girmektedir. Diğer taraftan ön ödemeli konut satışının konusu taşınmaz olmasıyla birlikte, satıcı, satış bedelinin kısmen ödenmiş olması taşınmazın teslimi için yeterlidir.",
              "Tüketicinin Korunması Hakkında Kanun 17. maddesi 1. fıkrasında taksitle satış sözleşmesi düzenlenmiş olup, düzenlemeye göre sözleşme konusu mal, satış bedelinin ödenmesinden evvel alıcıya teslim edilmektedir. Fakat ön ödemeli konut satış sözleşmelerinde ise satışa konu taşınmaz, satış bedelinin bir kısmı veya tamamı ödendikten sonra alıcıya teslim edilmektedir.",
            ],
          },
          {
            heading: "I.2. Unsurları",
            subheading: "I. Ön Ödemeli Konut Satış Sözleşmesi",
            paragraphs: [
              "Ön ödemeli konut satış sözleşmesinin tanımı 6502 sayılı Kanunun 40. maddesinin 1. fıkrasında ve aynı zaman da Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 4/1-ğ maddesinde yapılmaktadır. 6502 sayılı Kanunun 2. maddesine göre, Yasa kapsamına giren akitlerin tüketici sözleşmesi niteliğinde olması gerekmektedir. Aynı Kanunun 3/1/l maddesine göre de sözleşmenin tüketici işlemi olabilmesi için kamu tüzel kişileri de dâhil olmak üzere ticari veya mesleki amaçlarla hareket eden veya onun adına ya da hesabına hareket eden gerçek veya tüzel kişiler ile tüketiciler arasında kurulan sözleşme olması kafidir.",
              "Bölge Adliye Mahkemesi vermiş olduğu bir kararda, ön ödemeli konut satışı sözleşmesinde satıcının kamu hukuku tüzel kişisi olmasının, sözleşmenin tüketici işlemi olmasına engel teşkil etmeyeceğinden Tüketici Mahkemesi’nde görülmesi gerektiği yönünde karar vermiştir. (4)",
              "Bununla beraber sözleşmenin tarafının tüketici olması gerektiğinden, Yargıtay tüzel kişi tacirlerin tüketici sıfatına haiz olmadığını kabul etmektedir. (5)",
              "Ön ödemeli konut satış sözleşmesinin konusunun konut olması gerekmektedir. Tüketici, sözleşmenin konusu olan konutu barınma maksadıyla kullanmak için satın alıyor olmalıdır. Yani taşınmaz, ticari amaçla satın alınmış olmamalıdır.",
              "Sözleşme konusu taşınmazın satış bedelinin tamamen veya kısmen ödenmesinden sonra taşınmazın mülkiyetinin tüketiciye devir ve teslim edileceği hususunda mutabakat sağlanmalıdır. Buradan hareketle taşınmazın bedeli tüketici tarafından devirden evvel kısmen ödenebileceği gibi tamamen de ödenmesi mümkündür. Satıcı, sözleşme konusu bedeli kısmen de olsa tahsil ettikten sonra taşınmazı devir veya teslim etmelidir.",
            ],
          },
          {
            heading: "I.3. Hukuki Niteliği ve Zorunlu İçeriği",
            subheading: "I. Ön Ödemeli Konut Satış Sözleşmesi",
            paragraphs: [
              "Ön ödemeli konut satış sözleşmesinde satıcı, konutun mülkiyetinin tüketiciye devretme borcu altındayken tüketici ise taşınmazın bedelini ödeme borcu altındadır. Bu haliyle borçlanma işlemi niteliği taşımaktadır.(6) Taraflar, aralarındaki sözleşme ile karşılıklı olarak edimlerini ifa borcu altına girdiklerinden tam iki tarafa borç yükleyen bir sözleşmedir.",
              "Satıcının sözleşmeyle borçlanmış olduğu taşınmazın mülkiyeti ve zilyetliği devir borcunu tek bir seferde ifa etmesinden dolayı ani edimli bir sözleşme niteliğindedir. Tüketicinin, taşınmazın bedelini ödeme borcunu taksitler halinde ödemesi, ani edimli sözleşme olma özelliğini etkilememektedir. (7)",
              "Sözleşmenin kurulması için, tarafların karşılıklı iradelerinin örtüşmesinin yeterli olduğu ve zilyetliğin devredilmesi veya taşınmazın mülkiyetinin devredilmesi için tapu tescil işlemlerinin yapılması gerekmediğinden rızai sözleşme niteliğindedir.(8) Bir görüşe göre, 6502 sayılı Kanunun 41. maddesinin 1. fıkrasında yasa koyucu, ön ödemeli konut satış sözleşmesinin tapu müdürlüğünce resmi şekilde düzenlenmesini yeterli görmemiş ve taşınmazın mülkiyetinin de devrini zorunlu kılmıştır. Bu haliyle de, ön ödemeli konut satış sözleşmesinin real sözleşme olarak nitelendirilebileceği ifade edilmektedir.(9)",
              "Tüketicinin Korunması Hakkında Kanun 40. maddesi 2. fıkrasında, sözleşme kurulmadan en az bir gün evvel tüketiciye, Bakanlıkça belirlenen hususları içeren ön bilgilendirme formunun verilmesinin zorunlu olduğu hüküm altına alınmıştır. Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 5. maddesi 1. fıkrasında da ön bilgilendirme ile ilgili sözleşme kurulmadan en az bir gün evvel anlaşılabilir bir dilde, açık, sade ve okunabilir biçimde düzenlenen ön bilgilendirme formunun tüketiciye verilmesinin zorunlu olduğu belirtilmiştir.",
              "Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 7. maddesinde, ön ödemeli konut satış sözleşmesinde bulunması lazım gelen zorunlu içerikler açıklanmıştır. Maddenin birinci fıkrasında sözleşmenin en az on iki punto büyüklüğünde, anlaşılabilir bir dilde, açık, sade ve okunabilir biçimde düzenlenmesi gerektiği ve bir örneğinin de tüketiciye teslim edilmesi zorunlu kılınmıştır. Bu maddeye göre zorunlu olarak bulunması lazım gelen hususlar şunlardır; “a) Satıcının adı veya unvanı, açık adresi, telefon numarası ve varsa MERSİS numarası ile diğer iletişim bilgileri, b) Tüketicinin adı, soyadı, açık adresi, telefon numarası ve varsa diğer iletişim bilgileri, c) Sözleşmenin düzenlendiği tarih, ç) Sözleşme konusu konuta ilişkin bağımsız bölümün yer aldığı ada, parsel, blok, konum, kat ve benzeri temel nitelik bilgileri ile Planlı Alanlar Tip İmar Yönetmeliğine göre belirlenen bağımsız bölüm net ve brüt alanları, d) Konutun tüm vergiler dâhil Türk Lirası olarak satış fiyatı, varsa teslim ve diğer masraflara ilişkin bilgi, e) Konutun tüm vergiler dâhil Türk Lirası olarak toplam taksitli satış fiyatı; varsa teslim ve diğer masraflara ilişkin bilgi, f) Faiz miktarı ve faizin hesaplandığı yıllık oran ve sözleşmede belirlenen faiz oranının yüzde otuz fazlasını geçmemek üzere gecikme faiz oranı, g) Tüketicinin temerrüde düşmesinin hukuki sonuçları, ğ) Ön ödeme tutarı, h) Ödeme planı ve ödemelerin yapılacağı banka ve hesap bilgileri, ı) Cayma hakkının kullanılma şartları, süresi ve usulüne ilişkin bilgiler, i) Sözleşmeden dönme hakkının kullanılma şartları, süresi, usulü ile tazminata ilişkin bilgiler, j) Cayma ve sözleşmeden dönme bildirimlerinin yapılacağı açık adres bilgileri, k) Verilen teminata ilişkin bilgiler, l) Konutun teslim tarihi ve şekli, m) Yapı ruhsatının alınış tarihi, n) Konutun ortak giderlerine ilişkin bilgiler, o) Tüketicilerin uyuşmazlık konusundaki başvurularını tüketici mahkemesine veya tüketici hakem heyetine yapabileceklerine dair bilgi.”. Maddenin ikinci fıkrasında ise peşin ödemede bulunulması halinde sayılan bilgilerden e, f, g, ğ ve h bentlerinde yazılı olanların bulunmasının zorunlu olmadığı belirtilmiştir.",
              "Ön ödemeli konut satış sözleşmelerinde tüketiciyi, sözleşme kurulmadan evvel koruyan bir düzenleme de 6502 sayılı Kanunun 40. maddesi 3. fıkrasında düzenlenmiş olup, yapı ruhsatı alınmadan tüketiciyle sözleşme yapılamayacağı belirtilmektedir. Yasal düzenlemede belirtilen yapı ruhsatı inşaat ruhsatıdır. Bu husus sağlanmadığı müddetçe satıcı ile tüketici arasında sözleşme kurulamayacaktır.(10)",
            ],
          },
          {
            heading: "II.1. Genel Olarak Şekil",
            subheading: "II. Ön Ödemeli Konut Satış Sözleşmesinde Şekil",
            paragraphs: [
              "Türk özel hukukunda sözleşme özgürlüğü temel ilkelerden biri olup şekil serbestisi prensibi geçerlidir. Taşınmaz satışı ile alakalı düzenlemeler Türk Medeni Kanunu 706. maddesi 1. fıkrası ve Türk Borçlar Kanunu 237. maddesinde yer almaktadır. İlgili yasa maddeleri gereği taşınmaz mülkiyetinin devrini içeren sözleşmeler resmi şekilde yapılmadıkça kesin hükümsüz olduğu kabul edilmektedir. Bu haliyle, taşınmaz mülkiyetinin devrini amaçlayan sözleşmeler tapu müdürlükleri dışında yapılması durumunda herhangi bir sonuç doğurmamaktadır. Çünkü taşınmaz devri ile alakalı sözleşmeleri düzenleme yetkisi ancak tapu sicil müdürlüğü ile tapu sicil görevlilerine aittir.(11)",
              "Taşınmaz satış sözleşmelerini ve taşınmaz satış vaadi sözleşmelerini düzenleme yetkisi 2664 sayılı Tapu Kanunu 26. maddesi uyarınca tapu memurlarına ve ayrıca taşınmaz satış vaadi sözleşmelerini düzenleme yetkisi 1512 sayılı Noterlik Kanunu 60. ve 89. maddeleri ile noterliklere verilmiştir. Bu haliyle, taşınmaz satım sözleşmeleri sadece tapu görevlilerince düzenlenebiliyorken, satış vaadi sözleşmeleri ise tapu memurları veya noterlikler tarafından düzenleme şeklinde düzenlenebiliyor. Fakat uygulamada taşınmaz satış vaadi sözleşmeleri noterlikler tarafından tanzim edilmektedir.",
              "Tüketicinin Korunması Hakkında Kanun kapsamında ise ön ödemeli konut satış sözleşmeleri Yasa’nın 41. maddesinde düzenlenmiştir. Şekil şartı başlıklı bu maddedeki “Ön ödemeli konut satışının tapu siciline tescil edilmesi, satış vaadi sözleşmesinin ise noterde düzenleme şeklinde yapılması zorunludur. Aksi halde satıcı, sonradan sözleşmenin geçersizliğini tüketicinin aleyhine olacak şekilde ileri süremez.” hükmü getirilerek tüketicinin korunması amaçlanmıştır. Maddede belirtilen şekil unsuru, resmi yazılı şekilde olmasıdır. Uygulamada, resmi şekilde düzenlenen sözleşmelerin masraflarından dolayı taşınmaz mülkiyetinin devrine konu sözleşmelerin adi yazılı şekilde yapılmakta olduğuna ve tüketicinin de bu sözleşmelere güvenerek satış bedelini ödediği durumlarla karşılaşılmaktadır.",
              "Yargıtay vermiş olduğu bir kararda, taraflar arasında düzenlenen ön ödemeli konut satış sözleşmenin yazılı şekilde yapılmasını kabul etmiş olup sözleşmenin şekil eksikliğinden bahisle geçersiz olduğunun ileri sürülemeyeceğine hükmetmiştir.(12)",
              "Tüketicinin Korunması Hakkında Kanun 41. maddesi 1. fıkrası uyarınca, ön ödemeli konut satış sözleşmesinin tapu müdürlüğünde ve ön ödemeli konut satış vaadi sözleşmesinin noterlikte yapılabileceği anlaşılmaktadır. Tüketiciler için düzenlenen özel Yasa hükmünde diğer satış sözleşmelerinden farklı olarak, ön ödemeli konut satış sözleşmesinin geçersizliğini sadece tüketicinin ileri sürebileceği belirtilmektedir. Diğer bir ifadeyle sözleşmenin geçersizliğini satıcı iddia edememekte ve bu hususta hak sahibi olamamaktadır. Bu minvalde kanun koyucu, inşaat firmalarına veya satıcıya karşı tüketiciyi korumayı amaçladığı düşünülmektedir. Maddenin 2. fıkrasında ise sözleşmenin öngörülen resmi şekillerde yapılmaması halinde satıcı, tüketicinden satış bedeli, vergi ve benzeri herhangi bir isim altında ödeme yapmasını veya tüketiciyi borçlandıracak bir belge vermesini isteyememektedir. Bu hüküm aslında hükümsüzlüğün bir sonucu olarak karşımıza çıkmaktadır. Satıcı, satış bedelinin ödenmesini Yasa’ya aykırı bir şekilde talep etmesi halinde tüketici, sözleşmenin şekle uygun yapılmadığına yönelik def’i ileri sürebilme imkanı bulunmaktadır.(13)",
              "Yargıtayın bir kararında, kat mülkiyetine tabi bir taşınmaz ile ilgili mülkiyeti devir borcu doğuran fakat Kanun’da öngörülen şekle uygun olarak yapılmayan ve geçersiz kabul edilen bir sözleşemeye istinaden açılan cebri tescil davasında, konutların tamamlanmış olması koşuluyla birlikte taraflar tüm yükümlülüklerini ifa etmişler ise, şekle aykırılığa rağmen dava yolu ile mülkiyetin devrine karar verilebileceğini kabul etmiştir.(14)",
              "Karar’da dürüstlük kuralından hareketle, sözleşmedeki şekle aykırılığın ileri sürülemeyeceği istisnai bir durum ifade edilmiştir. Bu haliyle, adi yazılı şekilde düzenlenmiş ön ödemeli konut satış sözleşmesinin geçersiz olduğu, tüketici tarafından her daim ileri sürülebilecek ve satıcının şekle aykırılığı tüketici aleyhine ileri sürebilmesine olanak bulunmayacaktır.",
            ],
          },
          {
            heading: "II.2. Sözleşmenin Taşınmaz Satışı Şeklinde Yapılması",
            subheading: "II. Ön Ödemeli Konut Satış Sözleşmesinde Şekil",
            paragraphs: [
              "Tüketicinin Korunması Hakkında Kanun 41. maddesinde ön ödemeli konut satışının tapu siciline tescil edilmesinin zorunlu olduğu yönünde hüküm bulunmaktadır. Ancak satışın tapu siciline tescili ile amaçlanan usulün hangi şekil olduğu maddede açık değildir.",
              "Tescil, eşya hukukundaki anlamıyla, tapu kütüğünde taşınmaza ait sayfaya, o taşınmaz üzerindeki ayni hakların yazılmasını ifade etmektedir.(15) Türk Medeni Kanunu 1008. maddesine göre mülkiyet, irtifak hakları ve taşınmaz yükleri ile rehin hakları tescilin konusu olabilir. Tescil talebi tasarruf işlemi olduğundan Türk Medeni Kanunu 1013. maddesi gereği malikin tescil talebinde bulunması gerekmektedir.",
              "Bu haliyle, ön ödemeli konut satış sözleşmesinin tapu siciline tescil edilme olanağı bulunmamaktadır. Fakat tescilin mümkün olmamasına rağmen kanun koyucunun, özellikle tescil terimini kullanmasının sebebi olarak doktrinde bir takım görüşler bulunmaktadır. Bu görüşlerden bir tanesi, ön ödemeli konut satış sözleşmesinin real nitelikte bir borç sözleşmesi olduğunu belirtmektedir. Sözleşmenin kurulabilmesi için, tarafların birbirine uygun irade beyanları yeterli olmadığından, irade beyanlarına maddi bir olgunun da eklenmesi gerektiğini ifade etmektedir. Real sözleşmeler, borçlandırıcı işlem de olabildiğinden, ön ödemeli konut satış sözleşmesinin şekil şartına ilişkin formül bir real borç sözleşmesi niteliğindedir. Bununla beraber kanun koyucu Tüketicinin Korunması Hakkında Kanun 41. maddesinin 1. fıkrasında şekil şartı olarak, borçlandırıcı işlemin tapu memurunca resmi şekilde düzenlenmesiyle birlikte taşınmaz mülkiyetinin tüketici namına tescilini de öngörmüştür.(16)",
              "Başka bir yazar ön ödemeli konut satış sözleşmelerinin dar manada bir real sözleşme olduğunu öne sürmekle birlikte tapu kütüğüne tescil edilmediği sürece yokluk yaptırımıyla sakat olacağı görüşündedir. Çünkü, tapu siciline tescil şartını kurucu olgu olarak nitelendirmektedir.(17)",
              "Bir başka yazara göre de, ön ödemeli konut satış sözleşmesinden ayni bir hak doğmayacağından, sözleşmenin borçlandırıcı bir işlem olduğu ve tüketiciye bir alacak hakkı kazandırması söz konusu olduğundan maddedeki “tescil” kelimesinin hatalı olduğunu ifade etmiştir. Bu nedenle sözleşmeden doğan hakkın şerh edilmesinin söz konusu olabileceği görüşündedir.(18)",
              "Doktrinde yer alan görüşlerde de yer aldığı gibi, kanun koyucunun amacı, tarafların sözleşmeyi resmi şekil şartı içinde gerçekleştirmeleri olduğu kabul edilebilir. Bu beklentisinin nedeni tüketicinin korunması gerekliliği olarak ifade edilebilir. Lakin, sözleşmenin tapuya tescili şeklinde yapılan düzenlemenin eşya hukuku literatürüne ters düştüğü görülmektedir.",
              "Ön Ödemeli Konut Satışları Hakkında Yönetmelik 6. maddesi 1. fıkrasında “Ön ödemeli konut satış sözleşmesi, kat irtifakı devrinin tüketici lehine tapu siciline tescil edilmesiyle birlikte yapılacak yazılı bir sözleşme şeklinde veya noterliklerde düzenleme şeklinde yapılan satış vaadi sözleşmesi ile kurulur.” şeklinde düzenlenmiştir. Yönetmelik’te belirtilen haliyle Kanun’dan farklı olarak, “kat irtifakı devrinin tüketici lehine tapu siciline tescil edilmesiyle birlikte” ifadesi kullanılarak, kat irtifakı devrinin hedeflendiği düşünülebilir. Fakat, inşasına henüz başlanmamış bir yapının da söz konusu olduğu durumlarda satış sözleşmesi bu ifadenin kapsamı dışında tutulmamalıdır.(19)",
              "Bununla beraber, resmi şekilde düzenlenmesi Kanun’da zorunlu olarak kabul edilmiş bir sözleşmenin şeklinin, Yönetmelik’te yazılı şekle çevrilmesinin mümkün olmaması gerekmektedir.(20)",
              "Kat Mülkiyeti Kanunu’ndaki düzenlemelere uyularak paylı mülkiyet paylarına inşaat yapma ve kat mülkiyeti kurma borcu bağlanmasına kat irtifakı olarak tanımlanmıştır.(21)",
              "Kat Mülkiyeti Kanunu’nun 3. maddesi 3. fıkrasına göre kat irtifakının arsa payına bağlı bir irtifak çeşidi olduğu belirtilmektedir. Bir görüşe göre Kat Mülkiyeti Kanunun’da bir irtifak olarak ifade edilmişse de, Türk Medeni Kanunu 779. maddesi anlamında gerçek bir irtifak hakkı değildir. Başka bir ifadeyle kat irtifakının niteliği sebebiyle eşyaya bağlı bir borçtur.(22) Karşıt görüşe göre, arsa payına bağlı özel bir sınırlı ayni haktır.(23) Hak sahibi yönünden paya bağlı bir hak olan kat irtifakı yükümlü yönünden de paya bağlı bir yapma borcu niteliğindedir.(24)",
              "Kat Mülkiyeti Kanunu 10. maddesi 1. fıkrası uyarınca kat irtifakının kurulması için resmi şekilde yapılması ve tapu kütüğüne tescil edilmesi gerekmektedir.",
              "Bu haliyle, Yönetmelik 6.maddesinde kast edilenin, üzerine inşa edilecek ve ön ödemeli konut satış sözleşmesine konu bağımsız bölüme isabet eden arsa payının mülkiyetinin tüketiciye devredilmesi olarak kabul edilebilir.(25)",
              "Tüketicinin Korunması Hakkında Kanun’un 44. maddesi ikinci cümlesinde “Kat irtifakının tüketici adına tapu siciline tescil edilmesiyle birlikte zilyetliğin devri hâlinde de devir ve teslim yapılmış sayılır.” şeklinde yer alan ifadeyle sözleşmenin tapu müdürlüğünde satış şeklinde yapılması durumunda, kat irtifakının kurulmasının zorunlu olduğu yorumu yapılabilmektedir.",
              "Çoğu zaman uygulamada maketten satış söz konusu olduğu için, henüz inşasına başlanmamış konutlar ile ilgili olarak kat mülkiyetinin kurulması ve tüketiciye devri gerçekleşme imkanı bulmamaktadır.",
              "Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 6.maddesinde, ön ödemeli konut satış sözleşmesinin yazılı şekilde düzenlenebileceği belirtilmektedir. Yönetmelik’te yer alan bu ifade, Tüketicinin Korunması Hakkında Kanun’da yer almamaktadır. Kanun’da yer almayan bir şekil şartına, Yönetmelik’te yer verilmesinin normlar hiyerarşine aykırı olduğundan bahisle doktrinde eleştirilmektedir. Görüşe göre, Türk Borçlar Kanunu yazılı şekil başlıklı 13. ve 14. maddesindeki hükümlerindeki haliyle, yazılı şeklin adi yazılı şekil olduğu kabul edildiğine göre; Yönetmelikte yer alan “yazılı şekil” ibaresinin adi yazılı şekil olarak yorumlanma ihtimali olduğundan ve bu durumun da Kanun’a aykırı olabileceğinden dolayı eleştirilmiştir.(26)",
            ],
          },
          {
            heading: "II.3. Sözleşmenin Satış Vaadi Şeklinde Yapılması",
            subheading: "II. Ön Ödemeli Konut Satış Sözleşmesinde Şekil",
            paragraphs: [
              "Ön ödemeli konut satış sözleşmesinin diğer resmi şekil türü, taşınmaz satış vaadi şeklinde yapılmasıdır. Tüketicinin Korunması Hakkında Kanun 41. maddesi 1. fıkrasında ve Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 6. maddesinde yer alan haliyle, sözleşme noterde düzenleme şeklinde kurulabileceği belirtilmektedir. Uygulamada çoğu zaman karşımıza çıkan satış şekli noterde düzenleme yoluyla yapılan ön ödemeli konut satış vaadi sözleşmesidir. Bu sözleşmeyle satıcı, henüz sözleşmenin başında tüketiciye mülkiyeti devretmemektedir.",
              "Taşınmaz satış vaadi sözleşmelerinde şekil Türk Borçlar Kanunu 237. maddesi 2. fıkrasında düzenlenmiştir. Bu düzenlemeye göre taşınmaz satış vaadi sözleşmeleri resmi şekilde düzenlenmedikçe geçerli olmamaktadır. Türk Borçlar Kanunu 29. maddesinde yer alan düzenlemeye göre, bir sözleşmenin ileri bir tarihte kurulmasına yönelik yapılan sözleşmelerin geçerli olduğunu ve kanunlarda belirtilen istisnalar haricinde, taraflar arasında düzenlenen ön sözleşmenin geçerliliği, ileriki bir tarihte kurulacak olan sözleşmenin şekline bağlı olduğuna yer verilmiştir. Bu haliyle kanun koyucu, resmi şekle tabi olan taşınmaz satış sözleşmelerindeki gibi, taşınmaz satış vaadi sözleşmelerinin de resmi şekilde olması gerektiğini belirtmektedir.",
              "Yargıtay bir kararında, yasal düzenlemeler sebebiyle taşınmaz satışının geçerli olmasını sözleşmenin resmi şekilde yapılmış olması gerektiğinden ve şekil şartına uyulmayan harici sözleşmelerin geçersiz olacağını belirttikten sonra, adi yazılı şekilde yapılan satış vaadi sözleşmesine ek olarak resmi devrin gerçekleşmesi halinde sözleşmenin artık geçerlilik kazanacağına dair karar vermiştir.(27)",
              "Öğretide bazı yazarlar, ön ödemeli konut sözleşmesinin mülkiyeti devir borcunu içerdiğini ve asıl sözleşme olarak ifade edilebileceğini, noterde yapılan sözleşmenin ise asıl sözleşmenin ön sözleşmesi olduğunu kabul etmektedir. Noterde yapılan ön sözleşme ile taraflar, satışa konu taşınmazın ileride yapılacak ön ödemeli konut satış sözleşmesini yapma borcu altına girmektedirler. Yani söz konusu ön sözleşmeyle veya satış vaadi sözleşmesiyle, ileride resmi olarak mülkiyetin devri suretiyle yapılacak sözleşme değil, ön ödemeli konut satış sözleşmesinin yapılmasının mümkün olduğu görüşündedirler.(28)",
              "Ön ödemeli konut satış vaadi sözleşmesinin, taşınmaz satış vaadi sözleşmesinden ayıran durumlardan bir tanesi, satıcının önceden tüketiciyi bilgilendirme zorunluluğunun varlığıdır. Her iki sözleşmeyi birbirinden ayıran diğer bir husus ise, Ön Ödemeli Konut Satışları Hakkında Yönetmeliği 7. maddesindeki unsurların sözleşmede olma zorunluluğudur. Ön ödemeli konut satış vaadi sözleşmesinde Yönetmeliğin 7. maddesinde belirtilen zorunlu bilgilerin yer alması gerekmekte iken, satış vaadi sözleşmesinde böyle bir zorunluluk bulunmamaktadır.",
              "Ön ödemeli konut satış vaadi sözleşmesinin tapu siciline şerh edilmesine ilişkin Kanun’da ve Yönetmelik’te herhangi bir düzenleme bulunmamaktadır. Taşınmaz satış vaadi sözleşmesinin tapu kütüğüne şerh edilmesi için evvelce şerh anlaşması yapılmasına gerek bulunmamaktadır. Tapu Kanunu 26. maddesi 7. fıkrası alakadarlardan herhangi bir tanesinin tapu siciline şerh talebinde bulunmasına olanak sağlamaktadır.",
              "Öğretide bir görüş ise, ön ödemli konut satış vaadi sözleşmesinden doğan bir hakkın, tapu kütüğüne şerh edilebilmesi Tapu Sicil Tüzüğünün 47/1-c maddesi uyarınca, satış vaadi sözleşmesinin noterde yapılmış olması şartına bağlı olduğundan, adi yazılı şekilde yapılmış ön ödemeli konut satış vaadi sözleşmesinin tapu siciline şerh edilebilmesi için dava açılması gerektiğini belirtmektedir.(29)",
              "Taşınmaz satış vaadi sözleşmesinin tapu kütüğüne şerh edilmesi durumunda, şerh tarihinden itibaren beş sene içinde taşınmaz satışının yapılması gerektiğinden, ön ödemeli konut satış sözleşmesine dair şerhin de etkisinin beş yıl olduğu kabul edilmektedir.(30) Tapu Kanunu 26. maddesinin 8. fıkrası gereği beş sene içerisinde işlem yapılmaz ise, tapu sicil müdürü veya tapu sicil görevlileri tarafından kendiliğinden terkin edilmektedir. Fakat, uygulamada şerh re’sen terkin edilmemekle birlikte taraflardan birinin müracaat etmesi gerekmektedir.",
            ],
          },
          {
            heading: "III. Ön Ödemeli Konut Satış Sözleşmesinde Şekle Aykırılık",
            paragraphs: [
              "Taşınmaz mülkiyetinin devrini ile ilgili sözleşmeler resmi şekilde yapılmadıkça kesin hükümsüz olmasına rağmen, ön ödemeli konut satış sözleşmelerin resmi şekilde yapılmamış olması sebebiyle hükümsüz olması gerekirken Tüketicinin Korunması Hakkında Kanun’un 41. maddesi 1. fıkrası ikinci cümlesi gereği özel nitelikte bir hükümsüzlük hali düzenlenmişi olduğundan, satıcının sonradan sözleşmenin geçersiz olduğunu tüketici aleyhine ileri süremeyeceği hüküm altına alınmıştır. Başka bir ifadeyle kesin hükümsüzlük haline bir istisna getirildiği söylenebilir. Bu duruma modern geçersizlik veya esnek hükümsüzlük olarak da adlandırılmaktadır. Söz konusu düzenleme olamadan evvel, alıcı ve satıcı arasındaki sözleşmelerden sonra, satıcı tarafından taşınmazın üçüncü kişiye devredilmesi halinde alıcının sözleşmeye dayanması mümkün olmamaktaydı. Çünkü sözleşme resmi şekilde yapılmadığı için kesin hükümsüz olduğundan, buna dayalı olarak taşınmazın mülkiyetinin devri için dava açılamamaktaydı. Yapılan düzenlemeyle birlikte ferağ icbar davası açılabilmekte olup satıcının sözleşmenin geçersizliğini ileri sürerek kaçış imkanına son verilmiş oldu.",
              "Mahkeme kararında; tüketici ile inşaat firması arasında taşınmaz satış vaadi sözleşmesi yapıldığını, satıcının sözleşmenin resmi şekilde yapılmamış olduğundan geçersiz olduğu iddia etmesi karşısında, ön ödemeli satış sözleşmesinin resmi şekilde yapılmamış olduğundan geçersiz olduğuna karar vermiş ve Yargıtay’da bu kararı onamıştır. Tüketici tarafından onama ilamına karşı kararın düzeltilmesi talebiyle Yargıtayın önüne giden dosyada bu defa Yargıtay, inşaat firmasının ön ödemeli konut satış sözleşmesinin resmi şekilde yapılmadığından geçersiz olduğunu ileri süremeyeceğinden önceki kararı bozmuştur.(31)",
              "Öğretide bazı yazarlar sözleşmenin başından itibaren hüküm ifade etmediği ve kesin hükümsüz olduğuyla birlikte sözleşmedeki geçersizliği ancak tüketicinin öne sürebileceği görüşündedir. Bazı yazarlar ise geçersizlik türünün esnek hükümsüzlük olduğu yani tek taraflı tüketici lehine geçersizlik olduğu görüşündedir.(32) Doktrinde bu durum yazarlar tarafından tek taraflı tüketici lehine geçersizlik, tüketici lehine tek taraflı hükümsüzlük, tek taraflı bağlamazlık yaptırımı, esnek hükümsüzlük veya tüketici aleyhine ileri sürülememe olarak da ifade edilmektedir.(33) Tüketicinin Korunması Hakkında Kanun’da şekil şartı ile korunma altına alınan taraf tüketicidir.",
              "Ön ödemeli konut satış sözleşmesinin, şekil şartına uyulmadan düzenlenmesinin yaptırımı olarak 6502 sayılı Kanun’un 77. maddesinin 3. fıkrasında, şekil şartı yükümlülüğüne aykırı işlem yapanlar hakkında her bir işlem veya sözleşme için 1.707,00.-TL idari para cezası uygulanacağı hüküm altına alınmıştır.",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: [
              "Tüketicinin kendisine ait bir konut satın alabilmesi günümüz ekonomik koşullarında taşınmaz bedellerinden dolayı uzun süreler almaktadır. Bireylerin, peşin satışlarla konut ihtiyaçlarını karşılayabilmeleri her zaman mümkün olmadığından, kısmi ödemelerle konut sahibi olmaya çalışmaktadırlar. Tüketicinin Korunması Hakkında Kanun’da yer alan ön ödemeli konut satışı tüketiciler yönünden konut sahibi olabilmeleri açısından bir imkan sağlamakla birlikte dev kazançları olan inşaat firmalarına karşı tüketicilere ilave korunma imkanları sağlamaktadır.",
              "Yasa koyucu tüketicileri korumak amacıyla ön ödemeli konut satış sözleşmelerini şekle bağlamıştır. Tüketicinin Korunması Hakkında Kanun 41. maddesinde bu sözleşmelerin tapu siciline tescil edilmesi veya noterde satış vaadi şeklinde yapılması gerektiğine vurgu yapmaktadır. Bununla beraber Kanun’da yer alan haliyle sözleşmenin tapu siciline tescil edilmesi ile ne ifade etmek istendiği tartışma konusu olmuştur.",
              "Hem Tüketicinin Korunması Hakkında Kanun’da hem de Ön Ödemeli Konut Satışları Hakkında Yönetmelik’te esasla belirtilen konu, ön ödemeli konut satış sözleşmesinin resmi şekilde yapılmasıdır. Taraflar arasında düzenlenen sözleşme borçlandırıcı işlem niteliğinden olup, daha sonra mülkiyetin devri şeklinde tasarruf işleminin de yapılması gereklidir. Fakat ne Eşya Hukuku ne de Türk Hukuku’nda, Kanun’da yer alan haliyle sözleşmenin tescili şeklinde bir düzenleme bulunmamaktadır.",
              "Yasa’da öngörülmüş bir şeklin amacı yalnızca sözleşmenin taraflarını korumak olmayabileceğinden, bazı hallerde sözleşmenin şekle sadık kalınarak düzenlenmesi kamu düzenini koruduğu gibi üçüncü kişilerin haklarını da korumaktadır. Doktrinde tartışmalı olmakla birlikte savunulan görüşlerden bir tanesi kesin hükümsüzlük görüşüdür. Bu haliyle Yasa’da şekle bağlanmış bir sözleşmenin, şekle aykırı düzenlenmesi halinde kesin hükümsüzlük yaptırımıyla karşılaşması gerektiği savunulmaktadır. Bunun yanında şekle aykırılığın ileri sürülmesi ise Kanun’da, tüketicinin aleyhine olacak şekilde ileri sürülmemesi şeklinde açıklanmıştır. Yasa’da ve Yönetmelik’te yer alan haliyle ön ödemeli konut satış sözleşmelerinde her ne kadar şekil türü olarak satış sözleşmesi, kat irtifakının devri sözleşmesi veya satış vaadi sözleşmesi düzenlenebileceği dolaylı bir şekilde anlaşılabiliyorsa da, satış sözleşmesinin tescili ifadesinin netliğe kavuşturulması için daha açık bir düzenlemeye yer verilmesi daha uygun olacaktır.",
            ],
          },
          {
            heading: "Kaynakça",
            paragraphs: [
              "Acar., H., “6502 Sayılı Tüketicinin Korunması Hakkında Kanun Çerçevesinde Ön Ödemeli Konut Satış Sözleşmesi”, Fatih Üniversitesi Hukuk Fakültesi Dergisi, C:3, S:1, s.11-40, Ocak 2015, ( www.jurix.com, e.t. 05.06.2020 ).",
              "Akipek, Ş./ Öcal, L., “Ön Ödemeli Konut Satış Sözleşmesinin Hukuki Niteliği ve Ön Ödemeli Konutların Değerlemesi”, TBB Dergisi, S:144 , s.277-298, Eylül-Ekim 2019, (www.jurix.com, e.t. 05.06.2020).",
              "Aydoğdu, M., “Ön Ödemeli Konut Satış Sözleşmesi (6502 Sayılı Tüketicinin Korunması Hakkında Kanun m.40-46)”, Terazi Hukuk Dergisi, C:9, S:99, s.87-94, Kasım 2014. (www.jurix.com, e.t. 05.06.2020).",
              "Doğar, M.,Ön Ödemeli Konut Satışı, 1. Baskı, On iki Levha Yayıncılık, İstanbul, 2018.",
              "Güleş, B., “Ön Ödemeli Konut Satışında Şekil ve Şekle Aykırılığın Yaptırımı”, KTO Karatay Üniversitesi Hukuk Fakültesi Dergisi, C:4, S.2, s.233-259, Temmuz 2019, (www.jurix.com, e.t. 05.06.2020).",
              "Kara, E., Tüketici Hukukunda Ön Ödemeli Konut Satış Sözleşmesi, Seçkin, Ankara, 2019.",
              "Oğuzman, K./ Seliçi, Ö./ Oktay-Özdemiz, S., Eşya Hukuku, 20. Baskı, Filiz Kitabevi, İstanbul, 2017.",
              "Suyabatmaz, F., “Ön Ödemeli Konut Satışı Sözleşmeleri”, Türkiye Noterler Birliği Hukuk Dergisi, C:3, S:1, s.119-148, Ocak 2016, ( https://docplayer.biz.tr/22946159-Turkiye-noterler-birligi.html, e.t. 02.06.2020).",
              "Şencan, C., “Ön Ödemeli Konut Satış Sözleşmeleri (6502 Sayılı Tüketicinin Korunması Hakkında Kanun M. 40-46 Kapsamında)”, İstanbul Barosu Dergisi, C:92, S:3, s.89-110, 2018.",
              "Yeniocak, U., “6502 Sayılı Tüketcinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli”, Terazi Hukuk Dergisi, C:10, S:102, s.42-53, Şubat 2015, (www.jurix.com, e.t. 30.05.2020).",
              "1 Doğar, M., Ön Ödemeli Konut Satışı, s.60. ↩",
              "2 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.44. ↩",
              "3 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.44. ↩",
              "4 Antalya BAM 1HD, 2017/224 E., 2017/216 K., 11.04.2017, Güleş, B., Ön Ödemeli Konut Satışında Şekil ve Şekle Aykırılığın Yaptırımı, KTO Karatay Üniversitesi Hukuk Fakültesi Dergisi, C:4, S.2, s.233-259, Temmuz 2019, s.252. ↩",
              "5 YHGK., 2011/19-500 E., 2011/550 K., 21.09.2011. ↩",
              "6 Şencan, C., Ön Ödemeli Konut Satış Sözleşmeleri ( 6502 Sayılı Tüketicinin Korunması Hakkında Kanun m.40-46 Kapsamında ), İstanbul Barosu Dergisi, C:92, S:3, Mayıs 2018, s.89-110, s.92. ↩",
              "7 Doğar, M., Ön Ödemeli Konut Satışı, s.78. ↩",
              "8 Şencan, C., Ön Ödemeli Konut Satış Sözleşmeleri ( 6502 Sayılı Tüketicinin Korunması Hakkında Kanun m.40-46 Kapsamında ), İstanbul Barosu Dergisi, C:92, S:3, Mayıs 2018, s.89-110, s.92. ↩",
              "9 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.47. ↩",
              "10 Aydoğdu, M., Ön Ödemeli Konut Satış Sözleşmesi (6502 Sayılı Tüketicinin Korunması Hakkında Kanun m.40-46), Terazi Hukuk Dergisi, C:9, S:99, s.87-94, Kasım 2014, s.88. ↩",
              "11 Doğar, M., Ön Ödemeli Konut Satışı, s.99. ↩",
              "12 Y23HD, 2015/6273 E., 2016/2873 K., 04.05.2016, Kara, E., Tüketici Hukukunda Ön Ödemeli Konut Satış Sözleşmesi, s.32. ↩",
              "13 Sekmen, O., Ön Ödemeli Konut Satış Sözleşmesi ve Hükümsüzlüğü, s.43. ↩",
              "14 YİBK., 1987/2 E., 1988/2 K., 30.09.1988, Acar., H., 6502 Sayılı Tüketicinin Korunması Hakkında Kanun Çerçevesinde Ön Ödemeli Konut Satış Sözleşmesi, Fatih Üniversitesi Hukuk Fakültesi Dergisi, C:3, S:1, s.11-40, Ocak 2015, s.22. ↩",
              "15 Oğuzman, K./ Seliçi, Ö., Oktay-Özdemiz, S., Eşya Hukuku, s.197 ↩",
              "16 Yeniocak, U., 6502 Sayılı Tüketcinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, s.42-53, Şubat 2015, s.47. ↩",
              "17 Suyabatmaz, F., Ön Ödemeli Konut Satışı Sözleşmeleri, Türkiye Noterler Birliği Hukuk Dergisi, C:3, S:1, s.119-148, Ocak 2016, s.129. ↩",
              "18 Doğar M., Ön Ödemeli Konut Satışı, s.105. ↩",
              "19 Güleş, B., s.250. ↩",
              "20 Akipek, Ş./ Öcal, L., Ön Ödemeli Konut Satış Sözleşmesinin Hukuki Niteliği ve Ön Ödemeli Konutların Değerlemesi, TBB Dergisi, S:144 , s.277-298, Eylül-Ekim 2019, s.284. ↩",
              "21 Oğuzman, K., Eşya Hukuku, s.632. ↩",
              "22 Oğuzman, K., Eşya Hukuku s.633. ↩",
              "23 Doğar, M., Ön Ödemeli Konut Satışı, s.111. ↩",
              "24 Oğuzman, K., Eşya Hukuku s.632. ↩",
              "25 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.49. ↩",
              "26 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.50. ↩",
              "27 Y13HD., 2015/38078 E., 2016/1141 K., 21.01.2016. ↩",
              "28 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.50. ↩",
              "29 Şencan, C., Ön Ödemeli Konut Satış Sözleşmeleri (6502 Sayılı Tüketicinin Korunması Hakkında Kanun M. 40-46 Kapsamında), İstanbul Barosu Dergisi, C:92, S:3, s.89-110, 2018, s.94. ↩",
              "30 Yeniocak, U., 6502 Sayılı Tüketicinin Korunması Hakkında Kanuna Göre Ön Ödemeli Konut Satış Sözleşmesinin Şekli, Terazi Hukuk Dergisi, C:10, S:102, Şubat 2015, s.42-53, s.51. ↩",
              "31 Y3HD, 2018/3286 E., 2018/13028 K., 20.12.2018. ↩",
              "32 Doğar, M., Ön Ödemeli Konut Satışı, s.121. ↩",
              "33 Doğar, M., Ön Ödemeli Konut Satışı, s.122. ↩",
            ],
          },
        ],
      },
      en: {
        slug: "prepaid-housing-sale-agreement",
        title: "Prepaid Housing Sale Agreement",
        category: "Consumer Law",
        date: "21 March 2024",
        author: "HCC Law Office",
        excerpt:
          "Key points regarding the legal nature of prepaid housing sale agreements, consumer protection and the right of withdrawal.",
        seoTitle:
          "Prepaid Housing Sale Agreement | HCC Law Office",
        seoDescription:
          "Key legal considerations in prepaid housing sale agreements, including consumer protection, withdrawal rights and common contractual risks.",
        introduction:
          "Prepaid housing sale agreements are among the contract types most closely shaped by consumer protection rules from the very outset of the transaction. This article is structured to examine the legal nature of the agreement, the main risk areas and the issues most frequently encountered in practice.",
        sections: [
          {
            heading: "Introduction to the Contract Structure",
            subheading: "A contract type subject to heightened consumer protection",
            paragraphs: [
              "Delivery timing, pricing structure, pre-contractual disclosure and withdrawal rights are central elements of prepaid housing sale agreements. Because the consumer undertakes financial obligations before delivery, these agreements are especially sensitive in practice.",
              "For that reason, not only the contract text but also promotional materials and disclosure documents should be considered in the legal assessment.",
            ],
            bullets: [
              "Delivery timing provisions",
              "Clarity of the pricing and payment plan",
              "Records concerning disclosure and withdrawal rights",
            ],
          },
          {
            heading: "Key Risk Areas",
            subheading: "Most frequently disputed issues in practice",
            paragraphs: [
              "Delivery delays, specifications of the property, refund claims, the exercise of withdrawal rights and allegations of non-performance are among the most common areas of dispute.",
              "Since mandatory consumer protection rules apply, these contracts must be assessed not only through freedom of contract principles but also in light of the special legislative framework.",
            ],
            bullets: [
              "Delay in delivery and performance issues",
              "Withdrawal and refund claims",
              "Inconsistencies between promotional content and the contract text",
            ],
          },
          {
            heading: "Closing Assessment",
            paragraphs: [
              "Prepaid housing sale agreements require detailed and careful contractual review from a consumer law perspective. The pre-contractual stage and the implementation phase should be considered together.",
              "Accordingly, preventive legal review at the contract stage and a well-grounded legal strategy in the event of dispute are both important.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "structural-changes",
    image: "/articles/sirketlerde-yapisal-degisiklikler.jpg",
    publishedAt: "2024-03-05",
    locales: {
      tr: {
        slug: "sirketlerde-yapisal-degisiklikler-ve-ticaret-siciline-tescil",
        title: "Şirketlerde Yapısal Değişiklikler ve Ticaret Siciline Tescil",
        category: "Ticaret Hukuku",
        date: "İstanbul, 2021",
        author: "Av. Hasan Can Cebeci",
        excerpt:
          "Şirket birleşmelerinde ticaret siciline tescilin hukuki niteliği, sonuçları ve birleşme sonrasında ortaya çıkan yapısal etkiler hakkında temel değerlendirmeler.",
        seoTitle:
          "Şirketlerde Yapısal Değişiklikler ve Ticaret Siciline Tescil | HCC Avukatlık Bürosu",
        seoDescription:
          "Şirket birleşmelerinde ticaret siciline tescilin kurucu etkisi, malvarlığının devri, infisah ve alacaklıların korunmasına ilişkin hukuki değerlendirmeler.",
        introduction:
          "20. yüzyılın ortalarından beri dünya ekonomisi günden güne küreselleşmenin etkisi altına girmiştir. Erişilebilirlik ve ulaşılabilirlik kolaylaştıkça ekonomik yönden sınırlar kalkmış ve dünyada ülkelerin de dahil olduğu uluslararası rekabet söz konusu olmuştur. Tıpkı ülkelerde olduğu gibi şirketler de her gün değişiklik gösteren pazar şartlarına uyum sağlamak ve gelişen piyasaların gerisinde kalmamak için yeni çözüm arayışları içine girmiştir. Ticaret şirketlerinin birleşmesi de çözüm arayışlarının neticesi olarak kendini göstermiş olup son yüz yıl içerisinde günden güne yaygınlaşmıştır.\n\nŞirket birleşmeleri ile daha karlı ve etkin faaliyetin sağlanması, vergisel yönden bir çok kolaylıktan yararlanılması, teknoloji alanındaki gelişmelerin yakalanabilmesi, rekabet açısından olumlu ilişkilerin sürdürülmesi gibi birçok imkandan faydalanılması söz konusu olmuştur. Şirketlerin birleşmesi hem birbirleri açısından hem de üçüncü kişiler açısından hüküm ve sonuç doğurması için tescil zorunluluğunu da beraberinde getirmektedir.\n\nÖncelikle birleşme kararının ticaret siciline tescilin sonuçları ayrı ayrı açıklanmıştır. Bu açıklamalar yapılırken şirketlerin birleşmesi neticesinde ortaya çıkan yeni durumlar ve bu durumların dışarıya karşı etkileri hakkında değerlendirmelerde bulunulmuş ve bazı hususlar Yargıtay kararlarıyla açıklanmaya çalışılmıştır.",
        sections: [
          {
            heading: "1. Birleşme Kararının Tescili",
            paragraphs: [
              "Birleşmede ticaret siciline tescil, kaynağını İsviçre Birleşme, Bölünme, Tür Değiştirme, Malvarlığı Devrine İlişkin Federal Kanunu’nun 21. maddesinden almakta olup, Türk Ticaret Kanunu 152. Maddesinde hüküm altına alınmıştır.(1)",
              "Maddenin birinci fıkrasında “birleşme kararı” ile ifade edilmek istenen, birleşme sözleşmesinin firmanın genel kurulu tarafından onaylanmasıyla birlikte elde edilen karardır. Aynı fıkrada yer alan “birleşme kararı alınır alınmaz” ifadesi ile de birleşme kararının, birleşmeye iştirak eden tüm şirketlerde alınmasının mı bekleneceği yoksa her bir firmanın kendisi yönünden birleşme kararını alır almaz ticaret siciline mi başvuracağı net değildir.",
              "Devralma biçiminde birleşmelerde firmalardan birisi devralan firma olması kaydıyla, en az iki ticaret firması bulunmaktadır. Devrolunan firmaların sayısının kimi zaman fazla olması, firmaların ticaret siciline müracaat etmek için, müşterek bir tarif bulmalarını zorlaştırmaktadır. Firmalardan bir tanesi, şirket birleşme sözleşmesi gereği genel kurulunu toplayarak birleşmeye ilişkin karar almasına rağmen, diğer firma henüz kendi genel kurulunu toplantıya çağırmamış olabilir. Hızlı hareket eden firmanın birleşme kararını tescil ettirmesi halinde, malvarlığının geçişi ve değişim mevzularında problemler ortaya çıkabilmektedir.(2)",
              "Kanun maddesindeki hükmün gayesi, birleşmeye iştirak eden firmaların genel kurullarında karar alındıktan sonra, hızlıca tescil müracaatının yapılmasını sağlamaktadır. Süre bakımından Kanun veya Yönetmelik’te herhangi bir ibare yer almamakla birlikte bu başvurunun, en geç birkaç gün içinde yapılması gerektiğini savunan görüşler bulunmaktadır.(3)",
              "Birleşmeye katılan firmalar, birleşmeye ilişkin kararı farklı tarihlerde alabilirler. Devrolunan firmaların birden çok olduğu hallerde, bir şirket diğerinden evvel tescil müracaatında bulunabilir. Yasa veya Yönetmelik’te şirketlerin aynı anda veya birlikte başvurmaları konusunda herhangi bir şart bulunmamaktadır.",
              "Devrolunan firmanın kayıtlı olduğu ticaret sicil müdürlüğü, şirket birleşmesinin tescilini, devralan firmanın kayıtlı olduğu ticaret sicil müdürlüğüne ivedilikle bildirir. Devralan firma yönünden yapılan tescil de, devrolunan diğer firmanın kayıtlı olduğu ticaret sicil müdürlüğüne bildirilir. Birleşme sebebiyle infisah eden firmanın unvanı da bu bildirimle beraber re’sen sicilden silinmektedir.",
              "Birleşme kararıyla beraber tescile tabi diğer konuların da tescil edilmesi gerekmektedir. Devralma yoluyla birleşmede bu hususlardan biri, devralan firmanın birleşme sebebiyle sermayesinin artması ve sermaye artırımı için ana sözleşme değişikliğidir.(4)",
              "Birleşme kararı, devralan firma yönünden kural olarak, sermaye artırımını beraberinde getirmektedir ve devralan firma yönünden, ana sözleşme değişikliğine neden olacaktır. Kanun’a göre, birleşme kararının alındığı genel kurul toplantısında onaylanıp kabul edilen ana sözleşme değişikliğinin, birleşme kararında olduğu gibi yönetim organınca ticaret siciline tescil edilmesi gerekmektedir. Bu husus Türk Ticaret Kanunu 152. madde 2. fıkrasında belirtilmiş olmakla birlikte, Kanun’un 154. maddesine göre, birleşme iradesiyle yürütülen işlemlerden sonra, ticaret siciline tescil ettirilen birleşmeye ilişkin kararı aynı zamanda Türkiye Ticaret Sicil Gazetesinde de ilan edilmesi gerekmektedir.",
              "Türk Ticaret Kanunu 152. maddesi 2. fıkrası ve Türk Sicil Yönetmeliği 127. maddesi 5. fıkrası(5) uyarınca, devralan firmada sermaye artırımının söz konusu olması durumunda birleşme ve sermaye artırımı aynı zamanda tescil edilmesi gerekmektedir.",
              "Kanun, devreden firmaların birleşme ve şirketin infisahı kararının tescil müracaatının, devreden firmanın yönetim kurulu tarafından yapılmasını öngörmüş olup yine aynı şekilde, devralan firmanın sermaye artırımı ve birleşme kararının tescili için başvurunun da firmanın yönetim kurulunca yapılmasını öngörmüştür.",
              "Ticaret sicil müdürü, Türk Ticaret Kanunu 32. maddesi 1. fıkrası uyarınca birleşmeye ilişkin kararın tescil edilmesine ilişkin talebi, tescil için aranılan yasal koşulların bulunup bulunmadığını denetlemekle yükümlüdür.(6) Burada işaret edilen, genel hukuki inceleme anlamında bir denetimdir. Çünkü, genel hukuki incelemeyi aşan bir denetim sadece mahkemeleri ilgilendiren bir husustur.",
              "Tescilin yapılmasına ilişkin sicil müdürü tarafından duraksanan veya hal yolu mahkeme ilamına bağlı olan konularda, tarafların talebiyle birlikte geçici olarak tescil söz konusu olmaktadır. Fakat bu gibi konularda taraflar üç ay içerisinde mahkemeye müracaat ettiklerini veya kendi aralarında mutabakata vardıklarını ispat edemezler ise, geçici tescil re’sen silinir. Mahkemeye müracaat edilmesi halinde, hükmün kesinleşmesinden sonra neticeye göre işlem yapılmaktadır.",
              "Birleşmeye iştirak eden firmaların yönetim organları, sicil memurunun vereceği karara karşı kendilerine kararın tebliğinden itibaren sekiz gün içinde, sicilin bağlı olduğu ticaret mahkemesine itiraz etme hakları bulunmaktadır.",
              "Tescil ile beraber birleşme hukuken geçerliliğe kavuşacaktır. Bu nedenle tescille birlikte devreden firmanın tüm aktif ve pasifleri, tescil anından itibaren devralan firmaya geçecektir. Tescil ile birlikte devreden firmanın ortakları, devralan firmanın ortağı olabileceği gibi külli halefiyet prensibi gereği malvarlığı da devralan firmaya geçecektir.",
            ],
          },
          {
            heading: "2. Tescil Kararının Sonuçları",
            paragraphs: [
              "Birleşmenin, şirketlerin yönetim organlarınca yürütülen işlemlerin ve hazırlanan sözleşmenin, birleşmenin tarafı olan tüm firmaların genel kurulları tarafından gerekli nisaplara göre onaylanmasından sonra, birleşmeye ilişkin kararın sicile tesciliyle beraber birleşme sona ermiş olacaktır. Birleşmenin hüküm ifade etmesi yönünden, alınan kararın ticaret siciline tescili gerekmektedir. Bu haliyle ticaret siciline yapılan tescil, bir takım sonuçları da beraberinde getirmektedir.",
            ],
          },
          {
            heading: "a. Birleşmenin Geçerlilik Kazanması",
            paragraphs: [
              "Türk Ticaret Kanunu 153. maddesi 1. fıkrasında birleşmenin, birleşme kararının ticaret siciline tesciliyle beraber geçerlilik kazandığını belirtmektedir. Bu nedenle ticaret sicile yapılan tescilin, kurucu bir etkiye sahip olduğu söylenebilir. Birleşmeye iştirak eden firmaların genel kurullarında alınan birleşme kararı, birleşmenin hüküm ve sonuç doğurması açısından yeterli değildir. Şirketlerin genel kurullarınca verilen onay veya alınan karar tescilin ön koşulunu oluşturmaktadır.(7)",
            ],
          },
          {
            heading: "b. Devrolunan Şirketin İnfisahı",
            paragraphs: [
              "Birleşme kararının ticaret siciline tescili ile beraber, tescilin kurucu etkilerinden biri söz konusu olur ve devrolunan firma infisah eder. Fakat belirtmek gerekir ki birleşmelerde yer alan özel düzenlemeler, bahsetmiş olduğumuz infisahı diğerlerinden ayırmaktadır. Kural olarak sona eren bir firmanın tasfiye evresine girmesi, borçların ve alacakların ödenmesi, kalan bir varlık var ise ortaklar arasında paylaştırılması gerekmektedir. Fakat birleşme bu kuralın bir istisnasıdır. Türk Ticaret Kanunu 136. maddesi 4. fıkrasında da belirtilen haliyle, birleşme ile birlikte infisah eden şirket bilahare tasfiye olunmaksızın tüm malvarlıklarını devralan firma bünyesine geçirmektedir.",
              "Türk Ticaret Kanunu 152. maddesinin 3. fıkrasında, birleşmenin ticaret siciline tescil edilmesiyle birlikte devrolunan firmanın sona ereceği yer almaktadır. Bu manada tescil kurucu bir etkiye sahiptir. Tescil ile beraber devrolunan firma kendiliğinden son bulur. Devrolunan firma birleşme kararını, devralan firmadan evvel ticaret siciline tescil ettirirse, infisahın gerçekleşmesi, devralan firmanın da tescilinin yaptırmasından sonra, devrolunan firmanın tescil tarihinden itibaren sonuçlarını doğurmak üzere, birleşmenin kurucu etkisi ortaya çıkmaktadır. Bu haliyle de sona erme gerçekleşir.",
              "Bu gibi durumlarda infisahın askıda hükümsüz olduğu da düşünülebilir. Birleşmenin meydana gelmesiyle beraber sona eren firmanın ticaret sicilindeki kaydı da kendiliğinden silinecektir.",
              "Yargıtay kararlarında da ticaret şirketlerinin birleşmesiyle, birleşen şirketin taraf ehliyetinin sona erdiği belirtilmektedir. Tüzel kişiliğin sona ermesiyle birlikte de, artık devrolunan firmanın taraf ehliyetinin sona bulduğu başka bir ifadeyle ölü bir kişiden farksız olduğu kabul edilmiştir. Yargıtay kararında bu durum “birleşme ve devralma suretiyle tasfiyesiz infisah durumunda; bir ticaret şirketi başka bir şirket tarafından devralınırsa ( TTK m. 451 ) eski şirketin tüzel kişiliği sona erer. Keza, bir ticari şirketin diğer bir ticari şirketle birleşmesi halinde de birleşen şirketin hükmi şahsiyeti sona erer.” şeklinde belirtilmiştir.(8)",
            ],
          },
          {
            heading: "c. Şirketlerin Malvarlığı",
            paragraphs: [
              "Ticaret siciline birleşmenin tesciliyle beraber hukuki geçerlilik kazanmasının en mühim neticelerinden bir tanesi de, devrolunan firmanın malvarlığının tüm aktif ve pasifleriyle beraber devralan firmaya geçmesidir. Külli halefiyet ilkesi gereği, malvarlığının geçmesi için herhangi bir işleme lüzum bulunmamaktadır.",
              "Külli halefiyet ilkesinin bir neticesi olarak devrolunan firmanın taşınmazları ve bunlar üzerindeki sınırlı ayni hakların, devralan firmaya geçmesi için, resmi senet tanzim edilmesine ve tapu siciline tesciline lüzum bulunmamaktadır. Devralan firma, tapu sicil müdürlüğünde tek taraflı olarak taşınmazın kendi namına tescilini talep edebilir. Bu tescil açıklayıcı tescil olarak kendini gösterir. Bahse konu iktisap tescilsiz iktisap hali olduğundan, yararlanan firma taşınmazların mülkiyetini tescilden önce kazanmaktadır. Menkul mallar için ise külli halefiyet ilkesi uyarınca, devralan firmanın teslim olmaksızın asli zilyetliği olduğu, başka bir ifade ile birleşme sonucunda menkuller teslim edilmemiş olsa bile, bu malların mülkiyeti devralan firmaya geçmektedir.",
              "Birleşmeye taraf olan firmaların tamamının kendi genel kurullarında birleşme için aldıkları karardan sonra, devrolan firmanın kararı tescil ettirmesine rağmen devralan firmanın henüz bu kararı tescil ettirmemesi askıda hükümsüzlük sonucunu doğuracaktır. Devralan firmanın da bahse konu tescili gerçekleştirmesiyle birlikte, devrolunan firmanın yapmış olduğu tescil tarihinden başlamak üzere sonuçlarını doğurur ve birleşmenin kurucu etkisi gerçekleşir. Bu haliyle de devrolunan firmanın malvarlığı bütün olarak devralan firmaya geçer.",
            ],
          },
          {
            heading: "d. Şirketlerin Ortaklık Yapısı",
            paragraphs: [
              "Türk Ticaret Kanunu 153. maddesi 2. Fıkrası uyarınca, birleşmenin hukuki olarak gerçekleşmesiyle beraber, devrolunan firmadaki ortak sıfatına haiz olan kişiler de, başkaca bir işleme gerek kalmaksızın devralan firmada ortak sıfatını kazanırlar. Bu durum pay sahipliğinin devamlılığı ilkesi olarak da ifade edilmektedir.",
              "Birleşmeye katılmak istemeyen ya da birleşmeden sonra firmada olması istenmeyen yüzde on oranına kadar pay sahibine, seçimlik hak olarak veya zorunlu olarak, şirketteki payının değerine isabet eden meblağı alarak firmadan ayrılma hakkı tanınmıştır.(9) Türk Ticaret Kanunu’nun 141. maddesinde ayrılma akçesi olarak bu istisnai durum yer almaktadır. Bu durum haricinde, birleşmenin sicile tescili ile birlikte devrolunan firmanın ortakları devralan firmada intikal eden malvarlığı göz önüne alınarak hesaplanan değişim oranı nispetinde kendiliğinden devralan firmanın ortağı sıfatını kazanacaklardır.",
            ],
          },
          {
            heading: "e. Alacakların Teminata Alınması",
            paragraphs: [
              "Türk Ticaret Kanunu 157. Maddesinde, birleşme halinde birleşmeye iştirak eden firmaların alacaklılarının korunması maksadıyla alacaklılara, birleşmenin geçerlilik kazanmasından başlayarak üç ay içinde talepte bulunmaları durumunda, devralan firmanın bu alacakları teminat altına alması gerektiğini düzenlenmiştir.",
              "Ticaret sicilinde birleşmenin tescil edilmesinden sonra hukuken geçerlilik kazanan ve kesinleşen birleşme ile birlikte, firmadan alacaklı olan alacaklılar, birleşen firmalardan olan alacaklarının birleşme sebebiyle teminat alınmaları isteyebilmektedirler. Alacaklıların bu talepleri için Yasa’da öngörülen süre birleşmenin kesinleşmesinden başlayacaktır. Bu haliyle birleşmenin bir diğer sonucunun da alacaklıların, alacaklarını teminat altına alınmasını talep etme için öngörülen sürenin başlaması olarak ifade edilebilir. (10)",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: [
              "Ticaret firmalarının birleşmesi gibi yapısal değişiklikleri ticaret siciline tescille beraber geçerlilik kazanmaktadır. Birleşmenin tarafı olan firmalarca, birleşmeye ilişkin karar alınır alınmaz birleşmenin tescili için ticaret siciline müracaat etme zorunluluğu Türk Ticaret Kanunu 152. maddesi ile getirilmiştir. Başa bir anlatımla birleşme sözleşmesinin firmaların genel kurulunda onaylanmasına yönelik kararın alınmasıyla birlikte tescil edilmesi zorunlu hale gelmiştir.",
              "Şirketlerin birleşmesi bakımından ticaret siciline tescil kurucu niteliktedir. Fakat, kurucu özelliği bulunan tescil işlemi birleşme yönünden devrolunan firmanın tescil işlemidir. Bunun sebebi, devrolunan firmanın tescili anında birleşmenin sonuç doğurmasıdır. Devralan firmanın birleşme kararının tescil işlemi açıklayıcı özelliktedir. Tescil ile birlikte artık, devrolunan firma kendiliğinden sona ermektedir.",
              "Ticaret siciline birleşmenin tesciliyle beraber hukuki geçerlilik kazanmasının en mühim neticelerinden bir tanesi de, devrolunan firmanın malvarlığının tüm aktif ve pasifleriyle beraber devralan firmaya geçmesidir. Külli halefiyet ilkesinin bir neticesi olarak devrolunan firmanın taşınmazları ve bunlar üzerindeki sınırlı ayni hakların, devralan firmaya geçmesi için, resmi senet tanzim edilmesine ve tapu siciline tesciline lüzum bulunmamaktadır. Çünkü birleşme karının tescil işlemi ile birlikte aslında iktisap, tapu müdürlüğünde tescil olunmaksızın sağlanmıştır. Menkul mallar için de teslime gerek olmaksızın yine tescille beraber mallar devralan firmaya geçmektedir.",
              "Görüldüğü üzere, birleşme kararının ticaret siciline tescili ile birlikte kendiliğinden gerçekleşen bir çok işlem bulunmaktadır. Tescil işlemi kurucu nitelikte bir işlem olduğundan gerekli özen ve dikkat gösterilmesi gerekmekte olup aksi halde birleşmeye katılan kişilerin sorumluluklarının söz konusu olacaktır.",
            ],
          },
          {
            heading: "Kaynakça",
            paragraphs: [
              "Al Kılıç, Ş., Türk Ticaret Kanunu Tasarısına Göre Ticaret Şirketlerinin Birleşmesi, 1. Basım, İstanbul: Beta, 2009.",
              "Kocaer, Ş., Şirket Yeniden Yapılandırmaları, Dördüncü Baskı, Ankara: Seçkin, 2018.",
              "Öztürk Almaç, T., Ticaret Şirketlerinin Birleşmesinde Ortaklık Haklarının Devamlılığı İlkesi, Birinci Baskı, Ankara:Seçkin, 2019.",
              "Poroy, R./ Tekinalp, Ü./ Çamoğlu, E., Ortaklıklar Hukuku I, 14. Bası, İstanbul:Vedat, 2019.",
              "Pulaşlı, H., Şirketler Hukuku Genel Esasları, Yedinci Baskı, Ankara: Salmat, 2021.",
              "Gürbüz Usluer, A.E., “Ticari İşletmelerin Devri, Yapısal Değişiklik ve Ticaret Şirketlerine Ayni Sermaye Getirilmesi İşlemlerinde, Ticaret Sicili Müdürünün Bildirim Yükümlülüğü ve Hukuki Sonuçları”, İÜHFM, C. LXXI, S.2, s.145-164, 2013, (https://dergipark.org.tr/tr/download/article-file/97831 , 16.05.2021).",
              "1 Türk Ticaret Kanunu 152. madde “(1) Birleşmeye katılan şirketler tarafından birleşme kararı alınır alınmaz, yönetim organları, birleşmenin tescili için ticaret siciline başvurur. (2) Devralan şirket, birleşmenin gereği olarak sermayesini artırmışsa, ek olarak esas sözleşme değişiklikleri de ticaret siciline sunulur. (3) Devrolunan şirket, birleşmenin ticaret siciline tescili ile infisah eder.” ↩",
              "2 Güzbüz Usluer, A.E., “Ticari İşletmelerin Devri, Yapısal Değişiklik ve Ticaret Şirketlerine Ayni Sermaye Getirilmesi İşlemlerinde, Ticaret Sicili Müdürünün Bildirim Yükümlülüğü ve Hukuki Sonuçları”, İÜHFM, C.LXXI, S.2, s.145-164, s.152. ↩",
              "3 Pulaşlı, H., Şirketler Hukuku Genel Esaslar, s.92. ↩",
              "4 Öztürk Almaç, T., Ticaret Şirketlerinin Birleşmesinde Ortaklık Haklarının Devamlılığı İlesi, s.93. ↩",
              "5 Ticaret Sicil Yönetmeliği 127. maddesi 5. fıkrası “Devralan şirketin birleşme dolayısıyla sermaye artırımı yapmasının gerekli olduğu hallerde, sermaye artırımı ile birleşme kararı eş zamanlı olarak tescil edilir. Yeni kuruluş yoluyla birleşmede ise yeni kurulacak şirketin kuruluşu ile birlikte birleşme kararı eş zamanlı olarak tescil edilir. Tescili yapan müdürlük durumu devrolunan şirketin kayıtlı olduğu müdürlüğe derhal bildirir. Birleşme nedeniyle infisah eden şirketin unvanı bu bildirim üzerine resen silinir.” ↩",
              "6 Türk Ticaret Kanunu 32. madde “ (1) Sicil müdürü tescil için aranan kanuni şartların var olup olmadığını incelemekle yükümlüdür. (2) Tüzel kişilerin tescilinde, özellikle şirket sözleşmesinin, emredici hükümlere aykırı olup olmadığı ve söz konusu sözleşmenin kanunun bulunmasını zorunluluk olarak öngördüğü hükümleri içerip içermediği incelenir. (3) Tescil edilecek hususların gerçeği tam olarak yansıtmaları, üçüncü kişilerde yanlış izlenim yaratacak nitelik taşımamaları ve kamu düzenine aykırı olmamaları şarttır. (4) Çözümü bir mahkeme kararına bağlı bulunan veya sicil müdürü tarafından kesin olarak tescilinde duraksanan hususlar, ilgililerin istemi üzerine geçici olarak tescil olunur. Ancak, ilgililer üç ay içinde mahkemeye başvurduklarını veya aralarında anlaştıklarını ispat etmezlerse geçici tescil resen silinir. Mahkemeye başvurulduğu takdirde kesinleşmiş olan hükmün sonucuna göre işlem yapılır.” ↩",
              "7 Kocaer, Ş., Şirket Yeniden Yapılandırmaları, s.112. ↩",
              "8 Yargıtay 12. Hukuk Dairesi 2005/2492 E. 2005/6435 K. 28.03.2005. ↩",
              "9 Poroy, R./ Tekinalp, Ü./ Çamoğlu, E., Ortaklıklar Hukuku I, s.157. ↩",
              "10 Al Kılıç, Ş., Türk Ticaret Kanunu Tasarısına Göre Ticaret Şirketlerinin Birleşmesi, s.152. ↩",
            ],
          },
        ],
      },
      en: {
        slug: "structural-changes-in-companies-and-trade-registry-registration",
        title: "Structural Changes in Companies and Trade Registry Registration",
        category: "Commercial Law",
        date: "05 March 2024",
        author: "HCC Law Office",
        excerpt:
          "A general overview of the registration process and legal effects of mergers, demergers, conversion and other structural changes in companies.",
        seoTitle:
          "Structural Changes in Companies and Trade Registry Registration | HCC Law Office",
        seoDescription:
          "An overview of mergers, demergers, conversions and the legal effects of trade registry registration in corporate restructurings.",
        introduction:
          "Structural changes in companies such as mergers, demergers, conversions and similar transactions affect not only internal corporate approvals but also creditors, shareholders and public records. This article is structured to address both the trade registry dimension and the legal effects of these transactions in a clear and maintainable format.",
        sections: [
          {
            heading: "Core Elements of the Transaction",
            subheading: "Processes extending beyond internal corporate approvals",
            paragraphs: [
              "Mergers, demergers and conversions create layered legal consequences in terms of corporate resolutions, shareholder balance, creditor protection and public disclosure. They should therefore be assessed not merely through transaction documents but through the broader legal impact of the process.",
              "As the transaction structure becomes more complex, the documentary set and compliance requirements may also change.",
            ],
            bullets: [
              "Proper adoption of corporate resolutions",
              "The impact on shareholders and creditors",
              "Completeness of the transaction documentation",
            ],
          },
          {
            heading: "Registration Process",
            subheading: "A completing stage for public record purposes",
            paragraphs: [
              "Trade registry applications require complete documentation, proper sequencing and resolutions prepared in line with the applicable legal framework. Registration is often not merely a formal step but a stage that secures legal visibility and transactional certainty.",
              "In practice, registry offices may differ in terms of documentary expectations and procedural details, which makes transaction-specific preparation essential.",
            ],
            bullets: [
              "Complete preparation of application documents",
              "Correct sequencing of the transaction steps",
              "Technical preparation aligned with registry practice",
            ],
          },
          {
            heading: "Closing Assessment",
            paragraphs: [
              "Structural corporate changes require coordinated management of both pre-transaction preparation and post-registration effects. Early legal control is therefore central to process security.",
              "Document flow, internal approvals and registration readiness should be handled as a single integrated process.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "annulment-mediation",
    image: "/articles/makale-5.jpg",
    publishedAt: "2024-02-18",
    featured: true,
    locales: {
      tr: {
        slug: "tasarrufun-iptali-davalarinda-arabuluculuk",
        title: "Tasarrufun İptali Davalarında Arabuluculuk",
        category: "İcra ve İflas Hukuku",
        date: "İstanbul, 2020",
        author: "Av. Hasan Can Cebeci",
        excerpt:
          "Tasarrufun iptali davalarında zorunlu arabuluculuğun uygulanabilirliği, ticari dava niteliği ve yan davalar bakımından ortaya çıkan tartışmalar hakkında temel değerlendirmeler.",
        seoTitle:
          "Tasarrufun İptali Davalarında Arabuluculuk | HCC Avukatlık Bürosu",
        seoDescription:
          "Tasarrufun iptali davalarında zorunlu arabuluculuğun kapsamı, ticari dava tartışmaları ve Yargıtay uygulamasına ilişkin temel hukuki değerlendirmeler.",
        introduction:
          "Alternatif uyuşmazlıklarda çözüm seçeneklerinden bir tanesi olan arabuluculuk, yapılan yasal düzenlemelerden sonra uygulanmaya başlamıştır. Taraflar arasında uyuşmazlık söz konusu olduğunda dava şartı olarak, dava açılmadan evvel arabuluculuğa müracaat edilmesinin zorunlu olması, zorunlu arabuluculuğun etkili bir şekilde uygulanmasını beraberinde getirmiştir. 6102 sayılı Türk Ticaret Kanunu’na eklenen 5/A maddesiyle birlikte ticari uyuşmazlıklarda dava şartı olarak zorunlu arabuluculuğa başvurulması mecbur kılınmıştır. Bu maddenin Yasa’ya eklenmesi ile beraber ticari davalar yönünden hangi uyuşmazlıkların zorunlu arabuluculuğa başvurulmasının gerekliliği tartışma konusu olmuştur. Bu tartışmalardan biri de, tasarrufun iptali davalarında zorunlu arabuluculuğa başvurulmasının gerekli olup olmadığıdır. 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu’na eklenen 18/A maddesinde de arabuluculuğa başvurunun dava şartı olarak kabul edildiği davaların evvelinde arabuluculuk sürecinin nasıl olması gerektiği düzenlenmiştir.\n\nArabuluculuk Daire Başkanlığı’nın internet sitesinde yayımlanan Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk” isimli kitapta yapılan değerlendirmeler, hukuk mahkemeleri tarafından sorgulanmaksızın benimsenmiş ve verilen kararlar tartışmaları da beraberinde getirmiştir. Yargıtayın yerleşik içtihatları ve Bölge Adliye Mahkemeleri’nin kararları, yayımlanan kitabın aksine kararlar yer alması karşısında, öğretide de bir çok tartışmaya sebebiyet vermiştir.",
        sections: [
          {
            heading: "I. Ticari Davalarda Arabuluculuğa Başvurma Zorunluluğu",
            paragraphs: [
              "Ticari davalarda zorunlu arabuluculukla ilgili olarak 7155 sayılı Kanun’da iki ayrı düzenleme yapılmıştır. Yapılan düzenlemelerden biri, Türk Ticaret Kanunu’na eklenen 5/A maddesiyle beraber hangi davalarda zorunlu arabuluculuğa gidilmesi gerektiği açıklanmıştır. İlgili maddenin birinci fıkrası uyarınca \"Bu Kanunun 4 üncü maddesinde ve diğer kanunlarda belirtilen ticari davalardan, konusu bir miktar paranın ödenmesi olan alacak ve tazminat talepleri hakkında dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır.\" şeklinde yapılan açıklamayla, ticari uyuşmazlıklarda zorunlu arabuluculuk, dava şartı olarak hukuk sistemine girmiştir.",
              "Yapılan düzenlemeyle iki ölçüt benimsenmiştir. Bunlardan ilki 6102 sayılı Kanun’un 4. maddesine yapılan göndermeyle ticari uyuşmazlığa konu davanın mutlak veya nisbi bir ticari dava olması öngörülmüştür.",
              "Mutlak ticari davalar, konularından dolayı tarafların ticari işletmeleriyle alakalı ve tacir olup olmadıklarına bakılmaksızın ticari sayılan davalardır. Bu davalar Türk Ticaret Kanunu 4. maddesi 1. fıkrasında sayılan konulardan doğan davalar olabileceği gibi özel kanun hükümleri gereği de ticari dava sayılabilirler.(1) Nispi ticari davalar ise, tarafların ticari işletmelerini ilgilendiren konulardan doğan davalardır.(2) Bazı davalarda ise taraflardan en az birinin ticari işletmesini ilgilendirmesi yeterlidir.",
              "Diğer düzenleme ise Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu’na eklenen 18/A maddesiyle birlikte dava şartı olarak arabuluculuğun kabul edildiği davaların öncesinde arabuluculuk sürecinin belirtilmesidir.(3)",
              "Kanun’da yapılan düzenlemenin yoruma açık oluşu peşinde bir çok tartışmayı da beraberinde getirmiştir. Adalet Bakanlığı Arabuluculuk Daire Başkanlığı, meydana gelebilecek hak kayıplarının engellenmesi ve tartışmaların önüne geçmek amacıyla “Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk” isimli kitabı,(4) getirilen düzenlemeye yol göstermesi amacıyla kendi internet sitesinde(5) yayınlamıştır.",
            ],
          },
          {
            heading: "II.1. Tasarrufun İptali Davaları",
            subheading: "II. Tasarrufun İptali Davalarında Zorunlu Arabuluculuk",
            paragraphs: [
              "Tasarrufun iptali davaları İcra ve İflas Kanunu’nun 277. ve 284. maddeleri arasında düzenlenmiştir. Yargıtayın yerleşik içtihatlarında tasarrufun iptali davası, borçlunun, alacaklısını zarara uğratma kastıyla, mal varlığından çıkarttığı mal ve hakların, zarar gören alacaklının alacağını elde etmek maksadıyla dava açarak tekrar borçlunun mal varlığına geçmesini sağlayan bir dava türü olarak tanımlanmıştır.(6) Bu davalarda, üçüncü kişi ile borçlu arasındaki tasarruf iptal edilerek alacaklıya, tasarrufa konu mal üzerinde, alacaklının alacağı nispetinde olmak kaydıyla cebri icra yetkisi verilmektedir.",
              "Bu davalar dava konusu olan malın aynına ilişkin bir ayni dava değil, kişisel bir davadır. Tasarrufun iptali davalarının şahsi dava olduğu ve nispi nitelikte bir talep hakkı sağladığı kabul edilmektedir.(7)",
              "Yargıtay da vermiş olduğu bir kararında, tasarrufun iptali davalarının alacaklıya, alacağını tahsil etme imkanı sağlayan nisbi nitelikte ve Yasa’dan kaynaklanan bir dava olduğunu belirtmiştir. (8)",
            ],
          },
          {
            heading: "II.2. Tasarrufun İptali Davaları ile Zorunlu Arabuluculuk Arasındaki İlişki",
            subheading: "II. Tasarrufun İptali Davalarında Zorunlu Arabuluculuk",
            paragraphs: [
              "İcra ve iflas hukukunda yalnızca alacaklı ve borçlunun çıkarları değil, çoğu zaman üçüncü kişilerin menfaatlerinin de çatıştığı görülmektedir. Üçüncü kişilerin hukuka aykırı yapmış olduğu işlemlerden olduğu alacaklının haklarının ihlal edilmesi neticesinde tüm tarafların menfaatlerinin eşit şekilde korunması gerekmektedir. Bu menfaat dengesinin korunması amacıyla, İcra ve İflas Kanunu’nda yer alan düzenlemelerden bir tanesi de tasarrufun iptali davalarıdır.",
              "Adalet Bakanlığı Arabuluculuk Daire Başkanlığı, değerlendirmelerini benimsemiş olduğu Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk kitabında, tasarrufun iptali davasının temelinde alacak hakkı olan bir eda davasına dayandığını ve uyuşmazlığın dava şartı olarak arabuluculuk dahilinde olması durumunda, dava şartı olarak arabuluculuğa dair hükümlerin uygulanması gerektiği belirtilmiştir.(9)",
              "Türk Ticaret Kanunu 5/A maddesi gereği, bir davanın zorunlu arabuluculuk kapsamına girebilmesi için, o davanın mutlak veya nisbi ticari dava niteliğinde olması gerektiği gibi, konusu bir miktar paranın ödenmesi olan tazminat ve alacak taleplerini içermesi gerekmektedir.",
              "Tasarrufun iptali davalarının sonunda alacaklının iki tane menfaati bulunmaktadır. Bunlardan bir tanesi davacı alacaklının, tasarrufa konu mal üzerinde kendisine alacağı nispetinde cebri icra yetkisinin verilmesini talep etmesidir. Diğer ise, başkaca üçüncü kişilere yapılan devirler sonunda, davacı alacaklı yönünden iptal koşulları sağlanmamış kişilerin eline geçmiş olması halinde, borçlunun ızrar kastını bilen veya bilmesi gereken kişiler yönünden mal yerine geçebilecek değerin tazmininin istenebilmesidir.(10)",
              "Tasarrufun iptali davalarında davacı alacaklının menfaatlerin biri olan, kendisine mal üzerinde cebri icra yetkisinin verilmesi, Türk Ticaret Kanunu 5/A maddesinde ifade edildiği haliyle bir miktar paranın ödenmesi durumu olmadığı görülmektedir.",
              "Yargıtay Hukuk Genel Kurulu vermiş olduğu bir kararda, tasarrufun iptali davasını eda davası olarak kabul etmiştir.(11) Tasarrufun iptali davalarının konusu temelinde alacak hakkına ilişkin olsun veya olması, Yasa’da belirtilen haliyle konusu bir miktar paranın ödenmesi yerine cebri icra yetkisi verilmiş olmasından dolayı, davanın zorunlu arabuluculuk kapsamına girmediği düşünülebilir.",
              "Diğer taraftan tasarrufun iptali davasının bir miktar para alacağının veya tazminatın ödenmesine dair nitelendirilmesi öğretide eleştirilmekte ve iptal davalarının niteliği sebebiyle inşai dava olduğu savunulmaktadır.(12)",
              "Tasarrufun iptali davalarının sonunda alacaklının diğer menfaati ise İcra ve İflas Kanunu 283. madde 2. fıkrasında yer alan “İptal davası, üçüncü şahsın elinden çıkarmış olduğu mallar yerine geçen değere taalluk ediyorsa, bu değerler nispetinde üçüncü şahıs nakden tazmine (Davacının alacağından fazla olmamak üzere) mahkum edilir.” şeklindeki düzenlemeye göre, Türk Ticaret Kanunu 5/A maddesindekinde belirtilen alacak davası ve tazminat talebinin bulunduğu yönünde değerlendirme yapılabilir. Fakat bu defa davanın, Türk Ticaret Kanunu 4. maddesinde ve diğer kanunlarda belirtilen ticari dava niteliğinde olup olmama hususu kendini gösterecektir.",
              "Tasarrufun iptali davaları ticari dava sayılmadıklarından dolayı ticaret mahkemelerinin görevine girmemektedir. Yargıtay bu yönde vermiş olduğu kararlarından bir tanesinde, tasarrufun iptali davalarının mutlak ticari dava niteliğinde değil şahsi nitelikte olduğundan asliye hukuk mahkemelerinin görevli olduğuna hükmetmiştir.(13)",
              "Yargıtay Hukuk Genel Kurulu da, tasarrufun iptali davalarının Türk Ticaret Kanunu 4. maddesinde belirtilen mutlak veya nispi ticari dava niteliğine haiz olmadıklarından Hukuk Muhakemeleri Kanunu 2. maddesi uyarınca genel görevli asliye hukuk mahkemesinin görev alanına girdiğinde ilişkin karar vermiştir.(14)",
              "Bu haliyle, tasarrufun iptali davasında İcra ve İflas Kanunu 283. maddesi 2. fıkrası gereği tazminatın ödenmesine karar verilmesi durumunda dahi, dava mutlak veya nispi ticari dava sayılmadığından, zorunlu arabuluculuk dahilinde olmadığı görülmektedir.",
              "Adalet Bakanlığı Arabuluculuk Daire Başkanlığı, değerlendirmelerini benimsemiş olduğu Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk kitabında tasarrufun iptali davalarının zorunlu arabuluculuğa tabi olduğunu örnek vermek suretiyle izah etmeye çalışmıştır. Bu örnekte, davacı alacaklı başlatmış olduğu icra takibinin semeresiz kaldığını, borçlunun sahibi olduğu aracını önce bir üçüncü kişiye, sonra başkaca bir kimseye devrettiğini iddia ederek söz konusu tasarrufların iptalini istemiştir.(15) Örnekte belirtilen tasarrufun iptali davasının, özel kanunlarda düzenlenen mutlak ticari davalardan olduğu kitapta kabul edilmiş ve dava şartı arabuluculuk kapsamında olduğuna işaret edilmiştir.(16) Bahsi geçen özel kanun 2004 sayılı İcra ve İflas Kanunu’dur. Yargıtay Hukuk Genel Kurulu kararı ve bir çok Yargıtay içtihadı olmasına rağmen, Adalet Bakanlığı Arabuluculuk Daire Başkanlığı’nın tasarrufun iptali davalarının ısrarla, temelinde bir eda davası niteliğinde olduğundan bahisle dava şartı olarak zorunlu arabuluculuğa tabi olması gerektiği yönünde değerlendirmesine katılmak mümkün olmamaktadır.",
              "Konuyla ilgili olarak Konya Bölge Adliye Mahkemesi 3. Hukuk Dairesi, tasarrufun iptali davalarının zorunlu arabuluculuk kapsamında olmadığına dair yakın tarihli bir karar vermiştir. Bu kararında; yerel mahkemenin uyuşmazlığı ticari uyuşmazlık olarak nitelendirmiş ve zorunlu arabuluculuk yoluna başvurulmadan dava açıldığı gerekçesi ile davayı usulden reddetmesi sonucu, İcra ve İflas Kanunu 281. maddesi 1. fıkrası uyarınca görevin genel mahkemelerde olduğu, İcra ve İflas Kanunu 277. ve devamı maddeleri gereği de iptal istemiyle açılan tasarrufun iptali davalarının ticari dava şeklinde değerlendirilemeyeceği sebebiyle yerel mahkemenin kararını hatalı bularak bozmuştur. (17)",
            ],
          },
          {
            heading: "III. Tasarrufun İptali Davası ile Beraber Açılabilen Yan Davalarda Zorunlu Arabuluculuk",
            paragraphs: [
              "İcra ve İflas Kanunu 283. maddesi 3. fıkrasında, tasarrufun iptali davası ile beraber üçüncü kişi tarafından borçlu aleyhine açılabilen yan dava yer almaktadır. Üçüncü kişi tarafından borçluya karşı açılan bu yan davada, üçüncü kişinin iptal davası sonucunda uğrayabileceği zararının tazmini talep edilebilmektedir. Tasarrufun iptali davası ve yan dava birlikte görülebileceği gibi, mahkeme tarafından davalar tefrik de edilebilir.",
              "Buradaki mesele, ticari dava niteliğini taşımayan ve dava şartı olarak arabuluculuğa başvuru zorunluluğuna tabi olmadığı Bölge Adliye Mahkemesi tarafından da kabul edilen tasarrufun iptali davaları ile üçüncü kişi tarafından ikame edilen yan davanın aynı davada beraber görülmesinin doğuracağı problemdir. Çünkü, üçüncü kişinin borçluya karşı açacağı tazminat davası, üçüncü kişi ile borçlu arasında ticari ilişki olduğu düşünülerek, tazminat talebi içerdiğinden Türk Ticaret Kanunu 5/A maddesi uyarınca zorunlu olarak arabulucuya başvurulmasını gerektirecektir.",
              "Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk kitabının “Dava Şartı Olarak Arabuluculuğun Medeni Usul Hukukuna ve Dava Çeşitlerine Etkisi” başlıklı davaların yığılması durumunda her bir talebin ayrı ayrı dava oluşturduğu ve her bir asli talep yönünden dava şartlarının ayrı ayrı değerlendirmeye tabi tutulması gerektiği belirtilmektedir.(18) Ticari Uyuşmazlıklarda Dava Şartı Olan Arabuluculukta Taraf Vekilliği El Kitabı’nda da aynı yönde değerlendirme yapılarak taleplerden birinin bir miktar paranın ödenmesi olması halinde diğer talep için bu yönde bir talep olmasa dahi arabuluculuğa müracaat edilmesinin doğru olduğu ifade edilmiştir.(19)",
              "Mahkeme tarafından her iki davanın aynı dava dosyasında beraber görüldüğü düşünüldüğünde, aslında maddi anlamda birbirinden bağımsız olan davaların, usul ekonomisi ilkesi uyarınca kararlarda çelişki olmaması açısından beraber görülme gerekliliğini beraberinde getirmektedir.(20) Bu haliyle, üçüncü kişinin borçlu aleyhine tazminat talepli açacağı davada arabulucuya başvurulmasının zorunlu olduğu kabul edilirse, asıl dava olan tasarrufun iptali davası henüz sonuçlanmadığı için üçüncü kişinin zararının oluşup oluşmadığı bilenemeyeceğinden, arabuluculuk görüşmelerinde konusu olmayan bir mevzunun görüşülmesi gibi bir durum ortaya çıkacaktır.",
              "Mahkeme tarafından yan dava olan tazminat davasının tefrik edilmesi halinde ise İcra ve İflas Kanunu 283. maddesi 3. fıkrası son cümlesine göre tasarrufun iptali davasını daha önce hükme bağlayabilir. Başka bir ifade tasarrufun iptali davasının neticesini bekletici mesele yapma durumu söz konusudur. Davanın tefrik edilmesi halinde esas davadan farklı yeni bir esasa kaydedilir. Davanın yeni bir esasa kaydedilmesi durumunda ise Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu 18/A-2 maddesi uyarınca davanın reddedilmesi gerekip gerekmediği sonucunu doğuracaktır.",
              "Yargıtay vermiş olduğu bir kararında, arabuluculuğa tabi olmayan bir davayla beraber açılan bir miktar paranın tahsil istemini içerir davanın da arabuluculuk dava şartına dahil olamayacağı yönünde karar vermiştir. Şöyle ki; dava, davacı ile davalı arasında geçerli bir ortaklık ilişkisinin kurulmadığının tespiti ve davacının abonelik sözleşmesinden doğan para alacağının davalıdan tahsili hakkındadır. Yerel mahkeme, davanın konusu para alacağı ile ilgili olduğundan dava açılmadan önce arabuluculuğa müracaat edilmediği için davanın reddine karar vermiştir. Davacının, Bölge Adliye Mahkemesine yapmış olduğu başvuru hakkında da esastan reddedilmiştir. Kararı davacının temyiz etmesi sonucunda Yargıtay; konusu bir miktar paranın ödenmesi olan alacak ve tazminat taleplerine ilişkin dava ikame edilmeden önce arabulucuya başvurulmasının zorunlu ve dava şartı olduğunu belirtmekle birlikte, somut olayda Hukuk Muhakemeleri Kanunu 110. maddesinde düzenlenen davaların yığılması durumunun mevcut olduğunu ve uyuşmazlığın da paranın tahsili ile ortak olunmadığının tespiti şeklinde iki ayrı davanın birlikte açıldığını belirtmiştir. Kararın devamında ise, her ne kadar konusu bir miktar paranın ödenmesi hakkında olan tahsil davası arabuluculuğa tabi olsa da, taraflar arasında geçerli bir ortaklık ilişkisinin kurulmadığının tespiti davasının arabuluculuğa tabi olmadığını ifade etmiştir. Bu haliyle de, dava şartı olarak arabuluculuğa tabi olmayan bir davayla beraber açılan bir miktar paranın tahsiline ilişkin davanın da arabuluculuk dava şartı kapsamında olamayacağından Bölge Adliye Mahkemesi kararının bozularak kaldırılmasına karar vermiştir.(21)",
              "Yargıtay kararına konu olayda, taraflar arasında geçerli bir ortaklık ilişkisinin kurulmadığının tespiti talep edilirken aslında, davacının ödemiş olduğu paranın tahsiline dair talebinin içerisinde de bir nevi tespit talebi bulunmaktadır. Yargıtayın kararında önemli olan husus, davaların yığılması durumunda zorunlu arabuluculuğa müracaat edilip edilmesi hakkındadır. Yargıtayın içtihadının benimsenmesi halinde, davaların yığılması durumunda her dava için yapılmakta olan dava şartına dair değerlendirmenin artık söz konusu olmayacağı sonucu çıkmaktadır.",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: [
              "Adalet Bakanlığı Daire Başkanlığı’nın yayımladığı “Ticari Davalarda Dava Şartı Arabuluculuk” kitabında, ticari davalarda zorunlu arabuluculuğu en geniş manada yer verilmiş iken, bir alacak veya tazminat davası şeklinde nitelendirilmemesi gereken tasarrufun iptali davasının da zorunlu arabuluculuğa tabi olduğu yönünde değerlendirmelerde bulunulmuştur.",
              "Tasarrufun iptali davalarının özelliklerinden bir tanesi alacaklı, borçlu ve üçüncü kişi arasında, farklı grupların menfaat dengesini sağlamaktadır. Alacaklı ile borçlu arasındaki borç ilişkisinin ticari davaya konu olabilme imkanının yanında, üçüncü kişinin bu borç ilişkisinin tarafı olmamasına rağmen ticari ilişkinin tarafıymış gibi değerlendirilip tasarrufun iptali davasının ticari dava sayılması hukukunuzda tartışılmaktadır. Yargıtay kararlarında ısrarla, tasarrufun iptali davalarının ticari dava olmadığı yönünde değerlendirme yapılmasıyla birlikte, Bölge Adliye Mahkemeleri de yakın tarihli kararlarında tasarrufun iptali davalarının ticari dava olarak nitelendirilemeyeceğinden, zorunlu arabuluculuğa tabi olmadığı şeklindeki değerlendirmelerinin yerinde olduğunu düşünmekteyiz.",
              "Davacı alacaklı, tasarrufa konu mal üzerinde kendisine alacağı nispetinde cebri icra yetkisinin verilmesini talep ettiği koşulda davanın, Türk Ticaret Kanunu 5/A maddesinde ifade edildiği haliyle bir miktar paranın ödenmesi durumu olmadığı açıktır. Bununla birlikte, üçüncü kişinin elinden çıkarmış olduğu mal bulunamaz ise, iptali istenen şeyin değeri oranında tazminat istenmesi, bir miktar paranın ödenmesi olarak kabul edilse dahi iptal davasının, Türk Ticaret Kanunu 4. maddesinde belirtilen mutlak veya nisbi ticari davalardan olmadığından bahisle zorunlu arabuluculuğa tabi olmaması gerekmektedir.",
            ],
          },
          {
            heading: "Kaynakça",
            paragraphs: [
              "Bahtiyar, M., Ticari İşletme Hukuku, 18. Baskı, Beta, 2017.",
              "Budak, C., Ticari Davalarda Dava Şartı Olarak Arabuluculuk, Medeni Usul ve İcra İflas Hukuku Dergisi, C:15, S:42, s.25-40, 2019.",
              "Can, G., Ticari Davalarda Zorunlu Arabuluculuk Düzenlemesinin Kapsamı Ve Bazı Tartışmalı Husular, İstanbul Barosu Dergisi, C:93, S:6, s.174-192, 2019.",
              "Ermenek, İ./Azaklı Arslan, B., İcra ve İflas Hukuku Açısından Ticari Davalarda Arabuluculuğa Başvuru Zorunluluğu (TTKm. 5/A), TBB Dergisi, S:148, s.135-196, Mayıs-Haziran 2020.",
              "Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, Hukuk İşleri Genel Müdürlüğü Arabuluculuk Daire Başkanlığı Yayını, Mart 2019 (www.adb.adalet.gov.tr, e.t.13.06.2020).",
              "Ören, O., Tasarrufun İptali Davaları Zorunlu Arabuluculuk Kapsamında Değildir, İstanbul Barosu Dergisi, C:93, S:4, s.74-78, Temmuz-Ağustos 2019.",
              "Türkiye Barolar Birliği, Ticari Uyuşmazlıklarda Dava Şartı Olan Arabuluculukta Taraf Vekilliği El Kitabı, S:364, Ocak 2019.",
              "Uyar, T., “Muvazaa Nedenine Dayalı Tasarrufun İptali Davalarının Koşul ve Sonuçları, Ankara Barosu Dergisi, S:2017/3, s.265-316, 2017 (www.ankarabarosu.org.tr, e.t. 03.06.2020).",
              "1 Bahtiyar, M., Ticari İşletme Hukuku, s.89 ↩",
              "2 Bahtiyar, M., Ticari İşletme Hukuku, s.91. ↩",
              "3 Can, G., Ticari Davalarda Zorunlu Arabuluculuk Düzenlemesinin Kapsamı Ve Bazı Tartışmalı Hususlar, İstanbul Barosu Dergisi, C:93, S:6, s.174-192, 2019, s.175. ↩",
              "4 Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, Hukuk İşleri Genel Müdürlüğü Arabuluculuk Daire Başkanlığı. ↩",
              "5 www.adb.adalet.gov.tr ↩",
              "6 YHGK, 2004/15-666 E., 2005/1 K., 02.02.2005. ↩",
              "7 Uyar, T., “Muvazaa Nedenine Dayalı Tasarrufun İptali Davalarının Koşul ve Sonuçları, Ankara Barosu Dergisi, s.265-316, 2017/3, s.266. ↩",
              "8 Y17HD, 2015/17344 E., 2015/14279 K., 16.12.2015. ↩",
              "9 Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, s.68. ↩",
              "10 Ören, O., Tasarrufun İptali Davaları Zorunlu Arabuluculuk Kapsamında Değildir, İstanbul Barosu Dergisi, C:93, S:4, s.74-78, Temmuz-Ağustos 2019, s.75. ↩",
              "11 YHGK, 2014/17-843 E., 2016/433 K., 30.03.2016. ↩",
              "12 Budak, C., Ticari Davalarda Dava Şartı Olarak Arabuluculuk, Medeni Usul ve İcra İflas Hukuku Dergisi, C:15, S:42, s.24-40, 2019, s.35. ↩",
              "13 Y17HD., 2014/14988 E., 2016/9040 K., 18.10.2016. ↩",
              "14 YHGK, 2014/17-2389 E., 2016/129 K., 10.02.2016. ↩",
              "15 Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, s.196. ↩",
              "16 Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, s.191. ↩",
              "17 “Öte yandan; İİK'nun 277 vd. maddelerinde düzenlenen tasarrufun iptali davalarının, ticari dava nitelikleri bulunmadığından ticaret mahkemelerinde bakılamaz. Zira tasarrufun iptali davalarında amaç borçlunun aciz ya da iflasından önce yaptığı ve aslında geçerli olan bazı tasarrufların geçersiz ya da iyiniyet kurallarına aykırılık nedeniyle alacaklıya karşı sonuçsuz kalmasını ve dolayısıyla o mal üzerinden cebri icraya devamla alacağın tahsilini sağlamaktır. İptal davası, alacaklıya alacağını tahsil olanağını sağlayan, nisbi nitelikte yasadan doğan bir dava olup tasarrufa konu malların 3. Kişi tarafından satın alınmış olmasının ya da uyuşmazlığın davalılar arasında çıkmasının görev hususunun belirlenmesine doğrudan bir etkisi yoktur. Kaldı ki davada incelenmesi gereken husus davalı borçlunun yaptığı tasarruflarının iptali gerekip gerekmediği, başka bir anlatımla İİK 277 vd. maddelerinde belirtilen şartların gerçekleşip gerçekleşmediğidir. Açıklanan şekli ile görevin, İİK 281/1 maddesine göre genel mahkemelere ait olduğu, davanın ticari dava olmadığı da açıktır. Yukarıda açıklanan nedenlerle mahkemece; davacı banka tarafından davalıların kendi aralarında yapmış oldukları tasarrufun İİK'nun 277 ve devamı maddeleri gereğince iptali istemi ile açılan tasarrufun iptali davasının ticari dava olarak değerlendirilmesi ile davanın dava şartı yokluğu sebebiyle usulden reddine karar verilmesi hatalı olup davacının istinaf talebinin kabulüne karar verilmesi gerektiği anlaşılmıştır.” Konya Bölge Adliye Mahkemesi 3.HD, 2019/528 E., 2019/554 K., 13.06.2019. ↩",
              "18 Koçyiğit, İ./ Bulur, A., Ticari Uyuşmazlıklarda Dava Şartı Arabuluculuk, s.69. ↩",
              "19 Türkiye Barolar Birliği, Ticari Uyuşmazlıklarda Dava Şartı Olan Arabuluculukta Taraf Vekilliği El Kitabı, 2019, s.21. ↩",
              "20 Ermenek, İ./ Azaklı Arslan, B.,İcra ve İflas Hukuku Açısından Ticari Davalarda Arabuluculuğa Başvuru Zorunluluğu (TTKm. 5/A), TBB Dergisi, S:148, s.135-196, s.170. ↩",
              "21 Y11HD, 2020/197 E., 2020/1578 K., 15.04.2020 (www.turkhukuksitesi.com/serh.php?did=17016, e.t. 13.06.2020). ↩",
            ],
          },
        ],
      },
      en: {
        slug: "mediation-in-actions-for-annulment-of-disposition",
        title: "Mediation in Actions for Annulment of Disposition",
        category: "Enforcement and Bankruptcy Law",
        date: "18 February 2024",
        author: "HCC Law Office",
        excerpt:
          "A review of the limits of mediation in annulment actions, its impact on litigation and the key issues encountered in practice.",
        seoTitle:
          "Mediation in Actions for Annulment of Disposition | HCC Law Office",
        seoDescription:
          "A concise review of mediation in annulment actions, including its scope, procedural implications and the main debates in practice.",
        introduction:
          "Whether mediation can apply to actions for annulment of disposition requires careful consideration of the legal nature of the dispute and the limits of matters over which the parties may freely dispose. This article is structured to highlight the main lines of debate and their procedural implications.",
        sections: [
          {
            heading: "Nature of the Dispute",
            subheading: "The interaction between creditor protection and procedure",
            paragraphs: [
              "Actions for annulment of disposition are generally treated as creditor-protective instruments within enforcement law. For that reason, any assessment of their suitability for mediation must consider not only general procedural concepts but also the substantive and enforcement-law character of the claim.",
              "The purpose of the action, the legal position of the parties and the systemic rationale of creditor protection all play a meaningful role in this analysis.",
            ],
            bullets: [
              "The legal character of the claim asserted",
              "The limits of the parties' power of disposition",
              "The effect of the creditor-protection rationale",
            ],
          },
          {
            heading: "Scope of Mediation",
            subheading: "Debates on suitability and procedural prerequisites",
            paragraphs: [
              "The core debate concerns whether mediation functions as a procedural prerequisite in such disputes and, more broadly, whether the subject matter is suitable for mediation at all. The role of public policy and the degree of party autonomy are central to this discussion.",
              "Because practice may vary, the structure of the claim, the enforcement process and the procedural posture of the parties should be reviewed together in each case.",
            ],
            bullets: [
              "The scope of mandatory mediation rules",
              "The role of public policy considerations",
              "The combined review of enforcement context and claim structure",
            ],
          },
          {
            heading: "General Conclusion",
            paragraphs: [
              "The question of mediation in annulment actions does not lend itself to a single abstract answer. It must be assessed in light of the specific legal structure of the dispute and the procedural context in which it arises.",
              "An early and comprehensive legal review remains essential for shaping the correct litigation strategy.",
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

export function getArticlePath(locale: Locale, slug: string) {
  return locale === "tr" ? `/makalelerimiz/${slug}` : `/en/articles/${slug}`;
}

function mapArticle(locale: Locale, article: ArticleRecord): ArticleDetail {
  const localized = article.locales[locale];
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const alternate = article.locales[alternateLocale];

  return {
    id: article.id,
    title: localized.title,
    slug: localized.slug,
    category: localized.category,
    date: localized.date,
    image: article.image,
    author: localized.author,
    excerpt: localized.excerpt,
    href: getArticlePath(locale, localized.slug),
    publishedAt: article.publishedAt,
    seoTitle: localized.seoTitle,
    seoDescription: localized.seoDescription,
    introduction: localized.introduction,
    sections: localized.sections,
    alternateHref: getArticlePath(alternateLocale, alternate.slug),
  };
}

export function getAllArticles(locale: Locale): ArticleListItem[] {
  return articleRecords.map((article) => {
    const mapped = mapArticle(locale, article);

    return {
      id: mapped.id,
      title: mapped.title,
      slug: mapped.slug,
      category: mapped.category,
      date: mapped.date,
      image: mapped.image,
      excerpt: mapped.excerpt,
      href: mapped.href,
    };
  });
}

export function getFeaturedArticle(locale: Locale): ArticleListItem {
  const featured = articleRecords.find((article) => article.featured) ?? articleRecords[0];
  const mapped = mapArticle(locale, featured);

  return {
    id: mapped.id,
    title: mapped.title,
    slug: mapped.slug,
    category: mapped.category,
    date: mapped.date,
    image: mapped.image,
    excerpt: mapped.excerpt,
    href: mapped.href,
  };
}

export function getArticleBySlug(locale: Locale, slug: string) {
  const article = articleRecords.find((item) => item.locales[locale].slug === slug);
  return article ? mapArticle(locale, article) : null;
}

export function getRelatedArticles(locale: Locale, slug: string, limit = 3) {
  return getAllArticles(locale).filter((article) => article.slug !== slug).slice(0, limit);
}

export function getArticleStaticParams(locale: Locale) {
  return articleRecords.map((article) => ({
    slug: article.locales[locale].slug,
  }));
}

export function translateArticlePath(pathname: string, targetLocale: Locale) {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  for (const article of articleRecords) {
    const trPath = getArticlePath("tr", article.locales.tr.slug);
    const enPath = getArticlePath("en", article.locales.en.slug);

    if (normalizedPath === trPath || normalizedPath === enPath) {
      return targetLocale === "tr" ? trPath : enPath;
    }
  }

  return null;
}

export function buildArticleMetadata(locale: Locale, slug: string): Metadata | null {
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    return null;
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: article.href,
      languages: {
        tr: locale === "tr" ? article.href : article.alternateHref,
        en: locale === "en" ? article.href : article.alternateHref,
        "x-default": locale === "tr" ? article.href : article.alternateHref,
      },
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: absoluteUrl(article.href),
      siteName: locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.image],
    },
  };
}

export function getArticleSitemapEntries(): MetadataRoute.Sitemap {
  return articleRecords.flatMap((article) => {
    const trPath = getArticlePath("tr", article.locales.tr.slug);
    const enPath = getArticlePath("en", article.locales.en.slug);
    const lastModified = new Date(article.publishedAt);

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
