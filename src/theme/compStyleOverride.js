export default function componentStyleOverrides(theme) {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: '#3DA8FF',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    backgroundColor: 'white',
                    '&.Mui-selected': {
                        color: '#0991FF',
                        backgroundColor: '#0991FF',
                        '&:hover': {
                            //  backgroundColor: theme.menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            //   color: theme.menuSelected
                        }
                    },
                    '&:hover': {
                        color: '#0991FF',
                        backgroundColor: '#0991FF',
                        '& .MuiListItemIcon-root': {
                            color: '#0991FF'
                        }
                    }
                }
            }
        },

        MuiListItemText: {
            styleOverrides: {
                primary: {
                    //   color: theme.textDark
                    fontSize: '.9rem'
                }
            }
        }
    };
}
