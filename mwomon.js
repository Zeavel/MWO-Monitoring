









const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
var request = require('request');
var cheerio = require('cheerio');
var Commandss = new CC.Commands();
var fs = require("fs");


function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("mw!" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}

client.on('ready', () => {
   client.user.setActivity("Ready", { type: 1}); // type: 2 - Слушает
    
});
client.setInterval(function play()
{
  var urle = "http://haont.ru/mwo/mon";
  var cheerio = require('cheerio');
  var request = require('request');
  
  request(urle, function (error, response, body) {
    if (!error) {
      
      var $ = cheerio.load(body)
  
      var manse = $('div > #mwo_status_container > h2').text()
 var uptimer =  manse.toString().replace(/players online/, '')
 var numb = parseInt(uptimer)
 if(uptimer <= 0)
 { statuse = "idle"}
        else if(uptimer >= 1 && uptimer <= 5)
        { statuse = "online"}
        else 
        { statuse = "dnd"}
        if(client.user.presence.activity != null)
        {
          if(client.user.presence.activity.name.includes("player"))
          {
            var gama = client.user.presence.activity.name
            var sta = gama.replace(/players online/, '')
            var ches = parseInt(sta)
        
          }

        }
client.user.setActivity(manse, { type: 3}); 

client.user.setStatus(statuse)

        //console.log(numb + " " + statuse)
      
    }})
}, 2500)


