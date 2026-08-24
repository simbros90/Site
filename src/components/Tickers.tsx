import { useEffect, useState } from "react";
import { BREAKING_ITEMS, MARKETS, type MarketQuote } from "../data/news";
import { TrendUpIcon, TrendDownIcon } from "./icons";

export function BreakingBar() {
  const items = [...BREAKING_ITEMS, ...BREAKING_ITEMS];
  return (
    <div className="marquee overflow-hidden border-b border-deepred bg-timesred text-paper" style={{ ["--marquee-dur" as never]: "38s" }}>
      <div className="flex items-stretch">
        <p className="z-10 flex shrink-0 items-center gap-2 bg-deepred px-4 py-2 font-caslon text-[0.68rem] uppercase tracking-[0.22em] sm:px-5">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-paper" />
          Breaking
        </p>
        <div className="marquee-track items-center" style={{ animationDirection: "normal" }}>
          <ul className="flex shrink-0 items-center">
            {items.map((b, i) => (
              <li
                key={i}
                aria-hidden={i >= BREAKING_ITEMS.length}
                className="flex items-center whitespace-nowrap font-serif text-[0.95rem] italic"
              >
                <span className="mx-6 text-paper/60">&#10022;</span>
                <span className="cursor-pointer transition-opacity hover:opacity-75">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface LiveQuote extends MarketQuote {
  flash: number; // increments to restart animation
  dir: 1 | -1;
}

export function MarketsStrip() {
  const [quotes, setQuotes] = useState<LiveQuote[]>(() =>
    MARKETS.map((m) => ({ ...m, flash: 0, dir: (m.change >= 0 ? 1 : -1) as 1 | -1 }))
  );
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const clock = setInterval(() => setNow(new Date()), 1000);
    const tick = setInterval(() => {
      setQuotes((prev) =>
        prev.map((q, i) => {
          // update one or two quotes per tick
          const chosen = (i + Math.floor(Date.now() / 2800)) % prev.length;
          const chosen2 = (chosen + 3) % prev.length;
          if (i !== chosen && i !== chosen2) return q;
          const drift = (Math.random() - 0.5) * 0.0016;
          const value = q.value * (1 + drift);
          const change = q.change + drift * 100;
          return { ...q, value, change, dir: (drift >= 0 ? 1 : -1) as 1 | -1, flash: q.flash + 1 };
        })
      );
    }, 2800);
    return () => {
      clearInterval(clock);
      clearInterval(tick);
    };
  }, []);

  const fmt = (q: LiveQuote) =>
    q.value.toLocaleString("en-GB", {
      minimumFractionDigits: q.digits,
      maximumFractionDigits: q.digits,
    });

  const doubled = [...quotes, ...quotes];

  return (
    <section aria-label="Markets" className="border-y border-navysoft bg-navy text-paper">
      <div className="mx-auto flex max-w-[1220px] items-center gap-5 px-4 py-2.5 sm:px-6">
        <p className="flex shrink-0 items-center gap-2 font-caslon text-[0.62rem] uppercase tracking-[0.24em] text-paper/70">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-up" />
          Markets
          <span className="hidden tabular-nums text-paper/45 lg:inline">
            {now.toLocaleTimeString("en-GB", { hour12: false })}
          </span>
        </p>
        <div className="marquee overflow-hidden" style={{ ["--marquee-dur" as never]: "46s" }}>
          <div className="marquee-track">
            {doubled.map((q, i) => (
              <span key={i} className="flex shrink-0 items-center gap-2 pr-10 font-serif text-[0.9rem]" aria-hidden={i >= quotes.length}>
                <span className="font-caslon text-[0.62rem] uppercase tracking-[0.14em] text-paper/55">
                  {q.label}
                </span>
                <span
                  key={`${q.label}-${q.flash}`}
                  className={`tabular-nums font-medium ${q.flash ? (q.dir === 1 ? "flash-up" : "flash-down") : ""}`}
                >
                  {fmt(q)}
                </span>
                <span
                  className={`flex items-center gap-1 text-[0.8rem] tabular-nums ${
                    q.change >= 0 ? "text-up" : "text-down"
                  }`}
                >
                  {q.change >= 0 ? (
                    <TrendUpIcon width={12} height={12} />
                  ) : (
                    <TrendDownIcon width={12} height={12} />
                  )}
                  {q.change >= 0 ? "+" : ""}
                  {q.change.toFixed(2)}%
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
