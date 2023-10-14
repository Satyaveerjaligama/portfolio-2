import './App.css';
import Portfolio from './Pages/portfolio';
import { createContext, useState } from 'react';

export const websiteTheme = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <websiteTheme.Provider value={{theme, changeTheme}}>
      <div className="App" id={theme}>
        <Portfolio />
      </div>
    </websiteTheme.Provider>
  );
}

export default App;
