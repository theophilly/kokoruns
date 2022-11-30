import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
// import config from '../../../utils/';
import Logo from './Logo';

const LogoSection = () => (
    <ButtonBase
        disableRipple
        component={Link}
        // to={config.defaultPath}
        to="/homepage"
    >
        <Logo />
    </ButtonBase>
);

export default LogoSection;
