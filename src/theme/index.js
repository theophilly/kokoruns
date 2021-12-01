import { createTheme } from '@mui/material/styles';
import { themeTypography } from './typography';
import { themePalette } from './palette';

export default createTheme({
  palette: themePalette(),
  typography: themeTypography(),
});
