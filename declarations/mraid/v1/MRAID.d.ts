import StateT from './StateT';
import PlacementTypeT from './PlacementTypeT';
import EventT from './EventT';
import ExpandProperties from './ExpandProperties';
import IMRAID from './IMRAID';
declare class MRAID implements IMRAID {
    protected placementType: PlacementTypeT;
    protected expandProperties: ExpandProperties;
    protected state: StateT;
    mraidEventMgr: any;
    constructor(placementType: PlacementTypeT, expandProperties: ExpandProperties);
    protected init(): void;
    start(): void;
    addEventListener(event: EventT, callback: Function): void;
    close(): void;
    expand(url?: string): void;
    getExpandProperties(): ExpandProperties;
    getPlacementType(): PlacementTypeT;
    getState(): StateT;
    getVersion(): string;
    isViewable(): boolean;
    open(url: string): void;
    removeEventListener(event: EventT, callback: Function): void;
    setExpandProperties(expandProperties: ExpandProperties): void;
    useCustomClose(customClose: boolean): void;
}
export { MRAID };
