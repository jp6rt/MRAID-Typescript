import MRAID1Event from "../Events/MRAID1Event"
//import { EventListenerCallBackType } from "../Types/EventListenerCallBackType"; //this is not currently used
import  PlacementType from "../Types/PlacementType"
import IExpandProperties from  "./IExpandProperties"
import MRAID1State from "../States/MRAID1State"
import * as global from "../../globals/Global"

interface IMRAID1 {
	addEventListener(event: string, callback: global.Callback): void;
	close(): void;
	expand(url?: string): void;
	getExpandProperties(): IExpandProperties;
	getPlacementType(): string;
	getState(): string;
	getVersion(): string;
	isViewable(): boolean;
	open(url: string): void;
	removeEventListener(event: string, callback: global.Callback): void;
	setExpandProperties(expandProperties: IExpandProperties): void
	useCustomClose(customClose: boolean): void
}

export default IMRAID1