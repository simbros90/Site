import { COLUMNISTS, LEADING_ARTICLE } from "../data/news";
import Reveal from "./Reveal";
import { ArrowUpRightIcon } from "./icons";

export default function Opinion() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto max-w-[1220px] px-4 py-12 sm:px-6 lg:py-16">
        <Reveal className="flex items-baseline justify-between gap-4">
          <h2 className="flex items-center gap-3 font-caslon text-[1.05rem] uppercase tracking-[0.22em] text-ink">
            <span className="h-2.5 w-2.5 bg-timesred" />
            Comment
          </h2>
          <a href="#comment" className="story-hl flex items-center gap-1 font-serif text-[0.9rem] italic">
            All comment <ArrowUpRightIcon width={13} height={13} />
          </a>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* leading article */}
          <Reveal as="article" className="group/story lg:col-span-5 lg:border-r lg:border-hairline lg:pr-10" delay={60}>
            <p className="kicker">{LEADING_ARTICLE.kicker}</p>
            <h3 className="story-hl mt-3 font-serif text-[1.85rem] font-medium leading-[1.14] sm:text-[2.1rem]">
              {LEADING_ARTICLE.headline}
            </h3>
            <p className="mt-4 max-w-[52ch] font-serif text-[1.02rem] leading-relaxed text-inksoft">
              {LEADING_ARTICLE.standfirst}
            </p>
            <p className="mt-6 border-t border-hairline pt-4 font-serif text-[0.85rem] italic text-inkfaint">
              The newspaper speaks in this column. Today's view reflects the judgment of the
              editor and the senior editorial board.
            </p>
            <p className="mt-5">
              <button className="group/cta inline-flex items-center gap-2 font-caslon text-[0.7rem] uppercase tracking-[0.18em] text-timesred transition-colors hover:text-deepred">
                Read the leading article
                <ArrowUpRightIcon width={14} height={14} className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </button>
            </p>
          </Reveal>

          {/* columnists */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            {COLUMNISTS.map((c, i) => (
              <Reveal key={c.name} as="article" className="group/story text-center" delay={i * 110}>
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-1 ring-hairline">
                  <img
                    src={c.portrait}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/story:scale-108"
                  />
                </div>
                <p className="mt-4 font-caslon text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                  {c.name}
                </p>
                <p className="mt-0.5 font-serif text-[0.78rem] italic text-inkfaint">{c.role}</p>
                <h3 className="story-hl mt-3 font-serif text-[1.13rem] font-medium leading-snug">
                  {c.headline}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
