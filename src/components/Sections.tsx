import { NEWS_COLUMNS } from "../data/news";
import Reveal from "./Reveal";
import { ArrowUpRightIcon } from "./icons";

export default function Sections() {
  return (
    <section className="mx-auto max-w-[1220px] px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-14 lg:grid-cols-3 lg:gap-0">
        {NEWS_COLUMNS.map((col, i) => (
          <Reveal
            key={col.section}
            delay={i * 100}
            className={`lg:px-10 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-hairline"} ${
              i === 2 ? "lg:pr-0" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-3 border-b-2 border-ink pb-3">
              <h2 className="font-caslon text-[1rem] uppercase tracking-[0.18em] text-ink">
                {col.section}
              </h2>
              <a href={`#${col.section.toLowerCase()}`} className="story-hl flex items-center gap-1 font-serif text-[0.85rem] italic">
                More in {col.section} <ArrowUpRightIcon width={12} height={12} />
              </a>
            </div>

            <article className="group/story mt-6">
              <figure className="overflow-hidden">
                <img
                  src={col.lead.image}
                  alt={col.lead.headline}
                  className="img-zoom aspect-[4/3] w-full object-cover"
                />
              </figure>
              <p className="mt-2 text-right text-[0.75rem] italic text-inkfaint">{col.lead.credit}</p>
              <p className="kicker mt-3">{col.lead.kicker}</p>
              <h3 className="story-hl mt-2 font-serif text-[1.55rem] font-medium leading-[1.16]">
                {col.lead.headline}
              </h3>
              <p className="mt-2.5 font-serif text-[0.97rem] leading-relaxed text-inksoft">
                {col.lead.standfirst}
              </p>
            </article>

            <ul className="mt-2 divide-y divide-hairline">
              {col.items.map((item) => (
                <li key={item.headline} className="py-4">
                  <p className="kicker">{item.kicker}</p>
                  <h4 className="story-hl mt-1.5 font-serif text-[1.06rem] font-medium leading-snug">
                    {item.headline}
                  </h4>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
