import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// routes
import MainRoutes from './Mainroutes';
import Dashboardroutes from './Dashboardroutes';

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
    const { authenticated, active, token } = useSelector((state) => state.authReducer);

    return useRoutes([MainRoutes(authenticated, active, token), Dashboardroutes(token, active)]);
}
