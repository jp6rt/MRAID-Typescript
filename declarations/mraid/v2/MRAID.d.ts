import * as MRAIDV1 from './../v1/bundle';
import Position from './Position';
import Size from './Size';
import ResizeProperties from './ResizeProperties';
import IMRAID from './IMRAID';
declare class MRAID extends MRAIDV1.Main implements IMRAID {
    protected size: Size;
    protected position: Position;
    protected resizeProperties: ResizeProperties;
    protected supportedFeatures: any;
    constructor(placementType: MRAIDV1.PlacementTypeT, expandProperties: MRAIDV1.ExpandProperties, size: Size, position: Position, resizeProperties: ResizeProperties);
    protected init(): void;
    getVersion(): string;
    getCurrentPosition(): Position;
    getDefaultPosition(): Position;
    getMaxSize(): Size;
    getResizeProperties(): ResizeProperties;
    getScreenSize(): Size;
    playVideo(uri: string): void;
    setResizeProperties(resizeProperties: ResizeProperties): void;
    supports(feature: string): boolean;
}
export { MRAID };
