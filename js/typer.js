// Author: Santiago Rengifo
// Date: 10-12-2018

function typing(conta2 = null) {
	$('special').text('');
	if (conta2 > list_describers.length - 1) {
		conta = 0;
		conta2 = 0;
		typing(conta2);
		return;
	}

	var desc = list_describers[conta2];
	var task = setInterval(() => {
		if (conta > desc.length) {
			clearInterval(task);
			setTimeout(() => {
				var task2 = setInterval(() => {
					conta--;
					if (conta == 0) {
						clearInterval(task2);
						conta2++;
						typing(conta2);
					}
					$('special').text('');
					$('special').append(desc.substr(0, conta) + '|');

				}, 50);
			}, 500);
		}

		$('special').text('');
		$('special').append(desc.substr(0, conta) + '|');
		conta++;
	}, 100);
}

var list_describers = [];
var conta, conta2;
var typer = {
	init: function () {
		conta = 0;
		conta2 = 0;
		typing(conta2);
	},
	fill: function (list) {
		if (typeof list != 'object' || typeof list == 'number') alert('MEC');
		else {
			list.forEach(element => {
				list_describers.push(element);
			});
		}
	}
};

typer.fill([
	'Student',
	'Junior Developer',
	'Javascript lover',
	'Volley player',
]);
typer.init();

