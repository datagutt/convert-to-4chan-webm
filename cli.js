#!/usr/bin/env node
'use strict';
var argv = require('optimist').argv,
	pkg = require('./package.json');
var convert = require('./index');
var input = argv.i || argv.input;
var output = argv.o || argv.output;
var duration = argv.d || argv.duration;

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ convert-to-4chan-webm [-iod]');
	console.log('  [-h | --help]');
	console.log('  [-i | --input]');
	console.log('  [-o | --output]');
	console.log('  [-d | --duration]');
	console.log('');
}

if(!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1){
	help();
	return;
}

convert(input, output, duration, function(err, output){
	if(err){
		console.error(err);
		process.exit(1);
		return;
	}

	console.log('Converted file is available at ' + output);
});
