import React, {createContext, useContext, useState} from 'react';

// Context object initiation
type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('dark');


// Consumer component
const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return <h2>The theme is {theme}</h2>;
}


// Provider component
const ComponentWithUseContext = () => {
  const [theme, setTheme] = useState<Theme>('dark'); //<= we are explicitly telling useState to use the Theme type

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
      <div className="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Change the theme
      </div>
    </ThemeContext.Provider>
  );
}

export default ComponentWithUseContext;
