/**
 * INFORMA.KZ | 8-Сынып Информатика — Негізгі Интерактивті Қозғалтқыш (app.js)
 * Қазақстанның жаңартылған білім беру стандартына сәйкес жасалған
 * Ашық заманауи дизайн (Light EdTech Theme)
 */

// ========================================================
// 1. ОҚУ БАҒДАРЛАМАСЫНЫҢ ТОЛЫҚ МӘЛІМЕТТЕР ҚОРЫ (16 ТАҚЫРЫП)
// ========================================================
const TOPICS_DATA = [
  // --- 1-ТОҚСАН: Компьютерлік желілер мен қауіпсіздік ---
  {
    id: "net-types",
    quarter: "q1",
    quarterTitle: "1-тоқсан",
    category: "Желілер",
    title: "Компьютерлік желілер түрлері және топологиясы",
    desc: "LAN, MAN, WAN, PAN желілерінің жіктелуі және негізгі желілік топологиялар (жұлдыз, сақина, шина).",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <circle cx="80" cy="40" r="14" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="80" cy="40" r="7" fill="#2563eb"/>
        <line x1="80" y1="40" x2="30" y2="20" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="40" x2="130" y2="20" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="40" x2="30" y2="60" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="40" x2="130" y2="60" stroke="#2563eb" stroke-width="2"/>
        <circle cx="30" cy="20" r="6" fill="#059669"/>
        <circle cx="130" cy="20" r="6" fill="#059669"/>
        <circle cx="30" cy="60" r="6" fill="#059669"/>
        <circle cx="130" cy="60" r="6" fill="#059669"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 200" width="100%">
        <rect x="20" y="20" width="160" height="150" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="100" y="45" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Жұлдыз (Star)</text>
        <circle cx="100" cy="95" r="12" fill="#2563eb"/>
        <circle cx="50" cy="70" r="8" fill="#059669"/><line x1="100" y1="95" x2="50" y2="70" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="70" r="8" fill="#059669"/><line x1="100" y1="95" x2="150" y2="70" stroke="#2563eb" stroke-width="2"/>
        <circle cx="60" cy="135" r="8" fill="#059669"/><line x1="100" y1="95" x2="60" y2="135" stroke="#2563eb" stroke-width="2"/>
        <circle cx="140" cy="135" r="8" fill="#059669"/><line x1="100" y1="95" x2="140" y2="135" stroke="#2563eb" stroke-width="2"/>

        <rect x="220" y="20" width="160" height="150" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <text x="300" y="45" fill="#6d28d9" font-size="14" font-weight="bold" text-anchor="middle">Сақина (Ring)</text>
        <circle cx="300" cy="95" r="40" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4"/>
        <circle cx="300" cy="55" r="8" fill="#7c3aed"/>
        <circle cx="340" cy="95" r="8" fill="#7c3aed"/>
        <circle cx="300" cy="135" r="8" fill="#7c3aed"/>
        <circle cx="260" cy="95" r="8" fill="#7c3aed"/>

        <rect x="420" y="20" width="160" height="150" rx="10" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="500" y="45" fill="#065f46" font-size="14" font-weight="bold" text-anchor="middle">Шина (Bus)</text>
        <line x1="440" y1="95" x2="560" y2="95" stroke="#059669" stroke-width="4"/>
        <circle cx="460" cy="65" r="8" fill="#059669"/><line x1="460" y1="65" x2="460" y2="95" stroke="#059669" stroke-width="2"/>
        <circle cx="500" cy="125" r="8" fill="#059669"/><line x1="500" y1="125" x2="500" y2="95" stroke="#059669" stroke-width="2"/>
        <circle cx="540" cy="65" r="8" fill="#059669"/><line x1="540" y1="65" x2="540" y2="95" stroke="#059669" stroke-width="2"/>
      </svg>
    `,
    theory: `
      <h4>1. Компьютерлік желілердің ауқымы бойынша жіктелуі</h4>
      <p>Компьютерлік желі — ақпарат алмасу және ресурстарды ортақ пайдалану мақсатында байланыс арналарымен біріктірілген компьютерлер тобы.</p>
      <ul>
        <li><strong>PAN (Personal Area Network)</strong> — дербес желі (радиусы 1-10 метр, мысалы: Bluetooth арқылы телефон мен құлаққап байланысы).</li>
        <li><strong>LAN (Local Area Network)</strong> — жергілікті желі (мектептегі, үйдегі немесе бір ғимарат ішіндегі компьютерлер желісі).</li>
        <li><strong>MAN (Metropolitan Area Network)</strong> — қалалық ауқымдағы желі (бір қала аумағындағы мекемелерді біріктіреді).</li>
        <li><strong>WAN (Wide Area Network)</strong> — ауқымды (жаһандық) желі (мемлекеттер мен құрлықтарды байланыстырады, ең ірі мысалы — Интернет).</li>
      </ul>

      <h4>2. Негізгі желілік топологиялар</h4>
      <p><strong>Топология</strong> — желідегі компьютерлер мен құрылғылардың бір-бірімен геометриялық байланысу сұлбасы.</p>
      <ul>
        <li><strong>Жұлдыз (Star):</strong> Барлық компьютерлер бір орталық құрылғыға (коммутатор/свитч) тікелей жалғанады. Бір компьютер істен шықса, басқалары жұмысын жалғастыра береді. Қазіргі мектептерде кең қолданылады.</li>
        <li><strong>Сақина (Ring):</strong> Әр компьютер көрші екі компьютермен тұйықталған шеңбер бойымен жалғанады. Сигнал бір бағытта айналады. Бір жер үзілсе, бүкіл желі тоқтайды.</li>
        <li><strong>Шина (Bus):</strong> Компьютерлер ортақ бір магистральды сымға жалғанады. Сымның шеттерінде терминатор орнатылады.</li>
      </ul>
    `,
    terms: ["LAN", "WAN", "PAN", "Топология", "Жұлдыз", "Сақина", "Шина"],
    quiz: [
      {
        q: "Бір мектеп ғимаратының ішіндегі компьютерлерді біріктіретін желі түрі қалай аталады?",
        options: ["WAN (Ауқымды желі)", "LAN (Жергілікті желі)", "PAN (Дербес желі)", "MAN (Қалалық желі)"],
        correct: 1,
        exp: "Дұрыс! Бір ғимарат немесе сынып ішіндегі желі LAN (Local Area Network) деп аталады."
      },
      {
        q: "Орталық құрылғыға (коммутатор) барлық жұмыс станциялары бөлек сыммен жалғанатын топология:",
        options: ["Шина (Bus)", "Сақина (Ring)", "Жұлдыз (Star)", "Ағаш (Tree)"],
        correct: 2,
        exp: "Өте жақсы! 'Жұлдыз' топологиясында барлық құрылғылар орталық коммутаторға тәуелсіз қосылады."
      },
      {
        q: "Интернет желісі ауқымы бойынша қандай желіге жатады?",
        options: ["WAN", "LAN", "PAN", "WLAN"],
        correct: 0,
        exp: "Интернет — бүкіл әлемді біріктіретін ең ірі WAN (Wide Area Network) жаһандық желісі."
      }
    ]
  },
  {
    id: "net-hardware",
    quarter: "q1",
    quarterTitle: "1-тоқсан",
    category: "Желілер",
    title: "Желілік жабдықтар мен байланыс арналары",
    desc: "Маршрутизатор (Router), Коммутатор (Switch), Хаб, Модем және кабель түрлері (оптика, бұралған жұп).",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <rect x="20" y="25" width="50" height="30" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <line x1="30" y1="25" x2="30" y2="15" stroke="#2563eb" stroke-width="2"/>
        <line x1="60" y1="25" x2="60" y2="15" stroke="#2563eb" stroke-width="2"/>
        <rect x="90" y="25" width="50" height="30" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="100" cy="40" r="3" fill="#059669"/>
        <circle cx="115" cy="40" r="3" fill="#059669"/>
        <circle cx="130" cy="40" r="3" fill="#059669"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="30" y="40" width="120" height="90" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="90" y="75" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Маршрутизатор</text>
        <text x="90" y="95" fill="#475569" font-size="11" text-anchor="middle">(Router / Желілерді</text>
        <text x="90" y="110" fill="#475569" font-size="11" text-anchor="middle">байланыстырады)</text>

        <line x1="150" y1="85" x2="230" y2="85" stroke="#2563eb" stroke-width="3" stroke-dasharray="5"/>

        <rect x="230" y="40" width="120" height="90" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <text x="290" y="75" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle">Коммутатор</text>
        <text x="290" y="95" fill="#475569" font-size="11" text-anchor="middle">(Switch / MAC адрес</text>
        <text x="290" y="110" fill="#475569" font-size="11" text-anchor="middle">бойынша таратады)</text>

        <line x1="350" y1="85" x2="430" y2="60" stroke="#059669" stroke-width="2"/>
        <line x1="350" y1="85" x2="430" y2="110" stroke="#059669" stroke-width="2"/>

        <rect x="430" y="35" width="100" height="40" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="480" y="60" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Компьютер 1</text>
        <rect x="430" y="95" width="100" height="40" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="480" y="120" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Компьютер 2</text>
      </svg>
    `,
    theory: `
      <h4>1. Негізгі желілік құрылғылар</h4>
      <ul>
        <li><strong>Маршрутизатор (Роутер):</strong> Түрлі желілер арасындағы (мысалы, үй желісі мен ғаламтор арасында) ең қолайлы бағытты анықтап, мәліметтер пакетін бағыттайтын ақылды құрылғы.</li>
        <li><strong>Коммутатор (Свитч):</strong> Бір жергілікті желінің (LAN) ішіндегі құрылғыларды өзара байланыстырады. Ақпаратты барлығына шашпай, тек нақты адресатқа (MAC-адресі бойынша) ғана жеткізеді.</li>
        <li><strong>Хаб (Hub):</strong> Ескірген тоғыстырғыш құрылғы. Бір портқа түскен деректі басқа барлық құрылғыларға көшіріп таратады (трафикті баяулатады).</li>
        <li><strong>Модем:</strong> Цифрлық сигналдарды аналогтық сигналға (және керісінше) түрлендіруші (модуляция-демодуляция).</li>
      </ul>

      <h4>2. Байланыс арналары</h4>
      <ul>
        <li><strong>Бұралған жұп (Twisted Pair / UTP):</strong> Мектептер мен кеңселерде ең көп қолданылатын кабель (RJ-45 коннекторымен қосылады). Жылдамдығы 100 Мбит/с - 1 Гбит/с.</li>
        <li><strong>Оптикалық-талшықты кабель (Fiber Optic):</strong> Мәлімет жарық сәулесі арқылы тасымалданады. Ең жылдам әрі қашыққа төзімді байланыс арнасы.</li>
        <li><strong>Сымсыз арналар:</strong> Wi-Fi, Bluetooth, радиосигналдар.</li>
      </ul>
    `,
    terms: ["Роутер", "Коммутатор (Свитч)", "Хаб", "Модем", "UTP", "Оптика"],
    quiz: [
      {
        q: "Әртүрлі желілер (мысалы, мектептің ішкі желісі мен Интернет) арасында мәліметтерді бағыттайтын құрылғы:",
        options: ["Хаб", "Маршрутизатор (Роутер)", "Монитор", "Пернетақта"],
        correct: 1,
        exp: "Дұрыс! Маршрутизатор түрлі желілер арасындағы пакеттер трассировкасын жасайды."
      },
      {
        q: "Деректерді жарық сәулесінің көмегімен ең жоғары жылдамдықта тасымалдайтын кабель:",
        options: ["Коаксиалды кабель", "Бұралған жұп (UTP)", "Оптикалық-талшықты кабель", "Мыс сым"],
        correct: 2,
        exp: "Тамаша! Оптикалық талшықта ақпарат шыны немесе пластик талшық бойымен жарық импульстері ретінде жүреді."
      },
      {
        q: "RJ-45 коннекторы қай кабель түріне қысылады?",
        options: ["Оптикалық талшық", "Бұралған жұп (Twisted Pair)", "Телефон сымы", "HDMI"],
        correct: 1,
        exp: "Иә! UTP (бұралған жұп) кабелінің ұшына 8-контактілі RJ-45 коннекторы орнатылады."
      }
    ]
  },
  {
    id: "ip-addressing",
    quarter: "q1",
    quarterTitle: "1-тоқсан",
    category: "Желілер",
    title: "IP адресация және домендік атаулар жүйесі (DNS)",
    desc: "IPv4 құрылымы, ішкі желі маскасы, жеке және жария IP адрестер, URL және DNS қызметі.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="45" font-family="monospace" font-size="14" fill="#0284c7" text-anchor="middle" font-weight="bold">192.168.1.1</text>
        <rect x="25" y="55" width="110" height="4" rx="2" fill="#059669"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="40" y="30" width="520" height="60" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="105" y="65" fill="#0f172a" font-family="monospace" font-size="18" font-weight="bold">192</text>
        <text x="165" y="65" fill="#2563eb" font-size="18">.</text>
        <text x="225" y="65" fill="#0f172a" font-family="monospace" font-size="18" font-weight="bold">168</text>
        <text x="285" y="65" fill="#2563eb" font-size="18">.</text>
        <text x="345" y="65" fill="#0f172a" font-family="monospace" font-size="18" font-weight="bold">1</text>
        <text x="405" y="65" fill="#2563eb" font-size="18">.</text>
        <text x="475" y="65" fill="#059669" font-family="monospace" font-size="18" font-weight="bold">45</text>

        <rect x="40" y="105" width="370" height="35" rx="6" fill="#eff6ff" stroke="#2563eb"/>
        <text x="225" y="128" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">Желі бөлігі (Network ID) — 24 бит</text>

        <rect x="430" y="105" width="130" height="35" rx="6" fill="#f0fdf4" stroke="#059669"/>
        <text x="495" y="128" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Түйін (Host ID)</text>
      </svg>
    `,
    theory: `
      <h4>1. IPv4 адресі деген не?</h4>
      <p><strong>IP адрес (Internet Protocol address)</strong> — желідегі әрбір құрылғыға берілетін бірегей 32-биттік сандық сәйкестендіргіш.</p>
      <p>Ол нүктелермен бөлінген 4 октеттен (байттан) тұрады. Әр санның мәні <strong>0-ден 255-ке дейін</strong> болады. Мысалы: <code>192.168.1.1</code>.</p>

      <h4>2. Ішкі желі маскасы (Subnet Mask)</h4>
      <p>Маска IP адрестің қай бөлігі желінің нөмірін (Network ID), ал қайсысы сол желідегі нақты компьютерді (Host ID) білдіретінін анықтайды. Ең танымал маска — <code>255.255.255.0</code>.</p>

      <h4>3. DNS жүйесі (Domain Name System)</h4>
      <p>Адамдар үшін цифрлық IP адресті жаттау қиын. Сондықтан <strong>DNS қызметі</strong> домендік атауды (мысалы, <code>bilimland.kz</code>) компьютер түсінетін IP адреске (мысалы, <code>195.210.45.12</code>) автоматты түрде айналдырып береді («Ғаламтордың телефон анықтамалығы»).</p>
    `,
    terms: ["IP адрес", "IPv4", "Октет", "Маска", "DNS", "URL", "Домен"],
    quiz: [
      {
        q: "Төмендегілердің ішінен дұрыс жазылған IPv4 адресін анықтаңыз:",
        options: ["192.168.1.300", "172.16.254.1", "256.100.0.1", "192.168.1"],
        correct: 1,
        exp: "Дұрыс! IPv4 әр саны 0-255 аралығындағы 4 санды қамтиды. 300 және 256 сандары шектен асады."
      },
      {
        q: "Сайт атауын (мысалы, google.com) тиісті IP адреске түрлендіретін желілік қызмет:",
        options: ["DNS", "FTP", "HTTP", "DHCP"],
        correct: 0,
        exp: "Өте жақсы! DNS (Domain Name System) домендік атауларды IP адреске түрлендіреді."
      },
      {
        q: "IPv4 адресі жалпы неше биттен тұрады?",
        options: ["16 бит", "32 бит", "64 бит", "128 бит"],
        correct: 1,
        exp: "IPv4 4 байттан немесе 32 биттен тұрады (4 * 8 = 32)."
      }
    ]
  },
  {
    id: "cyber-security",
    quarter: "q1",
    quarterTitle: "1-тоқсан",
    category: "Желілер",
    title: "Киберқауіпсіздік және дербес деректерді қорғау",
    desc: "Фишинг, вирустар мен трояндар, Брандмауэр (Firewall), екі факторлы аутентификация (2FA) және қауіпсіз құпиясөз ережелері.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <path d="M80 15 L120 30 V50 C120 70 80 80 80 80 C80 80 40 70 40 50 V30 Z" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <polyline points="70 45 78 53 92 38" fill="none" stroke="#059669" stroke-width="2.5"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="30" y="30" width="150" height="120" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
        <text x="105" y="65" fill="#e11d48" font-size="14" font-weight="bold" text-anchor="middle">Интернет (WAN)</text>
        <text x="105" y="95" fill="#475569" font-size="11" text-anchor="middle">Зиянды пакеттер</text>
        <text x="105" y="115" fill="#475569" font-size="11" text-anchor="middle">Фишинг шабуылдары</text>

        <line x1="180" y1="90" x2="260" y2="90" stroke="#e11d48" stroke-width="3"/>

        <rect x="260" y="20" width="80" height="140" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
        <text x="300" y="75" fill="#be123c" font-size="13" font-weight="bold" text-anchor="middle">FIREWALL</text>
        <text x="300" y="95" fill="#be123c" font-size="10" text-anchor="middle">(Брандмауэр)</text>
        <text x="300" y="125" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">СҮЗГІЛЕУ</text>

        <line x1="340" y1="90" x2="420" y2="90" stroke="#059669" stroke-width="3"/>

        <rect x="420" y="30" width="150" height="120" rx="10" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="495" y="65" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">Қорғалған желі</text>
        <text x="495" y="95" fill="#475569" font-size="11" text-anchor="middle">Мектеп / Үй ДК</text>
        <text x="495" y="115" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">Тек тексерілген</text>
      </svg>
    `,
    theory: `
      <h4>1. Киберқауіптердің негізгі түрлері</h4>
      <ul>
        <li><strong>Фишинг (Phishing):</strong> Пайдаланушының құпиясөзі мен банк картасы мәліметтерін алдап білу мақсатында танымал сайттардың жалған көшірмесін немесе хаттар жіберу арқылы жасалатын алаяқтық.</li>
        <li><strong>Зиянкес бағдарламалар (Malware):</strong> Вирустар, трояндар, шпиондық бағдарламалар (Spyware) және деректерді құлыптап төлем талап ететін Ransomware.</li>
      </ul>

      <h4>2. Қорғаныс тетіктері</h4>
      <ul>
        <li><strong>Брандмауэр (Firewall / Желіаралық қалқан):</strong> Кіріс және шығыс желілік трафикті белгіленген қауіпсіздік ережелеріне сәйкес бақылап, сүзгіден өткізетін бағдарлама немесе жабдық.</li>
        <li><strong>Екі факторлы аутентификация (2FA):</strong> Жүйеге кіру кезінде құпиясөзден бөлек, телефонға келетін SMS немесе арнайы қолданба коды арқылы қосарлы растау.</li>
        <li><strong>Күрделі құпиясөз ережесі:</strong> Кемінде 8-12 таңба, үлкен/кіші әріптер, сандар мен арнайы символдар (!@#$%).</li>
      </ul>
    `,
    terms: ["Фишинг", "Брандмауэр", "2FA", "Антивирус", "Шпиондық бағдарлама", "Троян"],
    quiz: [
      {
        q: "Банк немесе әлеуметтік желі сайтының жалған көшірмесін жасап, құпиясөздерді ұрлау әдісі:",
        options: ["Дефрагментация", "Фишинг (Phishing)", "Архивация", "Брандмауэр"],
        correct: 1,
        exp: "Дұрыс! Фишинг — адамдарды алдап, жеке мәліметтерді қолға түсіру шабуылы."
      },
      {
        q: "Желілік трафикті қадағалап, рұқсатсыз байланыстарды бөгейтін қорғаныс жүйесі:",
        options: ["Брандмауэр (Firewall)", "Процессор", "Драйвер", "BIOS"],
        correct: 0,
        exp: "Өте жақсы! Брандмауэр қауіпті желілік пакеттерді сүзіп тастайды."
      },
      {
        q: "Екі факторлы аутентификацияның (2FA) басты артықшылығы неде?",
        options: ["Интернеттің жылдамдығын арттырады", "Құпиясөз ұрланған күннің өзінде аккаунтты қосымша кодпен қорғайды", "Файлдардың көлемін азайтады", "Компьютерді салқындатады"],
        correct: 1,
        exp: "Иә! Құпиясөз белгілі болса да, 2-ші факторсыз (телефон коды) хакер кіре алмайды."
      }
    ]
  },

  // --- 2-ТОҚСАН: Ақпаратты ұсыну және өңдеу ---
  {
    id: "info-coding",
    quarter: "q2",
    quarterTitle: "2-тоқсан",
    category: "Ақпарат",
    title: "Ақпаратты кодтау және өлшем бірліктері",
    desc: "Ақпараттың ең кіші бірлігі — бит және байт. Кбайт, Мбайт, Гбайт, Тбайт өлшемдері және ASCII / Unicode кодтау жүйелері.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <rect x="25" y="30" width="20" height="25" rx="3" fill="#7c3aed"/>
        <text x="35" y="47" fill="#ffffff" font-size="12" text-anchor="middle">1</text>
        <rect x="50" y="30" width="20" height="25" rx="3" fill="#ffffff" stroke="#7c3aed"/>
        <text x="60" y="47" fill="#7c3aed" font-size="12" text-anchor="middle">0</text>
        <rect x="75" y="30" width="20" height="25" rx="3" fill="#7c3aed"/>
        <text x="85" y="47" fill="#ffffff" font-size="12" text-anchor="middle">1</text>
        <text x="120" y="47" fill="#2563eb" font-size="14" font-weight="bold">Бит</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="30" y="40" width="90" height="90" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="75" y="80" fill="#1e40af" font-size="16" font-weight="bold" text-anchor="middle">1 Байт</text>
        <text x="75" y="105" fill="#475569" font-size="12" text-anchor="middle">8 бит</text>

        <text x="145" y="90" fill="#0f172a" font-size="16" font-weight="bold">×</text>
        <text x="145" y="108" fill="#2563eb" font-size="12">1024</text>

        <rect x="180" y="40" width="90" height="90" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <text x="225" y="80" fill="#6d28d9" font-size="16" font-weight="bold" text-anchor="middle">1 Кбайт</text>
        <text x="225" y="105" fill="#475569" font-size="12" text-anchor="middle">1024 байт</text>

        <text x="295" y="90" fill="#0f172a" font-size="16" font-weight="bold">×</text>
        <text x="295" y="108" fill="#7c3aed" font-size="12">1024</text>

        <rect x="330" y="40" width="90" height="90" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="375" y="80" fill="#065f46" font-size="16" font-weight="bold" text-anchor="middle">1 Мбайт</text>
        <text x="375" y="105" fill="#475569" font-size="12" text-anchor="middle">1024 Кб</text>

        <text x="445" y="90" fill="#0f172a" font-size="16" font-weight="bold">×</text>
        <text x="445" y="108" fill="#059669" font-size="12">1024</text>

        <rect x="480" y="40" width="90" height="90" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
        <text x="525" y="80" fill="#92400e" font-size="16" font-weight="bold" text-anchor="middle">1 Гбайт</text>
        <text x="525" y="105" fill="#475569" font-size="12" text-anchor="middle">1024 Мб</text>
      </svg>
    `,
    theory: `
      <h4>1. Ақпараттың өлшем бірліктері</h4>
      <p>Компьютердегі барлық деректер 0 мен 1 күйінде сақталады. Бір ғана 0 немесе 1 таңбасы алатын орын — <strong>1 бит (bit)</strong> деп аталады.</p>
      <ul>
        <li><strong>1 Байт (Byte) = 8 бит</strong> (бір әріпті кодтау үшін жеткілікті).</li>
        <li><strong>1 Килобайт (Кб / KB) = 1024 байт</strong> = 2¹⁰ байт.</li>
        <li><strong>1 Мегабайт (Мб / MB) = 1024 Кб</strong> = 2²⁰ байт.</li>
        <li><strong>1 Гигабайт (Гб / GB) = 1024 Мб</strong> = 2³⁰ байт.</li>
        <li><strong>1 Терабайт (Тб / TB) = 1024 Гб</strong> = 2⁴⁰ байт.</li>
      </ul>

      <h4>2. Таңбалық ақпаратты кодтау (ASCII & Unicode)</h4>
      <ul>
        <li><strong>ASCII (American Standard Code for Information Interchange):</strong> 8-биттік кодтау кестесі (2⁸ = 256 символ). Латын әріптері мен негізгі таңбаларды қамтиды.</li>
        <li><strong>Unicode (Юникод / UTF-8):</strong> Әлемнің барлық тілдерін (соның ішінде қазақ тілінің төл әріптерін: ә, і, ң, ғ, ү, ұ, қ, ө, һ) және эмодзилерді сыйғызатын 16-32 биттік жаһандық кодтау стандарты.</li>
      </ul>
    `,
    terms: ["Бит", "Байт", "1024 ережесі", "Кбайт", "Мбайт", "ASCII", "Unicode"],
    quiz: [
      {
        q: "1 Байт неше битке тең?",
        options: ["2 бит", "8 бит", "10 бит", "1024 бит"],
        correct: 1,
        exp: "Дұрыс! 1 Байт дәл 8 биттен тұрады."
      },
      {
        q: "2 Мегабайт (Мб) ақпарат неше Килобайтқа (Кб) тең?",
        options: ["2000 Кб", "2048 Кб", "1024 Кб", "4096 Кб"],
        correct: 1,
        exp: "Тамаша! 2 * 1024 = 2048 Кб болады."
      },
      {
        q: "Қазақ тілінің арнайы әріптері мен эмодзилерді қолдайтын заманауи халықаралық кодтау жүйесі:",
        options: ["ASCII", "Unicode (Юникод)", "MS-DOS", "KOI-8"],
        correct: 1,
        exp: "Иә! Unicode миллиондаған түрлі таңбаларды бейнелеуге мүмкіндік береді."
      }
    ]
  },
  {
    id: "binary-decimal",
    quarter: "q2",
    quarterTitle: "2-тоқсан",
    category: "Ақпарат",
    title: "Санау жүйелері: Екілік және ондық санау жүйесі",
    desc: "Позициялық санау жүйелері, 10-дық жүйеден 2-лікке көшу (2-ге бөлу әдісі) және 2-ліктен 10-дыққа кері аудару.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="45" y="45" font-family="monospace" font-size="16" fill="#0f172a" font-weight="bold">13₁₀</text>
        <text x="80" y="45" font-size="16" fill="#2563eb">=</text>
        <text x="120" y="45" font-family="monospace" font-size="16" fill="#059669" font-weight="bold">1101₂</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="30" y="30" width="540" height="120" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="300" y="60" fill="#1e40af" font-size="15" font-weight="bold" text-anchor="middle">1101₂ санын ондық жүйеге аудару</text>
        
        <text x="150" y="100" fill="#0f172a" font-family="monospace" font-size="18">1 × 2³</text>
        <text x="220" y="100" fill="#0f172a" font-family="monospace" font-size="18">+</text>
        <text x="250" y="100" fill="#0f172a" font-family="monospace" font-size="18">1 × 2²</text>
        <text x="320" y="100" fill="#0f172a" font-family="monospace" font-size="18">+</text>
        <text x="350" y="100" fill="#94a3b8" font-family="monospace" font-size="18">0 × 2¹</text>
        <text x="420" y="100" fill="#0f172a" font-family="monospace" font-size="18">+</text>
        <text x="450" y="100" fill="#0f172a" font-family="monospace" font-size="18">1 × 2⁰</text>

        <text x="300" y="135" fill="#059669" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">= 8 + 4 + 0 + 1 = 13₁₀</text>
      </svg>
    `,
    theory: `
      <h4>1. Санау жүйелері деген не?</h4>
      <p><strong>Санау жүйесі</strong> — сандарды арнайы цифрлар мен таңбалардың көмегімен жазу және оқу тәсілі.</p>
      <ul>
        <li><strong>Ондық жүйе (Decimal):</strong> Негізі 10. Цифрлары: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Күнделікті өмірде қолданамыз.</li>
        <li><strong>Екілік жүйе (Binary):</strong> Негізі 2. Тек екі цифр ғана қолданылады: <strong>0 және 1</strong>. Компьютерлік процессорлар осы жүйеде жұмыс істейді.</li>
      </ul>

      <h4>2. 10-дық саннан 2-лікке көшу ережесі</h4>
      <p>Ондық санды екілікке аудару үшін санды 2-ге бөліп, қалдықтарын (0 немесе 1) жазып аламыз. Бөлуді бөлінді 0 болғанша жалғастырып, қалдықтарды <strong>соңынан басына қарай (кері ретпен)</strong> жазамыз.</p>
      <p><em>Мысал: 13 : 2 = 6 (қалдық 1), 6 : 2 = 3 (қалдық 0), 3 : 2 = 1 (қалдық 1), 1 : 2 = 0 (қалдық 1). Нәтиже: 1101₂.</em></p>

      <h4>3. 2-ліктен 10-дыққа көшу (Дәрежелер қосындысы)</h4>
      <p>Оң жақтан бастап 0-ден бастап дәрежелер белгіленеді: 2⁰, 2¹, 2², 2³, 2⁴...<br>
      <code>1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀</code>.</p>
    `,
    terms: ["Екілік жүйе", "Ондық жүйе", "Дәрежелер қосындысы", "Қалдықпен бөлу", "Негіз"],
    quiz: [
      {
        q: "10-дық жүйедегі 10 саны екілік жүйеде қалай жазылады?",
        options: ["1010₂", "1100₂", "1001₂", "1111₂"],
        correct: 0,
        exp: "Дұрыс! 8 + 2 = 10, яғни 1010₂ (1×8 + 0×4 + 1×2 + 0×1)."
      },
      {
        q: "Екілік 111₂ саны ондық жүйеде нешеге тең?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        exp: "Тамаша! 4 + 2 + 1 = 7."
      },
      {
        q: "Екілік санау жүйесінің негізі қандай?",
        options: ["10", "2", "8", "16"],
        correct: 1,
        exp: "Иә, екілік санау жүйесінің негізі 2 (себебі 0 мен 1 деген екі цифр ғана бар)."
      }
    ]
  },
  {
    id: "hex-octal",
    quarter: "q2",
    quarterTitle: "2-тоқсан",
    category: "Ақпарат",
    title: "Он алтылық (Hex) және сегіздік санау жүйелері",
    desc: "16-лық жүйедегі әріптер (A-F), Триадалар мен Тетрадалар кестесі, Web дизайн мен түстерді кодтау (#RRGGBB).",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="45" font-family="monospace" font-size="18" fill="#e11d48" font-weight="bold" text-anchor="middle">#FF007F</text>
        <circle cx="25" cy="40" r="10" fill="#e11d48"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="40" y="25" width="520" height="130" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="300" y="55" fill="#6d28d9" font-size="14" font-weight="bold" text-anchor="middle">Он алтылық (Hexadecimal) әріптік баламалары</text>

        <rect x="60" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="92" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">A = 10</text>
        <text x="92" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1010₂</text>

        <rect x="140" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="172" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">B = 11</text>
        <text x="172" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1011₂</text>

        <rect x="220" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="252" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">C = 12</text>
        <text x="252" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1100₂</text>

        <rect x="300" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="332" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">D = 13</text>
        <text x="332" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1101₂</text>

        <rect x="380" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="412" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">E = 14</text>
        <text x="412" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1110₂</text>

        <rect x="460" y="75" width="65" height="60" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
        <text x="492" y="98" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">F = 15</text>
        <text x="492" y="120" fill="#6d28d9" font-size="11" text-anchor="middle">1111₂</text>
      </svg>
    `,
    theory: `
      <h4>1. Он алтылық (Hex) санау жүйесі</h4>
      <p>Он алтылық жүйенің негізі 16. Онда 16 цифр бар: <code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F</code>.</p>
      <p>Мұндағы: <code>A = 10, B = 11, C = 12, D = 13, E = 14, F = 15</code>.</p>

      <h4>2. Тетрада ережесі (Тез аудару тәсілі)</h4>
      <p>16 = 2⁴ болғандықтан, кез келген бір он алтылық цифр дәл <strong>4 екілік битке (тетрадаға)</strong> тең!</p>
      <p><em>Мысал: <code>2F₁₆</code> санын екілікке айналдырайық: 2 = <code>0010</code>, ал F = <code>1111</code>. Біріктірсек: <code>00101111₂</code>.</em></p>

      <h4>3. Қолданылуы: Түстерді кодтау (HEX Colors)</h4>
      <p>HTML мен веб-дизайнда түстер RGB (Red, Green, Blue) бойынша он алтылық пішімде жазылады. Мысалы: <code>#FFFFFF</code> — ақ түс, <code>#000000</code> — қара түс, <code>#FF0000</code> — таза қызыл түс.</p>
    `,
    terms: ["16-лық жүйе", "Тетрада", "Триада", "A-F әріптері", "HEX Color", "RGB"],
    quiz: [
      {
        q: "Он алтылық жүйедегі 'F' әрпі ондық жүйеде қандай санға сәйкес келеді?",
        options: ["10", "12", "15", "16"],
        correct: 2,
        exp: "Дұрыс! A=10, B=11, C=12, D=13, E=14, F=15."
      },
      {
        q: "Он алтылық бір таңба екілік жүйедегі неше битке (тетрадаға) сәйкес келеді?",
        options: ["2 бит", "3 бит", "4 бит", "8 бит"],
        correct: 2,
        exp: "Өте жақсы! 2⁴ = 16, яғни әр hex цифры 4 екілік битті ауыстыра алады."
      },
      {
        q: "Веб-дизайнда #00FF00 кодтауы қандай түске сәйкес келеді?",
        options: ["Қызыл", "Жасыл (Green)", "Көк", "Сары"],
        correct: 1,
        exp: "Иә! #RRGGBB пішімінде ортаңғы 'GG' максималды (FF) болғандықтан, бұл таза жасыл түс."
      }
    ]
  },
  {
    id: "bin-arithmetic",
    quarter: "q2",
    quarterTitle: "2-тоқсан",
    category: "Ақпарат",
    title: "Екілік арифметика: Қосу және көбейту ережелері",
    desc: "0+0=0, 0+1=1, 1+1=10₂ (келесі разрядқа тасымалдау) ережелері және баған түрінде есептеулер.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="32" font-family="monospace" font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">1 + 1 = 10₂</text>
        <text x="80" y="58" font-family="monospace" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">1 × 1 = 1₂</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="50" y="25" width="240" height="130" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="170" y="50" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">Қосу ережесі (+)</text>
        <text x="80" y="80" fill="#0f172a" font-family="monospace">0 + 0 = 0</text>
        <text x="80" y="102" fill="#0f172a" font-family="monospace">0 + 1 = 1</text>
        <text x="80" y="124" fill="#0f172a" font-family="monospace">1 + 0 = 1</text>
        <text x="80" y="146" fill="#2563eb" font-family="monospace" font-weight="bold">1 + 1 = 10₂ (тасымал)</text>

        <rect x="310" y="25" width="240" height="130" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="430" y="50" fill="#2563eb" font-size="14" font-weight="bold" text-anchor="middle">Көбейту ережесі (×)</text>
        <text x="350" y="80" fill="#0f172a" font-family="monospace">0 × 0 = 0</text>
        <text x="350" y="102" fill="#0f172a" font-family="monospace">0 × 1 = 0</text>
        <text x="350" y="124" fill="#0f172a" font-family="monospace">1 × 0 = 0</text>
        <text x="350" y="146" fill="#059669" font-family="monospace" font-weight="bold">1 × 1 = 1</text>
      </svg>
    `,
    theory: `
      <h4>1. Екілік сандарды қосу</h4>
      <p>Екілік қосу ондық қосу секілді разрядтар бойынша орындалады:</p>
      <ul>
        <li><code>0 + 0 = 0</code></li>
        <li><code>0 + 1 = 1</code></li>
        <li><code>1 + 0 = 1</code></li>
        <li><code>1 + 1 = 10₂</code> (0 жазылады да, 1 келесі үлкен разрядқа көшеді).</li>
        <li><code>1 + 1 + 1 = 11₂</code> (1 жазылады, 1 келесі разрядқа көшеді).</li>
      </ul>

      <h4>2. Мысалмен баған түрінде қосу</h4>
      <pre><code>  1 0 1 1₂   (ондықта: 11)
+ 0 1 1 0₂   (ондықта: 6)
---------
  1 0 0 0 1₂ (ондықта: 17)</code></pre>
    `,
    terms: ["Екілік қосу", "Екілік көбейту", "Тасымалдау (Carry)", "Разряд"],
    quiz: [
      {
        q: "1₂ + 1₂ қосындысы екілік жүйеде неге тең?",
        options: ["2₂", "10₂", "11₂", "0₂"],
        correct: 1,
        exp: "Дұрыс! 1+1=2, ал 2 саны екілікте 10₂ болып жазылады."
      },
      {
        q: "101₂ + 010₂ қосындысын есептеңіз:",
        options: ["111₂", "100₂", "110₂", "1010₂"],
        correct: 0,
        exp: "Тамаша! 1+0=1, 0+1=1, 1+0=1 -> 111₂ (ондықта 5 + 2 = 7)."
      },
      {
        q: "1₂ × 0₂ көбейтіндісі неге тең?",
        options: ["1₂", "0₂", "10₂", "Қате"],
        correct: 1,
        exp: "Кез келген сан 0-ге көбейтілсе 0 болады."
      }
    ]
  },

  // --- 3-ТОҚСАН: Python тілінде алгоритмдеу және бағдарламалау ---
  {
    id: "py-basics",
    quarter: "q3",
    quarterTitle: "3-тоқсан",
    category: "Python",
    title: "Python негіздері, синтаксис және мәліметтер типтері",
    desc: "Айнымалылар, мәліметтер типтері: int, float, str, bool. input() және print() функциялары.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="45" font-family="monospace" font-size="14" fill="#059669" font-weight="bold" text-anchor="middle">print("Python")</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="30" y="30" width="120" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="90" y="65" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">int</text>
        <text x="90" y="95" fill="#475569" font-size="12" text-anchor="middle">Бүтін сан</text>
        <text x="90" y="118" fill="#0f172a" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">42, -5, 0</text>

        <rect x="170" y="30" width="120" height="110" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="230" y="65" fill="#2563eb" font-size="16" font-weight="bold" text-anchor="middle">float</text>
        <text x="230" y="95" fill="#475569" font-size="12" text-anchor="middle">Бөлшек сан</text>
        <text x="230" y="118" fill="#0f172a" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">3.14, 0.5</text>

        <rect x="310" y="30" width="120" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="370" y="65" fill="#059669" font-size="16" font-weight="bold" text-anchor="middle">str</text>
        <text x="370" y="95" fill="#475569" font-size="12" text-anchor="middle">Жолдық мәтін</text>
        <text x="370" y="118" fill="#0f172a" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">"Сәлем!"</text>

        <rect x="450" y="30" width="120" height="110" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
        <text x="510" y="65" fill="#e11d48" font-size="16" font-weight="bold" text-anchor="middle">bool</text>
        <text x="510" y="95" fill="#475569" font-size="12" text-anchor="middle">Логикалық</text>
        <text x="510" y="118" fill="#0f172a" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">True / False</text>
      </svg>
    `,
    theory: `
      <h4>1. Негізгі мәліметтер типтері</h4>
      <ul>
        <li><code>int</code> — бүтін сандар (мысалы: <code>age = 14</code>).</li>
        <li><code>float</code> — нақты (бөлшек) сандар (мысалы: <code>pi = 3.14</code>).</li>
        <li><code>str</code> — мәтіндік жолдар, тырнақшаға алынады (мысалы: <code>name = "Али"</code>).</li>
        <li><code>bool</code> — логикалық мәндер: тек <code>True</code> (Ақиқат) немесе <code>False</code> (Жалған).</li>
      </ul>

      <h4>2. Енгізу және шығару</h4>
      <pre><code>name = input("Есімің кім? ")
age = int(input("Жасың нешеде? ")) # input() мәтін қайтарады, int-ке түрлендіру керек
print(f"Сәлем, {name}! Келесі жылы жасың {age + 1}-де болады.")</code></pre>
    `,
    terms: ["int", "float", "str", "bool", "input()", "print()", "type()"],
    quiz: [
      {
        q: "Python-да бүтін сандық мәліметтер типі қалай белгіленеді?",
        options: ["float", "int", "str", "bool"],
        correct: 1,
        exp: "Дұрыс! int (integer) — бүтін сан мәліметтер типі."
      },
      {
        q: "Пернетақтадан енгізілген '25' мәтінін санға айналдыру үшін қай функция қолданылады?",
        options: ["str()", "print()", "int()", "len()"],
        correct: 2,
        exp: "Тамаша! int() функциясы мәтіндік жолды бүтін санға түрлендіреді."
      },
      {
        q: "type(3.14) командасы қандай мән қайтарады?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correct: 1,
        exp: "3.14 нүктелі бөлшек сан болғандықтан, ол float типіне жатады."
      }
    ]
  },
  {
    id: "py-conditions",
    quarter: "q3",
    quarterTitle: "3-тоқсан",
    category: "Python",
    title: "Шартты операторлар: if, elif, else және логикалық амалдар",
    desc: "Тарамдалған алгоритмдер, салыстыру белгілері (==, !=, >, <), логикалық and, or, not операторлары.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <polygon points="80,15 125,40 80,65 35,40" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <text x="80" y="44" fill="#6d28d9" font-size="12" text-anchor="middle" font-weight="bold">if x > 0?</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <polygon points="300,20 400,60 300,100 200,60" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="300" y="65" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">шарт (x >= 50)</text>

        <line x1="400" y1="60" x2="480" y2="60" stroke="#059669" stroke-width="2"/>
        <text x="440" y="50" fill="#059669" font-size="12" font-weight="bold">True (Иә)</text>
        <rect x="480" y="35" width="90" height="50" rx="6" fill="#ffffff" stroke="#059669"/>
        <text x="525" y="65" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">"Өтті"</text>

        <line x1="200" y1="60" x2="120" y2="60" stroke="#e11d48" stroke-width="2"/>
        <text x="160" y="50" fill="#e11d48" font-size="12" font-weight="bold">False (Жоқ)</text>
        <rect x="30" y="35" width="90" height="50" rx="6" fill="#ffffff" stroke="#e11d48"/>
        <text x="75" y="65" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">"Қайта тапсыру"</text>
      </svg>
    `,
    theory: `
      <h4>1. Шартты оператор синтаксисі</h4>
      <p>Шартты оператор белгілі бір шарттың орындалуына қарай бағдарламаның түрлі тармақтарын іске қосады.</p>
      <pre><code>score = int(input("Ұпайың: "))

if score >= 90:
    print("Бағаң: 5 (Өте жақсы)")
elif score >= 75:
    print("Бағаң: 4 (Жақсы)")
elif score >= 50:
    print("Бағаң: 3 (Қанағат)")
else:
    print("Бағаң: 2 (Қанағатсыз)")</code></pre>

      <h4>2. Салыстыру және логикалық операторлар</h4>
      <ul>
        <li><code>==</code> — тең, <code>!=</code> — тең емес, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</li>
        <li><code>and</code> — Екі шарт та бірдей орындалғанда ғана <code>True</code> береді.</li>
        <li><code>or</code> — Кемінде бір шарт орындалса <code>True</code> береді.</li>
        <li><code>not</code> — Мәнді теріске айналдырады (<code>not True</code> -> <code>False</code>).</li>
      </ul>
    `,
    terms: ["if", "elif", "else", "and", "or", "not", "Шегініс (Indent)"],
    quiz: [
      {
        q: "Python-да екі шаманың бір-біріне теңдігін тексеретін оператор:",
        options: ["=", "==", "===", "!="],
        correct: 1,
        exp: "Дұрыс! '=' — меншіктеу, ал '==' — теңдікті тексеру салыстыру операторы."
      },
      {
        q: "5 > 3 and 2 > 10 өрнегі қандай нәтиже қайтарады?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        exp: "False! Себебі 'and' операторында екі шарт та орындалуы тиіс (2 > 10 жалған)."
      },
      {
        q: "if сөзінен және шарттан кейін жол соңына қандай белгі қойылуы міндетті?",
        options: ["; (нүктелі үтір)", ": (қос нүкте)", ". (нүкте)", ", (үтір)"],
        correct: 1,
        exp: "Python синтаксисі бойынша if, elif, else жолдары міндетті түрде қос нүктемен (:) аяқталады."
      }
    ]
  },
  {
    id: "py-loops",
    quarter: "q3",
    quarterTitle: "3-тоқсан",
    category: "Python",
    title: "Циклдар: for, while және range() функциясы",
    desc: "Қайталанатын әрекеттерді автоматтандыру. range(start, stop, step), while шарты, break және continue.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <path d="M40 40 A30 30 0 1 1 120 40 A30 30 0 0 1 40 40" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6"/>
        <polyline points="40 30 40 40 50 40" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="50" y="30" width="220" height="120" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="160" y="55" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">for циклі (Санауышты)</text>
        <text x="70" y="85" fill="#0f172a" font-family="monospace">for i in range(1, 4):</text>
        <text x="90" y="110" fill="#2563eb" font-family="monospace">print(i)</text>
        <text x="70" y="135" fill="#475569" font-size="11">Нәтиже: 1, 2, 3 шығады</text>

        <rect x="330" y="30" width="220" height="120" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="440" y="55" fill="#2563eb" font-size="14" font-weight="bold" text-anchor="middle">while циклі (Шартты)</text>
        <text x="350" y="85" fill="#0f172a" font-family="monospace">n = 3</text>
        <text x="350" y="105" fill="#0f172a" font-family="monospace">while n > 0:</text>
        <text x="370" y="125" fill="#2563eb" font-family="monospace">n -= 1</text>
        <text x="350" y="145" fill="#475569" font-size="11">Шарт ақиқат болғанша қайталанады</text>
      </svg>
    `,
    theory: `
      <h4>1. for циклі және range() функциясы</h4>
      <p>Қайталау саны алдын ала белгілі болған кезде <code>for</code> циклі қолданылады.</p>
      <ul>
        <li><code>range(5)</code> — 0, 1, 2, 3, 4 (5 кірмейді).</li>
        <li><code>range(2, 6)</code> — 2, 3, 4, 5.</li>
        <li><code>range(1, 10, 2)</code> — 1, 3, 5, 7, 9 (қадам 2-ге тең).</li>
      </ul>

      <h4>2. while циклі</h4>
      <p>Шарт ақиқат (<code>True</code>) болып тұрғанша цикл денесі қайталана береді. Цикл ішінде шартты өзгертетін қадам болуы керек, әйтпесе шексіз циклге ұласады.</p>

      <h4>3. Басқару операторлары</h4>
      <ul>
        <li><code>break</code> — циклді мерзімінен бұрын толық тоқтатады.</li>
        <li><code>continue</code> — ағымдағы қадамды өткізіп жіберіп, келесі итерацияға көшеді.</li>
      </ul>
    `,
    terms: ["for", "while", "range()", "break", "continue", "Итерация"],
    quiz: [
      {
        q: "range(1, 5) тізбегінде қандай сандар генерацияланады?",
        options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "1, 5"],
        correct: 1,
        exp: "Дұрыс! range(start, stop) функциясында соңғы stop саны нәтижеге кірмейді (1, 2, 3, 4)."
      },
      {
        q: "Циклдің орындалуын мерзімінен бұрын дереу тоқтатып, циклден шығу операторы:",
        options: ["continue", "break", "pass", "exit"],
        correct: 1,
        exp: "Тамаша! break операторы цикл жұмысын үзеді."
      },
      {
        q: "while циклінің шарты ешқашан жалған (False) болмаса не орын алады?",
        options: ["Синтаксистік қате", "Шексіз цикл (Infinite loop)", "Бағдарлама өзі өшеді", "Ештеңе болмайды"],
        correct: 1,
        exp: "Шарт үнемі True болып қалса, компьютер шексіз циклге түседі."
      }
    ]
  },
  {
    id: "py-strings",
    quarter: "q3",
    quarterTitle: "3-тоқсан",
    category: "Python",
    title: "Жолдар (Strings) және олармен жұмыс әдістері",
    desc: "Жолдарды индекстеу (s[0]), срездер (s[1:4]), len() ұзындығы және әдістер: .upper(), .lower(), .replace().",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="45" font-family="monospace" font-size="14" fill="#e11d48" font-weight="bold" text-anchor="middle">"INFORMATIKA"[0:4]</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="50" y="30" width="500" height="110" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
        <text x="300" y="55" fill="#e11d48" font-size="13" font-weight="bold" text-anchor="middle">s = "PYTHON" жолының индекстері</text>

        <!-- Тікелей индекс -->
        <text x="120" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">P</text>
        <text x="180" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">Y</text>
        <text x="240" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">T</text>
        <text x="300" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">H</text>
        <text x="360" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">O</text>
        <text x="420" y="85" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">N</text>

        <text x="120" y="115" fill="#64748b" font-size="12">0</text>
        <text x="180" y="115" fill="#64748b" font-size="12">1</text>
        <text x="240" y="115" fill="#64748b" font-size="12">2</text>
        <text x="300" y="115" fill="#64748b" font-size="12">3</text>
        <text x="360" y="115" fill="#64748b" font-size="12">4</text>
        <text x="420" y="115" fill="#64748b" font-size="12">5</text>
      </svg>
    `,
    theory: `
      <h4>1. Жолдарды индекстеу және срездер</h4>
      <p>Python-да индекстеу әрқашан <strong>0-ден басталады</strong>.</p>
      <ul>
        <li><code>s = "Қазақстан"</code></li>
        <li><code>s[0]</code> -> <code>'Қ'</code> (бірінші таңба).</li>
        <li><code>s[-1]</code> -> <code>'н'</code> (соңғы таңба).</li>
        <li><code>s[0:5]</code> -> <code>'Қазақ'</code> (0-ден 5-ке дейінгі қиып алу / срез).</li>
      </ul>

      <h4>2. Жолдардың негізгі әдістері</h4>
      <ul>
        <li><code>len(s)</code> — жолдың ұзындығын (таңба санын) анықтайды.</li>
        <li><code>s.upper()</code> — барлық әріптерді бас әріпке айналдырады.</li>
        <li><code>s.lower()</code> — барлық әріптерді кіші әріпке айналдырады.</li>
        <li><code>s.replace("ескі", "жаңа")</code> — жолдағы мәтінді ауыстырады.</li>
      </ul>
    `,
    terms: ["Индекс", "Срез (Slice)", "len()", ".upper()", ".lower()", ".replace()"],
    quiz: [
      {
        q: "text = 'Kazakhstan' болса, text[0] мәні неге тең?",
        options: ["'K'", "'a'", "'Kazakhstan'", "0"],
        correct: 0,
        exp: "Дұрыс! Индекс 0-ден басталатындықтан, text[0] — бірінші әріп 'K'."
      },
      {
        q: "Жолдағы таңбалардың санын (ұзындығын) табатын функция:",
        options: ["count()", "size()", "len()", "index()"],
        correct: 2,
        exp: "Тамаша! len('сөз') функциясы жолдың ұзындығын санайды."
      },
      {
        q: "'astana'.upper() әдісінің орындалу нәтижесі қандай болады?",
        options: ["'Astana'", "'ASTANA'", "'astana'", "Қате шығады"],
        correct: 1,
        exp: "Иә! .upper() барлық әріптерді үлкен регистрге ауыстырады."
      }
    ]
  },
  {
    id: "py-lists",
    quarter: "q3",
    quarterTitle: "3-тоқсан",
    category: "Python",
    title: "Тізімдер (Lists) және олармен жұмыс",
    desc: "Тізім құру, элементтерді өзгерту, әдістер: append(), remove(), pop(), sort(), len().",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <text x="80" y="45" font-family="monospace" font-size="14" fill="#059669" font-weight="bold" text-anchor="middle">[10, 25, 40, 99]</text>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="40" y="30" width="520" height="120" rx="10" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="300" y="55" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">nums = [5, 12, 42, 99] Тізімінің құрылымы</text>

        <rect x="70" y="70" width="90" height="60" rx="6" fill="#ecfdf5" stroke="#059669"/>
        <text x="115" y="98" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">5</text>
        <text x="115" y="120" fill="#047857" font-size="11" text-anchor="middle">индекс: 0</text>

        <rect x="190" y="70" width="90" height="60" rx="6" fill="#ecfdf5" stroke="#059669"/>
        <text x="235" y="98" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">12</text>
        <text x="235" y="120" fill="#047857" font-size="11" text-anchor="middle">индекс: 1</text>

        <rect x="310" y="70" width="90" height="60" rx="6" fill="#ecfdf5" stroke="#059669"/>
        <text x="355" y="98" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">42</text>
        <text x="355" y="120" fill="#047857" font-size="11" text-anchor="middle">индекс: 2</text>

        <rect x="430" y="70" width="90" height="60" rx="6" fill="#ecfdf5" stroke="#059669"/>
        <text x="475" y="98" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">99</text>
        <text x="475" y="120" fill="#047857" font-size="11" text-anchor="middle">индекс: 3</text>
      </svg>
    `,
    theory: `
      <h4>1. Тізім (List) деген не?</h4>
      <p>Тізім — бірнеше мәнді бір айнымалыда реттелген түрде сақтауға арналған өзгертілетін мәліметтер типі. Квадрат жақшалармен <code>[ ]</code> белгіленеді.</p>

      <h4>2. Тізімнің негізгі әдістері</h4>
      <ul>
        <li><code>fruits = ["алма", "алмұрт"]</code></li>
        <li><code>fruits.append("банан")</code> — тізімнің <strong>соңына жаңа элемент қосады</strong>.</li>
        <li><code>fruits.remove("алма")</code> — нақты элементті тізімнен өшіреді.</li>
        <li><code>fruits.pop(0)</code> — берілген индекс бойынша элементті өшіреді әрі қайтарады.</li>
        <li><code>fruits.sort()</code> — тізімді өсу ретімен сұрыптайды.</li>
      </ul>
    `,
    terms: ["Тізім (List)", "append()", "remove()", "pop()", "sort()", "Индекстеу"],
    quiz: [
      {
        q: "Тізімнің соңына жаңа элемент қосатын әдіс:",
        options: ["add()", "push()", "append()", "insert_end()"],
        correct: 2,
        exp: "Дұрыс! Python-да тізім соңына қосу .append() әдісімен жүзеге асады."
      },
      {
        q: "nums = [10, 20, 30] болса, nums[1] элементі қай сан?",
        options: ["10", "20", "30", "0"],
        correct: 1,
        exp: "Тамаша! 0-ші индекс 10, ал 1-ші индекс 20 болады."
      },
      {
        q: "Тізімді өсу немесе алфавит ретімен реттеу үшін қай әдіс шақырылады?",
        options: [".reverse()", ".sort()", ".order()", ".filter()"],
        correct: 1,
        exp: "Иә! .sort() әдісі тізімді ретке келтіреді."
      }
    ]
  },

  // --- 4-ТОҚСАН: Деректер қоры мен денсаулық сақтау ---
  {
    id: "db-basics",
    quarter: "q4",
    quarterTitle: "4-тоқсан",
    category: "Деректер қоры",
    title: "Деректер қоры негіздері: Реляциялық кестелер",
    desc: "Деректер қоры (ДҚ / Database), Реляциялық модель, Өріс (баған), Жазба (жол) және мәліметтер типтері.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <rect x="25" y="20" width="110" height="45" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
        <line x1="25" y1="35" x2="135" y2="35" stroke="#d97706" stroke-width="1.5"/>
        <line x1="60" y1="20" x2="60" y2="65" stroke="#d97706" stroke-width="1"/>
        <line x1="95" y1="20" x2="95" y2="65" stroke="#d97706" stroke-width="1"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="50" y="30" width="500" height="120" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
        <!-- Header row -->
        <rect x="50" y="30" width="500" height="35" fill="#fef3c7"/>
        <text x="120" y="52" fill="#b45309" font-weight="bold" font-size="12">ID (Бастапқы кілт)</text>
        <text x="260" y="52" fill="#b45309" font-weight="bold" font-size="12">Аты-жөні (Өріс)</text>
        <text x="420" y="52" fill="#b45309" font-weight="bold" font-size="12">Сыныбы (Өріс)</text>

        <!-- Rows -->
        <text x="120" y="90" fill="#0f172a" font-family="monospace">1</text>
        <text x="260" y="90" fill="#0f172a">Асқар Нұрлан</text>
        <text x="420" y="90" fill="#0f172a">8 "А"</text>

        <line x1="50" y1="105" x2="550" y2="105" stroke="#e2e8f0"/>

        <text x="120" y="130" fill="#0f172a" font-family="monospace">2</text>
        <text x="260" y="130" fill="#0f172a">Дина Саматқызы</text>
        <text x="420" y="130" fill="#0f172a">8 "Б"</text>

        <text x="560" y="90" fill="#059669" font-size="12" font-weight="bold">← Жазба (Жол)</text>
      </svg>
    `,
    theory: `
      <h4>1. Деректер қоры (ДҚ) деген не?</h4>
      <p><strong>Деректер қоры (Database)</strong> — белгілі бір ережелер бойынша құрылымдалған, өзара байланысқан ақпараттар жиынтығы.</p>
      <p>Ең көп таралған түрі — <strong>Реляциялық деректер қоры</strong> (ақпарат екі өлшемді кестелер түрінде сақталады).</p>

      <h4>2. Кестенің негізгі элементтері</h4>
      <ul>
        <li><strong>Өріс (Field / Баған):</strong> Объектінің бір ғана нақты қасиетін немесе сипаттамасын білдіреді (мысалы: Тегі, Жасы, Бағасы).</li>
        <li><strong>Жазба (Record / Жол):</strong> Бір нақты объект туралы толық мәліметтердің жиынтығы (мысалы, бір оқушы туралы толық дерек).</li>
      </ul>
    `,
    terms: ["Деректер қоры", "Реляциялық", "Өріс (Баған)", "Жазба (Жол)", "СУБД / ДҚБЖ"],
    quiz: [
      {
        q: "Реляциялық деректер қорында мәліметтер қандай түрде сақталады?",
        options: ["Тармақталған ағаш", "Кестелер түрінде", "Дыбыстық файлдар", "Байланыссыз мәтін"],
        correct: 1,
        exp: "Дұрыс! Реляциялық ДҚ мәліметтерді екі өлшемді кестелерде сақтайды."
      },
      {
        q: "Деректер қоры кестесіндегі бір көлденең жол қалай аталады?",
        options: ["Өріс (Field)", "Жазба (Record)", "Ячейка", "Кілт"],
        correct: 1,
        exp: "Тамаша! Көлденең жол — Жазба (Record), ал тік баған — Өріс."
      },
      {
        q: "Деректер қорын басқару жүйесі (ДҚБЖ) мысалы:",
        options: ["MySQL / MS Access", "Photoshop", "Paint", "Calculator"],
        correct: 0,
        exp: "Иә! MySQL, MS Access, PostgreSQL — танымал ДҚБЖ бағдарламалары."
      }
    ]
  },
  {
    id: "db-keys",
    quarter: "q4",
    quarterTitle: "4-тоқсан",
    category: "Деректер қоры",
    title: "Бастапқы кілт және кестелер арасындағы байланыстар",
    desc: "Бастапқы кілт (Primary Key) түсінігі, бірегейлік, кестелер арасындағы байланыс типтері (1:1, 1:M, M:M).",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <circle cx="50" cy="40" r="14" fill="none" stroke="#d97706" stroke-width="2.5"/>
        <line x1="64" y1="40" x2="110" y2="40" stroke="#d97706" stroke-width="2.5"/>
        <line x1="90" y1="40" x2="90" y2="48" stroke="#d97706" stroke-width="2.5"/>
        <line x1="105" y1="40" x2="105" y2="48" stroke="#d97706" stroke-width="2.5"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="40" y="30" width="180" height="120" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
        <text x="130" y="55" fill="#b45309" font-weight="bold" font-size="13" text-anchor="middle">Оқушылар кестесі</text>
        <text x="60" y="85" fill="#059669" font-weight="bold">🔑 ID_Оқушы (PK)</text>
        <text x="60" y="110" fill="#0f172a">Аты</text>
        <text x="60" y="130" fill="#0f172a">Тегі</text>

        <line x1="220" y1="80" x2="380" y2="80" stroke="#2563eb" stroke-width="3" stroke-dasharray="4"/>
        <text x="300" y="70" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">1 : Көпке (1:M)</text>

        <rect x="380" y="30" width="180" height="120" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="470" y="55" fill="#1e40af" font-weight="bold" font-size="13" text-anchor="middle">Бағалар кестесі</text>
        <text x="400" y="85" fill="#059669" font-weight="bold">🔑 ID_Баға</text>
        <text x="400" y="110" fill="#2563eb" font-weight="bold">🔗 ID_Оқушы (FK)</text>
        <text x="400" y="130" fill="#0f172a">Баға мәні</text>
      </svg>
    `,
    theory: `
      <h4>1. Бастапқы кілт (Primary Key) деген не?</h4>
      <p><strong>Бастапқы кілт (Primary Key / PK)</strong> — кестедегі әрбір жазбаны (жолды) бірегей түрде анықтайтын өріс немесе өрістер жиынтығы.</p>
      <ul>
        <li>Оның мәні ешқашан <strong>қайталанбайды</strong>.</li>
        <li>Оның мәні <strong>бос (NULL) болмауы тиіс</strong>.</li>
        <li>Өмірдегі мысалы: ҚР азаматының ЖСН (ИИН) нөмірі, мектептегі оқушының ID нөмірі.</li>
      </ul>

      <h4>2. Кестелер арасындағы байланыс типтері</h4>
      <ul>
        <li><strong>Бірдің-бірге қатынасы (1 : 1):</strong> Бір кестенің жазбасына екінші кестенің бір ғана жазбасы сәйкес келеді (мысалы: 1 азамат — 1 төлқұжат).</li>
        <li><strong>Бірдің-көпке қатынасы (1 : M):</strong> Ең жиі кездесетін байланыс. Бір оқушының көптеген күнделік бағасы болуы мүмкін.</li>
        <li><strong>Көптің-көпке қатынасы (M : M):</strong> Мысалы, көп оқушы бірнеше түрлі үйірмелерге қатысады.</li>
      </ul>
    `,
    terms: ["Бастапқы кілт (Primary Key)", "Сыртқы кілт (Foreign Key)", "Бірегейлік", "1:1", "1:M", "ЖСН"],
    quiz: [
      {
        q: "Кестедегі әрбір жазбаның қайталанбас бірегейлігін қамтамасыз ететін өріс:",
        options: ["Жай өріс", "Бастапқы кілт (Primary Key)", "Мәтіндік өріс", "Фильтр"],
        correct: 1,
        exp: "Дұрыс! Бастапқы кілт ешқашан қайталанбайды және әр жолды нақты анықтайды."
      },
      {
        q: "Бастапқы кілтке қойылатын басты талап:",
        options: ["Мәні бос болуы керек", "Мәні бірегей (қайталанбайтын) болуы шарт", "Тек әріптен тұруы тиіс", "Үнемі 0 болуы керек"],
        correct: 1,
        exp: "Тамаша! Бастапқы кілт бірегей болуы міндетті."
      },
      {
        q: "«Бір мұғалім бірнеше сыныпқа сабақ береді» деген байланыс қай түрге жатады?",
        options: ["1 : 1 (Бірдің-бірге)", "1 : M (Бірдің-көпке)", "M : M", "Байланыс жоқ"],
        correct: 1,
        exp: "Иә! 1 мұғалім — Көптеген сыныптар (1:M)."
      }
    ]
  },
  {
    id: "ergonomics",
    quarter: "q4",
    quarterTitle: "4-тоқсан",
    category: "Денсаулық",
    title: "Компьютерлік эргономика және қауіпсіздік ережелері",
    desc: "Жұмыс орнын дұрыс ұйымдастыру, көзден мониторға дейінгі қашықтық, 20-20-20 ережесі және электр қауіпсіздігі.",
    duration: "45 мин",
    svgThumbnail: `
      <svg viewBox="0 0 160 80">
        <circle cx="80" cy="30" r="12" fill="#059669"/>
        <line x1="80" y1="42" x2="80" y2="65" stroke="#059669" stroke-width="3"/>
        <line x1="80" y1="50" x2="105" y2="60" stroke="#059669" stroke-width="2.5"/>
        <rect x="110" y="45" width="20" height="25" rx="2" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      </svg>
    `,
    diagramSvg: `
      <svg viewBox="0 0 600 180" width="100%">
        <rect x="40" y="25" width="520" height="130" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        
        <circle cx="120" cy="65" r="20" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="120" y="70" font-size="20" text-anchor="middle">👀</text>
        <line x1="145" y1="65" x2="260" y2="65" stroke="#2563eb" stroke-width="2" stroke-dasharray="4"/>
        <text x="200" y="55" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">50 - 70 см</text>

        <rect x="260" y="40" width="30" height="50" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="275" y="110" fill="#475569" font-size="11" text-anchor="middle">Монитор деңгейі: көзден сәл төмен</text>

        <rect x="360" y="40" width="180" height="90" rx="6" fill="#eff6ff" stroke="#2563eb"/>
        <text x="450" y="65" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">«20 - 20 - 20» Ережесі</text>
        <text x="450" y="88" fill="#0f172a" font-size="11" text-anchor="middle">Әр 20 минут сайын</text>
        <text x="450" y="105" fill="#475569" font-size="11" text-anchor="middle">20 фут (6 м) алысқа</text>
        <text x="450" y="122" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">20 секунд бойы қарау</text>
      </svg>
    `,
    theory: `
      <h4>1. Эргономика деген не?</h4>
      <p><strong>Компьютерлік эргономика</strong> — адамның жұмыс орнын оның денсаулығына зиян келтірмейтіндей, барынша қолайлы әрі өнімді етіп ұйымдастыру туралы ғылым.</p>

      <h4>2. Санитарлық-гигиеналық талаптар</h4>
      <ul>
        <li><strong>Монитор мен көз арақашықтығы:</strong> Кемінде <strong>50 – 70 см</strong> (созылған қол ұзындығы) болуы қажет.</li>
        <li><strong>Монитордың биіктігі:</strong> Экранның жоғарғы жиегі көз деңгейінде немесе сәл төмен орналасуы тиіс.</li>
        <li><strong>Отырыс:</strong> Арқа тік, аяқ еденде 90 градус бұрыш жасап тұруы керек.</li>
        <li><strong>«20-20-20» ережесі:</strong> Көздің талуын болдырмау үшін әрбір 20 минут сайын 20 фут (шамамен 6 метр) қашықтыққа 20 секунд бойы қарап демалу ұсынылады.</li>
      </ul>

      <h4>3. Информатика кабинетіндегі техника қауіпсіздігі</h4>
      <ul>
        <li>Сымдарға, розеткаларға, жүйелік блоктың артқы жағына қол тигізуге қатаң тыйым салынады.</li>
        <li>Компьютер алдына тамақ немесе сусындар әкелуге болмайды.</li>
      </ul>
    `,
    terms: ["Эргономика", "50-70 см", "20-20-20 ережесі", "СанПиН", "Қауіпсіздік техникасы"],
    quiz: [
      {
        q: "Монитор мен көздің арақашықтығы кемінде қандай болуы керек?",
        options: ["10 - 20 см", "50 - 70 см", "150 см", "Маңызы жоқ"],
        correct: 1,
        exp: "Дұрыс! Оңтайлы арақашықтық — 50-70 см (шамамен созылған қол ұзындығы)."
      },
      {
        q: "Көзді демалтуға арналған халықаралық «20-20-20» ережесінің мәні неде?",
        options: ["20 сағат ойнау", "Әр 20 минут сайын 6 метр қашықтыққа 20 секунд қарау", "20 рет секіру", "20 күн демалу"],
        correct: 1,
        exp: "Тамаша! 20 минут жұмыс сайын алысқа қарап, көз бұлшықеттерін босаңсыту қажет."
      },
      {
        q: "Информатика кабинетінде қатаң тыйым салынатын әрекет:",
        options: ["Мұғалімнің тапсырмасын орындау", "Пернетақтамен мәтін теру", "Компьютердің ашық сымдары мен розеткаларға қол тигізу", "Көз жаттығуын жасау"],
        correct: 2,
        exp: "Иә! Электр тогы соғу қаупі болғандықтан, ашық сымдарға қол тигізуге қатаң тыйым салынады."
      }
    ]
  }
];

// ========================================================
// 2. ЖЕТІСТІКТЕР МЕН МЕДАЛЬДАР ҚОРЫ (ACHIEVEMENTS)
// ========================================================
const ACHIEVEMENTS_DATA = [
  { id: "first-step", icon: "🚀", title: "Алғашқы қадам", desc: "Кез келген 1 тақырыпты толық оқып шықтыңыз" },
  { id: "quiz-master", icon: "🎯", title: "Тест Шебері", desc: "Тақырыптық сынақтан 3/3 дұрыс жауап алдыңыз" },
  { id: "net-architect", icon: "🌐", title: "Желілік Архитектор", desc: "1-тоқсанды немесе Желілік ойынды сәтті орындадыңыз" },
  { id: "binary-hacker", icon: "🔢", title: "Бинарлы Хакер", desc: "Binary Decrypter ойынында 100+ ұпай жинадыңыз" },
  { id: "python-guru", icon: "🐍", title: "Python Шебері", desc: "Bug Hunter ойынында 3 деңгейден астыңыз" },
  { id: "db-analyst", icon: "🗄️", title: "Деректер Талдаушысы", desc: "4-тоқсанның барлық тақырыптарын меңгердіңіз" },
  { id: "xp-champion", icon: "⚡", title: "XP Чемпионы", desc: "Жалпы 300-ден астам тәжірибе ұпайын жинадыңыз" },
  { id: "grandmaster", icon: "🏆", title: "Информатика Үздігі", desc: "Барлық 16 тақырыпты 100% толық аяқтадыңыз" }
];

// ========================================================
// 3. 1-ОЙЫН МӘЛІМЕТТЕРІ: PYTHON BUG HUNTER & CODE RUNNER
// ========================================================
const PYTHON_GAME_LEVELS = [
  {
    level: 1,
    title: "1-Деңгей: Қос нүкте синтаксисі (SyntaxError)",
    task: "for циклінің соңындағы қатені тауып, дұрыс код нұсқасын таңдаңыз:",
    code: `for i in range(5)\n    print("Сәлем, 8-сынып!")`,
    options: [
      { text: "for i in range(5):", isCorrect: true, exp: "for жолының соңында қос нүкте (:) болуы шарт!" },
      { text: "for (i = 0; i < 5; i++)", isCorrect: false, exp: "Бұл C++/Java синтаксисі, Python емес." },
      { text: "for i in range[5];", isCorrect: false, exp: "Квадрат жақша мен нүктелі үтір қате." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nСәлем, 8-сынып!\nСәлем, 8-сынып!\nСәлем, 8-сынып!\nСәлем, 8-сынып!\nСәлем, 8-сынып!\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 2,
    title: "2-Деңгей: Шарттағы салыстыру операторы",
    task: "Шартты тексеруде меншіктеу (=) орнына салыстыруды (==) қолданыңыз:",
    code: `x = 10\nif x = 10:\n    print("x саны 10-ға тең")`,
    options: [
      { text: "if x == 10:", isCorrect: true, exp: "Дұрыс! Салыстыру үшін '==' операторы жазылады." },
      { text: "if x === 10:", isCorrect: false, exp: "Python тілінде '===' операторы жоқ." },
      { text: "if (x is equal 10):", isCorrect: false, exp: "Мұндай сөз синтаксиске сәйкес келмейді." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nx саны 10-ға тең\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 3,
    title: "3-Деңгей: Мәлімет типін түрлендіру (TypeError)",
    task: "input() нәтижесін бүтін санға қалай айналдырамыз?",
    code: `num = input("Санды енгіз: ")\nresult = num + 5\nprint(result)`,
    options: [
      { text: "num = int(input(\"Санды енгіз: \"))", isCorrect: true, exp: "Керемет! int() мәтінді санға айналдырады." },
      { text: "num = str(input(\"Санды енгіз: \"))", isCorrect: false, exp: "str мәтін болып қала береді." },
      { text: "num = bool(input(\"Санды енгіз: \"))", isCorrect: false, exp: "Бұл логикалық мән береді." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nСанды енгіз: 10\n15\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 4,
    title: "4-Деңгей: while шексіз циклін болдырмау",
    task: "Бұл while циклі шексіз айналып қалмас үшін цикл денесіне не қосу керек?",
    code: `count = 0\nwhile count < 3:\n    print("Қадам:", count)\n    # ???`,
    options: [
      { text: "count += 1", isCorrect: true, exp: "Дұрыс! count әр қадамда 1-ге артып отыруы керек." },
      { text: "count = 0", isCorrect: false, exp: "Бұл мәнді өзгертпейді, шексіз қайталанады." },
      { text: "count -= 1", isCorrect: false, exp: "count азайса шарт одан сайын True болып қалады." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nҚадам: 0\nҚадам: 1\nҚадам: 2\n[Цикл сәтті аяқталды]`
  },
  {
    level: 5,
    title: "5-Деңгей: Тізімге элемент қосу әдісі",
    task: "cities тізімінің соңына 'Астана' қаласын дұрыс қосыңыз:",
    code: `cities = ["Алматы", "Шымкент"]\ncities.???("Астана")\nprint(cities)`,
    options: [
      { text: "cities.append(\"Астана\")", isCorrect: true, exp: "Тамаша! .append() тізім соңына қосады." },
      { text: "cities.add(\"Астана\")", isCorrect: false, exp: "Тізімдерде add әдісі жоқ." },
      { text: "cities.push(\"Астана\")", isCorrect: false, exp: "push JavaScript тілінде қолданылады." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\n['Алматы', 'Шымкент', 'Астана']\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 6,
    title: "6-Деңгей: Жолдарды срездеу (Slicing)",
    task: "'INFORMATIKA' сөзінен 'INFO' бөлігін кесіп алу үшін срез қалай жазылады?",
    code: `word = "INFORMATIKA"\nshort_word = word[???]\nprint(short_word)`,
    options: [
      { text: "word[0:4]", isCorrect: true, exp: "Иә! 0, 1, 2, 3 индекстерін (I, N, F, O) алады." },
      { text: "word[1:4]", isCorrect: false, exp: "1-ден басталса бірінші 'I' әрпі түсіп қалады." },
      { text: "word[0:3]", isCorrect: false, exp: "Бұл тек 'INF' бөлігін ғана алады." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nINFO\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 7,
    title: "7-Деңгей: Логикалық оператор (and / or)",
    task: "Оқушы 14 пен 16 жас аралығында болу шартын қалай жазамыз?",
    code: `age = 15\nif age >= 14 ??? age <= 16:\n    print("8-сынып оқушысы")`,
    options: [
      { text: "if age >= 14 and age <= 16:", isCorrect: true, exp: "Дұрыс! Екі шарт бір уақытта орындалуы үшін 'and' керек." },
      { text: "if age >= 14 or age <= 16:", isCorrect: false, exp: "or кез келген сан үшін жарамды болып кетеді." },
      { text: "if age >= 14 && age <= 16:", isCorrect: false, exp: "Python-да '&&' жоқ, 'and' сөзі жазылады." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\n8-сынып оқушысы\n[Бағдарлама сәтті орындалды]`
  },
  {
    level: 8,
    title: "8-Деңгей: Тізім элементтерінің қосындысын табу",
    task: "numbers = [10, 20, 30] сандарының қосындысын дұрыс есептеу:",
    code: `numbers = [10, 20, 30]\ntotal = sum(numbers)\nprint("Қосындысы:", total)`,
    options: [
      { text: "total = sum(numbers)", isCorrect: true, exp: "Керемет! sum() барлық сандарды қосады." },
      { text: "total = numbers.sum()", isCorrect: false, exp: "Python тізімінде .sum() әдісі жоқ, sum() функциясы бар." },
      { text: "total = add(numbers)", isCorrect: false, exp: "add кіріктірілген функция емес." }
    ],
    outputSuccess: `user@kazakhstan-edu:~$ python solution.py\nҚосындысы: 60\n[ҚҰТТЫҚТАЙМЫЗ! Барлық 8 деңгей сәтті аяқталды!]`
  }
];

// ========================================================
// 4. 2-ОЙЫН МӘЛІМЕТТЕРІ: NETWORK BUILDER
// ========================================================
const NETWORK_MISSIONS = [
  {
    id: 1,
    title: "Миссия 1: Мектеп локальді желісін (LAN) құру",
    desc: "2 Компьютерді Коммутаторға (Switch), свитчті Маршрутизаторға (Router), ал роутерді Интернет бұлтына (WAN) жалғаңыз.",
    nodes: [
      { id: "wan", label: "Интернет (WAN)", icon: "☁️", ip: "8.8.8.8", x: 15, y: 50 },
      { id: "router", label: "Роутер", icon: "📡", ip: "192.168.1.1", x: 40, y: 50 },
      { id: "switch", label: "Коммутатор", icon: "🔀", ip: "LAN Switch", x: 65, y: 50 },
      { id: "pc1", label: "Компьютер 1", icon: "💻", ip: "192.168.1.10", x: 88, y: 30 },
      { id: "pc2", label: "Компьютер 2", icon: "💻", ip: "192.168.1.11", x: 88, y: 70 }
    ],
    requiredConnections: [
      ["wan", "router"],
      ["router", "switch"],
      ["switch", "pc1"],
      ["switch", "pc2"]
    ]
  },
  {
    id: 2,
    title: "Миссия 2: Серверді Брандмауэрмен қорғау",
    desc: "Интернеттен келетін деректерді Брандмауэр (Firewall) арқылы сүзгіден өткізіп, Роутерге және одан Мектеп Серверіне бағыттаңыз.",
    nodes: [
      { id: "wan", label: "Интернет", icon: "☁️", ip: "WAN Cloud", x: 15, y: 50 },
      { id: "firewall", label: "Брандмауэр", icon: "🛡️", ip: "Firewall Filter", x: 38, y: 50 },
      { id: "router", label: "Роутер", icon: "📡", ip: "10.0.0.1", x: 62, y: 50 },
      { id: "server", label: "Веб-Сервер", icon: "🗄️", ip: "10.0.0.100", x: 86, y: 50 }
    ],
    requiredConnections: [
      ["wan", "firewall"],
      ["firewall", "router"],
      ["router", "server"]
    ]
  },
  {
    id: 3,
    title: "Миссия 3: Толық кампус топологиясы",
    desc: "Интернет -> Роутер -> Свитч -> (PC-1 және Орталық Сервер).",
    nodes: [
      { id: "wan", label: "Интернет", icon: "☁️", ip: "WAN", x: 15, y: 30 },
      { id: "router", label: "Роутер", icon: "📡", ip: "172.16.0.1", x: 40, y: 30 },
      { id: "switch", label: "Свитч", icon: "🔀", ip: "Switch-Core", x: 65, y: 50 },
      { id: "pc1", label: "Оқушы ДК", icon: "💻", ip: "172.16.0.10", x: 88, y: 30 },
      { id: "server", label: "Мектеп Сервері", icon: "🗄️", ip: "172.16.0.2", x: 88, y: 70 }
    ],
    requiredConnections: [
      ["wan", "router"],
      ["router", "switch"],
      ["switch", "pc1"],
      ["switch", "server"]
    ]
  }
];

// ========================================================
// 5. ЖАЛПЫ ЖҮЙЕЛІК КҮЙ (STATE MANAGEMENT)
// ========================================================
const STATE_STORAGE_KEY = "informa_8_edu_state_v1";

let appState = {
  xp: 0,
  completedTopics: [],
  completedQuizzes: {},
  unlockedAchievements: [],
  gameStats: {
    pythonLevel: 0,
    networkMissionsCompleted: [],
    binaryHighScore: 0
  },
  soundEnabled: true
};

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_STORAGE_KEY);
    if (saved) {
      appState = { ...appState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Жүйелік күйді жүктеу қатесі:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(appState));
    updateUIHeaderStats();
    checkAutoAchievements();
  } catch (e) {
    console.error("Жүйелік күйді сақтау қатесі:", e);
  }
}

