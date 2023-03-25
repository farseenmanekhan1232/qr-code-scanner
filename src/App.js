import QrScanner from "./components/QrScanner/QrScanner.jsx";

import { useState } from "react";

import "./App.css";

const App = () => {
  const [qrValue, setQrData] = useState(undefined);
  if (qrValue) {
    console.log(qrValue);
  }
  return (
    <div className="App">
      <QrScanner GetQrData={setQrData} qrValue={qrValue} />
    </div>
  );
};

export default App;
