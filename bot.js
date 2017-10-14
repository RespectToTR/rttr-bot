const Discord = require('discord.js');
const client = new Discord.Client();
const CLEAR_MESSAGES = '>temizle';
const yt = require('ytdl-core');
const connections = new Map();
const fs = require("fs");

var owners = "363321082725400576";
var prefix = 'rttr!';

var para = ["yazı", "tura", "yazı", "tura"]

function yazıtura(para) {
  return para[Math.floor((Math.random() * para.length))];
};

function get_random(list) {
  return list[Math.floor((Math.random() * list.length))];
};

var random_color = [0xff0000, 0x008000, 0xffff00, 0x0000ff, 0xff8000];

function r_r(random_color) {
 return random_color[Math.floor((Math.random() * random_color.length))];
}

var kalpler = [":heart:", ":yellow_heart:", ":green_heart:", ":blue_heart:"]

function r_k(kalpler) {
  return kalpler[Math.floor((Math.random() * kalpler.length))];
}


client.on("guildCreate", guild => { // when client joins to a guild
  console.log(`Yeni bir sunucuya katıldım!\n  Ad: ${guild.name}\n  ID: ${guild.id}\n\n  Sahibi:\n    Tag: ${guild.owner.user.tag}\n    ID: ${guild.owner.user.id}\n`); // print what the guild is and who owns it
  client.user.setPresence({ game: { name: `rttr!yardım | Sunucular: ${client.guilds.size} Kullanıcı: ${client.users.size} | Official Discord: https://discord.gg/hcChJeG`, type: 0 } });
  client.users.get(guild.owner.user.id).send("Merhaba öncelikle sunucunuza eklediğiniz için teşekkür etmek isterim.Şimdi dilerseniz size 2 eklenmesi zorunlu olmayan kanal söyleyeceğim.\n\n\`loglar\` : bu isimli bir kanal açarsanız kullanıcıların kullandığı komutları buradan takip edebilirsiniz.\n\n\`cay-ocagi\` : bu isimli bir kanal açarsanız giriş çıkış mesajlarını buraya atar bot yoksa mesaj atmaz.");
});

client.on("guildDelete", guild => { // when client leaves or deletes a guild
  console.log(`Bir sunucudan ayrıldım!\n  Ad: ${guild.name}\n  ID: ${guild.id}\n\n  Sahibi:\n    Tag: ${guild.owner.user.tag}\n    ID: ${guild.owner.user.id}\n`); // print what the guild was and who owned it
  client.user.setPresence({ game: { name: `rttr!yardım | Sunucular: ${client.guilds.size} Kullanıcı: ${client.users.size} | Official Discord: https://discord.gg/hcChJeG`, type: 0 } });
});

client.on('ready', () => {
console.log(`${client.user.tag} Başarılı bir şekilde bağlandı...`);
  client.user.setPresence({ game: { name: `rttr!yardım | Sunucular: ${client.guilds.size} Kullanıcı: ${client.users.size} | Official Discord: https://discord.gg/hcChJeG`, type: 0 } });
});

