import React from 'react';
import ErrorMaintenance from '../Components/ErrorMaintenance';
import SidebarSettings from '../Components/SidebarSettings';
const Account = ({setLogged}) => {
    return (
        <div className='flex'>
        <SidebarSettings setLogged={setLogged} />
        <ErrorMaintenance />
</div>
    );
};

export default Account;