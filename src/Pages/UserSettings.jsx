import { Sidebar } from 'flowbite-react';
import React from 'react';
import ErrorMaintenance from '../Components/ErrorMaintenance';
import SidebarSettings from '../Components/SidebarSettings';




const UserSettings = ({setLogged}) => {
    return (
        <div className='flex'>
          <SidebarSettings setLogged={setLogged}/>
          <ErrorMaintenance />
</div>
    );
};

export default UserSettings;