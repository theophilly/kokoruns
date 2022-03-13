// project imports
import MainLayout from '../layout/MainLayout';
import Profile from '../views/profile';
import Teams from '../views/teams';
import Createteam from '../views/Createteam';
import DiscoverTeams from '../views/discover-team';
import MessagesScreen from '../views/messages';
import Yourteams from '../views/teams/Yourteams';
import Discoverteamdetails from '../views/discover-team/Discoverteamdetails';
import Jobdash from '../views/job-dash';
import Applicationdetails from '../views/job-dash/Applicationdetails';
import Jobboard from '../views/job-boards';
import Myevents from '../views/Myevents';
import Yourevents from '../views/Myevents/Yourevents';
import Createevent from '../views/Createevent';
import Recommendation from '../views/recommendation';
import RequestRecommendation from '../views/recommendation/RequestRecommendation';
import SendRecommendation from '../views/recommendation/SendRecommendation';
import Settings from '../views/Settings';
import { Navigate } from 'react-router-dom';
// import Loadable from 'ui-component/Loadable';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// // utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// // sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// import menuItem from '../../../../utils/menu-items';
import { menuItems2, menuItems } from '../utils/menu-items';

// ==============================|| MAIN ROUTING ||============================== //
const Dashboardroutes = (token, active) => {
    return {
        path: '/',
        element: token ? active ? <MainLayout menuList={menuItems} /> : <Navigate to="/profile-setup" /> : <Navigate to="/login" />,
        children: [
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/teams',
                element: <Teams />
            },
            {
                path: '/create-team',
                element: <Createteam />
            },
            {
                path: '/discover-team',
                element: <DiscoverTeams />
            },
            {
                path: '/messages',
                element: <MessagesScreen />
            },
            {
                path: '/your-teams',
                element: <Yourteams />
            },
            {
                path: '/discover-team-details',
                element: <Discoverteamdetails />
            },
            {
                path: '/jobs',
                element: <Jobdash />
            },
            {
                path: '/job-details',
                element: <Applicationdetails />
            },
            {
                path: '/job-boards',
                element: <Jobboard />
            },
            {
                path: '/my-events',
                element: <Myevents />
            },
            {
                path: '/your-events',
                element: <Yourevents />
            },
            {
                path: '/my-invites',
                element: <Myevents />
            },
            {
                path: '/create-event',
                element: <Createevent />
            },
            {
                path: '/recommendations',
                element: <Recommendation />
            },
            {
                path: '/request-recommendation',
                element: <RequestRecommendation />
            },
            {
                path: '/send-recommendation',
                element: <SendRecommendation />
            },
            {
                path: '/settings',
                element: <Settings />
            }
        ]
    };
};

export default Dashboardroutes;
