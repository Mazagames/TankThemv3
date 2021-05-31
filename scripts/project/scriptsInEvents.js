"use strict";



{
	const scriptsInEvents = {

		async Mainevents_Event135_Act1(runtime, localVars)
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

		async Mainevents_Event136_Act1(runtime, localVars)
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

		async Mainevents_Event136_Act2(runtime, localVars)
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

		async Mainevents_Event144_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gamePause', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Upgrade_Event45_Act1(runtime, localVars)
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
					runtime.globalVars.reward = runtime.globalVars.SCORE + 3000;
			
			
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Upgrade_Event46(runtime, localVars)
		{
			
		},

		async Menu_Event3_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        gameManager.onGameStart()
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menu_Event6_Act5(runtime, localVars)
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

		async Menu_Event6_Act11(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
				
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					
					c3_callFunction("rewardnew",[])
					
					//   runtime.setReturnValue(rewardnew());
					 
				//	rewardnew(runtime);
					 
					 //rutime.rewardnew(runtime);
					 //runtime.rewardnew();
					 //rewardnew(runtime);
			        // completely watched the ad. can give reward
					// runtime.globalVars.SCORE = runtime.globalVars.SCORE + runtime.globalVars.REWARD;
					//runtime.globalVars.Variable1 = add(localVars.firstNumber, localVars.secondNumber);
					//runtime.globalVars.reward = runtime.globalVars.SCORE + 3000;
			
			//runtime.callFunction.rewardnew(rutime);
			
			
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Menu_Event7_Act1(runtime, localVars)
		{
			runtime.globalVars.reward = runtime.globalVars.SCORE + 2500;
			
		},

		async Menu_Event9_Act5(runtime, localVars)
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

		async Menu_Event16_Act1(runtime, localVars)
		{
			
			if (typeof gameManager !== 'undefined' && 
			    typeof gameManager.onCheckRewardedVideoAds === 'function'
			) {
			    try {
				
			        cc.game.on('rewardAdsExist', 
					
					function(result){
				     if (result.status === 0) {
				
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
