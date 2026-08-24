import { useState } from "react";
import {
  MOST_POPULAR,
  CW_GRID,
  CW_NUMBERS,
  CW_CLUES,
} from "../data/news";
import Reveal from "./Reveal";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";

const FILL_ROW = "TIMESNEWS"; // letters of row 0 (black cells mask the rest)

function Crossword() {
  const [hover, setHover] = useState<{ r: number; c: number } | null>(null);
  const [clueIdx, setClueIdx] = useState(0);

  return (
    <div className="grid gap-8 sm:grid-cols-[minmax(0,340px)_1fr] sm:gap-10">
      <div
        className="inline-grid w-full max-w-[340px] grid-cols-9 self-start border-2 border-ink bg-ink"
        style={{ gap: 1 }}
        onMouseLeave={() => setHover(null)}
      >
        {CW_GRID.map((row, r) =>
          row.map((cell, c) => {
            const black = cell === 0;
            const highlighted =
              !black && hover !== null && (hover.r === r || hover.c === c);
            const number = CW_NUMBERS[`${r},${c}`];
            const letter = r === 0 && !black ? FILL_ROW[c] : null;
            return (
              <div
                key={`${r}-${c}`}
                onMouseEnter={() => !black && setHover({ r, c })}
                className={`cw-cell relative flex aspect-square cursor-pointer items-center justify-center ${
                  black ? "bg-navy" : highlighted ? "bg-cream" : "bg-paper"
                }`}
              >
                {number && !black && (
                  <span className="absolute left-0.5 top-0 font-caslon text-[8px] leading-[1.4] text-ink/70">
                    {number}
                  </span>
                )}
                {letter && (
                  <span className="font-serif text-[1rem] font-semibold leading-none">{letter}</span>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-col">
        <p className="kicker">Quick Crossword &middot; No 16,452</p>
        <p key={clueIdx} className="animate-fade-slide mt-4 min-h-[3.2em] font-serif text-[1.25rem] italic leading-snug">
          &ldquo;{CW_CLUES[clueIdx]}&rdquo;
        </p>
        <p className="mt-3">
          <button
            onClick={() => setClueIdx((i) => (i + 1) % CW_CLUES.length)}
            className="group inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-caslon text-[0.68rem] uppercase tracking-[0.18em] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            Reveal next clue
            <ArrowRightIcon width={14} height={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </p>

        <ul className="mt-8 border-t border-hairline">
          {[
            { kicker: "Sudoku · No 15,882", title: "Today's grid is rated fiendish — 27 givens, one cruel break" },
            { kicker: "Word", title: "Today's theme: harbours. Five letters, endless tides" },
            { kicker: "Bridge", title: "Declarer play, part four: when to finesse, when to finesse not" },
          ].map((p) => (
            <li key={p.title} className="group border-b border-hairline py-4">
              <p className="kicker">{p.kicker}</p>
              <h4 className="story-hl mt-1.5 flex items-start justify-between gap-3 font-serif text-[1.06rem] font-medium leading-snug">
                {p.title}
                <ArrowUpRightIcon
                  width={14}
                  height={14}
                  className="mt-1 shrink-0 text-timesred opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PopularPuzzles() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto grid max-w-[1220px] gap-14 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <Reveal className="lg:col-span-5 lg:border-r lg:border-hairline lg:pr-10">
          <h2 className="flex items-center gap-2.5 font-caslon text-[0.82rem] uppercase tracking-[0.22em] text-ink">
            <span className="h-2.5 w-2.5 bg-timesred" />
            Most Popular
          </h2>
          <ol className="mt-2">
            {MOST_POPULAR.map((title, i) => (
              <li key={title} className="group flex items-center gap-5 border-b border-hairline py-4">
                <span className="w-11 shrink-0 text-right font-serif text-[2.7rem] font-light leading-none text-ink/20 transition-colors duration-300 group-hover:text-timesred">
                  {i + 1}
                </span>
                <a href="#most-popular" className="story-hl font-serif text-[1.12rem] font-medium leading-snug">
                  {title}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-serif text-[0.85rem] italic text-inkfaint">
            Ranked by readers over the past 24 hours, across web and app.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <h2 className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2.5 font-caslon text-[0.82rem] uppercase tracking-[0.22em] text-ink">
              <span className="h-2.5 w-2.5 bg-timesred" />
              Puzzles
            </span>
            <a href="#puzzles" className="story-hl flex items-center gap-1 font-serif text-[0.9rem] italic">
              All puzzles <ArrowUpRightIcon width={13} height={13} />
            </a>
          </h2>
          <div className="mt-6">
            <Crossword />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
