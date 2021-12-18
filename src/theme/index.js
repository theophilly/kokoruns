import { createTheme } from '@mui/material/styles';

import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = () => {
    const themeOptions = {
        palette: themePalette(),

        typography: themeTypography()
    };

    const themes = createTheme(themeOptions);

    return themes;
};

export default theme;
