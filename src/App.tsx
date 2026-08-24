import Masthead from "./components/Masthead";
import { BreakingBar, MarketsStrip } from "./components/Tickers";
import Lead from "./components/Lead";
import Opinion from "./components/Opinion";
import Sections from "./components/Sections";
import PopularPuzzles from "./components/PopularPuzzles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Masthead />
      <BreakingBar />
      <main id="main">
        <Lead />
        <Opinion />
        <MarketsStrip />
        <Sections />
        <PopularPuzzles />
      </main>
      <Footer />
    </div>
  );
}