// ========================================================
// 6. ДЫБЫСТЫҚ СИНТЕЗАТОР (WEB AUDIO API)
// ========================================================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playCyberSound(type) {
  if (!appState.soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === "levelup") {
      // 3-ноталы арпеджио
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const subOsc = audioCtx.createOscillator();
        const subGain = audioCtx.createGain();
        subOsc.connect(subGain);
        subGain.connect(audioCtx.destination);
        subOsc.frequency.setValueAtTime(freq, now + i * 0.08);
        subGain.gain.setValueAtTime(0.1, now + i * 0.08);
        subGain.gain.linearRampToValueAtTime(0.01, now + i * 0.08 + 0.15);
        subOsc.start(now + i * 0.08);
        subOsc.stop(now + i * 0.08 + 0.15);
      });
    }
  } catch (err) {
    // Дыбыс ойнату қолдау таппаса қатесіз өткізу
  }
}

// ========================================================
// 7. ЖҮЙКЕ ЖЕЛІСІ / БӨЛШЕКТЕР КАНВАС АНИМАЦИЯСЫ (LIGHT THEME)
// ========================================================
function initNeuralCanvas() {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 22000), 65);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2,
      color: Math.random() > 0.5 ? "#2563eb" : "#7c3aed"
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Бөлшектерді жаңарту және салу
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Түйіндерді байланыстыратын сызықтар
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.14 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Тінтуірмен байланыс
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < 130) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(124, 58, 237, ${0.28 * (1 - mDist / 130)})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// ========================================================
// 8. UI БАСҚАРУ ЖӘНЕ СТАТИСТИКА
// ========================================================
function getUserRank(xp) {
  if (xp >= 800) return "Информатика Гроссмейстері 👑";
  if (xp >= 500) return "Кибер-Қауіпсіздік Аналитигі 🛡️";
  if (xp >= 280) return "Желілік Архитектор 🌐";
  if (xp >= 120) return "Python Бағдарламашысы 🐍";
  return "Кибер-Бастаушы ⚡";
}

