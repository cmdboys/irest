function randomRange(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
}
function trim(str){
    return str.replace(/[\n\t\b\s]/g,'')
}

module.exports = {
	randomRange: randomRange,
    trim: trim
}