import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import 'primeflex/primeflex.css';
import Navbar from './navbar';
import axios from "axios";
import { Button } from "primereact/button";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CollaborateurListing = () => {
    const actionBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => alert(rowData.id)} />
                <Button icon="pi pi-trash" style={{ marginLeft: '5px' }} className="p-button-rounded p-button-warning" onClick={() => alert('delete')} />
            </React.Fragment>
        );
    }
    const toast = useRef(null);
    let token = localStorage.getItem("token");
    const baseURL = "http://localhost:8000/api/";

    const [collaborateurs, setCollaborateurs] = useState([]);
    useEffect(() => {

        axios
            .get(
                baseURL + "collaborateurs",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {

                setCollaborateurs(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                toast.current.show({
                    sticky: true,
                    severity: "error",
                    summary: "Login ou mot de passe incorrect",
                    detail: "401",
                });
            });

    }, []);


    const header = (
        <div className="table-header">
            Collaborateurs
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = "footer";

    return (
        <div className="p-grid">


            <div className="p-col-2">
            <FontAwesomeIcon icon={faHome} />
            </div>

            <div className="p-col-10">
            <Navbar/>
                <div className="datatable-templating-demo" style={{marginTop:'20px'}}>
                    <div className="card">
                        <Toast ref={toast} />

                        <DataTable
                            value={(collaborateurs)}


                        >
                            <Column field="nom" header="Nom"></Column>

                            <Column field="prenom" header="Prenom"></Column>
                            <Column field="telephone" header="Télephone"></Column>
                            <Column field="matricule" header="Matricule"></Column>
                            <Column body={actionBodyTemplate} header="Action">
                            </Column>

                        </DataTable>
                        <div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CollaborateurListing;
