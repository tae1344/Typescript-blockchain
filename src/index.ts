import * as CryptoJS from "crypto-js";

class Block {
  public index:number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data:string):string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();


  constructor(index:number ,previousHash: string ,data: string ,hash: string ,timestamp: number
  ){
    this.index =index;
    this.hash=hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock:Block = new Block(0, "2020202002020", "","Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1]; //가장 마지막 요소

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};