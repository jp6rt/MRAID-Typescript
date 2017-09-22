import * as MV1 from './mraid/v1/bundle'

let mraid = new MV1.MRAID(MV1.PlacementType.inline, {width:320, height: 50, useCustomClose: false, isModal: false});

mraid.addEventListener(MV1.Event.ready, function(){
	console.log('ready callback triggered');
});

mraid.addEventListener(MV1.Event.stateChange, function(state){
	console.log('stateChange callback triggered. state:', state);
});

console.log(':::before init state', mraid.getState())

mraid.init();

console.log(':::after init state', mraid.getState())