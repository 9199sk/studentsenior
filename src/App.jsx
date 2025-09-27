import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors ${isDarkMode ? "dark" : ""}`}
    >
      <Navbar />
      <Hero />
      <QuickAccess />
      {/* Add Stats, Features, FAQ, Footer similarly */}
    </div>
  );
}

export default App;
