import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WelcomePage } from "./pages/WelcomePage";
import { LearnPage } from "./pages/LearnPage";
import { Services } from "./pages/Services";
import { LearnPage2 } from "./pages/LearnPage2";
import { PageNotFound } from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/learnPage" element={<LearnPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learnPage2" element={<LearnPage2 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
