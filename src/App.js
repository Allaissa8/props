
import './App.css';
import Input from './components/input';
import Button from './components/button';
import React from 'react';
import Image from './components/image';
import cite from './cite.jpg'
function App() {

  return (
    <>
      <div className="App">
        <div className="image-block">
          <Image
            src={cite}
            borderRadius="50%"
            width="100px"
            height="100px" />
          <Image
            src={cite}
            borderRadius="50%"
            width="100px"
            height="100px" />
        </div>
        <div className="image-block">
        <Image
            src={cite}
            borderRadius="50%"
            width="100px"
            height="100px" />
          <Image
            src={cite}
            borderRadius="50%"
            width="100px"
            height="100px" />
        </div>
        <div className="input-block">
          <Input
            id="input"
            borderRadius="20px"
            border="none"
            borderBottom="3px solid black"
            color="#000000"
            placeHolder="Textfield 1"
          />
          <Input
            id="input"
            borderRadius="20px"
            border="none"
            color="#000000"
            borderBottom="3px solid black"
            placeHolder="Textfield 2"
          />
        </div>
        <div className="input-block">
          <Input
            border="3px solid #3F3F3F"
            color="#000000"
            placeHolder="Textfield 3"
            backgroundColor="#21B24B"
          />
          <Input
            border="3px solid #3F3F3F"
            color="#000000"
            placeHolder="Textfield 3"
            backgroundColor="#21B24B"
          />
        </div>
        <div className="button-block">
          <Button
            backgroundColor="#FF0000"
            label="Cancel"
          />
          <Button
            backgroundColor="#007bff"
            label="Submit"
          />
        </div>
      </div>



    </>
  );
}

export default App;
