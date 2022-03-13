// project imports
import MainLayout from '../layout/MainLayout';
import Createevent from '../views/Createevent';
import { Navigate } from 'react-router-dom';

import { menuItems2 } from '../utils/menu-items';
import EnterpriseProfile from '../views/enterprise-profile';
import EventDetails from '../views/Myevents/EventDetails';
import Branches from '../views/enterprise-branches';
import Gallery from '../views/enterprise-gallery';
import CreateBranch from '../views/enterprise-branches/tabs/company/CreateBranch';

// ==============================|| MAIN ROUTING ||============================== //
const EnterpriseRoutes = (token, active) => {
    return {
        path: '/',
        element: token ? active ? <MainLayout menuList={menuItems2} /> : <Navigate to="/profile-setup" /> : <Navigate to="/login" />,
        children: [
            {
                path: '/enterprise',
                element: <EnterpriseProfile />
            },
            {
                path: '/create-school-event',
                element: <Createevent />
            },
            {
                path: '/create-company-event',
                element: <Createevent />
            },
            {
                path: '/create-association-event',
                element: <Createevent />
            },
            {
                path: '/event-detail/:page/:id',
                element: <EventDetails />
            },
            {
                path: '/branches',
                element: <Branches />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/create-company-branch',
                element: <CreateBranch />
            },
            {
                path: '/create-association-branch',
                element: <CreateBranch />
            },
            {
                path: '/create-school-branch',
                element: <CreateBranch />
            },
            {
                path: '/enterprise-jobs',
                element: <div>enterprise jobs</div>
            },
            {
                path: '/enterprise-advertise',
                element: <div>enterprise advertise</div>
            },
            {
                path: '/enterprise-wallet',
                element: <div>enterprise wallet</div>
            },
            {
                path: '/enterprise-settings',
                element: <div>enterprise wallet</div>
            }
        ]
    };
};

export default EnterpriseRoutes;