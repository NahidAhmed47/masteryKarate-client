import React, { useContext } from 'react';
import { ThemeContext } from '../Providers/ThemeProviders';

const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
};

export default useTheme;