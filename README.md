# GreenScreenStream

 ## about

Generate a new MediaStream for `<canvas>` ,`<video>`  elements based on the MediaStreamTracks  and a background image just using JavaScript.  After processed and "green screend" you can capture the stream and use it in your RTCPeerConnections for instance.
All rendering is made realtime using a WebGL2 pixel shader (glsl) .

*Regards Magnus Thor*

## comming features 

1. Add custom post-processor shaders.
2. Customize "mask" color , right now is plain green-screen's so bit narrow.
3. Background is now a image texture , but will also be possible to use a provided `<video>` resource.
4.   
## install

npm install greenscreenstream  

## demo
 [https://magnusthor.github.io/greenscreenstream/example](https://magnusthor.github.io/greenscreenstream/example)
> See example folder in repo for implementation 

# GreenScreenStream API

## constructor

     constructor(backgroudImage:  string,
      canvas?:  HTMLCanvasElement, width?:
        number, height?:  number);

or use the static method `GreenScreenStream.getIstance(..args`)

## methods

### addTrack

Adds a `MediaStreamTrack` track (i.e webcam)

    addVideoTrack(track:  MediaStreamTrack):  void;

### render

Start render the new `MediaStream` 

    render(fps?:  number):  void;

### captureStream

Capture the rendered result to a MediaStream that you apply to your `<video>` element.

    captureStream(fps?:  number):  MediaStream;
    
### getInstance

    static  getInstance(backgroudImage:  string,
     canvas?:  HTMLCanvasElement, 
     width?:  number, height?:  number):  GreenScreenStream


## Properties

### canvas:  HTMLCanvasElement;

Canvas element provided / or created . Contains the rendered result .

### ctx:  WebGL2RenderingContext;

WebGL2 Rendering context

### renderer:  DR;
DR is the WebGL Rendering engine used, to perform pixel maipulations.

### mediaStream:  MediaStream;

MediaSteam containing the provided VideoTrack

### video:  HTMLVideoElement;

Internal `<video>` element that is passed to the  `renderer:DR` engine.