client.on('message', msg => {
  let args = msg.content.split(' ').slice(1);
  let argresult = args.join(' ');
  if (msg.content === `${prefix}davet`) {
    msg.member.send(`\`${msg.author.username}\`  Buyur\nhttps://www.rttrts3.tk/linkkisalt/discordbot/`);
    msg.channel.send(`\`${msg.author.username}\` **Davet linkimi özeline gönderdim :ok_hand:**`);
  }
  if (msg.content === `${prefix}açkapa`) {
    if (msg.author.id === '363321082725400576') {
      msg.delete(1),
      msg.channel.send(`***İşlem başarılı \/|/|_-___***`).then(msg => {
        process.exit(42);
      });
    } else {
      msg.channel.send(`\`${msg.author.username}\`  **Sen benim yapımcım değilsin :no_entry:**`);
      return;
    }
   }
  if (msg.content.toLowerCase() === "deaktif>kedicik") {
    var kediler = ["http://media2.giphy.com/media/kIkwipWRoqeUE/giphy.gif", "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif", "https://media.giphy.com/media/xBAreNGk5DapO/giphy.gif", "https://media.giphy.com/media/3oEduVGyuRGuZXaqys/giphy.gif", "https://media.giphy.com/media/9IRX12VhoXoR2/giphy.gif", "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif", "https://media.giphy.com/media/vAHZ9rc8rY8zm/giphy.gif", "https://media.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif"];
    var sonuc = get_random(kediler);
    msg.channel.send(":heart_eyes_cat: | Baksen şu yaramaza :blue_heart:", {
        file: sonuc // Or replace with FileOptions object
    })
  }
  if(msg.content === "emojis") {
    const ayy = client.emojis.find("name", "patates");
    msg.channel.send(`${patates} Alırmıydın :D`);
 }
  if (msg.content === `${prefix}çık`) {
    if (msg.author.id === '363321082725400576') {
      msg.delete(1);
      msg.channel.send(`***Buradan çıkıyorum kalın sağlıcakla :heart:***`).then(m => {
        m.guild.leave();
      });
    } else {
      return;
    }
   }
  if (msg.content === `${prefix}şans`) {
    var sans = ["Güzel bir gün geçireceksin :joy:", "Aşık olacaksın :heart:", "Başına kötü birşey gelecek :scream:"];
    var sonuc = get_random(sans);
    msg.channel.send(sonuc);
  }
  if (msg.content === prefix + "sunucular") {
    msg.channel.send(`\`${msg.author.username}\` **Sunucu listem özeline attım :ok_hand:**`);
    msg.member.send({embed: {
  color: r_r(random_color),
  description: `:ok_hand: Buyrun :point_down:\n\n${client.guilds.map(g=>g.name).join("\n")}`
}});
  }
  if (msg.content === `blabla`) {//buraya blabla nın yerine sil temizle gibi bir komut yaz
    var sans = ["bla Bla", "Bla Bla", "Bla bla"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.channel.send(sonuc);
  }
  if (msg.content.toLowerCase() === prefix + "paraçevir") {
    msg.channel.send(`${msg.author.username} Attım`).then(m => {
      m.edit(`**Şansa bak \`${yazıtura(para)}\` çıktı :white_circle:**`)
    });
  }
  if(msg.content.toLocaleLowerCase() === prefix + "gecikme" || msg.content.toLocaleLowerCase() === prefix + "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    msg.channel.send(`Pong ${r_k(kalpler)}`).then(m => {
      m.edit(`**Şahsi gecikmen =>** \`${m.createdTimestamp - msg.createdTimestamp} ms\` :hourglass_flowing_sand: \n**Botun gecikmesi =>**\`${Math.round(client.ping)}ms\` :hourglass_flowing_sand: `);
    });
  }
  if (msg.content === 'şanlı bayrak') {
    var bayrak = ["http://www.ilkkimbuldu.com/wp-content/uploads/2012/01/bayrak.jpg", "https://tyfnyldz.files.wordpress.com/2014/12/tc3bcrk-bayrac49fc4b1.jpg", "https://4.bp.blogspot.com/-4Ys0fEfWgA8/VvJXRhvkvXI/AAAAAAAAkS8/Y3OJLsd3m64PWpeZxqbo1S4gN1sZ4JB-Q/s1920/hd-turk-bayragi-indir-5.jpg", "http://www.beycan.net/eklenen/bayrak/turk_bayragi_buyuk_3.jpg"];
    var sonuc = get_random(bayrak);
    msg.channel.sendMessage("Buyrun En şanlı Bayrak :flag_tr:", {
        file: sonuc // Or replace with FileOptions object
    })
  }
  if (msg.content === prefix + 'yardım') {
    const embed = new Discord.RichEmbed()
      .setAuthor(`${msg.author.username}`)
      .setColor(r_r(random_color))
      .setThumbnail(msg.author.avatarURL)
      .setTimestamp()
      .addField("RTTR'nin Özellikleri :arrow_down:", "RTTR bir chat botudur ve geliştirilmektedir :ok_hand:")
      .addField("**Eğlence :tada:**", "Eklenecektir ....")
      .addField("**Level :pushpin:**", "\`rttr!seviye\` : kullanıcıya şahsi seviyesini ve puanını gösterir :arrow_left:")
      .addField("**Müzik :notes:**", "\`rttr!gir\` : müzikten önce bir odaya girip bu kodu yazmalısınız :arrow_left:\n\`rttr!çal (Video Link)\` : istediğiniz videoyu oynatır :arrow_left:\n\`rttr!geç\` : kuyrukta bekliyen şarkıya atlamanızı sağlar :arrow_left:\n\`rttr!ayrıl\` : botu bulunduğunuz odadan çıkartmanızı sağlar :arrow_left:")
      .addField("**Üyeler :man_in_tuxedo:**", "\`rttr!sunucular\` : RTTR'nin bulunduğu sunucuları size ulaştırır :arrow_left:\n\`rttr!gecikme\` : bu komut size anlık pinginizi gösterir :arrow_left: \n\`rttr!sunucu\` : bu komut Pattis Bot sunucusunun davetini gönderir :arrow_left:\n\`rttr!profil\` : bu komut şahsi bilgilerinizi öğrenmenize yardım eder :arrow_left:\n\`rttr!davet\` : bu komut RTTR nin davet linkini size ulaştırır :arrow_left:")
      .addField("**Admin :notebook_with_decorative_cover:**", "\`rttr!mesajsil (sayı)\` : bu komut mesaj silmenize yardım eder :arrow_left:")
      .addField("**Rehber :mortar_board:**", "\`rttr!konuştur @(isim)\` : susturulan kişinin susturmasını kaldırır :arrow_left:\n\`rttr!sustur @(isim)\` : istediğiniz kişiyi susturur :arrow_left:\n\`rttr!at @(isim)\` : bu komut istediğiniz kişiyi sunucudan atar :arrow_left:")
      .addField("**Yapımcım :briefcase:**", "\`rttr!açkapa\` : Botu yeniden başlatır :arrow_left:\n\`rttr!eval (kod)\` JavasScript kodunu denersin :arrow_left:\n\`rttr!çık\` : Yazılan sunucudan botu çıkartır :arrow_left:")
      msg.channel.send(`\`${msg.author.username}\` **Yardım kartını özele attım :ok_hand:**`)
      msg.member.sendMessage({embed});
  }
  if (msg.content === 'merhaba') {
    msg.channel.send('**' + msg.author.username + '** Sanada merhaba.');
  }
  if (msg.content === 'bb') {
    msg.channel.sendMessage('**' + msg.author.username + '** Görüşmek üzere :wave:');
  }
  if (msg.content.toLowerCase() === prefix + "sunucu") {
    if (msg.guild.id !== "322010803928563724") {
      msg.member.send(`Buyrun Pattis Bot sunucusu :point_down:\nhttps://discord.gg/3ePtpfC`)
      msg.channel.send(`\`${msg.author.username}\` **Patis in sunucusunu özeline attım :ok_hand:**`)
    } else {
      msg.delete();
      msg.channel.send(`\`${msg.author.username}\` **Zaten \`Pattis Bot\` sunucusundasın :hand_splayed:**`)
    }
  }
  if (msg.content == CLEAR_MESSAGES) {
    if (!msg.channel.permissionsFor(msg.author).hasPermission("MANAGE_MESSAGES")) {
      msg.reply('**Bu komutu Yönetici yetkisi açık olanlar kullanabilir**');
      console.log("Sorry, you don't have the permission to execute the command ");
      msg.delete();
      return;
    } else if (!msg.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        msg.channel.sendMessage('Kusura bakma, bu komutu kullanmak için olan gerekli yetkiye sahip değilsin');
        console.log("Sorry, I don't have the permission to execute the command ");
      }
  if (msg.channel.type == 'text') {
    msg.channel.fetchMessages()
      .then(messages => {
        msg.channel.bulkDelete(messages);
        Silinen = messages.array().length; // number of messages deleted
        msg.channel.send('__**' + +Silinen + '**__ **Tane mesaj temizlendi** :ok_hand:').then(newmsg => {
            newmsg.delete(5000);
        })
        msg.channel.send('**Herkese iyi Discordlar** :diamonds:').then(newmsg => {
            newmsg.delete(15000);
        })
      })
      .catch(err => {
        console.log('Error while doing Bulk Delete');
        console.log(err);
      });
    }
  };
});
client.on('guildMemberRemove', (member, guild) => {
    const cayocagi = member.guild.channels.find("name", "lobi");
    if (!cayocagi) return;
    cayocagi.send(`\`${member.user.username}\` **Sunucudan Çıkış Yaptı :wave:**`);
});
client.on('message', msg => {
  
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === 'hg') { //hg falananın yazıldıgı yer
    msg.react("🇭")
    function emoji() {
      msg.react("🇧");
    }
    setTimeout(emoji, 1000)
    msg.channel.send({embed: {
        color:  3447006, //Renk kodu
        author: {
        },
        description: "Hoşbuldum **" + msg.author.username + "**:small_orange_diamond:", //Botun bize döneceği yazı
        footer: {
        }
    }});
  };
  if (msg.content.toLocaleLowerCase() === "sa") {
      msg.react('🇦');
      function test2() {
        msg.react("🇸");
      };
      msg.channel.send(`${r_k(kalpler)}** | Aleyküm Selam :wave:**`)
      setTimeout(test2, 1000);
  }
  if (msg.content.toLocaleLowerCase() === "s.a") {
      msg.react('🇦');
      function test2() {
        msg.react("🇸");
      };
      msg.channel.send(`${r_k(kalpler)}** | Aleyküm Selam :wave:**`)
      setTimeout(test2, 1000);
  }
  if (msg.content.toLocaleLowerCase() === "hb") {
      msg.react(':flag_tr:');
      function test2() {
        msg.react(":flag_tr:");
      };
      msg.channel.send(`${r_k(kalpler)}** | Nasılsın, İyi misin ? :wave:**`)
      setTimeout(test2, 1000);
  }
  if (msg.content.toLocaleLowerCase() === "h.b") {
      msg.react(':flag_tr:');
      function test2() {
        msg.react(":flag_tr:");
      };
      msg.channel.send(`${r_k(kalpler)}** | Nasılsın, İyi misin ? :wave:**`)
      setTimeout(test2, 1000);
  }
  if (msg.content.toLocaleLowerCase() === "iyiyim") {
      msg.react(':flag_tr:');
      function test2() {
        msg.react(":flag_tr:");
      };
      msg.channel.send(`${r_k(kalpler)}** | Allah İyilik Versin** ${r_k(kalpler)}`)
      setTimeout(test2, 1000);
  }
  
});
  

