import React, { useEffect, useState } from 'react';

import AppTab from '../../../components/common/AppTab';
import api from '../../../helpers/api';
import { useSelector } from 'react-redux';
import SchoolGalleryTab from './SchoolGalleryTab';
import AssociationGalleryTab from './AssociationGalleryTab';
import CompanyGalleryTab from './CompanyGalleryTab';

export default function BranchesTab() {
    const [state, setState] = useState({ schools: [], companies: [], associations: [] });
    const [reload, setReload] = useState(0);
    const { schools, companies, associations } = useSelector((state) => state.userDataReducer.enterprise_ids);
    useEffect(() => {
        const fectchData = async () => {
            const [schoolss, companiess, associationss] = await Promise.all([
                api.fetchSchoolGalleries(schools[0]?.school_id).catch((error) => console.log(error)),
                api.fetchCompanyGalleries(companies[0]?.company_id).catch((error) => console.log(error)),
                api.fetchAssociationGalleries(associations[0]?.association_id).catch((error) => console.log(error))
            ]);
            if (schoolss === undefined && companiess === undefined && associationss === undefined) {
                await setState({
                    schools: [],
                    companies: [],
                    associations: []
                });
            } else {
                await setState({
                    schools: schoolss?.data.schoolgalleries ?? [],
                    companies: companiess?.data.companygalleries ?? [],
                    associations: associationss?.data.associationgalleries ?? []
                });
            }
        };
        fectchData();
    }, [reload]);
    console.log(state);
    return (
        <div>
            <AppTab
                Tab1={<CompanyGalleryTab setReload={setReload} data={state.companies} />}
                Tab1Label="Company"
                Tab2={<SchoolGalleryTab setReload={setReload} data={state.schools} />}
                Tab2Label="School"
                Tab3={<AssociationGalleryTab setReload={setReload} data={state.associations} />}
                Tab3Label="Association"
            />
        </div>
    );
}
