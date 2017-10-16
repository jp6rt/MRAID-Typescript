import IMRAIDV1 from './../v1/IMRAID';
import Position from './Position';
import Size from './Size';
import ResizeProperties from './ResizeProperties';
interface IMRAID extends IMRAIDV1 {
    getCurrentPosition(): Position;
    getDefaultPosition(): Position;
    getMaxSize(): Size;
    getResizeProperties(): ResizeProperties;
    getScreenSize(): Size;
    playVideo(uri: string): void;
    setResizeProperties(resizeProperties: ResizeProperties): void;
    supports(feature: string): boolean;
}
export default IMRAID;
