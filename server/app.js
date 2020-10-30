const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(
	cors({
		origin: "http://localhost:8080",
		credentials: true,
	}),
);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`app listening at http://localhost:${port}`);
});
