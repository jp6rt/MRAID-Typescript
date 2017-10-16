import ExpandProperties from './ExpandProperties';
import EventT from './EventT';
import PlacementTypeT from './PlacementTypeT';
import StateT from './StateT';
interface IMRAID {
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
export default IMRAID;
