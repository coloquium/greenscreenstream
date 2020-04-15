import { GreenScreenStream } from "../../lib";
document.addEventListener("DOMContentLoaded", () => {
    let instance = GreenScreenStream.getInstance(true, "../assets/beach.jpg");
    navigator.getUserMedia({ video: { width: 800, height: 450 }, audio: false }, (m) => {
        instance.addVideoTrack(m.getTracks()[0]);
        instance.render(25);
        document.querySelector("video").srcObject = instance.captureStream(25);
    }, (e) => console.error(e));
    window["gss"] = instance;
});
