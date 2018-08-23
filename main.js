var standardHours = 0;
var oneFiftyHours = 0;
var twoHundredHours = 0;

var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var daysWorked = [
	{
		day: "Monday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Tuesday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Wednesday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Thursday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Friday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Saturday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Sunday",
		startTime: 0,
		endTime: 0,
		break: 0,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	}
];

var addValues = function() {
	let monday = function() {
		let startVal = document.getElementById('monStart').value;
		let endVal = document.getElementById('monEnd').value;
		let breakVal = document.getElementById('monBreak').value;

		daysWorked[0].startTime = startVal;
		daysWorked[0].endTime = endVal;
		daysWorked[0].break = breakVal;
	};
	let tuesday = function() {
		let startVal = document.getElementById('tueStart').value;
		let endVal = document.getElementById('tueEnd').value;
		let breakVal = document.getElementById('tueBreak').value;

		daysWorked[1].startTime = startVal;
		daysWorked[1].endTime = endVal;
		daysWorked[1].break = breakVal;
	};
	let wednesday = function() {
		let startVal = document.getElementById('wedStart').value;
		let endVal = document.getElementById('wedEnd').value;
		let breakVal = document.getElementById('wedBreak').value;

		daysWorked[2].startTime = startVal;
		daysWorked[2].endTime = endVal;
		daysWorked[2].break = breakVal;
	};
	let thursday = function() {
		let startVal = document.getElementById('thuStart').value;
		let endVal = document.getElementById('thuEnd').value;
		let breakVal = document.getElementById('thuBreak').value;

		daysWorked[3].startTime = startVal;
		daysWorked[3].endTime = endVal;
		daysWorked[3].break = breakVal;
	};
	let friday = function() {
		let startVal = document.getElementById('friStart').value;
		let endVal = document.getElementById('friEnd').value;
		let breakVal = document.getElementById('friBreak').value;

		daysWorked[4].startTime = startVal;
		daysWorked[4].endTime = endVal;
		daysWorked[4].break = breakVal;
	};
	let saturday = function() {
		let startVal = document.getElementById('satStart').value;
		let endVal = document.getElementById('satEnd').value;
		let breakVal = document.getElementById('satBreak').value;

		daysWorked[5].startTime = startVal;
		daysWorked[5].endTime = endVal;
		daysWorked[5].break = breakVal;
	};
	let sunday = function() {
		let startVal = document.getElementById('sunStart').value;
		let endVal = document.getElementById('sunEnd').value;
		let breakVal = document.getElementById('sunBreak').value;

		daysWorked[6].startTime = startVal;
		daysWorked[6].endTime = endVal;
		daysWorked[6].break = breakVal;
	};
	monday();
	tuesday();
	wednesday();
	thursday();
	friday();
	saturday();
	sunday();
};

// Calculates 100% hours
var standardHourCalc = function(hours, start, end) {

	var startPlus8 = start + 8;
	// calculates standard hours if less than or equal to 8 between 6am and 6pm
	if (hours > 0 && hours <= 8 && start >= 6 && end <= 18) {
		return hours;
	// returns 8 as more than 8 hours worked between overtime bracket hours
	} else if (hours > 0 && hours > 8 && start >= 6 && end <= 18) {
		return 8;
	} else if (hours > 0 && end <= 6) {
		return 0;
	// calculates standard hours if less than 8 but start time before 6am
	} else if (hours > 0 && start < 6 && end > startPlus8) {
		return 8 - (6 - start);
	// calculates standard hours if start after 6am and finish is after 6pm
	} else if (hours > 0 && hours >= 8 && start >= 6 && end > 18 ) {
    	return 8;
  	} else {
  		return 0;
  	}
	
  };


// Calculates 150% hours
var oneFiftyHourCalc = function(hours, start, end) {
	let startPlus2 = start + 2;
	if (hours > 8 && hours <= 10 && start < 20 && start >= 6) {
		return hours - 8;
	} else if (hours > 0 && start < 6 && start > 4 && startPlus2 < 8) {
		return 6 - start;
	} else if (hours > 8 && hours > 10 && start >= 6) {
		return 2;
	} else {
		return 0;
	}
};

// Calculates 200% hours
var twoHundredHourCalc = function(hours, start, end) {
	let twoHund = 0;
	if (start < 6 && hours > 0) {
		return 6 - start;
	} else if (hours > 10 && start < 6) {
		twoHund += 6 - start;
		twoHund += hours - 10;
		return twoHund;
	} else if (hours > 0 && start > 6 && hours > 10) {
		return hours - 10;
	} else if (hours > 0 && start > 20) {
		return hours;
	} else if (hours > 0 && end > 20) {
		return end - 20;
	} else {
		return 0;
	}
};

// Sets saturday hours
var sat150hours = 0;
var sat200hours = 0;
// Calculates saturday hours (inclusive of 4 hour minimum in areas)
var satHourCalc = function(hours, start, end) {
	let startPlus2 = start + 2;

	if (hours > 0 && startPlus2 <= 6) {
		sat200hours = hours;
	} else if (hours > 0 && startPlus2 > 6 && startPlus2 <= 7) {
		sat150hours = 6 - start;
		sat200hours = hours - sat150hours;
	} else if (hours > 0 && start >= 6 && end < 12) {
		sat150hours = 2;
		sat200hours = 2;
	}  else if (hours > 0 && start >= 6 && start <= 10) {
		sat150hours = 2;
		sat200hours = hours - sat150hours
	} else if (hours > 0 && start > 10) {
		sat150hours = 12 - start;
		sat200hours = hours - sat150hours;
	} else if (hours > 0 && start > 12) {
		sat200hours = hours;
	} else {
		return 0;
	}
};


// Loops through days worked and adds hours to hour variables.
var addHours = function() {
	for (var i = 0; i < daysWorked.length; i++) {
		if (weekDays.includes(daysWorked[i].day)) {
			var calculateStandardHours = standardHourCalc(daysWorked[i].totalHours(), daysWorked[i].startTime, daysWorked[i].endTime);
				standardHours += calculateStandardHours;
			var calculateOneFiftyHours = oneFiftyHourCalc(daysWorked[i].totalHours(), daysWorked[i].startTime);
				oneFiftyHours += calculateOneFiftyHours;
			var calculateTwoHundredHours = twoHundredHourCalc(daysWorked[i].totalHours(), daysWorked[i].startTime, daysWorked[i].endTime);
				twoHundredHours += calculateTwoHundredHours;
		} else if (daysWorked[i].day === "Saturday" && daysWorked[i].totalHours(0) > 0) {
			satHourCalc(daysWorked[i].totalHours(), daysWorked[i].startTime, daysWorked[i].endTime);
			oneFiftyHours += sat150hours;
			twoHundredHours += sat200hours;
		} else if (daysWorked[i].day === "Sunday") {
			twoHundredHours += daysWorked[i].totalHours();
		};
	};
};

var runAll = function() {
	addValues();
	addHours();
	document.getElementById('standard').innerHTML = standardHours;
	document.getElementById('overtime').innerHTML = oneFiftyHours;
	document.getElementById('doubletime').innerHTML = twoHundredHours;
};

var reset = function() {
	standardHours = 0;
	oneFiftyHours = 0;
	twoHundredHours = 0;
	document.getElementById('standard').innerHTML = standardHours;
	document.getElementById('overtime').innerHTML = oneFiftyHours;
	document.getElementById('doubletime').innerHTML = twoHundredHours;
};


document.getElementById('submit').addEventListener('click', runAll);
document.getElementById('reset').addEventListener('click', reset);










