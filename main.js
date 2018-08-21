var standardHours = 0;
var oneFiftyHours = 0;
var twoHundredHours = 0;
var sat150hours = 0;
var sat200hours = 0;
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var daysWorked = [
	{
		day: "Monday",
		startTime: 7,
		endTime: 15.5,
		break: 0.5,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Tuesday",
		startTime: 7,
		endTime: 17.5,
		break: 0.5,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Wednesday",
		startTime: 7,
		endTime: 11.5,
		break: 0.5,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Thursday",
		startTime: 7,
		endTime: 15.5,
		break: 0.5,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Friday",
		startTime: 7,
		endTime: 15.5,
		break: 0.5,
		totalHours: function() {
			var totalCalc = this.endTime - this.startTime - this.break;
			return totalCalc;
		}
	},
	{
		day: "Saturday",
		startTime: 7,
		endTime: 15.5,
		break: 0.5,
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

// Calculates 100% hours

var standardHourCalc = function(hours) {
	if (hours < 8) {
		return hours;
	} else {
		return 8;
	};
};
// Calculates 150% hours

var oneFiftyHourCalc = function(hours) {
	if (hours <= 10 && hours > 8) {
		return hours - 8;
	} else if (hours > 10) {
		return 2;
	} else {
		return 0;
	}
};

// Calculates 200% hours

var twoHundredHourCalc = function(hours) {
	if (hours > 10) {
		return hours - 10;
	} else {
		return 0;
	};
};

// Sets saturday hours

var satHourCalc = function(hours) {
	if (hours > 0 && hours < 4) {
		sat150hours = 2;
		sat200hours = 2;
	} else {
		sat150hours = 2;
		sat200hours = hours - 2;
	};
};

// Loops through days worked and adds hours to hour variables.

for (var i = 0; i < daysWorked.length; i++) {
	if (weekDays.includes(daysWorked[i].day)) {
		var calculateStandardHours = standardHourCalc(daysWorked[i].totalHours());
			standardHours += calculateStandardHours;
		var calculateOneFiftyHours = oneFiftyHourCalc(daysWorked[i].totalHours());
			oneFiftyHours += calculateOneFiftyHours;
		var calculateTwoHundredHours = twoHundredHourCalc(daysWorked[i].totalHours());
			twoHundredHours += calculateTwoHundredHours;
	} else if (daysWorked[i].day === "Saturday" && daysWorked[i].totalHours(0) > 0) {
		satHourCalc(daysWorked[i].totalHours());
		oneFiftyHours += sat150hours;
		twoHundredHours += sat200hours;
	} else if (daysWorked[i].day === "Sunday") {
		twoHundredHours += daysWorked[i].totalHours();
	}
};



console.log(standardHours);
console.log(oneFiftyHours);
console.log(twoHundredHours);






