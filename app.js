const express = require("express");

const server = express();
const path = require("path");

server.use("/", express.static(path.join(__dirname, "./dist")));

server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/dist", "index.html"));
});

server.listen(process.env.NODE_ENV === "production" ? process.env.PORT : 8080);
