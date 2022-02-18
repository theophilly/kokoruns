import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, Box } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

const SubCard = forwardRef(
    ({ children, content, contentClass, divider = true, darkTitle, secondary, sx = {}, contentSX = {}, p, title, ...others }, ref) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                sx={{
                    // border: '1px solid',
                    // borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },
                    ...sx
                }}
                {...others}
            >
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader
                        sx={{ p: 1.5 }}
                        title={
                            <Typography
                                sx={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#333333'
                                }}
                                // variant="h5"
                            >
                                {title}
                            </Typography>
                        }
                        action={secondary}
                    />
                )}
                {darkTitle && title && (
                    <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />
                )}

                {/* content & header divider */}
                {title && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            px: 1.5
                        }}
                    >
                        {divider && (
                            <Divider
                                sx={{
                                    opacity: 1,
                                    borderColor: '#CCCCCC',
                                    width: '100%'
                                }}
                            />
                        )}
                    </Box>
                )}

                {/* card content */}
                {content && (
                    <CardContent
                        sx={{
                            px: p ? 0 : 1.5,
                            pt: '6px',
                            // border: '1px solid red',
                            ...contentSX
                        }}
                        className={contentClass || ''}
                    >
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

SubCard.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

SubCard.defaultProps = {
    content: true
};

export default SubCard;
