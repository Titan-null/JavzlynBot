/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YY MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const A187 = '👾AR15BOT👾'; // JANGAN UBAH-UBAH INFO!!!
const instagram = 'https://instagram.com/_sadboy.ig'; // JANGAN UBAH-UBAH INFO!!!
const nomer = 'Wa.me/+6285722553839'; // JANGAN UBAH-UBAH INFO!!!
const aktif = 'Tergantung jaringan'; // JANGAN UBAH-UBAH INFO!!!
const groupwhatsapp = 'https://chat.whatsapp.com/GU6NsgZvfgw37vrjIxUPhP'; // JANGAN UBAH-UBAH INFO!!!
const youtube = 'https://www.youtube.com/channel/UCGYLWtyT9IADYNUiK0uZiGg'; // JANGAN UBAH-UBAH INFO!!!
//A187ID
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const aris = require("./lib/aris.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const aris1 = require("./lib/aris1.js");
const aris2 = require("./lib/aris2.js");
const aris3 = require("./lib/aris3.js");
const aris4 = require("./lib/aris4.js");
const readTextInImage = require('./lib/ocr')
//A187ID
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");


function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] AR15BOT ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_sadboy.ig`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_sadboy.ig`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   //GroupsA187ID

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FFA187ID
if(text.includes("!cek")){
var num = text.replace(/!cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//ChatA187ID
else if (text == 'assalamualaikum'){
conn.sendMessage(id, ' _3aalaikumsalam, _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, ' _Waalaikumsalam, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, ' _Waalaikumsalam, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, ' _Waalaikumsalam, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '#owner'){
conn.sendMessage(id, ' *Owner AR15BOT wa.me/+6285722553839* ' ,MessageType.text);
}
else if (text == '#help'){
conn.sendMessage(id, ' *Menampilkan Pilihan Menu!!!* ' ,MessageType.text);
}
else if (text == '#menu1'){
conn.sendMessage(id, ' *Menampilkan Fitur Menu1!!!* ' ,MessageType.text);
}
else if (text == '#menu2'){
conn.sendMessage(id, ' *Menampilkan Fitur Menu2!!!* ' ,MessageType.text);
}
else if (text == '#menu3'){
conn.sendMessage(id, ' *Menampilkan Fitur Menu3!!!* ' ,MessageType.text);
}
else if (text == '#menu4'){
conn.sendMessage(id, ' *Menampilkan Fitur Menu4!!!* ' ,MessageType.text);
}
else if (text == '#info'){
conn.sendMessage(id, ' *Menampilkan Info!!!* ' ,MessageType.text);
}
else if (text == '#donasi'){
conn.sendMessage(id, ' *Menampilkan Donasi!!!* ' ,MessageType.text);
}
else if (text == '#creator'){
conn.sendMessage(id, ' *Creator AR15BOT wa.me/+6285722553839* ' ,MessageType.text);
}
else if (text == 'Pagi'){
conn.sendMessage(id, ' _Pagi juga, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Siang'){
conn.sendMessage(id, ' _Siang juga, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Sore'){
conn.sendMessage(id, ' _Sore juga, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Malam'){
conn.sendMessage(id, ' _Malam juga, Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod? babi looo' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing,kntl,babi,monyet' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, ' *lu bacot_-* ' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, ' _love you too😻_ ' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, ' _Iyah aku disini kak...ada yang bisa kami bantu? Ketik *#help* untuk melihat fitur bot kami🙏_ ' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}

// FiturA187ID

if (text.includes('!nulis')){
  var teks = text.replace(/!nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!tts')){
  var teks = text.replace(/!tts /, '')
    axios.get('http://scrap.terhambar.com/tts?kata=${teks}')
    .then((res) => {
      audioToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.audio)
        })
    })
}

if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = `*Judul:* ${res.data.title}\n\n *Zize:* ${res.data.filesize}\n\n *Audio:* ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!infoig")){
  const teks = text.replace(/!infoig /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
  let hasil = `BIODATA INSTAGRAM ATAS NAMA _${teks}_ \n\n *Username✍️* : _${res.data.Username}_ \n *Nama✍️* : _${res.data.Name}_ \n *Jumlah Followers✍️* : _${res.data.Jumlah_Followers}_ \n *Jumlah Following✍️* : _${res.data.Jumlah_Following}_ \n *Jumlah Post✍️* : _${res.data.Jumlah_Post}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!infogempa")){
  const teks = text.replace(/!infogempa /, "")
  axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
  let hasil = ` *INFO GEMPA* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman✍️* : _${res.data.kedalaman}_ \n *Koordinat✍️* : _${res.data.koordinat}_ \n *Magnitude✍️* : _${res.data.magnitude}_ \n *Waktu✍️* : _${res.data.waktu}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!chord")){
const teks = text.replace(/!chord /, "")
axios.get(`https://alfians-api.herokuapp.com/api/chord?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = `*Nih Cord Lagu ${teks} kak* \n\nCord: _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}


if (text.includes("!ytmp4")){
const teks = text.replace(/!ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = ` *Judul:* ${res.data.title}\n\n *Tipe:* ${res.data.ext}\n\n *Resolution:* ${res.data.resolution}\n\n *Zize:* ${res.data.filesize}\n\n *Audio:* ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `âœ…Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawahðŸ—¡ï¸\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}



if (text.includes("!tiktok")) {
const tictoc = text.replace(/!tiktok /, "")
axios.get(`http://scrap.terhambar.com/tiktokfull?link=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
     let titoe = `âœ…Berhasil$$$ Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawahðŸ—¡ï¸\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://arugaz.herokuapp.com/api/fb?url=${teks}`).then((res) => {
    let hasil = `Nih BosQ Pilih...\n\n *Revolusi SD*: ${res.data.result.sd}\n\n *Rovolusi HD:* ${res.data.result.hd}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ig")){
const teks = text.replace(/!ig /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `✅Dwonload sendiri link error maaf\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!wiki")){
const teks = text.replace(/!wiki /, "")
axios.get(`https://arugaz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *👩‍💻Menurut Wikipedia:👩‍💻* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!wikien")){
const teks = text.replace(/!wikien /, "")
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *👩‍💻According to Wikipedia:👩‍💻* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\nImsyak : ${res.data.Imsyak}\nSubuh : ${res.data.Subuh} WIB\nDzuhur : ${res.data.Dzuhur}WIB\nAshar : ${res.data.Ashar} WIB\nMaghrib : ${res.data.Maghrib}\nIsya : ${res.data.Isya} WIB\nTengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!harinasional")){
  const teks = text.replace(/!harinasional /, "")
  axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  let hasil = `menurut tanggal ${teks} adalah\n\n *Tanggal* : _${res.data.tanggal}_ \n *Keterangan* : _${res.data.keterangan}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == '!quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!bitly")){
const teks = text.replace(/!bitly /, "")
axios.get(`https://api.haipbis.xyz/bitly?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `nih kak :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!puisi1")){
const teks = text.replace(/!puisi1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!puisi2")){
const teks = text.replace(/!puisi2 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!cerpen")){
const teks = text.replace(/!cerpen /, "")
axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cerpen Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!cersex")){
const teks = text.replace(/!cersex /, "")
axios.get(`https://arugaz.herokuapp.com/api/cersex2`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cersex Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!quotes1")){
const teks = text.replace(/!quotes1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/randomquotes`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Quotes Kak :)*\n\n *Author* : _${res.data.author}_ \n\n *Quotes* : _${res.data.quotes}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!spamcall")){
const teks = text.replace(/!spamcall /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO SPAM CALL* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!bucin")){
const teks = text.replace(/!bucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` _${res.data.desc}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!tts")){
const teks = text.replace(/!tts /, "")
axios.get(`http://scrap.terhambar.com/tts?kata=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.audio);
})
}

if (text.includes("!infoanime")){
const teks = text.replace(/!infoanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO ANIME ${teks} :* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!gay")){
const teks = text.replace(/!gay /, "")
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` ${res.data.desc} \n\n *Persen Gay Lo!!!* _${res.data.persen}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!spamsms")){
const teks = text.replace(/!spamsms /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${teks}&jum=20`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO SPAM SMS 20 PESAN* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!indohot")){
const teks = text.replace(/!indohot /, "")
axios.get(`https://arugaz.herokuapp.com/api/indohot`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Tobat Bosq* \n\n *Judul* _${res.data.result.judul}_ \n\n *Status* _${res.data.result.genre}_ \n\n *Durasi* _${res.data.result.durasi}_ \n\n *Link Bosq* _${res.data.result.url}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!filmanime")){
const teks = text.replace(/!filmanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Film Anime ${teks} :* \n\n *Judul* _${res.data.result.title}_ \n\n *Rating* _${res.data.result.rating}_ \n\n *Info* _${res.data.result.sinopsis}_ \n\n *Link Video* _${res.data.result.video}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!covid")){
const teks = text.replace(/!covid /, "")
axios.get(`https://arugaz.herokuapp.com/api/coronaindo`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *🔎DATA WABAH COVID-19 TERBARU DI INDONESIA🔍* \n\n *Kasus Baru* : _${res.data.kasus_baru}_ \n\n *Kasus Total* : _${res.data.kasus_total}_ \n\n *Meninggal* : _${res.data.meninggal}_ \n\n *Negara* : _${res.data.negara}_ \n\n *Penanganan* : _${res.data.penanganan}_ \n\n *Sembuh* : _${res.data.sembuh}_ \n\n *Terakhir* : _${res.data.terakhir}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!resep")){
const teks = text.replace(/!resep /, "")
axios.get(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Judul:* ${results.title}\n*Penulis:* ${results.author.user}\n*Rilis:* ${results.author.datePublished}\n*Level:* ${results.dificulty}\n*Waktu:* ${results.times}\n*Porsi:* ${results.servings}\n\n*Bahan-bahan:*\n${bahan}\n\n*Step-by-step:*\n${tutor}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!namaninja")){
const teks = text.replace(/!namaninja /, "")
axios.get(`https://api.terhambar.com/ninja?nama=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `Nama Ninja kamu🙂:\n\n${res.data.result.ninja}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '#help'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, aris.aris(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
if (text == '#menu1'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, aris1.aris1(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
if (text == '#menu2'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, aris2.aris2(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
if (text == '#menu3'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, aris3.aris3(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
if (text == '#menu4'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, aris4.aris4(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '!foto'){
conn.sendMessage(id, 'kirim !foto cewek/cowok\n\nContoh: !foto cewek' ,MessageType.text);
}
else if (text == '#help'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
else if (text == '#menu1'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
else if (text == '#menu'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
else if (text == '#menu2'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
else if (text == '#menu3'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
else if (text == '#menu4'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾AR15BOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/_sadboy.ig_' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
 
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   
   if (text.includes("!waifu"))
   {
    var items = ["waifu","anime waifu"];
    var anim = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.haipbis.xyz/waifu";
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var anim =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(anim) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }


   
   if (text.includes("!loli"))
   {
    var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
    
if (text.includes("!pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

   else if (text.includes("!nama")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari nama *${nama}* adalah

❉──────────❉

         Nama _*${nama}*_ _${h}_
         
❉──────────❉

`,
 MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

❉──────────❉

 *Kecocokan berdasarkan nama*


 _${d}_


❉──────────❉
    `, MessageType.text);
  });
  }
   if (text.includes("!foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("!foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("!fotoanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 
if (text.includes("!lirik")){
	const teks = text.replace(/!lirik /, "")
	axios.get(`https://arugaz.herokuapp.com/api/lirik?judul=${teks}`).then ((res) => {
	     conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	 	let hasil = ` *🎧Lirik🎧 Lagu ${teks}:* \n\n\n _${res.data.result}_ `
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes("!alay")){
	const teks = text.replace(/!alay /, "")
	axios.get(`https://arugaz.herokuapp.com/api/bapakfont?kata=${teks}`).then ((res) =>
		{ let hasil = `${res.data.result}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}

//Tolonglah bro jangan di ubah ubah Aris187 ID


})

