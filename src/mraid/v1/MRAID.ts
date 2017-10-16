import EventMgr from '../../common/EventMgr'
import State from './State'
import StateT from './StateT'
import PlacementType from './PlacementType'
import PlacementTypeT from './PlacementTypeT'
import Event from './Event'
import EventT from './EventT'
import ExpandProperties from './ExpandProperties'
import IMRAID from './IMRAID'

class MRAID implements IMRAID {
	protected state: StateT;
	public mraidEventMgr: any;
	constructor(protected placementType: PlacementTypeT, protected expandProperties: ExpandProperties){ 
		this.state = State.loading;
		this.placementType = PlacementType.inline;
		this.init();
	}
	protected init(): void{		
		this.mraidEventMgr = new EventMgr(Event);
	}
	start(): void{
		this.state = State.default;
		this.mraidEventMgr.dispatch(Event.ready);
		this.mraidEventMgr.dispatch('stateChange', 'default');
	}
	addEventListener(event: EventT, callback: Function): void{
		this.mraidEventMgr.subscribe(event, callback)
	}
	close(): void{

	}
	expand(url?: string): void{

	}
	getExpandProperties(): ExpandProperties {
		return this.expandProperties
	}
	getPlacementType(): PlacementTypeT{
		return this.placementType
	}
	getState(): StateT{
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
	removeEventListener(event: EventT, callback: Function): void{
		this.mraidEventMgr.unsubscribe(event, callback)
	}
	setExpandProperties(expandProperties: ExpandProperties): void{
		this.expandProperties = expandProperties
	}
	useCustomClose(customClose: boolean): void{

	}
}

export { MRAID }
