export const siteData = {
  name: "旅窓",
  romanizedName: "Tabi Mado",
  tagline: "日本の旅を、ひとつの窓から。",
  description: "旅窓は、日本各地の週末旅、季節の見どころ、モデルコース、地域の食文化をわかりやすくまとめる国内旅行ガイドです。",
  editor: "旅窓編集部",
  address: "東京都台東区蔵前2-8-6 旅窓スタジオ 4F",
  email: "hello@tabimado.jp",
  businessHours: "平日 10:00〜18:00",
  instagram: "https://instagram.com/tabimado.jp",
  
  navLinks: [
    { label: "ホーム", path: "/" },
    { label: "私たちについて", path: "/about" },
    { label: "旅先ガイド", path: "/destinations" },
    { label: "モデルコース", path: "/itineraries" },
    { label: "季節の旅", path: "/seasonal" },
    { label: "お問い合わせ", path: "/contact" },
  ],

  dockLinks: [
    { label: "ホーム", path: "/", icon: "home" },
    { label: "旅先", path: "/destinations", icon: "map" },
    { label: "モデルコース", path: "/itineraries", icon: "navigation" },
    { label: "季節の旅", path: "/seasonal", icon: "sun" },
    { label: "お問い合わせ", path: "/contact", icon: "mail" },
  ],

  footerLinks: [
    { label: "私たちについて", path: "/about" },
    { label: "プライバシーポリシー", path: "/privacy-policy" },
    { label: "利用規約", path: "/terms" },
    { label: "お問い合わせ", path: "/contact" },
  ],

  disclaimer: "掲載している交通情報、営業時間、料金、イベント情報は変更される場合があります。旅行前には公式情報や現地情報をご確認ください。",

  destinations: [
    {
      id: "kyoto-arashiyama",
      name: "京都・嵐山",
      region: "関西",
      bestSeason: "秋",
      travelMood: "静寂と自然",
      localFood: "湯豆腐、抹茶スイーツ",
      stayDuration: "1泊2日",
      description: "竹林の小径や渡月橋など、古都の風情を存分に味わえるエリア。朝早くの散策がおすすめです。",
      imageUrl: "/images/kyoto.png"
    },
    {
      id: "nagano-matsumoto",
      name: "長野・松本",
      region: "甲信越",
      bestSeason: "夏",
      travelMood: "歴史と山岳",
      localFood: "信州そば、山賊焼",
      stayDuration: "1泊2日",
      description: "国宝・松本城を中心に、古い町並みと雄大な北アルプスの景色が楽しめる城下町です。",
      imageUrl: "/images/summer.png"
    },
    {
      id: "ishikawa-kanazawa",
      name: "石川・金沢",
      region: "北陸",
      bestSeason: "冬",
      travelMood: "伝統工芸と美食",
      localFood: "海鮮丼、金沢おでん",
      stayDuration: "2泊3日",
      description: "兼六園や21世紀美術館など、伝統と現代アートが交差する美しい街。冬はカニやブリが絶品です。",
      imageUrl: "/images/winter.png"
    },
    {
      id: "hokkaido-otaru",
      name: "北海道・小樽",
      region: "北海道",
      bestSeason: "冬",
      travelMood: "ロマンチック",
      localFood: "寿司、海鮮焼き",
      stayDuration: "日帰り〜1泊",
      description: "運河沿いのレンガ造りの倉庫群や、ガラス工芸、オルゴール堂など、ノスタルジックな雰囲気が魅力です。",
      imageUrl: "/images/winter.png"
    },
    {
      id: "fukuoka-itoshima",
      name: "福岡・糸島",
      region: "九州",
      bestSeason: "夏",
      travelMood: "リラックス",
      localFood: "海鮮、おしゃれカフェ",
      stayDuration: "日帰り",
      description: "美しい海岸線とサンセット、点在するおしゃれなカフェや雑貨店が人気の海辺のエリアです。",
      imageUrl: "/images/summer.png"
    },
    {
      id: "kagawa-naoshima",
      name: "香川・直島",
      region: "四国",
      bestSeason: "春・秋",
      travelMood: "アートと海",
      localFood: "讃岐うどん、海鮮",
      stayDuration: "1泊2日",
      description: "瀬戸内海に浮かぶアートの島。美術館や屋外アート作品を巡りながら、島時間を満喫できます。",
      imageUrl: "/images/spring.png"
    }
  ],

  itineraries: [
    {
      id: "kyoto-quiet-weekend",
      title: "京都で過ごす静かな一泊二日",
      duration: "1泊2日",
      routeSummary: "嵐山周辺〜奥嵯峨を巡り、混雑を避けて静寂な京都を楽しむコース。",
      morning: "早朝の竹林の小径を散策。天龍寺で庭園を眺める。",
      afternoon: "奥嵯峨へ足を延ばし、祇王寺の苔庭で静寂を味わう。",
      evening: "嵐山温泉で疲れを癒やし、湯豆腐の夕食。",
      budget: "30,000円〜",
      tip: "朝7時台から動き出すことで、人気のスポットも静かに楽しめます。",
      imageUrl: "/images/kyoto.png"
    },
    {
      id: "kanazawa-crafts",
      title: "金沢の工芸と市場をめぐる週末旅",
      duration: "1泊2日",
      routeSummary: "ひがし茶屋街での伝統工芸体験と、近江町市場での美食を両立。",
      morning: "近江町市場で新鮮な海鮮丼の朝食。ひがし茶屋街へ移動。",
      afternoon: "金箔貼り体験や、九谷焼のギャラリー巡り。",
      evening: "香林坊エリアで金沢おでんと地酒を堪能。",
      budget: "40,000円〜",
      tip: "工芸体験は事前予約が必須です。時間に余裕を持ったスケジュールを。",
      imageUrl: "/images/winter.png"
    },
    {
      id: "matsumoto-books",
      title: "松本で本と山景色に出会う旅",
      duration: "1泊2日",
      routeSummary: "松本城下町の本屋や喫茶店を巡り、北アルプスの景色を楽しむ文化的な旅。",
      morning: "松本城を見学後、中町通りの白壁の蔵造りの街並みを散策。",
      afternoon: "独立系書店や古い喫茶店を巡り、のんびりと読書の時間。",
      evening: "地元の食材を使ったビストロでワインと夕食。",
      budget: "25,000円〜",
      tip: "歩きやすい靴で、路地裏の小さな店を探すのがおすすめです。",
      imageUrl: "/images/summer.png"
    },
    {
      id: "otaru-canal",
      title: "小樽の運河と喫茶店を歩く半日旅",
      duration: "日帰り（半日）",
      routeSummary: "札幌からの小旅行。運河の風景と歴史ある喫茶店を楽しむ。",
      morning: "小樽運河を散策。北一硝子でガラス工芸を見学。",
      afternoon: "歴史的建造物を改装したレトロな喫茶店でケーキセット。",
      evening: "小樽名物の寿司を堪能してから帰路へ。",
      budget: "15,000円〜",
      tip: "冬は道が滑りやすいので、冬用の靴や滑り止めが必須です。",
      imageUrl: "/images/winter.png"
    }
  ],

  seasons: [
    {
      id: "spring",
      name: "春の桜旅",
      regions: ["東北・弘前", "関西・吉野山"],
      mood: "華やかで新しい始まり",
      packingTip: "朝晩は冷え込むので、軽くて暖かい羽織りものが便利です。",
      localFood: "桜鯛、春キャベツ、山菜",
      photoTip: "桜だけでなく、足元の花や水面に散る花びらもフレームに入れると物語が生まれます。",
      caution: "人気のお花見スポットは非常に混雑するため、公共交通機関の利用を推奨します。",
      imageUrl: "/images/spring.png"
    },
    {
      id: "summer",
      name: "夏の海辺旅",
      regions: ["沖縄・離島", "九州・糸島"],
      mood: "開放感とリフレッシュ",
      packingTip: "日焼け止めとサングラス、帽子は必須。薄手の長袖もあると冷房対策になります。",
      localFood: "かき氷、ゴーヤ、スイカ",
      photoTip: "海を撮る時は、空と海の境界線を水平に保ち、PLフィルターを使うと青が際立ちます。",
      caution: "熱中症対策のため、こまめな水分補給と休憩を忘れずに。",
      imageUrl: "/images/summer.png"
    },
    {
      id: "autumn",
      name: "秋の紅葉旅",
      regions: ["京都・東山", "栃木・日光"],
      mood: "風情と芸術の秋",
      packingTip: "重ね着しやすい服装で、温度調節ができるようにしましょう。",
      localFood: "秋刀魚、栗、きのこ類",
      photoTip: "逆光で紅葉を透かして撮ると、葉の葉脈が浮き上がり美しく写ります。",
      caution: "紅葉シーズンの休日は渋滞が予想されるため、早朝の行動が鍵となります。",
      imageUrl: "/images/kyoto.png"
    },
    {
      id: "winter",
      name: "冬の温泉旅",
      regions: ["群馬・草津", "北海道・登別"],
      mood: "ぬくもりと静寂",
      packingTip: "厚手のコート、マフラー、手袋に加え、滑りにくい靴底のブーツがおすすめです。",
      localFood: "カニ、ぶり、鍋料理",
      photoTip: "雪景色はカメラの露出計が暗く判断しがちなので、プラス補正で撮ると白が綺麗に出ます。",
      caution: "雪道での運転は危険が伴うため、冬道に慣れていない場合は電車やバスを利用しましょう。",
      imageUrl: "/images/winter.png"
    }
  ],

  privacyPolicy: [
    {
      title: "個人情報の取得について",
      content: "当サイトでは、お問い合わせフォームの利用時に、お名前、メールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メール等でご連絡する場合に利用させていただくものであり、それ以外の目的では利用いたしません。"
    },
    {
      title: "利用目的",
      content: "取得した個人情報は、お問い合わせに対する回答や、サービス向上のための分析にのみ利用いたします。"
    },
    {
      title: "お問い合わせ情報の管理",
      content: "当サイトは、お預かりした個人情報を適切に管理し、紛失、破壊、改ざん及び漏洩などの予防に努めます。"
    },
    {
      title: "Cookieの利用について",
      content: "当サイトでは、アクセス解析や利便性向上のためにCookieを使用しています。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態であり、匿名性が保たれています。"
    },
    {
      title: "アクセス解析について",
      content: "当サイトでは、サイトの分析と改善のためにアクセス解析ツールを使用しています。これらはトラフィックデータの収集のためにCookieを使用しています。"
    },
    {
      title: "第三者提供について",
      content: "当サイトは、法令に基づく場合を除き、ご本人の同意を得ることなく、個人情報を第三者に提供することはありません。"
    },
    {
      title: "安全管理",
      content: "個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。"
    },
    {
      title: "免責事項",
      content: "当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。"
    },
    {
      title: "お問い合わせ窓口",
      content: "本ポリシーに関するお問い合わせは、お問い合わせページよりお願いいたします。"
    },
    {
      title: "改定について",
      content: "当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。"
    }
  ],

  terms: [
    {
      title: "サービスの利用条件",
      content: "当サイトをご利用いただくにあたり、本利用規約に同意していただく必要があります。本サイトを利用することで、本規約に同意したものとみなされます。"
    },
    {
      title: "掲載情報について",
      content: "当サイトは独立した旅行情報サイトであり、公式の観光機関等ではありません。掲載している情報は独自に取材・収集したものです。"
    },
    {
      title: "旅行情報について",
      content: "交通情報、営業時間、料金、イベント情報などは変更される場合があります。旅行の前には必ず公式情報や現地にて最新の状況をご確認ください。"
    },
    {
      title: "禁止事項",
      content: "当サイトのコンテンツの無断転載、複製、改変、配布を禁じます。また、法令に違反する行為、公序良俗に反する行為は禁止します。"
    },
    {
      title: "免責事項",
      content: "当サイトの利用により生じた直接的、間接的なトラブルや損害について、当サイトは一切の責任を負いません。旅行中の事故やトラブルについても同様です。"
    },
    {
      title: "知的財産権",
      content: "当サイトに掲載されている文章、画像、デザイン等の著作権およびその他の知的財産権は、当サイトまたは正当な権利者に帰属します。"
    },
    {
      title: "外部リンクについて",
      content: "当サイトからのリンク先である外部サイトの内容について、当サイトは一切の責任を負いません。"
    },
    {
      title: "コンテンツ変更について",
      content: "当サイトは、予告なくコンテンツの変更、追加、削除を行うことがあります。"
    },
    {
      title: "準拠法",
      content: "本規約の解釈にあたっては、日本法を準拠法とします。"
    },
    {
      title: "お問い合わせ",
      content: "本規約に関するお問い合わせは、お問い合わせページよりご連絡ください。"
    }
  ],
  
  about: {
    purpose: "「次の国内旅行を、デスクトップのように整理する。」をコンセプトに、情報をすっきりと整理し、見やすく探しやすい形でお届けします。",
    focus: "日本国内の美しい風景、豊かな食文化、季節の移ろいを感じられる場所を厳選してご紹介しています。",
    beginnerFriendly: "初めてその土地を訪れる方にもわかりやすいよう、モデルコースや旅行のヒントを具体的に提案します。",
    respect: "地域の文化や自然を尊重し、持続可能な旅行のあり方を推奨しています。",
    disclaimer: "当サイトは独立した旅行情報メディアであり、政府や地方自治体の公式な観光機関ではありません。"
  }
};
