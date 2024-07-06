import { useContext, useEffect } from "react";
import "./App.css";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import Dashboard from "./pages/Dashboard";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import SidebarMenu from "./components/SidebarMenu";
import BaseLayout from "./layout/BaseLayout";
import Customer from "./pages/Customer";
import Medicine from "./pages/Medicine";
import Manufacturer from "./pages/Manufacturer";
import Return from "./pages/Return";
import HumanResource from "./pages/HumanResource";
import Report from "./pages/Report";
import Support from "./pages/Support";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
      <Sidebar/>
        <Routes>
          <Route element={<BaseLayout />}/>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/return" element={<Return />} />
          <Route path="/human-resouce" element={<HumanResource />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
         
          <Route path="sidebar" element={<Sidebar/>}>
                <Route path="sidebarmenu" element={<SidebarMenu/>}/>
          </Route>
          

          
        </Routes>
      
    

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
