import React, { useEffect, useState } from 'react';

import CompanyBranchesTab from './company/CompanyBranchesTab';
import AppTab from '../../../components/common/AppTab';
import api from '../../../helpers/api';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import SchoolBranchesTab from './school/SchoolBranchesTab';
import AssociationBranchesTab from './association/AssociationBranchesTab';

export default function BranchesTab() {
    const [state, setState] = useState({ schools: [], companies: [], associations: [] });
    const { schools, companies, associations } = useSelector((state) => state.userDataReducer.enterprise_ids);
    useEffect(() => {
        const fectchData = async () => {
            const [schoolss, companiess, associationss] = await Promise.all([
                api.fetchSchoolBranches(schools[0]?.school_id).catch((error) => console.log(error)),
                api.fetchCompanyBranches(companies[0]?.company_id).catch((error) => console.log(error)),
                api.fetchAssociationBranches(associations[0]?.association_id).catch((error) => console.log(error))
            ]);

            if (schoolss === undefined && companiess === undefined && associationss === undefined) {
                await setState({
                    schools: [],
                    companies: [],
                    associations: []
                });
            } else {
                await setState({
                    schools: schoolss?.data.schoolbranches,
                    companies: companiess?.data.companybranches,
                    associations: associationss?.data.associationbranches
                });
            }
        };
        fectchData();
    }, []);
    console.log(state);
    return (
        <div>
            <AppTab
                Tab1={<CompanyBranchesTab data={state.companies} />}
                Tab1Label="Company"
                Tab2={<SchoolBranchesTab data={state.schools} />}
                Tab2Label="School"
                Tab3={<AssociationBranchesTab data={state.associations} />}
                Tab3Label="Association"
            />
        </div>
    );
}
