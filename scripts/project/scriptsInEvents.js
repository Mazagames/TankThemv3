"use strict";



{
	const scriptsInEvents = {

		async Mainevents_Event45_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        type: "over"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event45_Act2(runtime, localVars)
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

		async Mainevents_Event45_Act3(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp,
						type: "over"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event46_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       userID: data.userId,
			        type: "over"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event46_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp,
						type: "over"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event52_Act15(runtime, localVars)
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

		async Mainevents_Event57_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			
				
				 gameManager.onGameStart()
				var data = gameManager.onGameInit()
				
			       
					
					 data = JSON.parse(data)
					 
			     var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					type: "Pause",
					score: runtime.globalVars.SCORE,
			        highScore: runtime.globalVars.HIGHSCORE,
					
					}
							
					 try {
					 
			      var data = JSON.stringify(obj);
				
			          gameManager.onTrack("gamePause", data)
			    } catch (e) {
				
			        gameManager.onError(e.stack.toString())
			    }
				
			    
			}
		},

		async Mainevents_Event243_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        type: "over"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event243_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp,
						userID: userId,
						type: "over"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event245_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        type: "over"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event245_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
						userID: userId,
			            timestamp: timestamp,
						type: "over"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Mainevents_Event245_Act3(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					 		
					 runtime.globalVars.SCORE *= 2; 
				
					 (runtime.callFunction('gameover', [0,1]))
			
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
					 runtime.globalVars.SCORE = runtime.globalVars.SCORE; 
					  
					  (runtime.callFunction('gameover', [0,1]))
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Upgrade_Event40_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					 		
					 runtime.globalVars.missileon += 1; 
			
			    } else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
					 runtime.globalVars.missileon += 0; 
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Menum_Event1_Act3(runtime, localVars)
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

		async Menum_Event3_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        startType: "new"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameStart', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menum_Event3_Act5(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp,
						startType: "new"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameStart', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menum_Event18_Act1(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        gameManager.onGameStart()
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Menum_Event18_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        startType: "new"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameStart', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
