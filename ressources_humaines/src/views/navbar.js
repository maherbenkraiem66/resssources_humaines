import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import iconMap from './iconMapping';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const  Navbar = () => {
    console.log(iconMap.faChevronDown)
    const items = [
        {label: 'Home', icon:'pi pi-fw pi-home'
    },
        {label: 'Collaborateurs', icon:'pi pi-wf pi-users'
    },
        {label: 'Conges', icon: 'pi pi-fw pi-calendar-plus'},
        {label: 'Absences', icon: 'pi pi-fw pi-calendar-plus'},
        {label: 'Sortie Exceptionnelles', icon: 'pi pi-fw pi-calendar-plus'},
        {label: 'Pointages', icon: 'pi pi-fw pi-clock'},
        {
            label:'Assurances', icon:'pi pi-fw pi-file'
        }

    ];

    return (
        <div>
            
            <Menubar
  model={items}
/>          
        </div>
    );
}
export default Navbar;