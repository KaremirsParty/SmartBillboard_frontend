import { Injectable } from "@angular/core";
import { array } from "prop-types";
import { Subject } from "rxjs";
import file from './abi/AdsBoard.json';
import Web3 from "web3";
declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class EthService {
  private web3js: Web3;
  private ethereum: any;
  private provider: any;
  public account: string;
  public isConnected: boolean;

  
    constructor() {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
      this.ethereum = window.ethereum;
      this.web3js = new Web3(window.ethereum);
      console.log(this.web3js);

      this.isConnected = this.ethereum.selectedAddress !== null;
      this.account = this.ethereum.selectedAddress;

      var parsed= JSON.parse(JSON.stringify(file));
      var abi = parsed.abi;
      

      var contract = new this.web3js.eth.Contract(abi, "address");
      console.log(contract);
    }

  async connectAccount() {
    let acc = await this.ethereum.request({ method: 'eth_requestAccounts' });

    if (acc.length) {
      this.account = acc[0];
      this.isConnected = true;
    } else {
      this.account = "";
      this.isConnected = false;
    }
  }

  async getBalance() {
    const balance = await this.web3js.eth.getBalance(this.account);
    return this.web3js.utils.fromWei(balance, 'ether');
  }
  
}