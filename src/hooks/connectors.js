import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from '@binance-chain/bsc-connector';


export const POLLING_INTERVAL = 12000;
export const infura_Id = "84842078b09946638c03157f83405213";

export const injected = new InjectedConnector({
    supportedChainIds: [3],
});

export const RPC_URLS = {
    // 56: "https://bsc-dataseed.binance.org/",
    // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
    3 : "https://ropsten.infura.io/v3/cb39df74f5d242b6bf3dc9589c9ae8af" 
};

export const walletconnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    qrcode: true,
    infuraId: infura_Id,
});


export const bscwallet = new BscConnector({
    supportedChainIds: [3] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
  })
