"use client";

import { useEffect, useRef, useState } from "react";
import { KoooRingsCanvas } from "./kooo-rings-canvas";

// 3D rings that only render while they are on screen.
export function RingsMark({ color, className }: { color?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} aria-hidden>
      {visible && <KoooRingsCanvas color={color} active={visible} />}
    </div>
  );
}