function updateUIHeaderStats() {
  const xpEl = document.getElementById("user-xp");
  const rankEl = document.getElementById("user-rank");
  if (xpEl) xpEl.textContent = appState.xp;
  if (rankEl) rankEl.textContent = getUserRank(appState.xp);

  // Прогресс барын жаңарту
  const completedCount = appState.completedTopics.length;
  const totalCount = TOPICS_DATA.length;
  const pct = Math.round((completedCount / totalCount) * 100);

  const pctEl = document.getElementById("overall-percentage");
  const barEl = document.getElementById("overall-progress-bar");
  const txtEl = document.getElementById("progress-status-text");

  if (pctEl) pctEl.textContent = `${pct}%`;
  if (barEl) barEl.style.width = `${pct}%`;
  if (txtEl) txtEl.textContent = `${totalCount} тақырыптың ${completedCount}-і аяқталды`;

  // Тоқсандар бойынша шағын статистика
  const qStats = { q1: 0, q2: 0, q3: 0, q4: 0 };
  const qTotals = { q1: 4, q2: 4, q3: 5, q4: 3 };

  appState.completedTopics.forEach((id) => {
    const topic = TOPICS_DATA.find((t) => t.id === id);
    if (topic && qStats[topic.quarter] !== undefined) {
      qStats[topic.quarter]++;
    }
  });

  const q1Mini = document.getElementById("q1-mini-stat");
  const q2Mini = document.getElementById("q2-mini-stat");
  const q3Mini = document.getElementById("q3-mini-stat");
  const q4Mini = document.getElementById("q4-mini-stat");

  if (q1Mini) q1Mini.innerHTML = `1-тоқсан: <span>${qStats.q1}/${qTotals.q1}</span>`;
  if (q2Mini) q2Mini.innerHTML = `2-тоқсан: <span>${qStats.q2}/${qTotals.q2}</span>`;
  if (q3Mini) q3Mini.innerHTML = `3-тоқсан: <span>${qStats.q3}/${qTotals.q3}</span>`;
  if (q4Mini) q4Mini.innerHTML = `4-тоқсан: <span>${qStats.q4}/${qTotals.q4}</span>`;
}

