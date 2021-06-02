"use strict";



{
	const scriptsInEvents = {

		async Game_Event128_Act10(runtime, localVars)
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

		async Game_Event136_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					score: runtime.globalVars.bestcoin,
			        highScore: runtime.globalVars.HIGHSCORE,
			        info: encryption.getInfo(runtime.globalVars.bestcoin, 10, 1)
			    }
			    try {
			        var score = JSON.stringify(obj)
			        gameManager.onGameOver(score)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Game_Event144_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: runtime.globalVars.bestcoin,
			            timestamp: timestamp
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gamePause', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Game_Event135_Act1(runtime, localVars)
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

		async Menu_Event6_Act1(runtime, localVars)
		{
			runtime.globalVars.reward = runtime.globalVars.SCORE + 1500;
			
		},

		async Upgrade_Event45_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					 		
					 runtime.globalVars.SCORE += 2001; 
			
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
					 runtime.globalVars.SCORE += 1; 
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

		async Menu_Event7_Act5(runtime, localVars)
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

		async Menu_Event7_Act9(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
				
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					
				
			
			runtime.globalVars.SCORE = runtime.globalVars.nore;
			
				
				// runtime.globalVars.SCORE += 4000;
				
				
					
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.SCORE = runtime.globalVars.nore;
				
				runtime.globalVars.SCORE = runtime.globalVars.reward;
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Menu_Event7_Act13(runtime, localVars)
		{
				const instance = runtime.objects.boomreward.getFirstInstance();
			instance.x += 50;
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
