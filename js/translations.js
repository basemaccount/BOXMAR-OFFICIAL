/* ============================================
   BOXMAR GLOBAL LOGISTICS — Translation Data
   English, Turkish, and Arabic UI string translations.
   Consumed by app.js (initLanguageSwitcher /
   applyTranslations).
   ============================================ */

const translations = {
  en: {
    /* Navigation */
    'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services',
    'nav.quote': 'Get Quote', 'nav.tracking': 'Tracking', 'nav.contact': 'Contact',
    'nav.cta': 'Get Quote',

    /* Service names */
    'svc.road': 'Road Transport', 'svc.sea': 'Sea Freight', 'svc.air': 'Air Freight',
    'svc.rail': 'Rail Freight', 'svc.chemical': 'Chemical Freight', 'svc.food': 'Food Freight',

    /* Hero */
    'hero.badge': 'Celebrating 25 Years of Excellence',
    'hero.title.trust': 'MUTUAL TRUST,<br>MUTUAL SUCCESS',
    'hero.title.3': 'Moving Your World Safely',
    'hero.text': 'Boxmar Global Logistics \u2014 Turkey\'s trusted leader in international freight forwarding, chemical tank containers, and food tank shipments. Over 25 years of mutual trust and global success.',
    'hero.btn1': 'Get Quote in 60 Seconds', 'hero.btn2': 'Explore Our Services',
    'hero.stat1.num': '25+', 'hero.stat1.label': 'Years Experience',
    'hero.stat2.num': '500+', 'hero.stat2.label': 'Satisfied Clients',
    'hero.stat3.num': '50+', 'hero.stat3.label': 'Team Members',
    'hero.feat1': 'Global Reach', 'hero.feat1.desc': '120+ Countries',
    'hero.feat2': 'Reliability', 'hero.feat2.desc': '99.9% On-Time',

    /* Trust bar */
    'trust.1': '25 Years Experience', 'trust.2': '99.9% On-Time Delivery',
    'trust.3': 'ADR Certified', 'trust.4': 'ISO 9001 Quality',

    /* Services section */
    'services.label': 'What We Offer', 'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive logistics solutions from road to rail, sea to air, with specialized chemical and food tank container expertise.',
    'svc.road.desc': 'Fully integrated transportation across Turkey and Europe with daily scheduled routes and fixed timetables.',
    'svc.sea.desc': 'Global ocean shipping with local expertise. FCL & LCL services with unrivalled personal customer service.',
    'svc.air.desc': 'Intercontinental airfreight with global reach, strength, and expertise for time-critical shipments.',
    'svc.rail.desc': 'International rail combined transport solutions connecting major trade corridors efficiently.',
    'svc.chemical.desc': 'Comprehensive chemical and tank container shipments tailored to your specific needs.',
    'svc.food.desc': 'Specialized food tank operations for liquid food shipments with Bulk Liner and Flexi Tank.',

    /* About */
    'about.label': 'Who We Are', 'about.title': 'Boxmar Global Logistics',
    'about.text': 'Celebrating its 25th year in international forwarding in Turkey, Boxmar offers a wide range of logistics services. As one of the leading tank operators in Turkey with exceptional service in Bulk Liner, ISO Tank, and Flexi Tank, we transport cargo from the smallest to project shipments with no bounds.',
    'about.btn': 'More About Us',

    /* Stats */
    'stats.label': 'Our Numbers', 'stats.title': 'Proven Track Record',
    'stat.1.label': 'Team Members', 'stat.2.label': 'Years Experience',
    'stat.3.label': 'Satisfied Clients', 'stat.4.label': 'Sq. Meters Warehouse',

    /* Quality promises */
    'promise.1.title': 'Rapid Response', 'promise.1.text': 'Insist on rapid response to irregularities to minimize customer complaints and errors.',
    'promise.2.title': 'Consistency', 'promise.2.text': 'Strive for consistency with freight handling and all other work procedures.',
    'promise.3.title': 'Cost-Effective', 'promise.3.text': 'Ensure cost-effective, swift, and reliable transportation for all customers.',
    'promise.4.title': 'Quality Policy', 'promise.4.text': 'Implement the quality policy across all personnel and operations.',

    /* Mission & Vision */
    'mv.label': 'Our Purpose', 'mv.title': 'Mission & Vision',
    'mv.mission': 'Mission Statement',
    'mv.mission.text': 'Boxmar Global Logistics is a full service freight forwarder and customs broker committed to providing the highest levels of service and quality assurance.',
    'mv.vision': 'Vision Statement',
    'mv.vision.text': 'To be the best customer service team in our profession. To develop and maintain a first-class infrastructure to ensure employee satisfaction, which drives customer loyalty, leading to sustained profit growth and improved company value.',

    /* Testimonials */
    'testimonials.label': 'What They Say', 'testimonials.title': 'Client Testimonials',
    'testi.m1': '"Boxmar has been our trusted partner for chemical tank shipments for over 10 years. Their expertise in handling hazardous materials and their on-time delivery record is exceptional."',
    'testi.m2': '"We switched to Boxmar for our olive oil exports to Europe and the results have been outstanding. Their Flexi Tank solutions saved us 18% on shipping costs."',
    'testi.m3': '"The multi-modal solutions from Boxmar combining sea and rail freight have significantly shortened our transit times to Central Asia. Professional team, reliable service."',
    'testi.m4': '"Boxmar\'s rapid response and dedicated customer service team have made them an indispensable partner for our European distribution network. Highly recommended."',
    'testi.r1': 'Logistics Director, ChemTurk Industries',
    'testi.r2': 'Export Manager, Mediterranean Foods Co.',
    'testi.r3': 'Supply Chain Manager, Gulf Petrochemicals',
    'testi.r4': 'Operations Lead, Deutsche Logistics GmbH',

    /* FAQ */
    'faq.label': 'Questions & Answers', 'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What Does 3rd Party Billing Mean?',
    'faq.a1': 'If you are sending a commercial shipment with a commercial value but the cost of sending the shipment is being paid by someone else other than the shipper or receiver, this is called 3rd party billing.',
    'faq.q2': 'What is CMR?',
    'faq.a2': 'CMR Convention (Convention on the Contract for the International Carriage of Goods by Road) is a United Nations convention that relates to various legal issues concerning transportation of cargo by road. Based on the CMR, the International Road Transport Union (IRU) developed a standard CMR waybill. The CMR waybill is prepared in three languages.',
    'faq.q3': 'What is Cross Trade?',
    'faq.a3': 'This is when cargo is moved between a point of origin and a destination without it entering the country where the shipper is registered.',
    'faq.q4': 'What is a freight forwarder?',
    'faq.a4': 'Freight forwarding is a service used by companies that deal in international or multi-national import and export. While the freight forwarder may not actually move the freight itself, it acts as an intermediary between the client and various transportation services, handling the considerable logistics of the task.',
    'faq.q5': 'Why are shipping rates so changeable?',
    'faq.a5': 'Market demand, bunker fuel costs, and terminal costs all contribute to rate fluctuations. Rates vary between slow season (December-April) and peak season (May-November), with additional surcharges like GRI and PSS affecting pricing.',

    /* Quote form */
    'quote.label': 'Get a Quotation', 'quote.title': 'Request a Free Quote',
    'quote.step1': 'Cargo Info', 'quote.step2': 'Details', 'quote.step3': 'Contact',
    'quote.cargo_type': 'Type of Cargo', 'quote.transport_type': 'Type of Transportation',
    'quote.origin': 'Origin City', 'quote.destination': 'Destination City',
    'quote.weight': 'Weight (kg)', 'quote.notes': 'Additional Notes',
    'quote.name': 'Full Name', 'quote.email': 'Email Address',
    'quote.phone': 'Phone Number', 'quote.company': 'Company Name',
    'quote.next': 'Next Step', 'quote.prev': 'Previous',
    'quote.submit': 'Submit Quote Request', 'quote.select': 'Select...',

    /* CTA */
    'cta.title': 'Let Us Help You Find a Solution That Meets Your Needs',
    'cta.text': 'Our team of experts is ready to provide customized logistics solutions for your business.',
    'cta.btn': 'Contact Us Now', 'cta.phone': 'Or Call',

    /* Footer */
    'footer.about': 'Boxmar Global Logistics provides comprehensive freight forwarding and logistics solutions with 25+ years of industry expertise across Turkey and beyond.',
    'footer.services': 'Services', 'footer.company': 'Company', 'footer.contact': 'Contact Info',
    'footer.about_link': 'About Us', 'footer.contact_link': 'Contact',
    'footer.tracking_link': 'Tracking', 'footer.privacy': 'Privacy Policy',
    'footer.rights': '\u00a9 2026 Boxmar Global Logistics. All rights reserved.',

    /* Floating / misc */
    'float.inquiry': 'INQUIRY', 'float.chat': 'Chat',
  },

  tr: {
    /* Navigation */
    'nav.home': 'Ana Sayfa', 'nav.about': 'Hakkımızda', 'nav.services': 'Hizmetler',
    'nav.quote': 'Teklif Al', 'nav.tracking': 'Takip', 'nav.contact': 'İletişim',
    'nav.cta': 'Teklif Al',

    /* Service names */
    'svc.road': 'Karayolu Taşımacılığı', 'svc.sea': 'Deniz Yükü', 'svc.air': 'Hava Yükü',
    'svc.rail': 'Demiryolu Yükü', 'svc.chemical': 'Kimyasal Yükü', 'svc.food': 'Gıda Yükü',

    /* Hero */
    'hero.badge': '25 Yıllık Mükemmelliği Kutluyoruz',
    'hero.title.trust': 'KARŞILIKLI GÜVEN,<br>KARŞILIKLI BAŞARI',
    'hero.title.3': 'Dünyanızı Güvenle Taşıyoruz',
    'hero.text': 'Boxmar Global Lojistik \u2014 Türkiye\'nin uluslararası yük taşımacılığı, kimyasal tank konteyner ve gıda tankı sevkiyatlarında güvenilir lideri. 25 yılı aşkın karşılıklı güven ve küresel başarı.',
    'hero.btn1': '60 Saniyede Teklif Alın', 'hero.btn2': 'Hizmetlerimizi Keşfedin',
    'hero.stat1.num': '25+', 'hero.stat1.label': 'Yıl Deneyim',
    'hero.stat2.num': '500+', 'hero.stat2.label': 'Memnun Müşteri',
    'hero.stat3.num': '50+', 'hero.stat3.label': 'Ekip Üyesi',
    'hero.feat1': 'Küresel Erişim', 'hero.feat1.desc': '120+ Ülke',
    'hero.feat2': 'Güvenilirlik', 'hero.feat2.desc': '%99.9 Zamanında',

    /* Trust bar */
    'trust.1': '25 Yıl Deneyim', 'trust.2': '%99.9 Zamanında Teslimat',
    'trust.3': 'ADR Sertifikalı', 'trust.4': 'ISO 9001 Kalite',

    /* Services section */
    'services.label': 'Ne Sunuyoruz', 'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Karayolundan demiryoluna, denizden havayoluna, uzmanlaşmış kimyasal ve gıda tankı konteyneri uzmanlığıyla kapsamlı lojistik çözümler.',
    'svc.road.desc': 'Günlük planlı rotalar ve sabit tarifelerle Türkiye ve Avrupa genelinde tamamen entegre taşımacılık.',
    'svc.sea.desc': 'Yerel uzmanlıkla küresel okyanus taşımacılığı. Eşsiz kişisel müşteri hizmetiyle FCL & LCL hizmetleri.',
    'svc.air.desc': 'Zamana duyarlı sevkiyatlar için küresel erişim, güç ve uzmanlıkla kıtalararası hava kargo.',
    'svc.rail.desc': 'Başlıca ticaret koridorlarını verimli şekilde bağlayan uluslararası demiryolu kombine taşımacılık çözümleri.',
    'svc.chemical.desc': 'Özel ihtiyaçlarınıza göre kapsamlı kimyasal ve tank konteyner sevkiyatları.',
    'svc.food.desc': 'Bulk Liner ve Flexi Tank ile sıvı gıda sevkiyatları için uzmanlaşmış gıda tankı operasyonları.',

    /* About */
    'about.label': 'Kim Biziz', 'about.title': 'Boxmar Global Lojistik',
    'about.text': 'Türkiye\'de uluslararası forwarding alanında 25. yılını kutlayan Boxmar, geniş bir lojistik hizmet yelpazesi sunmaktadır. Bulk Liner, ISO Tank ve Flexi Tank\'ta istisnai hizmet sunan Türkiye\'nin önde gelen tank operatörlerinden biri olarak en küçük kargodan proje sevkiyatlarına kadar sınırsız taşımacılık yapıyoruz.',
    'about.btn': 'Hakkımızda Daha Fazla',

    /* Stats */
    'stats.label': 'Rakamlarımız', 'stats.title': 'Kanıtlanmış Başarı',
    'stat.1.label': 'Ekip Üyesi', 'stat.2.label': 'Yıl Deneyim',
    'stat.3.label': 'Memnun Müşteri', 'stat.4.label': 'Metrekare Depo',

    /* Quality promises */
    'promise.1.title': 'Hızlı Yanıt', 'promise.1.text': 'Müşteri şikayetlerini ve hataları en aza indirmek için düzensizliklere hızlı yanıt verme konusunda ısrar edin.',
    'promise.2.title': 'Tutarlılık', 'promise.2.text': 'Yük elleçleme ve diğer tüm iş prosedürlerinde tutarlılık için çaba gösterin.',
    'promise.3.title': 'Maliyet Etkili', 'promise.3.text': 'Tüm müşteriler için maliyet etkili, hızlı ve güvenilir taşımacılık sağlayın.',
    'promise.4.title': 'Kalite Politikası', 'promise.4.text': 'Kalite politikasını tüm personel ve operasyonlara uygulayın.',

    /* Mission & Vision */
    'mv.label': 'Amacımız', 'mv.title': 'Misyon & Vizyon',
    'mv.mission': 'Misyonumuz',
    'mv.mission.text': 'Boxmar Global Lojistik, en yüksek düzeyde hizmet ve kalite güvencesi sağlamayı taahhüt eden tam kapsamlı bir freight forwarder ve gümrük komisyoncusudur.',
    'mv.vision': 'Vizyonumuz',
    'mv.vision.text': 'Mesleğimizdeki en iyi müşteri hizmetleri ekibi olmak. Müşteri sadakatini artıran, sürekli kar büyümesine ve gelişmiş şirket değerine yol açan çalışan memnuniyetini sağlamak için birinci sınıf bir altyapı geliştirmek ve sürdürmek.',

    /* Testimonials */
    'testimonials.label': 'Ne Diyorlar', 'testimonials.title': 'Müşteri Görüşleri',
    'testi.m1': '"Boxmar, 10 yılı aşkın süredir kimyasal tank sevkiyatlarında güvenilir ortağımızdır. Tehlikeli maddelerin taşınmasındaki uzmanlıkları ve zamanında teslimat rekorları olağanüstüdür."',
    'testi.m2': '"Avrupa\'ya zeytinyağı ihracatımız için Boxmar\'a geçtik ve sonuçlar olağanüstü. Flexi Tank çözümleri nakliye maliyetlerinde bize %18 tasarruf sağladı."',
    'testi.m3': '"Boxmar\'ın deniz ve demiryolu yükünü birleştiren çok modlu çözümleri, Orta Asya\'ya transit sürelerimizi önemli ölçüde kısalttı. Profesyonel ekip, güvenilir hizmet."',
    'testi.m4': '"Boxmar\'ın hızlı yanıtı ve özel müşteri hizmetleri ekibi, onları Avrupa dağıtım ağımız için vazgeçilmez bir ortak haline getirdi. Şiddetle tavsiye edilir."',
    'testi.r1': 'Lojistik Direktörü, KimyaTürk Endüstri',
    'testi.r2': 'İhracat Müdürü, Akdeniz Gıda Tic.',
    'testi.r3': 'Tedarik Zinciri Müdürü, Körfez Petrokimya',
    'testi.r4': 'Operasyon Lideri, Alman Lojistik GmbH',

    /* FAQ */
    'faq.label': 'Soru & Cevaplar', 'faq.title': 'Sık Sorulan Sorular',
    'faq.q1': '3. Taraf Faturalandırma Nedir?',
    'faq.a1': 'Ticari değeri olan ticari bir sevkiyat gönderiyorsanız ancak sevkiyatın maliyeti gönderici veya alıcı dışında biri tarafından ödeniyorsa buna 3. taraf faturalandırma denir.',
    'faq.q2': 'CMR Nedir?',
    'faq.a2': 'CMR Sözleşmesi (Uluslararası Karayolu ile Mal Taşımacılığı Sözleşmesine İlişkin Sözleşme), karayolu ile kargo taşınmasına ilişkin çeşitli yasal konuları ilgilendiren Birleşmiş Milletler sözleşmesidir. CMR\'ye dayanarak, Uluslararası Karayolu Taşımacılığı Birliği (IRU) standart bir CMR konşimentosu geliştirmiştir.',
    'faq.q3': 'Cross Trade Nedir?',
    'faq.a3': 'Bu, kargonun göndericinin kayıtlı olduğu ülkeye girmeden menşe noktası ile varış noktası arasında hareket etmesidir.',
    'faq.q4': 'Freight Forwarder Nedir?',
    'faq.a4': 'Freight forwarding, ulusal, uluslararası veya çok uluslu olarak mal taşımak isteyen şirketler tarafından kullanılan bir hizmettir. Freight forwarder, müşteri ile çeşitli taşımacılık hizmetleri arasında aracı olarak hareket eder.',
    'faq.q5': 'Nakliye ücretleri neden bu kadar değişken?',
    'faq.a5': 'Pazar talebi, bunker yakıt maliyetleri ve terminal maliyetleri oran dalgalanmalarına katkıda bulunur. Oranlar yavaş sezon (Aralık-Nisan) ile yoğun sezon (Mayıs-Kasım) arasında değişir.',

    /* Quote form */
    'quote.label': 'Teklif Alın', 'quote.title': 'Ücretsiz Teklif Talep Edin',
    'quote.step1': 'Kargo Bilgisi', 'quote.step2': 'Detaylar', 'quote.step3': 'İletişim',
    'quote.cargo_type': 'Kargo Türü', 'quote.transport_type': 'Taşıma Türü',
    'quote.origin': 'Çıkış Şehri', 'quote.destination': 'Varış Şehri',
    'quote.weight': 'Ağırlık (kg)', 'quote.notes': 'Ek Notlar',
    'quote.name': 'Ad Soyad', 'quote.email': 'E-posta Adresi',
    'quote.phone': 'Telefon Numarası', 'quote.company': 'Şirket Adı',
    'quote.next': 'Sonraki Adım', 'quote.prev': 'Önceki',
    'quote.submit': 'Teklif Talebini Gönder', 'quote.select': 'Seçiniz...',

    /* CTA */
    'cta.title': 'İhtiyaçlarınıza Uygun Çözüm Bulmanıza Yardım Edelim',
    'cta.text': 'Uzman ekibimiz işiniz için özelleştirilmiş lojistik çözümler sunmaya hazır.',
    'cta.btn': 'Şimdi Bize Ulaşın', 'cta.phone': 'Veya Arayın',

    /* Footer */
    'footer.about': 'Boxmar Global Lojistik, Türkiye ve ötesinde 25+ yıllık sektör deneyimiyle kapsamlı yük taşımacılığı ve lojistik çözümleri sunmaktadır.',
    'footer.services': 'Hizmetler', 'footer.company': 'Şirket', 'footer.contact': 'İletişim Bilgileri',
    'footer.about_link': 'Hakkımızda', 'footer.contact_link': 'İletişim',
    'footer.tracking_link': 'Takip', 'footer.privacy': 'Gizlilik Politikası',
    'footer.rights': '\u00a9 2026 Boxmar Global Lojistik. Tüm hakları saklıdır.',

    /* Floating / misc */
    'float.inquiry': 'TALEP', 'float.chat': 'Sohbet',
  }
};
