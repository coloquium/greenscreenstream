import { DR } from 'demolishedrenderer';
export declare type MaskSettings = {
    opacity: number;
    flipHorizontal: boolean;
    maskBlurAmount: number;
    foregroundColor: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    backgroundColor: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    segmentPerson: {
        flipHorizontal: boolean;
        internalResolution: string;
        segmentationThreshold: number;
        maxDetections: number;
    };
};
export declare class GreenScreenStream {
    useML: boolean;
    canvas: HTMLCanvasElement;
    ctx: WebGL2RenderingContext;
    renderer: DR;
    mediaStream: MediaStream;
    private sourceVideo;
    private cameraSource;
    private chromaKey;
    private maskRange;
    private mainFrag;
    private mainVert;
    private bufferFrag;
    model: any;
    constructor(useML: boolean, backgroudImage?: string, canvas?: HTMLCanvasElement, width?: number, height?: number);
    setChromaKey(r: number, g: number, b: number): void;
    setMaskRange(x: number, y: number): void;
    getColorsFromStream(): {
        palette: any;
        dominant: any;
    };
    private maskStream;
    render(fps?: number, config?: MaskSettings | any): void;
    getMask(target: HTMLCanvasElement, config?: MaskSettings | any): void;
    addVideoTrack(track: MediaStreamTrack): void;
    captureStream(fps?: number): MediaStream;
    static getInstance(useAI: boolean, backgroudImage?: string, canvas?: HTMLCanvasElement, width?: number, height?: number): GreenScreenStream;
    private pixelArray;
    dominant(imageData: ImageData, pixelCount: number): any;
    pallette(imageData: ImageData, pixelCount: number): any;
}
