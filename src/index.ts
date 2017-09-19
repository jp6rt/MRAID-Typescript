
import { MRAID1 } from './lib/mraid/MRAID1'
import MRAID1Event from './lib/mraid/Events/MRAID1Event'
import PlacementType from './lib/mraid/Types/PlacementType'
import MRAID1State from './lib/mraid/States/MRAID1State'
import IExpandProperties from  './lib/mraid/Interfaces/IExpandProperties'

let mraid = new MRAID1(PlacementType.inline, {width:320, height: 50, useCustomClose: false, isModal: false});

mraid.addEventListener(MRAID1Event.ready, function(){
	console.log('ready callback triggered');
});

mraid.addEventListener(MRAID1Event.stateChange, function(state){
	console.log('stateChange callback triggered. state:', state);
});

console.log(':::before init state', mraid.getState())

mraid.init();

console.log(':::after init state', mraid.getState())
