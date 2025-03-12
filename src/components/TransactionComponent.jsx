import { ethers } from 'ethers';

const TransactionComponent = ({ account }) => {
  const sendTransaction = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: "0xF1a1517074aaC42C8Ecd185BB2A5fad9a054bD68",
            value: "0x9184e72a", // 2441406250
          },
        ]
      });
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div>
      <h3>Send Transaction</h3>
      <button onClick={sendTransaction}>Send ETH</button>
    </div>
  );
};

export default TransactionComponent; 