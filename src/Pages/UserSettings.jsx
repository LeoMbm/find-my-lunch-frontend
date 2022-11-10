import { Sidebar } from 'flowbite-react';
import React from 'react';
import SidebarSettings from '../Components/SidebarSettings';



const UserSettings = ({setLogged}) => {
    return (
        <div>
          <SidebarSettings setLogged={setLogged}/>
</div>
    );
};

export default UserSettings;