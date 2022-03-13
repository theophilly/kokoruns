import React from 'react';
import Events from './Events';
import Ebroadcast from './Ebroadcast';
import Esolutions from './Esolutions';
import ProfileTab from '../../../../components/common/ProfileTab';

export default function FullWidthTabs() {
    return (
        <ProfileTab
            Tab1Label="Events"
            Tab2Label="E-Solutions"
            Tab3Label="E-Broadcast"
            Tab1={<Events />}
            Tab2={<Esolutions />}
            Tab3={<Ebroadcast />}
        />
    );
}
