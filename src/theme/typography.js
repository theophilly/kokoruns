/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export function themeTypography(theme) {
  return {
    fontFamily: ['"Source Sans Pro"', 'Mulish'].join(','),
    title1: {
      lineHeight: '50px',
      fontSize: 'clamp(28px, 2.7vw, 60px)',
      fontWeight: 'bold',
    },
    title2: {
      lineHeight: '40px',
      fontSize: 'clamp(1.6rem, 2.5vw, 60px)',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#9e9e9e',
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
}
