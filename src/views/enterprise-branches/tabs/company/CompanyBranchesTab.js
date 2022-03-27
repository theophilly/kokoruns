import React from 'react';
import { Box, Typography, useTheme, InputBase, Avatar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//icons
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

//local imports
import EmptyPages from '../../../../components/common/EmptyPages';
import { LowerButton } from '../../../enterprise-gallery/tabs/SchoolGalleryTab';
import { BiEditAlt } from 'react-icons/bi';
import { timeString } from '../../../../helpers/timeFormater';

const useStyles = makeStyles((theme) => ({
    profile_cover_img: {
        height: '160px',
        minWidth: '100%',
        borderRadius: '6px',
        width: '100%',
        overflowY: 'hidden !important',
        overflowX: 'hidden !important',
        '& img': {
            objectFit: 'cover !important',
            height: '160px',
            width: '100%',
            objectPosition: '10% 40%',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '6px'
        }
    }
}));

const IconsText = ({ icon, text }) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2px' }}>
            <>{icon} </> <Typography sx={{ ...theme.typography.caption, fontWeight: '600' }}>{text}</Typography>
        </Box>
    );
};

export const BranchBox = ({
    branch_name,
    branch_image,
    branch_address,
    opening_week_day,
    closing_week_day,
    opening_time,
    closing_time,
    branch_phone,
    from,
    item
}) => {
    const { profile_cover_img } = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();

    const urls = {
        companies: `/update-company-branch/${item?.branch_id}`,
        schools: `/update-school-branch/${item?.branch_id}`,
        associations: `/update-association-branch/${item?.branch_id}`
    };

    // Prepend any date.
    const opening_time12hr = new Date('1970-01-01T' + opening_time + 'Z').toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric'
    });

    const closing_time12hr = new Date('1970-01-01T' + closing_time + 'Z').toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric'
    });

    console.log('closing time before', closing_time);
    console.log('closing time edited', closing_time12hr);

    return (
        <div
            style={{
                background: '#F5F5F5',
                position: 'relative',
                height: '230px',
                width: '250px',
                borderBottomRightRadius: '6px',
                borderBottomLeftRadius: '6px'
            }}
        >
            <Box className={profile_cover_img}>
                <img alt="bio" src={`https://kokoruns.s3.eu-west-3.amazonaws.com/${from}/branchimages/${branch_image}`} />
            </Box>
            <Box
                sx={{
                    ...theme.typography.column,
                    //       border: '1px solid red',
                    height: '70px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    '& > :nth-child(1)': {
                        fontSize: '1rem',
                        fontWeight: '600'
                    },
                    '& > :nth-child(2)': {
                        fontSize: '0.9rem'
                    }
                }}
            >
                <Typography sx={{ color: theme.palette.primary.main }}> {branch_name} </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconsText icon={<PlaceIcon sx={{ height: '12px', width: '12px' }} />} text={branch_address} />
                    <IconsText
                        icon={<DateRangeIcon sx={{ height: '12px', width: '12px' }} />}
                        text={`${opening_week_day}-${closing_week_day}`}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconsText
                        icon={<AccessTimeIcon sx={{ height: '12px', width: '12px' }} />}
                        text={`${timeString[opening_time.slice(-8, -6)]} - ${timeString[closing_time.slice(-8, -6)]}`}
                    />
                    <IconsText icon={<PhoneIcon sx={{ height: '12px', width: '12px' }} />} text={branch_phone} />
                </Box>
            </Box>
            <Box sx={{ position: 'absolute', top: 1, right: 5 }}>
                <BiEditAlt style={{ color: theme.palette.secondary.main1 }} onClick={() => navigate(urls[from])} />
            </Box>
        </div>
    );
};

export default function CompanyBranchesTab({ data }) {
    const theme = useTheme();
    const { companies } = useSelector((state) => state.userDataReducer.enterprise_ids);

    if (companies.length === 0) {
        return (
            <Box>
                <EmptyPages label="Companies Page" />
                <LowerButton />
            </Box>
        );
    }

    return (
        <Box
            sx={
                {
                    //  borderBottom: '1px solid red'
                }
            }
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '@media (max-width: 453px)': {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '15px'
                    }
                }}
            >
                {/* box 1 */}
                <Box>
                    <Typography sx={{ ...theme.typography.title3, fontWeight: '600' }}>Branches</Typography>
                    <Box sx={{ display: 'flex', mt: '15px' }}>
                        <Button
                            disableElevation
                            sx={{ textTransform: 'capitalize', borderRadius: '0px', height: '39px' }}
                            variant="contained"
                        >
                            All
                        </Button>

                        <Box
                            sx={{
                                padding: '0 5px',
                                background: 'white',
                                height: '39px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '15px',
                                border: '1px solid #C4C4C4',
                                '&:hover': {
                                    border: '1px solid  rgba(0, 0, 0, 0.87)'
                                }
                            }}
                        >
                            <InputBase
                                placeholder="Try “Lagos Branch”"
                                sx={{
                                    height: '30px',
                                    width: '100%',
                                    background: 'white'
                                }}
                            />
                            <Avatar
                                sx={{ cursor: 'pointer', bgcolor: theme.palette.primary.main, height: '30px', width: '30px' }}
                                variant="square"
                            >
                                <SearchIcon fontSize="small" />
                            </Avatar>
                        </Box>
                    </Box>
                </Box>
                {/* box 2 */}
                <Button
                    component={Link}
                    to="/create-company-branch"
                    sx={{ textTransform: 'capitalize', padding: '7px 20px !important', height: 'max-content' }}
                    disableElevation
                    variant="contained"
                >
                    Add Branch
                </Button>
            </Box>

            {data.length !== 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        mt: '30px',
                        bgcolor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        '@media (max-width: 453px)': {
                            justifyContent: 'center'
                        }
                    }}
                >
                    {data.map((item) => (
                        <BranchBox item={item} from="companies" {...item} />
                    ))}
                </Box>
            ) : (
                <Box sx={{ ...theme.typography.flex, fontWeight: '600', height: '200px' }}> No Branches added yet </Box>
            )}
        </Box>
    );
}
