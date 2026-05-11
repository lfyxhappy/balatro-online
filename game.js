var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

(function() {
  var packages = [{"name":"game-core.data","uuid":"1ce10fbb5444c9dc63e01337cdd026876f9bfd783c74d687a01a1fef7867fa3b","remote_package_size":16695540,"files":[{"filename":"/back.lua","start":0,"end":12555},{"filename":"/bit.lua","start":12555,"end":13192},{"filename":"/blind.lua","start":13192,"end":40726},{"filename":"/card_character.lua","start":40726,"end":46084},{"filename":"/card.lua","start":46084,"end":288635},{"filename":"/cardarea.lua","start":288635,"end":320717},{"filename":"/challenges.lua","start":320717,"end":344649},{"filename":"/conf.lua","start":344649,"end":344859},{"filename":"/engine/animatedsprite.lua","start":344859,"end":348131},{"filename":"/engine/controller.lua","start":348131,"end":408785},{"filename":"/engine/event.lua","start":408785,"end":415819},{"filename":"/engine/http_manager.lua","start":415819,"end":416489},{"filename":"/engine/moveable.lua","start":416489,"end":437020},{"filename":"/engine/node.lua","start":437020,"end":452737},{"filename":"/engine/object.lua","start":452737,"end":453403},{"filename":"/engine/particles.lua","start":453403,"end":459998},{"filename":"/engine/profile.lua","start":459998,"end":464571},{"filename":"/engine/save_manager.lua","start":464571,"end":468365},{"filename":"/engine/sound_manager.lua","start":468365,"end":475154},{"filename":"/engine/sprite.lua","start":475154,"end":483120},{"filename":"/engine/string_packer.lua","start":483120,"end":485900},{"filename":"/engine/text.lua","start":485900,"end":500856},{"filename":"/engine/ui.lua","start":500856,"end":546153},{"filename":"/functions/button_callbacks.lua","start":546153,"end":662518},{"filename":"/functions/common_events.lua","start":662518,"end":793176},{"filename":"/functions/misc_functions.lua","start":793176,"end":866452},{"filename":"/functions/state_events.lua","start":866452,"end":942414},{"filename":"/functions/test_functions.lua","start":942414,"end":950563},{"filename":"/functions/UI_definitions.lua","start":950563,"end":1300318},{"filename":"/game.lua","start":1300318,"end":1532230},{"filename":"/globals.lua","start":1532230,"end":1548466},{"filename":"/localization/zh_CN.lua","start":1548466,"end":1695873},{"filename":"/main.lua","start":1695873,"end":1707348},{"filename":"/resources/fonts/m6x11plus.ttf","start":1707348,"end":1742413},{"filename":"/resources/fonts/NotoSansSC-Bold.ttf","start":1742413,"end":12292529},{"filename":"/resources/gamecontrollerdb.txt","start":12292529,"end":12690353},{"filename":"/resources/shaders/background.fs","start":12690353,"end":12692873},{"filename":"/resources/shaders/booster.fs","start":12692873,"end":12698196},{"filename":"/resources/shaders/CRT.fs","start":12698196,"end":12705466},{"filename":"/resources/shaders/debuff.fs","start":12705466,"end":12710630},{"filename":"/resources/shaders/dissolve.fs","start":12710630,"end":12714899},{"filename":"/resources/shaders/flame.fs","start":12714899,"end":12717748},{"filename":"/resources/shaders/flash.fs","start":12717748,"end":12718649},{"filename":"/resources/shaders/foil.fs","start":12718649,"end":12724584},{"filename":"/resources/shaders/gold_seal.fs","start":12724584,"end":12725385},{"filename":"/resources/shaders/holo.fs","start":12725385,"end":12731392},{"filename":"/resources/shaders/hologram.fs","start":12731392,"end":12737154},{"filename":"/resources/shaders/negative_shine.fs","start":12737154,"end":12742064},{"filename":"/resources/shaders/negative.fs","start":12742064,"end":12746958},{"filename":"/resources/shaders/played.fs","start":12746958,"end":12751748},{"filename":"/resources/shaders/polychrome.fs","start":12751748,"end":12757574},{"filename":"/resources/shaders/skew.fs","start":12757574,"end":12758245},{"filename":"/resources/shaders/splash.fs","start":12758245,"end":12760852},{"filename":"/resources/shaders/vortex.fs","start":12760852,"end":12761663},{"filename":"/resources/shaders/voucher.fs","start":12761663,"end":12766492},{"filename":"/resources/textures/1x/8BitDeck_opt2.png","start":12766492,"end":12828629},{"filename":"/resources/textures/1x/8BitDeck.png","start":12828629,"end":12875507},{"filename":"/resources/textures/1x/balatro_alt.png","start":12875507,"end":12896333},{"filename":"/resources/textures/1x/balatro.png","start":12896333,"end":12923210},{"filename":"/resources/textures/1x/BlindChips.png","start":12923210,"end":13007022},{"filename":"/resources/textures/1x/boosters.png","start":13007022,"end":13177640},{"filename":"/resources/textures/1x/chips.png","start":13177640,"end":13185895},{"filename":"/resources/textures/1x/collabs/collab_AC_1.png","start":13185895,"end":13194274},{"filename":"/resources/textures/1x/collabs/collab_AC_2.png","start":13194274,"end":13202589},{"filename":"/resources/textures/1x/collabs/collab_AU_1.png","start":13202589,"end":13207621},{"filename":"/resources/textures/1x/collabs/collab_AU_2.png","start":13207621,"end":13214925},{"filename":"/resources/textures/1x/collabs/collab_BUG_1.png","start":13214925,"end":13226077},{"filename":"/resources/textures/1x/collabs/collab_BUG_2.png","start":13226077,"end":13238797},{"filename":"/resources/textures/1x/collabs/collab_C7_1.png","start":13238797,"end":13248600},{"filename":"/resources/textures/1x/collabs/collab_C7_2.png","start":13248600,"end":13258279},{"filename":"/resources/textures/1x/collabs/collab_CL_1.png","start":13258279,"end":13264762},{"filename":"/resources/textures/1x/collabs/collab_CL_2.png","start":13264762,"end":13273024},{"filename":"/resources/textures/1x/collabs/collab_CR_1.png","start":13273024,"end":13281191},{"filename":"/resources/textures/1x/collabs/collab_CR_2.png","start":13281191,"end":13290192},{"filename":"/resources/textures/1x/collabs/collab_CYP_1.png","start":13290192,"end":13297456},{"filename":"/resources/textures/1x/collabs/collab_CYP_2.png","start":13297456,"end":13304778},{"filename":"/resources/textures/1x/collabs/collab_D2_1.png","start":13304778,"end":13312492},{"filename":"/resources/textures/1x/collabs/collab_D2_2.png","start":13312492,"end":13321333},{"filename":"/resources/textures/1x/collabs/collab_DBD_1.png","start":13321333,"end":13330020},{"filename":"/resources/textures/1x/collabs/collab_DBD_2.png","start":13330020,"end":13339109},{"filename":"/resources/textures/1x/collabs/collab_DS_1.png","start":13339109,"end":13346907},{"filename":"/resources/textures/1x/collabs/collab_DS_2.png","start":13346907,"end":13354638},{"filename":"/resources/textures/1x/collabs/collab_DTD_1.png","start":13354638,"end":13362072},{"filename":"/resources/textures/1x/collabs/collab_DTD_2.png","start":13362072,"end":13368034},{"filename":"/resources/textures/1x/collabs/collab_EG_1.png","start":13368034,"end":13372767},{"filename":"/resources/textures/1x/collabs/collab_EG_2.png","start":13372767,"end":13377966},{"filename":"/resources/textures/1x/collabs/collab_FO_1.png","start":13377966,"end":13387211},{"filename":"/resources/textures/1x/collabs/collab_FO_2.png","start":13387211,"end":13396769},{"filename":"/resources/textures/1x/collabs/collab_PC_1.png","start":13396769,"end":13404439},{"filename":"/resources/textures/1x/collabs/collab_PC_2.png","start":13404439,"end":13411936},{"filename":"/resources/textures/1x/collabs/collab_R_1.png","start":13411936,"end":13423644},{"filename":"/resources/textures/1x/collabs/collab_R_2.png","start":13423644,"end":13436445},{"filename":"/resources/textures/1x/collabs/collab_SK_1.png","start":13436445,"end":13448329},{"filename":"/resources/textures/1x/collabs/collab_SK_2.png","start":13448329,"end":13459970},{"filename":"/resources/textures/1x/collabs/collab_STP_1.png","start":13459970,"end":13468408},{"filename":"/resources/textures/1x/collabs/collab_STP_2.png","start":13468408,"end":13476833},{"filename":"/resources/textures/1x/collabs/collab_STS_1.png","start":13476833,"end":13485994},{"filename":"/resources/textures/1x/collabs/collab_STS_2.png","start":13485994,"end":13496093},{"filename":"/resources/textures/1x/collabs/collab_SV_1.png","start":13496093,"end":13503971},{"filename":"/resources/textures/1x/collabs/collab_SV_2.png","start":13503971,"end":13512553},{"filename":"/resources/textures/1x/collabs/collab_TBoI_1.png","start":13512553,"end":13519990},{"filename":"/resources/textures/1x/collabs/collab_TBoI_2.png","start":13519990,"end":13527462},{"filename":"/resources/textures/1x/collabs/collab_TW_1.png","start":13527462,"end":13535029},{"filename":"/resources/textures/1x/collabs/collab_TW_2.png","start":13535029,"end":13542376},{"filename":"/resources/textures/1x/collabs/collab_VS_1.png","start":13542376,"end":13547368},{"filename":"/resources/textures/1x/collabs/collab_VS_2.png","start":13547368,"end":13555174},{"filename":"/resources/textures/1x/collabs/collab_WF_1.png","start":13555174,"end":13561804},{"filename":"/resources/textures/1x/collabs/collab_WF_2.png","start":13561804,"end":13569233},{"filename":"/resources/textures/1x/collabs/collab_XR_1.png","start":13569233,"end":13581379},{"filename":"/resources/textures/1x/collabs/collab_XR_2.png","start":13581379,"end":13591999},{"filename":"/resources/textures/1x/Enhancers.png","start":13591999,"end":13667951},{"filename":"/resources/textures/1x/gamepad_ui.png","start":13667951,"end":13687878},{"filename":"/resources/textures/1x/icons.png","start":13687878,"end":13696434},{"filename":"/resources/textures/1x/Jokers.png","start":13696434,"end":14201121},{"filename":"/resources/textures/1x/localthunk-logo.png","start":14201121,"end":14210748},{"filename":"/resources/textures/1x/playstack-logo.png","start":14210748,"end":14283474},{"filename":"/resources/textures/1x/ShopSignAnimation.png","start":14283474,"end":14294272},{"filename":"/resources/textures/1x/stickers.png","start":14294272,"end":14298656},{"filename":"/resources/textures/1x/tags.png","start":14298656,"end":14305991},{"filename":"/resources/textures/1x/Tarots.png","start":14305991,"end":14402322},{"filename":"/resources/textures/1x/ui_assets_opt2.png","start":14402322,"end":14403774},{"filename":"/resources/textures/1x/ui_assets.png","start":14403774,"end":14405242},{"filename":"/resources/textures/1x/Vouchers.png","start":14405242,"end":14475951},{"filename":"/resources/textures/2x/8BitDeck_opt2.png","start":14475951,"end":14556521},{"filename":"/resources/textures/2x/8BitDeck.png","start":14556521,"end":14620919},{"filename":"/resources/textures/2x/balatro_alt.png","start":14620919,"end":14647987},{"filename":"/resources/textures/2x/balatro.png","start":14647987,"end":14683321},{"filename":"/resources/textures/2x/BlindChips.png","start":14683321,"end":14817827},{"filename":"/resources/textures/2x/boosters.png","start":14817827,"end":15029490},{"filename":"/resources/textures/2x/chips.png","start":15029490,"end":15039372},{"filename":"/resources/textures/2x/collabs/collab_AC_1.png","start":15039372,"end":15049277},{"filename":"/resources/textures/2x/collabs/collab_AC_2.png","start":15049277,"end":15059145},{"filename":"/resources/textures/2x/collabs/collab_AU_1.png","start":15059145,"end":15067119},{"filename":"/resources/textures/2x/collabs/collab_AU_2.png","start":15067119,"end":15077414},{"filename":"/resources/textures/2x/collabs/collab_BUG_1.png","start":15077414,"end":15090812},{"filename":"/resources/textures/2x/collabs/collab_BUG_2.png","start":15090812,"end":15105542},{"filename":"/resources/textures/2x/collabs/collab_C7_1.png","start":15105542,"end":15117262},{"filename":"/resources/textures/2x/collabs/collab_C7_2.png","start":15117262,"end":15128994},{"filename":"/resources/textures/2x/collabs/collab_CL_1.png","start":15128994,"end":15139487},{"filename":"/resources/textures/2x/collabs/collab_CL_2.png","start":15139487,"end":15149253},{"filename":"/resources/textures/2x/collabs/collab_CR_1.png","start":15149253,"end":15159104},{"filename":"/resources/textures/2x/collabs/collab_CR_2.png","start":15159104,"end":15169844},{"filename":"/resources/textures/2x/collabs/collab_CYP_1.png","start":15169844,"end":15181336},{"filename":"/resources/textures/2x/collabs/collab_CYP_2.png","start":15181336,"end":15192902},{"filename":"/resources/textures/2x/collabs/collab_D2_1.png","start":15192902,"end":15203408},{"filename":"/resources/textures/2x/collabs/collab_D2_2.png","start":15203408,"end":15213977},{"filename":"/resources/textures/2x/collabs/collab_DBD_1.png","start":15213977,"end":15224155},{"filename":"/resources/textures/2x/collabs/collab_DBD_2.png","start":15224155,"end":15234899},{"filename":"/resources/textures/2x/collabs/collab_DS_1.png","start":15234899,"end":15244523},{"filename":"/resources/textures/2x/collabs/collab_DS_2.png","start":15244523,"end":15254108},{"filename":"/resources/textures/2x/collabs/collab_DTD_1.png","start":15254108,"end":15263674},{"filename":"/resources/textures/2x/collabs/collab_DTD_2.png","start":15263674,"end":15271091},{"filename":"/resources/textures/2x/collabs/collab_EG_1.png","start":15271091,"end":15276932},{"filename":"/resources/textures/2x/collabs/collab_EG_2.png","start":15276932,"end":15283330},{"filename":"/resources/textures/2x/collabs/collab_FO_1.png","start":15283330,"end":15294252},{"filename":"/resources/textures/2x/collabs/collab_FO_2.png","start":15294252,"end":15305533},{"filename":"/resources/textures/2x/collabs/collab_PC_1.png","start":15305533,"end":15314620},{"filename":"/resources/textures/2x/collabs/collab_PC_2.png","start":15314620,"end":15323655},{"filename":"/resources/textures/2x/collabs/collab_R_1.png","start":15323655,"end":15337469},{"filename":"/resources/textures/2x/collabs/collab_R_2.png","start":15337469,"end":15352527},{"filename":"/resources/textures/2x/collabs/collab_SK_1.png","start":15352527,"end":15366251},{"filename":"/resources/textures/2x/collabs/collab_SK_2.png","start":15366251,"end":15379640},{"filename":"/resources/textures/2x/collabs/collab_STP_1.png","start":15379640,"end":15389682},{"filename":"/resources/textures/2x/collabs/collab_STP_2.png","start":15389682,"end":15399680},{"filename":"/resources/textures/2x/collabs/collab_STS_1.png","start":15399680,"end":15410739},{"filename":"/resources/textures/2x/collabs/collab_STS_2.png","start":15410739,"end":15422893},{"filename":"/resources/textures/2x/collabs/collab_SV_1.png","start":15422893,"end":15434506},{"filename":"/resources/textures/2x/collabs/collab_SV_2.png","start":15434506,"end":15447103},{"filename":"/resources/textures/2x/collabs/collab_TBoI_1.png","start":15447103,"end":15457827},{"filename":"/resources/textures/2x/collabs/collab_TBoI_2.png","start":15457827,"end":15468550},{"filename":"/resources/textures/2x/collabs/collab_TW_1.png","start":15468550,"end":15479777},{"filename":"/resources/textures/2x/collabs/collab_TW_2.png","start":15479777,"end":15490703},{"filename":"/resources/textures/2x/collabs/collab_VS_1.png","start":15490703,"end":15498122},{"filename":"/resources/textures/2x/collabs/collab_VS_2.png","start":15498122,"end":15507388},{"filename":"/resources/textures/2x/collabs/collab_WF_1.png","start":15507388,"end":15518671},{"filename":"/resources/textures/2x/collabs/collab_WF_2.png","start":15518671,"end":15531433},{"filename":"/resources/textures/2x/collabs/collab_XR_1.png","start":15531433,"end":15545662},{"filename":"/resources/textures/2x/collabs/collab_XR_2.png","start":15545662,"end":15558554},{"filename":"/resources/textures/2x/Enhancers.png","start":15558554,"end":15652439},{"filename":"/resources/textures/2x/gamepad_ui.png","start":15652439,"end":15677304},{"filename":"/resources/textures/2x/icons.png","start":15677304,"end":15688874},{"filename":"/resources/textures/2x/Jokers.png","start":15688874,"end":16301398},{"filename":"/resources/textures/2x/localthunk-logo.png","start":16301398,"end":16321961},{"filename":"/resources/textures/2x/playstack-logo.png","start":16321961,"end":16429349},{"filename":"/resources/textures/2x/ShopSignAnimation.png","start":16429349,"end":16445004},{"filename":"/resources/textures/2x/stickers.png","start":16445004,"end":16451742},{"filename":"/resources/textures/2x/tags.png","start":16451742,"end":16462593},{"filename":"/resources/textures/2x/Tarots.png","start":16462593,"end":16582255},{"filename":"/resources/textures/2x/ui_assets_opt2.png","start":16582255,"end":16584009},{"filename":"/resources/textures/2x/ui_assets.png","start":16584009,"end":16585766},{"filename":"/resources/textures/2x/Vouchers.png","start":16585766,"end":16670367},{"filename":"/tag.lua","start":16670367,"end":16695506},{"filename":"/version.jkr","start":16695506,"end":16695540}]},{"name":"game-audio.data","uuid":"71b131d2c8960d5a4350156fc2d7e5d04e1b30bf91187f4607967917cba6ac38","remote_package_size":17473159,"files":[{"filename":"/resources/sounds/ambientFire1.ogg","start":0,"end":478331},{"filename":"/resources/sounds/ambientFire2.ogg","start":478331,"end":986828},{"filename":"/resources/sounds/ambientFire3.ogg","start":986828,"end":1490385},{"filename":"/resources/sounds/ambientOrgan1.ogg","start":1490385,"end":1871338},{"filename":"/resources/sounds/button.ogg","start":1871338,"end":1879471},{"filename":"/resources/sounds/cancel.ogg","start":1879471,"end":1889551},{"filename":"/resources/sounds/card1.ogg","start":1889551,"end":1903489},{"filename":"/resources/sounds/card3.ogg","start":1903489,"end":1915361},{"filename":"/resources/sounds/cardFan2.ogg","start":1915361,"end":1931830},{"filename":"/resources/sounds/cardSlide1.ogg","start":1931830,"end":1942758},{"filename":"/resources/sounds/cardSlide2.ogg","start":1942758,"end":1952641},{"filename":"/resources/sounds/chips1.ogg","start":1952641,"end":1961625},{"filename":"/resources/sounds/chips2.ogg","start":1961625,"end":1973742},{"filename":"/resources/sounds/coin1.ogg","start":1973742,"end":1985051},{"filename":"/resources/sounds/coin2.ogg","start":1985051,"end":1994777},{"filename":"/resources/sounds/coin3.ogg","start":1994777,"end":2006440},{"filename":"/resources/sounds/coin4.ogg","start":2006440,"end":2016965},{"filename":"/resources/sounds/coin5.ogg","start":2016965,"end":2030067},{"filename":"/resources/sounds/coin6.ogg","start":2030067,"end":2048118},{"filename":"/resources/sounds/coin7.ogg","start":2048118,"end":2059433},{"filename":"/resources/sounds/crumple1.ogg","start":2059433,"end":2073617},{"filename":"/resources/sounds/crumple2.ogg","start":2073617,"end":2087953},{"filename":"/resources/sounds/crumple3.ogg","start":2087953,"end":2101237},{"filename":"/resources/sounds/crumple4.ogg","start":2101237,"end":2114369},{"filename":"/resources/sounds/crumple5.ogg","start":2114369,"end":2128175},{"filename":"/resources/sounds/crumpleLong1.ogg","start":2128175,"end":2179313},{"filename":"/resources/sounds/crumpleLong2.ogg","start":2179313,"end":2234055},{"filename":"/resources/sounds/explosion_buildup1.ogg","start":2234055,"end":2265906},{"filename":"/resources/sounds/explosion_release1.ogg","start":2265906,"end":2297904},{"filename":"/resources/sounds/explosion1.ogg","start":2297904,"end":2346330},{"filename":"/resources/sounds/foil1.ogg","start":2346330,"end":2355096},{"filename":"/resources/sounds/foil2.ogg","start":2355096,"end":2364638},{"filename":"/resources/sounds/generic1.ogg","start":2364638,"end":2371773},{"filename":"/resources/sounds/glass1.ogg","start":2371773,"end":2388727},{"filename":"/resources/sounds/glass2.ogg","start":2388727,"end":2405524},{"filename":"/resources/sounds/glass3.ogg","start":2405524,"end":2422096},{"filename":"/resources/sounds/glass4.ogg","start":2422096,"end":2439600},{"filename":"/resources/sounds/glass5.ogg","start":2439600,"end":2456735},{"filename":"/resources/sounds/glass6.ogg","start":2456735,"end":2474780},{"filename":"/resources/sounds/gold_seal.ogg","start":2474780,"end":2488064},{"filename":"/resources/sounds/gong.ogg","start":2488064,"end":2506209},{"filename":"/resources/sounds/highlight1.ogg","start":2506209,"end":2513396},{"filename":"/resources/sounds/highlight2.ogg","start":2513396,"end":2526780},{"filename":"/resources/sounds/holo1.ogg","start":2526780,"end":2539335},{"filename":"/resources/sounds/introPad1.ogg","start":2539335,"end":2873353},{"filename":"/resources/sounds/magic_crumple.ogg","start":2873353,"end":2959482},{"filename":"/resources/sounds/magic_crumple2.ogg","start":2959482,"end":2994812},{"filename":"/resources/sounds/magic_crumple3.ogg","start":2994812,"end":3019242},{"filename":"/resources/sounds/multhit1.ogg","start":3019242,"end":3031324},{"filename":"/resources/sounds/multhit2.ogg","start":3031324,"end":3046276},{"filename":"/resources/sounds/music1.ogg","start":3046276,"end":5985018},{"filename":"/resources/sounds/music2.ogg","start":5985018,"end":8600287},{"filename":"/resources/sounds/music3.ogg","start":8600287,"end":11111345},{"filename":"/resources/sounds/music4.ogg","start":11111345,"end":13919742},{"filename":"/resources/sounds/music5.ogg","start":13919742,"end":16765570},{"filename":"/resources/sounds/negative.ogg","start":16765570,"end":16778768},{"filename":"/resources/sounds/other1.ogg","start":16778768,"end":16790916},{"filename":"/resources/sounds/paper1.ogg","start":16790916,"end":16796188},{"filename":"/resources/sounds/polychrome1.ogg","start":16796188,"end":16826209},{"filename":"/resources/sounds/slice1.ogg","start":16826209,"end":16834706},{"filename":"/resources/sounds/splash_buildup.ogg","start":16834706,"end":17174265},{"filename":"/resources/sounds/tarot1.ogg","start":17174265,"end":17183386},{"filename":"/resources/sounds/tarot2.ogg","start":17183386,"end":17194208},{"filename":"/resources/sounds/timpani.ogg","start":17194208,"end":17208399},{"filename":"/resources/sounds/voice1.ogg","start":17208399,"end":17215483},{"filename":"/resources/sounds/voice10.ogg","start":17215483,"end":17222574},{"filename":"/resources/sounds/voice11.ogg","start":17222574,"end":17229563},{"filename":"/resources/sounds/voice2.ogg","start":17229563,"end":17236583},{"filename":"/resources/sounds/voice3.ogg","start":17236583,"end":17243682},{"filename":"/resources/sounds/voice4.ogg","start":17243682,"end":17251045},{"filename":"/resources/sounds/voice5.ogg","start":17251045,"end":17258240},{"filename":"/resources/sounds/voice6.ogg","start":17258240,"end":17265359},{"filename":"/resources/sounds/voice7.ogg","start":17265359,"end":17272420},{"filename":"/resources/sounds/voice8.ogg","start":17272420,"end":17279584},{"filename":"/resources/sounds/voice9.ogg","start":17279584,"end":17286750},{"filename":"/resources/sounds/whoosh_long.ogg","start":17286750,"end":17400931},{"filename":"/resources/sounds/whoosh.ogg","start":17400931,"end":17410843},{"filename":"/resources/sounds/whoosh1.ogg","start":17410843,"end":17423745},{"filename":"/resources/sounds/whoosh2.ogg","start":17423745,"end":17436593},{"filename":"/resources/sounds/win.ogg","start":17436593,"end":17473159}]}];

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
    Module.finishedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads += packages.length;
  Module.webDataDownloads = Module.webDataDownloads || {};

  function formatBytes(value) {
    if (!value || value < 0) return '0 B';
    var units = ['B', 'KB', 'MB', 'GB'];
    var unit = 0;
    var next = value;
    while (next >= 1024 && unit < units.length - 1) {
      next = next / 1024;
      unit++;
    }
    return (unit === 0 ? next.toFixed(0) : next.toFixed(1)) + ' ' + units[unit];
  }

  function updateDownloadStatus() {
    var total = 0;
    var loaded = 0;
    for (var i = 0; i < packages.length; i++) {
      var info = Module.webDataDownloads[packages[i].name];
      total += (info && info.total) || packages[i].remote_package_size;
      loaded += (info && info.loaded) || 0;
    }
    if (Module.setStatus) Module.setStatus('Downloading data... ' + formatBytes(loaded) + ' / ' + formatBytes(total));
  }

  function loadPackages(metadataPackages) {
    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }

    function locatePackage(packageName) {
      if (typeof Module.locateFilePackage === 'function' && !Module.locateFile) {
        Module.locateFile = Module.locateFilePackage;
        Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      return typeof Module.locateFile === 'function' ? Module.locateFile(packageName) : ((Module.filePackagePrefixURL || '') + packageName);
    }

    function fetchRemotePackage(packageInfo, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', locatePackage(packageInfo.name), true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        Module.webDataDownloads[packageInfo.name] = {
          loaded: event.loaded || 0,
          total: event.total || packageInfo.remote_package_size
        };
        updateDownloadStatus();
      };
      xhr.onerror = function() {
        errback(new Error('NetworkError for: ' + packageInfo.name));
      };
      xhr.onload = function() {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) {
          Module.webDataDownloads[packageInfo.name] = {
            loaded: packageInfo.remote_package_size,
            total: packageInfo.remote_package_size
          };
          updateDownloadStatus();
          callback(xhr.response);
        } else {
          errback(new Error(xhr.statusText + ' : ' + xhr.responseURL));
        }
      };
      xhr.send(null);
    }

    function runWithFS() {
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }

      Module['FS_createPath']("/", "engine", true, true);
      Module['FS_createPath']("/", "functions", true, true);
      Module['FS_createPath']("/", "localization", true, true);
      Module['FS_createPath']("/", "resources", true, true);
      Module['FS_createPath']("resources", "fonts", true, true);
      Module['FS_createPath']("resources", "shaders", true, true);
      Module['FS_createPath']("resources", "sounds", true, true);
      Module['FS_createPath']("resources", "textures", true, true);
      Module['FS_createPath']("resources/textures", "1x", true, true);
      Module['FS_createPath']("resources/textures/1x", "collabs", true, true);
      Module['FS_createPath']("resources/textures", "2x", true, true);
      Module['FS_createPath']("resources/textures/2x", "collabs", true, true);

      function DataRequest(start, end) {
        this.start = start;
        this.end = end;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(name) {
          this.name = name;
          this.requests[name] = this;
          Module.addRunDependency('fp ' + this.name);
        },
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          Module.FS_createDataFile(this.name, null, byteArray, true, true, true);
          Module.removeRunDependency('fp ' + this.name);
          this.requests[this.name] = null;
        }
      };

      var requestsByPackage = {};
      for (var p = 0; p < metadataPackages.length; p++) {
        var packageInfo = metadataPackages[p];
        requestsByPackage[packageInfo.name] = [];
        for (var f = 0; f < packageInfo.files.length; f++) {
          var file = packageInfo.files[f];
          var request = new DataRequest(file.start, file.end);
          request.open(file.filename);
          requestsByPackage[packageInfo.name].push(request);
        }
      }

      var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      var IDB_RO = 'readonly';
      var IDB_RW = 'readwrite';
      var DB_NAME = 'BALATRO_WEB_PRELOAD_CACHE';
      var DB_VERSION = 1;
      var METADATA_STORE_NAME = 'METADATA';
      var PACKAGE_STORE_NAME = 'PACKAGES';

      function openDatabase(callback, errback) {
        try {
          if (!indexedDB) throw new Error('IndexedDB unavailable');
          var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
        } catch (e) {
          return errback(e);
        }
        openRequest.onupgradeneeded = function(event) {
          var db = event.target.result;
          if (db.objectStoreNames.contains(PACKAGE_STORE_NAME)) db.deleteObjectStore(PACKAGE_STORE_NAME);
          db.createObjectStore(PACKAGE_STORE_NAME);
          if (db.objectStoreNames.contains(METADATA_STORE_NAME)) db.deleteObjectStore(METADATA_STORE_NAME);
          db.createObjectStore(METADATA_STORE_NAME);
        };
        openRequest.onsuccess = function(event) {
          callback(event.target.result);
        };
        openRequest.onerror = function(error) {
          errback(error);
        };
      }

      function cacheKey(packageInfo) {
        return PACKAGE_PATH + packageInfo.name;
      }

      function checkCachedPackage(db, packageInfo, callback, errback) {
        var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
        var metadata = transaction.objectStore(METADATA_STORE_NAME);
        var getRequest = metadata.get('metadata/' + cacheKey(packageInfo));
        getRequest.onsuccess = function(event) {
          var result = event.target.result;
          callback(!!result && packageInfo.uuid === result.uuid);
        };
        getRequest.onerror = function(error) {
          errback(error);
        };
      }

      function fetchCachedPackage(db, packageInfo, callback, errback) {
        var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
        var packagesStore = transaction.objectStore(PACKAGE_STORE_NAME);
        var getRequest = packagesStore.get('package/' + cacheKey(packageInfo));
        getRequest.onsuccess = function(event) {
          callback(event.target.result);
        };
        getRequest.onerror = function(error) {
          errback(error);
        };
      }

      function cacheRemotePackage(db, packageInfo, packageData, callback, errback) {
        var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
        var packagesStore = transactionPackages.objectStore(PACKAGE_STORE_NAME);
        var putPackageRequest = packagesStore.put(packageData, 'package/' + cacheKey(packageInfo));
        putPackageRequest.onsuccess = function() {
          var transactionMetadata = db.transaction([METADATA_STORE_NAME], IDB_RW);
          var metadata = transactionMetadata.objectStore(METADATA_STORE_NAME);
          var putMetadataRequest = metadata.put({ uuid: packageInfo.uuid }, 'metadata/' + cacheKey(packageInfo));
          putMetadataRequest.onsuccess = function() {
            callback(packageData);
          };
          putMetadataRequest.onerror = function(error) {
            errback(error);
          };
        };
        putPackageRequest.onerror = function(error) {
          errback(error);
        };
      }

      function processPackageData(packageInfo, arrayBuffer) {
        Module.finishedDataFileDownloads++;
        assert(arrayBuffer, 'Loading data file failed: ' + packageInfo.name);
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var ptr = Module.getMemory(byteArray.length);
        Module.HEAPU8.set(byteArray, ptr);
        var packageByteArray = Module.HEAPU8.subarray(ptr, ptr + byteArray.length);
        var requests = requestsByPackage[packageInfo.name];
        for (var i = 0; i < requests.length; i++) {
          requests[i].byteArray = packageByteArray;
          requests[i].onload();
        }
        Module.removeRunDependency('datafile_' + packageInfo.name);
      }

      function loadPackageWithoutCache(packageInfo) {
        fetchRemotePackage(packageInfo, function(packageData) {
          processPackageData(packageInfo, packageData);
        }, function(error) {
          console.error('package error:', error);
          processPackageData(packageInfo, null);
        });
      }

      function loadPackage(packageInfo) {
        Module.addRunDependency('datafile_' + packageInfo.name);
        openDatabase(function(db) {
          checkCachedPackage(db, packageInfo, function(useCached) {
            Module.preloadResults = Module.preloadResults || {};
            Module.preloadResults[packageInfo.name] = { fromCache: useCached };
            if (useCached) {
              console.info('loading ' + packageInfo.name + ' from cache');
              fetchCachedPackage(db, packageInfo, function(packageData) {
                processPackageData(packageInfo, packageData);
              }, function(error) {
                console.error(error);
                loadPackageWithoutCache(packageInfo);
              });
            } else {
              console.info('loading ' + packageInfo.name + ' from remote');
              fetchRemotePackage(packageInfo, function(packageData) {
                cacheRemotePackage(db, packageInfo, packageData, function(cachedPackageData) {
                  processPackageData(packageInfo, cachedPackageData);
                }, function(error) {
                  console.error(error);
                  processPackageData(packageInfo, packageData);
                });
              }, function(error) {
                console.error(error);
                processPackageData(packageInfo, null);
              });
            }
          }, function(error) {
            console.error(error);
            loadPackageWithoutCache(packageInfo);
          });
        }, function(error) {
          console.error(error);
          loadPackageWithoutCache(packageInfo);
        });
      }

      for (var i = 0; i < metadataPackages.length; i++) {
        loadPackage(metadataPackages[i]);
      }
      updateDownloadStatus();
    }

    if (Module.calledRun) {
      runWithFS();
    } else {
      if (!Module.preRun) Module.preRun = [];
      Module.preRun.push(runWithFS);
    }
  }

  loadPackages(packages);
})();
