import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// project imports
//import  from 'store/actions';
import { MENU_OPEN, SET_MENU } from '../../../../../store/actionTypes/customizationActionTypes';
// import config from 'config';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#F24F4F',
        marginLeft: '10px',

        '& .MuiListItemIcon-root': {
            color: '#F24F4F'
        },

        '&.Mui-selected': {
            color: 'F24F4F',
            fontWeight: 'bold',
            backgroundColor: '#CEE9FF',

            '& .MuiListItemIcon-root': {
                color: 'F24F4F',
                fontWeight: 'bold'
            },
            '&:hover': {
                backgroundColor: '#CEE9FF'
            }
        },
        '&:hover': {
            color: 'F24F4F',
            fontWeight: 'bold',
            backgroundColor: '#CEE9FF',

            '& .MuiListItemIcon-root': {
                color: 'F24F4F',
                fontWeight: 'bold'
            }
        }
    }
}));

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({
    item = {
        id: 'logout',
        title: 'Logout',
        type: 'item',
        breadcrumbs: false,
        icon: IconWindmill
    },
    level = 1
}) => {
    const { root } = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const Icon = item.icon;
    const itemIcon = item?.icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
                height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    const itemHandler = (id) => {
        dispatch({ type: 'SIGN_OUT' });
    };

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch({ type: MENU_OPEN, id: item.id });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ListItemButton
            className={root}
            disabled={item.disabled}
            sx={{
                borderRadius: `${customization.borderRadius}px`,
                mb: 0.5,
                alignItems: 'flex-start',
                //  backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 0.45 : 0.45,
                pl: `${level * 24}px`
            }}
            selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
            onClick={() => itemHandler()}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={<Typography color="inherit">{item.title}</Typography>}
                secondary={
                    item.caption && (
                        <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
            {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
