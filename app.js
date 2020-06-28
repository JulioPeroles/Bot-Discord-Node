const fs=require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
let m;
/* Para leer el token: con lecura de archivos*/
var tk=fs.readFileSync("tokenbot.txt","UTF-8",(error,datos)=>{ /* sync: para que se espere hasta realizar la lectura*/
    if(!error)
    {
        return datos.toString();
    }
    else{
        console.log("No se ha podido leer");
    }
});

/* Iniciando con el bot*/

client.on("ready", () => { /* esta funcion es un listen*/
  console.log(client.user.tag+" se ha conectado con el bot");
});

client.on("message", msg => {
    m=msg.content.toLowerCase();
        console.log(m);
    }
  );
  /*comentario */
client.on("message", msg => {
    m=msg.content.toLowerCase();
    if (m.indexOf("mierda")>-1) {
      msg.reply("Oye no digas malas palabras");
    }
  });
  client.on("message", msg => {
    m=msg.content.toLowerCase();
    if (m.indexOf("mierda")>-1) {
      msg.reply("Oye no digas malas palabras");
    }
  });
  client.on("message", msg => {
    m=msg.content.toLowerCase();
    if (m.indexOf("ola")>-1) {
      msg.reply("Saludos,¿qué deseas?");     
      msg.reply("A)Si quieres confirmar sobre una reunión puedes avisarle a @Danielsinsama y yo les haré recordar");
      msg.reply("B)Si quieres otra cosa puedes hablar con normalidad,tal vez te puedo entender");
    }
  });
  
client.login(tk);