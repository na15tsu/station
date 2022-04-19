window.onload = function() {

  // 路線の選択肢
  line = document.getElementById("line");

  // 都道府県の選択肢が変更された際の動作
  prefecture = document.getElementById("prefecture");
  prefecture.onchange = chgPref;

}

// 都道府県の選択肢が変更された際の動作
function chgPref() {

  // 変更後のカテゴリを取得
  var AftPref = prefecture.value;

  // 選択肢ごとに関数を呼び出し
  if (AftPref == "pref1") {
    setPref1();
  } else if (AftPref == "pref2") {
    setPref2();
  } else if (AftPref == "pref3") {
    setPref3();
  } else if (AftPref == "pref4") {
    setPref4();
  } else if (AftPref == "pref5") {
    setPref5();
  } else if (AftPref == "pref6") {
    setPref6();
  } else if (AftPref == "pref7") {
    setPref7();
  } else if (AftPref == "pref8") {
    setPref8();
  } else if (AftPref == "pref9") {
    setPref9();
  } else if (AftPref == "pref10") {
    setPref10();
  } else if (AftPref == "pref11") {
    setPref11();
  } else if (AftPref == "pref12") {
    setPref12();
  } else if (AftPref == "pref13") {
    setPref13();
  } else if (AftPref == "pref14") {
    setPref14();
  } else if (AftPref == "pref15") {
    setPref15();
  } else if (AftPref == "pref16") {
    setPref16();
  } else if (AftPref == "pref17") {
    setPref17();
  } else if (AftPref == "pref18") {
    setPref18();
  } else if (AftPref == "pref19") {
    setPref19();
  } else if (AftPref == "pref20") {
    setPref20();
  } else if (AftPref == "pref21") {
    setPref21();
  } else if (AftPref == "pref22") {
    setPref22();
  } else if (AftPref == "pref23") {
    setPref23();
  } else if (AftPref == "pref24") {
    setPref24();
  } else if (AftPref == "pref25") {
    setPref25();
  } else if (AftPref == "pref26") {
    setPref26();
  } else if (AftPref == "pref27") {
    setPref27();
  } else if (AftPref == "pref28") {
    setPref28();
  } else if (AftPref == "pref29") {
    setPref29();
  } else if (AftPref == "pref30") {
    setPref30();
  } else if (AftPref == "pref31") {
    setPref31();
  } else if (AftPref == "pref32") {
    setPref32();
  } else if (AftPref == "pref33") {
    setPref33();
  } else if (AftPref == "pref34") {
    setPref34();
  } else if (AftPref == "pref35") {
    setPref35();
  } else if (AftPref == "pref36") {
    setPref36();
  } else if (AftPref == "pref37") {
    setPref37();
  } else if (AftPref == "pref38") {
    setPref38();
  } else if (AftPref == "pref39") {
    setPref39();
  } else if (AftPref == "pref40") {
    setPref40();
  } else if (AftPref == "pref41") {
    setPref41();
  } else if (AftPref == "pref42") {
    setPref42();
  } else if (AftPref == "pref43") {
    setPref43();
  } else if (AftPref == "pref44") {
    setPref44();
  } else if (AftPref == "pref45") {
    setPref45();
  } else if (AftPref == "pref46") {
    setPref46();
  } else if (AftPref == "pref47") {
    setPref47();
  }

}

// 路線の選択肢を設定する
function setPref1() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定
  var lines = [
  
		{cd:"line11101", label:"JR函館本線(函館～長万部)"},
		{cd:"line11102", label:"JR函館本線(長万部～小樽)"},
		{cd:"line11103", label:"JR函館本線(小樽～旭川)"},
		{cd:"line11104", label:"JR室蘭本線(長万部・室蘭～苫小牧)"},
		{cd:"line11105", label:"JR室蘭本線(苫小牧～岩見沢)"},
		{cd:"line11106", label:"JR根室本線(滝川～新得)"},
		{cd:"line11107", label:"JR根室本線(新得～釧路)"},
		{cd:"line11108", label:"花咲線"},
		{cd:"line11109", label:"JR千歳線"},
		{cd:"line11110", label:"JR石勝線"},
		{cd:"line11111", label:"JR日高本線"},
		{cd:"line11112", label:"JR札沼線"},
		{cd:"line11113", label:"JR留萌本線"},
		{cd:"line11114", label:"JR富良野線"},
		{cd:"line11115", label:"JR宗谷本線"},
		{cd:"line11116", label:"JR石北本線"},
		{cd:"line11117", label:"JR釧網本線"},
		{cd:"line11118", label:"JR海峡線"},
		{cd:"line11119", label:"JR江差線"},
		{cd:"line99108", label:"道南いさりび鉄道線"},
		{cd:"line99101", label:"札幌市営地下鉄東西線"},
		{cd:"line99102", label:"札幌市営地下鉄南北線"},
		{cd:"line99103", label:"札幌市営地下鉄東豊線"},
		{cd:"line99104", label:"札幌市電山鼻線"},
		{cd:"line99105", label:"函館市電２系統"},
		{cd:"line99106", label:"函館市電５系統"},
		{cd:"line99107", label:"ふるさと銀河線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");
    
    op.value = value.cd;
    op.text = value.label;
    
    line.appendChild(op);

  });

}

