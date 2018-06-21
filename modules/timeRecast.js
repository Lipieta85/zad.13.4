function timeRecast(nSeconds) {

	var hours = Math.floor(nSeconds / 3600);
	var minutes = Math.floor(nSeconds / 60) - (hours * 60);
	var seconds = (nSeconds % 60).toFixed(0);

	if (seconds < 3600) {
	  return minutes + 'minutes ' + seconds + 'seconds';
	} else 
	return hours + 'hours ' + minutes + 'minutes ' + seconds + 'seconds';
  }
  
  
	exports.time = timeRecast
  