  
import React from "react";
import { Redirect } from "react-router-dom";
import CollaborateurListing from "./views/collaborateursListing";

// Layout Types


// Route Views
import Login from "./views/login";
import Messaging from "./views/messaging";
export default [

  {
    path: "/login",
    component: Login
  },
  {
    path: "/collaborateurs",
    component: CollaborateurListing
  },
  {
      path:"/messaging",
      component:Messaging
  }
];