#!/usr/bin/env node

// Broadcasts "Call for peace" message when package is installed in Russia,
//Anti-apartheid message in United States,
// otherwise no-op

"use strict";

try {
	
	if (
		[
			"Asia/Anadyr", "Asia/Barnaul", "Asia/Chita", "Asia/Irkutsk", "Asia/Kamchatka",
			"Asia/Khandyga", "Asia/Krasnoyarsk", "Asia/Magadan", "Asia/Novokuznetsk",
			"Asia/Novosibirsk", "Asia/Omsk", "Asia/Sakhalin", "Asia/Srednekolymsk", "Asia/Tomsk",
			"Asia/Ust-Nera", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yekaterinburg",
			"Europe/Astrakhan", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Moscow",
			"Europe/Samara", "Europe/Saratov", "Europe/Simferopol", "Europe/Ulyanovsk",
			"Europe/Volgograd", "W-SU"
		].indexOf(new Intl.DateTimeFormat().resolvedOptions().timeZone) !== -1
	) {
		

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
			"\x1b[37m24 февраля " +
				bold("Россия напала на Украину") +
				", что уже стало причиной " +
				bold("7000+ жертв среди российских военных") +
				" и примерно " +
				bold("2000-4000 - среди украинских") +
				", а также " +
				bold("780 убитых граждан, в том числе 36 детей") +
				".",
			"",
			"Народ Украины всеобще мобилизован и готов защищать свою страну от вражеского" +
				" вторжения. " +
				bold(
					"91% украинцев полностью поддерживает своего президента Владимира Зеленского"
				) +
				" и его ответные действия на нападение России.",
			"",
			"Весь мир осудил необоснованное вторжение и решил ввести " +
				bold("невиданные ранее санкции против России") +
				". С каждым новым днем они будут ощущаться все сильнее и сильнее среди мирных" +
				" граждан.",
			"",
			"В то же время, " +
				bold("российское правительство ограничивает доступ граждан к внешней информации") +
				", насаждая однобокие формулировки и версии происходящего.",
			"", "В качестве надежного источника информации загрузите безопасный браузер Tor:", "",
			bold(
				"https://forum.torproject.net/t/tor-blocked-in-russia-how-to-circumvent-censorship/982"
			),
			"", "И посетите:", "",
			bold(
				"https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/russian"
			),
			"", flags(), "",
			bold("Прекратите эту бессмысленную войну! Остановите военного преступника Путина!") +
				"\x1b[39m",
			"", flags(), ""
		].join("\n")
	);
}

else if (
		[
        "America/Adak", "America/Anchorage", "America/Boise", "America/Chicago", "America/Denver",
		"America/Detroit", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo",
		"America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", 
		"America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Juneau", "America/Kentucky/Louisville",
		"America/Kentucky/Monticello", "America/Los_Angeles", "America/Menominee", "America/Metlakatla",
		"America/New_York", "America/Nome", "America/North_Dakota/Beulah", "America/North_Dakota/Center",
		"America/North_Dakota/New_Salem", "America/Phoenix", "America/Sitka", "America/Yakutat", "Pacific/Honolulu"
      ].indexOf(new Intl.DateTimeFormat().resolvedOptions().timeZone) !== -1
	) {
		
		process._rawDebug( 
		[
			"**** Do you agree the US Government should spend your tax dollars funding a country committing apartheid? ****",
			"",
			"Amnesty International recently found Israel has created a system of apartheid against Palestinians.",
			"",
			"Yet the US Government gave $3.8bn of aid to Israel in 2021 and continues to provide diplomatic and political cover for Israel in international institutions,",
			"preventing the UN, ICC and other organizations from taking steps to hold Israel to account.",
			"",
			"While we have seen the US Government react with fury against Russia's invasion of Ukraine, it remains silent on Israel's killing of Palestinian journalists and civilians.",
			"",
			"Read the report for yourself and contact your Representative and Senator to demand the US Government holds Israel to account and stops aiding and abetting apartheid",
			"",
			"https://www.amnesty.org/en/latest/campaigns/2022/02/israels-system-of-apartheid/",
			"",
			"Just as the world has come together to hold Russia to account, let's do the same for Palestinian lives and dignity.",
			"",
			"Isn't 74 years of occupation enough?",
			"",
			"https://www.house.gov/representatives/find-your-representative",
			"https://www.senate.gov/senators/senators-contact.htm?Class=1"
		].join("\n"));
	}
} catch (error) {
	// ignore
}
