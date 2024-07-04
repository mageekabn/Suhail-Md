const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_07_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJ5K3lMaUJONVhJN1VkcjNhdDBham1xUUladC9UWGIraFhRRzVZUSttbGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjMwMzg3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3RDdFNDIxMkVBRTI5NzYwNzgzNzMyNjI0NTFFNUMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEwOTIzMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBZ1BfTU9qLVJzUzQyenBhR3Z1LXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwMzA3OGMxLWI0NTctNGFhNy1hZDE2LTQwZDQ3ZDE0MjFmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxODMsXG4gICAgICAyMDcsXG4gICAgICAxOTEsXG4gICAgICAxNjYsXG4gICAgICAyNDMsXG4gICAgICAyMzEsXG4gICAgICAxMDIsXG4gICAgICAyNTMsXG4gICAgICA2OCxcbiAgICAgIDIzMixcbiAgICAgIDIzMCxcbiAgICAgIDYzLFxuICAgICAgODUsXG4gICAgICAxNzIsXG4gICAgICAxNTYsXG4gICAgICAyOSxcbiAgICAgIDEzNyxcbiAgICAgIDQ3LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMTM1LFxuICAgICAgMjcsXG4gICAgICAyMCxcbiAgICAgIDU2LFxuICAgICAgMTc5LFxuICAgICAgMjAwLFxuICAgICAgMTQ3LFxuICAgICAgMTA2LFxuICAgICAgMjIzLFxuICAgICAgMTY4LFxuICAgICAgMjQ0LFxuICAgICAgOTUsXG4gICAgICAxNyxcbiAgICAgIDI0LFxuICAgICAgOTEsXG4gICAgICAxMjcsXG4gICAgICAxOTUsXG4gICAgICA0LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0RZWEFRWkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIzMDM4Nzg3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Zj/CdmZ3wnZmW8J2Zp/CdmaogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwnZmo8J2Zo/CdmZnwnZmlXCIsXG4gICAgXCJsaWRcIjogXCIxNDY1OTYyMjY0MTI1NTY6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3pBbnBrRUVLaVJtN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLbHNJekYzVCt5YlYyQUFrTkJ6SGJ6Qk94SjdEOHlHSm1xdndVbDVDVmxBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJ4L3FRaXBYNFZicjhJVzI4VzVSOVFRM09EVUpONXRPMVkwaUwxM09FUXV3Q2crcTUvRnM5VGhUenV5Ymp4MWFzTGhxbWtaRmNiWHpaU2FUNUNKMERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5wb1hJalJ2QU04alJHL25qSUFHUnZVSlJNek5hbkNXYjVBZVpqRFIzOU5lUmlDMDVYMlVrVFdlMU42ZlhuM0lWKzZqempBN1daZzl4dUlzdDhlN0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIzMDM4Nzg3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMDkyMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFRjVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVGNS5qc29uIjogIntcImtleURhdGFcIjpcIkxsT1lCZFo0ZkJRNDJyVnNEUXJzaVhRV2ZRQSsxZ2Y4WTJOOERaN0hORVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyNjY3MDM3NixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
