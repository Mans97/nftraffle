import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

(async() => {
  const startingBalance = stdlib.parseCurrency(10000);
  const accAlice = await stdlib.newTestAccount(startingBalance);
  
  const interact = { ...stdlib.hasRandom }
    
  const NUMTICKETS = 5
  const nftSupply = 10
  var accBobs = [] 

  const OUTCOME = [`Your number is not a match`, `Your number matches!`]

  console.log('Launching...');
  const ctcAlice = accAlice.contract(backend);
  
  console.log("Creator is creating the NFT")
  const theNFT = await stdlib.launchToken(accAlice, "The Monas", "NFT", {supply: 1})
  const nftParams = {
    nftID: parseInt(theNFT.id),
    numTickets: NUMTICKETS,
  }

  const bobTurn = async() => {
      for (var i = 0; i<nftParams.numTickets; i++){
        accBobs.push(await stdlib.newTestAccount(startingBalance));
        await accBobs[i].tokenAccept(nftParams.nftID);
        const ctc = accBobs[i].contract(backend, ctcAlice.getInfo())
        //await stdlib.wait(3)
        const num = interact.getNum(nftParams.numTickets);
        console.log(num)
        const apiscall = ctc.a.Bet;
        const bobiNum = await call(() => apiscall.betNum(num));
        console.log(`Bob`+i+` has the number `+bobiNum);
      }
    };

  const checkBobWin = async() => {
    for (var i = 0; i<accBobs.length; i++){
      const ctc = accBobs[i].contract(backend, ctcAlice.getInfo())
      const apiscall = ctc.a.Bet;
      const bobiWin = await call(() => apiscall.checkWin());
      if(bobiWin){
        console.log(`Bob`+i+` has win`);
        await stdlib.wait(2)
        const bal = await getBalance(accBobs[i]);
        console.log(`Bob`+i+` balance of the NFT `,nftParams.nftID,` is ${bal}`)
      }
      else {
        console.log(`Bob`+i+` has lost`);
      }
    }
  }
  

  interact.startRuffle = () => {
    console.log(`Ruffle information has been sent to the contract`);
    return nftParams;
  }

  interact.seeHash = (value) => {
    console.log(`Winning number HASH: ${value}`);
  }

  interact.seeWinningNum = (value) => {
    console.log(`The winning number is ${value}`);
  }
  
  interact.log = async (...args) => {
    console.log(...args)
  };

  const call = async (f) => {
    let res = undefined;
    try {
      res = await f();
      //console.log(`res`, res);
      return res;
    } catch (e) {
      res = [`err`, e]
      //console.log(`res`, res);
      return false;
    }
  };
  
  const getBalance = async(acc) => await stdlib.balanceOf(acc, nftParams.nftID)

  interact.getNum = (numTickets) => {
    const num = Math.floor(Math.random() * numTickets) + 1;
    return num;
  },
  interact.seeOutcome = (num) => {
    console.log(`The outcome is ${OUTCOME[num]}`);
  }

  interact.BobTurn = () => {
    console.log(`sono qui`)
    bobTurn();
  }

  interact.checkWinners = () => {
    console.log(`check wins`);
    checkBobWin()
  }
  
  console.log('Starting backends...');
  await backend.Alice(ctcAlice, interact)
  
  console.log('Goodbye, Alice and Bobs!');
})()


