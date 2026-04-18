import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background font-mono text-lg font-bold">
          O
          <span className="absolute -inset-1 rounded-xl border border-foreground/20 animate-ping" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Loading workspace
        </div>
      </div>
    </div>
  );
}
