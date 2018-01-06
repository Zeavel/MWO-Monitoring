
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
 if(uptimer = 0)
 { status = "idle"}
        if(uptimer >= 1 && uptimer <= 5)
        { status = "online"}
        if(uptimer > 5)
        { status = "dnd"}
client.user.setActivity(manse, { type: 3}); // type: 2 - Слушает
//client.user.setStatus(status)
        console.log(numb + " " + status)
      
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
    
        var mans = $('div > #mwo_status_container').text()
  var uptime =  mans.split(": ")

    //console.log(uptime[1])
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
      

      .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)

      .addField("Server uptime","**" + uptime[1] + "**")

        message.channel.send({embed})
      }})
}
if(commandIs('players', message))
{
    var url = "http://haont.ru/mwo/mon";
    var cheerio = require('cheerio');
    var request = require('request');
    
    request(url, function (error, response, body) {
      if (!error) {
       
        var $ = cheerio.load(body)
        var mans = $('div > #mwo_status_container > h2').text()

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
if(coorx == -431602080 && coory == -431602080)
{

}
          console.log(manse + coor + "  ds " + rayon)
          
        if(fs.readFileSync("./accmwo/players.txt", 'utf8').includes(manse))
        {
          var cheli = fs.readFileSync("./accmwo/players.txt", 'utf8')
          var cheliki = parseInt(cheli.search(manse))
        var playerc = cheli.substring(cheliki)
        var playera = playerc.split(" : ")[1]
        var playerb = playera.toString().split(";")
          name = "**" + manse + "**" + " (" + playerb[0]+")"
        }  
        else if(!fs.readFileSync("./accmwo/players.txt", 'utf8').includes(manse))
        {
          name = "**" + manse + "**"
        } 
          fs.appendFileSync('./players/players.txt', "**" + id + ".** " + name + " - **[" + rayon + "]**\n")
        }


  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
    

    .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)

    .addField(uptima, fs.readFileSync('./players/players.txt', 'utf8') + "\n[View all information](http://haont.ru/mwo/mon)")

      message.channel.send({embed})
      fs.writeFileSync('./players/players.txt', "")
      }
      else
      {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
          
      
          .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)
      
          .setDescription("**" + uptimer + "**")
      
            message.channel.send({embed})
      }

      }})
}
if(commandIs("link", message))
{
var player = message.content.substring(8)
if(fs.readFileSync("./accmwo/players.txt").includes(player))
{
  message.channel.send({embed: {
    color: 16711680,
    description: "**You already linked your account** "
    
    }})
}
if(!fs.readFileSync("./accmwo/players.txt").includes(player))
{ 
  fs.appendFileSync("./accmwo/players.txt", player + " : " + message.author.tag + ";")
  message.channel.send({embed: {
      color: 6604900,
      description: "**Account successfully linked** "
      
      }})
    }
}
   if(commandIs("unlink", message))
{
var player = message.content.substring(10)

if(!fs.readFileSync("./accmwo/players.txt").includes(player))
{ 

  message.channel.send({embed: {
      color: 16711680 ,
      description: "**This account does not exist** "
      
      }})
    
}
if(fs.readFileSync("./accmwo/players.txt").includes(player))
{

  var unlinkinfo = fs.readFileSync("./accmwo/players.txt").toString().replace(player, "")
  var unlinkinfa = unlinkinfo.replace(message.author.tag, "")
  fs.writeFileSync("./accmwo/players.txt", unlinkinfa)
  message.channel.send({embed: {
    color: 6604900,
    description: "**You have successfully unlinked an account** "
    
    }})
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
});


client.login(process.env.BOT_TOKEN);







