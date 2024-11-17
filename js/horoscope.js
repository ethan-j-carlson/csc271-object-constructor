function displayTitle() {
	var title = '<h1>Cosmic Horoscopes</h1>';
	var contentDiv = document.getElementById('title');
	contentDiv.innerHTML += title;
};


function displayHoroscopeCard(cardNum, img, sign, birthday, horoscope, stars) {
	var card = document.getElementsByClassName('card')[cardNum];

	card.innerHTML += '<img src="../infoFunction/images/' + img + '">';
	card.innerHTML += '<h3 class="sign">' + sign + '</h3>';
	card.innerHTML += '<p class="dates">' + birthday + '</p>';
	card.innerHTML += '<p class="horoscope">' + horoscope + '</p>';
	card.innerHTML += '<p><strong>Mood:</strong> ' + stars + '</p>';
};







displayTitle();
