var path = require('path'),
	FFmpeg = require('fluent-ffmpeg');
module.exports = function(input, output, duration, callback){
	if(!output){
		output = input.replace(path.extname(input), '.webm');
	}
	new FFmpeg({
		source: file
	})
	.withNoAudio()
	.withVideoCodec('libvpx')
	.withVideoBitrate('1500k', true)
	.setDuration(duration || '2:00')
	.addOption('-crf', 4)
	.toFormat('webm')
	.on('error', function(err){
		callback(err);
	})
	.on('end', function(){
		callback(null, output);
	})
	.saveToFile(output);
};
