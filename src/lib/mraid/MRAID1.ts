
import IMRAID1 from './Interfaces/IMRAID1'
import MRAID1Event from './Events/MRAID1Event'
import MRAIDSDKEvent from './Events/MRAIDSDKEvent'
//import { EventListenerCallBackType } from './Types/EventListenerCallBackType'; //this is not currently used
import * as global from '../globals/Global'
import EventMgr from '../utils/EventMgr'
import IExpandProperties from  './Interfaces/IExpandProperties'
import PlacementType from './Types/PlacementType'
import MRAID1State from './States/MRAID1State'

class MRAID1 implements IMRAID1 {
	private state: string;
	private mraidEventMgr: any;
	constructor(private placementType: string, private expandProperties: IExpandProperties){ 
		this.state = MRAID1State.loading;
		this.placementType = PlacementType.inline
		this.mraidEventMgr = new EventMgr(MRAID1Event);		
	}
	init(): void{
		this.state = MRAID1State.default;
		this.mraidEventMgr.dispatch(MRAID1Event.ready);
		this.mraidEventMgr.dispatch('stateChange', 'default');
	}
	addEventListener(event: string, callback: global.Callback): void{
		this.mraidEventMgr.subscribe(event, callback)
	}
	close(): void{

	}
	expand(url?: string): void{

	}
	getExpandProperties(): IExpandProperties {
		return this.expandProperties
	}
	getPlacementType(): string{
		return this.placementType
	}
	getState(): string{
		return this.state
	}
	getVersion(): string{
		return '1.0.0'
	}
	isViewable(): boolean{
		return !0
	}
	open(url: string): void{

	}
	removeEventListener(event: string, callback: global.Callback): void{
		this.mraidEventMgr.unsubscribe(event, callback)
	}
	setExpandProperties(expandProperties: IExpandProperties): void{
		this.expandProperties = expandProperties
	}
	useCustomClose(customClose: boolean): void{

	}
}

export {  
	MRAID1
}
