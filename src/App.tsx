import React from 'react';

import './index.css';
import { ConnectButton } from "web3uikit"

function App() {
  return (
    <div className="hidden ">
      <header className=" border hidden border-black bg-black">
        
        <div className="ml-auto py-2 w-24  bg-black h-11 px-4 border hidden">
                <ConnectButton moralisAuth={false}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
