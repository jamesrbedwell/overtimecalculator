var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var daysWorked = [];

var createDays = function() {
	for (var i = 0; i < weekDays.length; i++) {
		var theDay = weekDays[i];
		var dayElement = document.createElement('div');
			dayElement.className = 'day';
			dayElement.setAttribute('id', weekDays[i]);
		var createHeading = document.createElement('h3').innerHTML = theDay;

		// dayElement.appendChild('p', 'Start Time');
		// dayElement.appendChild('input');
		// dayElement.appendChild('p', 'End Time');
		// dayElement.appendChild('input');
		// dayElement.appendChild('p', 'Break Time');
		// dayElement.appendChild('input');
		document.getElementById('allDays').appendChild(dayElement);
		document.getElementsByClassName('day').appendChild(createHeading);
	
	};
};

var getAllDays = function() {
	var getDay = document.getElementsByClassName('day');
		for (var i = 0; i < getDay.length; i++) {
			var dayId = getDay[i].getAttribute('id');
		console.log(getDay[i]);
		};
	};

getAllDays();
createDays();