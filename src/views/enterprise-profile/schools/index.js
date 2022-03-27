import React from 'react';
import SchoolSetup from './SchoolSetup';
import SchoolHome from './SchoolHome';
import { useSelector } from 'react-redux';

export default function Profile({ setReload }) {
    const { schools } = useSelector((state) => state.userDataReducer.enterprise_ids);

    if (schools.length === 0) {
        return <SchoolSetup />;
    } else {
        return <SchoolHome setReload={setReload} />;
    }
}
