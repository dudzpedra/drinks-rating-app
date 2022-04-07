import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import App from "../App";
import About from "../routes/about";
import NewDrink from "../routes/new";
import NewHeader from "../components/ui/NewHeader";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import usePesistedState from "../utils/usePersistedState";

const AppRoutes = () => {
  const [theme, setTheme] = usePesistedState('light', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          {/* <Header /> */}
          <NewHeader toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<NewDrink />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default AppRoutes;
