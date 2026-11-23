import { useState } from "react";
import { CanastasHoloCard } from "./components/CanastasHoloCard";

export function Scene() {
  const [variant, setVariant] = useState<"navidad" | "anonimo">("navidad");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#0a0f0a",
        overflow: "hidden",
      }}
    >
      <CanastasHoloCard variant={variant} />
    </div>
  );
}