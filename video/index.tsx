import React from "react";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  interpolate,
  registerRoot,
  staticFile,
  useCurrentFrame,
} from "remotion";

const WIDTH = 760;
const HEIGHT = 900;
const FPS = 30;
const DURATION_IN_FRAMES = 192;

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const Cursor = ({ x, y }: { x: number; y: number }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 30 38"
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 30,
      height: 38,
      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.65))",
    }}
  >
    <path
      d="M3 2.5 25 22h-11l6.2 12-6.1 3L8 24.8l-5 7.7V2.5Z"
      fill="#f9fbff"
      stroke="#0a0d12"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ClickPulse = ({
  frame,
  start,
  x,
  y,
}: {
  frame: number;
  start: number;
  x: number;
  y: number;
}) => {
  const progress = interpolate(frame, [start, start + 12], [0, 1], clamp);
  const opacity = interpolate(frame, [start, start + 5, start + 12], [0, 0.55, 0], clamp);

  if (frame < start || frame > start + 12) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: x - 28,
        top: y - 28,
        width: 56,
        height: 56,
        border: "3px solid rgba(120, 169, 255, 0.92)",
        borderRadius: "50%",
        opacity,
        scale: interpolate(progress, [0, 1], [0.35, 1.25], clamp),
      }}
    />
  );
};

const PortDeckMenuDemo = () => {
  const frame = useCurrentFrame();

  const cursorX =
    frame < 92
      ? interpolate(frame, [0, 34], [360, 640], {
          ...clamp,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : frame < 150
        ? interpolate(frame, [92, 130], [640, 86], {
            ...clamp,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })
        : interpolate(frame, [150, DURATION_IN_FRAMES - 1], [86, 360], {
            ...clamp,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

  const cursorY =
    frame < 92
      ? interpolate(frame, [0, 34], [266, 20], {
          ...clamp,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : frame < 150
        ? interpolate(frame, [92, 130], [20, 250], {
            ...clamp,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })
        : interpolate(frame, [150, DURATION_IN_FRAMES - 1], [250, 266], {
            ...clamp,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

  const windowOpacity = interpolate(
    frame,
    [37, 53, 132, 148],
    [0, 1, 1, 0],
    clamp,
  );

  const menuSelectionOpacity = interpolate(
    frame,
    [34, 48, 132, 146],
    [0, 1, 1, 0],
    clamp,
  );

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background:
          "radial-gradient(circle at 78% 28%, rgba(65, 108, 184, 0.2), transparent 34%), linear-gradient(145deg, #0c141d 0%, #05080c 55%, #08111a 100%)",
        color: "#f4f7fb",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.58,
          background:
            "repeating-linear-gradient(120deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 28px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "0 0 auto",
          display: "flex",
          height: 56,
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(6, 10, 15, 0.82)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
          backdropFilter: "blur(20px)",
          fontSize: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 25, paddingLeft: 24 }}>
          <span style={{ fontWeight: 730 }}>Finder</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>

        <div
          style={{
            position: "absolute",
            right: 22,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <span style={{ color: "rgba(244,247,251,0.72)" }}>⌁</span>
          <div
            style={{
              display: "grid",
              width: 42,
              height: 32,
              placeItems: "center",
              border: "1px solid rgba(153,185,255,0.62)",
              borderRadius: 8,
              background: `rgba(63, 111, 219, ${menuSelectionOpacity * 0.95})`,
              boxShadow:
                menuSelectionOpacity > 0.02
                  ? "0 8px 22px rgba(63, 111, 219, 0.34), 0 1px 0 rgba(255,255,255,0.25) inset"
                  : "0 1px 0 rgba(255,255,255,0.08) inset",
            }}
          >
            <Img
              src={staticFile("portdeck-mark.svg")}
              style={{ display: "block", width: 29, height: "auto" }}
            />
          </div>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>9:41 AM</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 30,
          top: 67,
          width: 570,
          height: 775,
          overflow: "hidden",
          border: "1px solid rgba(220, 231, 246, 0.24)",
          borderRadius: 20,
          boxShadow: "0 42px 110px rgba(0,0,0,0.66), 0 1px 0 rgba(255,255,255,0.08) inset",
          opacity: windowOpacity,
          scale: interpolate(windowOpacity, [0, 1], [0.975, 1], clamp),
          translate: `0 ${interpolate(windowOpacity, [0, 1], [-12, 0], clamp)}px`,
          transformOrigin: "92% 0%",
        }}
      >
        <Img
          src={staticFile("portdeck-demo-window.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            height: "auto",
          }}
        />
      </div>

      <ClickPulse frame={frame} start={34} x={655} y={36} />
      <ClickPulse frame={frame} start={130} x={101} y={268} />
      <Cursor x={cursorX} y={cursorY} />
    </AbsoluteFill>
  );
};

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