function emojis(msg) {
  msg.react("🇸", {wait : 100});
} 

  client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() === 'rttr kimsin') {
      msg.channel.send({embed: {
          color: 0xff0000,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "RTTR'nin profili",
          description: "Burada RTTR ye dair bilgiler var.",
          fields: [{
              name: "Yapımcı",
              value: "**RTTR** tarafından yapılmıştır.",
            },
            {
              name: "Yardım",
              value: "rttr!yardım yazarak botla ilgili bilgiler alabilirsiniz"
            },
            {
              name: "_Dipnot:_",
              value: "*İyi vakit geçirmen dileğiyle.*"
            }
          ],
        }
      });
    }});



client.on('message', message => {
  if (message.author.bot) return;
   let messageArray = message.content.split(" ");
   let command = messageArray[0].replace(prefix, "");
   let args = message.content.split(" ").slice(1);
   if(!message.content.startsWith(prefix)) {
     return;
   }
  if (message.content.startsWith(prefix + "at")) {
   if (!message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS", "MANAGE_MESSAGES")) {
     message.channel.send(`\`${message.author.username}\` **Gerekli yetkiye sahip değilsin :no_entry:**`);
   } else {
       let member = message.mentions.members.first();
       member.kick();
       message.channel.send(`\`${member.user.tag}\` **atıldı :right_facing_fist: Atan kişi** \`${message.author.username}\``);
   }
  }
   if (message.author.bot === true) {
     return;
   }

   if(command === `sustur`) {
     if(!message.member.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("\`" + message.author.username + "\` **Mesajları kontrol etme yetkisine sahip değilsin :no_entry:**").catch(e => {
         console.error(e);
       });
     }

     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if (!toMute) {
       return message.channel.send("Yanlış ya da eksik kullanıcı adı !").catch(e => {
         console.error(e);
       });
     }

     let role = message.guild.roles.find(r => r.name === "Susturulmuş");

     if (!role) {
       try {
         message.guild.createRole({
           name: "Susturulmuş",
           color: "#000000",
           permission: []
         }).then(role => {
           message.guild.channels.forEach(async(channel, id) => {
             await channel.overwritePermissions(role, {
               SEND_MESSAGES: false,
               ADD_REACTIONS: false
             });
           });
           toMute.addRole(role).then(r => {
             message.channel.send("Susturuldun fazla konuştun galiba :cry:");
           });
         });
       } catch (e) {
         console.error(e);
       }
     } else {
       if (toMute.roles.has(role.id)) {
         return message.channel.send("Bu isim zaten Susturulmuş !").catch(e => {
           console.error(e);
         });
       }
       toMute.addRole(role).then(g => {
         message.channel.send("Susturuldun fazla konuştun galiba :cry:").catch(e => {
           console.error(e);
         });
       });
     };
   }

   if (command === 'konuştur') {
     if(!message.member.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("Mesajları kontrol etme yetkisine sahip değilsin !");
     }

     let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if (!toUnmute) {
       return message.channel.send("Yanlış ya da eksik kullanıcı adı !").catch(e => {
         console.error(e);
       });
     }

     let role = message.guild.roles.find(r => r.name === "Susturulmuş");
     if (!role) {
       return message.reply("Sunucuda henüz birisi susturulmamış!").catch(e => {
         console.error(e);
       });
     }

     toUnmute.removeRole(role).then(g => {
       message.reply(`${toUnmute.user.username}'ın susuturulması kaldırıldı.`);
     }).catch(e => {
       console.error(e);
     });
   }
   var mes = message.content.split(' ');
   if (mes[0] === '>say') {
       if (mes[1] === `channel`) {
           if (mes[2] === undefined) {
               message.channel.send('Messages from Madame are send to #' + channel);
               return;
           }
           channel = message.guild.channels.get(mes[2]);
           message.channel.send("Messages from Madame will be send to #" + channel);
       }
   }

 });

 var channel;
 var guild;


