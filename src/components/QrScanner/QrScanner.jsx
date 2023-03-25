import React, { useState } from "react";
import QrReader from "react-qr-scanner";

import "./QrScanner.css";


const QrScanner = ({GetQrData , qrValue})=>{
  const [err, setErr] = useState(false);
  const ScanData= (data)=>{
    setErr(false);
    if(data){
      if(qrValue!==data.text) GetQrData(data.text);
    }
  }
  const Errorhandle= (error)=>{  
    setErr(true);
  }

  return(
  <div >
    {
      err?
      <div className="Reload-page">
        <div className="refresh" onClick={() => window.location.reload(true)}>Please Refresh</div>
      </div>
      :
      <div>
        <h2 className="heading">
          Scan Farmer ID
        </h2>
        <QrReader onScan={ScanData} onError={Errorhandle}/>
        
        <h4 className="heading">
          FARMER ID :  {
            qrValue
          }</h4>
      </div>

    }
  </div>);
}

export default QrScanner;