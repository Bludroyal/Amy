//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113,2347053192517";
global.owner = process.env.OWNER_NUMBER || "2348158449388";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU40TmtuUzRFSHVrT1dteER2bURvcm1nWlpPcGsyZFhDNDYwa1drWHFuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0g1Mk5vbGZWWlBMTTI1c2tpNy9QdzR4SFlMZy8vWnRHbjFmRE9mMGZGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTGhYYTZkcDBNTVEyenlDODdJOUJJaDRJUnRjNFFjWVNBdzkrNTJyZEdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWXE4UmhoTVl5aGhFaHdmYVYwNWlMajZFOGd4YS9yRUNQUTh0bEpZNm5NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIZ0h5THRmQS9HUytZNkhpdjQ3Sy9odTJhbUdXVWdma0hGWTk2OXZDM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJmSnVhNXBKWjFncm14c3JvWFk2U1pUU0RqZEh5OXIwbC9heDB1WHdRd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFtSjNjTWdadU5EYlFicWJPbGVvY3hYZXZ5Z2ZLVDdGQVFDUnpwRm4xcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWo4NjZDZmhkbGxBR1REbGZPS0VWRUpLNDRRNlBYam5QVyt3cmgrdHRBND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ4cnhib2JlUW1oazhxL1ZISDhtMVh5ZXZLQzVKZ1FpVzZIU2tVK3hEWFVUVVF0RzYxUkgxUElhY3V3TFpuS2NwWHRRQ29nVmw5aHBHckZ6Qk11Z0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiI3UTNVRk9jM09OVVJneVdyTkpISEhtRFJkWkF0T2pQajkwZXJ4M0NxeHYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyOXczZU82ZlNUcWxXTXBmSXNQTVVRIiwicGhvbmVJZCI6IjcxZjBmZGU2LWVmNjctNGU4NS05MzhjLTIwMzRmYTczMDE5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSUdjM3VhVDV3bFluQWhndHdVZ0JwcHZic2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3lXRW12MjV4WkpKMDNoUEwzM1YvaEZRRXVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVQVFJMTlFCIiwibWUiOnsiaWQiOiIyMzQ4MTU4NDQ5Mzg4OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05maGlPY0VFSW5ybDdvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBwUGpnRXBzUW9TeUxydHVXNVZ1N2htbVYwZjYxNVAvb1EweHBrTlF1Zzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZacW9lQW5VdVFRVGh4ekt4SkI2eXFPdmJGcUhKQlJaZWRYbnZHM0VBSGoxZzhkenhtY2c3VFF1WlJnNDc0WE9YdW1XL2Jmd25KQWY3elFmS2NhNER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6eHZtTS9XOXRoemhGSDdUeEtaK0NISlFYbW41QThxTlNkK25SY1BqZ0oyUGI5YjRYQ29JVS85NGRwcUNBNTNLcnBodlB2YzlkbDluaWVhTml6SVpEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNTg0NDkzODg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNlQ0NEJLYkVLRXNpNjdibHVWYnU0WnBsZEgrdGVULzZFTk1hWkRVTG9QIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNjM4MTAyfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎AMY✌︎💨™`",
  author: process.env.PACK_AUTHER || "☯︎AMY✌︎💨",
  packname: process.env.PACK_NAME || "☯︎AMY✌︎💨",
  botname: process.env.BOT_NAME || "☯︎AMY✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎AMY✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎AMY✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
