// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const profile = {
    id: 'utilities',
    // title: 'Profile',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Profile',
            type: 'item',
            url: '/profile',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'teams',
            title: 'Teams',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'your-teams',
                    title: 'Your Teams',
                    type: 'item',
                    url: '/teams',
                    breadcrumbs: false
                },
                {
                    id: 'discover-teams',
                    title: 'Discover Teams',
                    type: 'item',
                    url: '/discover-team',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'messages',
            title: 'Messages',
            type: 'item',
            url: '/messages',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'jobdash',
                    title: 'Jobdash',
                    type: 'item',
                    url: '/jobs',
                    breadcrumbs: false
                },
                {
                    id: 'job-boards',
                    title: 'Job Boards',
                    type: 'item',
                    url: '/job-boards',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'your-pages',
            title: 'Your Pages',
            type: 'item',
            url: '/enterprise',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        // {
        //     id: 'your-pages',
        //     title: 'Your Pages',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'your-pages1',
        //             title: 'Jobdash',
        //             type: 'item',
        //             url: '/your-pages1',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'job-boards',
        //             title: 'Job Boards',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        {
            id: 'events',
            title: 'Events',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'my-events',
                    title: 'My Events',
                    type: 'item',
                    url: '/my-events',
                    breadcrumbs: false
                },
                {
                    id: 'my-invites',
                    title: 'My Invites',
                    type: 'item',
                    url: '/my-invites',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'recommendations',
            title: 'Recommendations',
            type: 'item',
            url: '/recommendations',
            icon: icons.IconShadow,
            breadcrumbs: false
        },

        {
            id: 'kokoruns',
            title: 'Kokoruns',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'Kokoruns1',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'Kokoruns2',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: icons.IconShadow,
            breadcrumbs: false
        }

        // {
        //     id: 'util-shadow',
        //     title: 'Shadow',
        //     type: 'item',
        //     url: '/utils/util-shadow',
        //     icon: icons.IconShadow,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default profile;