function setPref2() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11118", label:"JR海峡線"},
		{cd:"line11201", label:"JR東北本線(八戸～青森)"},
		{cd:"line11202", label:"JR奥羽本線(新庄～青森)"},
		{cd:"line11203", label:"はまなすベイライン大湊線"},
		{cd:"line11204", label:"JR五能線"},
		{cd:"line11205", label:"JR津軽線"},
		{cd:"line11206", label:"JR八戸線"},
		{cd:"line99201", label:"津軽鉄道線"},
		{cd:"line99202", label:"弘南鉄道弘南線"},
		{cd:"line99203", label:"弘南鉄道大鰐線"},
		{cd:"line99204", label:"十和田観光電鉄"},
		{cd:"line99205", label:"いわて銀河鉄道線"},
		{cd:"line99206", label:"青い森鉄道線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref3() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11206", label:"JR八戸線"},
		{cd:"line11207", label:"JR岩泉線"},
		{cd:"line11208", label:"ドラゴンレール大船渡線"},
		{cd:"line11209", label:"銀河ドリームライン釜石線"},
		{cd:"line11210", label:"JR北上線"},
		{cd:"line11211", label:"JR田沢湖線"},
		{cd:"line11212", label:"十和田八幡平四季彩ライン"},
		{cd:"line11213", label:"JR山田線"},
		{cd:"line11231", label:"JR東北本線(黒磯～利府・盛岡)"},
		{cd:"line99205", label:"いわて銀河鉄道線"},
		{cd:"line99208", label:"三陸鉄道リアス線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref4() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11208", label:"ドラゴンレール大船渡線"},
		{cd:"line11217", label:"JR仙山線"},
		{cd:"line11221", label:"奥の細道湯けむりライン"},
		{cd:"line11222", label:"JR仙石線"},
		{cd:"line11223", label:"JR石巻線"},
		{cd:"line11224", label:"JR気仙沼線"},
		{cd:"line11231", label:"JR東北本線(黒磯～利府・盛岡)"},
		{cd:"line11230", label:"JR常磐線(いわき～仙台)"},
		{cd:"line99212", label:"くりはら田園鉄道線"},
		{cd:"line99213", label:"阿武隈急行線"},
		{cd:"line99214", label:"仙台市営地下鉄南北線"},
		{cd:"line99217", label:"仙台空港線"},
		{cd:"line99218", label:"仙台市営地下鉄東西線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref5() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11202", label:"JR奥羽本線(新庄～青森)"},
		{cd:"line11204", label:"JR五能線"},
		{cd:"line11210", label:"JR北上線"},
		{cd:"line11211", label:"JR田沢湖線"},
		{cd:"line11212", label:"十和田八幡平四季彩ライン"},
		{cd:"line11214", label:"JR羽越本線"},
		{cd:"line11215", label:"JR男鹿線"},
		{cd:"line99209", label:"秋田内陸線"},
		{cd:"line99210", label:"鳥海山ろく線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref6() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11202", label:"JR奥羽本線(新庄～青森)"},
		{cd:"line11214", label:"JR羽越本線"},
		{cd:"line11216", label:"山形線"},
		{cd:"line11217", label:"JR仙山線"},
		{cd:"line11218", label:"フルーツライン左沢線"},
		{cd:"line11219", label:"JR米坂線"},
		{cd:"line11220", label:"奥の細道最上川ライン"},
		{cd:"line11221", label:"奥の細道湯けむりライン"},
		{cd:"line99211", label:"フラワー長井線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref7() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11216", label:"山形線"},
		{cd:"line11225", label:"JR磐越西線(郡山～会津若松)"},
		{cd:"line11226", label:"森と水とロマンの鉄道"},
		{cd:"line11227", label:"JR只見線"},
		{cd:"line11228", label:"ゆうゆうあぶくまライン"},
		{cd:"line11231", label:"JR東北本線(黒磯～利府・盛岡)"},
		{cd:"line11229", label:"JR常磐線(取手～いわき)"},
		{cd:"line11230", label:"JR常磐線(いわき～仙台)"},
		{cd:"line11338", label:"JR水郡線"},
		{cd:"line99213", label:"阿武隈急行線"},
		{cd:"line99215", label:"福島交通飯坂線"},
		{cd:"line99216", label:"会津鉄道会津線"},
		{cd:"line99341", label:"ほっとスパ・ライン"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref8() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11319", label:"宇都宮線"},
		{cd:"line11229", label:"JR常磐線(取手～いわき)"},
		{cd:"line11320", label:"JR常磐線(上野～取手)"},
		{cd:"line11329", label:"JR鹿島線"},
		{cd:"line11338", label:"JR水郡線"},
		{cd:"line11339", label:"JR水戸線"},
		{cd:"line99309", label:"つくばエクスプレス"},
		{cd:"line99315", label:"ひたちなか海浜鉄道湊線"},
		{cd:"line99318", label:"関東鉄道常総線"},
		{cd:"line99319", label:"関東鉄道竜ヶ崎線"},
		{cd:"line99322", label:"鹿島鉄道線"},
		{cd:"line99323", label:"鹿島臨海鉄道大洗鹿島線"},
		{cd:"line99330", label:"真岡鐵道真岡線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref9() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11231", label:"JR東北本線(黒磯～利府・盛岡)"},
		{cd:"line11319", label:"宇都宮線"},
		{cd:"line11334", label:"JR烏山線"},
		{cd:"line11339", label:"JR水戸線"},
		{cd:"line11340", label:"JR日光線"},
		{cd:"line11341", label:"JR両毛線"},
		{cd:"line21002", label:"東武伊勢崎線"},
		{cd:"line21003", label:"東武日光線"},
		{cd:"line21008", label:"東武宇都宮線"},
		{cd:"line21009", label:"東武鬼怒川線"},
		{cd:"line21010", label:"東武佐野線"},
		{cd:"line99312", label:"わたらせ渓谷線"},
		{cd:"line99330", label:"真岡鐵道真岡線"},
		{cd:"line99341", label:"ほっとスパ・ライン"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref10() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11318", label:"JR八高線(高麗川～高崎)"},
		{cd:"line11323", label:"JR高崎線"},
		{cd:"line11335", label:"JR吾妻線"},
		{cd:"line11337", label:"JR信越本線"},
		{cd:"line11341", label:"JR両毛線"},
		{cd:"line11342", label:"JR上越線"},
		{cd:"line21002", label:"東武伊勢崎線"},
		{cd:"line21003", label:"東武日光線"},
		{cd:"line21010", label:"東武佐野線"},
		{cd:"line21011", label:"東武桐生線"},
		{cd:"line21012", label:"東武小泉線"},
		{cd:"line99312", label:"わたらせ渓谷線"},
		{cd:"line99327", label:"上信電鉄"},
		{cd:"line99328", label:"上毛電気鉄道上毛線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref11() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11305", label:"JR武蔵野線"},
		{cd:"line11317", label:"JR八高線(八王子～高麗川)"},
		{cd:"line11318", label:"JR八高線(高麗川～高崎)"},
		{cd:"line11319", label:"宇都宮線"},
		{cd:"line11321", label:"JR埼京線"},
		{cd:"line11322", label:"JR川越線"},
		{cd:"line11323", label:"JR高崎線"},
		{cd:"line11328", label:"JR成田エクスプレス"},
		{cd:"line11332", label:"JR京浜東北線"},
		{cd:"line11333", label:"JR湘南新宿ライン"},
		{cd:"line21001", label:"東武東上線"},
		{cd:"line21002", label:"東武伊勢崎線"},
		{cd:"line21003", label:"東武日光線"},
		{cd:"line21004", label:"東武野田線"},
		{cd:"line21007", label:"東武越生線"},
		{cd:"line22001", label:"西武池袋線"},
		{cd:"line22002", label:"西武秩父線"},
		{cd:"line22005", label:"西武狭山線"},
		{cd:"line22006", label:"レオライナー"},
		{cd:"line22007", label:"西武新宿線"},
		{cd:"line28006", label:"東京メトロ有楽町線"},
		{cd:"line28010", label:"東京メトロ副都心線"},
		{cd:"line99306", label:"秩父鉄道秩父本線"},
		{cd:"line99307", label:"埼玉高速鉄道線"},
		{cd:"line99309", label:"つくばエクスプレス"},
		{cd:"line99321", label:"ニューシャトル"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref12() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11305", label:"JR武蔵野線"},
		{cd:"line11317", label:"JR八高線(八王子～高麗川)"},
		{cd:"line11318", label:"JR八高線(高麗川～高崎)"},
		{cd:"line11319", label:"宇都宮線"},
		{cd:"line11321", label:"JR埼京線"},
		{cd:"line11322", label:"JR川越線"},
		{cd:"line11323", label:"JR高崎線"},
		{cd:"line11328", label:"JR成田エクスプレス"},
		{cd:"line11332", label:"JR京浜東北線"},
		{cd:"line11333", label:"JR湘南新宿ライン"},
		{cd:"line21001", label:"東武東上線"},
		{cd:"line21002", label:"東武伊勢崎線"},
		{cd:"line11305", label:"JR武蔵野線"},
		{cd:"line11313", label:"JR中央・総武線"},
		{cd:"line11314", label:"JR総武本線"},
		{cd:"line11320", label:"JR常磐線(上野～取手)"},
		{cd:"line11324", label:"JR外房線"},
		{cd:"line11325", label:"JR内房線"},
		{cd:"line11326", label:"JR京葉線"},
		{cd:"line11327", label:"JR成田線"},
		{cd:"line11328", label:"JR成田エクスプレス"},
		{cd:"line11329", label:"JR鹿島線"},
		{cd:"line11330", label:"JR久留里線"},
		{cd:"line11331", label:"JR東金線"},
		{cd:"line21004", label:"東武野田線"},
		{cd:"line23001", label:"京成本線"},
		{cd:"line23004", label:"京成千葉線"},
		{cd:"line23005", label:"京成千原線"},
		{cd:"line23006", label:"成田スカイアクセス"},
		{cd:"line28004", label:"東京メトロ東西線"},
		{cd:"line99304", label:"都営新宿線"},
		{cd:"line99308", label:"いすみ線"},
		{cd:"line99309", label:"つくばエクスプレス"},
		{cd:"line99313", label:"ユーカリが丘線"},
		{cd:"line99324", label:"芝山鉄道線"},
		{cd:"line99325", label:"小湊鉄道線"},
		{cd:"line99329", label:"新京成線"},
		{cd:"line99331", label:"千葉都市モノレール１号線"},
		{cd:"line99332", label:"千葉都市モノレール２号線"},
		{cd:"line99333", label:"流鉄流山線"},
		{cd:"line99335", label:"銚子電鉄線"},
		{cd:"line99338", label:"東葉高速線"},
		{cd:"line99340", label:"北総鉄道北総線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref13() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11301", label:"JR東海道本線(東京～熱海)"},
		{cd:"line11302", label:"JR山手線"},
		{cd:"line11303", label:"JR南武線"},
		{cd:"line11305", label:"JR武蔵野線"},
		{cd:"line11306", label:"JR横浜線"},
		{cd:"line11308", label:"JR横須賀線"},
		{cd:"line11311", label:"JR中央本線(東京～塩尻)"},
		{cd:"line11312", label:"JR中央線(快速)"},
		{cd:"line11313", label:"JR中央・総武線"},
		{cd:"line11314", label:"JR総武本線"},
		{cd:"line11315", label:"JR青梅線"},
		{cd:"line11316", label:"JR五日市線"},
		{cd:"line11317", label:"JR八高線(八王子～高麗川)"},
		{cd:"line11319", label:"宇都宮線"},
		{cd:"line11320", label:"JR常磐線(上野～取手)"},
		{cd:"line11321", label:"JR埼京線"},
		{cd:"line11323", label:"JR高崎線"},
		{cd:"line11326", label:"JR京葉線"},
		{cd:"line11328", label:"JR成田エクスプレス"},
		{cd:"line11332", label:"JR京浜東北線"},
		{cd:"line11333", label:"JR湘南新宿ライン"},
		{cd:"line11343", label:"上野東京ライン"},
		{cd:"line21001", label:"東武東上線"},
		{cd:"line21002", label:"東武伊勢崎線"},
		{cd:"line21005", label:"東武亀戸線"},
		{cd:"line21006", label:"東武大師線"},
		{cd:"line22001", label:"西武池袋線"},
		{cd:"line22003", label:"西武有楽町線"},
		{cd:"line22004", label:"西武豊島線"},
		{cd:"line22006", label:"レオライナー"},
		{cd:"line22007", label:"西武新宿線"},
		{cd:"line22008", label:"西武拝島線"},
		{cd:"line22009", label:"西武西武園線"},
		{cd:"line22010", label:"西武国分寺線"},
		{cd:"line22011", label:"西武多摩湖線"},
		{cd:"line22012", label:"西武多摩川線"},
		{cd:"line23001", label:"京成本線"},
		{cd:"line23002", label:"京成押上線"},
		{cd:"line23003", label:"京成金町線"},
		{cd:"line23006", label:"成田スカイアクセス"},
		{cd:"line24001", label:"京王線"},
		{cd:"line24002", label:"京王相模原線"},
		{cd:"line24003", label:"京王高尾線"},
		{cd:"line24004", label:"京王競馬場線"},
		{cd:"line24005", label:"京王動物園線"},
		{cd:"line24006", label:"京王井の頭線"},
		{cd:"line24007", label:"京王新線"},
		{cd:"line25001", label:"小田急線"},
		{cd:"line25003", label:"小田急多摩線"},
		{cd:"line26001", label:"東急東横線"},
		{cd:"line26002", label:"東急目黒線"},
		{cd:"line26003", label:"東急田園都市線"},
		{cd:"line26004", label:"東急大井町線"},
		{cd:"line26005", label:"東急池上線"},
		{cd:"line26006", label:"東急多摩川線"},
		{cd:"line26007", label:"東急世田谷線"},
		{cd:"line27001", label:"京急本線"},
		{cd:"line27002", label:"京急空港線"},
		{cd:"line28001", label:"東京メトロ銀座線"},
		{cd:"line28002", label:"東京メトロ丸ノ内線"},
		{cd:"line28003", label:"東京メトロ日比谷線"},
		{cd:"line28004", label:"東京メトロ東西線"},
		{cd:"line28005", label:"東京メトロ千代田線"},
		{cd:"line28006", label:"東京メトロ有楽町線"},
		{cd:"line28008", label:"東京メトロ半蔵門線"},
		{cd:"line28009", label:"東京メトロ南北線"},
		{cd:"line28010", label:"東京メトロ副都心線"},
		{cd:"line29003", label:"相鉄・JR直通線"},
		{cd:"line99301", label:"都営大江戸線"},
		{cd:"line99302", label:"都営浅草線"},
		{cd:"line99303", label:"都営三田線"},
		{cd:"line99304", label:"都営新宿線"},
		{cd:"line99305", label:"東京さくらトラム（都電荒川線）"},
		{cd:"line99307", label:"埼玉高速鉄道線"},
		{cd:"line99309", label:"つくばエクスプレス"},
		{cd:"line99311", label:"ゆりかもめ"},
		{cd:"line99334", label:"多摩モノレール"},
		{cd:"line99336", label:"東京モノレール"},
		{cd:"line99337", label:"りんかい線"},
		{cd:"line99340", label:"北総鉄道北総線"},
		{cd:"line99342", label:"日暮里・舎人ライナー"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref14() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11301", label:"JR東海道本線(東京～熱海)"},
		{cd:"line11303", label:"JR南武線"},
		{cd:"line11304", label:"JR鶴見線"},
		{cd:"line11306", label:"JR横浜線"},
		{cd:"line11307", label:"JR根岸線"},
		{cd:"line11308", label:"JR横須賀線"},
		{cd:"line11309", label:"JR相模線"},
		{cd:"line11311", label:"JR中央本線(東京～塩尻)"},
		{cd:"line11328", label:"JR成田エクスプレス"},
		{cd:"line11332", label:"JR京浜東北線"},
		{cd:"line11333", label:"JR湘南新宿ライン"},
		{cd:"line11505", label:"JR御殿場線"},
		{cd:"line24002", label:"京王相模原線"},
		{cd:"line25001", label:"小田急線"},
		{cd:"line25002", label:"小田急江ノ島線"},
		{cd:"line25003", label:"小田急多摩線"},
		{cd:"line26001", label:"東急東横線"},
		{cd:"line26002", label:"東急目黒線"},
		{cd:"line26003", label:"東急田園都市線"},
		{cd:"line26004", label:"東急大井町線"},
		{cd:"line26008", label:"東急こどもの国線"},
		{cd:"line27001", label:"京急本線"},
		{cd:"line27003", label:"京急大師線"},
		{cd:"line27004", label:"京急逗子線"},
		{cd:"line27005", label:"京急久里浜線"},
		{cd:"line29001", label:"相鉄本線"},
		{cd:"line29002", label:"相鉄いずみ野線"},
		{cd:"line29003", label:"相鉄・JR直通線"},
		{cd:"line99310", label:"みなとみらい線"},
		{cd:"line99314", label:"伊豆箱根鉄道大雄山線"},
		{cd:"line99316", label:"ブルーライン"},
		{cd:"line99317", label:"金沢シーサイドライン"},
		{cd:"line99320", label:"江ノ島電鉄線"},
		{cd:"line99326", label:"湘南モノレール"},
		{cd:"line99339", label:"箱根登山鉄道鉄道線"},
		{cd:"line99343", label:"グリーンライン"},
		{cd:"line99344", label:"箱根登山ケーブルカー"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref15() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11214", label:"JR羽越本線"},
		{cd:"line11219", label:"JR米坂線"},
		{cd:"line11226", label:"森と水とロマンの鉄道"},
		{cd:"line11227", label:"JR只見線"},
		{cd:"line11342", label:"JR上越線"},
		{cd:"line11404", label:"JR信越本線(直江津～新潟)"},
		{cd:"line11406", label:"JR白新線"},
		{cd:"line11407", label:"JR飯山線"},
		{cd:"line11408", label:"JR越後線"},
		{cd:"line11409", label:"北アルプス線"},
		{cd:"line11410", label:"JR弥彦線"},
		{cd:"line99402", label:"北越急行ほくほく線"},
		{cd:"line99423", label:"日本海ひすいライン"},
		{cd:"line99424", label:"妙高はねうまライン"},
		{cd:"line99425", label:"あいの風とやま鉄道線"},
		{cd:"line99427", label:"北しなの線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref16() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11416", label:"JR高山本線"},
		{cd:"line11417", label:"JR城端線"},
		{cd:"line11418", label:"JR氷見線"},
		{cd:"line99408", label:"富山地鉄本線"},
		{cd:"line99409", label:"富山地鉄立山線"},
		{cd:"line99410", label:"富山地鉄不二越・上滝線"},
		{cd:"line99411", label:"神岡鉄道神岡線"},
		{cd:"line99412", label:"黒部峡谷鉄道本線"},
		{cd:"line99413", label:"富山地鉄市内線【１・２系統】"},
		{cd:"line99422", label:"富山地鉄富山都心線【３系統(環状線)】"},
		{cd:"line99414", label:"万葉線"},
		{cd:"line99415", label:"富山港線"},
		{cd:"line99425", label:"あいの風とやま鉄道線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref17() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11415", label:"JR北陸本線(米原～金沢)"},
		{cd:"line11419", label:"JR七尾線"},
		{cd:"line99416", label:"北陸鉄道石川線"},
		{cd:"line99417", label:"北陸鉄道浅野川線"},
		{cd:"line99418", label:"のと鉄道七尾線"},
		{cd:"line99425", label:"あいの風とやま鉄道線"},
		{cd:"line99426", label:"IRいしかわ鉄道線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref18() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11415", label:"JR北陸本線(米原～金沢)"},
		{cd:"line11420", label:"敦賀港線"},
		{cd:"line11421", label:"九頭竜線"},
		{cd:"line11422", label:"JR小浜線"},
		{cd:"line99419", label:"えちぜん鉄道勝山永平寺線"},
		{cd:"line99420", label:"えちぜん鉄道三国芦原線"},
		{cd:"line99421", label:"福井鉄道福武線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref19() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11311", label:"JR中央本線(東京～塩尻)"},
		{cd:"line11401", label:"八ヶ岳高原線"},
		{cd:"line11402", label:"JR身延線"},
		{cd:"line99401", label:"富士急行線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref20() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11311", label:"JR中央本線(東京～塩尻)"},
		{cd:"line11401", label:"八ヶ岳高原線"},
		{cd:"line11403", label:"JR信越本線(篠ノ井～長野)"},
		{cd:"line11407", label:"JR飯山線"},
		{cd:"line11409", label:"北アルプス線"},
		{cd:"line11411", label:"JR中央本線(名古屋～塩尻)"},
		{cd:"line11412", label:"JR篠ノ井線"},
		{cd:"line11413", label:"JR飯田線(豊橋～天竜峡)"},
		{cd:"line11414", label:"JR飯田線(天竜峡～辰野)"},
		{cd:"line99403", label:"しなの鉄道線"},
		{cd:"line99404", label:"上田電鉄別所線"},
		{cd:"line99405", label:"長野電鉄長野線"},
		{cd:"line99406", label:"長野電鉄屋代線"},
		{cd:"line99407", label:"上高地線"},
		{cd:"line99427", label:"北しなの線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref21() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11411", label:"JR中央本線(名古屋～塩尻)"},
		{cd:"line11416", label:"JR高山本線"},
		{cd:"line11502", label:"JR東海道本線(浜松～岐阜)"},
		{cd:"line11503", label:"JR東海道本線(岐阜～美濃赤坂・米原)"},
		{cd:"line11507", label:"JR太多線"},
		{cd:"line30001", label:"名鉄名古屋本線"},
		{cd:"line30015", label:"名鉄犬山線"},
		{cd:"line30016", label:"名鉄各務原線"},
		{cd:"line30017", label:"名鉄広見線"},
		{cd:"line30020", label:"名鉄竹鼻線"},
		{cd:"line30021", label:"名鉄羽島線"},
		{cd:"line31004", label:"近鉄養老線"},
		{cd:"line99411", label:"神岡鉄道神岡線"},
		{cd:"line99524", label:"明知鉄道明知線"},
		{cd:"line99525", label:"長良川鉄道越美南線"},
		{cd:"line99526", label:"樽見鉄道樽見線"},
		{cd:"line99532", label:"養老鉄道養老線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref22() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

	{cd:"line11301", label:"JR東海道本線(東京～熱海)"},
	{cd:"line11402", label:"JR身延線"},
	{cd:"line11413", label:"JR飯田線(豊橋～天竜峡)"},
	{cd:"line11501", label:"JR東海道本線(熱海～浜松)"},
	{cd:"line11502", label:"JR東海道本線(浜松～岐阜)"},
	{cd:"line11504", label:"JR伊東線"},
	{cd:"line11505", label:"JR御殿場線"},
	{cd:"line99501", label:"伊豆急行線"},
	{cd:"line99502", label:"伊豆箱根鉄道駿豆線"},
	{cd:"line99503", label:"岳南鉄道線"},
	{cd:"line99504", label:"静岡鉄道静岡清水線"},
	{cd:"line99505", label:"天竜浜名湖線"},
	{cd:"line99506", label:"遠州鉄道鉄道線"},
	{cd:"line99507", label:"大井川鐵道大井川本線"},
	{cd:"line99508", label:"南アルプスあぷとライン"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref23() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11411", label:"JR中央本線(名古屋～塩尻)"},
		{cd:"line11413", label:"JR飯田線(豊橋～天竜峡)"},
		{cd:"line11502", label:"JR東海道本線(浜松～岐阜)"},
		{cd:"line11506", label:"JR武豊線"},
		{cd:"line11508", label:"JR関西本線(名古屋～亀山)"},
		{cd:"line30001", label:"名鉄名古屋本線"},
		{cd:"line30002", label:"名鉄豊川線"},
		{cd:"line30003", label:"名鉄西尾線"},
		{cd:"line30004", label:"名鉄蒲郡線"},
		{cd:"line30005", label:"名鉄三河線"},
		{cd:"line30006", label:"名鉄豊田線"},
		{cd:"line30007", label:"名鉄空港線"},
		{cd:"line30008", label:"名鉄常滑線"},
		{cd:"line30009", label:"名鉄河和線"},
		{cd:"line30010", label:"名鉄知多新線"},
		{cd:"line30011", label:"名鉄築港線"},
		{cd:"line30012", label:"名鉄瀬戸線"},
		{cd:"line30013", label:"名鉄津島線"},
		{cd:"line30014", label:"名鉄尾西線"},
		{cd:"line30015", label:"名鉄犬山線"},
		{cd:"line30017", label:"名鉄広見線"},
		{cd:"line30018", label:"名鉄小牧線"},
		{cd:"line30019", label:"犬山モノレール"},
		{cd:"line31027", label:"近鉄名古屋線"},
		{cd:"line99509", label:"あおなみ線"},
		{cd:"line99510", label:"東海交通事業城北線"},
		{cd:"line99511", label:"愛知環状鉄道線"},
		{cd:"line99512", label:"リニモ"},
		{cd:"line99513", label:"名古屋市営地下鉄東山線"},
		{cd:"line99514", label:"名古屋市営地下鉄名城線"},
		{cd:"line99515", label:"名古屋市営地下鉄名港線"},
		{cd:"line99516", label:"名古屋市営地下鉄鶴舞線"},
		{cd:"line99517", label:"名古屋市営地下鉄桜通線"},
		{cd:"line99518", label:"名古屋市営地下鉄上飯田線"},
		{cd:"line99519", label:"ピーチライナー"},
		{cd:"line99520", label:"豊橋鉄道渥美線"},
		{cd:"line99521", label:"豊橋鉄道東田本線"},
		{cd:"line99522", label:"豊橋鉄道運動公園前線"},
		{cd:"line99523", label:"ゆとりーとライン"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref24() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11508", label:"JR関西本線(名古屋～亀山)"},
		{cd:"line11509", label:"JR関西本線(亀山～加茂)"},
		{cd:"line11510", label:"JR紀勢本線"},
		{cd:"line11511", label:"JR草津線"},
		{cd:"line11512", label:"JR参宮線"},
		{cd:"line11513", label:"JR名松線"},
		{cd:"line31004", label:"近鉄養老線"},
		{cd:"line31005", label:"近鉄大阪線"},
		{cd:"line31006", label:"近鉄伊賀線"},
		{cd:"line31008", label:"近鉄湯の山線"},
		{cd:"line31009", label:"近鉄山田線"},
		{cd:"line31010", label:"近鉄鳥羽線"},
		{cd:"line31013", label:"内部線"},
		{cd:"line31014", label:"八王子線"},
		{cd:"line31015", label:"近鉄志摩線"},
		{cd:"line31019", label:"近鉄鈴鹿線"},
		{cd:"line31027", label:"近鉄名古屋線"},
		{cd:"line99528", label:"三岐鉄道三岐線"},
		{cd:"line99529", label:"三岐鉄道北勢線"},
		{cd:"line99530", label:"伊勢鉄道伊勢線"},
		{cd:"line99531", label:"伊賀鉄道伊賀線"},
		{cd:"line99532", label:"養老鉄道養老線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref25() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11415", label:"JR北陸本線(米原～金沢)"},
		{cd:"line11503", label:"JR東海道本線(岐阜～美濃赤坂・米原)"},
		{cd:"line11511", label:"JR草津線"},
		{cd:"line11601", label:"琵琶湖線"},
		{cd:"line11605", label:"JR湖西線"},
		{cd:"line33006", label:"京阪石山坂本線"},
		{cd:"line33007", label:"京阪京津線"},
		{cd:"line99601", label:"近江鉄道本線"},
		{cd:"line99602", label:"近江鉄道多賀線"},
		{cd:"line99603", label:"近江鉄道八日市線"},
		{cd:"line99604", label:"信楽高原鐵道信楽線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref26() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11422", label:"JR小浜線"},
		{cd:"line11509", label:"JR関西本線(亀山～加茂)"},
		{cd:"line11601", label:"琵琶湖線"},
		{cd:"line11602", label:"JR京都線"},
		{cd:"line11605", label:"JR湖西線"},
		{cd:"line11607", label:"大和路線"},
		{cd:"line11614", label:"嵯峨野線"},
		{cd:"line11615", label:"JR山陰本線(園部～豊岡)"},
		{cd:"line11617", label:"学研都市線"},
		{cd:"line11618", label:"奈良線"},
		{cd:"line11622", label:"JR舞鶴線"},
		{cd:"line11630", label:"福知山線(篠山口～福知山)"},
		{cd:"line31025", label:"近鉄京都線"},
		{cd:"line33001", label:"京阪本線"},
		{cd:"line33002", label:"京阪宇治線"},
		{cd:"line33004", label:"京阪鴨東線"},
		{cd:"line33005", label:"石清水八幡宮参道ケーブル"},
		{cd:"line33007", label:"京阪京津線"},
		{cd:"line34003", label:"阪急京都本線"},
		{cd:"line34009", label:"阪急嵐山線"},
		{cd:"line99605", label:"嵯峨野観光線"},
		{cd:"line99606", label:"叡山電鉄叡山本線"},
		{cd:"line99607", label:"叡山電鉄鞍馬線"},
		{cd:"line99608", label:"宮福線"},
		{cd:"line99609", label:"宮豊線"},
		{cd:"line99610", label:"京都市営地下鉄烏丸線"},
		{cd:"line99611", label:"京都市営地下鉄東西線"},
		{cd:"line99612", label:"京福電鉄嵐山本線"},
		{cd:"line99613", label:"京福電鉄北野線"},
		{cd:"line99653", label:"宮舞線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref27() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11602", label:"JR京都線"},
		{cd:"line11603", label:"JR神戸線(大阪～神戸)"},
		{cd:"line11607", label:"大和路線"},
		{cd:"line11617", label:"学研都市線"},
		{cd:"line11623", label:"大阪環状線"},
		{cd:"line11624", label:"JRゆめ咲線"},
		{cd:"line11625", label:"JR東西線"},
		{cd:"line11626", label:"阪和線(天王寺～和歌山)"},
		{cd:"line11627", label:"羽衣線"},
		{cd:"line11628", label:"JR関西空港線"},
		{cd:"line11629", label:"JR宝塚線"},
		{cd:"line11641", label:"おおさか東線"},
		{cd:"line31001", label:"近鉄難波線"},
		{cd:"line31003", label:"近鉄南大阪線"},
		{cd:"line31005", label:"近鉄大阪線"},
		{cd:"line31012", label:"近鉄道明寺線"},
		{cd:"line31020", label:"近鉄奈良線"},
		{cd:"line31021", label:"近鉄信貴線"},
		{cd:"line31022", label:"近鉄長野線"},
		{cd:"line31023", label:"近鉄けいはんな線"},
		{cd:"line31024", label:"西信貴ケーブル"},
		{cd:"line32001", label:"南海本線"},
		{cd:"line32002", label:"南海空港線"},
		{cd:"line32004", label:"南海高師浜線"},
		{cd:"line32006", label:"南海多奈川線"},
		{cd:"line32007", label:"南海高野線"},
		{cd:"line32009", label:"南海汐見橋線"},
		{cd:"line33001", label:"京阪本線"},
		{cd:"line33003", label:"京阪交野線"},
		{cd:"line33008", label:"京阪中之島線"},
		{cd:"line34001", label:"阪急神戸本線"},
		{cd:"line34002", label:"阪急宝塚本線"},
		{cd:"line34003", label:"阪急京都本線"},
		{cd:"line34007", label:"阪急箕面線"},
		{cd:"line34008", label:"阪急千里線"},
		{cd:"line35001", label:"阪神本線"},
		{cd:"line35002", label:"阪神なんば線"},
		{cd:"line99614", label:"北大阪急行電鉄"},
		{cd:"line99615", label:"能勢電鉄妙見線"},
		{cd:"line99616", label:"泉北高速鉄道線"},
		{cd:"line99617", label:"水間鉄道水間線"},
		{cd:"line99618", label:"大阪メトロ御堂筋線"},
		{cd:"line99619", label:"大阪メトロ谷町線"},
		{cd:"line99620", label:"大阪メトロ四つ橋線"},
		{cd:"line99621", label:"大阪メトロ中央線"},
		{cd:"line99622", label:"大阪メトロ千日前線"},
		{cd:"line99623", label:"大阪メトロ堺筋線"},
		{cd:"line99624", label:"大阪メトロ長堀鶴見緑地線"},
		{cd:"line99625", label:"大阪メトロ南港ポートタウン線"},
		{cd:"line99626", label:"大阪モノレール線"},
		{cd:"line99627", label:"大阪モノレール彩都線"},
		{cd:"line99628", label:"阪堺電軌上町線"},
		{cd:"line99629", label:"阪堺電軌阪堺線"},
		{cd:"line99652", label:"大阪メトロ今里筋線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref28() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11603", label:"JR神戸線(大阪～神戸)"},
		{cd:"line11608", label:"JR神戸線(神戸～姫路)"},
		{cd:"line11609", label:"JR山陽本線(姫路～岡山)"},
		{cd:"line11613", label:"JR山陽本線(兵庫～和田岬)"},
		{cd:"line11615", label:"JR山陰本線(園部～豊岡)"},
		{cd:"line11616", label:"JR山陰本線(豊岡～米子)"},
		{cd:"line11625", label:"JR東西線"},
		{cd:"line11629", label:"JR宝塚線"},
		{cd:"line11630", label:"福知山線(篠山口～福知山)"},
		{cd:"line11631", label:"JR赤穂線"},
		{cd:"line11632", label:"JR加古川線"},
		{cd:"line11633", label:"JR姫新線(姫路～佐用)"},
		{cd:"line11634", label:"JR姫新線(佐用～新見)"},
		{cd:"line11635", label:"JR播但線"},
		{cd:"line34001", label:"阪急神戸本線"},
		{cd:"line34002", label:"阪急宝塚本線"},
		{cd:"line34004", label:"阪急今津線"},
		{cd:"line34005", label:"阪急甲陽線"},
		{cd:"line34006", label:"阪急伊丹線"},
		{cd:"line35001", label:"阪神本線"},
		{cd:"line35002", label:"阪神なんば線"},
		{cd:"line35003", label:"阪神武庫川線"},
		{cd:"line99609", label:"宮豊線"},
		{cd:"line99615", label:"能勢電鉄妙見線"},
		{cd:"line99630", label:"神戸高速東西線"},
		{cd:"line99631", label:"神戸高速南北線"},
		{cd:"line99632", label:"有馬線"},
		{cd:"line99633", label:"三田線"},
		{cd:"line99634", label:"公園都市線"},
		{cd:"line99635", label:"粟生線"},
		{cd:"line99636", label:"北神線"},
		{cd:"line99637", label:"山陽電鉄本線"},
		{cd:"line99638", label:"山陽電鉄網干線"},
		{cd:"line99640", label:"能勢電鉄日生線"},
		{cd:"line99642", label:"三木鉄道三木線"},
		{cd:"line99643", label:"北条鉄道北条線"},
		{cd:"line99644", label:"智頭急行智頭線"},
		{cd:"line99645", label:"神戸市営地下鉄西神線"},
		{cd:"line99646", label:"神戸市営地下鉄山手線"},
		{cd:"line99647", label:"夢かもめ"},
		{cd:"line99648", label:"ポートライナー"},
		{cd:"line99649", label:"六甲ライナー"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref29() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11607", label:"大和路線"},
		{cd:"line11618", label:"奈良線"},
		{cd:"line11636", label:"JR和歌山線"},
		{cd:"line11637", label:"万葉まほろば線"},
		{cd:"line31002", label:"近鉄橿原線"},
		{cd:"line31003", label:"近鉄南大阪線"},
		{cd:"line31005", label:"近鉄大阪線"},
		{cd:"line31007", label:"近鉄吉野線"},
		{cd:"line31011", label:"近鉄天理線"},
		{cd:"line31016", label:"近鉄生駒線"},
		{cd:"line31017", label:"近鉄田原本線"},
		{cd:"line31018", label:"近鉄御所線"},
		{cd:"line31020", label:"近鉄奈良線"},
		{cd:"line31023", label:"近鉄けいはんな線"},
		{cd:"line31025", label:"近鉄京都線"},
		{cd:"line31026", label:"生駒ケーブル"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref30() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11510", label:"JR紀勢本線"},
		{cd:"line11626", label:"阪和線(天王寺～和歌山)"},
		{cd:"line11636", label:"JR和歌山線"},
		{cd:"line11639", label:"きのくに線"},
		{cd:"line11640", label:"紀勢本線(和歌山～和歌山市)"},
		{cd:"line32001", label:"南海本線"},
		{cd:"line32003", label:"南海和歌山港線"},
		{cd:"line32005", label:"南海加太線"},
		{cd:"line32007", label:"南海高野線"},
		{cd:"line32008", label:"南海高野山ケーブル"},
		{cd:"line99650", label:"紀州鉄道線"},
		{cd:"line99651", label:"貴志川線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref31() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11616", label:"JR山陰本線(豊岡～米子)"},
		{cd:"line11701", label:"JR山陰本線(米子～益田)"},
		{cd:"line11703", label:"JR伯備線"},
		{cd:"line11704", label:"JR因美線"},
		{cd:"line11705", label:"JR境線"},
		{cd:"line99644", label:"智頭急行智頭線"},
		{cd:"line99701", label:"若桜線"},


  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref32() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11701", label:"JR山陰本線(米子～益田)"},
		{cd:"line11702", label:"JR山陰本線(益田～下関)"},
		{cd:"line11706", label:"JR木次線"},
		{cd:"line11707", label:"JR三江線"},
		{cd:"line11708", label:"JR山口線"},
		{cd:"line99702", label:"北松江線"},
		{cd:"line99703", label:"大社線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref33() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11609", label:"JR山陽本線(姫路～岡山)"},
		{cd:"line11610", label:"JR山陽本線(岡山～三原)"},
		{cd:"line11631", label:"JR赤穂線"},
		{cd:"line11634", label:"JR姫新線(佐用～新見)"},
		{cd:"line11703", label:"JR伯備線"},
		{cd:"line11704", label:"JR因美線"},
		{cd:"line11709", label:"JR宇野線"},
		{cd:"line11710", label:"瀬戸大橋線"},
		{cd:"line11713", label:"JR吉備線"},
		{cd:"line11714", label:"JR芸備線"},
		{cd:"line11715", label:"JR津山線"},
		{cd:"line99644", label:"智頭急行智頭線"},
		{cd:"line99704", label:"水島本線"},
		{cd:"line99705", label:"井原線"},
		{cd:"line99706", label:"東山線"},
		{cd:"line99707", label:"清輝橋線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref34() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11610", label:"JR山陽本線(岡山～三原)"},
		{cd:"line11611", label:"JR山陽本線(三原～岩国)"},
		{cd:"line11706", label:"JR木次線"},
		{cd:"line11707", label:"JR三江線"},
		{cd:"line11714", label:"JR芸備線"},
		{cd:"line11716", label:"JR呉線"},
		{cd:"line11717", label:"JR可部線"},
		{cd:"line11720", label:"JR福塩線"},
		{cd:"line99705", label:"井原線"},
		{cd:"line99708", label:"スカイレールみどり坂線"},
		{cd:"line99709", label:"アストラムライン"},
		{cd:"line99710", label:"広電１号線(宇品線)"},
		{cd:"line99711", label:"広電２号線(宮島線)"},
		{cd:"line99712", label:"広電３号線"},
		{cd:"line99713", label:"広電５号線(皆実線)"},
		{cd:"line99714", label:"広電６号線(江波線)"},
		{cd:"line99715", label:"広電７号線"},
		{cd:"line99716", label:"広電８号線(横川線)"},
		{cd:"line99717", label:"広電９号線(白島線)"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref35() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11611", label:"JR山陽本線(三原～岩国)"},
		{cd:"line11612", label:"JR山陽本線(岩国～門司)"},
		{cd:"line11702", label:"JR山陰本線(益田～下関)"},
		{cd:"line11708", label:"JR山口線"},
		{cd:"line11721", label:"JR宇部線"},
		{cd:"line11722", label:"JR美祢線"},
		{cd:"line11723", label:"JR小野田線"},
		{cd:"line11724", label:"JR岩徳線"},
		{cd:"line11902", label:"JR鹿児島本線(下関・門司港～博多)"},
		{cd:"line99718", label:"錦川清流線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref36() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11801", label:"JR土讃線"},
		{cd:"line11802", label:"JR高徳線"},
		{cd:"line11803", label:"よしの川ブルーライン"},
		{cd:"line11804", label:"JR牟岐線"},
		{cd:"line11805", label:"JR鳴門線"},
		{cd:"line99801", label:"阿波室戸シーサイドライン"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref37() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11710", label:"瀬戸大橋線"},
		{cd:"line11801", label:"JR土讃線"},
		{cd:"line11802", label:"JR高徳線"},
		{cd:"line11806", label:"JR予讃線"},
		{cd:"line99802", label:"琴電琴平線"},
		{cd:"line99803", label:"琴電長尾線"},
		{cd:"line99804", label:"琴電志度線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref38() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11806", label:"JR予讃線"},
		{cd:"line11807", label:"JR予讃・内子線"},
		{cd:"line11808", label:"しまんとグリーンライン"},
		{cd:"line99805", label:"伊予鉄道郡中線"},
		{cd:"line99806", label:"伊予鉄道高浜線"},
		{cd:"line99807", label:"伊予鉄道横河原線"},
		{cd:"line99808", label:"伊予鉄道環状線"},
		{cd:"line99809", label:"伊予鉄道環状線"},
		{cd:"line99810", label:"伊予鉄道市駅線"},
		{cd:"line99811", label:"伊予鉄道松山駅前線"},
		{cd:"line99812", label:"伊予鉄道本町線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref39() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11801", label:"JR土讃線"},
		{cd:"line11808", label:"しまんとグリーンライン"},
		{cd:"line99801", label:"阿波室戸シーサイドライン"},
		{cd:"line99814", label:"中村線"},
		{cd:"line99815", label:"宿毛線"},
		{cd:"line99816", label:"ごめん・なはり線"},
		{cd:"line99817", label:"ごめん線"},
		{cd:"line99818", label:"伊野線"},
		{cd:"line99819", label:"桟橋線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref40() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11612", label:"JR山陽本線(岩国～門司)"},
		{cd:"line11702", label:"JR山陰本線(益田～下関)"},
		{cd:"line11901", label:"JR博多南線"},
		{cd:"line11902", label:"JR鹿児島本線(下関・門司港～博多)"},
		{cd:"line11903", label:"JR鹿児島本線(博多～八代)"},
		{cd:"line11906", label:"JR日豊本線(門司港～佐伯)"},
		{cd:"line11908", label:"福北ゆたか線"},
		{cd:"line11909", label:"JR筑肥線(姪浜～西唐津)"},
		{cd:"line11910", label:"若松線"},
		{cd:"line11911", label:"福北ゆたか線(折尾～桂川)"},
		{cd:"line11912", label:"原田線"},
		{cd:"line11913", label:"ゆふ高原線"},
		{cd:"line11914", label:"JR日田彦山線"},
		{cd:"line11915", label:"JR後藤寺線"},
		{cd:"line11916", label:"海の中道線"},
		{cd:"line11917", label:"JR香椎線(香椎～宇美)"},
		{cd:"line36001", label:"西鉄天神大牟田線"},
		{cd:"line36002", label:"西鉄太宰府線"},
		{cd:"line36003", label:"西鉄甘木線"},
		{cd:"line36004", label:"西鉄貝塚線"},
		{cd:"line99901", label:"甘木鉄道"},
		{cd:"line99902", label:"伊田線"},
		{cd:"line99903", label:"糸田線"},
		{cd:"line99904", label:"田川線"},
		{cd:"line99905", label:"福岡市営地下鉄空港線"},
		{cd:"line99906", label:"福岡市営地下鉄箱崎線"},
		{cd:"line99907", label:"福岡市営地下鉄七隈線"},
		{cd:"line99908", label:"北九州モノレール"},
		{cd:"line99909", label:"筑豊電気鉄道線"},
		{cd:"line99928", label:"門司港レトロ観光線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref41() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11903", label:"JR鹿児島本線(博多～八代)"},
		{cd:"line11905", label:"JR長崎本線(鳥栖～長崎)"},
		{cd:"line11909", label:"JR筑肥線(姪浜～西唐津)"},
		{cd:"line11918", label:"JR佐世保線"},
		{cd:"line11920", label:"JR筑肥線(西唐津～伊万里)"},
		{cd:"line11921", label:"JR唐津線"},
		{cd:"line99901", label:"甘木鉄道"},
		{cd:"line99910", label:"西九州線(有田～伊万里)"},
		{cd:"line99911", label:"西九州線(伊万里～佐世保)"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref42() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11905", label:"JR長崎本線(鳥栖～長崎)"},
		{cd:"line11918", label:"JR佐世保線"},
		{cd:"line11922", label:"JR大村線"},
		{cd:"line99911", label:"西九州線(伊万里～佐世保)"},
		{cd:"line99912", label:"島原鉄道線"},
		{cd:"line99913", label:"長崎電軌１系統"},
		{cd:"line99914", label:"長崎電軌３系統"},
		{cd:"line99915", label:"長崎電軌４系統"},
		{cd:"line99916", label:"長崎電軌５系統"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref43() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11903", label:"JR鹿児島本線(博多～八代)"},
		{cd:"line11923", label:"阿蘇高原線"},
		{cd:"line11924", label:"三角線（あまくさみすみ線）"},
		{cd:"line11925", label:"えびの高原線(八代～吉松)"},
		{cd:"line99917", label:"熊本電鉄本線"},
		{cd:"line99918", label:"熊本電鉄上熊本線"},
		{cd:"line99919", label:"高森線"},
		{cd:"line99920", label:"湯前線"},
		{cd:"line99921", label:"肥薩おれんじ鉄道線"},
		{cd:"line99922", label:"熊本市電Ａ系統"},
		{cd:"line99923", label:"熊本市電Ｂ系統"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref44() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11906", label:"JR日豊本線(門司港～佐伯)"},
		{cd:"line11907", label:"JR日豊本線(佐伯～鹿児島中央)"},
		{cd:"line11913", label:"ゆふ高原線"},
		{cd:"line11914", label:"JR日田彦山線"},
		{cd:"line11923", label:"阿蘇高原線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref45() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11907", label:"JR日豊本線(佐伯～鹿児島中央)"},
		{cd:"line11925", label:"えびの高原線(八代～吉松)"},
		{cd:"line11927", label:"JR宮崎空港線"},
		{cd:"line11928", label:"JR日南線"},
		{cd:"line11929", label:"えびの高原線"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref46() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line11904", label:"JR鹿児島本線(川内～鹿児島)"},
		{cd:"line11907", label:"JR日豊本線(佐伯～鹿児島中央)"},
		{cd:"line11925", label:"えびの高原線(八代～吉松)"},
		{cd:"line11926", label:"JR肥薩線(吉松～隼人)"},
		{cd:"line11928", label:"JR日南線"},
		{cd:"line11929", label:"えびの高原線"},
		{cd:"line11930", label:"JR指宿枕崎線"},
		{cd:"line99921", label:"肥薩おれんじ鉄道線"},
		{cd:"line99925", label:"鹿児島市電１系統"},
		{cd:"line99926", label:"鹿児島市電２系統"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}

function setPref47() {

  // 選択肢を空にする
  line.textContent = null;

  // 選択肢を設定

  var lines = [

		{cd:"line99927", label:"ゆいレール"},

  ];

  lines.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;
    op.text = value.label;

    line.appendChild(op);

  });

}