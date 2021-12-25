import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import MinimalLayout from '../layout/MinimalLayout';
import Profile from '../views/profile';
import Teams from '../views/teams';
import Createteam from '../views/Createteam';
import DiscoverTeams from '../views/discover-team';
import MessagesScreen from '../views/messages';
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

const Dashboardroutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dash',
            element: (
                <div>
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhOur dispatched technologies ensure that people
                    that find you can and will be able to add value to you because they are: Either your professional colleagues; your past,
                    present or potential employers or clients; or value adding entities like your professional associations, school’s alumni
                    and people/ organizations that would like to collaborate or partner with you on projects. “All work and no play......”
                    While we focus mainly on your primary career, we appreciate the importance of all your “runs”. We want to help you
                    become all you can be. Your legitimate hustles are our ultimate concern and a multitalented, multitasking, multiskilled,
                    multidiscipline, multipotential, multilingual you, deserves to be a brand. We will not allow your runs to be limited as
                    all work and no play is sure to make you dull. Be proud of who you are and what you do. Your User dashboard defines you
                    in terms of your chosen career(s), gender, age bracket, marital status, languages spoken or learned, academic level,
                    work experiences, projects worked on, certifications earned, technical and soft skills, location and if you are living
                    with a disability. There is available feature to link all your social media as well as online pages on your Kokoruns
                    dashboard so that you can find all your pages in one place and so can others if you so wish.
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
        }
    ]
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
