export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		setInterval(() => {showAlert('hi')}, 3000, 'interval1')
	},
	async myFun2 () {
		clearInterval('interval1')
	}
}