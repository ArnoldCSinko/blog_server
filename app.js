const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());
app.use(cors());

const knex = require("knex");
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;

const db = knex({
	client: "pg",
	connection: {
		host: host,
		user: user,
		password: password,
		database: database
	}
});

app.get("/", (req, res) => res.json("Hello World"));

const PORT = 3000;
app.listen(PORT, () =>
	console.log(`server is listening on port ${PORT}`)
);
