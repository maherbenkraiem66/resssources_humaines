import React, { useState, useEffect } from "react";
const ENDPOINT = "ws://127.0.0.1:8000?token="+localStorage.getItem("token");

function Messaging() {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState(0);
  var conn = new WebSocket(ENDPOINT);
  /*   let message={
      id_sender:localStorage.getItem("token"),
      id_reciever:7,
      message:"hello message to 7"
  } */

  useEffect(() => {
    conn.onopen = function (e) {
      console.info("Connection established succesfully");
    };
    conn.onmessage = function (e) {
      // var data = JSON.parse(e.data);
      console.log(e.data + " 1");

      setResponse(e.data);
    };
    conn.onerror = function (e) {
      alert("Error: something went wrong with the socket.");
      console.error(e);
    };
  }, []);
  let sendmessage = (message) => {
    setMessage(message + 1);
    conn.send(JSON.stringify({id_sender:6,id_reciever: 7,message:"message from maher bk"}));
  };

  return (
    <p>
      It's {response}
      <button
        value="sendmessage"
        onClick={() => {
          sendmessage(message);
        }}
      >
        sendmessage
      </button>
    </p>
  );
}

export default Messaging;
