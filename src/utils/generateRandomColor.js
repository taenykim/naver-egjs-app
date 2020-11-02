const generateRandomColor = base =>
	Array(6)
		.fill()
		.reduce((acc, _) => acc + base[Math.floor(Math.random() * base.length)], "#");

export default generateRandomColor;
