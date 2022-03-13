/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export default function themeTypography(theme) {
    return {
        fontFamily: ['"Source Sans Pro"', 'Mulish'].join(','),
        title1: {
            lineHeight: '50px',
            fontSize: 'clamp(28px, 2.7vw, 60px)',
            fontWeight: 'bold'
        },
        title2: {
            lineHeight: '40px',
            fontSize: 'clamp(1.6rem, 2.5vw, 60px)',
            fontWeight: 'bold'
        },
        title3: {
            lineHeight: '40px',
            fontSize: 'clamp(1.6rem, 2vw, 60px)',
            fontWeight: 'bold'
        },
        sub_heading1: {
            lineHeight: '30px',
            fontSize: 'clamp(1.2rem, 1.5vw, 50px)',
            fontWeight: '600'
        },
        caption: {
            margin: 0,
            fontWeight: 400,
            fontSize: '0.70rem',
            //   fontSize: '0.75rem',
            lineHeight: 1.66,
            textAlign: ' center !important'
        },
        heading: {
            fontWeight: '600',
            fontSize: '1.2rem',
            fontFamily: 'mulish'
            // marginBottom: '20px',
        },
        subtitle1: {
            fontWeight: 'bold',
            fontSize: '0.9rem'
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#9e9e9e'
        },
        flex: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
        mainContent: {
            backgroundColor: '#E5E5E5',
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: '20px'
        }
    };
}
