import React from 'react';
import { Box, Typography, useTheme, InputBase, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

//icons
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import EmptyPages from '../../../../components/common/EmptyPages';
import { LowerButton } from '../../../enterprise-gallery/tabs/SchoolGalleryTab';
import { BranchBox } from '../company/CompanyBranchesTab';

export default function AssociationBranchesTab({ data }) {
    const theme = useTheme();
    const { associations } = useSelector((state) => state.userDataReducer.enterprise_ids);

    if (associations.length === 0) {
        return (
            <Box>
                <EmptyPages label="Association Page" />
                <LowerButton />
            </Box>
        );
    }

    return (
        <Box>
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
                    to="/create-association-branch"
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
                        <BranchBox item={item} from="associations" {...item} />
                    ))}
                </Box>
            ) : (
                <Box sx={{ ...theme.typography.flex, fontWeight: '600', height: '200px' }}> No Branches added yet </Box>
            )}
        </Box>
    );
}
