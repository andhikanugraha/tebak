(function(a){function n(n){for(var t,o,u=n[0],s=n[1],l=n[2],d=0,g=[];d<u.length;d++)o=u[d],i[o]&&g.push(i[o][0]),i[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t]);c&&c(n);while(g.length)g.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var a,n=0;n<r.length;n++){for(var e=r[n],t=!0,u=1;u<e.length;u++){var s=e[u];0!==i[s]&&(t=!1)}t&&(r.splice(n--,1),a=o(o.s=e[0]))}return a}var t={},i={app:0},r=[];function o(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return a[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=t,o.d=function(a,n,e){o.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:e})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,n){if(1&n&&(a=o(a)),8&n)return a;if(4&n&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&n&&"string"!=typeof a)for(var t in a)o.d(e,t,function(n){return a[n]}.bind(null,t));return e},o.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(n,"a",n),n},o.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=s;r.push([0,"chunk-vendors"]),e()})({0:function(a,n,e){a.exports=e("cd49")},"0cab":function(a,n,e){"use strict";(function(a){e.d(n,"b",function(){return p}),e.d(n,"c",function(){return M}),e.d(n,"a",function(){return K}),e.d(n,"e",function(){return j}),e.d(n,"d",function(){return D});e("96cf");var t=e("5d73"),i=e.n(t),r=e("3b8d"),o=(e("6b54"),e("28a5"),e("55dd"),e("2d7d")),u=e.n(o),s=e("445d"),l=e.n(s),c=e("d7ac"),d=e("a002"),g=e.n(d),m="|",h=e("a353"),p=new u.a,k=!0,f=!1,b=void 0;try{for(var y,S=i()(h);!(k=(y=S.next()).done);k=!0){var v=y.value;p.set(v.title,v)}}catch(N){f=!0,b=N}finally{try{k||null==S.return||S.return()}finally{if(f)throw b}}function w(a){return a.title=a.title.trim(),a.words=a.words.map(function(a){return a.trim()}).filter(function(a){return!!a}).sort(),a}function B(a){var n=w(a);return n.title+m+n.words.join(m)}function T(a){var n=a.split(m),e=n.shift()||"";return{title:e,words:n}}function C(n){var e=B(n),t=new a(Object(c["deflate"])(e));return t}function P(n){var e=Object(c["inflate"])(n),t=new a(e).toString();return T(t)}function M(n){return l.a.encode(new a(C(n)))}function K(a){var n=l.a.toBuffer(a);return P(n)}function A(){return g.a.createInstance({name:"charades"})}function I(){return G.apply(this,arguments)}function G(){return G=Object(r["a"])(regeneratorRuntime.mark(function a(){var n;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=A(),a.abrupt("return",n.getItem("categoryTitles"));case 2:case"end":return a.stop()}},a,this)})),G.apply(this,arguments)}function j(a){return L.apply(this,arguments)}function L(){return L=Object(r["a"])(regeneratorRuntime.mark(function a(n){var e,t;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(!p.get(n)){a.next=2;break}return a.abrupt("return",p.get(n));case 2:return e=A(),a.next=5,e.getItem("full:".concat(n));case 5:return t=a.sent,a.abrupt("return",P(t));case 7:case"end":return a.stop()}},a,this)})),L.apply(this,arguments)}function x(){var a=h.map(function(a){return a.title});return a.sort()}function D(){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark(function a(){var n;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,I();case 2:return a.sent,n=x(),a.abrupt("return",n.sort());case 5:case"end":return a.stop()}},a,this)})),R.apply(this,arguments)}}).call(this,e("b639").Buffer)},"21bb":function(a,n,e){"use strict";var t=e("bcc9"),i=e.n(t);i.a},"4e02":function(a,n,e){},"5c0b":function(a,n,e){"use strict";var t=e("5e27"),i=e.n(t);i.a},"5e27":function(a,n,e){},9519:function(a,n,e){"use strict";var t=e("4e02"),i=e.n(t);i.a},a353:function(a){a.exports=[{title:"Pariwisata Indonesia",words:["Masjid Baiturrahman","Pulau Mentawai","Bukittinggi","Jam Gadang","Sungai Musi","Jembatan Ampera","Pulau Lengkuas","Pulau Bintan","Belitung","Danau Kaolin","Bangka","Kelok Sembilan","Danau Singkarak","Danau Toba","Istana Maimun","Pulau Samosir","Teluk Kiluan","Taman Nasional Ujung Kulon","Tanjung Lesung","Pantai Carita","Anyer","Monas","Kepulauan Seribu","Tangkuban Perahu","Kawah Putih","Gedung Sate","Lembang","Pantai Pangandaran","Green Canyon","Keraton Kasepuhan Cirebon","Gua Sunyaragi","Gunung Salak","Gunung Pangrango","Ciwidey","Gunung Sumbing","Puncak","Dataran Tinggi Dieng","Candi Borobudur","Candi Prambanan","Museum Ullen Sentalu","Alun-Alun Yogyakarta","Keraton Yogyakarta","Keraton Solo","Pasar Klewer","Pasar Beringharjo","Jalan Malioboro","Gunung Merbabu","Gunung Merapi","Ketep Pass","Museum Nasional","Museum Kereta Api Ambarawa","Museum Gajah","Galeri Nasional","Pantai Parangtritis","Simpang Lima","Tugu Yogyakarta","Monjali","Kebun Raya Bogor","Istana Bogor","Istana Negara","Lawang Sewu","Sam Poo Kong","Gereja Blenduk","Gereja Ayam Jogja","Taman Sari","Kebun Binatang Ragunan","Benteng Vredeburg","Keraton Mangkunegaran","Taman Mini Indonesia Indah","Keong Mas TMII","Dunia Fantasi Ancol","Masjid Menara Kudus","Masjid Agung Demak","Masjid Istiqlal","Katedral Jakarta","Gunung Bromo","Kawah Ijen","Jembatan Suramadu","Taman Bungkul","Nusa Dua","Pantai Kuta","Seminyak","Ubud","Tanah Lot","Garuda Wisnu Kencana","Dreamland Beach","Canggu","Uluwatu","Gunung Agung","Pantai Senggigi","Pura Besakih","Gunung Batur","Pura Tirta Empul","Gili Trawangan","Gili Lawa","Gunung Rinjani","Danau Segara Anak","Pantai Pink","Desa Sade","Pulau Komodo","Pulau Rinca","Danau Kelimutu","Wae Rebo","Pantai Natsepa","Pulau Kei","Banda Neira","Kepulauan Banda","Kepulauan Tanimbar","Tanjung Puting","Taman Nasional Baluran","Bunaken","Taman Nasional Alas Purwo","G-Land, Banyuwangi","Lembah Baliem","Raja Ampat"]},{title:"Budaya Indonesia",words:["Tari Saman","Tari Ratoh Jaroe","Tari Legong","Tari Kecak","Tari Pendet","Barong","Tari Topeng","Debus","Tari Yapong","Tari Sirih Kuning","Tari Merak","Tari Jaipong","Wayang Golek","Wayang Orang","Wayang Kulit","Wayang Titi","Ronggeng","Tari Serimpi","Tari Bedhaya","Kuda Lumping","Reog Kendang","Reog Ponorogo","Tari Gambyong","Tari Perang","Tari Mandau","Tari Lenso","Tari Jangger","Tari Tandak","Tari Poco-poco","Tari Lilin","Tari Gending Sriwijaya","Tari Tor Tor","Tari Serampang Dua Belas","Topeng Monyet","Srimulat","Ketoprak","Buto Ijo","Malin Kundang","Bawang Merah Bawang Putih","Lutung Kasarung","Jaka Tingkir","Sangkuriang","Roro Jonggrang","Kancil","Cindelaras","Timun Mas","Cepot","Petruk","Gareng","Semar","Bagong","Pandawa Lima","Kurawa","Astina","Mahabharata","Rama Shinta","Hanoman","Anak Kambing Saya","Ayo Mama","Burung Kakatua","Bungong Jeumpa","Cik Cik Periuk","Cublak-cublak Suweng","Desaku","Gelang Sipaku Gelang","Gundhul Pacul","Jali-Jali","Keroncong Kemayoran","Kicir-Kicir","Injit-Injit Semut","Lancang Kuning","Manuk Dadali","Naik-Naik Ke Puncak Gunung","Nona Manis Siapa Yang PUnya","O Ina Ni Keke","Potong Bebek Angsa","Rasa Sayange","Sajojo","Suwe Ora Jamu","Sik Sik Sibatumanikam","Sinanggar Tulo","Timang-Timang Anakku Sayang","Tokecang","Yamko Rambe Yamko","Lompat batu nias","Ulos","Songket","Suntiang","Siger","Paes","Batik Pekalongan","Batik Jogja","Batik Solo","Lurik","Tenun Ikat","Tenun Gedog","Sarung","Batik Tulis","Batik Cap","Songket Sambas","Pakaian Kulit Kayu","Tenun Endek","Tenun Donggala","Tenun Ikat Dayak","Koto Gadang","Solo Basahan","Udeng","Sanggul","Konde","Kebaya","Teluk Belanga","Keris","Centing","Baju Bodo","Phinisi","Ondel-ondel","Roti Buaya","Lenong","Tanjidor","Organ Tunggal","Rebab","Kecapi","Ngaben","Hokkien","Khek","Tionghoa Benteng","Tiochu","Suku Asmat","Suku Dani","Suku Sasak","Dayak","Badui","Minangkabau"]},{title:"Makanan Indonesia",words:["Rendang","Ayam pop","Dendeng balado","Dendeng batokok","Gulai otak","Gulai ayam","Gulai kikil","Kerupuk rambak","Kerupuk karak","Kerupuk puli","Kerupuk kulit","Kerupuk aci","Kerupuk padang","Nasi goreng","Mie goreng","Kwetiau goreng","Mie ayam","Bubur ayam","Nasi uduk","Nasi kuning","Telur dadar","Nasi campur","Tumpeng","Nasi bogana","Gado-gado","Pecel","Karedok","Ketoprak","Asinan Betawi","Asinan Bogor","Pempek","Tekwan","Bakso","Batagor","Siomay","Baso tahu","Lumpia","Serabi","Martabak telur","Martabak manis","Bakwan","Gorengan","Cucur","Kue lumpur","Lemper","Risoles","Pastel","Bakso goreng","Kue lapis","Lapis legit","Kue mangkok","Putu","Apem","Panada","Soto Lamongan","Soto Kudus","Soto ayam","Soto betawi","Soto Madura","Tauto","Sop buntut","Sop kaki kambing","Sop iga","Ayam goreng","Ayam panggang","Ayam betutu","Ayam tangkap","Rolade","Bistik","Ayam penyet","Bebek goreng","Bebek bakar","Ayam goreng mentega","Bebek peking","Sapo tahu","Mapo tahu","Cap cay","Chee Cheong Fan","Coipan","Fuyunghai","Dim sum","Har gow/Hakau","Nasi hainan","Wonton","Suikiaw","Pepes","Lalapan","Sayur nangka","Sayur lodeh","Sayur kangkung","Sayur asem","Iga bakar","Sambal matah","Sambal bawang","Sambal tomat","Sambal luat","Sambal kecap","Sambal terasi","Sambal mangga","Sambal terong","Sambal udang","Opor ayam","Lontong opor","Lontong cap gomeh","Lontong balap","Lontong mie","Sate Madura","Sate kambing","Sate maranggi","Sate lilit","Sate buntel"]},{title:"Sejarah Indonesia",words:["Kutai","Samudera Pasai","Mataram Kuno","Mataram Islam","Majapahit","Sriwijaya","Singosari","Tarumanegara","Pajajaran","Kesultanan Demak","Kerjaan Cirebon","Gowa-Tallo","Ternate dan Tidore","VOC","Daendels","Thomas Stamford Raffles","Douwes Dekker","Multatuli","Cournelis de Houtman","Kultuur Stelseel","Pangeran Diponegoro","Jenderal Sudirman","Soekarno","Moch Hatta","Sutan Sjahrir","Sayuti Melik","Bung Tomo","I Gusti Ngurah Rai","Raja Buleleng","Otto Iskandardinata","MH Thamrin","Cut Nyak Dien","RA Kartini","Dewi Sartika","Pattimura","Teuku Umar","Panglima Polim","Tuanku Imam Bonjol","Pangeran Antasari","Sisingamangaraja","Christina Martha Tiahahu","Sultan Hasanuddin","Ki Hajar Dewantara","Tiga Serangkai","Tjipto Mangunkusomo","Budi Utomo","Perang Puputan","Anyer-Panarukan","Sultan Agung","Ageng Tirtayasa","Ken Arok","Ken Dedes","Gajah Mada","Hayam Wuruk","Raden Wijaya","Mpu Tantular","Mpu Gandring","Mpu Prapanca","Nagarakretagama","Raden Patah","Fatahillah","Gunawarman","Mulawarman","Wali Songo","Laksamana Cheng Ho","Sumpah Palapa","Laksamana Maeda","Rengasdengklok","Bandung Lautan Api","Jembatan Merah","Agresi Militer Belanda","Konferensi Meja Bundar","PPKI","BPUPKI","KNIL","Republik Indonesia Serikat","Ade Irma Suryani Nasution","Pierre Tendean","Ahmad Yani","MT Haryono","DI Panjaitan","Trikora","Supersemar","G30S/PKI","Lubang Buaya","Proklamasi","Fatmawati","WR Soepratman","Romusha","Soeharto","BJ Habibie","Megawati Soekarnoputri","Gus Dur","Abdurrahman Wahid","Susilo Bambang Yudhoyono","Joko Widodo","Krismon","Orde Lama","Orde Baru","Reformasi","Kerusuhan Mei 1998"]},{title:"Binatang",words:["Anjing","Kucing","Cicak","Rayap","Kecoak","Tikus","Nyamuk","Lipan","Tokek","Kelabang","Kaki Seribu","Cacing","Jangkrik","Ulat","Bunglon","Capung","Laron","Kepik","Kumbang","Lintah","Katak","Kodok","Kecebong","Ikan Koi","Ikan Mas","Jerapah","Macan","Macan Tutul","Macan Kumbang","Singa","Ular Piton","Ular Sanca","Ular Kobra","Kuda Nil","Kuda","Kuda Poni","Cheetah","Jaguar","Harimau Sumatera","Rusa","Zebra","Kancil","Anoa","Kerbau","Kambing Gunung","Hyena","Biri-biri","Ayam","Kambing","Domba","Sapi","Babi","Kalkun","Burung Dara","Cendrawasih","Burung Tekukur","Burung Kakatua","Burung Parkit","Burung Jalak","Cucak Rowo","Burung Puter","Jalak Bali","Burung Beo","Merak","Burung Gereja","Elang","Angsa","Bebek","Ayam Hutan","Bangau","Belibis","Burung Betet","Burung Bidadari","Burung Camar","Burung Gagak","Burung Gelatik","Ibis","Itik","Kasuari","Burung Kenari","Maleo","Burung Manyar","Merpati","Rajawali","Babirusa","Babi Hutan","Tapir","Beruang","Beruang Madu","Panda","Beruang Kutub","Serigala","Rottweiler","Golden Retriever","Siberian Husky","Shiba Inu","Akita","Poodle","Chihuahua","Pitbull","Herder","Scottish Fold","Kucing Persia","Kucing Siam","Sphynx Cat","Udang","Lobster","Kepiting","Rajungan","Kerang","Tiram","Siput","Ikan Mas","Ikan Gurame","Mujair","Lele","Tongkol","Tuna","Salmon","Cakalang","Hiu","Paus","Lumba-lumba","Dugong","Bawal","Kakap","Nila","Bandeng","Kacapiring","Selar","Barakuda","Kuda Laut","Kura-kura","Penyu","Gurita","Cumi-cumi","Sotong","Ikan Kembung","Bintang Laut","Ubur-ubur","Landak Laut","Timun Laut","Belut","Ikan Pari","Singa Laut","Anjing Laut","Gajah Laut","Plankton","Gajah","Kangguru","Koala","Wombat","Burung Onta","Tasmanian Devil","Kiwi","Emu","Onta","Burung Nazar","Ular Derik","Kadal Gurun","Iguana","Monyet","Gorila","Kera","Simpanse","Bekantan","Babon","Lutung","Mammoth","Burung Dodo"]},{title:"Superhero (Campuran)",words:["Gundala Putera Petir","Saras 008","Panji Manusia Millenium","Wiro Sableng","Gatotkaca","Si Buta dari Gua Hantu","Si Pitung","Kabayan","Ironman","War Machine","Pepper Potts","Tony Stark","Captain America","Falcon","Steve Rogers","Hulk","Bruce Banner","Valkyrie","Thor","Loki","Odin","Hela","Dr Strange","Stephen Strange","Wong","Ancient One","Dormammu","Spider-man","Peter Parker","Aunt May","Uncle Ben","Gwen Stacy","Mary Jane (Spider-man)","Green Goblin","Doctor Octopus","Hawkeye","Clint Barton","Black Widow","Natasha Romanoff","Black Panther","T’challa","Suri","Captain Marvel","Carol Danvers","Vision","Ant-man","Scott Lang","The Wasp","Guardians of the Galaxy","Rocket","Groot","Gamora","Drax","Starlord/Peter Quill","Daredevil","Bullseye","Elektra","Cerebro","Wolverine","Magneto","Professor X","Charles Xavier","Cyclops","Storm","Phoenix","Rouge","Jean Grey","Mystique","Nightcrawler","Pyro","Angel","Sabertooth","Gambit","Deadpool","Iceman","Beast","Banshee","Colossus","Kitty Pryde/Shadowcat","Jubilee","Psylocke","Quicksilver","Scarlet Witch"]},{title:"Kartun 2000-an",words:["Doraemon","Detektif Conan","Let’s and Go","Crush Gear","Yu-Gi-Oh!","Chibi Maruko Chan","Dragon Ball","Crayon Sinchan","Beyblade","P-man","The Adventures of Honey Bee Hachi","Minky Momo","UFO Baby","Dr Slump","Bubu Chacha","Digimon Adventure","Magical Doremi","Ninja Hatori","Hamtaro","Inuyasha","Samurai X","Captain Tsubasa","Kungfu Boy","Digimon Frontier","Saint Seiya","Nube","Sailormoon","Ninja boy","Kobochan","One Piece","Pokemon","Ge Ge Ge No Kitaro","Bakabon","Cardcaptor Sakura","Mojacko","Mighty Morphin Power Ranger","Zooranger","Tom & Jerry","Looney Tunes","Animania","Rugrats","The Wild Thornberries","Danny Phantom","Jimmy Neutron","The Fairly Oddparents","Totally Spies!","Kim Possible","Avatar: The Legend of Aang","Codename: Kids Next Door","Cat & Dog","Winx","Blue’s Clues","The Powerpuff Girls","Teletubbies","Tweenies","Dora the Explorer","Hey Arnold!","ChalkZone"]},{title:"Capital Cities of Countries",words:["Dhaka","Brussels","Ouagadougou","Sofia","Sarajevo","Bridgetown","Mata Utu","Gustavia","Hamilton","Bandar Seri Begawan","Sucre","Manama","Bujumbura","Porto-Novo","Thimphu","Kingston","Gaborone","Apia","Brasilia","Nassau","Saint Helier","Minsk","Belmopan","Moscow","Kigali","Belgrade","Dili","Saint-Denis","Ashgabat","Dushanbe","Bucharest","Bissau","Hagatna","Guatemala City","Grytviken","Athens","Malabo","Basse-Terre","Tokyo","Georgetown","St Peter Port","Cayenne","Tbilisi","St. George's","London","Libreville","San Salvador","Conakry","Banjul","Nuuk","Gibraltar","Accra","Muscat","Tunis","Amman","Zagreb","Port-au-Prince","Budapest","Hong Kong","Tegucigalpa","Caracas","San Juan","East Jerusalem","Melekeok","Lisbon","Longyearbyen","Asuncion","Baghdad","Panama City","Papeete","Port Moresby","Lima","Islamabad","Manila","Adamstown","Warsaw","Saint-Pierre","Lusaka","El-Aaiun","Tallinn","Cairo","Pretoria","Quito","Rome","Hanoi","Honiara","Addis Ababa","Mogadishu","Harare","Riyadh","Madrid","Asmara","Podgorica","Chisinau","Antananarivo","Marigot","Rabat","Monaco","Tashkent","Nay Pyi Taw","Bamako","Macao","Ulan Bator","Majuro","Skopje","Port Louis","Valletta","Lilongwe","Male","Fort-de-France","Saipan","Plymouth","Nouakchott","Douglas, Isle of Man","Kampala","Dodoma","Kuala Lumpur","Mexico City","Jerusalem","Paris","Diego Garcia","Jamestown","Helsinki","Suva","Stanley","Palikir","Torshavn","Managua","Amsterdam","Oslo","Windhoek","Port Vila","Noumea","Niamey","Kingston","Abuja","Wellington","Kathmandu","Yaren","Alofi","Avarua","Pristina","Yamoussoukro","Berne","Bogota","Beijing","Yaounde","Santiago","West Island","Ottawa","Brazzaville","Bangui","Kinshasa","Prague","Nicosia","Flying Fish Cove","San Jose"," Willemstad","Praia","Havana","Mbabane","Damascus","Philipsburg","Bishkek","Nairobi","Juba","Paramaribo","Tarawa","Phnom Penh","Basseterre","Moroni","Sao Tome","Bratislava","Seoul","Ljubljana","Pyongyang","Kuwait City","Dakar","San Marino","Freetown","Victoria","Astana","George Town","Singapur","Stockholm","Khartoum","Santo Domingo","Roseau","Djibouti","Copenhagen","Road Town","Berlin","Sanaa","Algiers","Washington","Montevideo","Mamoudzou","Beirut","Castries","Vientiane","Funafuti","Taipei","Port of Spain","Ankara","Colombo","Vaduz","Riga","Nuku'alofa","Vilnius","Luxembourg","Monrovia","Maseru","Bangkok","Port-aux-Francais","Lome","N'Djamena","Cockburn Town","Tripolis","Vatican City","Kingstown","Abu Dhabi","Andorra la Vella","St. John's","Kabul","The Valley","Charlotte Amalie","Reykjavik","Tehran","Yerevan","Tirana","Luanda","Pago Pago","Buenos Aires","Canberra","Vienna","Oranjestad","New Delhi","Mariehamn","Baku","Dublin","Jakarta","Kiev","Doha","Maputo"]},{title:"Countries",words:["Bangladesh","Belgium","Burkina Faso","Bulgaria","Bosnia and Herzegovina","Barbados","Wallis and Futuna","Saint Barthelemy","Bermuda","Brunei","Bolivia","Bahrain","Burundi","Benin","Bhutan","Jamaica","Bouvet Island","Botswana","Samoa","Bonaire, Saint Eustatius and Saba ","Brazil","Bahamas","Jersey","Belarus","Belize","Russia","Rwanda","Serbia","East Timor","Reunion","Turkmenistan","Tajikistan","Romania","Tokelau","Guinea-Bissau","Guam","Guatemala","South Georgia and the South Sandwich Islands","Greece","Equatorial Guinea","Guadeloupe","Japan","Guyana","Guernsey","French Guiana","Georgia","Grenada","United Kingdom","Gabon","El Salvador","Guinea","Gambia","Greenland","Gibraltar","Ghana","Oman","Tunisia","Jordan","Croatia","Haiti","Hungary","Hong Kong","Honduras","Heard Island and McDonald Islands","Venezuela","Puerto Rico","Palestinian Territory","Palau","Portugal","Svalbard and Jan Mayen","Paraguay","Iraq","Panama","French Polynesia","Papua New Guinea","Peru","Pakistan","Philippines","Pitcairn","Poland","Saint Pierre and Miquelon","Zambia","Western Sahara","Estonia","Egypt","South Africa","Ecuador","Italy","Vietnam","Solomon Islands","Ethiopia","Somalia","Zimbabwe","Saudi Arabia","Spain","Eritrea","Montenegro","Moldova","Madagascar","Saint Martin","Morocco","Monaco","Uzbekistan","Myanmar","Mali","Macao","Mongolia","Marshall Islands","Macedonia","Mauritius","Malta","Malawi","Maldives","Martinique","Northern Mariana Islands","Montserrat","Mauritania","Isle of Man","Uganda","Tanzania","Malaysia","Mexico","Israel","France","British Indian Ocean Territory","Saint Helena","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","Nicaragua","Netherlands","Norway","Namibia","Vanuatu","New Caledonia","Niger","Norfolk Island","Nigeria","New Zealand","Nepal","Nauru","Niue","Cook Islands","Kosovo","Ivory Coast","Switzerland","Colombia","China","Cameroon","Chile","Cocos Islands","Canada","Republic of the Congo","Central African Republic","Democratic Republic of the Congo","Czech Republic","Cyprus","Christmas Island","Costa Rica","Curacao","Cape Verde","Cuba","Swaziland","Syria","Sint Maarten","Kyrgyzstan","Kenya","South Sudan","Suriname","Kiribati","Cambodia","Saint Kitts and Nevis","Comoros","Sao Tome and Principe","Slovakia","South Korea","Slovenia","North Korea","Kuwait","Senegal","San Marino","Sierra Leone","Seychelles","Kazakhstan","Cayman Islands","Singapore","Sweden","Sudan","Dominican Republic","Dominica","Djibouti","Denmark","British Virgin Islands","Germany","Yemen","Algeria","United States","Uruguay","Mayotte","United States Minor Outlying Islands","Lebanon","Saint Lucia","Laos","Tuvalu","Taiwan","Trinidad and Tobago","Turkey","Sri Lanka","Liechtenstein","Latvia","Tonga","Lithuania","Luxembourg","Liberia","Lesotho","Thailand","French Southern Territories","Togo","Chad","Turks and Caicos Islands","Libya","Vatican","Saint Vincent and the Grenadines","United Arab Emirates","Andorra","Antigua and Barbuda","Afghanistan","Anguilla","U.S. Virgin Islands","Iceland","Iran","Armenia","Albania","Angola","Antarctica","American Samoa","Argentina","Australia","Austria","Aruba","India","Aland Islands","Azerbaijan","Ireland","Indonesia","Ukraine","Qatar","Mozambique"]},{title:"K-Pop",words:["BTS","EXO","BIGBANG","Seventeen","BtoB","Red Velvet","AOA","Girls' Generation","SHINee","GOT7","Super Junior","2NE1","Highlight","Infinite","2PM","TWICE","BLACKPINK","Apink","TVXQ","f(x)","B.A.P","CNBLUE","VIXX","B1A4","4Minute","Wonder Girls","Sistar","iKON","Miss A","T-ara","Monsta X","Block B","EXID","GFriend","JYJ","F.T. Island","Girl's Day","KARA","NCT","MBLAQ","MAMAMOO","After School","NU'EST","U-KISS","Teen Top","2AM","WINNER","Wanna One","Brown Eyed Girls","Shinhwa","Astro"]}]},bcc9:function(a,n,e){},cd49:function(a,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var t=e("2b0e"),i=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("router-view")},r=[],o=(e("5c38"),t["a"]),u=o,s=(e("5c0b"),e("2877")),l=Object(s["a"])(u,i,r,!1,null,null,null),c=l.exports,d=e("8c4f"),g=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"root"},[e("header",[e("div",{staticClass:"pull-left"},[e("font-awesome-icon",{staticClass:"expand-button",attrs:{icon:"expand"},on:{click:a.requestFullscreen}}),e("font-awesome-icon",{staticClass:"compress-button",attrs:{icon:"compress"},on:{click:a.exitFullscreen}})],1),e("h3",[a._v("Piramida")])]),e("main",[e("div",{staticClass:"scrollable"},[e("div",{staticClass:"info"},[e("div",{staticClass:"label"},[a._v("Choose a category:")]),a._l(a.categoryTitles,function(n){return e("p",{key:n},[e("button",{on:{click:function(e){return a.openCategory(n)}}},[a._v(a._s(n))])])}),e("p",[e("button",{attrs:{id:"random"},on:{click:a.random}},[a._v("Random")])])],2)])])])},m=[],h=(e("96cf"),e("3b8d")),p=e("0cab"),k=e("ecee"),f=e("c074"),b=e("ad3d");k["c"].add(f["d"],f["b"]);var y=t["a"].extend({components:{FontAwesomeIcon:b["a"]},data:function(){return{categoryTitles:[]}},methods:{openCategory:function(){var a=Object(h["a"])(regeneratorRuntime.mark(function a(n){var e,t;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(p["e"])(n);case 2:return e=a.sent,t=Object(p["c"])(e),a.prev=4,a.next=7,this.requestFullscreen();case 7:return a.prev=7,this.$router.push({name:"game",params:{encodedCategory:t}}),a.finish(7);case 10:case"end":return a.stop()}},a,this,[[4,,7,10]])}));function n(n){return a.apply(this,arguments)}return n}(),requestFullscreen:function(){var a=Object(h["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",document.body.requestFullscreen());case 1:case"end":return a.stop()}},a,this)}));function n(){return a.apply(this,arguments)}return n}(),exitFullscreen:function(){var a=Object(h["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",document.exitFullscreen());case 1:case"end":return a.stop()}},a,this)}));function n(){return a.apply(this,arguments)}return n}(),random:function(){var a=Math.round(Math.random()*(this.categoryTitles.length-1));this.openCategory(this.categoryTitles[a])}},mounted:function(){var a=Object(h["a"])(regeneratorRuntime.mark(function a(){var n;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(p["d"])();case 2:n=a.sent,this.categoryTitles=n;case 4:case"end":return a.stop()}},a,this)}));function n(){return a.apply(this,arguments)}return n}()}),S=y,v=(e("21bb"),Object(s["a"])(S,g,m,!1,null,null,null)),w=v.exports,B=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("the-game",{attrs:{encodedCategory:a.encodedCategory,category:a.category}})},T=[],C=(e("a481"),function(){var a=this,n=a.$createElement,e=a._self._c||n;return a.isFinished?e("div",{staticClass:"root",attrs:{id:"finished"}},[e("header",[e("div",{staticClass:"close-button",on:{click:a.reset}},[e("font-awesome-icon",{attrs:{icon:"times","fixed-width":""}})],1),e("h3",[a._v("Score: "+a._s(a.score))])]),e("main",[e("div",[e("ol",a._l(a.results,function(n,t){return e("li",{key:t,class:{correct:n.isCorrect}},[e("font-awesome-icon",{attrs:{icon:n.isCorrect?"check":"times"}}),a._v("\n          "+a._s(n.word)+"\n        ")],1)}),0)])]),e("nav",[e("p",[e("router-link",{attrs:{to:{name:"home"},tag:"button"}},[e("font-awesome-icon",{attrs:{icon:"home"}})],1)],1),e("p",[e("button",{attrs:{id:"reset"},on:{click:a.reset}},[e("font-awesome-icon",{attrs:{icon:"undo"}})],1)])])]):a.isStarted?e("div",{staticClass:"root",attrs:{id:"active"}},[e("header",[e("div",{staticClass:"close-button",on:{click:a.reset}},[e("font-awesome-icon",{attrs:{icon:"times","fixed-width":""}})],1),e("h3",{attrs:{id:"timer"}},[a._v(a._s(a.remainingSeconds))])]),e("main",[e("div",{staticClass:"overlay"},[e("div",{staticClass:"half",on:{click:a.correctWord}}),e("div",{staticClass:"half",on:{click:a.skipWord}})]),e("v-fit",{attrs:{text:a.currentWord}})],1),e("nav",[e("p",{on:{click:a.correctWord}},[e("button",{attrs:{id:"correct"}},[e("font-awesome-icon",{attrs:{icon:"check"}})],1)]),e("p",{on:{click:a.skipWord}},[e("button",{attrs:{id:"skip"}},[e("font-awesome-icon",{attrs:{icon:"step-forward"}})],1)])])]):e("div",{staticClass:"root",attrs:{id:"initial"}},[e("header",[e("div",{staticClass:"close-button",on:{click:a.goHome}},[e("font-awesome-icon",{attrs:{icon:"home"}})],1),e("div",{staticClass:"pull-right"},[e("font-awesome-icon",{attrs:{icon:"edit"},on:{click:a.edit}}),a.canShare?e("font-awesome-icon",{attrs:{icon:"share"},on:{click:a.share}}):a._e()],1),e("h3",[a._v("Piramida")])]),e("main",[e("div",[e("div",{staticClass:"info"},[e("div",{staticClass:"label"},[a._v("Category:")]),e("div",{staticClass:"value"},[a._v(a._s(a.category.title))])]),e("div",{staticClass:"info"},[e("div",{staticClass:"label"},[a._v("Time limit:")]),e("div",{staticClass:"value"},[e("span",{class:{option:!0,selected:30===a.timeLimit},on:{click:function(n){return a.setTimeLimit(30)}}},[a._v("30")]),e("span",{class:{option:!0,selected:60===a.timeLimit},on:{click:function(n){return a.setTimeLimit(60)}}},[a._v("60")]),e("span",{class:{option:!0,selected:90===a.timeLimit},on:{click:function(n){return a.setTimeLimit(90)}}},[a._v("90")]),e("span",{class:{option:!0,selected:120===a.timeLimit},on:{click:function(n){return a.setTimeLimit(120)}}},[a._v("120")])])])])]),e("nav",[e("p",[e("button",{attrs:{id:"start"},on:{click:a.start}},[e("font-awesome-icon",{attrs:{icon:"play"}})],1)])])])}),P=[],M=e("5d73"),K=e.n(M),A=e("b6d0"),I=e.n(A),G=e("340b"),j=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("h1",{style:{fontSize:a.fontSize}},[a._v(a._s(a.text))])},L=[],x=t["a"].extend({props:["text","width"],computed:{fontSize:function(){var a=1.3*(this.width||100),n=this.text.length,e=Math.min(Math.max(a/n,8),22);return"".concat(e,"vw")}}}),D=x,R=Object(s["a"])(D,j,L,!1,null,null,null),N=R.exports,O=e("e0d5");k["c"].add(f["e"],f["f"],f["j"],f["a"],f["l"],f["c"],f["k"],f["i"]);var W=t["a"].extend({components:{VFit:N,FontAwesomeIcon:b["a"]},props:["encodedCategory","category"],data:function(){return{isStarted:!1,endTime:new Date,shuffledWords:[],correctIndices:new I.a,maxViewedIndex:0,currentIndex:0,remainingSeconds:0,isFinished:!1,timeLimit:60}},computed:{canShare:function(){return!!navigator.share},currentWord:function(){return this.shuffledWords[this.currentIndex]},results:function(){for(var a=[],n=0;n<=this.maxViewedIndex;++n)a.push({word:this.shuffledWords[n],isCorrect:!1});var e=!0,t=!1,i=void 0;try{for(var r,o=K()(this.correctIndices);!(e=(r=o.next()).done);e=!0){var u=r.value;a[u]&&(a[u].isCorrect=!0)}}catch(s){t=!0,i=s}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}return a},score:function(){return this.correctIndices.size}},methods:{goHome:function(){this.$router.push({name:"home"})},setTimeLimit:function(a){this.timeLimit=a},share:function(){var a=navigator.share;a({title:"Piramida: ".concat(this.category.title),url:window.location})},nextWord:function(){var a,n=new I.a(this.correctIndices);a=this.currentIndex+1>=this.shuffledWords.length?0:this.currentIndex+1;var e=-1;while(a!==this.currentIndex&&-1===e)n.has(a)?a+1>=this.shuffledWords.length?a=0:++a:e=a;-1===e?this.finish():e<this.shuffledWords.length&&(this.currentIndex=e),e>this.maxViewedIndex&&(this.maxViewedIndex=e)},finish:function(){this.isFinished=!0,this.timer&&clearTimeout(this.timer)},reset:function(){this.isStarted=!1,this.isFinished=!1,this.currentIndex=0,this.correctIndices=new I.a,this.maxViewedIndex=0,this.shuffledWords=O(this.category.words)},start:function(){var a=this;this.isStarted=!0,this.endTime=Object(G["addSeconds"])(new Date,this.timeLimit);var n=function n(){a.updateRemainingSeconds(),a.remainingSeconds>0?a.timer=setTimeout(function(){return n()},1e3):a.isFinished=!0};n()},edit:function(){this.$router.push({name:"edit",params:{encodedCategory:this.encodedCategory}})},updateRemainingSeconds:function(){this.remainingSeconds=Object(G["differenceInSeconds"])(this.endTime,new Date)},skipWord:function(){this.nextWord()},correctWord:function(){this.correctIndices.add(this.currentIndex),this.nextWord()}},mounted:function(){this.reset()}}),F=W,H=(e("9519"),Object(s["a"])(F,C,P,!1,null,null,null)),_=H.exports,J=t["a"].extend({components:{TheGame:_},data:function(){var a,n=this.$route.params.encodedCategory;try{a=Object(p["a"])(n)}catch(e){this.$router.replace({name:"home"}),a={title:"",words:[]}}return{category:a,encodedCategory:n}}}),E=J,U=Object(s["a"])(E,B,T,!1,null,null,null),V=U.exports,z=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("the-editor",{attrs:{category:a.category,originalEncodedCategory:a.originalEncodedCategory},on:{save:a.handleSave}})},$=[],Y=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"root"},[e("header",[e("div",{staticClass:"close-button",on:{click:a.cancel}},[e("font-awesome-icon",{attrs:{icon:"times","fixed-width":""}})],1),e("div",{staticClass:"pull-right",on:{click:a.save}},[e("font-awesome-icon",{attrs:{icon:"save"}})],1),e("h3",[a._v("Edit Category")])]),e("main",[e("div",{staticClass:"scrollable"},[e("div",{staticClass:"info"},[e("div",{staticClass:"label"},[a._v("Title:")]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:a.title,expression:"title",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text"},domProps:{value:a.title},on:{change:function(n){a.title=n.target.value.trim()},blur:function(n){return a.$forceUpdate()}}})])]),e("div",{staticClass:"info"},[e("div",{staticClass:"label"},[a._v("Answers:")]),a._l(a.wordList,function(n,t){return e("p",{key:n.key},[e("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:n.word,expression:"item.word",modifiers:{trim:!0,lazy:!0}},{name:"focus",rawName:"v-focus",value:n.focus,expression:"item.focus"}],attrs:{type:"text"},domProps:{value:n.word},on:{blur:[function(n){return a.onBlur(t)},function(n){return a.$forceUpdate()}],focus:function(n){return a.onFocus(t)},change:function(e){a.$set(n,"word",e.target.value.trim())}}})])}),e("p",[e("button",{on:{click:a.addWord}},[e("font-awesome-icon",{attrs:{icon:"plus"}})],1)])],2)])])])},q=[];k["c"].add(f["h"],f["g"],f["k"]);var X=t["a"].extend({props:["category","originalEncodedCategory"],components:{FontAwesomeIcon:b["a"]},data:function(){var a=this.category;return{title:a.title,wordList:a.words.map(function(a,n){return{key:n,word:a}}),maxKey:a.words.length,emptyIndices:new I.a}},methods:{cancel:function(){this.$router.push({name:"game",params:{encodedCategory:this.originalEncodedCategory}})},addWord:function(){this.wordList.push({word:"",key:this.maxKey,focus:!0}),this.maxKey=this.maxKey+1},save:function(){var a={title:this.title,words:this.wordList.map(function(a){return a.word})},n=Object(p["c"])(a);this.$emit("save",a),this.$router.push({name:"game",params:{encodedCategory:n}})},onBlur:function(a){""===this.wordList[a].word.trim()&&this.emptyIndices.add(a)},onFocus:function(a){if(this.emptyIndices.size>0){var n=!0,e=!1,t=void 0;try{for(var i,r=K()(this.emptyIndices);!(n=(i=r.next()).done);n=!0){var o=i.value;this.wordList.splice(o,1)}}catch(u){e=!0,t=u}finally{try{n||null==r.return||r.return()}finally{if(e)throw t}}this.emptyIndices=new I.a}}},directives:{focus:{inserted:function(a,n){n.value&&a.focus()}}}}),Z=X,Q=Object(s["a"])(Z,Y,q,!1,null,null,null),aa=Q.exports,na=t["a"].extend({components:{TheEditor:aa},data:function(){var a,n,e=this.$route.params.encodedCategory;if(e)try{a=Object(p["a"])(this.$route.params.encodedCategory),n=!0}catch(t){this.$router.push({name:"home"})}else a={title:"",words:[]},n=!1;return{category:a,originalEncodedCategory:e,existing:n}},methods:{handleSave:function(a){p["b"].get(this.category.title),this.$router.push({name:"game",params:{encodedCategory:Object(p["c"])(a)}})}}}),ea=na,ta=Object(s["a"])(ea,z,$,!1,null,null,null),ia=ta.exports;t["a"].use(d["a"]);var ra=new d["a"]({routes:[{path:"/",name:"home",component:w},{path:"/g/:encodedCategory",name:"game",component:V},{path:"/g/:timeLimit/:encodedCategory",name:"game-time-limit",component:V},{path:"/e/:encodedCategory",name:"edit",component:ia}]}),oa=e("9483");Object(oa["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}}),t["a"].config.productionTip=!1,new t["a"]({router:ra,render:function(a){return a(c)}}).$mount("#app")}});