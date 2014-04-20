var path = require('path'),
	FFmpeg = require('fluent-ffmpeg');
module.exports = function(input, output, duration, callback){
	if(!output){
		output = input.replace(path.extname(input), '.webm');
	}
	new FFmpeg({
		source: input
	})
	.withNoAudio()
	.withVideoCodec('libvpx')
	.withVideoBitrate('500k')
	.setDuration(duration || '2:00')
	.addOption('-crf', 20)
	.toFormat('webm')
	.on('error', function(err, stdout, stderr){
		callback(err);
	})
	.on('end', function(){
		callback(null, output);
	})
	.saveToFile(output);
};