function addXP(amount) {
  appState.xp += amount;
  playCyberSound("levelup");
  saveState();
}

function checkAutoAchievements() {
  let newlyUnlocked = false;

  // 1 тақырып оқылды
  if (appState.completedTopics.length >= 1 && !appState.unlockedAchievements.includes("first-step")) {
    appState.unlockedAchievements.push("first-step");
    newlyUnlocked = true;
  }
  // Барлық 16 тақырып
  if (appState.completedTopics.length >= 16 && !appState.unlockedAchievements.includes("grandmaster")) {
    appState.unlockedAchievements.push("grandmaster");
    newlyUnlocked = true;
  }
  // 300+ XP
  if (appState.xp >= 300 && !appState.unlockedAchievements.includes("xp-champion")) {
    appState.unlockedAchievements.push("xp-champion");
    newlyUnlocked = true;
  }
  // 4-тоқсан толық (3 тақырып)
  const q4Done = TOPICS_DATA.filter((t) => t.quarter === "q4").every((t) => appState.completedTopics.includes(t.id));
  if (q4Done && !appState.unlockedAchievements.includes("db-analyst")) {
    appState.unlockedAchievements.push("db-analyst");
    newlyUnlocked = true;
  }

  if (newlyUnlocked) {
    try {
      localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {}
  }
}

// ========================================================
// 9. ОҚУ КАРТОЧКАЛАРЫН ГЕНЕРАЦИЯЛАУ ЖӘНЕ СҮЗГІЛЕУ
// ========================================================
let currentFilter = "all";
let currentSearch = "";

function renderTopicsGrid() {
  const container = document.getElementById("topics-grid");
  const noResults = document.getElementById("no-results");
  if (!container) return;

  container.innerHTML = "";

  const filtered = TOPICS_DATA.filter((topic) => {
    const matchesFilter = currentFilter === "all" || topic.quarter === currentFilter;
    const s = currentSearch.toLowerCase().trim();
    const matchesSearch =
      !s ||
      topic.title.toLowerCase().includes(s) ||
      topic.desc.toLowerCase().includes(s) ||
      topic.terms.some((term) => term.toLowerCase().includes(s));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    if (noResults) noResults.classList.remove("hidden");
    return;
  } else {
    if (noResults) noResults.classList.add("hidden");
  }

  filtered.forEach((topic) => {
    const isCompleted = appState.completedTopics.includes(topic.id);
    const card = document.createElement("div");
    card.className = `topic-card glass-panel ${isCompleted ? "completed" : ""}`;
    card.id = `card-${topic.id}`;

    const quarterBadgeClass = `badge-${topic.quarter}`;

    card.innerHTML = `
      <div>
        <div class="topic-card-header">
          <div class="topic-badges">
            <span class="badge-quarter ${quarterBadgeClass}">${topic.quarterTitle}</span>
            <span class="topic-category-badge">${topic.category}</span>
          </div>
          <span class="badge-status ${isCompleted ? "done" : "pending"}">
            ${isCompleted ? "✓ Меңгерілді" : "Оқылмаған"}
          </span>
        </div>

        <div class="topic-svg-thumbnail">
          ${topic.svgThumbnail}
        </div>

        <h3 class="topic-title">${topic.title}</h3>
        <p class="topic-desc">${topic.desc}</p>
      </div>

      <div class="topic-footer">
        <button class="btn btn-glass btn-sm" onclick="openTopicModal('${topic.id}')">
          📖 Конспект
        </button>
        <button class="btn btn-primary btn-sm" onclick="openQuizModal('${topic.id}')">
          ✍️ Тест тапсыру
        </button>
      </div>
    `;

    // 3D Tilt эффектісі
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(800px) rotateX(${-y / 28}deg) rotateY(${x / 28}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

    container.appendChild(card);
  });
}

function setupFiltersAndSearch() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      playCyberSound("click");
      renderTopicsGrid();
    });
  });

  const searchInput = document.getElementById("topic-search-input");
  const clearBtn = document.getElementById("clear-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        if (currentSearch) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }
      renderTopicsGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearch = "";
      clearBtn.classList.add("hidden");
      renderTopicsGrid();
      if (searchInput) searchInput.focus();
    });
  }
}

