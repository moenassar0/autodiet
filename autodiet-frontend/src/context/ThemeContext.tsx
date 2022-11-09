import React, { Dispatch, SetStateAction, useState } from "react"

export type ThemeType = 'light' | 'dark';

export const ThemeContext = React.createContext<ThemeContextProps>({
    themeType: 'light',

} as ThemeContextProps);

interface ThemeContextProps {
    themeType: ThemeType,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeProvider: React.FC<{children: any}> = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

    return(
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            setCurrentTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);