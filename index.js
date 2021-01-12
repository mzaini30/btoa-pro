module.exports = function btoaPro(x){
	return btoa(btoa(encodeURIComponent(x)))
}