function filterByQuarter(qKey) {
  const tab = document.querySelector(`.tab-btn[data-filter="${qKey}"]`);
  if (tab) tab.click();
}

// ========================================================
// 10. ТАҚЫРЫП ТЕОРИЯСЫ МОДАЛІ
// ========================================================
let activeTopic = null;

function openTopicModal(topicId) {
  const topic = TOPICS_DATA.find((t) => t.id === topicId);
  if (!topic) return;

  activeTopic = topic;
  playCyberSound("click");

  document.getElementById("modal-topic-quarter").textContent = topic.quarterTitle;
  document.getElementById("modal-topic-category").textContent = topic.category;
  document.getElementById("modal-topic-title").textContent = topic.title;
  document.getElementById("modal-topic-diagram").innerHTML = topic.diagramSvg;
  document.getElementById("modal-topic-content").innerHTML = topic.theory;

  const termsContainer = document.getElementById("modal-topic-terms");
  if (termsContainer) {
    termsContainer.innerHTML = `
      <h4>📌 Негізгі терминдер мен түсініктер:</h4>
      <div class="terms-chips">
        ${topic.terms.map((term) => `<span class="term-chip">${term}</span>`).join("")}
      </div>
    `;
  }

  const startQuizBtn = document.getElementById("modal-start-quiz-btn");
  if (startQuizBtn) {
    startQuizBtn.onclick = () => {
      closeModal("topic-modal");
      openQuizModal(topic.id);
    };
  }

  openModal("topic-modal");
}

