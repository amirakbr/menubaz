import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      100: '#FFF8D3',
      200: '#FFF2A6',
      300: '#FFEB7A',
      400: '#FFE54D',
      500: '#FFDE21',
      600: '#CCB21A',
      700: '#998514',
      800: '#66590D',
      900: '#332C07',
      main: '#FFDE21',
      contrastText: '#000000', // Black text
    },
    secondary: {
      100: '#D5D5D5',
      200: '#ACACAC',
      300: '#828282',
      400: '#595959',
      500: '#2F2F2F',
      600: '#262626',
      700: '#1C1C1C',
      800: '#131313',
      900: '#090909',
      main: '#2F2F2F',
      contrastText: '#FFFFFF', // White text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          textTransform: 'none', // Keep text as is
          padding: '8px 16px',
          fontSize: '1rem',
          boxShadow: 'none !important',
        },
        sizeSmall: {
          padding: '4px 10px',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
        sizeLarge: {
          padding: '12px 20px',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
        },
        sizeMedium: {
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
        },
        containedPrimary: {
          backgroundColor: '#FFD700',
          color: '#212121',
          border: '1px solid #FFD700',
          '&:hover': {
            backgroundColor: '#E6C200', // Darker yellow on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#2F2F2F',
          color: '#EFEFEF',
          border: '1px solid #2F2F2F',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            borderColor: '#FFF8D3', // Yellow border
            color: '#212121', // Black text
          }),
          ...(ownerState.color === 'secondary' && {
            borderColor: '#D5D5D5', // Dark border for secondary
            color: '#424242', // White text
          }),
        }),
        text: {
          color: '#000000', // Black text
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  typography: { fontFamily: 'var(--iran-yekan)' },
});

export default theme;
