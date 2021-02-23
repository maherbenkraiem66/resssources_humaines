import { Component, useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import axios from "axios";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner";
import { Redirect } from "react-router-dom";
import { Password } from 'primereact/password';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const toast = useRef(null);
  let getToken = () => {
    setLoading(true)
    setLoggedIn(false);
    axios
      .post("http://localhost:8000/login_check", {
        username: username,
        password: password,
      })
      .then((response) => {
        toast.current.show({
          sticky: true,
          severity: "success",
          summary: "Error Message",
          detail: "maher",
        });
        localStorage.setItem("token", response.data.token);
        setLoading(false)
        setLoggedIn(true)
      })
      .catch((error) => {
        {
          toast.current.show({
            sticky: true,
            severity: "error",
            summary: "Login ou mot de passe incorrect",
            detail: "erreur",
          });
          setLoading(false)
          setLoggedIn(false)

        }
      })
      .then();
  };

  return (
    <Card title="Connexion" subTitle="Connecter sur la plateforme">
      <div style={{height:'50px'}}>
            <span className="p-ml-2" style={{height:'50px'}}>{loading ? <ProgressSpinner style={{ width: '35px' }} strokeWidth="4"  />
        : ''}</span>
        </div>
      <Divider type="dashed" />
      <div>
        <Toast ref={toast} />

        <h5>Nom d'utilisateur</h5>
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5>Mot de passe</h5>
        <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

      </div>
      <div className="p-mt-4" style={{ marginTop: 10 }}></div>
      <Button
        label="Connecter"
        className="p-mt-10 p-button-raised p-button-secondary p-button-text p-pb-1"
        onClick={getToken}
      />{" "}
    {loggedIn?<Redirect to="/collaborateurs/"/>:''}
    </Card>
  );
};

export default Login;
