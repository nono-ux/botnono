const  Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!"

client.login("Njc4NTMxNjQ2NjgwNzI3NTgy.XkkRyA.yaXJg4bqdhGrRLMksP7rnWk9WEs")
client.on("guildMemberAdd", user =>{
    user.guild.channels.get("477187894163800064").send ("Bienvenue" + user + "sur le serveur" +user.guild.name)
});
    client.on("guildMemberExit", user =>{
        user.guild.channels.get("477187948496814083").send ("Au revoir " + user + "ON T'AIMER" +user.guild.name)
});
client.on("message", message =>{
   if(!message.guild) return 
   if (message.content === prefix + "hello"){
       message.channel.send("Bonjour !" + message.author + " !")
   }
}); 

client.on("message", message =>{
if (!message.guild) return
if (message.content === prefix + "tranquille")
message.channel.send ("tranquille et toi mais bon je suis que un bot mais on va pas se plaindre")




});