// ========================================================
// 11. ТЕСТ / СЫНАҚ ЖҮЙЕСІ (QUIZ ENGINE)
// ========================================================
let currentQuizTopic = null;
let currentQIndex = 0;
let quizCorrectCount = 0;

function openQuizModal(topicId) {
  const topic = TOPICS_DATA.find((t) => t.id === topicId);
  if (!topic || !topic.quiz || topic.quiz.length === 0) return;

  currentQuizTopic = topic;
  currentQIndex = 0;
  quizCorrectCount = 0;
  playCyberSound("click");

  renderCurrentQuizQuestion();
  openModal("quiz-modal");
}

function renderCurrentQuizQuestion() {
  const question = currentQuizTopic.quiz[currentQIndex];
  const total = currentQuizTopic.quiz.length;

  document.getElementById("quiz-q-num").textContent = `Сұрақ ${currentQIndex + 1}/${total}`;
  const fillPct = Math.round(((currentQIndex + 1) / total) * 100);
  document.getElementById("quiz-mini-fill").style.width = `${fillPct}%`;

  document.getElementById("quiz-question-title").textContent = question.q;

  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";

  const feedbackBox = document.getElementById("quiz-feedback-box");
  feedbackBox.classList.add("hidden");
  feedbackBox.className = "quiz-feedback-box hidden";

  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.classList.add("hidden");

  question.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + idx)})</span> <span>${optText}</span>`;
    btn.onclick = () => selectQuizAnswer(idx, btn);
    container.appendChild(btn);
  });
}

function selectQuizAnswer(selectedIndex, buttonEl) {
  const question = currentQuizTopic.quiz[currentQIndex];
  const allBtns = document.querySelectorAll(".quiz-option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const feedbackBox = document.getElementById("quiz-feedback-box");
  const feedbackTitle = document.getElementById("quiz-feedback-title");
  const feedbackDesc = document.getElementById("quiz-feedback-desc");
  const nextBtn = document.getElementById("quiz-next-btn");

  feedbackBox.classList.remove("hidden");

  if (selectedIndex === question.correct) {
    quizCorrectCount++;
    buttonEl.classList.add("correct");
    feedbackBox.classList.add("correct");
    feedbackTitle.textContent = "✓ Дұрыс жауап!";
    feedbackDesc.textContent = question.exp;
    playCyberSound("success");
  } else {
    buttonEl.classList.add("incorrect");
    if (allBtns[question.correct]) {
      allBtns[question.correct].classList.add("correct");
    }
    feedbackBox.classList.add("incorrect");
    feedbackTitle.textContent = "✗ Қате жауап";
    feedbackDesc.textContent = question.exp;
    playCyberSound("error");
  }

  nextBtn.classList.remove("hidden");
  const isLast = currentQIndex >= currentQuizTopic.quiz.length - 1;
  nextBtn.textContent = isLast ? "Нәтижені көру" : "Келесі сұрақ ➔";
  nextBtn.onclick = () => {
    if (isLast) {
      finishQuiz();
    } else {
      currentQIndex++;
      renderCurrentQuizQuestion();
    }
  };
}

function finishQuiz() {
  closeModal("quiz-modal");

  const total = currentQuizTopic.quiz.length;
  const isSuccess = quizCorrectCount >= 2;
  const earnedXp = isSuccess ? 30 : 10;

  if (isSuccess && !appState.completedTopics.includes(currentQuizTopic.id)) {
    appState.completedTopics.push(currentQuizTopic.id);
  }

  addXP(earnedXp);

  if (quizCorrectCount === total && !appState.unlockedAchievements.includes("quiz-master")) {
    appState.unlockedAchievements.push("quiz-master");
  }

  document.getElementById("res-badge-icon").textContent = isSuccess ? "🏆" : "💡";
  document.getElementById("res-title-text").textContent = isSuccess ? "Керемет нәтиже!" : "Жақсы талпыныс!";
  document.getElementById("res-desc-text").textContent = isSuccess
    ? `Сіз бұл тақырыпты сәтті меңгердіңіз және жаңа XP ұпайларын қостыңыз.`
    : `Тесттен өту үшін кемінде 2 сұраққа дұрыс жауап беру керек. Конспектті қайта оқып көріңіз.`;
  document.getElementById("res-correct-count").textContent = `${quizCorrectCount} / ${total}`;
  document.getElementById("res-earned-xp").textContent = `+${earnedXp} XP`;

  saveState();
  renderTopicsGrid();
  openModal("quiz-result-modal");
}

// ========================================================
// 12. 1-ОЙЫН: PYTHON BUG HUNTER & CODE RUNNER ЛОГИКАСЫ
// ========================================================
let currentPyLevel = 0;
let pySelectedOption = null;

function initPythonGame() {
  currentPyLevel = appState.gameStats.pythonLevel || 0;
  if (currentPyLevel >= PYTHON_GAME_LEVELS.length) currentPyLevel = 0;
  renderPythonGameLevel();
}

function renderPythonGameLevel() {
  const levelData = PYTHON_GAME_LEVELS[currentPyLevel];
  if (!levelData) return;

  pySelectedOption = null;

  document.getElementById("py-level-indicator").textContent = `Деңгей: ${levelData.level}/${PYTHON_GAME_LEVELS.length}`;
  document.getElementById("py-task-title").textContent = levelData.title;
  document.getElementById("py-task-instruction").textContent = levelData.task;

  // Код редакторы
  const codeEl = document.querySelector("#py-code-view code");
  if (codeEl) codeEl.textContent = levelData.code;

  // Жол нөмірлері
  const lineCount = levelData.code.split("\n").length;
  const linesEl = document.getElementById("py-line-numbers");
  if (linesEl) {
    let linesHtml = "";
    for (let i = 1; i <= Math.max(lineCount, 4); i++) linesHtml += `${i}<br>`;
    linesEl.innerHTML = linesHtml;
  }

  // Нұсқалар
  const choicesContainer = document.getElementById("py-choices-container");
  choicesContainer.innerHTML = "";

  levelData.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "py-choice-btn";
    btn.innerHTML = `<code>${escapeHtml(opt.text)}</code>`;
    btn.onclick = () => {
      document.querySelectorAll(".py-choice-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      pySelectedOption = opt;
      playCyberSound("click");
    };
    choicesContainer.appendChild(btn);
  });

  // Батырмалар күйі
  document.getElementById("py-run-btn").classList.remove("hidden");
  document.getElementById("py-next-level-btn").classList.add("hidden");
  const hintText = document.getElementById("py-hint-text");
  if (hintText) hintText.classList.add("hidden");

  // Терминал хабарламасы
  const term = document.getElementById("py-terminal-output");
  if (term) {
    term.innerHTML = `<span class="term-prompt">user@kazakhstan-edu:~$</span> Бағдарламаны тексеру үшін дұрыс нұсқаны таңдап, «Кодты іске қосу» түймесін басыңыз.`;
  }
}

function runPythonCode() {
  if (!pySelectedOption) {
    alert("Алдымен түзету нұсқаларының бірін таңдаңыз!");
    return;
  }

  const levelData = PYTHON_GAME_LEVELS[currentPyLevel];
  const term = document.getElementById("py-terminal-output");

  if (pySelectedOption.isCorrect) {
    playCyberSound("success");
    term.innerHTML = `<span class="term-prompt">user@kazakhstan-edu:~$</span> Орындалуда...\n\n${escapeHtml(
      levelData.outputSuccess
    )}\n\n<span style="color:#38bdf8; font-weight:bold;">🎉 ТАМАША! Қате сәтті жөнделді (+20 XP)</span>`;
    
    addXP(20);

    if (currentPyLevel + 1 > appState.gameStats.pythonLevel) {
      appState.gameStats.pythonLevel = currentPyLevel + 1;
    }

    if (appState.gameStats.pythonLevel >= 3 && !appState.unlockedAchievements.includes("python-guru")) {
      appState.unlockedAchievements.push("python-guru");
    }

    saveState();

    document.getElementById("py-run-btn").classList.add("hidden");
    const nextBtn = document.getElementById("py-next-level-btn");
    nextBtn.classList.remove("hidden");

    if (currentPyLevel >= PYTHON_GAME_LEVELS.length - 1) {
      nextBtn.textContent = "🏆 Барлық деңгей аяқталды!";
      nextBtn.onclick = () => closeModal("game-python-modal");
    } else {
      nextBtn.textContent = "Келесі деңгейге өту ➔";
      nextBtn.onclick = () => {
        currentPyLevel++;
        renderPythonGameLevel();
      };
    }
  } else {
    playCyberSound("error");
    term.innerHTML = `<span class="term-prompt">user@kazakhstan-edu:~$</span> python solution.py\n<span style="color:#f87171">ҚАТЕ (Error):</span> ${escapeHtml(
      pySelectedOption.exp
    )}\nҚайта көріңіз!`;
  }
}

// ========================================================
// 13. 2-ОЙЫН: КИБЕР-ЖЕЛІ ҚҰРАСТЫРУШЫ (NETWORK BUILDER)
// ========================================================
let activeNetMissionIndex = 0;
let userCables = []; // [ ["wan", "router"], ... ]
let selectedSourceNode = null;

function initNetworkGame() {
  setNetworkMission(0);
}

function setNetworkMission(index) {
  activeNetMissionIndex = index;
  userCables = [];
  selectedSourceNode = null;

  const mission = NETWORK_MISSIONS[index];
  if (!mission) return;

  document.getElementById("net-mission-indicator").textContent = `Миссия: ${mission.id}/${NETWORK_MISSIONS.length}`;
  document.getElementById("net-mission-title").textContent = mission.title;
  document.getElementById("net-mission-desc").textContent = mission.desc;

  const statusBadge = document.getElementById("net-status-badge");
  statusBadge.className = "badge-status-waiting";
  statusBadge.textContent = "Күтілуде";

  document.getElementById("net-ping-log").textContent =
    "Құрылғыларды логикалық тұрғыда өзара байланыстырып, соңында «Пакет жіберу (Ping & Test)» батырмасын басыңыз.";

  renderNetworkBoard();
}

function renderNetworkBoard() {
  const mission = NETWORK_MISSIONS[activeNetMissionIndex];
  const nodesContainer = document.getElementById("net-nodes-container");
  const svgCables = document.getElementById("net-cables-svg");
  if (!nodesContainer || !svgCables) return;

  nodesContainer.innerHTML = "";
  svgCables.innerHTML = "";

  // 1. Құрылғы түйіндерін орналастыру
  mission.nodes.forEach((node) => {
    const el = document.createElement("div");
    el.className = `net-device-node ${selectedSourceNode === node.id ? "selected" : ""}`;
    el.id = `node-${node.id}`;
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;

    el.innerHTML = `
      <div class="device-icon-box">${node.icon}</div>
      <span class="device-label">${node.label}</span>
      <span class="device-ip">${node.ip}</span>
    `;

    el.onclick = () => handleNodeClick(node.id);
    nodesContainer.appendChild(el);
  });

  // 2. Сымдарды SVG арқылы сызу
  drawNetworkCables();
}

function handleNodeClick(nodeId) {
  playCyberSound("click");
  const statusLabel = document.getElementById("net-connect-status");

  if (!selectedSourceNode) {
    selectedSourceNode = nodeId;
    const mission = NETWORK_MISSIONS[activeNetMissionIndex];
    const node = mission.nodes.find((n) => n.id === nodeId);
    if (statusLabel) statusLabel.textContent = `Таңдалды: [${node ? node.label : nodeId}]. Енді екінші құрылғыны нұқыңыз...`;
  } else {
    if (selectedSourceNode === nodeId) {
      selectedSourceNode = null;
      if (statusLabel) statusLabel.textContent = "Таңдау алынып тасталды.";
    } else {
      // Қосу немесе байланысты тексеру
      const pair = [selectedSourceNode, nodeId].sort();
      const alreadyExists = userCables.some((c) => c[0] === pair[0] && c[1] === pair[1]);

      if (alreadyExists) {
        // Бар байланысты өшіру
        userCables = userCables.filter((c) => !(c[0] === pair[0] && c[1] === pair[1]));
        if (statusLabel) statusLabel.textContent = "Байланыс сымы ажыратылды.";
      } else {
        userCables.push(pair);
        if (statusLabel) statusLabel.textContent = "Жаңа сым тартылды!";
        playCyberSound("success");
      }
      selectedSourceNode = null;
    }
  }
  renderNetworkBoard();
}

function drawNetworkCables() {
  const mission = NETWORK_MISSIONS[activeNetMissionIndex];
  const svg = document.getElementById("net-cables-svg");
  if (!svg) return;
  svg.innerHTML = "";

  userCables.forEach((pair) => {
    const nodeA = mission.nodes.find((n) => n.id === pair[0]);
    const nodeB = mission.nodes.find((n) => n.id === pair[1]);
    if (!nodeA || !nodeB) return;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${nodeA.x}%`);
    line.setAttribute("y1", `${nodeA.y}%`);
    line.setAttribute("x2", `${nodeB.x}%`);
    line.setAttribute("y2", `${nodeB.y}%`);
    line.setAttribute("stroke", "#2563eb");
    line.setAttribute("stroke-width", "3.5");
    line.setAttribute("stroke-dasharray", "4");
    line.setAttribute("class", "anim-wire");

    svg.appendChild(line);
  });
}

