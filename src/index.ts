import * as MRAIDV1 from './mraid/v1/bundle'

let mraid = new MRAIDV1.Main(MRAIDV1.PlacementType.inline, {width:320, height: 50, useCustomClose: false, isModal: false});

mraid.addEventListener(MRAIDV1.Event.ready, function(){
	console.log('ready callback triggered');
});

mraid.addEventListener(MRAIDV1.Event.stateChange, function(state){
	console.log('stateChange callback triggered. state:', state);
});

console.log(':::before init state', mraid.getState())

mraid.init();

console.log(':::after init state', mraid.getState())