import { useState } from "react";

import './App.css'
import WalletConnect from './components/WalletConnect'
import TransactionComponent from './components/TransactionComponent'
import NetworkManager from './components/NetworkManager'
import { useEthereumEvents } from './hooks/useEthereumEvents'

function App() {
  const [account, setAccount] = useState('')

  useEthereumEvents(setAccount)

  return (
    <div className="App">
      <h1>Web3 Mini DApp</h1>
      
      <WalletConnect 
        account={account}
        setAccount={setAccount}
      />

      {account && (
        <>
          <TransactionComponent account={account} />
          <NetworkManager />
        </>
      )}
    </div>
  )
}

export default App