function testNetworkTopology() {
  const mission = NETWORK_MISSIONS[activeNetMissionIndex];
  const pingLog = document.getElementById("net-ping-log");
  const statusBadge = document.getElementById("net-status-badge");

  // Барлық қажетті байланыстардың бар-жоғын салыстыру
  const required = mission.requiredConnections.map((pair) => [...pair].sort());
  const user = userCables.map((pair) => [...pair].sort());

  let allMatches = true;
  if (required.length !== user.length) {
    allMatches = false;
  } else {
    for (let req of required) {
      const found = user.some((u) => u[0] === req[0] && u[1] === req[1]);
      if (!found) {
        allMatches = false;
        break;
      }
    }
  }

  if (allMatches) {
    playCyberSound("success");
    statusBadge.className = "badge-status-success";
    statusBadge.textContent = "Сәтті (Online)";

    pingLog.innerHTML = `
      PING 8.8.8.8 (WAN Gateway): 64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=4.32 ms\n
      [+] Барлық желілік маршруттар дұрыс тұйықталды!\n
      [+] Трафик сүзгісінен және коммутатордан пакеттер кедергісіз өтті.\n
      🎉 МИССИЯ ТОЛЫҚ ОРЫНДАЛДЫ! (+60 XP)
    `;

    addXP(60);

    if (!appState.gameStats.networkMissionsCompleted.includes(mission.id)) {
      appState.gameStats.networkMissionsCompleted.push(mission.id);
    }
    if (!appState.unlockedAchievements.includes("net-architect")) {
      appState.unlockedAchievements.push("net-architect");
    }
    saveState();
  } else {
    playCyberSound("error");
    statusBadge.className = "badge-status-fail";
    statusBadge.textContent = "Байланыс үзілді";

    pingLog.innerHTML = `
      PING 8.8.8.8: Destination Host Unreachable.\n
      [!] Қате: Кейбір құрылғылар арасында сым жоқ немесе артық жалғанған.\n
      Миссия нұсқаулығын қайта оқып, құрылғыларды сұлбаға сай қосыңыз!
    `;
  }
}

