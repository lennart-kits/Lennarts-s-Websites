import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon generated from the brand mark — a rotated square on cobalt. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#2f4bdc",
            borderRadius: 4,
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#ffffff",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
