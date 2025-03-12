const NetworkManager = () => {
  const switchToSepolia = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: '0xAA36A7' }]
      });
    } catch (error) {
      console.error("Error switching to Sepolia:", error);
    }
  };

  const switchToCore = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: '0x45a' }]
      });
    } catch (error) {
      if (error.code === 4902) {
        await addCoreChain();
      }
      console.error("Error switching to Core:", error);
    }
  };

  const addCoreChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x45a',
          chainName: 'Core Blockchain Testnet2',
          rpcUrls: ["https://rpc.test2.btcs.network"],
          nativeCurrency: {
            name: 'tCORE2',
            symbol: 'tCORE2',
            decimals: 18
          }
        }]
      });
    } catch (error) {
      console.error("Error adding Core chain:", error);
    }
  };

  return (
    <div>
      <h3>Network Management</h3>
      <button onClick={switchToSepolia}>Switch to Sepolia</button>
      <button onClick={switchToCore}>Switch to Core</button>
    </div>
  );
};

export default NetworkManager; 