import { useState } from "react";
import { LEAD, LEAD_BODY, LEAD_SUBSTORIES, TOP_STORIES } from "../data/news";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";

function TimesRadioPanel() {
  const [playing, setPlaying] = useState(false);
  return (
    <aside className="mt-8 flex items-center gap-4 bg-navy p-5 text-paper lg:mt-auto">
      <button
        aria-label={playing ? "Pause Times Radio" : "Play Times Radio"}
        onClick={() => setPlaying((v) => !v)}
        className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-paper/40 transition-colors duration-200 hover:border-timesred hover:bg-timesred"
        style={{ width: 52, height: 52 }}
      >
        {playing ? (
          <span className="flex h-5 items-end gap-[3px]">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="eq-bar w-[3px] bg-paper"
                style={{ height: 20, animationDelay: `${i * 0.13}s` }}
              />
            ))}
          </span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" className="ml-1" fill="currentColor">
            <path d="M3.5 1.8 14 8 3.5 14.2Z" />
          </svg>
        )}
      </button>
      <div className="min-w-0">
        <p className="font-caslon text-[0.62rem] uppercase tracking-[0.24em] text-paper/60">
          Times Radio
        </p>
        <p className="mt-1 truncate font-serif text-[1.02rem] italic leading-snug">
          The 6am news hour — Britain's agenda, explained
        </p>
        <p className="mt-1 flex items-center gap-2 text-[0.75rem] text-paper/50">
          {playing ? (
            <>
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-up" />
              Playing · live from London
            </>
          ) : (
            "42 min · updated hourly"
          )}
        </p>
      </div>
    </aside>
  );
}

export default function Lead() {
  return (
    <section className="mx-auto max-w-[1220px] px-4 pb-14 pt-8 sm:px-6 lg:pt-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* lead story */}
        <Reveal as="article" className="group/story lg:col-span-8 lg:border-r lg:border-hairline lg:pr-10">
          <figure className="overflow-hidden">
            <img
              src={LEAD.image}
              alt="Westminster at dusk in light rain"
              className="img-breathe aspect-[16/9] w-full object-cover"
            />
          </figure>
          <figcaption className="mt-2 flex items-baseline justify-between gap-4 text-[0.78rem] italic text-inkfaint">
            <span>Rush hour outside the Palace of Westminster as the planning bill was finalised</span>
            <span className="shrink-0">{LEAD.credit}</span>
          </figcaption>

          <header className="mt-5">
            <p className="kicker">{LEAD.kicker}</p>
            <h2 className="story-hl mt-2.5 font-serif text-[2.15rem] font-semibold leading-[1.04] tracking-[-0.015em] sm:text-[2.9rem] lg:text-[3.35rem]">
              {LEAD.headline}
            </h2>
            <p className="mt-4 max-w-[62ch] font-serif text-[1.16rem] font-light leading-relaxed text-ink/85">
              {LEAD.standfirst}
            </p>
          </header>

          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-y border-hairline py-2.5 text-[0.85rem] text-inksoft">
            <p>
              <strong className="font-semibold text-ink">James Whitmore</strong>, Political Editor
            </p>
            <p className="italic">{LEAD.time}</p>
          </div>

          <p className="dropcap mt-5 columns-1 gap-8 font-serif text-[1.02rem] leading-[1.68] text-ink/90 sm:columns-2 sm:[column-rule:1px_solid_var(--color-hairline)]">
            {LEAD_BODY}
          </p>
          <p className="mt-4">
            <button className="group/cta inline-flex items-center gap-2 font-caslon text-[0.7rem] uppercase tracking-[0.18em] text-timesred transition-colors hover:text-deepred">
              Continue reading
              <ArrowRightIcon width={14} height={14} className="transition-transform duration-200 group-hover/cta:translate-x-1" />
            </button>
          </p>

          {/* sub stories */}
          <div className="mt-9 grid gap-x-9 gap-y-7 border-t border-hairline pt-7 sm:grid-cols-2">
            {LEAD_SUBSTORIES.map((s, i) => (
              <Reveal key={s.headline} as="article" className="group/story" delay={i * 90}>
                <p className="kicker">{s.kicker}</p>
                <h3 className="story-hl mt-2 font-serif text-[1.32rem] font-medium leading-snug">
                  {s.headline}
                </h3>
                <p className="mt-2 text-[0.85rem] text-inksoft">{s.byline}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* top stories rail */}
        <div className="flex flex-col lg:col-span-4">
          <Reveal delay={120}>
            <h2 className="flex items-center gap-2.5 font-caslon text-[0.82rem] uppercase tracking-[0.22em] text-ink">
              <span className="h-2.5 w-2.5 bg-timesred" />
              Top Stories
            </h2>
            <ul className="mt-1 divide-y divide-hairline">
              {TOP_STORIES.map((s) => (
                <li key={s.headline} className="py-4">
                  <p className="flex items-baseline justify-between gap-3">
                    <span className="kicker">{s.kicker}</span>
                    <span className="font-serif text-[0.75rem] italic tabular-nums text-inkfaint">
                      {s.time}
                    </span>
                  </p>
                  <h3 className="story-hl mt-1.5 font-serif text-[1.07rem] font-medium leading-snug">
                    {s.headline}
                  </h3>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200} className="flex flex-col">
            <TimesRadioPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