client.on("message", message => {
  
  if (message.author.bot) return;
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ')
  if (message.content.startsWith(prefix + 'altyazı')) {
    if (message.author.id === '363321082725400576') {
		  client.user.setPresence({ game: { name: result, type: 0 } });
      message.channel.send(`Altayzım ${message.author.username} tarafından değiştirildi :pencil2: Yeni altyazı \`${result}\` oldu :notepad_spiral:`)
    } else {
      message.channel.send(`**${message.author.username}** Bu komut sadece yapımcıma aittir :exclamation:`)
    }
  };
  if (message.content.startsWith(prefix + "mesajsil")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('**Gerekli yetkiye sahip değilsin** :x:');
      message.delete();
      let messagecount = parseInt(result);
      message.channel.fetchMessages({limit: messagecount}).then(messages => {
        message.channel.bulkDelete(messages);
        Mesajlar = messages.array().length;
        message.channel.send(`**Mesajlar başarıyla silindi** :wastebasket: **Silinen mesajlar** \`${+Mesajlar}\``).then(newmsg => {
         newmsg.delete(15000);
        });
    })
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(oç|orospu tohumu|orospu çocuğu|aq|tecavüz|sex|oç|piç|yaramı|yarramı|yarak|yarrak|tassak|tasak|pezevenklik|a m ı nı|pezemenklillik|S E X|m k|m     k|m                      k|AMINI DE S İ Yİ M|amk|AMK|A M K|a m k)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.channel.send(`\`${msg.author.username}\` **Küfür yasaktır :no_entry:**`).catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
  const cl = msg.guild.channels.find("name", "mesaj-log");
  if (!cl) return;
  if (msg.content.startsWith("`") || msg.content.startsWith("https://")) return;
  if (msg.content < 1) return;
  if (msg.author.bot) return;
  if (!cl) {
    return;
  } else {
    cl.sendMessage(`<#${msg.channel.id}> | ${msg.author.tag}: ${msg.content}`);
  }
});



client.on('message', (msg, channel) => {
  if (msg.author.bot) return;
    const user = msg.author;
    const member = user.member;
    const loglar = msg.guild.channels.find("name", `loglar` & "log" & "logs");
  if (msg.content.toLowerCase().startsWith(`${prefix}yaz`)) {
    var msgItself = msg.content.split(" ").slice(1).join(" ");
    if (!msg.channel.permissionsFor(msg.guild.member(client.user)).has("BAN_MEMBERS")) {
      return msg.channel.send(`\`${msg.author.username}\`**Gerekli yetkiye sahip değilsin :no_entry:**`).catch(e => {
        console.error(e);
      });
    }
    msg.delete().then(userMsg => {
      if (!msgItself < 1) {
          userMsg.channel.send(msgItself).catch(e => {
            console.error(e);
          });
      } else {
        msg.channel.send(`\`${msg.author.username}\` **Boş mesaj yollıyamazsın :no_entry: **`)
      }
    }).catch(e => {
      console.error(e);
    });
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rttr!profil')
    if (msg.channel.type !== "group") {
        var Durum = msg.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Ad:', msg.author.username + '#' + msg.author.discriminator, true)
      .addField('ID:', msg.author.id, true)
      .addField('Kayıt tarihi:', msg.author.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır')
      return msg.channel.sendEmbed(kullanicibilgimk);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.channel.send({embed: {
      color: r_r(random_color),
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      fields: [{
          name: "Seviye yükselişi :tada:",
          value: `**Tebrikler ${message.author.username} Seviye atladın :clap: \nYeni levelin\`${userData.level}\` :computer:**`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.author.avatarURL,
        text: ".:|:."
      }
    }
   });
  }

  if (message.content.startsWith(prefix + "seviye")) {
    message.channel.send({embed: {
      color: r_r(random_color),
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      fields: [{
          name: "Seviyen",
          value: `**Şu anki levelin >\`${userData.level}\` :ribbon:\nŞu anki puanın >\`${userData.points}\` :ribbon: \n\nKolay gelsin :wave:**`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.author.avatarURL,
        text: ".:|:."
      }
    }
  });
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  let messageArray = message.content.split(" ");
  let command = messageArray[0].replace(prefix, "");
  let args = message.content.split(" ").slice(1);
  if (message.content.toLowerCase() === ">sunucu-bilgi") {
    if (!message.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
      return message.author.sendEmbed(ozelmesajuyari); 
    }
      if (message.channel.type !== 'dm') {
        const sunucubilgi = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField('Ad:', message.guild.name)
      .addField('ID', message.guild.id)
      .addField('Ana kanal:', message.guild.defaultChannel)
      .addField('Bölge', message.guild.region)
      .addField('Üye sayısı:', message.guild.memberCount)
      .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
      .addField('Kanal sayısı:', message.guild.channels.size)
      .addField('Oluşturulma tarihi:', message.guild.createdAt)
      return message.channel.sendEmbed(sunucubilgi);
      }
    }
  if (command === "eval") {
    if(message.author.id !== "363321082725400576") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
  }
  if (message.content.toLowerCase() === `test>sunucu-bilgi`) {
      if (message.channel.type !== 'dm') {
        const kullanicibilgimk = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(r_r(random_color))
        .setTimestamp()
        .addField('Ad :point_down:', message.guild.name, true)
        .addField('Id :point_down:', message.guild.id, true)
        .addField("Üye Sayısı", `\n${message.guild.users.size}`, true)
        .setThumbnail(message.guild.iconURL)
        console.log("!kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
        return message.channel.sendEmbed(kullanicibilgimk);
    }
  }
    if (message.content === "/announce") {
      let args = message.content.split(' ').slice(1);
      let argresult = args.join(" ");
      let channel = guild.channels.get("name", argresult).id;
      channel.sendMessage("Testing");
    }
    if (message.content === "test>ayar") {
      message.channel.sendMessage('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
      .then(() => {
        message.channel.awaitMessages(response => response.content === 'test' || "test 2", {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
        .then(collected => {
            message.channel.send(`The collected message was: ${collected.first().content}`);
          })
          .catch(() => {
            message.channel.send('There was no collected message that passed the filter within the time limit!');
          });
      });
    }
});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}



client.on('guildMemberAdd', (member, guild) => {
    const cayocagi = member.guild.channels.find("name", "lobi");
    if (!cayocagi) return;
    cayocagi.send(`\`${member.user.username}\` **Sunucuya Giriş Yaptı. ${r_k(kalpler)}**`);
});

client.on('message', m => {
  if (!m.guild) return;
    if (m.content === "rttr!ayrıl") {
        m.channel.send(`\`${m.author.username}\` **Tarafından odadan çıkartıldım :satellite:**`)
        m.member.voiceChannel.leave();
    }
  if (m.content.startsWith('rttr!gir')) {
    const channel = m.guild.channels.get(m.content.split(' ')[1]) || m.member.voiceChannel;
    if (channel && channel.type === 'voice') {
      channel.join().then(conn => {
        conn.player.on('error', (...e) => console.log('player', ...e));
        if (!connections.has(m.guild.id)) connections.set(m.guild.id, { conn, queue: [] });
        m.channel.send(`\`${m.author.username}\` **Bulunduğun odaya giriş yaptım :video_camera:**`);
      });
    } else {
      m.reply('Lütfen bir sesli kanala giriniz!');
    }
  } else if (m.content.startsWith('rttr!çal')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      const queue = connData.queue;
      const url = m.content.split(' ').slice(1).join(' ')
        .replace(/</g, '')
        .replace(/>/g, '');
      queue.push({ url, m });
      if (queue.length > 1) {
        m.reply(`**İstediğiniz müzik** \`${queue.length - 1}\` **adet müzikten sonra çalınacak :loud_sound:**`);
        return;
      }
      doQueue(connData);
    }
  } else if (m.content.startsWith('rttr!geç')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      if (connData.dispatcher) {
        connData.dispatcher.end();
      }
    }
  } else if (m.content.startsWith('rttr!kuyruk')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      const queue = connData.queue;
      m.reply(queue);
    }
  }
});

function doQueue(connData, m, send, channel, author, username) {
  const conn = connData.conn;
  const queue = connData.queue;
  const item = queue[0];
  if (!item) return;
  const stream = yt(item.url, { filter: 'audioonly' }, { passes: 3 });
  const dispatcher = conn.playStream(stream);
  stream.on('info', info => {
    item.m.channel.send(`**Oynatılan:** \`${info.title}\` **adlı video :notes:**`);
  });
  dispatcher.on('end', () => {
    queue.shift();
    doQueue(connData);
  });
  dispatcher.on('error', (...e) => console.log('dispatcher', ...e));
  connData.dispatcher = dispatcher;
}



client.login('MzY3MjkyODMxNjg3MTE0NzUy.DMJVPg.QRyiXs1-2a-zzV7om2BlKxdtBDE');

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));













