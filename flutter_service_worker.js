'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "05ba6d88b61b339d7c7ad3ae41b837dd",
"version.json": "738daa3cb96bb14f1c86d04c14c64058",
"index.html": "3b6f6d6122ab46c5d5b5084ae82483ca",
"/": "3b6f6d6122ab46c5d5b5084ae82483ca",
"main.dart.js": "9519be0c44a588336383faf8be0ab3ff",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"README.md": "b18227a976292d024fbbe4c4824a50d1",
"favicon.png": "92c691872cb1b208e2f1d25393419b8a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b4181ea8908efe4e1f2c3d46665acbcc",
".git/config": "f60c693ec8eaa77f58bb96b41f0b9836",
".git/objects/59/f85a040abdfc01019acb5b213edf17c52b5b4b": "c9761cbce220b22e4147967e6aa3a027",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/5f22453013becc957af45736a527c49f4c2d28": "e35cd09c8cc2e74edabbfc5c1ab8b8e2",
".git/objects/51/3f66db2d81116e5a5b7c13130f15a042534f53": "dcb543c8b5983969a0e9c0d4235b6e01",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/58/526ae8420e5540a31fe2fa6a5244958db145e7": "ffdaf8d12101ba9306fd5d098affbc3b",
".git/objects/94/cefae63bfbcfa2644461925d7c6752fabc729c": "f1f326bafd81ced872d1f186edd31b86",
".git/objects/5f/d72b8cd300c10ef105cf6fd3328793263f57e3": "d43730190580a3aac615ee6aac01db79",
".git/objects/9c/fe004cbedb55115f31c585f0780b8512b43ee8": "312dc6198910234afaccba312951298c",
".git/objects/bb/298a37e43c61675ffcd486be962e7eb3a8397c": "3963d6cac263ed0f6b7a4f1d7ce6d968",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/a9f2a8f56de3162b09245f55f92c6937dc899f": "ffc16f2031e0b3869731989ed1da4d4b",
".git/objects/a2/295fcb929848ff15104a46d50726e1cc1ac3ff": "bd2662cad207b5095417b2693a68f117",
".git/objects/bd/1b52d3abe8a00586e7e2225fbe329cb830d92f": "4a129940c38bd20059a3bee296f2059e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/ab/0aa35702bc6aa0d1cb399caaa82784cefdde56": "f46e8e4bbfa45ca20981b3c50f39b9ef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cc35ed27a4585ad6516b80af53eeb3d3f3defa": "16628949795120255d97e96d3444d61d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c9/e151c39e6530633acce468797710f48003aa6d": "330442caae61640dedde8a2b9f8e4b5b",
".git/objects/fc/d5ff08c0efaad41d43e4042e3d00049d8c0cd1": "15498384c7c38922c102c99751175b85",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/fb/6ed2ea8c2a6dfa874ce116ba556d62b8f7fc45": "748e18f871a699b45df2052be5412bd6",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/f60510c1ed442b6293db33c2d8ce1f712adfbf": "e4c4996deaa9593046ab798bb35734ac",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/44b25ab6b65fbc32ec33d31f8f9535ba8b0cca": "9b397e3bba5744b57ca39427a872c1da",
".git/objects/7d/3d5e489e8dce325572590252e45ef3c38751ba": "9fc0c4f30d0b84d5c1d2e7c19d7d6a96",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/25dbd818c540b42adc9284bd544f72b6ec024b": "7ae98e71b78f57c85882669c9df5adb2",
".git/objects/7c/a1f0217f389818360601e82ea9e944bee5ad5c": "cd435517c549d22fa87d4874416c89de",
".git/objects/89/5eed7fb7e77daefb990e902aaaf3547dd3d15c": "37761c9f48424565f38c51f55ea34795",
".git/objects/73/3a733817c387a244cec0b52b0bdb0576fefa83": "7a457dffaf85bdcefc997f9fbecfb614",
".git/objects/7e/c15699befeb35a4215afde154fabeb96c6c36c": "769508f47a6bdd7115554ad2da38028c",
".git/objects/7e/3639c373066aaee231c79a7cdf089701e9258e": "416d1231614fcda438e4c6783f5dda19",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/19/51e640744f8f80924b74a7bb889c24317e492c": "f7775f84b1679a2457e552d476d80879",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/86/1792788de650d30e38529944b5e1ad984275e7": "8a08b946d1e412232a001e30edd5a58f",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2a/e9d4eb7ba49660950d23a7f3351c567a1c6390": "28cb7ac60cfc522d75118053dfc6b447",
".git/objects/43/b67d3a5951028c142701d52bbcabd54e6563d8": "64bcca99305edf28e725fd255f68e5d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/2a6516fdc332e21478f5fe1687d7efbe2c78ea": "b73410bcdcf51a95a48703da725996f5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/c22dc984b4ebbd6fb185bc8c5bba0e49e1fe73": "6835b3c02367c58dad9e37607b6e082d",
".git/objects/9a/45d26c04cc581e9673d1ea332f67f4b76507d9": "720a17c5b527efbabbbb18710a8bd53a",
".git/objects/5c/9e9181c12ddcea8aa656c260124ffcdb5f809d": "2024f4f0ac3e6e2ce42ec1a5c38322f1",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/1791e1d00c3bb2f2af2c7f6435e1b035efee39": "e84e9b0c6d29b2d4ae94a453e5ebd750",
".git/objects/96/742fa1d9584769a5dfb5e96ecda281c497afc7": "97c1cdc58f873b85decb28c9840e8725",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/54/cf863fa2271d143e3dd469901754c9f761138a": "84eab76ffbffe205814216416c4ed096",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/37/ebee35aff9eca43e5e6ff4ee55e1d4229666c4": "11729a1e1c037fe8a0ebeaf6f45b93ab",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/37/599cbf8444447215c51c23652e0b4e8f3866e9": "88111e3ecdaccaa40b1ffac3749c8931",
".git/objects/37/bcc84ac15d518620f147cb9f0ed7b5f471af71": "661639f3f399ad181f18d6136b32448e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0f/02114dfca7d086e77df49144efdc4851a79c2c": "63cd669de531e36ada6020d8562ca89a",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0a/3b40cd4ead66209ce23f55707a7d6373b1ef60": "36616eae58368bc89cbe90d86d01289f",
".git/objects/bf/30264147b333631262122600c4e3d59ab91857": "bb5fbb8602704d4558fcef66fa304d23",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/027a3e842c28ec4721ea78e2495cac8df657cd": "836218ad546d7eff94b7ed795bd33934",
".git/objects/ba/077a978367ba852cc6f7e3d9f5818a7326ae2f": "9d826ae0b8f7ddd7f17588faf58d7e7e",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ecc2cd62af2d44645d2508a8f001dbc7117d66": "7f885c3c31ddfaaf9e26727d991eaadc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/e1/ee44114b821ac6811104fb3d2bb87dc1e46684": "cd8b679cd3f6318e7b55e9da739b2043",
".git/objects/cd/647477cf646b156fa78edbf40ab3b78a8f99c5": "7a4085a53fff01e1cbc4b473fcc5e845",
".git/objects/e6/e17437f42013ce01befbf776d527031b452cd9": "eff3d79a0cc8ddc689b1dd41c2ed8dc7",
".git/objects/fa/5d990071c290ea9d72bfc6d7389570d376d856": "b1cdac1bcf16ff89aec310cc02f2881b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/b5486ac4a98531c09fe4037f06d9b594df2978": "7019aa42618acc1543940d61ef469cad",
".git/objects/ce/fa5b886dc4bcce75de25482c6044ce3920d428": "5b309679b886e23122d634f03d51cdad",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/afd337a1406325fbe50918b162b1ebca81da9a": "62cc94852db9705bf52658a2b1b25831",
".git/objects/8c/b0ea63fbf418016676c1aaee60c3845f50bd66": "7be5aa573d83ca58c83c34557f469ce5",
".git/objects/71/28443356406681c6f6c848362dcc79ff9962db": "191ae6b69191a2c59dc81f56ee0bcbbc",
".git/objects/76/2650da81cb01fc8e4dc230599885a031c63d47": "3b37f56048c734b35e13ecea98a3a9e7",
".git/objects/2b/de36da160d949a235c35965c772dc73be40bb6": "ac5ccf09bd09255631024ec22a64870d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b438a26f80ba8692fe268df5f8822d8d",
".git/logs/refs/heads/main": "a86e8d24d6652f38f4cde6a35dce243d",
".git/logs/refs/remotes/origin/main": "008a3cf46c7732a2ec4d09e66d3ece24",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "66b5d1f76e27e29bc865e70be67d2761",
".git/refs/remotes/origin/main": "66b5d1f76e27e29bc865e70be67d2761",
".git/index": "cdf2eaaffca175af6bb1114cb12a3f00",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/user.svg": "7757de0a7f5a68fea5a44cb7aa7a1b43",
"assets/images/month.png": "09dde4bf73eec0b6450fbb7056cf516c",
"assets/images/jon.png": "8940d1249bd110f637ee4ad55445cb87",
"assets/images/year.svg": "d971d3565c4a196268ef37093b35d602",
"assets/images/sideLogo.png": "a2afefb9c3eaeafa6628a54120595887",
"assets/images/loginLogo2.png": "6024d4ef1e2ed312d7f584441b3fbc79",
"assets/images/login%2520logo.png": "781e7e6e0efe215e4d485bd9c04c7270",
"assets/images/shoplogo.png": "7abfd4e2ae29637278d20a480053711c",
"assets/images/month.svg": "2e9bc3f04e7c658c67249ff4c3195bdd",
"assets/images/eng.png": "ada196475cabd69bb16aadbfe96b8f0c",
"assets/images/apos.png": "8591c025eccadf02338a08ae5ee1ac68",
"assets/images/free.svg": "fc4715d4fbedd86d0cf706571e2ee023",
"assets/images/nameLogo.png": "0d266ca0820e140b3d19db52c08a0de3",
"assets/images/logo1.png": "f65db67020924b24bcc1eda82a209695",
"assets/images/lifetime.png": "e0f0bbdd269d948ecc15fc14f18765f6",
"assets/images/salespro.jpg": "f4c31dd1ffae0a6df3ee772d9286160a",
"assets/images/logo.png": "2339328e4c498f5338b4a8b9dc7dae27",
"assets/images/pos.png": "4edfc8810c9d197d1a0048710e80ed7d",
"assets/images/yearly.png": "1374b6c3829cfdf3e4dd2d73696cd09d",
"assets/images/new.svg": "28c2aeeea6bec25728eb38caa98b7060",
"assets/AssetManifest.json": "3676a11ee7c256a56f62cb369621a1cb",
"assets/NOTICES": "24b5dc950abdacc1d2802079a118e4b7",
"assets/FontManifest.json": "bda12271245554072d72456f1799e272",
"assets/AssetManifest.bin.json": "c06a70f066b6b4c08767afe139ca68c6",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "440da663f17184f21f007a3a2bf60f69",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "85511f0673daae174f9e9f28a9e0c86e",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2773e2ac1e9d86bbcae96f52fe89c06f",
"assets/fonts/MaterialIcons-Regular.otf": "4cecc36d5597e0e7c6d05da62ae0e6e7",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
