import { useState, type FormEvent } from "react";
import { FOOTER_COLS } from "../data/news";
import Reveal from "./Reveal";
import {
  CheckIcon,
  EnvelopeIcon,
  FlourishIcon,
  XSocialIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./icons";

function Briefing() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setState("error");
      return;
    }
    setState("done");
  };

  return (
    <section id="briefing" className="border-t border-hairline">
      <div className="mx-auto grid max-w-[1220px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-16">
        <Reveal>
          <p className="kicker">The Times Briefing</p>
          <h2 className="mt-3 font-display text-[1.9rem] leading-[1.15] sm:text-[2.4rem]">
            Britain&rsquo;s essential morning email.
          </h2>
          <p className="mt-4 max-w-[52ch] font-serif text-[1.05rem] leading-relaxed text-inksoft">
            The day&rsquo;s news, distilled by our editors and in your inbox before the kettle
            boils. Free for registered readers, every weekday at 6am.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {state === "done" ? (
            <div className="animate-fade-slide flex items-start gap-4 border border-hairline bg-cream p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-timesred text-paper">
                <CheckIcon width={18} height={18} />
              </span>
              <div>
                <p className="font-serif text-[1.2rem] italic leading-snug">
                  You&rsquo;re on the list — see you at 6am.
                </p>
                <p className="mt-1.5 font-serif text-[0.85rem] text-inksoft">
                  A confirmation has been sent to <strong className="font-semibold text-ink">{email}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <label className="flex flex-1 items-center gap-3 border-b-2 border-ink/30 pb-2 transition-colors focus-within:border-timesred">
                  <EnvelopeIcon width={18} height={18} className="shrink-0 text-inkfaint" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    placeholder="your@address.co.uk"
                    className="w-full bg-transparent font-serif text-[1.1rem] italic text-ink outline-none placeholder:text-inkfaint"
                  />
                </label>
                <button
                  type="submit"
                  className="shrink-0 bg-timesred px-7 py-3 font-caslon text-[0.7rem] uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-deepred"
                >
                  Sign up free
                </button>
              </div>
              <p
                className={`mt-3 font-serif text-[0.85rem] italic ${
                  state === "error" ? "text-deepred" : "text-inkfaint"
                }`}
              >
                {state === "error"
                  ? "Please enter a valid email address."
                  : "By signing up you agree to our terms. Unsubscribe any time — no hard feelings."}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const SOCIALS = [
  { label: "Follow on X", Icon: XSocialIcon },
  { label: "Follow on Facebook", Icon: FacebookIcon },
  { label: "Follow on Instagram", Icon: InstagramIcon },
  { label: "Watch on YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <>
      <Briefing />
      <footer className="bg-navy text-paper">
        <div className="mx-auto max-w-[1220px] px-4 pb-10 pt-14 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4">
              <FlourishIcon className="text-paper/30" />
              <p className="font-display text-[2.1rem] leading-none tracking-[0.06em] sm:text-[2.6rem]">
                THE&nbsp;TIMES
              </p>
              <FlourishIcon className="-scale-x-100 text-paper/30" />
            </div>
            <p className="font-caslon text-[0.62rem] uppercase tracking-[0.3em] text-paper/45">
              Thunderer since 1785
            </p>
            <div className="mt-2 flex items-center gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#social"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors duration-200 hover:border-timesred hover:bg-timesred hover:text-paper"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/10 pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="font-caslon text-[0.68rem] uppercase tracking-[0.22em] text-paper/50">
                  {col.title}
                </h3>
                <ul className="mt-3.5 space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={`#${l.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className="font-serif text-[0.95rem] text-paper/80 underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-paper hover:decoration-timesred"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 text-[0.78rem] text-paper/40 sm:flex-row">
            <p className="font-serif italic">
              &copy; 2026 — a design study in the classic British broadsheet style. All stories are
              illustrative fiction.
            </p>
            <p className="flex shrink-0 items-center gap-4 font-serif italic">
              <a href="#terms" className="transition-colors hover:text-paper">Terms</a>
              <a href="#privacy" className="transition-colors hover:text-paper">Privacy</a>
              <a href="#cookies" className="transition-colors hover:text-paper">Cookies</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