// ========================================================
// 14. 3-ОЙЫН: BINARY DECRYPTER ЛОГИКАСЫ
// ========================================================
let binGameTimer = null;
let binTimeLeft = 60;
let binScore = 0;
let binCombo = 1;
let binTargetDecimal = 42;
let binCurrentBits = [0, 0, 0, 0, 0, 0, 0, 0]; // 128, 64, 32, 16, 8, 4, 2, 1

function initBinaryGame() {
  binScore = 0;
  binCombo = 1;
  document.getElementById("bin-score").textContent = binScore;
  document.getElementById("bin-combo").textContent = `x${binCombo}`;
  document.getElementById("bin-highscore").textContent = appState.gameStats.binaryHighScore || 0;
  resetBinGameBits();
  generateNewBinChallenge();
}

function startBinaryGameRound() {
  clearInterval(binGameTimer);
  binTimeLeft = 60;
  binScore = 0;
  binCombo = 1;
  updateBinStatsUI();
  generateNewBinChallenge();

  const timerEl = document.getElementById("bin-timer-display");
  binGameTimer = setInterval(() => {
    binTimeLeft--;
    if (timerEl) timerEl.textContent = `⏱ ${binTimeLeft} сек`;
    if (binTimeLeft <= 0) {
      clearInterval(binGameTimer);
      finishBinaryGame();
    }
  }, 1000);
}

function generateNewBinChallenge() {
  // 1 мен 255 арасындағы кездейсоқ сан
  binTargetDecimal = Math.floor(Math.random() * 200) + 5;
  document.getElementById("bin-target-val").textContent = binTargetDecimal;
  resetBinGameBits();
}

function renderBinGameSwitches() {
  const container = document.getElementById("bin-game-switches");
  if (!container) return;
  container.innerHTML = "";

  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  weights.forEach((w, idx) => {
    const col = document.createElement("div");
    col.className = "bit-col";
    col.innerHTML = `
      <span class="bit-weight">${w}</span>
      <button class="bit-btn ${binCurrentBits[idx] ? "active" : ""}" id="game-bit-${idx}">
        ${binCurrentBits[idx]}
      </button>
    `;
    const btn = col.querySelector("button");
    btn.onclick = () => toggleGameBit(idx);
    container.appendChild(col);
  });

  updateBinCurrentSum();
}

function toggleGameBit(idx) {
  binCurrentBits[idx] = binCurrentBits[idx] === 1 ? 0 : 1;
  playCyberSound("click");
  renderBinGameSwitches();
}

function resetBinGameBits() {
  binCurrentBits = [0, 0, 0, 0, 0, 0, 0, 0];
  renderBinGameSwitches();
}

function calculateBinSum() {
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  return binCurrentBits.reduce((acc, bit, idx) => acc + bit * weights[idx], 0);
}

function updateBinCurrentSum() {
  const sum = calculateBinSum();
  const sumEl = document.getElementById("bin-current-sum");
  const binEl = document.getElementById("bin-current-bin");
  if (sumEl) sumEl.textContent = sum;
  if (binEl) binEl.textContent = `(${binCurrentBits.join("")})`;
}

function checkBinaryAnswer() {
  const userSum = calculateBinSum();
  if (userSum === binTargetDecimal) {
    playCyberSound("success");
    const points = 10 * binCombo;
    binScore += points;
    binCombo++;
    updateBinStatsUI();
    generateNewBinChallenge();
  } else {
    playCyberSound("error");
    binCombo = 1;
    updateBinStatsUI();
    alert(`Қате! Сіз жинаған сан: ${userSum}, ал қажет сан: ${binTargetDecimal}.`);
  }
}

function updateBinStatsUI() {
  document.getElementById("bin-score").textContent = binScore;
  document.getElementById("bin-combo").textContent = `x${binCombo}`;
}

function finishBinaryGame() {
  playCyberSound("levelup");
  if (binScore > (appState.gameStats.binaryHighScore || 0)) {
    appState.gameStats.binaryHighScore = binScore;
  }

  const xpReward = Math.min(Math.floor(binScore / 2), 150);
  addXP(xpReward);

  if (binScore >= 100 && !appState.unlockedAchievements.includes("binary-hacker")) {
    appState.unlockedAchievements.push("binary-hacker");
  }

  saveState();

  alert(`⏱ Уақыт аяқталды!\nСіздің ұпайыңыз: ${binScore}\nҚосылған XP: +${xpReward}`);
}

// ========================================================
// 15. КИБЕР-ҚҰРАЛДАР: 8-БИТ КАТАЛОГЫ ЖӘНЕ IP АНАЛИЗАТОРЫ
// ========================================================
let toolBits = [0, 0, 0, 0, 0, 0, 0, 0]; // 128..1

function initCyberToolkit() {
  const bitButtons = document.querySelectorAll("#bit-switches-row .bit-btn");
  bitButtons.forEach((btn) => {
    btn.onclick = () => {
      const bitIndex = 7 - parseInt(btn.getAttribute("data-bit"));
      toolBits[bitIndex] = toolBits[bitIndex] === 1 ? 0 : 1;
      playCyberSound("click");
      updateToolBitUI();
    };
  });

  const decInput = document.getElementById("input-dec");
  if (decInput) {
    decInput.addEventListener("input", (e) => {
      let val = parseInt(e.target.value);
      if (isNaN(val)) val = 0;
      if (val < 0) val = 0;
      if (val > 255) val = 255;

      // Децималды 8 битке түрлендіру
      for (let i = 7; i >= 0; i--) {
        toolBits[7 - i] = (val >> i) & 1;
      }
      updateToolBitUI(false);
    });
  }

  const resetBitsBtn = document.getElementById("reset-bits-btn");
  if (resetBitsBtn) {
    resetBitsBtn.onclick = () => {
      toolBits = [0, 0, 0, 0, 0, 0, 0, 0];
      if (decInput) decInput.value = "";
      updateToolBitUI();
    };
  }

  // IP Анализатор
  const analyzeBtn = document.getElementById("analyze-ip-btn");
  if (analyzeBtn) {
    analyzeBtn.onclick = runIpAnalyzer;
  }
}

function updateToolBitUI(updateInput = true) {
  const bitButtons = document.querySelectorAll("#bit-switches-row .bit-btn");
  bitButtons.forEach((btn, idx) => {
    const bitVal = toolBits[idx];
    btn.textContent = bitVal;
    if (bitVal === 1) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const decVal = toolBits.reduce((acc, b, i) => acc + b * weights[i], 0);

  document.getElementById("calc-dec-val").textContent = decVal;
  document.getElementById("calc-bin-val").textContent = toolBits.join("");
  document.getElementById("calc-hex-val").textContent = "0x" + decVal.toString(16).toUpperCase().padStart(2, "0");

  let charVal = "-";
  if (decVal >= 32 && decVal <= 126) {
    charVal = `'${String.fromCharCode(decVal)}'`;
  }
  document.getElementById("calc-char-val").textContent = charVal;

  if (updateInput) {
    const decInput = document.getElementById("input-dec");
    if (decInput && decVal > 0) decInput.value = decVal;
  }
}

function runIpAnalyzer() {
  playCyberSound("click");
  const ipStr = document.getElementById("ip-input").value.trim();
  const maskStr = document.getElementById("mask-select").value;

  const ipParts = ipStr.split(".").map(Number);
  const maskParts = maskStr.split(".").map(Number);

  if (ipParts.length !== 4 || ipParts.some((p) => isNaN(p) || p < 0 || p > 255)) {
    alert("Қате IP адрес! 0-ден 255-ке дейінгі 4 санды нүктемен енгізіңіз (мыс: 192.168.1.45).");
    return;
  }

  // Network ID есептеу (биттік AND)
  const netParts = ipParts.map((p, i) => p & maskParts[i]);
  // Broadcast есептеу
  const bcastParts = ipParts.map((p, i) => p | (~maskParts[i] & 255));

  document.getElementById("res-net-id").textContent = netParts.join(".");
  document.getElementById("res-broadcast").textContent = bcastParts.join(".");

  let hostCount = 254;
  if (maskStr === "255.255.0.0") hostCount = 65534;
  else if (maskStr === "255.0.0.0") hostCount = 16777214;
  else if (maskStr === "255.255.255.128") hostCount = 126;

  document.getElementById("res-hosts").textContent = `${hostCount.toLocaleString()} құрылғы`;

  let ipType = "Жария (Ғаламтор / Public)";
  if (ipParts[0] === 10) ipType = "Жеке (Локальді Class A)";
  else if (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) ipType = "Жеке (Локальді Class B)";
  else if (ipParts[0] === 192 && ipParts[1] === 168) ipType = "Жеке (Локальді мектеп/үй Class C)";
  else if (ipParts[0] === 127) ipType = "Loopback (Тұйық / Өзіне сілтеме)";

  document.getElementById("res-type").textContent = ipType;
}

// ========================================================
// 16. ЖЕТІСТІКТЕР МЕН МЕДАЛЬДАР МОДАЛІ
// ========================================================
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;
  container.innerHTML = "";

  ACHIEVEMENTS_DATA.forEach((ach) => {
    const isUnlocked = appState.unlockedAchievements.includes(ach.id);
    const card = document.createElement("div");
    card.className = `achievement-card ${isUnlocked ? "unlocked" : "locked"}`;
    card.innerHTML = `
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-info">
        <h4>${ach.title} ${isUnlocked ? "✓" : "🔒"}</h4>
        <p>${ach.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ========================================================
// 17. МОДАЛЬ БАСҚАРУ ЖӘНЕ ЖАЛПЫ ДИАЛОГТАР
// ========================================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

function openGame(gameKey) {
  playCyberSound("click");
  if (gameKey === "python") {
    initPythonGame();
    openModal("game-python-modal");
  } else if (gameKey === "network") {
    initNetworkGame();
    openModal("game-network-modal");
  } else if (gameKey === "binary") {
    initBinaryGame();
    openModal("game-binary-modal");
  }
}

// ESC пернесі арқылы модальды жабу
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay").forEach((modal) => {
      modal.classList.add("hidden");
    });
    document.body.style.overflow = "auto";
  }
});

// Сыртқы фонда басқанда жабу
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
});

// HTML-ді тазарту функциясы
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ========================================================
// 18. БАСТАПҚЫ ИНИЦИАЛИЗАЦИЯ (DOM CONTENT LOADED)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initNeuralCanvas();
  renderTopicsGrid();
  setupFiltersAndSearch();
  initCyberToolkit();
  updateUIHeaderStats();

  // Мобильді мәзір батырмасы
  const mobileBtn = document.getElementById("mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Дыбысты өшіріп/қосу батырмасы
  const soundBtn = document.getElementById("sound-btn");
  const iconOn = document.getElementById("sound-icon-on");
  const iconOff = document.getElementById("sound-icon-off");

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      appState.soundEnabled = !appState.soundEnabled;
      if (appState.soundEnabled) {
        iconOn.classList.remove("hidden");
        iconOff.classList.add("hidden");
        playCyberSound("click");
      } else {
        iconOn.classList.add("hidden");
        iconOff.classList.remove("hidden");
      }
      saveState();
    });
  }

  // Жетістіктерді ашу батырмасы
  const achBtn = document.getElementById("open-achievements-btn");
  if (achBtn) {
    achBtn.addEventListener("click", () => {
      renderAchievements();
      openModal("achievements-modal");
    });
  }

  // Hero батырмасы
  const heroProgBtn = document.getElementById("hero-progress-btn");
  if (heroProgBtn) {
    heroProgBtn.addEventListener("click", () => {
      renderAchievements();
      openModal("achievements-modal");
    });
  }

  // Прогресті нөлдеу батырмасы
  const resetBtn = document.getElementById("reset-progress-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Барлық оқу прогресі мен XP ұпайларын қайта нөлдеуді қалайсыз ба?")) {
        localStorage.removeItem(STATE_STORAGE_KEY);
        appState = {
          xp: 0,
          completedTopics: [],
          completedQuizzes: {},
          unlockedAchievements: [],
          gameStats: { pythonLevel: 0, networkMissionsCompleted: [], binaryHighScore: 0 },
          soundEnabled: true
        };
        updateUIHeaderStats();
        renderTopicsGrid();
        playCyberSound("click");
        alert("Прогресс сәтті қалпына келтірілді!");
      }
    });
  }

  // Ойын 1 оқиғалары
  const pyRunBtn = document.getElementById("py-run-btn");
  if (pyRunBtn) pyRunBtn.onclick = runPythonCode;

  const pyHintBtn = document.getElementById("py-hint-btn");
  if (pyHintBtn) {
    pyHintBtn.onclick = () => {
      const hintText = document.getElementById("py-hint-text");
      const currentLevel = PYTHON_GAME_LEVELS[currentPyLevel];
      const correctOpt = currentLevel.options.find((o) => o.isCorrect);
      if (hintText && correctOpt) {
        hintText.textContent = `Кеңес: ${correctOpt.exp}`;
        hintText.classList.remove("hidden");
        if (appState.xp >= 5) appState.xp -= 5;
        saveState();
      }
    };
  }

  const pyClearTerm = document.getElementById("py-clear-term");
  if (pyClearTerm) {
    pyClearTerm.onclick = () => {
      const term = document.getElementById("py-terminal-output");
      if (term) term.innerHTML = `<span class="term-prompt">user@kazakhstan-edu:~$</span> Терминал тазартылды.`;
    };
  }

  // Ойын 2 оқиғалары
  const netTestBtn = document.getElementById("net-test-btn");
  if (netTestBtn) netTestBtn.onclick = testNetworkTopology;

  const netClearBtn = document.getElementById("net-mode-clear");
  if (netClearBtn) {
    netClearBtn.onclick = () => {
      userCables = [];
      selectedSourceNode = null;
      renderNetworkBoard();
      playCyberSound("click");
    };
  }

  // Ойын 3 оқиғалары
  const binStartBtn = document.getElementById("bin-start-btn");
  if (binStartBtn) binStartBtn.onclick = startBinaryGameRound;

  const binSubmitBtn = document.getElementById("bin-submit-btn");
  if (binSubmitBtn) binSubmitBtn.onclick = checkBinaryAnswer;

  const binResetBtn = document.getElementById("bin-reset-btn");
  if (binResetBtn) binResetBtn.onclick = resetBinGameBits;
});
