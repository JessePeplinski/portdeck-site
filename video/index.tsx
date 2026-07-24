import React from "react";
import {
  AbsoluteFill,
  Composition,
  Img,
  registerRoot,
  staticFile,
} from "remotion";

const WIDTH = 500;
const HEIGHT = 680;
const FPS = 30;
const DURATION_IN_FRAMES = 192;

const PortDeckMenuDemo = () => (
  <AbsoluteFill style={{ overflow: "hidden", background: "#1c1c1e" }}>
    <Img
      src={staticFile("portdeck-demo-window.png")}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </AbsoluteFill>
);

const RemotionRoot = () => (
  <Composition
    id="PortDeckMenuDemo"
    component={PortDeckMenuDemo}
    width={WIDTH}
    height={HEIGHT}
    fps={FPS}
    durationInFrames={DURATION_IN_FRAMES}
  />
);

registerRoot(RemotionRoot);
