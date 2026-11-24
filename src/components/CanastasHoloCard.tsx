import { useState, type CSSProperties } from "react";

export const CANASTAS_VARIANTS = ["navidad", "anonimo"] as const;
export type CanastasVariant = (typeof CANASTAS_VARIANTS)[number];

const CANASTAS_BASE: Record<CanastasVariant, string> = {
  navidad: `${import.meta.env.BASE_URL}landing-pages/dark-souls-holo-card-cindermane.html`,
  anonimo: `${import.meta.env.BASE_URL}landing-pages/dark-souls-holo-card.html`,
};

const CANASTAS_TITLES: Record<CanastasVariant, string> = {
  navidad: "Canasta Navideña — Navidad",
  anonimo: "Canasta Navideña — Anónimo",
};

export type CanastasHoloCardProps = {
  className?: string;
  style?: CSSProperties;
  variant?: CanastasVariant | string;
};

export function CanastasHoloCard({
  className = "",
  style,
  variant = "navidad",
}: CanastasHoloCardProps) {
  const safeVariant: CanastasVariant = CANASTAS_VARIANTS.some(
    (v) => v === variant
  )
    ? (variant as CanastasVariant)
    : "navidad";

  // timestamp computed on every render → forces iframe reload
  const [ts] = useState(() => Date.now());
  const src = `${CANASTAS_BASE[safeVariant]}?v=${ts}`;

  return (
    <div
      className={`canastas-holo-card${className ? ` ${className}` : ""}`}
      role="group"
      aria-label={CANASTAS_TITLES[safeVariant]}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0a0f0a",
        pointerEvents: "auto",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <iframe
        key={safeVariant}
        title={CANASTAS_TITLES[safeVariant]}
        src={src}
        loading="eager"
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#0a0f0a",
        }}
      />
    </div>
  );
}