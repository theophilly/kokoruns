import React, { useEffect, useState, createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';

import AppTab from '../../components/common/AppTab';
import FullWidthTabs from './association';
import Schools from './schools';
import Company from './company';
import api from '../../helpers/api';
import { ADD_ENTERPRISE_IDS } from '../../store/actionTypes/userDataActionTypes';
import { addEnterpriseEvents } from '../../store/actions/userDataActions';

const EnterpriseProfile = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({ empty: 1, associations: [], companies: [], schools: [] });
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const [associations, companies, schools] = await Promise.all([api.fetchAssociations(), api.fetchCompanies(), api.fetchSchools()]);
        // No pre-processing of our data from the server
        await setState({
            empty: null,
            associations: associations.data.associations,
            companies: companies.data.companies,
            schools: schools.data.schools
        });
        console.log('associations', associations);
        console.log('companies', companies);
        console.log('schools', schools);
        await dispatch(
            addEnterpriseEvents({
                associations: associations.data.associations,
                companies: companies.data.companies,
                schools: schools.data.schools
            })
        );
        await dispatch({
            type: ADD_ENTERPRISE_IDS,
            payload: {
                associations: associations.data.associations,
                companies: companies.data.companies,
                schools: schools.data.schools
            }
        });
    }

    return (
        <div>
            {state.empty ? (
                <div></div>
            ) : (
                <AppTab
                    Tab1Label="Company"
                    Tab2Label="School"
                    Tab3Label="Association"
                    Tab1={<Company />}
                    Tab2={<Schools />}
                    Tab3={<FullWidthTabs />}
                />
            )}
        </div>
    );
};

export default EnterpriseProfile;
