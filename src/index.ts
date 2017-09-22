import * as MRAID from './mraid/v2/bundle'

let mraid = new MRAID.Main(
	MRAID.PlacementType.inline, 
	{width:320, height: 50, useCustomClose: false, isModal: false},
	{width: 320, height: 50},
	{x:0, y:0, width: 320, height: 50},
	{width: 320, height: 50, offsetX: 0, offsetY: 0, customClosePosition: "top-left", allowOffscreen: false}
)

mraid.addEventListener(MRAID.Event.ready, function(){
	console.log('ready callback triggered');
});

mraid.addEventListener(MRAID.Event.stateChange, function(state){
	console.log('stateChange callback triggered. state:', state);
});

console.log('-before start state', mraid.getState())

mraid.start();

console.log('-after start state', mraid.getState())
console.log('-version', mraid.getVersion())
console.log('-sizeChange exists', mraid.mraidEventMgr.exists(MRAID.Event.sizeChange));
console.log('-get placement type', mraid.getPlacementType())
console.log('-supports calendar event', mraid.supports(MRAID.Features.calendar))
console.log('-supports storePicture event', mraid.supports(MRAID.Features.storePicture))
console.log('-supports tel event', mraid.supports(MRAID.Features.tel))
console.log('-isViewable', mraid.isViewable())