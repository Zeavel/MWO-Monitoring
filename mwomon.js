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
    client.user.setGame("Ready")
});
client.setInterval(function play()
{
  var urle = "http://haont.ru/mwo/mon";
  var cheerio = require('cheerio');
  var request = require('request');
  
  request(urle, function (error, response, body) {
    if (!error) {
      
      var $ = cheerio.load(body)
  
      var manse = $('h2').text()
var game = client.user.presence.game.name.toString()

client.user.setGame(manse)
      
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
    const embed = new Discord.RichEmbed()
      

      .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)

      .addField("Server uptime","**" + uptime[1] + "**")

        message.channel.sendMessage({embed})
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
        if(fs.existsSync('./accmwo/'+manse+'.txt'))
        {
          name = "**" + manse + "**" + " (" + fs.readFileSync('./accmwo/'+manse+'.txt')+")"
        }  
        else if(!fs.existsSync('./accmwo/'+manse+'.txt'))
        {
          name = "**" + manse + "**"
        } 
          fs.appendFileSync('./players/players.txt', "**" + id + ".** " + name + " - **[" + rayon + "]**\n")
        }


  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
    

    .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)

    .addField(uptima, fs.readFileSync('./players/players.txt', 'utf8') + "\n[View all information](http://haont.ru/mwo/mon)")

      message.channel.sendMessage({embed})
  fs.unlinkSync('./players/players.txt')
      }
      else
      {
        const Discord = require('discord.js');
        const embed = new Discord.RichEmbed()
          
      
          .setAuthor("MWO-Monitoring", client.user.displayAvatarURL)
      
          .setDescription("**" + uptimer + "**")
      
            message.channel.sendMessage({embed})
      }

      }})
}
if(commandIs("sync", message))
{
  dir = `./accmwo/`
var player = message.content.substring(8)
  fs.writeFileSync(dir + player + ".txt", message.author.tag)
  message.channel.sendMessage({embed: {
      color: 6604900,
      description: "**Аккаунт успешно привязан**"
      
      }})
}

});

client.login(process.env.BOT_TOKEN);







