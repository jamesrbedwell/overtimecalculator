var daysWorked = [
{
	day: "Monday",
	startTime: 0
},
{
	day: "Tuesday",
	startTime: 0
},
{
	day: "Wednesday",
	startTime: 0	 
},
{
	day: "Thursday",
	startTime: 0
},
{
	day: "Friday",
	startTime: 0	 
},
{
	day: "Saturday",
	startTime: 0
},
{
	day: "Sunday",
	startTime: 0
}
];

 var getStartTime = function() {
 	for (var i = 0; i < daysWorked.length; i++) {
 		daysId = document.getElementById(daysWorked[i].day);
 		let getTime = document.getElementsByName('startTime').value;
 		daysWorked[i].startTime = getTime;
 	};
 };
//getStartTime();
//console.log(daysWorked);
