"use strict";



{
	const scriptsInEvents = {

		async Mainevents_Event122_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			    typeof gameManager.onCheckRewardedVideoAds === 'function'
			) {
			    try {
			        gameManager.onCheckRewardedVideoAds('rewardAdsExist')
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event123_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					score: runtime.globalVars.SCORE,
			        highScore: runtime.globalVars.HIGHSCORE,
			        info: encryption.getInfo(runtime.globalVars.SCORE, 10, 1)
			    }
			    try {
			        var score = JSON.stringify(obj)
			        gameManager.onGameOver(score)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menu_Event3_Act7(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			    try {
			       cc.game.on('onAdPlayed', function(result){
				     if (result.status === 0) {
					 
			        // completely watched the ad. can give reward
					runtime.globalVars.HIGHSCORE = runtime.globalVars.HIGHSCORE + runtime.globalVars.REWARD;
			    } else {
			        // did not watch the ad completely. no reward
					runtime.globalVars.HIGHSCORE = runtime.globalVars.HIGHSCORE;
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Menu_Event5_Act5(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('On Game Over', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menu_Event12_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        gameManager.onGameStart()
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menu_Event14_Act1(runtime, localVars)
		{
			
			if (typeof gameManager !== 'undefined' && 
			    typeof gameManager.onCheckRewardedVideoAds === 'function'
			) {
			    try {
				
			        cc.game.on('rewardAdsExist', 
					
					function(result){
				     if (result.status === 0) {
					 runtime.objects.Sprite.destroy;
			        // show sprite
					//debugger
			    } else {
			        // hide sprite
					
			    }
				   
				   })
				   
					
					
			        gameManager.onCheckRewardedVideoAds('rewardAdsExist')
					
					
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
