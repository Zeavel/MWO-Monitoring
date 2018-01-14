
const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
var request = require('request');
var cheerio = require('cheerio');
var Commandss = new CC.Commands();
var fs = require("fs");



function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("cw!" + str);
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
client.user.setActivity(manse, { type: 3}); // type: 2 - Слушает
client.user.setStatus(statuse)
        //console.log(numb + " " + statuse)
      
    }})
}, 2500)

client.on('message', message =>
{
if(commandIs("test", message))
{
  var player = message.content.substring(8)
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
    //con.query(`INSERT INTO Accounts (Nickname, Tag) VALUES ('${player}', '${message.author.tag}')`)
  con.query(`DELETE FROM Accounts WHERE Nickname = '${player}'`)
    /*con.query(`SELECT Tag FROM Accounts`, (error, rows, results) => {
    
  console.log(rows)
       // console.log(rows)
        
      });*/
    //con.query(`SELECT * FROM Accounts WHERE Nickname = '${player}'`, console.log)
  })
}
if(commandIs('uptime', message))
{
    var url = "http://haont.ru/mwo/mon";
    var cheerio = require('cheerio');
    var request = require('request');
    
    request(url, function (error, response, body) {
      if (!error) {
        
        var $ = cheerio.load(body)
    
        var mans = $('#mwo_status_container').text()
  var uptime =  mans.split(":")

    //console.log(uptime[1])
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
      

      .setAuthor("MWO-Monitoring", client.user.displayAvatarURL())
      .setTitle("Server uptime")
      .setDescription("**" + uptime[1].substring(1) + "**")
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

         console.log(manse + "+")
          
         

             name = "**" + manse + "**"

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
{
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

    
    
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()

    .setColor(message.guild.members.get(message.guild.ownerID).displayColor)
    .setThumbnail(message.guild.iconURL())


    /*.setThumbnail(message.author.avatarURL)*/
    .addField("Название сервера", message.guild.name, true)
    
    .addField("Владелец сервера", message.guild.owner.user.tag, true)
    .addField('ID', message.guild.id, true)

    .addField('Создан', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField('Регион', message.guild.region, true)
    .addField(rolet,(parseInt(message.guild.roles.size) - 1), true)
    .addField('Участников', message.guild.members.size - oks, true)
    .addField('В сети', online_user,true)
    .addField('Ботов', oks, true)  
    .addField('Каналов', message.guild.channels.size, true )
    .addField('Текстовых каналов', message.guild.channels.size - chanelkol, true)
    .addField('Голосовых каналов', chanelkol, true)
    .setFooter("Для просмотра ролей " + prefix + "roles", 'https://cdn.discordapp.com/attachments/351491707554103297/395563014113329162/-1.gif')
    message.channel.send({embed})
 
}

});

client.login(process.env.BOT_TOKEN);







