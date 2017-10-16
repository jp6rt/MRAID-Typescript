interface ResizeProperties {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    customClosePosition: "top-left" | "top-right" | "center" | "bottomleft" | "bottom-right" | "top-center" | "bottom-center";
    allowOffscreen?: boolean;
}
export default ResizeProperties;