client.on('message', message =>
{ 



if(commandIs('uptime', message))
{
    var url = "http://haont.ru/mwo/mon";
    var cheerio = require('cheerio');
    var request = require('request');
    
    request(url, function (error, response, body) {
      if (!error) {
        
        var $ = cheerio.load(body)
    
        var mans = $('#mwo_status_container').text()
  var uptime =  mans.split(":")[1]
  var uptime2 = uptime.replace(/[ ]/g, "")
  var uptime3 = uptime2.replace(/days/, " days ")
  var uptime4 = uptime3.replace(/hours/, " hours ")
  var uptime5 = uptime4.replace(/minutes/, " minutes ")
  var uptime6 = uptime5.replace(/seconds/, " seconds ")


    //console.log(uptime[1])
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
      

      .setAuthor("MWO-Monitoring", client.user.displayAvatarURL())
      .setTitle("Server uptime")
      .setDescription("**" + uptime6 + "**")
      //.addField("Server uptime","**" + uptime[1] + "**"))
      .setColor(message.guild.members.get(client.user.id).displayColor)

        message.channel.send({embed})
      }})
}
if(commandIs('players', message))
{
  fs.writeFileSync('./players/players.txt', "")
    var url = "http://haont.ru/mwo/mon";
    var cheerio = require('cheerio');
    var request = require('request');
    console.log("test")
    request(url, function (error, response, body) {
      if (!error) {
        console.log("test")
        var $ = cheerio.load(body)
        var mans = $('#mwo_status_container > h2').text()

        var uptimer =  mans.split(": ")
        if(uptimer.toString().includes("1"))
        {
          uptima = uptimer.toString().replace(/players/g, "player")
        }
        else
        {
          uptima = uptimer
        }
        var realup = parseInt(uptimer.toString().replace(/players online/g, '')) + 1
        if(realup > 1)
        { 
        for(i=2; i<=realup; i++)
        {
          var manse = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(2)').text()
          var coor = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(4)').text()
          var id = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(1)').text()
          var chey = coor.replace(/y:/g, ' - ')
         chey.replace(/z:/g, ' - ')
         var coore = coor.split(";")
         var coorxx = coore[0]
         var cooryy = coore[1]
         var coorzz = coore[2]
var coorx = parseInt(coorxx.substring(4))
var coory = parseInt(cooryy.substring(3))
var coorz = parseInt(coorzz.substring(3))
if((coorx < 2700 && -2000 < coory < -2300) || (coorx < 2770 && coory < -1620) || (coorx < 2770 && coory < -1320) || (coorx < 2770 && coory < -1104) || (coorx < 2770 && coory < -1300))
{
  
  rayon = "Rosewood"

}
if((coory > -613 && coorx < 2700) || (coorx < 2565 && coory > -1000))
{
  rayon = "Rockport"
}
if(coorx > 2700 && coory < -2000)
{
  rayon = "Gray-Point"
}
if(coorx > 2700 && coory > -2000)
{
  rayon = "Camden"
}
if((coorx < -732 && -3294 < coory) && (coorx < -732 &&  coory < -2265))
{
  rayon = "Rosewood, Old Bridge"
}
if((coorx > -166 && coory < -3082) && (coorx < 188 &&  coory > -3267))
{
  rayon = "Rosewood, Stadium (Hickey Field)"
}
if((coorx > 3045 && coory < -169)&&(coorx < 3466 && coory > -400))
{
  rayon = "Camden, Naval Shipyard"
}
if((coorx > 652 && coory < 1000 )&&(coorx < 1115 && coory > 675))
{
  rayon = "Rockport, Stadium (Riverfront)"
}
if((coorx > 600 && coory < -3161)&&(coorx < 1257 && coory > -3797))
{
  rayon = "Rosewood, College"
}
if((coorx > 1000 && coory < -2583)&&(coorx < 1528 && coory > -2955))
{
  rayon = "Rosewood, College Hospital"
}
if(coorx == 0 && coory == 0)
{
  rayon = "Safehouse"
}            

         console.log(manse + "+")
          
         founduser = message.guild.members.filter(m => m.user.username.toLowerCase().startsWith(manse.toLowerCase())).first()
         if(founduser == null) {name = "**" + manse + "**"}
         else{
           if(manse == "darudnik")
           {
             chelka = '<:darudnik:404718080527171584> '
           }
           if(manse == "Osprey22")
           {
             chelka = '<:osprey:405327841597587456> '
           }
           if(manse == "osdever")
           {
             chelka = '<:osdever:404718008041209866> '
           }
           if(manse == "elaymm4")
           {
             chelka = '<:elaymm:404716313525616661> '
           }
           if(manse == "Zipper")
           {
             chelka = '<:Zipper:405765869290127361> '
           }
           if(manse == "Startul")
           {
             chelka = '<:startul:404719175638974476> '
           }
           if(manse == "MrAdamTheSpriter")
           {
             chelka = '<:nissan:404718662927384596> '
           }
           if(manse != "darudnik" && manse != "osdever" && manse != "Osprey22" && manse != "elaymm4" && manse != "Zipper" && manse != "Startul" && manse != "MrAdamTheSpriter")
           {
            chelka = ''
           }
          name = chelka + "**" + manse + "** (" + founduser.user.tag + ")"
         }



                fs.appendFileSync('./players/players.txt', name + " - **[" + rayon + "]**\n")
              

              
        
       
        
        }

    
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
    

    .setAuthor("MWO-Monitoring", client.user.displayAvatarURL())
    .setColor(message.guild.members.get(client.user.id).displayColor)
    .addField(uptima, fs.readFileSync('./players/players.txt') + "\n[View all information](http://haont.ru/mwo/mon)")

      message.channel.send({embed})
      fs.writeFileSync('./players/players.txt', "")
      }
      
      else
      {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
          
      
          .setAuthor("MWO-Monitoring", client.user.displayAvatarURL())
          .setColor(message.guild.members.get(client.user.id).displayColor)
          .setDescription("**" + uptimer + "**")
      
            message.channel.send({embed})
          
      }

      }})
 
}
if(commandIs("linknorwok", message))
{
  var player = message.content.substring(8)
  if(player == '')
  {
      message.channel.send({embed: {
        color: 65793,
        description: ":warning: " + "**Please enter a nickname**"
        
        }})
  }
  else
  {
  var mysql = require('mysql')
  var coninfo = {
    host: "sql10.freemysqlhosting.net",
    user: "sql10214385",
    password: "hjLYb35UGl",
    database: "sql10214385"
  }
  
  var con = mysql.createConnection(coninfo);
  
  con.connect(err => {
    if (err) throw(err);
    console.log(`Connected to ${coninfo.host} as ${coninfo.user}.`)

    
    con.query(`SELECT * FROM Accounts`, (error, rows, results) => {
    
   var cheli = rows.map(item => item.Tag).toString()
    
      
        if(cheli.includes(message.author.tag))
        {
          message.channel.send({embed: {
            color: 16711680,
            description: "**You already linked your account** "
            
            }})
        }
        else if(!cheli.includes(message.author.tag))
        { 
          con.query(`INSERT INTO Accounts (Nickname, Tag, ID) VALUES ('${player}', '${message.author.tag}', '${message.author.id}')`)
          message.channel.send({embed: {
              color: 6604900,
              description: "**Account successfully linked** "
              
              }})
        }
      });
    //con.query(`SELECT * FROM Accounts WHERE Nickname = '${player}'`, console.log)
  })
/*if(fs.readFileSync("./accmwo/players.txt").includes(player))
{
  message.channel.send({embed: {
    color: 16711680,
    description: "**You already linked your account** "
    
    }})
}*/
  }
}
   if(commandIs("unlinknorwok", message))
{
var player = message.content.substring(10)
if(player == '')
  {
      message.channel.send({embed: {
        color: 65793,
        description: ":warning: " + "**Please enter a nickname**"
        
        }})
  }
    else
    {
var mysql = require('mysql')
var coninfo = {
  host: "sql10.freemysqlhosting.net",
  user: "sql10214385",
  password: "hjLYb35UGl",
  database: "sql10214385"
}

var con = mysql.createConnection(coninfo);

con.connect(err => {
  if (err) throw(err);
  console.log(`Connected to ${coninfo.host} as ${coninfo.user}.`)

  
  con.query(`SELECT * FROM Accounts`, (error, rows, results) => {
  
 var cheli = rows.map(item => item.Nickname).toString()
  
 if(!cheli.includes(player))
 { 
  message.channel.send({embed: {
    color: 16711680 ,
    description: "**This account does not exist** "
    
    }})
 }
      if(cheli.includes(player))
      {
        
      con.query(`SELECT * FROM Accounts WHERE Nickname = '${player}'`, (error, rows, results) => { 

        var tag = rows.map(item => item.Tag ).toString()



        if(tag != message.author.tag)
        {
          message.channel.send({embed: {
            color: 16711680,
            description: "**You can not delete someone else's accountt** "
            
            }})
        }
        if(tag == message.author.tag)
        {
          con.query(`DELETE FROM Accounts WHERE Nickname = '${player}'`)
          message.channel.send({embed: {
            color: 6604900,
            description: "**You have successfully unlinked an account** "
            
            }})
        }
      })
      }
      
    });

})
    }
}
if(commandIs("lidsadnk", message))
{
 var player = message.content.substring(8)
  var cheli = fs.readFileSync("./accmwo/players.txt", 'utf8')
  var cheliki = parseInt(cheli.search(player))
var playerc = cheli.substring(cheliki)
var playera = playerc.split(" : ")[1]
var playerb = playera.toString().split(";")

  console.log(playerb[0])
}
if(commandIs("serverinfo", message))
{var urle = "http://haont.ru/mwo/mon";
var cheerio = require('cheerio');
var request = require('request');

request(urle, function (error, response, body) {
  if (!error) {
    
    var $ = cheerio.load(body)

    var mans = $('#mwo_status_container').text()
    var uptime =  mans.split(":")
    var manse = $('div > #mwo_status_container > h2').text()
var uptimer =  manse.toString().replace(/players online/, '')
var numb = parseInt(uptimer)
if(uptimer <= 0)
{ statuse = "idle"}
      else if(uptimer >= 1 && uptimer <= 5)
      { statuse = "online"}
      else 
      { statuse = "dnd"}
      if(client.user.presence.activity != null)
      {
        if(client.user.presence.activity.name.includes("player"))
        {
          var gama = client.user.presence.activity.name
          var sta = gama.replace(/players online/, '')
          var ches = parseInt(sta)
          console.log(ches)
        }

      }
client.user.setActivity(manse, { type: 3}); // type: 2 - Слушает
client.user.setStatus(statuse)

      //console.log(numb + " " + statuse)
    

    console.log("test")
    var month = (new Date(message.guild.createdAt).getMonth() + 1);
    var day = new Date(message.guild.createdAt).getDate();
    var year = new Date(message.guild.createdAt).getFullYear();
    var hours = new Date(message.guild.createdAt).getHours();
    var minutes = new Date(message.guild.createdAt).getMinutes();
    var seconds = new Date(message.guild.createdAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}
    if (message.guild.roles.size = 1) { rolet = "Роль"}
    if (message.guild.roles.size >= 1) { rolet = "Ролей"}
    var bots = message.guild.members.map(member => member.user.bot).toString()
    bots = bots.replace(/false/g, '')
    bots = bots.replace(/,/g, ' ')
    var cher = bots.split('true')
    var oks = cher.length - 1
    var onl = message.guild.members.map(member => member.presence.status).toString()
    onl = onl.replace(/offline/g, '')
    onl = onl.replace(/,/g, ' ')
    onl = onl.replace(/dnd/g, 'online')
    onl = onl.replace(/idle/g, 'online')
    var arg = onl.split('online')
    var online_user = arg.length - 1
    var chanel = message.guild.channels.map(chanel => chanel.type).toString()
    chanel = chanel.replace(/text/g, '')
    chanel = chanel.replace(/,/g, ' ')
    var argc = chanel.split('voice')
    var chanelkol = argc.length - 1

    
if(message.channel.name == "online_ru" || message.channel.name == "general_ru" || message.channel.name == "help_ru" || message.channel.name == "flood_ru" || message.channel.name == "nsfw_ru")
{
  
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()

    .setColor(message.guild.members.get(client.user.id).displayColor)
    .setThumbnail(message.guild.iconURL())

    .setAuthor(message.guild.name, message.guild.iconURL())
    /*.setThumbnail(message.author.avatarURL)*/

    
    .addField("Владелец сервера", "<@" + message.guild.ownerID + ">", true)
    .addField('ID', message.guild.id, true)

    .addField('Создан', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField('Регион', message.guild.region, true)
    .addField('Участников (' + message.guild.memberCount + ")", "Онлайн " + online_user, true)
    .addField("Играют в MWO", uptimer, true)
    .addField("Время с момента запуска", "**" + uptime[1].substring(1) + "**", true)
console.log(message.channel.name)

    message.channel.send({embed})
}
if(message.channel.name == "online_en" || message.channel.name == "general_en" || message.channel.name == "help_en" || message.channel.name == "flood_en" || message.channel.name == "nsfw_en" || message.channel.name == "emulators_en" ||  message.channel.name == "other_games" ||  message.channel.name == "offlineisgoodtoo_en" )
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()

  .setColor(message.guild.members.get(client.user.id).displayColor)
  .setThumbnail(message.guild.iconURL())

  .setAuthor(message.guild.name, message.guild.iconURL())
  /*.setThumbnail(message.author.avatarURL)*/

  
  .addField("Owner", "<@" + message.guild.ownerID + ">", true)
  .addField('ID', message.guild.id, true)

  .addField('Created on', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
  .addField('Region', message.guild.region, true)
  .addField('Members (' + message.guild.memberCount + ")", "Online " + online_user, true)
  .addField("Playing in MWO", uptimer, true)
  .addField("Server uptime", "**" + uptime[1].substring(1) + "**", true)
console.log("eng")

  message.channel.send({embed})
}
  }})
}
if(commandIs("help", message))
{
 
 if(message.channel.name == "online_ru" || message.channel.name == "general_ru" || message.channel.name == "help_ru" || message.channel.name == "flood_ru" || message.channel.name == "nsfw_ru")
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription('`mw!uptime` - Время с момента запуска сервера\n`mw!players` - Список игроков, которые играют в данный момент\n~~`mw!link` "твой ник" - Привязка аккаунта дискорда к нику~~(Временно не работает)\n~~`mw!unlink` - Отвязать аккаунт~~(Временно не работает)\n`mw!serverinfo` - Информация о сервере')
  message.channel.send({embed})
}
else
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("`mw!uptime` - Server uptime\n`mw!player`s - Show the player list\n~~`mw!link` <your nickname> - bind your Discord account to the specified MWO nickname~~(Temporarily not working)\n~~`mw!unlink` - Unbind the account~~(Temporarily not working)\n`mw!serverinfo` - Information about server")
  message.channel.send({embed})
}
}
if(commandIs("download", message))
{
  if(message.channel.name == "online_ru" || message.channel.name == "general_ru" || message.channel.name == "help_ru" || message.channel.name == "flood_ru" || message.channel.name == "nsfw_ru")
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("**Инструкция по установке в канале **<#366920395728879616>")
  message.channel.send({embed})
  var requestModule=require("request");

        requestModule("http://haont.ru/mwo/latest.zip").pipe(fs.createWriteStream("Most Wanted Online.zip"));
        function prekol()
{
    message.channel.send({
        files: [{
          attachment: './Most Wanted Online.zip',
          name: "Most Wanted Online.zip"
        }]
      })
        .then(console.log)
        .catch(console.error);
}
setTimeout(prekol, 3000)
}
else
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("**Installation Tutorial** <#359076824074027010>")
  message.channel.send({embed})
  var requestModule=require("request");

        requestModule("http://haont.ru/mwo/latest.zip").pipe(fs.createWriteStream("Most Wanted Online.zip"));
        function prekol()
{
    message.channel.send({
        files: [{
          attachment: './Most Wanted Online.zip',
          name: "Most Wanted Online.zip"
        }]
      })
        .then(console.log)
        .catch(console.error);
}
setTimeout(prekol, 3000)
}
}
if(message.content.includes("где скачать мво") || message.content.includes("как скачать мво") || message.content.includes(("ссылку" || "ссылка") && ("на мво" || "для скачивания мво" || "мво")) || message.content.includes("how to download mwo") || message.content.includes("where to download mwo"))
{
  if(message.channel.name == "online_ru" || message.channel.name == "general_ru" || message.channel.name == "help_ru" || message.channel.name == "flood_ru" || message.channel.name == "nsfw_ru")
{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("[**Скачать MWO 1.2**](http://haont.ru/mwo/latest.zip)\n\n**Инструкция по установке в канале **<#366920395728879616>")
  message.channel.send({embed})
}
else{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor(message.guild.members.get(client.user.id).displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("[**Download MWO 1.2**](http://haont.ru/mwo/latest.zip)\n\n**Installation Tutorial** <#359076824074027010>")
  message.channel.send({embed})
}
}
if(message.content == "ser")
{
  client.guilds.get('287521695487623168').channels.get("398400800130465792").send("как скачать мво")
}
if(commandIs("bl", message))
{
  if(message.author.id != "261150378345758723" && message.author.id != "239837213834215434" && message.author.id != "145329523494223872" && message.author.id != "208027757991428096" && message.author.id != "252400132673241088" && message.author.id != "398897574410453003")
  {
    message.channel.send("You don't have access to this command")
  }
  else{
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor("MWO Blacklist", client.guilds.get('287521695487623168').iconURL())
  .setColor(client.guilds.get('287521695487623168').members.get("397332225185677313").displayColor)
  //.setThumbnail(message.guild.iconURL())
  .setDescription("#1 - <:elaymm:404716313525616661> **elaymm4** (elaymm4#9944)\n       [BMW M3 GTR]\n#2 - <:darudnik:404718080527171584> **darudnik** (darudnik#4008)\n       [Porsche Carrera GT]\n#3 - <:Zipper:405765869290127361> **Zipper** (Zipper#7312)\n       [Lotus Elise]\n#4 - <:osdever:404718008041209866> **osdever** (osdever#4170)\n       [Ford GT]\n#5 - <:nissan:404718662927384596> **MrAdamTheSpriter** (MrAdamTheSpriter#2745)\n       [Toyota Supra]\n#6 - <:startul:404719175638974476> **Startul** (Startul Rtural#8867)\n       [Lamborghini Murcielago]\n#7 - <:osprey:405327841597587456> **Osprey22** (Osprey22#2088)\n       [Vauxhall Monaro]\n#8 - <:ms:416904162387689473> **mstutorialfan** (Мандаринчик#6298)\n       [Mercedes-Benz SLR McLaren]")
  message.channel.send({embed})
  }
}
if(commandIs("racer", message))
{
  if(message.author.id != "261150378345758723" && message.author.id != "239837213834215434" && message.author.id != "145329523494223872" && message.author.id != "208027757991428096" && message.author.id != "252400132673241088" && message.author.id != "220154836589608960")
  {
    message.channel.send("You don't have access to this command")
  }
  else{
    var racers = ["darudnik", "Startul", "Osprey22", "MrAdamTheSpriter", "Zipper", "elaymm4", "osdever"]
  var racer = message.content.substring(9)
  if(!racers.toString().includes(racer))
  {
    console.log("loh")
  }
  else
  {
  if(racer == "darudnik")
  {
    tags = "darudnik#4008"
    pos = "#2"
    car = "Porsche Carrera GT"
    fav = "- Sprint\n- Circuit\n- Speedtrap"
  }
  if(racer == "Startul")
  {
    tags = "Startul Rtural#8867"
    pos = "#6"
    car = "Lamborghini Murcielago"
    fav = "- Sprint\n- Drag\n- Tollbooth"
  }
   if(racer == "Osprey22")
  {
    tags = "Osprey22#2088"
    pos = "#7"
    car = "Vauxhall Monaro"
    fav = "- Sprint\n- Speedtrap"
  }
       if(racer == "MrAdamTheSpriter")
  {
    tags = "MrAdamTheSpriter#2745"
    pos = "#5"
    car = "Toyota Supra"
    fav = "- Sprint\n- Drag\n- Speedtrap"
  }
  if(racer == "Zipper")
  {
    tags = "Zipper#7312"
    pos = "#3"
    car = "Lotus Elise"
    fav = "- Sprint\n- Circuit"
  } 
      if(racer == "elaymm4")
  {
    tags = "elaymm4#9944"
    pos = "#1"
    car = "BMW M3 GTR"
    fav = "- Sprint\n- Tollbooth"
  }
      if(racer == "osdever")
  {
    tags = "osdever#4170"
    pos = "#4"
    car = "Ford GT"
    fav = "- Sprint\n- Speedtrap"
  }
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor("MWO Blacklist", client.guilds.get('287521695487623168').iconURL())
  .setColor(client.guilds.get('287521695487623168').members.get("397332225185677313").displayColor)
  .addField("Nickname", "**" +racer +"**", true)
  .addField("Tag", tags, true)
  .addField("Position", pos, true)
  .addField("Car", car, true)
  .addField("Playing", "No", true)
  .addField("Favorite races:", fav, true)

  .setImage('https://raw.githubusercontent.com/Zeavel/MWO-Monitoring/master/'+racer+'.jpg')
  console.log('https://raw.githubusercontent.com/Zeavel/MWO-Monitoring/master/'+racer+'.jpg')
  message.channel.send({embed})
  }
}
}
 if(commandIs("test", message))
 {
     var sec_num = parseInt(client.uptime / 1000); // don't forget the second param 
var hours = Math.floor(sec_num / 3600); 
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60); 
 if (hours < 10) {hours = "0"+hours;} 
 if (minutes < 10) {minutes = "0"+minutes;} 
 if (seconds < 10) {seconds = "0"+seconds;} 
 var time = hours+':'+minutes+':'+seconds; 
     message.channel.send("**Ping: **" + parseInt(client.ping) + "\n**Uptime: **" + time)
 }
    if(commandIs("delete", message))
    {
        fs.unlinkSync("./darudnik.jpg")
    }
    if(commandIs("start", message))
    {
      var name = message.content.substring(9)
      if(fs.existsSync('./bl.txt'))
      {
        message.channel.send("wait")
      }
      else
      { 
  fs.writeFileSync('./bl.txt', name)
  var nicknamebl = fs.readFileSync("./bl.txt", "utf8")
  var url = "http://haont.ru/mwo/mon";
    var cheerio = require('cheerio');
    var request = require('request');
   message.channel.send("race is started")
   client.setInterval(function nick()
{
  
    request(url, function (error, response, body) {
      if (!error) {
       
        var $ = cheerio.load(body)
        var mans = $('#mwo_status_container > h2').text()

        var uptimer =  mans.split(": ")
        if(uptimer.toString().includes("1"))
        {
          uptima = uptimer.toString().replace(/players/g, "player")
        }
        else
        {
          uptima = uptimer
        }
        var realup = parseInt(uptimer.toString().replace(/players online/g, '')) + 1

        for(i=2; i <= realup; i++)
        {
          var manse = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(2)').text()
          var coor = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(4)').text()
          var id = $('div > #mwo_list_container > .table > table > tbody > tr:nth-child('+ i +') > td:nth-child(1)').text()
          var chey = coor.replace(/y:/g, ' - ')
         chey.replace(/z:/g, ' - ')
         var coore = coor.split(";")
         var coorxx = coore[0]

         var cooryy = coore[1]

         var coorzz = coore[2]

var coorx = parseInt(coorxx.substring(4))
var coory = parseInt(cooryy.substring(3))
var coorz = parseInt(coorzz.substring(3))

            if(!nicknamebl.includes(manse)) continue;
            if(fs.existsSync("./bl.txt"))
            {
            if(nicknamebl.includes(manse) && ((coorx > 3900 && coory > -310) &&( coorx < 4030 && coory < -190)))
            {
              message.channel.send( manse + ' won!')
              fs.unlinkSync("./bl.txt")
             //   fs.writeFileSync("./winnernick.txt", manse)
                
                break;
            }
             }
           // else continue;
           
            
        
            
        }
      }} )
         }, 10)
     
        
        }
    }
    if(commandIs("pladsadasdasy", message))
    {
      const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
  .setAuthor("MWO Blacklist", client.guilds.get('287521695487623168').iconURL())
  .setColor(client.guilds.get('287521695487623168').members.get("397332225185677313").displayColor)
 .setDescription("<:darudnikemo:409270297229787139> **darudnik** - **[**<:Sprint:409274720366755842> **Sprint - Valley & State]**\n   <:porsche:409272309757771777>**[Porsche Carrera GT]**\n<:elaymmemo:409270329190645760> **elaymm4** - **[Safehouse]**\n<:osdeveremo:409270347628806165> **osdever** - **[Rockport, Riverfront Stadium]**\n   <:ford:409272274278023178>**[Ford GT]**\n<:ospreyemo:409270390666559489> **Osprey22** - **[**<:Speedtrap:409275008699990016> **Speedtrap - North Bay & College]**\n   <:porsche:409272309757771777>**[Porsche Carrera GT]**\n")
  message.channel.send({embed})
    }
    
   /* if(message.content.includes("hm"))
    {
      console.log("trie")
      for(i=1; i<20000; i++)
      {
        message.channel.send("hm https://cdn.discordapp.com/attachments/410122389490499595/410123411189137408/maxresdefault.png  https://www.youtube.com/watch?v=9XbltYxFv4M")
      }
    }*/
if(message.content.includes("sss"))
{
  message.channel.send(message.guild.id)
}
    if(commandIs("getrole", message) && message.channel.name == "roles")
{
  var role = message.content.substring(11)
  console.log(role)

  
  if(role == "MWO")
  {
 
    console.log(message.member)//.addRole('409081537884061733')
 
  
  }
    if(role == "NFSM")
    {
      console.log("true")
      message.member.addRole('409081657354616832');  
   
    }
     
    message.delete();
  
}

});

client.login(process.env.BOT_TOKEN);







