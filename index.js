module.exports = function btoaPro(x){
	return btoa(btoa(encodeURIComponent(x)))
}
/*
import btoa from "btoa"
const btoaPro = x => btoa(btoa(encodeURIComponent(x)))
export default btoaPro
*/
