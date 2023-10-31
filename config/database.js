const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL  = "mongodb+srv://armanaligpj:8X9ZG52kqEFqxUlm@cluster0.qutipge.mongodb.net/"

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
