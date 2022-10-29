const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './tmp' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    SESSION: process.env.BOBIZ_SESSION === undefined ? '' : process.env.BOBIZ_SESSION,
    URL_1NAME: process.env.URL_1NAME === undefined ? '🎃قناتي يوتوب🎃' : process.env.URL_1NAME,
    URL_1LINK: process.env.URL_1LINK === undefined ? 'https://youtu.be/aSNQVNHgCqo ' : process.env.URL_1LINK,
    URL_2NAME: process.env.URL_2NAME === undefined ? '😎شات ديالي علۍ الواتساب' : process.env.URL_2NAME,
    URL_2LINK: process.env.URL_2LINK === undefined ? 'https://wa.me/+212661809542' : process.env.URL_2LINK,
    FOOTER: process.env.FOOTER === undefined ? 'LO9MANEBOT-MD  https://wa.me/+212661809542  تابعني على الواتساب ' : process.env.FOOTER,
    CAPTION: process.env.CAPTION === undefined ? '🔱 LO9MANEBOT 🔱 𝙱𝙾𝚃 𝙼𝙳 https://wa.me/+212661809542 ادخل نطقطق' : process.env.CAPTION,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/201b5c02be1e336a29c60.jpg' : process.env.ALIVE_LOGO,
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*📥Downloading your song...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*📤Uploading your song...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*📥Downloading your video...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*📤Uploading your video...*' : process.env.VIDEO_UP,
    FILE_DOWN: process.env.FILE_DOWN === undefined ? '*📥Downloading your file...*' : process.env.FILE_DOWN,
    FILE_UP: process.env.FILE_UP === undefined ? '*📤Uploading your file...*' : process.env.FILE_UP,
    STIC_WM:process.env.STIC_WM === undefined ? '🔱 LO9MANEBOT 🔱' : process.env.STIC_WM,
};
