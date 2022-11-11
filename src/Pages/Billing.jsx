import React from 'react';
import ErrorMaintenance from '../Components/ErrorMaintenance';
import SidebarSettings from '../Components/SidebarSettings';
const Billing = ({setLogged}) => {
    return (
        <div className='flex'>
        <SidebarSettings setLogged={setLogged}/>
        <ErrorMaintenance />
</div>
    );
};

export default Billing;