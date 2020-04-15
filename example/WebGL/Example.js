import { GreenScreenStream } from "../../lib";
document.addEventListener("DOMContentLoaded", () => {
    let instance = GreenScreenStream.getInstance(false, "../assets/beach.jpg");
    let customChromaKey = {
        r: 0,
        g: 0,
        b: 0
    };
    navigator.getUserMedia({ video: { width: 800, height: 450 }, audio: false }, (m) => {
        instance.addVideoTrack(m.getTracks()[0]);
        const detectedColor = document.querySelector(".dominates");
        detectedColor.addEventListener("click", () => {
            instance.setChromaKey(customChromaKey.r, customChromaKey.g, customChromaKey.b);
        });
        const interrval = setInterval(() => {
            let colors = instance.getColorsFromStream();
            let d = colors.dominant;
            const s = `rgb(${d[0]},${d[1]},${d[2]}`;
            detectedColor.style.background = s;
            customChromaKey.r = d[0] / 255;
            customChromaKey.g = d[1] / 255;
            customChromaKey.b = d[2] / 255;
        }, 1000 * 2);
        instance.render();
        document.querySelector("video").srcObject = instance.captureStream(25);
        detectedColor.addEventListener("click", () => {
            instance.setChromaKey(customChromaKey.r, customChromaKey.g, customChromaKey.b);
        });
    }, (e) => console.error(e));
    window["gss"] = instance;
});
