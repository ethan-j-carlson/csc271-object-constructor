function displayTitle() {
	var title = '<h1>Cosmic Horoscopes</h1>';
	var contentDiv = document.getElementById('title');
	contentDiv.innerHTML += title;
};

function Zodiac (cardNum, img, sign, birthday, horoscope) {
	this.birthday = birthday
	this.img = img
	this.sign = sign
	this.cardNum = cardNum
	this.horoscope = horoscope
	this.stars = function (count) {
		res = ""
		for (let i = 0; i < count; i++) {
			res += "*"
		}
		return res;
	};
}

function displayHoroscopeCard(cardNum, img, sign, birthday, horoscope, stars) {
	var card = document.getElementsByClassName('card')[cardNum];

	card.innerHTML += '<img src="../images/' + img + '">';
	card.innerHTML += '<h3 class="sign">' + sign + '</h3>';
	card.innerHTML += '<p class="dates">' + birthday + '</p>';
	card.innerHTML += '<p class="horoscope">' + horoscope + '</p>';
	card.innerHTML += '<p><strong>Mood:</strong> ' + stars + '</p>';
};

let cap = new Zodiac(
	0,
	"capricorn.png",
	"capricorn",
	"*birthdays*",
	"Today will be a day",
);



displayTitle();

displayHoroscopeCard(cap.cardNum, cap.img, cap.sign, cap.birthday, cap.horoscope, cap.stars(3));
