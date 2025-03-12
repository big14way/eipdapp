import { ethers } from "ethers";

const WalletConnect = ({ account, setAccount }) => {
  const connectWallet = async () => {
    try {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
        params: []
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{
          eth_accounts: {}
        }]
      });
      setAccount('');
      console.log("wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected Account: {account}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </>
      )}
    </div>
  );
};

export default WalletConnect; 