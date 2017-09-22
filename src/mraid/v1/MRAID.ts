import EventMgr from '../../common/EventMgr'
import callback from '../../common/callback'

import State from './State'
import PlacementType from './PlacementType'
import Event from './Event'
import ExpandProperties from './ExpandProperties'
import IMRAID from './IMRAID'

class MRAID implements IMRAID {
	private state: string;
	private mraidEventMgr: any;
	constructor(private placementType: string, private expandProperties: ExpandProperties){ 
		this.state = State.loading;
		this.placementType = PlacementType.inline
		this.mraidEventMgr = new EventMgr(Event);
	}
	init(): void{
		this.state = State.default;
		this.mraidEventMgr.dispatch(Event.ready);
		this.mraidEventMgr.dispatch('stateChange', 'default');
	}
	addEventListener(event: string, callback: callback): void{
		this.mraidEventMgr.subscribe(event, callback)
	}
	close(): void{

	}
	expand(url?: string): void{

	}
	getExpandProperties(): ExpandProperties {
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
	removeEventListener(event: string, callback: callback): void{
		this.mraidEventMgr.unsubscribe(event, callback)
	}
	setExpandProperties(expandProperties: ExpandProperties): void{
		this.expandProperties = expandProperties
	}
	useCustomClose(customClose: boolean): void{

	}
}

export { MRAID }
