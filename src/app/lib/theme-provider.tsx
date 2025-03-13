'use client';

import { ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import theme from './theme';

const clientSideEmotionCache = createEmotionCache();

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
