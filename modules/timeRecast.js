var os = require('os');

function minutesRecast(seconds) {

    var seconds = Math.floor(os.uptime());
    minutes = Math.floor(seconds / 60);
    
	return + minutes + ' minutes '
}

function hoursRecast(seconds) {

    var seconds = Math.floor(os.uptime());
    var hours = Math.floor(seconds / 3600);

    return + hours + ' hours '
}

exports.hours = hoursRecast;
exports.minutes = minutesRecast;
