  /*
  Created By Riy
  Base Ori : DikaArdnt
  Kalau Mau Nambahin Fitur Di โบ index.js
  Ganti Owner Di โบ settings.js
  */

  // Menu
  exports.menu = (botname, pushname, salam) => {
  return `Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki๐
  `
  }

  // List
  exports.list = (pushname) => {
  return `Halo kak ${pushname}, silahkan dipilih list menu dibawah ini
  `
  }

  // All Menu
  exports.allmenu = (prefix, pushname, botname, time, salam) => {
  return `  _Selamat ${salam} kak ${pushname}_

  *โฐ Time Server : ${time}*
  *๐ List Menu : ${botname}*

  *(๐ค) Bot Info*
  ๐ฟ ${prefix}script
  ๐ฟ ${prefix}ping
  ๐ฟ ${prefix}runtime
  ๐ฟ ${prefix}speed
  ๐ฟ ${prefix}owner
  ๐ฟ ${prefix}menu
  ๐ฟ ${prefix}delete
  ๐ฟ ${prefix}infochat
  ๐ฟ ${prefix}quoted
  ๐ฟ ${prefix}listpc
  ๐ฟ ${prefix}listgc

  *(1) Owner Menu*
  ๐ฟ ${prefix}react [emoji]
  ๐ฟ ${prefix}chat [option]
  ๐ฟ ${prefix}join [link]
  ๐ฟ ${prefix}leave
  ๐ฟ ${prefix}block @user
  ๐ฟ ${prefix}unblock @user
  ๐ฟ ${prefix}bcgroup 
  ๐ฟ ${prefix}bcall 
  ๐ฟ ${prefix}setppbot  
  ๐ฟ ${prefix}setexif
  ๐ฟ ${prefix}setmenu
  ๐ฟ ${prefix}setallmenu
  ๐ฟ ${prefix}autoreact [on/off]
  
  *(2) Group Menu*
  ๐ฟ ${prefix}linkgroup
  ๐ฟ ${prefix}ephemeral [option]
  ๐ฟ ${prefix}setppgc
  ๐ฟ ${prefix}setname 
  ๐ฟ ${prefix}setdesc 
  ๐ฟ ${prefix}group [option]
  ๐ฟ ${prefix}editinfo [option]
  ๐ฟ ${prefix}add @user
  ๐ฟ ${prefix}kick @user
  ๐ฟ ${prefix}listonline
  ๐ฟ ${prefix}hidetag 
  ๐ฟ ${prefix}tagall 
  ๐ฟ ${prefix}antilink [on/off]
  ๐ฟ ${prefix}nsfw [on/off]
  ๐ฟ ${prefix}mute [on/off]
  ๐ฟ ${prefix}promote @user
  ๐ฟ ${prefix}demote @user
  ๐ฟ ${prefix}absen
  ๐ฟ ${prefix}hadir
  ๐ฟ ${prefix}tidakhadir
  ๐ฟ ${prefix}cekabsen
  ๐ฟ ${prefix}hapusabsen
  
  *(3) Database Menu*
  ๐ฟ ${prefix}setcmd
  ๐ฟ ${prefix}listcmd
  ๐ฟ ${prefix}delcmd
  ๐ฟ ${prefix}lockcmd
  ๐ฟ ${prefix}addmsg
  ๐ฟ ${prefix}listmsg
  ๐ฟ ${prefix}getmsg
  ๐ฟ ${prefix}delmsg

  *(4) Search Menu*
  ๐ฟ ${prefix}play 
  ๐ฟ ${prefix}yts 
  ๐ฟ ${prefix}google 
  ๐ฟ ${prefix}gimage 
  ๐ฟ ${prefix}pinterest 
  ๐ฟ ${prefix}wikimedia 
  ๐ฟ ${prefix}ytsearch 
  ๐ฟ ${prefix}githubstalk
  ๐ฟ ${prefix}igstalk
  ๐ฟ ${prefix}ringtone 
  
  *(5) Downloader Menu*
  ๐ฟ ${prefix}tiktok [url]
  ๐ฟ ${prefix}tiktokwm [url]
  ๐ฟ ${prefix}tiktoknowm [url]
  ๐ฟ ${prefix}tiktokaudio [url]
  ๐ฟ ${prefix}instagram [url]
  ๐ฟ ${prefix}twitter [url]
  ๐ฟ ${prefix}facebook [url]
  ๐ฟ ${prefix}ytmp4 [url]
  ๐ฟ ${prefix}ytmp3 [url]
  ๐ฟ ${prefix}play [judul]
  ๐ฟ ${prefix}ytsearch [judul]
  ๐ฟ ${prefix}gitclone

  *(6) Converter Menu*
  ๐ฟ ${prefix}toimage
  ๐ฟ ${prefix}removebg
  ๐ฟ ${prefix}sticker
  ๐ฟ ${prefix}setwm
  ๐ฟ ${prefix}emojimix
  ๐ฟ ${prefix}tovideo
  ๐ฟ ${prefix}togif
  ๐ฟ ${prefix}tourl
  ๐ฟ ${prefix}tovn
  ๐ฟ ${prefix}tomp3
  ๐ฟ ${prefix}toaudio
  ๐ฟ ${prefix}ebinary
  ๐ฟ ${prefix}dbinary
  ๐ฟ ${prefix}styletext
  ๐ฟ ${prefix}smeme
  ๐ฟ ${prefix}semoji
  ๐ฟ ${prefix}nulisbiasa
  ๐ฟ ${prefix}nuliskanan
  ๐ฟ ${prefix}nuliskiri
  ๐ฟ ${prefix}foliokanan
  ๐ฟ ${prefix}foliokiri

  *(7) Textpro Menu*
  ๐ฟ ${prefix}serti1 [teks]
  ๐ฟ ${prefix}serti2 [teks]
  ๐ฟ ${prefix}serti3 [teks]
  ๐ฟ ${prefix}blackpink [teks]
  ๐ฟ ${prefix}neon [teks]
  ๐ฟ ${prefix}magma [teks]
  ๐ฟ ${prefix}3dstone [teks]
  ๐ฟ ${prefix}halloween [teks]
  ๐ฟ ${prefix}horror [teks]
  ๐ฟ ${prefix}larva [teks]
  ๐ฟ ${prefix}toxic [teks]
  ๐ฟ ${prefix}marvel [teks|teks]
  ๐ฟ ${prefix}potter [teks]
  ๐ฟ ${prefix}pornhub [teks|teks]

  *(8) Photooxy Menu*
  ๐ฟ ${prefix}3d-underwater  
  ๐ฟ ${prefix}3dtext-pig  
  ๐ฟ ${prefix}3dvalentine-cards  
  ๐ฟ ${prefix}anonymous-neon  
  ๐ฟ ${prefix}advanced-glow  
  ๐ฟ ${prefix}art-shader  
  ๐ฟ ${prefix}angels-wings 

  *(9) Ephoto Menu*
  ๐ฟ ${prefix}3dnature
  ๐ฟ ${prefix}bevel
  ๐ฟ ${prefix}burnpaper
  ๐ฟ ${prefix}quotesgrass
  ๐ฟ ${prefix}stars
  ๐ฟ ${prefix}flaming
  ๐ฟ ${prefix}romance
  ๐ฟ ${prefix}gerbang
  ๐ฟ ${prefix}fur
  ๐ฟ ${prefix}funnycup
  
  *(10) Anime Menu*
  ๐ฟ ${prefix}loli
  ๐ฟ ${prefix}neko
  ๐ฟ ${prefix}waifu
  ๐ฟ ${prefix}shinobu
  ๐ฟ ${prefix}megumin
  ๐ฟ ${prefix}bully
  ๐ฟ ${prefix}cuddle
  ๐ฟ ${prefix}cry
  ๐ฟ ${prefix}hug
  ๐ฟ ${prefix}awoo
  ๐ฟ ${prefix}kiss
  ๐ฟ ${prefix}lick
  ๐ฟ ${prefix}pat
  ๐ฟ ${prefix}smug
  ๐ฟ ${prefix}bonk
  ๐ฟ ${prefix}yeet
  ๐ฟ ${prefix}blush
  ๐ฟ ${prefix}smile
  ๐ฟ ${prefix}wave
  ๐ฟ ${prefix}highfive
  ๐ฟ ${prefix}handhold
  ๐ฟ ${prefix}nom
  ๐ฟ ${prefix}bite
  ๐ฟ ${prefix}glomp
  ๐ฟ ${prefix}slap
  ๐ฟ ${prefix}kill
  ๐ฟ ${prefix}happy
  ๐ฟ ${prefix}wink
  ๐ฟ ${prefix}poke
  ๐ฟ ${prefix}dance
  ๐ฟ ${prefix}cringe
  ๐ฟ ${prefix}anime
  ๐ฟ ${prefix}yotsuba
  ๐ฟ ${prefix}shinomiya
  ๐ฟ ${prefix}yumeko
  ๐ฟ ${prefix}tejina
  ๐ฟ ${prefix}chiho
  ๐ฟ ${prefix}toukachan
  ๐ฟ ${prefix}akira
  ๐ฟ ${prefix}itori
  ๐ฟ ${prefix}kurumi
  ๐ฟ ${prefix}miku
  ๐ฟ ${prefix}pokemon
  ๐ฟ ${prefix}ryujin
  ๐ฟ ${prefix}kaori
  ๐ฟ ${prefix}shizuka
  ๐ฟ ${prefix}kotori
  ๐ฟ ${prefix}kaga
  ๐ฟ ${prefix}mikasa
  ๐ฟ ${prefix}akiyama
  ๐ฟ ${prefix}gremory
  ๐ฟ ${prefix}isuzu
  ๐ฟ ${prefix}cosplay
  ๐ฟ ${prefix}shina
  ๐ฟ ${prefix}kagura
  ๐ฟ ${prefix}shinka
  ๐ฟ ${prefix}eba
  ๐ฟ ${prefix}deidara
  ๐ฟ ${prefix}itachi
  ๐ฟ ${prefix}madara
  ๐ฟ ${prefix}yuki
  ๐ฟ ${prefix}asuna
  ๐ฟ ${prefix}ayuzawa
  ๐ฟ ${prefix}chitoge
  ๐ฟ ${prefix}emilia
  ๐ฟ ${prefix}hestia
  ๐ฟ ${prefix}inori
  ๐ฟ ${prefix}ana
  ๐ฟ ${prefix}boruto
  ๐ฟ ${prefix}erza
  ๐ฟ ${prefix}kakasih
  ๐ฟ ${prefix}sagiri
  ๐ฟ ${prefix}minato
  ๐ฟ ${prefix}naruto
  ๐ฟ ${prefix}nezuko
  ๐ฟ ${prefix}onepiece
  ๐ฟ ${prefix}sakura
  ๐ฟ ${prefix}sasuke
  ๐ฟ ${prefix}tsunade
  ๐ฟ ${prefix}jhota
  ๐ฟ ${prefix}hinata

  *(11) Nsfw Menu*
  ๐ฟ ${prefix}ahegeo
  ๐ฟ ${prefix}ass
  ๐ฟ ${prefix}bdsm
  ๐ฟ ${prefix}blowjob
  ๐ฟ ${prefix}cuckold 
  ๐ฟ ${prefix}cum 
  ๐ฟ ${prefix}ero
  ๐ฟ ${prefix}femdom
  ๐ฟ ${prefix}foot
  ๐ฟ ${prefix}gangbang
  ๐ฟ ${prefix}glasses
  ๐ฟ ${prefix}hentai
  ๐ฟ ${prefix}ahy
  ๐ฟ ${prefix}mstb
  ๐ฟ ${prefix}neko
  ๐ฟ ${prefix}orgy
  ๐ฟ ${prefix}panties
  ๐ฟ ${prefix}pussy
  ๐ฟ ${prefix}yuri
  ๐ฟ ${prefix}zettai
  
  *(12) Game Menu*
  ๐ฟ ${prefix}tictactoe [nama room]
  ๐ฟ ${prefix}delttt
  ๐ฟ ${prefix}tebak [option]
  ๐ฟ ${prefix}math [mode]
  ๐ฟ ${prefix}suitpvp [@tag]
  ๐ฟ ${prefix}suit2
  ๐ฟ ${prefix}aduayam

  *(13) Fun Menu*
  ๐ฟ ${prefix}bagaimanakah
  ๐ฟ ${prefix}kapankah
  ๐ฟ ${prefix}apakah
  ๐ฟ ${prefix}bisakah
  ๐ฟ ${prefix}rate
  ๐ฟ ${prefix}wangy
  ๐ฟ ${prefix}gantengcek
  ๐ฟ ${prefix}cekganteng
  ๐ฟ ${prefix}cantikcek
  ๐ฟ ${prefix}cekcantik
  ๐ฟ ${prefix}sangecek
  ๐ฟ ${prefix}ceksange
  ๐ฟ ${prefix}gaycek
  ๐ฟ ${prefix}cekgay
  ๐ฟ ${prefix}lesbicek
  ๐ฟ ${prefix}halah
  ๐ฟ ${prefix}hilih
  ๐ฟ ${prefix}huluh
  ๐ฟ ${prefix}heleh
  ๐ฟ ${prefix}holoh
  ๐ฟ ${prefix}jadian
  ๐ฟ ${prefix}jodohku
  ๐ฟ ${prefix}truth
  ๐ฟ ${prefix}dare

  *(14) Primbon Menu*
  ๐ฟ ${prefix}nomorhoki
  ๐ฟ ${prefix}artimimpi
  ๐ฟ ${prefix}artinama
  ๐ฟ ${prefix}ramaljodoh
  ๐ฟ ${prefix}ramaljodohbali
  ๐ฟ ${prefix}suamiistri
  ๐ฟ ${prefix}ramalcinta
  ๐ฟ ${prefix}cocoknama
  ๐ฟ ${prefix}pasangan
  ๐ฟ ${prefix}jadiannikah
  ๐ฟ ${prefix}sifatusaha
  ๐ฟ ${prefix}rezeki
  ๐ฟ ${prefix}pekerjaan
  ๐ฟ ${prefix}nasib
  ๐ฟ ${prefix}penyakit
  ๐ฟ ${prefix}tarot
  ๐ฟ ${prefix}fengshui
  ๐ฟ ${prefix}haribaik
  ๐ฟ ${prefix}harisangar
  ๐ฟ ${prefix}harisial
  ๐ฟ ${prefix}nagahari
  ๐ฟ ${prefix}arahrezeki
  ๐ฟ ${prefix}peruntungan
  ๐ฟ ${prefix}weton
  ๐ฟ ${prefix}karakter
  ๐ฟ ${prefix}keberuntungan
  ๐ฟ ${prefix}memancing
  ๐ฟ ${prefix}masasubur
  ๐ฟ ${prefix}zodiak
  ๐ฟ ${prefix}shio

  *(15) Cerpen Menu*
  ๐ฟ ${prefix}cerpen anak
  ๐ฟ ${prefix}cerpen bahasa daerah
  ๐ฟ ${prefix}cerpen bahasa inggris
  ๐ฟ ${prefix}cerpen bahasa jawa
  ๐ฟ ${prefix}cerpen bahasa sunda
  ๐ฟ ${prefix}cerpen budaya
  ๐ฟ ${prefix}cerpen cinta
  ๐ฟ ${prefix}cerpen cinta islami
  ๐ฟ ${prefix}cerpen cinta pertama
  ๐ฟ ${prefix}cerpen cinta romantis
  ๐ฟ ${prefix}cerpen cinta sedih
  ๐ฟ ${prefix}cerpen cinta segitiga
  ๐ฟ ${prefix}cerpen cinta sejati
  ๐ฟ ${prefix}cerpen galau
  ๐ฟ ${prefix}cerpen gokil
  ๐ฟ ${prefix}cerpen inspiratif
  ๐ฟ ${prefix}cerpen jepang
  ๐ฟ ${prefix}cerpen kehidupan
  ๐ฟ ${prefix}cerpen keluarga
  ๐ฟ ${prefix}cerpen kisah nyata
  ๐ฟ ${prefix}cerpen korea
  ๐ฟ ${prefix}cerpen kristen
  ๐ฟ ${prefix}cerpen liburan
  ๐ฟ ${prefix}cerpen lingkungan
  ๐ฟ ${prefix}cerpen lucu
  ๐ฟ ${prefix}cerpen malaysia
  ๐ฟ ${prefix}cerpen mengharukan
  ๐ฟ ${prefix}cerpen misteri
  ๐ฟ ${prefix}cerpen motivasi
  ๐ฟ ${prefix}cerpen nasihat
  ๐ฟ ${prefix}cerpen nasionalisme
  ๐ฟ ${prefix}cerpen olahraga
  ๐ฟ ${prefix}cerpen patah hati
  ๐ฟ ${prefix}cerpen penantian
  ๐ฟ ${prefix}cerpen pendidikan
  ๐ฟ ${prefix}cerpen pengalaman pribadi
  ๐ฟ ${prefix}cerpen pengorbanan
  ๐ฟ ${prefix}cerpen penyesalan
  ๐ฟ ${prefix}cerpen perjuangan
  ๐ฟ ${prefix}cerpen perpisahan
  ๐ฟ ${prefix}cerpen persahabatan
  ๐ฟ ${prefix}cerpen petualangan
  ๐ฟ ${prefix}cerpen ramadhan
  ๐ฟ ${prefix}cerpen remaja
  ๐ฟ ${prefix}cerpen renungan
  ๐ฟ ${prefix}cerpen rindu
  ๐ฟ ${prefix}cerpen rohani
  ๐ฟ ${prefix}cerpen romantis
  ๐ฟ ${prefix}cerpen sastra
  ๐ฟ ${prefix}cerpen sedih
  ๐ฟ ${prefix}cerpen sejarah
  ๐ฟ ${prefix}cerpen slice of life
  ๐ฟ ${prefix}cerpen terjemahan
  ๐ฟ ${prefix}cerpen thriller

  *(16) Information Menu*
  ๐ฟ ${prefix}merdeka-news 
  ๐ฟ ${prefix}kontan-news 
  ๐ฟ ${prefix}cnbc-news 
  ๐ฟ ${prefix}tribun-news 
  ๐ฟ ${prefix}indozone-news 
  ๐ฟ ${prefix}kompas-news 
  ๐ฟ ${prefix}detik-news 
  ๐ฟ ${prefix}daily-news 
  ๐ฟ ${prefix}inews-news 
  ๐ฟ ${prefix}okezone-news 
  ๐ฟ ${prefix}sindo-news 
  ๐ฟ ${prefix}tempo-news 
  ๐ฟ ${prefix}antara-news 
  ๐ฟ ${prefix}cnn-news 
  ๐ฟ ${prefix}fajar-news 
  ๐ฟ ${prefix}infogempa
  ๐ฟ ${prefix}infocovid
  ๐ฟ ${prefix}faktaunik

  *(17) Cecan Menu*
  ๐ฟ ${prefix}china
  ๐ฟ ${prefix}vietnam
  ๐ฟ ${prefix}thailand
  ๐ฟ ${prefix}indonesia
  ๐ฟ ${prefix}korea
  ๐ฟ ${prefix}japan
  ๐ฟ ${prefix}malaysia
  
  *(18) Asupan Menu*
  ๐ฟ ${prefix}hijaber
  ๐ฟ ${prefix}cecan
  ๐ฟ ${prefix}bocil
  ๐ฟ ${prefix}ukhty
  ๐ฟ ${prefix}gheayubi
  ๐ฟ ${prefix}rikagusriani
  ๐ฟ ${prefix}santuy
  
  *(19) Islamic Menu*
  ๐ฟ ${prefix}iqra
  ๐ฟ ${prefix}hadist
  ๐ฟ ${prefix}alquran
  ๐ฟ ${prefix}juzamma
  ๐ฟ ${prefix}tafsirsurah

  *(20) Sound Menu*
  ๐ฟ ${prefix}sound1
  ๐ฟ ${prefix}sound2
  ๐ฟ ${prefix}sound3
  ๐ฟ ${prefix}sound4
  ๐ฟ ${prefix}sound5
  ๐ฟ ${prefix}sound6
  ๐ฟ ${prefix}sound7
  ๐ฟ ${prefix}sound8
  ๐ฟ ${prefix}sound9
  ๐ฟ ${prefix}sound10
  ๐ฟ ${prefix}sound11
  ๐ฟ ${prefix}sound12
  ๐ฟ ${prefix}sound13
  ๐ฟ ${prefix}sound14
  ๐ฟ ${prefix}sound15
  ๐ฟ ${prefix}sound16
  ๐ฟ ${prefix}sound17
  ๐ฟ ${prefix}sound18
  ๐ฟ ${prefix}sound19
  ๐ฟ ${prefix}sound20
  ๐ฟ ${prefix}sound21
  ๐ฟ ${prefix}sound22
  ๐ฟ ${prefix}sound23
  ๐ฟ ${prefix}sound24
  ๐ฟ ${prefix}sound25
  ๐ฟ ${prefix}sound26
  ๐ฟ ${prefix}sound27
  ๐ฟ ${prefix}sound28
  ๐ฟ ${prefix}sound29
  ๐ฟ ${prefix}sound30
  ๐ฟ ${prefix}sound31
  ๐ฟ ${prefix}sound32
  ๐ฟ ${prefix}sound33
  ๐ฟ ${prefix}sound34
  ๐ฟ ${prefix}sound35
  ๐ฟ ${prefix}sound36
  ๐ฟ ${prefix}sound37
  ๐ฟ ${prefix}sound38
  ๐ฟ ${prefix}sound39
  ๐ฟ ${prefix}sound40
  ๐ฟ ${prefix}sound41
  ๐ฟ ${prefix}sound42
  ๐ฟ ${prefix}sound43
  ๐ฟ ${prefix}sound44
  ๐ฟ ${prefix}sound45
  ๐ฟ ${prefix}sound46
  ๐ฟ ${prefix}sound47
  ๐ฟ ${prefix}sound48
  ๐ฟ ${prefix}sound49
  ๐ฟ ${prefix}sound50
  ๐ฟ ${prefix}sound51
  ๐ฟ ${prefix}sound52
  ๐ฟ ${prefix}sound53
  ๐ฟ ${prefix}sound54
  ๐ฟ ${prefix}sound55
  ๐ฟ ${prefix}sound56
  ๐ฟ ${prefix}sound57
  ๐ฟ ${prefix}sound58
  ๐ฟ ${prefix}sound59
  ๐ฟ ${prefix}sound60
  ๐ฟ ${prefix}sound61
  ๐ฟ ${prefix}sound62
  ๐ฟ ${prefix}sound63
  ๐ฟ ${prefix}sound64
  ๐ฟ ${prefix}sound65
  ๐ฟ ${prefix}sound66
  ๐ฟ ${prefix}sound67
  ๐ฟ ${prefix}sound68
  ๐ฟ ${prefix}sound69
  ๐ฟ ${prefix}sound70
  ๐ฟ ${prefix}sound71
  ๐ฟ ${prefix}sound72
  ๐ฟ ${prefix}sound73
  ๐ฟ ${prefix}sound74
  
  *(21) Voice Changer*
  ๐ฟ ${prefix}bass
  ๐ฟ ${prefix}blown
  ๐ฟ ${prefix}deep
  ๐ฟ ${prefix}earrape
  ๐ฟ ${prefix}fast
  ๐ฟ ${prefix}fat
  ๐ฟ ${prefix}nightcore
  ๐ฟ ${prefix}reverse
  ๐ฟ ${prefix}robot
  ๐ฟ ${prefix}slow
  ๐ฟ ${prefix}tupai

  *(22) Telegram Sticker*
  ๐ฟ ${prefix}gurastick
  ๐ฟ ${prefix}dogestick
  ๐ฟ ${prefix}bucinstick
  ๐ฟ ${prefix}awoawo
  ๐ฟ ${prefix}benedict
  ๐ฟ ${prefix}chat
  ๐ฟ ${prefix}dbfly
  ๐ฟ ${prefix}dino_kuning
  ๐ฟ ${prefix}doge
  ๐ฟ ${prefix}gojosatoru
  ๐ฟ ${prefix}hope_boy
  ๐ฟ ${prefix}jisoo
  ๐ฟ ${prefix}kr_robot
  ๐ฟ ${prefix}kucing
  ๐ฟ ${prefix}lonte
  ๐ฟ ${prefix}manusia_lidi
  ๐ฟ ${prefix}menjamet
  ๐ฟ ${prefix}meow
  ๐ฟ ${prefix}nicholas
  ๐ฟ ${prefix}patrick
  ๐ฟ ${prefix}popoci
  ๐ฟ ${prefix}sponsbob
  ๐ฟ ${prefix}kawan_sponsbob
  ๐ฟ ${prefix}tyni

  *(23) Others Menu*
  ๐ฟ ${prefix}coffe
  ๐ฟ ${prefix}katabijak
  ๐ฟ ${prefix}quotes
  ๐ฟ ${prefix}quotes2
  ๐ฟ ${prefix}quotesanime
  ๐ฟ ${prefix}katailham
  ๐ฟ ${prefix}katabucin
  ๐ฟ ${prefix}katasenja
  ๐ฟ ${prefix}fiersabersari
  ๐ฟ ${prefix}couple
  ๐ฟ ${prefix}darkjokes
  
  *(๐) Thanks To*
  ๐ฟ Dika Ardnt
  ๐ฟ Mhankbarbar
  ๐ฟ Fatih Arridho
  ๐ฟ Ryuka Team
  ๐ฟ Zeeone Ofc
  ๐ฟ Bagas Prdn
  ๐ฟ Nurutomo
  ๐ฟ OnX Dz
  ๐ฟ Nekel
  ๐ฟ Yoga
  ๐ฟ Deff
  ๐ฟ Riy
  `
  }

  // Welcome
  exports.welcome = () => {
	return `Welcome
  `
  }

  // Leave
  exports.leave = () => {
  return`Byeee
  `
  }

  // Donasi
  exports.donasi  = (ownernomer) => {
  return `
*DONATE*

Hai kak โบ๏ธ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti ๐

Thanks!

*Contact person Owner* :
wa.me/${ownernomer}
  `
  }

  // Simple Menu
  exports.botinfo = (prefix) => {
  return`
  *(๐ค) Bot Info*
  ๐ฟ ${prefix}script
  ๐ฟ ${prefix}ping
  ๐ฟ ${prefix}runtime
  ๐ฟ ${prefix}speed
  ๐ฟ ${prefix}owner
  ๐ฟ ${prefix}menu
  ๐ฟ ${prefix}delete
  ๐ฟ ${prefix}infochat
  ๐ฟ ${prefix}quoted
  ๐ฟ ${prefix}listpc
  ๐ฟ ${prefix}listgc
  `
  }

  exports.ownermenu = (prefix) => {
  return `
  *(1) Owner Menu*
  ๐ฟ ${prefix}react [emoji]
  ๐ฟ ${prefix}chat [option]
  ๐ฟ ${prefix}join [link]
  ๐ฟ ${prefix}leave
  ๐ฟ ${prefix}block @user
  ๐ฟ ${prefix}unblock @user
  ๐ฟ ${prefix}bcgroup 
  ๐ฟ ${prefix}bcall 
  ๐ฟ ${prefix}setppbot  
  ๐ฟ ${prefix}setexif
  ๐ฟ ${prefix}setmenu
  ๐ฟ ${prefix}setallmenu
  ๐ฟ ${prefix}autoreact [on/off]
  `
  }

  exports.groupmenu = (prefix) => {
  return `
  *(2) Group Menu*
  ๐ฟ ${prefix}linkgroup
  ๐ฟ ${prefix}ephemeral [option]
  ๐ฟ ${prefix}setppgc
  ๐ฟ ${prefix}setname 
  ๐ฟ ${prefix}setdesc 
  ๐ฟ ${prefix}group [option]
  ๐ฟ ${prefix}editinfo [option]
  ๐ฟ ${prefix}add @user
  ๐ฟ ${prefix}kick @user
  ๐ฟ ${prefix}listonline
  ๐ฟ ${prefix}hidetag 
  ๐ฟ ${prefix}tagall 
  ๐ฟ ${prefix}antilink [on/off]
  ๐ฟ ${prefix}nsfw [on/off]
  ๐ฟ ${prefix}mute [on/off]
  ๐ฟ ${prefix}promote @user
  ๐ฟ ${prefix}demote @user
  ๐ฟ ${prefix}absen
  ๐ฟ ${prefix}hadir
  ๐ฟ ${prefix}tidakhadir
  ๐ฟ ${prefix}cekabsen
  ๐ฟ ${prefix}hapusabsen
  `
  }

  exports.databasemenu = (prefix) => {
  return`
  *(3) Database Menu*
  ๐ฟ ${prefix}setcmd
  ๐ฟ ${prefix}listcmd
  ๐ฟ ${prefix}delcmd
  ๐ฟ ${prefix}lockcmd
  ๐ฟ ${prefix}addmsg
  ๐ฟ ${prefix}listmsg
  ๐ฟ ${prefix}getmsg
  ๐ฟ ${prefix}delmsg
  `
  }

  exports.searchmenu = (prefix) => {
  return `
  *(4) Search Menu*
  ๐ฟ ${prefix}play 
  ๐ฟ ${prefix}yts 
  ๐ฟ ${prefix}google 
  ๐ฟ ${prefix}gimage 
  ๐ฟ ${prefix}pinterest 
  ๐ฟ ${prefix}wikimedia 
  ๐ฟ ${prefix}ytsearch 
  ๐ฟ ${prefix}githubstalk
  ๐ฟ ${prefix}igstalk
  ๐ฟ ${prefix}ringtone 
  `
  }

  exports.downloadermenu = (prefix) => {
  return `
  *(5) Downloader Menu*
  ๐ฟ ${prefix}tiktok [url]
  ๐ฟ ${prefix}tiktokwm [url]
  ๐ฟ ${prefix}tiktoknowm [url]
  ๐ฟ ${prefix}tiktokaudio [url]
  ๐ฟ ${prefix}instagram [url]
  ๐ฟ ${prefix}twitter [url]
  ๐ฟ ${prefix}facebook [url]
  ๐ฟ ${prefix}ytmp4 [url]
  ๐ฟ ${prefix}ytmp3 [url]
  ๐ฟ ${prefix}play [judul]
  ๐ฟ ${prefix}ytsearch [judul]
  ๐ฟ ${prefix}gitclone
  `
  }

  exports.convertmenu = (prefix) => {
  return `
  *(6) Converter Menu*
  ๐ฟ ${prefix}toimage
  ๐ฟ ${prefix}removebg
  ๐ฟ ${prefix}sticker
  ๐ฟ ${prefix}setwm
  ๐ฟ ${prefix}emojimix
  ๐ฟ ${prefix}tovideo
  ๐ฟ ${prefix}togif
  ๐ฟ ${prefix}tourl
  ๐ฟ ${prefix}tovn
  ๐ฟ ${prefix}tomp3
  ๐ฟ ${prefix}toaudio
  ๐ฟ ${prefix}ebinary
  ๐ฟ ${prefix}dbinary
  ๐ฟ ${prefix}styletext
  ๐ฟ ${prefix}smeme
  ๐ฟ ${prefix}semoji
  ๐ฟ ${prefix}nulisbiasa
  ๐ฟ ${prefix}nuliskanan
  ๐ฟ ${prefix}nuliskiri
  ๐ฟ ${prefix}foliokanan
  ๐ฟ ${prefix}foliokiri
  `
  }

  exports.textpromenu = (prefix) => {
  return `
  *(7) Textpro Menu*
  ๐ฟ ${prefix}serti1 [teks]
  ๐ฟ ${prefix}serti2 [teks]
  ๐ฟ ${prefix}serti3 [teks]
  ๐ฟ ${prefix}blackpink [teks]
  ๐ฟ ${prefix}neon [teks]
  ๐ฟ ${prefix}magma [teks]
  ๐ฟ ${prefix}3dstone [teks]
  ๐ฟ ${prefix}halloween [teks]
  ๐ฟ ${prefix}horror [teks]
  ๐ฟ ${prefix}larva [teks]
  ๐ฟ ${prefix}toxic [teks]
  ๐ฟ ${prefix}marvel [teks|teks]
  ๐ฟ ${prefix}potter [teks]
  ๐ฟ ${prefix}pornhub [teks|teks]
  `
  }

  exports.photooxymenu = (prefix) => {
  return`
  *(8) Photooxy Menu*
  ๐ฟ ${prefix}3d-underwater  
  ๐ฟ ${prefix}3dtext-pig  
  ๐ฟ ${prefix}3dvalentine-cards  
  ๐ฟ ${prefix}anonymous-neon  
  ๐ฟ ${prefix}advanced-glow  
  ๐ฟ ${prefix}art-shader  
  ๐ฟ ${prefix}angels-wings 
  `
  }

  exports.ephotomenu = (prefix) => {
  return `
  *(9) Ephoto Menu*
  ๐ฟ ${prefix}3dnature
  ๐ฟ ${prefix}bevel
  ๐ฟ ${prefix}burnpaper
  ๐ฟ ${prefix}quotesgrass
  ๐ฟ ${prefix}stars
  ๐ฟ ${prefix}flaming
  ๐ฟ ${prefix}romance
  ๐ฟ ${prefix}gerbang
  ๐ฟ ${prefix}fur
  ๐ฟ ${prefix}funnycup
  `
  }

  exports.randomanimemenu = (prefix) => {
  return `
  *(10) Anime Menu*
  ๐ฟ ${prefix}loli
  ๐ฟ ${prefix}neko
  ๐ฟ ${prefix}waifu
  ๐ฟ ${prefix}shinobu
  ๐ฟ ${prefix}megumin
  ๐ฟ ${prefix}bully
  ๐ฟ ${prefix}cuddle
  ๐ฟ ${prefix}cry
  ๐ฟ ${prefix}hug
  ๐ฟ ${prefix}awoo
  ๐ฟ ${prefix}kiss
  ๐ฟ ${prefix}lick
  ๐ฟ ${prefix}pat
  ๐ฟ ${prefix}smug
  ๐ฟ ${prefix}bonk
  ๐ฟ ${prefix}yeet
  ๐ฟ ${prefix}blush
  ๐ฟ ${prefix}smile
  ๐ฟ ${prefix}wave
  ๐ฟ ${prefix}highfive
  ๐ฟ ${prefix}handhold
  ๐ฟ ${prefix}nom
  ๐ฟ ${prefix}bite
  ๐ฟ ${prefix}glomp
  ๐ฟ ${prefix}slap
  ๐ฟ ${prefix}kill
  ๐ฟ ${prefix}happy
  ๐ฟ ${prefix}wink
  ๐ฟ ${prefix}poke
  ๐ฟ ${prefix}dance
  ๐ฟ ${prefix}cringe
  ๐ฟ ${prefix}anime
  ๐ฟ ${prefix}yotsuba
  ๐ฟ ${prefix}shinomiya
  ๐ฟ ${prefix}yumeko
  ๐ฟ ${prefix}tejina
  ๐ฟ ${prefix}chiho
  ๐ฟ ${prefix}toukachan
  ๐ฟ ${prefix}akira
  ๐ฟ ${prefix}itori
  ๐ฟ ${prefix}kurumi
  ๐ฟ ${prefix}miku
  ๐ฟ ${prefix}pokemon
  ๐ฟ ${prefix}ryujin
  ๐ฟ ${prefix}kaori
  ๐ฟ ${prefix}shizuka
  ๐ฟ ${prefix}kotori
  ๐ฟ ${prefix}kaga
  ๐ฟ ${prefix}mikasa
  ๐ฟ ${prefix}akiyama
  ๐ฟ ${prefix}gremory
  ๐ฟ ${prefix}isuzu
  ๐ฟ ${prefix}cosplay
  ๐ฟ ${prefix}shina
  ๐ฟ ${prefix}kagura
  ๐ฟ ${prefix}shinka
  ๐ฟ ${prefix}eba
  ๐ฟ ${prefix}deidara
  ๐ฟ ${prefix}itachi
  ๐ฟ ${prefix}madara
  ๐ฟ ${prefix}yuki
  ๐ฟ ${prefix}asuna
  ๐ฟ ${prefix}ayuzawa
  ๐ฟ ${prefix}chitoge
  ๐ฟ ${prefix}emilia
  ๐ฟ ${prefix}hestia
  ๐ฟ ${prefix}inori
  ๐ฟ ${prefix}ana
  ๐ฟ ${prefix}boruto
  ๐ฟ ${prefix}erza
  ๐ฟ ${prefix}kakasih
  ๐ฟ ${prefix}sagiri
  ๐ฟ ${prefix}minato
  ๐ฟ ${prefix}naruto
  ๐ฟ ${prefix}nezuko
  ๐ฟ ${prefix}onepiece
  ๐ฟ ${prefix}sakura
  ๐ฟ ${prefix}sasuke
  ๐ฟ ${prefix}tsunade
  ๐ฟ ${prefix}jhota
  ๐ฟ ${prefix}hinata
  `
  }

  exports.nsfwmenu = (prefix) => {
  return`
  *(11) Nsfw Menu*
  ๐ฟ ${prefix}ahegeo
  ๐ฟ ${prefix}ass
  ๐ฟ ${prefix}bdsm
  ๐ฟ ${prefix}blowjob
  ๐ฟ ${prefix}cuckold 
  ๐ฟ ${prefix}cum 
  ๐ฟ ${prefix}ero
  ๐ฟ ${prefix}femdom
  ๐ฟ ${prefix}foot
  ๐ฟ ${prefix}gangbang
  ๐ฟ ${prefix}glasses
  ๐ฟ ${prefix}hentai
  ๐ฟ ${prefix}ahy
  ๐ฟ ${prefix}mstb
  ๐ฟ ${prefix}neko
  ๐ฟ ${prefix}orgy
  ๐ฟ ${prefix}panties
  ๐ฟ ${prefix}pussy
  ๐ฟ ${prefix}yuri
  ๐ฟ ${prefix}zettai
  `
  }

  exports.gamemenu = (prefix) => {
  return`
  *(12) Game Menu*
  ๐ฟ ${prefix}tictactoe [nama room]
  ๐ฟ ${prefix}delttt
  ๐ฟ ${prefix}tebak [option]
  ๐ฟ ${prefix}math [mode]
  ๐ฟ ${prefix}suitpvp [@tag]
  ๐ฟ ${prefix}suit2
  ๐ฟ ${prefix}aduayam
  `
  }
  
  exports.funmenu = (prefix) => {
  return `
  *(13) Fun Menu*
  ๐ฟ ${prefix}bagaimanakah
  ๐ฟ ${prefix}kapankah
  ๐ฟ ${prefix}apakah
  ๐ฟ ${prefix}bisakah
  ๐ฟ ${prefix}rate
  ๐ฟ ${prefix}wangy
  ๐ฟ ${prefix}gantengcek
  ๐ฟ ${prefix}cekganteng
  ๐ฟ ${prefix}cantikcek
  ๐ฟ ${prefix}cekcantik
  ๐ฟ ${prefix}sangecek
  ๐ฟ ${prefix}ceksange
  ๐ฟ ${prefix}gaycek
  ๐ฟ ${prefix}cekgay
  ๐ฟ ${prefix}lesbicek
  ๐ฟ ${prefix}halah
  ๐ฟ ${prefix}hilih
  ๐ฟ ${prefix}huluh
  ๐ฟ ${prefix}heleh
  ๐ฟ ${prefix}holoh
  ๐ฟ ${prefix}jadian
  ๐ฟ ${prefix}jodohku
  ๐ฟ ${prefix}truth
  ๐ฟ ${prefix}dare
  `
  }

  exports.primbonmenu = (prefix) => {
  return`
  *(14) Primbon Menu*
  ๐ฟ ${prefix}nomorhoki
  ๐ฟ ${prefix}artimimpi
  ๐ฟ ${prefix}artinama
  ๐ฟ ${prefix}ramaljodoh
  ๐ฟ ${prefix}ramaljodohbali
  ๐ฟ ${prefix}suamiistri
  ๐ฟ ${prefix}ramalcinta
  ๐ฟ ${prefix}cocoknama
  ๐ฟ ${prefix}pasangan
  ๐ฟ ${prefix}jadiannikah
  ๐ฟ ${prefix}sifatusaha
  ๐ฟ ${prefix}rezeki
  ๐ฟ ${prefix}pekerjaan
  ๐ฟ ${prefix}nasib
  ๐ฟ ${prefix}penyakit
  ๐ฟ ${prefix}tarot
  ๐ฟ ${prefix}fengshui
  ๐ฟ ${prefix}haribaik
  ๐ฟ ${prefix}harisangar
  ๐ฟ ${prefix}harisial
  ๐ฟ ${prefix}nagahari
  ๐ฟ ${prefix}arahrezeki
  ๐ฟ ${prefix}peruntungan
  ๐ฟ ${prefix}weton
  ๐ฟ ${prefix}karakter
  ๐ฟ ${prefix}keberuntungan
  ๐ฟ ${prefix}memancing
  ๐ฟ ${prefix}masasubur
  ๐ฟ ${prefix}zodiak
  ๐ฟ ${prefix}shio
  `
  }

  exports.cerpenmenu = (prefix) => {
  return `
  *(15) Cerpen Menu*
  ๐ฟ ${prefix}cerpen anak
  ๐ฟ ${prefix}cerpen bahasa daerah
  ๐ฟ ${prefix}cerpen bahasa inggris
  ๐ฟ ${prefix}cerpen bahasa jawa
  ๐ฟ ${prefix}cerpen bahasa sunda
  ๐ฟ ${prefix}cerpen budaya
  ๐ฟ ${prefix}cerpen cinta
  ๐ฟ ${prefix}cerpen cinta islami
  ๐ฟ ${prefix}cerpen cinta pertama
  ๐ฟ ${prefix}cerpen cinta romantis
  ๐ฟ ${prefix}cerpen cinta sedih
  ๐ฟ ${prefix}cerpen cinta segitiga
  ๐ฟ ${prefix}cerpen cinta sejati
  ๐ฟ ${prefix}cerpen galau
  ๐ฟ ${prefix}cerpen gokil
  ๐ฟ ${prefix}cerpen inspiratif
  ๐ฟ ${prefix}cerpen jepang
  ๐ฟ ${prefix}cerpen kehidupan
  ๐ฟ ${prefix}cerpen keluarga
  ๐ฟ ${prefix}cerpen kisah nyata
  ๐ฟ ${prefix}cerpen korea
  ๐ฟ ${prefix}cerpen kristen
  ๐ฟ ${prefix}cerpen liburan
  ๐ฟ ${prefix}cerpen lingkungan
  ๐ฟ ${prefix}cerpen lucu
  ๐ฟ ${prefix}cerpen malaysia
  ๐ฟ ${prefix}cerpen mengharukan
  ๐ฟ ${prefix}cerpen misteri
  ๐ฟ ${prefix}cerpen motivasi
  ๐ฟ ${prefix}cerpen nasihat
  ๐ฟ ${prefix}cerpen nasionalisme
  ๐ฟ ${prefix}cerpen olahraga
  ๐ฟ ${prefix}cerpen patah hati
  ๐ฟ ${prefix}cerpen penantian
  ๐ฟ ${prefix}cerpen pendidikan
  ๐ฟ ${prefix}cerpen pengalaman pribadi
  ๐ฟ ${prefix}cerpen pengorbanan
  ๐ฟ ${prefix}cerpen penyesalan
  ๐ฟ ${prefix}cerpen perjuangan
  ๐ฟ ${prefix}cerpen perpisahan
  ๐ฟ ${prefix}cerpen persahabatan
  ๐ฟ ${prefix}cerpen petualangan
  ๐ฟ ${prefix}cerpen ramadhan
  ๐ฟ ${prefix}cerpen remaja
  ๐ฟ ${prefix}cerpen renungan
  ๐ฟ ${prefix}cerpen rindu
  ๐ฟ ${prefix}cerpen rohani
  ๐ฟ ${prefix}cerpen romantis
  ๐ฟ ${prefix}cerpen sastra
  ๐ฟ ${prefix}cerpen sedih
  ๐ฟ ${prefix}cerpen sejarah
  ๐ฟ ${prefix}cerpen slice of life
  ๐ฟ ${prefix}cerpen terjemahan
  ๐ฟ ${prefix}cerpen thriller
  `
  }

  exports.informationmenu = (prefix) => {
  return `
  *(16) Information Menu*
  ๐ฟ ${prefix}merdeka-news 
  ๐ฟ ${prefix}kontan-news 
  ๐ฟ ${prefix}cnbc-news 
  ๐ฟ ${prefix}tribun-news 
  ๐ฟ ${prefix}indozone-news 
  ๐ฟ ${prefix}kompas-news 
  ๐ฟ ${prefix}detik-news 
  ๐ฟ ${prefix}daily-news 
  ๐ฟ ${prefix}inews-news 
  ๐ฟ ${prefix}okezone-news 
  ๐ฟ ${prefix}sindo-news 
  ๐ฟ ${prefix}tempo-news 
  ๐ฟ ${prefix}antara-news 
  ๐ฟ ${prefix}cnn-news 
  ๐ฟ ${prefix}fajar-news 
  ๐ฟ ${prefix}infogempa
  ๐ฟ ${prefix}infocovid
  ๐ฟ ${prefix}faktaunik
  `
  }
  
  exports.cecanmenu = (prefix) => {
  return `
  *(17) Cecan Menu*
  ๐ฟ ${prefix}china
  ๐ฟ ${prefix}vietnam
  ๐ฟ ${prefix}thailand
  ๐ฟ ${prefix}indonesia
  ๐ฟ ${prefix}korea
  ๐ฟ ${prefix}japan
  ๐ฟ ${prefix}malaysia
  `
  }

  exports.asupanmenu = (prefix) => {
  return `
  *(18) Asupan Menu*
  ๐ฟ ${prefix}hijaber
  ๐ฟ ${prefix}cecan
  ๐ฟ ${prefix}bocil
  ๐ฟ ${prefix}ukhty
  ๐ฟ ${prefix}gheayubi
  ๐ฟ ${prefix}rikagusriani
  ๐ฟ ${prefix}santuy
  `
  }

  exports.islamicmenu = (prefix) => {
  return `
  *(19) Islamic Menu*
  ๐ฟ ${prefix}iqra
  ๐ฟ ${prefix}hadist
  ๐ฟ ${prefix}alquran
  ๐ฟ ${prefix}juzamma
  ๐ฟ ${prefix}tafsirsurah
  `
  }

  exports.voicechargermenu = (prefix) => {
  return`
  *(20) Voice Changer*
  ๐ฟ ${prefix}bass
  ๐ฟ ${prefix}blown
  ๐ฟ ${prefix}deep
  ๐ฟ ${prefix}earrape
  ๐ฟ ${prefix}fast
  ๐ฟ ${prefix}fat
  ๐ฟ ${prefix}nightcore
  ๐ฟ ${prefix}reverse
  ๐ฟ ${prefix}robot
  ๐ฟ ${prefix}slow
  ๐ฟ ${prefix}tupai
  `
  }
  
  exports.soundmenu = (prefix) => {
  return `
  *(21) Sound Menu*
  ๐ฟ ${prefix}sound1
  ๐ฟ ${prefix}sound2
  ๐ฟ ${prefix}sound3
  ๐ฟ ${prefix}sound4
  ๐ฟ ${prefix}sound5
  ๐ฟ ${prefix}sound6
  ๐ฟ ${prefix}sound7
  ๐ฟ ${prefix}sound8
  ๐ฟ ${prefix}sound9
  ๐ฟ ${prefix}sound10
  ๐ฟ ${prefix}sound11
  ๐ฟ ${prefix}sound12
  ๐ฟ ${prefix}sound13
  ๐ฟ ${prefix}sound14
  ๐ฟ ${prefix}sound15
  ๐ฟ ${prefix}sound16
  ๐ฟ ${prefix}sound17
  ๐ฟ ${prefix}sound18
  ๐ฟ ${prefix}sound19
  ๐ฟ ${prefix}sound20
  ๐ฟ ${prefix}sound21
  ๐ฟ ${prefix}sound22
  ๐ฟ ${prefix}sound23
  ๐ฟ ${prefix}sound24
  ๐ฟ ${prefix}sound25
  ๐ฟ ${prefix}sound26
  ๐ฟ ${prefix}sound27
  ๐ฟ ${prefix}sound28
  ๐ฟ ${prefix}sound29
  ๐ฟ ${prefix}sound30
  ๐ฟ ${prefix}sound31
  ๐ฟ ${prefix}sound32
  ๐ฟ ${prefix}sound33
  ๐ฟ ${prefix}sound34
  ๐ฟ ${prefix}sound35
  ๐ฟ ${prefix}sound36
  ๐ฟ ${prefix}sound37
  ๐ฟ ${prefix}sound38
  ๐ฟ ${prefix}sound39
  ๐ฟ ${prefix}sound40
  ๐ฟ ${prefix}sound41
  ๐ฟ ${prefix}sound42
  ๐ฟ ${prefix}sound43
  ๐ฟ ${prefix}sound44
  ๐ฟ ${prefix}sound45
  ๐ฟ ${prefix}sound46
  ๐ฟ ${prefix}sound47
  ๐ฟ ${prefix}sound48
  ๐ฟ ${prefix}sound49
  ๐ฟ ${prefix}sound50
  ๐ฟ ${prefix}sound51
  ๐ฟ ${prefix}sound52
  ๐ฟ ${prefix}sound53
  ๐ฟ ${prefix}sound54
  ๐ฟ ${prefix}sound55
  ๐ฟ ${prefix}sound56
  ๐ฟ ${prefix}sound57
  ๐ฟ ${prefix}sound58
  ๐ฟ ${prefix}sound59
  ๐ฟ ${prefix}sound60
  ๐ฟ ${prefix}sound61
  ๐ฟ ${prefix}sound62
  ๐ฟ ${prefix}sound63
  ๐ฟ ${prefix}sound64
  ๐ฟ ${prefix}sound65
  ๐ฟ ${prefix}sound66
  ๐ฟ ${prefix}sound67
  ๐ฟ ${prefix}sound68
  ๐ฟ ${prefix}sound69
  ๐ฟ ${prefix}sound70
  ๐ฟ ${prefix}sound71
  ๐ฟ ${prefix}sound72
  ๐ฟ ${prefix}sound73
  ๐ฟ ${prefix}sound74
  `
  }

  exports.telegramstickermenu = (prefix) => {
  return `
  *(22) Telegram Sticker*
  ๐ฟ ${prefix}gurastick
  ๐ฟ ${prefix}dogestick
  ๐ฟ ${prefix}bucinstick
  ๐ฟ ${prefix}awoawo
  ๐ฟ ${prefix}benedict
  ๐ฟ ${prefix}chat
  ๐ฟ ${prefix}dbfly
  ๐ฟ ${prefix}dino_kuning
  ๐ฟ ${prefix}doge
  ๐ฟ ${prefix}gojosatoru
  ๐ฟ ${prefix}hope_boy
  ๐ฟ ${prefix}jisoo
  ๐ฟ ${prefix}kr_robot
  ๐ฟ ${prefix}kucing
  ๐ฟ ${prefix}lonte
  ๐ฟ ${prefix}manusia_lidi
  ๐ฟ ${prefix}menjamet
  ๐ฟ ${prefix}meow
  ๐ฟ ${prefix}nicholas
  ๐ฟ ${prefix}patrick
  ๐ฟ ${prefix}popoci
  ๐ฟ ${prefix}sponsbob
  ๐ฟ ${prefix}kawan_sponsbob
  ๐ฟ ${prefix}tyni
  `
  }

  exports.othersmenu = (prefix) => {
  return `
  *(23) Others Menu*
  ๐ฟ ${prefix}coffe
  ๐ฟ ${prefix}katabijak
  ๐ฟ ${prefix}quotes
  ๐ฟ ${prefix}quotes2
  ๐ฟ ${prefix}quotesanime
  ๐ฟ ${prefix}katailham
  ๐ฟ ${prefix}katabucin
  ๐ฟ ${prefix}katasenja
  ๐ฟ ${prefix}fiersabersari
  ๐ฟ ${prefix}couple
  ๐ฟ ${prefix}darkjokes
  `
  }

  //tqto gsh di hps y :) kalau mai tmbhin aja nama kalian.
  exports.thanksto = () => {
  return `
  *(๐) Thanks To*
  ๐ฟ Dika Ardnt
  ๐ฟ Mhankbarbar
  ๐ฟ Fatih Arridho
  ๐ฟ Ryuka Team
  ๐ฟ Zeeone Ofc
  ๐ฟ Bagas Prdn
  ๐ฟ Nurutomo
  ๐ฟ OnX Dz
  ๐ฟ Nekel
  ๐ฟ Yoga
  ๐ฟ Deff
  ๐ฟ Riy
  `
  }