var movie = function(rtm,channel) {
	console.log('영화를 추천합니다.');
	rtm.sendMessage('취향에 맞춘 영화를 추천해드릴게요.',channel);

	//rtm.sendMessage('좋아하는 영화 하나를 알려주실래요?',channel);
}

module.exports = movie;
