#!/usr/bin/env node

// Broadcasts "Call for peace" message when package is installed in Russia, otherwise no-op

"use strict";

try {
	if (
		[
			"Europe/Moscow", "Asia/Yakutsk", "Asia/Krasnoyarsk", "Europe/Samara",
			"Asia/Yekaterinburg", "Asia/Irkutsk", "Asia/Anadyr", "Asia/Kamchatka",
			"Europe/Kaliningrad", "Asia/Vladivostok", "Asia/Magadan", "Asia/Novosibirsk",
			"Asia/Omsk"
		].indexOf(new Intl.DateTimeFormat().resolvedOptions().timeZone) === -1
	) {
		return;
	}

	var bold = function (msg) { return "\x1b[97m\x1b[1m" + msg + "\x1b[22m\x1b[37m"; };

	var flags = function () {
		return (
			"🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦" +
			"  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦"
		);
	};

	process._rawDebug(
		[
			"", flags(), "",
			"\x1b[37m6 марта 2022 год – 11-й день " +
				bold("вторжения российских войск на территорию Украины") +
				".",
			"",
			"На данный момент известно о " +
				bold("5000-11000 жертвах среди русских военных") +
				" и примерно о " +
				bold("1500-3000 - среди украинских") +
				", а также о " +
				bold("350 убитых гражданах, в том числе 38 детей"),
			"",
			"Народ Украины полностью мобилизован и готов защищать свою страну от вражеского" +
				" вторжения. " +
				bold(
					"91% украинцев полностью поддерживает своего президента Владимира Зеленского"
				) +
				" и его ответные действия на нападение России.",
			"",
			"Весь мир осудил необоснованное вторжение и решил ввести " +
				bold("невиданные ранее санкции против России") +
				".С каждым новым днем они будут ощущаться все сильнее и сильнее среди мирных" +
				" граждан.",
			"",
			"Прогнозируется, что в течение 2-3 лет (при действующих санкциях) " +
				bold("ВВП России может достичь уровня небольшой европейской страны") +
				".",
			"", "В качестве надежного источника информации загрузите безопасный браузер Tor:", "",
			bold("https://www.torproject.org/"), "", "И посетите:", "",
			bold(
				"https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/russian"
			),
			"", flags(), "", bold("Прекратите эту бессмысленную агрессию! Остановите Путина!"), "",
			bold("Не позволяйте ФСБ управлять Россией. Верните его Людям!") + "\x1b[39m", "",
			flags(), ""
		].join("\n")
	);
} catch (error) {
	// ignore
}
