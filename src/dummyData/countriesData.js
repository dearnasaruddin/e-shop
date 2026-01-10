const countries = [
    {
        countryName: "Indonesia",
        states: [
            { state: "Jawa Barat", cities: ["Bandung", "Bekasi", "Depok", "Bogor", "Cimahi", "Cirebon", "Sukabumi", "Tasikmalaya", "Karawang", "Purwakarta"] },
            { state: "Kalimantan Timur", cities: ["Samarinda", "Balikpapan", "Bontang", "Tenggarong", "Tarakan", "Melak", "Sangatta", "Penajam", "Tana Grogot", "Sendawar"] },
            { state: "Bali", cities: ["Denpasar", "Singaraja", "Tabanan", "Gianyar", "Bangli", "Klungkung", "Amlapura", "Negara", "Ubud", "Kuta"] },
            { state: "Jawa Tengah", cities: ["Semarang", "Surakarta", "Pekalongan", "Salatiga", "Kudus", "Purwokerto", "Tegal", "Magelang", "Klaten", "Cilacap"] },
            { state: "Sulawesi Selatan", cities: ["Makassar", "Parepare", "Palopo", "Maros", "Gowa", "Bulukumba", "Bone", "Soppeng", "Bantaeng", "Selayar"] },
            { state: "Jawa Timur", cities: ["Surabaya", "Malang", "Blitar", "Kediri", "Pasuruan", "Probolinggo", "Madiun", "Mojokerto", "Ngawi", "Tulungagung"] },
            { state: "Papua", cities: ["Jayapura", "Timika", "Wamena", "Nabire", "Sentani", "Serui", "Biak", "Merauke", "Fakfak", "Sorong"] },
            { state: "Sumatera Utara", cities: ["Medan", "Binjai", "Pematangsiantar", "Tebing Tinggi", "Sibolga", "Gunungsitoli", "Padang Sidempuan", "Tanjungbalai", "Deli Serdang", "Langkat"] },
            { state: "Sumatera Barat", cities: ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Sawahlunto", "Solok", "Padang Panjang", "Dharmasraya", "Tanah Datar", "Pasaman"] },
            { state: "Kalimantan Barat", cities: ["Pontianak", "Singkawang", "Sambas", "Ketapang", "Sintang", "Sanggau", "Sekadau", "Melawi", "Landak", "Mempawah"] }
        ]
    },
    {
        countryName: "United States",
        states: [
            { state: "California", cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"] },
            { state: "Texas", cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock"] },
            { state: "New York", cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"] },
            { state: "Florida", cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Pembroke Pines"] },
            { state: "Illinois", cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Elgin", "Peoria", "Champaign", "Waukegan"] },
            { state: "Ohio", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain"] },
            { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens", "Sandy Springs", "Roswell", "Albany", "Johns Creek"] },
            { state: "Pennsylvania", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Levittown", "Harrisburg"] },
            { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Greenville"] },
            { state: "Michigan", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Troy"] }
        ]
    },

    {
        countryName: "India",
        states: [
            { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Ahmednagar"] },
            { state: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Noida", "Allahabad", "Bareilly", "Aligarh"] },
            { state: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Shimoga", "Tumkur"] },
            { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul"] },
            { state: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Baharampur", "Haldia", "Kharagpur", "Darjeeling"] },
            { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Navsari"] },
            { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner", "Alwar", "Bharatpur", "Sikar", "Pali"] },
            { state: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Arrah", "Begusarai", "Purnia", "Katihar", "Munger"] },
            { state: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Kadapa", "Tirupati", "Anantapur", "Eluru"] },
            { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Satna", "Dewas", "Ratlam", "Rewa"] }
        ]
    },

    {
        countryName: "Canada",
        states: [
            { state: "Ontario", cities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor"] },
            { state: "Quebec", cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Levis", "Trois-Rivieres", "Terrebonne"] },
            { state: "British Columbia", cities: ["Vancouver", "Victoria", "Kelowna", "Abbotsford", "Nanaimo", "Kamloops", "Chilliwack", "Prince George", "Penticton", "Maple Ridge"] },
            { state: "Alberta", cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Sherwood Park", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove"] },
            { state: "Manitoba", cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Selkirk", "Winkler", "Flin Flon", "Morden", "The Pas"] },
            { state: "Nova Scotia", cities: ["Halifax", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Amherst", "Yarmouth", "Bridgewater", "Antigonish"] },
            { state: "New Brunswick", cities: ["Moncton", "Saint John", "Fredericton", "Bathurst", "Miramichi", "Edmundston", "Dieppe", "Campbellton", "Oromocto", "Shediac"] },
            { state: "Saskatchewan", cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current", "Yorkton", "Estevan", "North Battleford", "Weyburn", "Melfort"] },
            { state: "Newfoundland", cities: ["St. John's", "Corner Brook", "Mount Pearl", "Gander", "Grand Falls-Windsor", "Happy Valley-Goose Bay", "Stephenville", "Labrador City", "Marystown", "Clarenville"] },
            { state: "Prince Edward Island", cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Souris", "Kensington", "Alberton", "Georgetown", "Cardigan"] }
        ]
    },

    {
        countryName: "Brazil",
        states: [
            { state: "São Paulo", cities: ["São Paulo", "Campinas", "Santos", "São Bernardo", "Guarulhos", "Osasco", "Bauru", "Piracicaba", "Jundiaí", "Sorocaba"] },
            { state: "Rio de Janeiro", cities: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Petrópolis", "Volta Redonda", "Angra dos Reis", "Teresópolis", "Nilópolis"] },
            { state: "Minas Gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Governador Valadares", "Ipatinga", "Sete Lagoas"] },
            { state: "Bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Ilhéus", "Lauro de Freitas", "Tabuna", "Alagoinhas"] },
            { state: "Paraná", cities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "Foz do Iguaçu", "Guarapuava", "Colombo", "Paranaguá", "Araucária"] },
            { state: "Pernambuco", cities: ["Recife", "Jaboatão", "Olinda", "Caruaru", "Petrolina", "Paulista", "Camaragibe", "Garanhuns", "Igarassu", "Cabo Frio"] },
            { state: "Ceará", cities: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Crato", "Sobral", "Iguatu", "Quixadá", "Aquiraz", "Itapipoca"] },
            { state: "Santa Catarina", cities: ["Florianópolis", "Joinville", "Blumenau", "São José", "Criciúma", "Chapecó", "Itajaí", "Lages", "Jaraguá do Sul", "Palhoça"] },
            { state: "Rio Grande do Sul", cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Canoas", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Uruguaiana"] },
            { state: "Goiás", cities: ["Goiânia", "Aparecida", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas", "Trindade", "Formosa", "Catalão", "Itumbiara"] }
        ]
    },

    {
        countryName: "Australia",
        states: [
            { state: "New South Wales", cities: ["Sydney", "Newcastle", "Wollongong", "Albury", "Maitland", "Wagga Wagga", "Port Macquarie", "Tamworth", "Bathurst", "Coffs Harbour"] },
            { state: "Victoria", cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Melton", "Mildura", "Wodonga", "Warragul", "Traralgon"] },
            { state: "Queensland", cities: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba", "Rockhampton", "Mackay", "Bundaberg", "Gladstone", "Hervey Bay"] },
            { state: "Western Australia", cities: ["Perth", "Fremantle", "Mandurah", "Bunbury", "Geraldton", "Kalgoorlie", "Albany", "Karratha", "Broome", "Port Hedland"] },
            { state: "South Australia", cities: ["Adelaide", "Mount Gambier", "Whyalla", "Gawler", "Port Lincoln", "Port Pirie", "Victor Harbor", "Murray Bridge", "Port Augusta", "Naracoorte"] },
            { state: "Tasmania", cities: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Kingston", "New Norfolk", "Glenorchy", "Bellerive", "Claremont"] },
            { state: "Northern Territory", cities: ["Darwin", "Palmerston", "Alice Springs", "Katherine", "Tennant Creek", "Nhulunbuy", "Jabiru", "Batchelor", "Yulara", "Larrimah"] },
            { state: "Australian Capital Territory", cities: ["Canberra", "Gungahlin", "Belconnen", "Tuggeranong", "Woden", "Fyshwick", "Narrabundah", "Deakin", "Watson", "Chisholm"] },
            { state: "New England", cities: ["Armidale", "Glen Innes", "Tenterfield", "Inverell", "Gunnedah", "Tamworth", "Narrabri", "Cowra", "Bathurst", "Nundle"] },
            { state: "Riverina", cities: ["Wagga Wagga", "Griffith", "Leeton", "Hay", "Gundagai", "Narrandera", "Deniliquin", "Temora", "West Wyalong", "Junee"] }
        ]
    },

    {
        countryName: "Germany",
        states: [
            { state: "Bavaria", cities: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Ingolstadt", "Würzburg", "Erlangen", "Bamberg", "Fürth", "Rosenheim"] },
            { state: "Baden-Württemberg", cities: ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg", "Heidelberg", "Heilbronn", "Ulm", "Pforzheim", "Reutlingen", "Tübingen"] },
            { state: "North Rhine-Westphalia", cities: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Bochum", "Bielefeld", "Bonn", "Wuppertal", "Münster", "Gelsenkirchen"] },
            { state: "Hesse", cities: ["Frankfurt", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach", "Hanau", "Gießen", "Marburg", "Fulda", "Rüsselsheim"] },
            { state: "Saxony", cities: ["Dresden", "Leipzig", "Chemnitz", "Zwickau", "Plauen", "Görlitz", "Freiberg", "Pirna", "Radebeul", "Hoyerswerda"] },
            { state: "Berlin", cities: ["Mitte", "Charlottenburg", "Kreuzberg", "Prenzlauer Berg", "Spandau", "Neukölln", "Tempelhof", "Schöneberg", "Pankow", "Moabit"] },
            { state: "Hamburg", cities: ["Altona", "Eimsbüttel", "Harburg", "Wandsbek", "Hamburg-Mitte", "Bergedorf", "St. Pauli", "Blankenese", "Wilhelmsburg", "Rotherbaum"] },
            { state: "Brandenburg", cities: ["Potsdam", "Cottbus", "Brandenburg an der Havel", "Frankfurt (Oder)", "Oranienburg", "Eberswalde", "Falkensee", "Senftenberg", "Bernau", "Hennigsdorf"] },
            { state: "Lower Saxony", cities: ["Hanover", "Braunschweig", "Oldenburg", "Osnabrück", "Wolfsburg", "Göttingen", "Hildesheim", "Salzgitter", "Celle", "Lüneburg"] },
            { state: "Saxony-Anhalt", cities: ["Magdeburg", "Halle", "Dessau", "Wernigerode", "Stendal", "Quedlinburg", "Naumburg", "Halberstadt", "Bernburg", "Weißenfels"] }
        ]
    },

    {
        countryName: "Mexico",
        states: [
            { state: "Jalisco", cities: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonala", "Puerto Vallarta", "Tepatitlán", "El Salto", "Lagos de Moreno", "Ocotlán", "Ameca"] },
            { state: "Mexico", cities: ["Toluca", "Ecatepec", "Naucalpan", "Tlalnepantla", "Nezahualcóyotl", "Atizapán", "Chimalhuacán", "Cuautitlán", "Ixtapaluca", "Texcoco"] },
            { state: "Nuevo León", cities: ["Monterrey", "San Nicolás", "Guadalupe", "Apodaca", "San Pedro", "Escobedo", "Santa Catarina", "Cadereyta", "García", "Linares"] },
            { state: "Puebla", cities: ["Puebla", "Tehuacán", "Atlixco", "San Martín Texmelucan", "Cholula", "Amozoc", "Tecamachalco", "Huauchinango", "Cuautlancingo", "Xicotepec"] },
            { state: "Veracruz", cities: ["Veracruz", "Xalapa", "Coatzacoalcos", "Córdoba", "Poza Rica", "Orizaba", "Minatitlán", "Tuxpan", "San Andrés Tuxtla", "Boca del Río"] },
            { state: "Chihuahua", cities: ["Chihuahua", "Ciudad Juárez", "Delicias", "Hidalgo del Parral", "Cuauhtémoc", "Camargo", "Nuevo Casas Grandes", "Jiménez", "Meoqui", "Ojinaga"] },
            { state: "Yucatán", cities: ["Mérida", "Valladolid", "Tizimín", "Progreso", "Motul", "Tekax", "Peto", "Izamal", "Hunucmá", "Conkal"] },
            { state: "Sinaloa", cities: ["Culiacán", "Mazatlán", "Los Mochis", "Guamúchil", "Guasave", "Navolato", "Escuinapa", "Sinaloa de Leyva", "El Fuerte", "Rosario"] },
            { state: "Guanajuato", cities: ["León", "Irapuato", "Celaya", "Salamanca", "Guanajuato", "San Miguel de Allende", "Dolores Hidalgo", "Silao", "Valle de Santiago", "Acámbaro"] },
            { state: "Oaxaca", cities: ["Oaxaca", "Salina Cruz", "Juchitán", "San Juan Bautista Tuxtepec", "Puerto Escondido", "Huajuapan", "Pinotepa", "Tehuantepec", "Huatulco", "Tlaxiaco"] }
        ]
    },

    {
        countryName: "Japan",
        states: [
            { state: "Tokyo", cities: ["Shinjuku", "Shibuya", "Chiyoda", "Taito", "Setagaya", "Meguro", "Minato", "Itabashi", "Bunkyo", "Koto"] },
            { state: "Osaka", cities: ["Osaka", "Sakai", "Suitá", "Hirakata", "Takatsuki", "Toyonaka", "Moriguchi", "Ibaraki", "Izumi", "Kishiwada"] },
            { state: "Kyoto", cities: ["Kyoto", "Uji", "Kameoka", "Nagaokakyo", "Fukuchiyama", "Maizuru", "Yawata", "Mukō", "Jōyō", "Kyōtanabe"] },
            { state: "Hokkaido", cities: ["Sapporo", "Hakodate", "Asahikawa", "Kushiro", "Obihiro", "Kitami", "Muroran", "Tomakomai", "Ebetsu", "Otaru"] },
            { state: "Fukuoka", cities: ["Fukuoka", "Kitakyushu", "Kurume", "Omuta", "Iizuka", "Chikushino", "Tagawa", "Yukuhashi", "Koga", "Kasuga"] },
            { state: "Aichi", cities: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Seto", "Anjo", "Toyohashi", "Kasugai", "Kariya", "Inazawa"] },
            { state: "Hyogo", cities: ["Kobe", "Himeji", "Nishinomiya", "Amagasaki", "Ashiya", "Akashi", "Kakogawa", "Takarazuka", "Itami", "Miki"] },
            { state: "Hiroshima", cities: ["Hiroshima", "Fukuyama", "Kure", "Onomichi", "Hatsukaichi", "Miyoshi", "Shobara", "Takehara", "Mihara", "Ōtake"] },
            { state: "Miyagi", cities: ["Sendai", "Ishinomaki", "Shiogama", "Tagajō", "Kesennuma", "Tome", "Kurihara", "Iwanuma", "Watari", "Osaki"] },
            { state: "Chiba", cities: ["Chiba", "Funabashi", "Narashino", "Ichikawa", "Kashiwa", "Matsudo", "Nagareyama", "Yachiyo", "Sakura", "Kisarazu"] }
        ]
    },

    {
        countryName: "South Africa",
        states: [
            { state: "Western Cape", cities: ["Cape Town", "George", "Stellenbosch", "Paarl", "Worcester", "Knysna", "Mossel Bay", "Beaufort West", "Oudtshoorn", "Malmesbury"] },
            { state: "Gauteng", cities: ["Johannesburg", "Pretoria", "Soweto", "Benoni", "Tembisa", "Vereeniging", "Boksburg", "Centurion", "Krugersdorp", "Randburg"] },
            { state: "KwaZulu-Natal", cities: ["Durban", "Pietermaritzburg", "Umlazi", "Newcastle", "Richards Bay", "Empangeni", "Vryheid", "Howick", "Port Shepstone", "Margate"] },
            { state: "Eastern Cape", cities: ["East London", "Port Elizabeth", "Mthatha", "Queenstown", "Grahamstown", "Aliwal North", "Humansdorp", "Graaff-Reinet", "King William's Town", "Cradock"] },
            { state: "Limpopo", cities: ["Polokwane", "Thohoyandou", "Tzaneen", "Mokopane", "Bela-Bela", "Musina", "Phalaborwa", "Giyani", "Lebowakgomo", "Modimolle"] },
            { state: "Mpumalanga", cities: ["Nelspruit", "Witbank", "Secunda", "Siyabuswa", "Barberton", "Sabie", "Ermelo", "Bethal", "Louis Trichardt", "Komatipoort"] },
            { state: "Free State", cities: ["Bloemfontein", "Welkom", "Sasolburg", "Virginia", "Kroonstad", "Botshabelo", "Parys", "Bethlehem", "Harrismith", "Ficksburg"] },
            { state: "North West", cities: ["Rustenburg", "Mahikeng", "Klerksdorp", "Potchefstroom", "Brits", "Zeerust", "Orkney", "Lichtenburg", "Vryburg", "Stilfontein"] },
            { state: "Northern Cape", cities: ["Kimberley", "Upington", "Springbok", "Kathu", "Kuruman", "De Aar", "Colesberg", "Douglas", "Port Nolloth", "Pofadder"] },
            { state: "Zululand", cities: ["Ulundi", "Nkandla", "Nongoma", "Melmoth", "Hluhluwe", "Empuluzi", "Pongola", "Mtubatuba", "Jozini", "Mbazwana"] }
        ]
    }

]

export default countries