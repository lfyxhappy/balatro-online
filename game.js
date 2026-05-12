var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

(function() {
  var packages = [{"name":"game-core.data","uuid":"3b96cb02662ffe376fc8c7ab05265352dcea8248a32f45126b33b7f0f48491c4","remote_package_size":6502675,"files":[{"filename":"/back.lua","start":0,"end":12555},{"filename":"/bit.lua","start":12555,"end":13192},{"filename":"/blind.lua","start":13192,"end":40726},{"filename":"/card_character.lua","start":40726,"end":46084},{"filename":"/card.lua","start":46084,"end":288635},{"filename":"/cardarea.lua","start":288635,"end":320717},{"filename":"/challenges.lua","start":320717,"end":344649},{"filename":"/conf.lua","start":344649,"end":344859},{"filename":"/engine/animatedsprite.lua","start":344859,"end":348131},{"filename":"/engine/controller.lua","start":348131,"end":408785},{"filename":"/engine/event.lua","start":408785,"end":415819},{"filename":"/engine/http_manager.lua","start":415819,"end":416489},{"filename":"/engine/moveable.lua","start":416489,"end":437020},{"filename":"/engine/node.lua","start":437020,"end":452737},{"filename":"/engine/object.lua","start":452737,"end":453403},{"filename":"/engine/particles.lua","start":453403,"end":459998},{"filename":"/engine/profile.lua","start":459998,"end":464571},{"filename":"/engine/save_manager.lua","start":464571,"end":468365},{"filename":"/engine/sound_manager.lua","start":468365,"end":481607},{"filename":"/engine/sprite.lua","start":481607,"end":489573},{"filename":"/engine/string_packer.lua","start":489573,"end":492353},{"filename":"/engine/text.lua","start":492353,"end":507309},{"filename":"/engine/ui.lua","start":507309,"end":552606},{"filename":"/functions/button_callbacks.lua","start":552606,"end":668971},{"filename":"/functions/common_events.lua","start":668971,"end":799629},{"filename":"/functions/misc_functions.lua","start":799629,"end":872905},{"filename":"/functions/state_events.lua","start":872905,"end":948867},{"filename":"/functions/test_functions.lua","start":948867,"end":957016},{"filename":"/functions/UI_definitions.lua","start":957016,"end":1306771},{"filename":"/game.lua","start":1306771,"end":1538917},{"filename":"/globals.lua","start":1538917,"end":1555185},{"filename":"/localization/zh_CN.lua","start":1555185,"end":1702592},{"filename":"/main.lua","start":1702592,"end":1714067},{"filename":"/resources/fonts/m6x11plus.ttf","start":1714067,"end":1749132},{"filename":"/resources/fonts/NotoSansSC-Bold.ttf","start":1749132,"end":2099664},{"filename":"/resources/gamecontrollerdb.txt","start":2099664,"end":2497488},{"filename":"/resources/shaders/background.fs","start":2497488,"end":2500008},{"filename":"/resources/shaders/booster.fs","start":2500008,"end":2505331},{"filename":"/resources/shaders/CRT.fs","start":2505331,"end":2512601},{"filename":"/resources/shaders/debuff.fs","start":2512601,"end":2517765},{"filename":"/resources/shaders/dissolve.fs","start":2517765,"end":2522034},{"filename":"/resources/shaders/flame.fs","start":2522034,"end":2524883},{"filename":"/resources/shaders/flash.fs","start":2524883,"end":2525784},{"filename":"/resources/shaders/foil.fs","start":2525784,"end":2531719},{"filename":"/resources/shaders/gold_seal.fs","start":2531719,"end":2532520},{"filename":"/resources/shaders/holo.fs","start":2532520,"end":2538527},{"filename":"/resources/shaders/hologram.fs","start":2538527,"end":2544289},{"filename":"/resources/shaders/negative_shine.fs","start":2544289,"end":2549199},{"filename":"/resources/shaders/negative.fs","start":2549199,"end":2554093},{"filename":"/resources/shaders/played.fs","start":2554093,"end":2558883},{"filename":"/resources/shaders/polychrome.fs","start":2558883,"end":2564709},{"filename":"/resources/shaders/skew.fs","start":2564709,"end":2565380},{"filename":"/resources/shaders/splash.fs","start":2565380,"end":2567987},{"filename":"/resources/shaders/vortex.fs","start":2567987,"end":2568798},{"filename":"/resources/shaders/voucher.fs","start":2568798,"end":2573627},{"filename":"/resources/textures/1x/8BitDeck_opt2.png","start":2573627,"end":2635764},{"filename":"/resources/textures/1x/8BitDeck.png","start":2635764,"end":2682642},{"filename":"/resources/textures/1x/balatro_alt.png","start":2682642,"end":2703468},{"filename":"/resources/textures/1x/balatro.png","start":2703468,"end":2730345},{"filename":"/resources/textures/1x/BlindChips.png","start":2730345,"end":2814157},{"filename":"/resources/textures/1x/boosters.png","start":2814157,"end":2984775},{"filename":"/resources/textures/1x/chips.png","start":2984775,"end":2993030},{"filename":"/resources/textures/1x/collabs/collab_AC_1.png","start":2993030,"end":3001409},{"filename":"/resources/textures/1x/collabs/collab_AC_2.png","start":3001409,"end":3009724},{"filename":"/resources/textures/1x/collabs/collab_AU_1.png","start":3009724,"end":3014756},{"filename":"/resources/textures/1x/collabs/collab_AU_2.png","start":3014756,"end":3022060},{"filename":"/resources/textures/1x/collabs/collab_BUG_1.png","start":3022060,"end":3033212},{"filename":"/resources/textures/1x/collabs/collab_BUG_2.png","start":3033212,"end":3045932},{"filename":"/resources/textures/1x/collabs/collab_C7_1.png","start":3045932,"end":3055735},{"filename":"/resources/textures/1x/collabs/collab_C7_2.png","start":3055735,"end":3065414},{"filename":"/resources/textures/1x/collabs/collab_CL_1.png","start":3065414,"end":3071897},{"filename":"/resources/textures/1x/collabs/collab_CL_2.png","start":3071897,"end":3080159},{"filename":"/resources/textures/1x/collabs/collab_CR_1.png","start":3080159,"end":3088326},{"filename":"/resources/textures/1x/collabs/collab_CR_2.png","start":3088326,"end":3097327},{"filename":"/resources/textures/1x/collabs/collab_CYP_1.png","start":3097327,"end":3104591},{"filename":"/resources/textures/1x/collabs/collab_CYP_2.png","start":3104591,"end":3111913},{"filename":"/resources/textures/1x/collabs/collab_D2_1.png","start":3111913,"end":3119627},{"filename":"/resources/textures/1x/collabs/collab_D2_2.png","start":3119627,"end":3128468},{"filename":"/resources/textures/1x/collabs/collab_DBD_1.png","start":3128468,"end":3137155},{"filename":"/resources/textures/1x/collabs/collab_DBD_2.png","start":3137155,"end":3146244},{"filename":"/resources/textures/1x/collabs/collab_DS_1.png","start":3146244,"end":3154042},{"filename":"/resources/textures/1x/collabs/collab_DS_2.png","start":3154042,"end":3161773},{"filename":"/resources/textures/1x/collabs/collab_DTD_1.png","start":3161773,"end":3169207},{"filename":"/resources/textures/1x/collabs/collab_DTD_2.png","start":3169207,"end":3175169},{"filename":"/resources/textures/1x/collabs/collab_EG_1.png","start":3175169,"end":3179902},{"filename":"/resources/textures/1x/collabs/collab_EG_2.png","start":3179902,"end":3185101},{"filename":"/resources/textures/1x/collabs/collab_FO_1.png","start":3185101,"end":3194346},{"filename":"/resources/textures/1x/collabs/collab_FO_2.png","start":3194346,"end":3203904},{"filename":"/resources/textures/1x/collabs/collab_PC_1.png","start":3203904,"end":3211574},{"filename":"/resources/textures/1x/collabs/collab_PC_2.png","start":3211574,"end":3219071},{"filename":"/resources/textures/1x/collabs/collab_R_1.png","start":3219071,"end":3230779},{"filename":"/resources/textures/1x/collabs/collab_R_2.png","start":3230779,"end":3243580},{"filename":"/resources/textures/1x/collabs/collab_SK_1.png","start":3243580,"end":3255464},{"filename":"/resources/textures/1x/collabs/collab_SK_2.png","start":3255464,"end":3267105},{"filename":"/resources/textures/1x/collabs/collab_STP_1.png","start":3267105,"end":3275543},{"filename":"/resources/textures/1x/collabs/collab_STP_2.png","start":3275543,"end":3283968},{"filename":"/resources/textures/1x/collabs/collab_STS_1.png","start":3283968,"end":3293129},{"filename":"/resources/textures/1x/collabs/collab_STS_2.png","start":3293129,"end":3303228},{"filename":"/resources/textures/1x/collabs/collab_SV_1.png","start":3303228,"end":3311106},{"filename":"/resources/textures/1x/collabs/collab_SV_2.png","start":3311106,"end":3319688},{"filename":"/resources/textures/1x/collabs/collab_TBoI_1.png","start":3319688,"end":3327125},{"filename":"/resources/textures/1x/collabs/collab_TBoI_2.png","start":3327125,"end":3334597},{"filename":"/resources/textures/1x/collabs/collab_TW_1.png","start":3334597,"end":3342164},{"filename":"/resources/textures/1x/collabs/collab_TW_2.png","start":3342164,"end":3349511},{"filename":"/resources/textures/1x/collabs/collab_VS_1.png","start":3349511,"end":3354503},{"filename":"/resources/textures/1x/collabs/collab_VS_2.png","start":3354503,"end":3362309},{"filename":"/resources/textures/1x/collabs/collab_WF_1.png","start":3362309,"end":3368939},{"filename":"/resources/textures/1x/collabs/collab_WF_2.png","start":3368939,"end":3376368},{"filename":"/resources/textures/1x/collabs/collab_XR_1.png","start":3376368,"end":3388514},{"filename":"/resources/textures/1x/collabs/collab_XR_2.png","start":3388514,"end":3399134},{"filename":"/resources/textures/1x/Enhancers.png","start":3399134,"end":3475086},{"filename":"/resources/textures/1x/gamepad_ui.png","start":3475086,"end":3495013},{"filename":"/resources/textures/1x/icons.png","start":3495013,"end":3503569},{"filename":"/resources/textures/1x/Jokers.png","start":3503569,"end":4008256},{"filename":"/resources/textures/1x/localthunk-logo.png","start":4008256,"end":4017883},{"filename":"/resources/textures/1x/playstack-logo.png","start":4017883,"end":4090609},{"filename":"/resources/textures/1x/ShopSignAnimation.png","start":4090609,"end":4101407},{"filename":"/resources/textures/1x/stickers.png","start":4101407,"end":4105791},{"filename":"/resources/textures/1x/tags.png","start":4105791,"end":4113126},{"filename":"/resources/textures/1x/Tarots.png","start":4113126,"end":4209457},{"filename":"/resources/textures/1x/ui_assets_opt2.png","start":4209457,"end":4210909},{"filename":"/resources/textures/1x/ui_assets.png","start":4210909,"end":4212377},{"filename":"/resources/textures/1x/Vouchers.png","start":4212377,"end":4283086},{"filename":"/resources/textures/2x/8BitDeck_opt2.png","start":4283086,"end":4363656},{"filename":"/resources/textures/2x/8BitDeck.png","start":4363656,"end":4428054},{"filename":"/resources/textures/2x/balatro_alt.png","start":4428054,"end":4455122},{"filename":"/resources/textures/2x/balatro.png","start":4455122,"end":4490456},{"filename":"/resources/textures/2x/BlindChips.png","start":4490456,"end":4624962},{"filename":"/resources/textures/2x/boosters.png","start":4624962,"end":4836625},{"filename":"/resources/textures/2x/chips.png","start":4836625,"end":4846507},{"filename":"/resources/textures/2x/collabs/collab_AC_1.png","start":4846507,"end":4856412},{"filename":"/resources/textures/2x/collabs/collab_AC_2.png","start":4856412,"end":4866280},{"filename":"/resources/textures/2x/collabs/collab_AU_1.png","start":4866280,"end":4874254},{"filename":"/resources/textures/2x/collabs/collab_AU_2.png","start":4874254,"end":4884549},{"filename":"/resources/textures/2x/collabs/collab_BUG_1.png","start":4884549,"end":4897947},{"filename":"/resources/textures/2x/collabs/collab_BUG_2.png","start":4897947,"end":4912677},{"filename":"/resources/textures/2x/collabs/collab_C7_1.png","start":4912677,"end":4924397},{"filename":"/resources/textures/2x/collabs/collab_C7_2.png","start":4924397,"end":4936129},{"filename":"/resources/textures/2x/collabs/collab_CL_1.png","start":4936129,"end":4946622},{"filename":"/resources/textures/2x/collabs/collab_CL_2.png","start":4946622,"end":4956388},{"filename":"/resources/textures/2x/collabs/collab_CR_1.png","start":4956388,"end":4966239},{"filename":"/resources/textures/2x/collabs/collab_CR_2.png","start":4966239,"end":4976979},{"filename":"/resources/textures/2x/collabs/collab_CYP_1.png","start":4976979,"end":4988471},{"filename":"/resources/textures/2x/collabs/collab_CYP_2.png","start":4988471,"end":5000037},{"filename":"/resources/textures/2x/collabs/collab_D2_1.png","start":5000037,"end":5010543},{"filename":"/resources/textures/2x/collabs/collab_D2_2.png","start":5010543,"end":5021112},{"filename":"/resources/textures/2x/collabs/collab_DBD_1.png","start":5021112,"end":5031290},{"filename":"/resources/textures/2x/collabs/collab_DBD_2.png","start":5031290,"end":5042034},{"filename":"/resources/textures/2x/collabs/collab_DS_1.png","start":5042034,"end":5051658},{"filename":"/resources/textures/2x/collabs/collab_DS_2.png","start":5051658,"end":5061243},{"filename":"/resources/textures/2x/collabs/collab_DTD_1.png","start":5061243,"end":5070809},{"filename":"/resources/textures/2x/collabs/collab_DTD_2.png","start":5070809,"end":5078226},{"filename":"/resources/textures/2x/collabs/collab_EG_1.png","start":5078226,"end":5084067},{"filename":"/resources/textures/2x/collabs/collab_EG_2.png","start":5084067,"end":5090465},{"filename":"/resources/textures/2x/collabs/collab_FO_1.png","start":5090465,"end":5101387},{"filename":"/resources/textures/2x/collabs/collab_FO_2.png","start":5101387,"end":5112668},{"filename":"/resources/textures/2x/collabs/collab_PC_1.png","start":5112668,"end":5121755},{"filename":"/resources/textures/2x/collabs/collab_PC_2.png","start":5121755,"end":5130790},{"filename":"/resources/textures/2x/collabs/collab_R_1.png","start":5130790,"end":5144604},{"filename":"/resources/textures/2x/collabs/collab_R_2.png","start":5144604,"end":5159662},{"filename":"/resources/textures/2x/collabs/collab_SK_1.png","start":5159662,"end":5173386},{"filename":"/resources/textures/2x/collabs/collab_SK_2.png","start":5173386,"end":5186775},{"filename":"/resources/textures/2x/collabs/collab_STP_1.png","start":5186775,"end":5196817},{"filename":"/resources/textures/2x/collabs/collab_STP_2.png","start":5196817,"end":5206815},{"filename":"/resources/textures/2x/collabs/collab_STS_1.png","start":5206815,"end":5217874},{"filename":"/resources/textures/2x/collabs/collab_STS_2.png","start":5217874,"end":5230028},{"filename":"/resources/textures/2x/collabs/collab_SV_1.png","start":5230028,"end":5241641},{"filename":"/resources/textures/2x/collabs/collab_SV_2.png","start":5241641,"end":5254238},{"filename":"/resources/textures/2x/collabs/collab_TBoI_1.png","start":5254238,"end":5264962},{"filename":"/resources/textures/2x/collabs/collab_TBoI_2.png","start":5264962,"end":5275685},{"filename":"/resources/textures/2x/collabs/collab_TW_1.png","start":5275685,"end":5286912},{"filename":"/resources/textures/2x/collabs/collab_TW_2.png","start":5286912,"end":5297838},{"filename":"/resources/textures/2x/collabs/collab_VS_1.png","start":5297838,"end":5305257},{"filename":"/resources/textures/2x/collabs/collab_VS_2.png","start":5305257,"end":5314523},{"filename":"/resources/textures/2x/collabs/collab_WF_1.png","start":5314523,"end":5325806},{"filename":"/resources/textures/2x/collabs/collab_WF_2.png","start":5325806,"end":5338568},{"filename":"/resources/textures/2x/collabs/collab_XR_1.png","start":5338568,"end":5352797},{"filename":"/resources/textures/2x/collabs/collab_XR_2.png","start":5352797,"end":5365689},{"filename":"/resources/textures/2x/Enhancers.png","start":5365689,"end":5459574},{"filename":"/resources/textures/2x/gamepad_ui.png","start":5459574,"end":5484439},{"filename":"/resources/textures/2x/icons.png","start":5484439,"end":5496009},{"filename":"/resources/textures/2x/Jokers.png","start":5496009,"end":6108533},{"filename":"/resources/textures/2x/localthunk-logo.png","start":6108533,"end":6129096},{"filename":"/resources/textures/2x/playstack-logo.png","start":6129096,"end":6236484},{"filename":"/resources/textures/2x/ShopSignAnimation.png","start":6236484,"end":6252139},{"filename":"/resources/textures/2x/stickers.png","start":6252139,"end":6258877},{"filename":"/resources/textures/2x/tags.png","start":6258877,"end":6269728},{"filename":"/resources/textures/2x/Tarots.png","start":6269728,"end":6389390},{"filename":"/resources/textures/2x/ui_assets_opt2.png","start":6389390,"end":6391144},{"filename":"/resources/textures/2x/ui_assets.png","start":6391144,"end":6392901},{"filename":"/resources/textures/2x/Vouchers.png","start":6392901,"end":6477502},{"filename":"/tag.lua","start":6477502,"end":6502641},{"filename":"/version.jkr","start":6502641,"end":6502675}],"lazy":false},{"name":"game-audio.data","uuid":"75dd4d1863e2cefba27e5e67b4b196330732aa9910e6bc46051b15483f7c79a2","remote_package_size":3753865,"files":[{"filename":"/resources/sounds/ambientFire1.ogg","start":0,"end":478331},{"filename":"/resources/sounds/ambientFire2.ogg","start":478331,"end":986828},{"filename":"/resources/sounds/ambientFire3.ogg","start":986828,"end":1490385},{"filename":"/resources/sounds/ambientOrgan1.ogg","start":1490385,"end":1871338},{"filename":"/resources/sounds/button.ogg","start":1871338,"end":1879471},{"filename":"/resources/sounds/cancel.ogg","start":1879471,"end":1889551},{"filename":"/resources/sounds/card1.ogg","start":1889551,"end":1903489},{"filename":"/resources/sounds/card3.ogg","start":1903489,"end":1915361},{"filename":"/resources/sounds/cardFan2.ogg","start":1915361,"end":1931830},{"filename":"/resources/sounds/cardSlide1.ogg","start":1931830,"end":1942758},{"filename":"/resources/sounds/cardSlide2.ogg","start":1942758,"end":1952641},{"filename":"/resources/sounds/chips1.ogg","start":1952641,"end":1961625},{"filename":"/resources/sounds/chips2.ogg","start":1961625,"end":1973742},{"filename":"/resources/sounds/coin1.ogg","start":1973742,"end":1985051},{"filename":"/resources/sounds/coin2.ogg","start":1985051,"end":1994777},{"filename":"/resources/sounds/coin3.ogg","start":1994777,"end":2006440},{"filename":"/resources/sounds/coin4.ogg","start":2006440,"end":2016965},{"filename":"/resources/sounds/coin5.ogg","start":2016965,"end":2030067},{"filename":"/resources/sounds/coin6.ogg","start":2030067,"end":2048118},{"filename":"/resources/sounds/coin7.ogg","start":2048118,"end":2059433},{"filename":"/resources/sounds/crumple1.ogg","start":2059433,"end":2073617},{"filename":"/resources/sounds/crumple2.ogg","start":2073617,"end":2087953},{"filename":"/resources/sounds/crumple3.ogg","start":2087953,"end":2101237},{"filename":"/resources/sounds/crumple4.ogg","start":2101237,"end":2114369},{"filename":"/resources/sounds/crumple5.ogg","start":2114369,"end":2128175},{"filename":"/resources/sounds/crumpleLong1.ogg","start":2128175,"end":2179313},{"filename":"/resources/sounds/crumpleLong2.ogg","start":2179313,"end":2234055},{"filename":"/resources/sounds/explosion_buildup1.ogg","start":2234055,"end":2265906},{"filename":"/resources/sounds/explosion_release1.ogg","start":2265906,"end":2297904},{"filename":"/resources/sounds/explosion1.ogg","start":2297904,"end":2346330},{"filename":"/resources/sounds/foil1.ogg","start":2346330,"end":2355096},{"filename":"/resources/sounds/foil2.ogg","start":2355096,"end":2364638},{"filename":"/resources/sounds/generic1.ogg","start":2364638,"end":2371773},{"filename":"/resources/sounds/glass1.ogg","start":2371773,"end":2388727},{"filename":"/resources/sounds/glass2.ogg","start":2388727,"end":2405524},{"filename":"/resources/sounds/glass3.ogg","start":2405524,"end":2422096},{"filename":"/resources/sounds/glass4.ogg","start":2422096,"end":2439600},{"filename":"/resources/sounds/glass5.ogg","start":2439600,"end":2456735},{"filename":"/resources/sounds/glass6.ogg","start":2456735,"end":2474780},{"filename":"/resources/sounds/gold_seal.ogg","start":2474780,"end":2488064},{"filename":"/resources/sounds/gong.ogg","start":2488064,"end":2506209},{"filename":"/resources/sounds/highlight1.ogg","start":2506209,"end":2513396},{"filename":"/resources/sounds/highlight2.ogg","start":2513396,"end":2526780},{"filename":"/resources/sounds/holo1.ogg","start":2526780,"end":2539335},{"filename":"/resources/sounds/introPad1.ogg","start":2539335,"end":2873353},{"filename":"/resources/sounds/magic_crumple.ogg","start":2873353,"end":2959482},{"filename":"/resources/sounds/magic_crumple2.ogg","start":2959482,"end":2994812},{"filename":"/resources/sounds/magic_crumple3.ogg","start":2994812,"end":3019242},{"filename":"/resources/sounds/multhit1.ogg","start":3019242,"end":3031324},{"filename":"/resources/sounds/multhit2.ogg","start":3031324,"end":3046276},{"filename":"/resources/sounds/negative.ogg","start":3046276,"end":3059474},{"filename":"/resources/sounds/other1.ogg","start":3059474,"end":3071622},{"filename":"/resources/sounds/paper1.ogg","start":3071622,"end":3076894},{"filename":"/resources/sounds/polychrome1.ogg","start":3076894,"end":3106915},{"filename":"/resources/sounds/slice1.ogg","start":3106915,"end":3115412},{"filename":"/resources/sounds/splash_buildup.ogg","start":3115412,"end":3454971},{"filename":"/resources/sounds/tarot1.ogg","start":3454971,"end":3464092},{"filename":"/resources/sounds/tarot2.ogg","start":3464092,"end":3474914},{"filename":"/resources/sounds/timpani.ogg","start":3474914,"end":3489105},{"filename":"/resources/sounds/voice1.ogg","start":3489105,"end":3496189},{"filename":"/resources/sounds/voice10.ogg","start":3496189,"end":3503280},{"filename":"/resources/sounds/voice11.ogg","start":3503280,"end":3510269},{"filename":"/resources/sounds/voice2.ogg","start":3510269,"end":3517289},{"filename":"/resources/sounds/voice3.ogg","start":3517289,"end":3524388},{"filename":"/resources/sounds/voice4.ogg","start":3524388,"end":3531751},{"filename":"/resources/sounds/voice5.ogg","start":3531751,"end":3538946},{"filename":"/resources/sounds/voice6.ogg","start":3538946,"end":3546065},{"filename":"/resources/sounds/voice7.ogg","start":3546065,"end":3553126},{"filename":"/resources/sounds/voice8.ogg","start":3553126,"end":3560290},{"filename":"/resources/sounds/voice9.ogg","start":3560290,"end":3567456},{"filename":"/resources/sounds/whoosh_long.ogg","start":3567456,"end":3681637},{"filename":"/resources/sounds/whoosh.ogg","start":3681637,"end":3691549},{"filename":"/resources/sounds/whoosh1.ogg","start":3691549,"end":3704451},{"filename":"/resources/sounds/whoosh2.ogg","start":3704451,"end":3717299},{"filename":"/resources/sounds/win.ogg","start":3717299,"end":3753865}],"lazy":false},{"name":"game-music.data","uuid":"95ffdca6cc53c5328c2ad36335a366ffd86b837b2b03226e1b06bbc664878541","remote_package_size":13719294,"files":[{"filename":"/resources/sounds/music1.ogg","start":0,"end":2938742},{"filename":"/resources/sounds/music2.ogg","start":2938742,"end":5554011},{"filename":"/resources/sounds/music3.ogg","start":5554011,"end":8065069},{"filename":"/resources/sounds/music4.ogg","start":8065069,"end":10873466},{"filename":"/resources/sounds/music5.ogg","start":10873466,"end":13719294}],"lazy":true}];
  var initialPackages = packages.filter(function(packageInfo) { return !packageInfo.lazy; });
  var lazyPackages = packages.filter(function(packageInfo) { return packageInfo.lazy; });
  var packageLoadPromises = {};

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
    Module.finishedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads += initialPackages.length;
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

  function updateDownloadStatus(statusPackages) {
    statusPackages = statusPackages || initialPackages;
    var total = 0;
    var loaded = 0;
    for (var i = 0; i < statusPackages.length; i++) {
      var info = Module.webDataDownloads[statusPackages[i].name];
      total += (info && info.total) || statusPackages[i].remote_package_size;
      loaded += (info && info.loaded) || 0;
    }
    if (Module.setStatus) Module.setStatus('Downloading data... ' + formatBytes(loaded) + ' / ' + formatBytes(total));
  }

  function loadPackages(metadataPackages, options) {
    options = options || {};
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
        updateDownloadStatus(metadataPackages);
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
          updateDownloadStatus(metadataPackages);
          callback(xhr.response);
        } else {
          errback(new Error(xhr.statusText + ' : ' + xhr.responseURL));
        }
      };
      xhr.send(null);
    }

    function runWithFS(resolve, reject) {
      var hasPromiseCallbacks = typeof resolve === 'function';
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
        return PACKAGE_PATH + packageInfo.name + '/' + packageInfo.uuid;
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
        try {
          assert(arrayBuffer, 'Loading data file failed: ' + packageInfo.name);
          assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        } catch (error) {
          if (typeof reject === 'function') reject(error);
          throw error;
        }
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

      if (hasPromiseCallbacks) {
        var pendingPackages = metadataPackages.length;
        if (pendingPackages === 0) {
          resolve();
        } else {
          var originalRemoveRunDependency = Module.removeRunDependency;
          Module.removeRunDependency = function(id) {
            originalRemoveRunDependency.call(Module, id);
            if (typeof id === 'string' && id.indexOf('datafile_') === 0) {
              pendingPackages--;
              if (pendingPackages === 0) {
                Module.removeRunDependency = originalRemoveRunDependency;
                resolve();
              }
            }
          };
        }
      }

      for (var i = 0; i < metadataPackages.length; i++) {
        loadPackage(metadataPackages[i]);
      }
      updateDownloadStatus(metadataPackages);
    }

    if (Module.calledRun || options.lazy) {
      return new Promise(function(resolve, reject) {
        try {
          runWithFS(resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    } else {
      if (!Module.preRun) Module.preRun = [];
      Module.preRun.push(runWithFS);
      return Promise.resolve();
    }
  }

  Module.loadBalatroLazyPackage = function(packageName) {
    var selectedPackages = lazyPackages.filter(function(packageInfo) {
      return !packageName || packageInfo.name === packageName;
    });
    if (selectedPackages.length === 0) return Promise.resolve();

    var key = selectedPackages.map(function(packageInfo) { return packageInfo.name; }).join('|');
    if (!packageLoadPromises[key]) {
      packageLoadPromises[key] = loadPackages(selectedPackages, { lazy: true }).then(function() {
        Module.lazyPackageResults = Module.lazyPackageResults || {};
        for (var i = 0; i < selectedPackages.length; i++) {
          Module.lazyPackageResults[selectedPackages[i].name] = { loaded: true };
        }
      });
    }
    return packageLoadPromises[key];
  };

  function loadLazyPackagesAfterStartup() {
    if (lazyPackages.length === 0) return;
    var started = false;
    var events = ['pointerdown', 'keydown', 'touchstart'];

    function startLazyLoad() {
      if (started) return;
      started = true;
      if (typeof window === 'object') {
        for (var i = 0; i < events.length; i++) {
          window.removeEventListener(events[i], startLazyLoad, true);
        }
      }
      Module.loadBalatroLazyPackage().catch(function(error) {
        console.error('lazy package error:', error);
      });
    }

    Module.startBalatroLazyPackageLoad = startLazyLoad;

    if (typeof window === 'object') {
      for (var i = 0; i < events.length; i++) {
        window.addEventListener(events[i], startLazyLoad, true);
      }
    } else {
      startLazyLoad();
    }
  }

  if (!Module.postRun) Module.postRun = [];
  Module.postRun.push(loadLazyPackagesAfterStartup);

  loadPackages(initialPackages);
})();
