import React from 'react';
import AssociationSetup from './AssociationSetup';
import AssociationHome from './AssociationHome';
import { useSelector } from 'react-redux';

export default function Profile() {
    const { associations } = useSelector((state) => state.userDataReducer.enterprise_ids);

    if (associations.length === 0) {
        return <AssociationSetup />;
    } else {
        return <AssociationHome />;
    }
}
