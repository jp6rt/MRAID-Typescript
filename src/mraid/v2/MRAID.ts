import EventMgr from '../../common/EventMgr'

import * as MRAIDV1 from './../v1/bundle'

import Position from './Position'
import Size from './Size'
import ResizeProperties from './ResizeProperties'
import Event from './Event'
import Features from './Features'
import IMRAID from './IMRAID'

import State from './State'

class MRAID extends MRAIDV1.Main implements IMRAID {
	protected supportedFeatures: any;
	constructor(placementType: MRAIDV1.PlacementTypeT, expandProperties: MRAIDV1.ExpandProperties, protected size: Size, protected position: Position, protected resizeProperties: ResizeProperties){
		super(placementType, expandProperties);	
	}
	protected init(): void{
		this.mraidEventMgr = new EventMgr(Event);
		this.supportedFeatures = {
			sms: !0,
			tel: !0,
			calendar: !1,
			storePicture: !1,
			inlineVideo: !0
		}
	}
	/*
	start(): void{
		super.start()
		this.state = State.resized; ??  state is typed with V1 interface
	}
	*/
	getVersion(): string{
		return '2.0.0'
	}
	getCurrentPosition(): Position{
		return this.position
	}
	getDefaultPosition(): Position{
		return this.position
	}
	getMaxSize(): Size{
		return this.size
	}
	getResizeProperties(): ResizeProperties{
		return this.resizeProperties
	}
	getScreenSize(): Size{
		return this.size
	}
	playVideo(uri: string): void{

	}
	setResizeProperties(resizeProperties: ResizeProperties): void{		
		this.resizeProperties = resizeProperties
	}
	supports(feature: string): boolean{
		return Features.hasOwnProperty(feature) && this.supportedFeatures[feature]
	}
}

export { MRAID }