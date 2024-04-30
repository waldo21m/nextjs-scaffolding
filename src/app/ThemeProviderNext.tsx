'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';

const ThemeProviderNext = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderNext;
