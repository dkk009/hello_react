import Button from "./components/Buttons";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
/*
function App() {
  let cityNames = ["Delhi", "Banglore", "Chennai", "Mumbai", "Jaipur"];
  return (
    <div>
      {" "}
      <ListGroup
        items={cityNames}
        heading="City Names"
        onItemSelect={(item) => console.log("Selected City:", item)}
      />
    </div>
  );
}
*/

function App() {
  const [alertVisibility, setAlertVisbility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisbility(false)}>Hello Alert</Alert>
      )}

      <Button onClick={() => setAlertVisbility(true)} color="primary">
        Hello Button
      </Button>
    </div>
  );
}
export default App;
