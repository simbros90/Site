import { useEffect, useState, type FormEvent } from "react";
import { NAV_SECTIONS } from "../data/news";
import {
  SearchIcon,
  CloudRainIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  FlourishIcon,
  ClockIcon,
} from "./icons";

export default function Masthead() {
  const [now, setNow] = useState(() => new Date());
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchNote, setSearchNote] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearchNote(`${12 + q.length} results for \u201C${q}\u201D — showing the front page instead`);
    setTimeout(() => setSearchNote(null), 3200);
  };

  return (
    <header className="bg-paper">
      {/* utility bar */}
      <div className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-4 px-4 py-2 text-[0.8rem] text-inksoft sm:px-6">
          <p className="flex items-center gap-2 font-serif">
            <span className="hidden sm:inline">{dateStr}</span>
            <span className="tabular-nums text-ink">{timeStr}</span>
            <span className="hidden text-inkfaint sm:inline">GMT</span>
          </p>
          <p className="flex items-center gap-4 font-serif">
            <span className="flex items-center gap-1.5">
              <CloudRainIcon width={15} height={15} className="text-inkfaint" />
              <span>
                London <strong className="font-semibold text-ink">6&deg;C</strong>
                <span className="hidden text-inkfaint md:inline"> &middot; light showers</span>
              </span>
            </span>
            <span className="hidden items-center gap-1 md:flex">
              <button className="story-hl">Sign in</button>
              <span className="text-hairline">|</span>
              <button className="story-hl">Register</button>
            </span>
          </p>
        </div>
      </div>

      {/* wordmark */}
      <div className="mx-auto grid max-w-[1220px] grid-cols-[1fr_auto_1fr] items-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex items-center gap-2 text-inksoft">
          <button
            aria-label="Open sections menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 font-caslon text-[0.7rem] uppercase tracking-[0.14em] transition-colors hover:text-timesred"
          >
            {menuOpen ? <CloseIcon width={17} height={17} /> : <MenuIcon width={17} height={17} />}
            <span className="hidden sm:inline">Sections</span>
          </button>
          <FlourishIcon className="ml-1 hidden text-ink/50 xl:block" />
        </div>

        <div className="text-center leading-none">
          <h1 className="font-display text-[2.6rem] tracking-[0.055em] text-ink sm:text-[3.4rem] lg:text-[4rem]">
            THE&nbsp;TIMES
          </h1>
          <p className="mt-2.5 font-caslon text-[0.62rem] uppercase tracking-[0.3em] text-inksoft sm:text-[0.7rem]">
            London &middot; No.&nbsp;75,182 &middot; Final Edition
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <FlourishIcon className="mr-1 hidden -scale-x-100 text-ink/50 xl:block" />
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`p-2 transition-colors hover:text-timesred ${searchOpen ? "text-timesred" : "text-ink"}`}
          >
            <SearchIcon width={18} height={18} />
          </button>
          <a
            href="#briefing"
            className="hidden bg-timesred px-5 py-2.5 font-caslon text-[0.68rem] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-deepred sm:inline-block"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* sticky section nav */}
      <div
        className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_24px_-18px_rgba(27,27,24,0.55)]" : ""
        }`}
      >
        <div className="double-rule">
          <nav className="no-scrollbar mx-auto flex max-w-[1220px] items-center gap-7 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-center">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s}
                aria-current={active === s ? "true" : "false"}
                onClick={() => setActive(s)}
                className="nav-link shrink-0 font-caslon text-[0.72rem] uppercase tracking-[0.16em] text-ink"
              >
                {s}
              </button>
            ))}
            <a
              href="#briefing"
              className="ml-1 shrink-0 font-caslon text-[0.72rem] uppercase tracking-[0.16em] text-timesred hover:text-deepred sm:hidden"
            >
              Subscribe
            </a>
          </nav>
        </div>

        {searchOpen && (
          <div className="border-b border-hairline bg-paper animate-fade-slide">
            <form
              onSubmit={submitSearch}
              className="mx-auto flex max-w-[1220px] items-center gap-3 px-4 py-3 sm:px-6"
            >
              <SearchIcon width={16} height={16} className="shrink-0 text-inkfaint" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news, people and topics…"
                className="flex-1 border-b border-ink/40 bg-transparent pb-1 font-serif text-lg italic text-ink outline-none placeholder:text-inkfaint focus:border-timesred"
              />
              <button
                type="submit"
                className="border border-ink px-4 py-1.5 font-caslon text-[0.65rem] uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-paper"
              >
                Search
              </button>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="p-1 text-inksoft hover:text-timesred"
              >
                <CloseIcon width={16} height={16} />
              </button>
            </form>
            {searchNote && (
              <p className="mx-auto max-w-[1220px] px-4 pb-3 font-serif text-sm italic text-inksoft sm:px-6">
                {searchNote}
              </p>
            )}
          </div>
        )}

        {menuOpen && (
          <div className="border-b border-hairline bg-cream animate-fade-slide lg:hidden">
            <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-x-6 px-4 py-4 sm:grid-cols-3 sm:px-6">
              {NAV_SECTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setActive(s);
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-between border-b border-hairline py-2.5 text-left font-serif text-[1.05rem] text-ink transition-colors hover:text-timesred"
                >
                  {s}
                  <ChevronDownIcon width={14} height={14} className="-rotate-90 text-inkfaint" />
                </button>
              ))}
              <p className="col-span-full mt-3 flex items-center gap-2 font-serif text-sm text-inksoft">
                <ClockIcon width={14} height={14} />
                Edition updated {timeStr}
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
