import React from 'react';
import CompanySetup from './CompanySetup';
import CompanyHome from './CompanyHome';
import { useSelector } from 'react-redux';

export default function Profile() {
    const { companies } = useSelector((state) => state.userDataReducer.enterprise_ids);

    if (companies.length === 0) {
        return <CompanySetup />;
    } else {
        return <CompanyHome />;
    }
}
