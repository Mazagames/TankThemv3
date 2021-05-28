"use strict";



{
	const scriptsInEvents = {

		async Mainevents_Event125_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			    typeof gameManager.onShowRewardedVideoAds === 'function'
			) {
			    try {
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event132_Act1(runtime, localVars)
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

		async Mainevents_Event133_Act1(runtime, localVars)
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

		async Menu_Event3_Act10(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			    try {
			       cc.game.on('onAdPlayed', function(result){
				     if (result.status === 0) {
					 
			        // completely watched the ad. can give reward
					// runtime.globalVars.SCORE = runtime.globalVars.SCORE + runtime.globalVars.REWARD;
					//runtime.globalVars.Variable1 = add(localVars.firstNumber, localVars.secondNumber);
					runtime.globalVars.reward = runtime.globalVars.SCORE + 1550;
			
			
			    } else {
			        // did not watch the ad completely. no reward
					runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
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

		async Menu_Event11_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        gameManager.onGameStart()
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menu_Event13_Act1(runtime, localVars)
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
