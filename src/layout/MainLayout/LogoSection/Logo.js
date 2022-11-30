// material-ui
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// styles
const useStyles = makeStyles((theme) => ({
    footer_logo: {
        height: '35px',
        width: '160px',
        '@media (max-width: 600px)': {
            height: '30px',
            width: '130px'
        }
    }
}));

const Logo = () => {
    const { footer_logo } = useStyles();
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <img alt="kokoruns_logo" className={footer_logo} src="logo.png" />
    );
};

export default Logo;
