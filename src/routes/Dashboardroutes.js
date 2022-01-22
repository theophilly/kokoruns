import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import MinimalLayout from '../layout/MinimalLayout';
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
import Yourinvites from '../views/Myevents/Yourinvites';
import Createevent from '../views/Createevent';
import Recommendation from '../views/recommendation';
import RequestRecommendation from '../views/recommendation/RequestRecommendation';
import SendRecommendation from '../views/recommendation/SendRecommendation';
import Settings from '../views/Settings';
import Login from '../pages/Login';
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

// ==============================|| MAIN ROUTING ||============================== //
const Dashboardroutes = (token, active) => {
    return {
        path: '/',
        element: token ? active ? <MainLayout /> : <Navigate to="/profile-setup" /> : <Navigate to="/login" />,
        children: [
            {
                path: '/dash',
                element: (
                    <div>
                        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhOur dispatched technologies ensure that
                        people that find you can and will be able to add value to you because they are: Either your professional colleagues;
                        your past, present or potential employers or clients; or value adding entities like your professional associations,
                        school’s alumni and people/ organizations that would like to collaborate or partner with you on projects. “All work
                        and no play......” While we focus mainly on your primary career, we appreciate the importance of all your “runs”. We
                        want to help you become all you can be. Your legitimate hustles are our ultimate concern and a multitalented,
                        multitasking, multiskilled, multidiscipline, multipotential, multilingual you, deserves to be a brand. We will not
                        allow your runs to be limited as all work and no play is sure to make you dull. Be proud of who you are and what you
                        do. Your User dashboard defines you in terms of your chosen career(s), gender, age bracket, marital status,
                        languages spoken or learned, academic level, work experiences, projects worked on, certifications earned, technical
                        and soft skills, location and if you are living with a disability. There is available feature to link all your
                        social media as well as online pages on your Kokoruns dashboard so that you can find all your pages in one place and
                        so can others if you so wish.
                    </div>
                )
            },
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
//     {
//         path: '/',
//         element: <MinimalLayout />,
//         children: [
//             {
//                 path: '/d',
//                 element: <div>homw</div>
//             },
//             {
//                 path: '/okay',
//                 element: <div>homw</div>
//             },
//             {
//                 path: '/test',
//                 element: <div>text</div>
//             }
//         ]
//     }
// ;

// export default {
//     path: '/',
//     element: <MinimalLayout />,
//     children: [
//         {
//             path: '/',
//             element: <div>homw</div>
//         },
//         {
//             path: '/okay',
//             element: <div>homw</div>
//         },
//         {
//             path: '/test',
//             element: <div>text</div>
//         }
//     ]
// };
export default Dashboardroutes;
