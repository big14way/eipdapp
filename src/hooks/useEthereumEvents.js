import { useEffect } from 'react';

export const useEthereumEvents = (setAccount) => {
  useEffect(() => {
    const ethereum = window.ethereum;
    
    if (ethereum) {
      ethereum.on("chainChanged", (chain) => {
        console.log("Chain changed to:", chain);
        window.location.reload();
      });

      ethereum.on("accountsChanged", (accounts) => {
        console.log("Account changed to:", accounts[0]);
        setAccount(accounts[0] || '');
      });
    }

    return () => {
      if (ethereum) {
        ethereum.removeListener("chainChanged", () => {});
        ethereum.removeListener("accountsChanged", () => {});
      }
    };
  }, [setAccount]);
  
}; 