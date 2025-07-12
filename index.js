const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
// const { HttpsProxyAgent } = require("https-proxy-agent");

// --- settings ---
const TELEGRAM_TOKEN = "8052703775:AAHUjEls49axaHEg3rTCdvUNjvNXA235PiQ";
// const proxy = "http://127.0.0.1:10809";

const bot = new TelegramBot(TELEGRAM_TOKEN, {
    polling: true,
});
// request: {
//         agent: new HttpsProxyAgent(proxy),
//     },
// main menu
const home = function (chatId) {
    const mainMenu = {
        reply_markup: {
            keyboard: [["button 1", "button 2"], ["button 3"]],
            resize_keyboard: true, // برای اندازه مناسب
            one_time_keyboard: false, // فقط یکبار نمایش داده بشه
            // input_field_placeholder: "یکی از گزینه‌ها رو انتخاب کن...",
            is_persistent: true,
        },
    };

    bot.sendMessage(chatId, "یکی از گزینه‌های زیر رو انتخاب کن:", mainMenu);
};

// welcome message

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(msg.chat.id, "hello :)");
    home(chatId);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "button 1") {
        bot.sendMessage(chatId, "button 1 ..............");
        const optionalMenu = {
            reply_markup: {
                keyboard: [["button 4", "button 5"], ["button 6"], ["Home"]],
                resize_keyboard: true, // برای اندازه مناسب
                one_time_keyboard: false, // فقط یکبار نمایش داده بشه
            },
        };
        bot.sendMessage(
            chatId,
            "یکی از گزینه‌های زیر رو انتخاب کن:",
            optionalMenu
        );
    }

    if (text === "button 2") {
        bot.sendMessage(chatId, "button 2 ..............");
    }

    if (text === "button 3") {
        bot.sendMessage(chatId, "button 3 ..............");
    }
    if (text === "Home") {
        home(chatId);
    }
});
