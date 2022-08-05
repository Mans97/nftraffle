'reach 0.1';

const amt = 1;

const [isOutcome, B_WINS, B_LOSE] = makeEnum(2)

const winner = (bobN, winN) => ( (bobN == winN) ? 0 : 1 )

forall(UInt, winN =>
  forall(UInt, bobN => 
    assert(isOutcome(winner(bobN,winN)))))

const Shared = {
  getNum: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null)
}

export const main = Reach.App(() => {

  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Shared,
    ...hasRandom,
    ...hasConsoleLogger,
    startRuffle: Fun([], Object( {
      nftID: Token,
      numTickets:UInt,
    })),
    seeHash: Fun([Digest], Null),
    seeWinningNum: Fun([UInt], Null),
    BobTurn: Fun([], Null),
    checkWinners: Fun([], Null),
    
  });

  const Bet = API('Bet', { 
    betNum: Fun([UInt], UInt),
    checkWin: Fun([], Bool)
  });
  setOptions({ untrustworthyMaps: true });
  init();

  

  A.only(() => { 
    const {nftID, numTickets} = declassify(interact.startRuffle());
    const _winningNum = interact.getNum(numTickets);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum);
    const commitA = declassify(_commitA);
  })
  // The first one to publish deploys the contract
  A.publish(nftID, numTickets, commitA)
  A.interact.seeHash(commitA)
  commit();
  A.pay([[amt, nftID]]);
  commit();
  A.publish();

  const biddersMap = new Map(Address, UInt);

  A.interact.BobTurn();

  const [ remainingBidders ] = 
    parallelReduce([ numTickets ])
      .invariant( balance() == 0 )
      .while( remainingBidders > 0 ) 
      .api(Bet.betNum,
        (num,r) => {
          r(num);
          biddersMap[this] = num;
          return [remainingBidders - 1]
        }
      )
  commit();
    
  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  })
  A.publish(saltA, winningNum);
  checkCommitment(commitA, saltA, winningNum);
  commit();

  A.publish();
  A.interact.seeWinningNum(winningNum);
  A.interact.checkWinners();

  const [ remainingTokens, checkBidders ] = 
    parallelReduce([ amt, numTickets ])
      .invariant( balance() == 0 )
      .while( remainingTokens >= 1 && checkBidders >= 1 && balance(nftID) > 0)
      .api(Bet.checkWin,
        (r) => {
          const bNum = fromSome(biddersMap[this],0);
          
          const outcome = winner(bNum, winningNum)

          assert(outcome == B_WINS || outcome == B_LOSE)
       
          if(outcome == B_WINS){
            r(true) 
            transfer(1, nftID).to(this)
            delete biddersMap[this];
            return [ remainingTokens - 1, checkBidders - 1 ]
          }
          else {
            r(false)
            delete biddersMap[this];
            return [ remainingTokens, checkBidders - 1 ]
          }
        }
      )
    
  if(balance(nftID)>0){
    transfer(balance(nftID), nftID).to(A)
  }
  
  commit();
  exit();
});
