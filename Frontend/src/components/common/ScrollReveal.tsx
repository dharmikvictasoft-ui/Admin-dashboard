import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  origin?: "top" | "bottom" | "left" | "right";
};

export default function ScrollReveal({ children, delay = 0, origin = "bottom" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ client-side only
    if (typeof window === "undefined") return;

    import("scrollreveal").then((ScrollRevealLib) => {
      ScrollRevealLib.default().reveal(ref.current!, {
        delay: delay * 1000,
        distance: "20px",
        duration: 600,
        easing: "ease-out",
        origin: origin,
        opacity: 0,
        cleanup: true,
        reset: false, // ❌ no re-trigger → no scrollbar jump
      });
    });
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
