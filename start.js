const path = require("path");
const Runner = require("moleculer").Runner;

const runner = new Runner();

runner
	.start([
		process.argv[0],
		__filename,
		"--config",
		path.join(__dirname, "moleculer.config.js"),
		//"--repl",
		path.join(__dirname, "services"),
	])
	.catch((err) => {
		console.error(err.message);
		process.exit(1);
	});
