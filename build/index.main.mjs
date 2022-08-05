// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc6],
      5: [ctc0, ctc1, ctc2, ctc6, ctc2],
      9: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc6],
      10: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftID: ctc3,
    numTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v289 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v290 = [v289];
  const v303 = stdlib.protect(ctc4, await interact.startRuffle(), {
    at: './index.rsh:46:64:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'startRuffle',
    who: 'Alice'
    });
  const v304 = v303.nftID;
  const v305 = v303.numTickets;
  const v308 = stdlib.protect(ctc1, await interact.getNum(v305), {
    at: './index.rsh:47:40:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v309 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:48:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v310 = stdlib.digest(ctc5, [v309, v308]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v305, v310],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v313, v314, v315], secs: v317, time: v316, didSend: v51, from: v312 } = txn1;
      
      const v318 = v290[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
      const v320 = v318[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
      const v321 = v318[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
      const v322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v320, v321];
      const v323 = stdlib.Array_set(v290, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v322);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v313
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v313, v314, v315], secs: v317, time: v316, didSend: v51, from: v312 } = txn1;
  const v318 = v290[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
  const v320 = v318[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
  const v321 = v318[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
  const v322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v320, v321];
  const v323 = stdlib.Array_set(v290, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v322);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v315), {
    at: './index.rsh:53:21:application',
    fs: ['at ./index.rsh:53:21:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at ./index.rsh:53:21:application call to "liftedInteract" (defined at: ./index.rsh:53:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v312, v313, v314, v315, v323],
    evt_cnt: 0,
    funcNum: 1,
    lct: v316,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v313]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v328, time: v327, didSend: v62, from: v326 } = txn2;
      
      ;
      const v329 = v323[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
      const v330 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
      const v331 = stdlib.add(v330, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v334 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '1')];
      const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '2')];
      const v336 = [v331, v334, v335];
      const v337 = stdlib.Array_set(v323, stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), v336);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v313
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v328, time: v327, didSend: v62, from: v326 } = txn2;
  ;
  const v329 = v323[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
  const v330 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
  const v331 = stdlib.add(v330, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v334 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '1')];
  const v335 = v329[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '2')];
  const v336 = [v331, v334, v335];
  const v337 = stdlib.Array_set(v323, stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), v336);
  ;
  const v338 = stdlib.addressEq(v312, v326);
  stdlib.assert(v338, {
    at: './index.rsh:55:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v312, v313, v314, v315, v337],
    evt_cnt: 0,
    funcNum: 2,
    lct: v327,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v341, time: v340, didSend: v67, from: v339 } = txn3;
      
      ;
      
      const v344 = v314;
      const v345 = v340;
      const v351 = v337;
      
      if (await (async () => {
        const v355 = stdlib.gt(v344, stdlib.checkedBigNumberify('./index.rsh:66:34:decimal', stdlib.UInt_max, '0'));
        
        return v355;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v341, time: v340, didSend: v67, from: v339 } = txn3;
  ;
  const v342 = stdlib.addressEq(v312, v339);
  stdlib.assert(v342, {
    at: './index.rsh:57:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.BobTurn(), {
    at: './index.rsh:61:21:application',
    fs: ['at ./index.rsh:61:21:application call to [unknown function] (defined at: ./index.rsh:61:21:function exp)', 'at ./index.rsh:61:21:application call to "liftedInteract" (defined at: ./index.rsh:61:21:application)'],
    msg: 'BobTurn',
    who: 'Alice'
    });
  
  let v344 = v314;
  let v345 = v340;
  let v351 = v337;
  
  while (await (async () => {
    const v355 = stdlib.gt(v344, stdlib.checkedBigNumberify('./index.rsh:66:34:decimal', stdlib.UInt_max, '0'));
    
    return v355;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v364], secs: v366, time: v365, didSend: v109, from: v363 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v368 = v364[stdlib.checkedBigNumberify('./index.rsh:67:11:spread', stdlib.UInt_max, '0')];
    await txn4.getOutput('Bet_betNum', 'v368', ctc1, v368);
    await stdlib.mapSet(map0, v363, v368);
    const v375 = stdlib.sub(v344, stdlib.checkedBigNumberify('./index.rsh:71:38:decimal', stdlib.UInt_max, '1'));
    const cv344 = v375;
    const cv345 = v365;
    const cv351 = v351;
    
    v344 = cv344;
    v345 = cv345;
    v351 = cv351;
    
    continue;
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v312, v313, v314, v315, v351, v309, v308],
    evt_cnt: 2,
    funcNum: 4,
    lct: v345,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v380, v381], secs: v383, time: v382, didSend: v130, from: v379 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v380, v381], secs: v383, time: v382, didSend: v130, from: v379 } = txn4;
  ;
  const v384 = stdlib.addressEq(v312, v379);
  stdlib.assert(v384, {
    at: './index.rsh:80:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v385 = stdlib.digest(ctc5, [v380, v381]);
  const v386 = stdlib.digestEq(v315, v385);
  stdlib.assert(v386, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:81:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v312, v313, v314, v351, v381],
    evt_cnt: 0,
    funcNum: 5,
    lct: v382,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v389, time: v388, didSend: v138, from: v387 } = txn5;
      
      ;
      
      
      const v393 = v314;
      const v394 = stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1');
      const v395 = v388;
      const v401 = v351;
      
      if (await (async () => {
        const v405 = stdlib.ge(v394, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
        const v406 = stdlib.ge(v393, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
        const v407 = v405 ? v406 : false;
        const v408 = v401[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v409 = v408[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v410 = stdlib.gt(v409, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
        const v411 = v407 ? v410 : false;
        
        return v411;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v465 = v401[stdlib.checkedBigNumberify('./index.rsh:114:13:application', stdlib.UInt_max, '0')];
        const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:114:13:application', stdlib.UInt_max, '0')];
        const v467 = stdlib.gt(v466, stdlib.checkedBigNumberify('./index.rsh:114:21:decimal', stdlib.UInt_max, '0'));
        if (v467) {
          sim_r.txns.push({
            kind: 'from',
            to: v312,
            tok: v313
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v313
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v313
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc12, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v389, time: v388, didSend: v138, from: v387 } = txn5;
  ;
  const v390 = stdlib.addressEq(v312, v387);
  stdlib.assert(v390, {
    at: './index.rsh:84:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.seeWinningNum(v381), {
    at: './index.rsh:85:27:application',
    fs: ['at ./index.rsh:85:27:application call to [unknown function] (defined at: ./index.rsh:85:27:function exp)', 'at ./index.rsh:85:27:application call to "liftedInteract" (defined at: ./index.rsh:85:27:application)'],
    msg: 'seeWinningNum',
    who: 'Alice'
    });
  
  stdlib.protect(ctc0, await interact.checkWinners(), {
    at: './index.rsh:86:26:application',
    fs: ['at ./index.rsh:86:26:application call to [unknown function] (defined at: ./index.rsh:86:26:function exp)', 'at ./index.rsh:86:26:application call to "liftedInteract" (defined at: ./index.rsh:86:26:application)'],
    msg: 'checkWinners',
    who: 'Alice'
    });
  
  let v393 = v314;
  let v394 = stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1');
  let v395 = v388;
  let v401 = v351;
  
  while (await (async () => {
    const v405 = stdlib.ge(v394, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
    const v406 = stdlib.ge(v393, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
    const v407 = v405 ? v406 : false;
    const v408 = v401[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v409 = v408[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v410 = stdlib.gt(v409, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
    const v411 = v407 ? v410 : false;
    
    return v411;})()) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v418], secs: v420, time: v419, didSend: v186, from: v417 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v417), null);
    const v423 = stdlib.fromSome(v422, stdlib.checkedBigNumberify('./index.rsh:94:50:decimal', stdlib.UInt_max, '0'));
    const v424 = stdlib.eq(v423, v381);
    const v425 = v424 ? stdlib.checkedBigNumberify('./index.rsh:7:51:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:55:decimal', stdlib.UInt_max, '1');
    const v426 = stdlib.eq(v425, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v426) {
      const v430 = true;
      await txn6.getOutput('Bet_checkWin', 'v430', ctc9, v430);
      const v436 = v401[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
      const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
      const v441 = stdlib.sub(v437, stdlib.checkedBigNumberify('./index.rsh:102:22:decimal', stdlib.UInt_max, '1'));
      const v444 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '1')];
      const v445 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '2')];
      const v446 = [v441, v444, v445];
      const v447 = stdlib.Array_set(v401, stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0'), v446);
      ;
      await stdlib.mapSet(map0, v417, undefined /* Nothing */);
      const v448 = stdlib.sub(v394, stdlib.checkedBigNumberify('./index.rsh:104:40:decimal', stdlib.UInt_max, '1'));
      const v449 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:104:58:decimal', stdlib.UInt_max, '1'));
      const cv393 = v449;
      const cv394 = v448;
      const cv395 = v419;
      const cv401 = v447;
      
      v393 = cv393;
      v394 = cv394;
      v395 = cv395;
      v401 = cv401;
      
      continue;}
    else {
      const v454 = false;
      await txn6.getOutput('Bet_checkWin', 'v454', ctc9, v454);
      await stdlib.mapSet(map0, v417, undefined /* Nothing */);
      const v460 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:109:54:decimal', stdlib.UInt_max, '1'));
      const cv393 = v460;
      const cv394 = v394;
      const cv395 = v419;
      const cv401 = v401;
      
      v393 = cv393;
      v394 = cv394;
      v395 = cv395;
      v401 = cv401;
      
      continue;}
    
    }
  const v465 = v401[stdlib.checkedBigNumberify('./index.rsh:114:13:application', stdlib.UInt_max, '0')];
  const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:114:13:application', stdlib.UInt_max, '0')];
  const v467 = stdlib.gt(v466, stdlib.checkedBigNumberify('./index.rsh:114:21:decimal', stdlib.UInt_max, '0'));
  if (v467) {
    ;
    return;
    }
  else {
    return;
    }
  
  
  
  
  
  
  
  
  
  };
export async function _Bet_betNum10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bet_betNum10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bet_betNum10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v312, v313, v314, v315, v344, v351] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8]);
  const v358 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)'],
    msg: 'in',
    who: 'Bet_betNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v312, v313, v314, v315, v344, v351, v358],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v364], secs: v366, time: v365, didSend: v109, from: v363 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bet_betNum"
        });
      ;
      const v368 = v364[stdlib.checkedBigNumberify('./index.rsh:67:11:spread', stdlib.UInt_max, '0')];
      const v369 = await txn1.getOutput('Bet_betNum', 'v368', ctc1, v368);
      
      await stdlib.simMapSet(sim_r, 0, v363, v368);
      const v375 = stdlib.sub(v344, stdlib.checkedBigNumberify('./index.rsh:71:38:decimal', stdlib.UInt_max, '1'));
      const v677 = v375;
      const v679 = v351;
      const v680 = stdlib.gt(v375, stdlib.checkedBigNumberify('./index.rsh:66:34:decimal', stdlib.UInt_max, '0'));
      if (v680) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v364], secs: v366, time: v365, didSend: v109, from: v363 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v368 = v364[stdlib.checkedBigNumberify('./index.rsh:67:11:spread', stdlib.UInt_max, '0')];
  const v369 = await txn1.getOutput('Bet_betNum', 'v368', ctc1, v368);
  if (v109) {
    stdlib.protect(ctc0, await interact.out(v364, v369), {
      at: './index.rsh:67:12:application',
      fs: ['at ./index.rsh:67:12:application call to [unknown function] (defined at: ./index.rsh:67:12:function exp)', 'at ./index.rsh:69:12:application call to "r" (defined at: ./index.rsh:68:17:function exp)', 'at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:17:function exp)'],
      msg: 'out',
      who: 'Bet_betNum'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v363, v368);
  const v375 = stdlib.sub(v344, stdlib.checkedBigNumberify('./index.rsh:71:38:decimal', stdlib.UInt_max, '1'));
  const v677 = v375;
  const v679 = v351;
  const v680 = stdlib.gt(v375, stdlib.checkedBigNumberify('./index.rsh:66:34:decimal', stdlib.UInt_max, '0'));
  if (v680) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Bet_checkWin9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bet_checkWin9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bet_checkWin9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v312, v313, v381, v393, v394, v401] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc7]);
  const v414 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:11:function exp)', 'at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:11:function exp)'],
    msg: 'in',
    who: 'Bet_checkWin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v312, v313, v381, v393, v394, v401, v414],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v418], secs: v420, time: v419, didSend: v186, from: v417 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bet_checkWin"
        });
      ;
      const v422 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v417), null);
      const v423 = stdlib.fromSome(v422, stdlib.checkedBigNumberify('./index.rsh:94:50:decimal', stdlib.UInt_max, '0'));
      const v424 = stdlib.eq(v423, v381);
      const v425 = v424 ? stdlib.checkedBigNumberify('./index.rsh:7:51:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:55:decimal', stdlib.UInt_max, '1');
      const v426 = stdlib.eq(v425, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v426) {
        const v430 = true;
        const v431 = await txn1.getOutput('Bet_checkWin', 'v430', ctc5, v430);
        
        const v436 = v401[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
        const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
        const v441 = stdlib.sub(v437, stdlib.checkedBigNumberify('./index.rsh:102:22:decimal', stdlib.UInt_max, '1'));
        const v444 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '1')];
        const v445 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '2')];
        const v446 = [v441, v444, v445];
        const v447 = stdlib.Array_set(v401, stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0'), v446);
        sim_r.txns.push({
          kind: 'from',
          to: v417,
          tok: v313
          });
        await stdlib.simMapSet(sim_r, 0, v417, undefined /* Nothing */);
        const v448 = stdlib.sub(v394, stdlib.checkedBigNumberify('./index.rsh:104:40:decimal', stdlib.UInt_max, '1'));
        const v449 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:104:58:decimal', stdlib.UInt_max, '1'));
        const v733 = v449;
        const v734 = v448;
        const v736 = v447;
        const v737 = stdlib.ge(v448, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
        const v738 = stdlib.ge(v449, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
        const v739 = v737 ? v738 : false;
        const v740 = v447[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v742 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
        const v743 = v739 ? v742 : false;
        if (v743) {
          sim_r.isHalt = false;
          }
        else {
          if (v742) {
            sim_r.txns.push({
              kind: 'from',
              to: v312,
              tok: v313
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v313
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v313
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v454 = false;
        const v455 = await txn1.getOutput('Bet_checkWin', 'v454', ctc5, v454);
        
        await stdlib.simMapSet(sim_r, 0, v417, undefined /* Nothing */);
        const v460 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:109:54:decimal', stdlib.UInt_max, '1'));
        const v747 = v460;
        const v748 = v394;
        const v750 = v401;
        const v751 = stdlib.ge(v394, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
        const v752 = stdlib.ge(v460, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
        const v753 = v751 ? v752 : false;
        const v754 = v401[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
        const v756 = stdlib.gt(v755, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
        const v757 = v753 ? v756 : false;
        if (v757) {
          sim_r.isHalt = false;
          }
        else {
          if (v756) {
            sim_r.txns.push({
              kind: 'from',
              to: v312,
              tok: v313
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v313
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v313
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v418], secs: v420, time: v419, didSend: v186, from: v417 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v417), null);
  const v423 = stdlib.fromSome(v422, stdlib.checkedBigNumberify('./index.rsh:94:50:decimal', stdlib.UInt_max, '0'));
  const v424 = stdlib.eq(v423, v381);
  const v425 = v424 ? stdlib.checkedBigNumberify('./index.rsh:7:51:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:55:decimal', stdlib.UInt_max, '1');
  const v426 = stdlib.eq(v425, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  if (v426) {
    const v430 = true;
    const v431 = await txn1.getOutput('Bet_checkWin', 'v430', ctc5, v430);
    if (v186) {
      stdlib.protect(ctc0, await interact.out(v418, v431), {
        at: './index.rsh:92:12:application',
        fs: ['at ./index.rsh:92:12:application call to [unknown function] (defined at: ./index.rsh:92:12:function exp)', 'at ./index.rsh:101:14:application call to "r" (defined at: ./index.rsh:93:13:function exp)', 'at ./index.rsh:93:13:application call to [unknown function] (defined at: ./index.rsh:93:13:function exp)'],
        msg: 'out',
        who: 'Bet_checkWin'
        });
      }
    else {
      }
    
    const v436 = v401[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
    const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0')];
    const v441 = stdlib.sub(v437, stdlib.checkedBigNumberify('./index.rsh:102:22:decimal', stdlib.UInt_max, '1'));
    const v444 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '1')];
    const v445 = v436[stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '2')];
    const v446 = [v441, v444, v445];
    const v447 = stdlib.Array_set(v401, stdlib.checkedBigNumberify('./index.rsh:102:34:application', stdlib.UInt_max, '0'), v446);
    ;
    await stdlib.mapSet(map0, v417, undefined /* Nothing */);
    const v448 = stdlib.sub(v394, stdlib.checkedBigNumberify('./index.rsh:104:40:decimal', stdlib.UInt_max, '1'));
    const v449 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:104:58:decimal', stdlib.UInt_max, '1'));
    const v733 = v449;
    const v734 = v448;
    const v736 = v447;
    const v737 = stdlib.ge(v448, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
    const v738 = stdlib.ge(v449, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
    const v739 = v737 ? v738 : false;
    const v740 = v447[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v742 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
    const v743 = v739 ? v742 : false;
    if (v743) {
      return;
      }
    else {
      if (v742) {
        ;
        return;
        }
      else {
        return;
        }}}
  else {
    const v454 = false;
    const v455 = await txn1.getOutput('Bet_checkWin', 'v454', ctc5, v454);
    if (v186) {
      stdlib.protect(ctc0, await interact.out(v418, v455), {
        at: './index.rsh:92:12:application',
        fs: ['at ./index.rsh:92:12:application call to [unknown function] (defined at: ./index.rsh:92:12:function exp)', 'at ./index.rsh:107:14:application call to "r" (defined at: ./index.rsh:93:13:function exp)', 'at ./index.rsh:93:13:application call to [unknown function] (defined at: ./index.rsh:93:13:function exp)'],
        msg: 'out',
        who: 'Bet_checkWin'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v417, undefined /* Nothing */);
    const v460 = stdlib.sub(v393, stdlib.checkedBigNumberify('./index.rsh:109:54:decimal', stdlib.UInt_max, '1'));
    const v747 = v460;
    const v748 = v394;
    const v750 = v401;
    const v751 = stdlib.ge(v394, stdlib.checkedBigNumberify('./index.rsh:91:34:decimal', stdlib.UInt_max, '1'));
    const v752 = stdlib.ge(v460, stdlib.checkedBigNumberify('./index.rsh:91:55:decimal', stdlib.UInt_max, '1'));
    const v753 = v751 ? v752 : false;
    const v754 = v401[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:91:67:application', stdlib.UInt_max, '0')];
    const v756 = stdlib.gt(v755, stdlib.checkedBigNumberify('./index.rsh:91:77:decimal', stdlib.UInt_max, '0'));
    const v757 = v753 ? v756 : false;
    if (v757) {
      return;
      }
    else {
      if (v756) {
        ;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function Bet_betNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bet_betNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bet_betNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 10) {return _Bet_betNum10(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bet_checkWin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bet_checkWin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bet_checkWin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bet_checkWin9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bet_betNum(uint64)uint64`, `Bet_checkWin()byte`],
    pure: [],
    sigs: [`Bet_betNum(uint64)uint64`, `Bet_checkWin()byte`]
    },
  appApproval: `BiAMAAEECAkgKAUClJef8gwKoI0GJgMBAAABASI1ADEYQQU9KWRJIls1ASVbNQIxGSMSQQAKMQAoIQSvZkIFCjYaABdJQQAiIjUEIzUGSSEJDEAACCEJEkQpQgCcgfni5EgSRDYaAUIAIzYaAhc1BDYaAzYaARdJJAxAAitJgQcMQAFVSSUMQABuJRJEIQo0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABGYf7tY0/1CwNP8XNf6ACAAAAAAAAAFwNP4WULA0/hY1BzEAKCo0/hZQZjQDVwAgNAMhBVs0AyEGWzQDVzAgNAOBUFsjCTIGNANXWBFCAxtIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBls1/YEwWzX8gThbNftXQBE1+kk1BTX5gATcqibeNPlQsCMiIjEAiAQ4STX4I1s0+CJVTTT9Ek0iEkEAVoAJAAAAAAAAAa4BsCo1BzT6VwARNfixIrIBI7ISJLIQMQCyFDT+shGzMQAoIQSvZjT/NP40/TT8Iwk0+yMJMgY0+CJbIwkWNPhXCAhQNPhXEAFQQgLBgAkAAAAAAAABxgCwKDUHMQAoIQSvZjT/NP40/TT8Iwk0+zIGNPpCAphJIQcMQABIIQcSRCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQVbNAOBQVs0AyEGWyMyBjQDVzARQgJJSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9V1ARNfxJNQVJIls1+yVbNfqABBBGrXM0+xZQNPoWULA0/zEAEkQ0A1cwIDT7FjT6FlABEkQ0/zT+FlA0/RZQNPxQNPoWUChLAVcASWdIIQc1ATIGNQJCAoVJIwxAANZJIQgMQABMIQgSRCEINAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBls1/oAEQbFATbA0/zEAEkQ0/zQDIQVbNP40A1cwIDT+MgY0A1dQEUIBEkgjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQZbNf1XMCA1/FdQETX7gASai5F0sDT7VwARSTX6IlsjCBY0+lcICFA0+lcQAVA1+SM0/ogCSzT/MQASRDT/NP4WUDT9FlA0/FA0+VAoSwFXAGFnSCEINQEyBjUCQgGpSCELiAIEIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yVbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsIERr0k1/FcAETX7Ja80+1cICFA0+1cQAVA1+iELiAGwsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/VA0+lAoSwFXAGFnSCM1ATIGNQJCARo1/zX+Nf01/DX7Nfo1+TT9Ig1BACc0+TT6FlA0+xZQNPxQNP0WUDT/UChLAVcAaWdIIQo1ATIGNQJCAN40+TT6FlA0+xZQNPxQNP9QKEsBVwBhZ0gkNQEyBjUCQgC8Nf81/jX9Nfw1+zX6Nfk0/1cAESJbSTX4Ig019zT9Iw80/CMPEDT3EEEAKDT5NPoWUDT7FlA0/BZQNP0WUDT/UChLAVcAUWdIIQQ1ATIGNQJCAGk090EALrEisgE0+LISJLIQNPmyFDT6shGzsSKyASKyEiSyEDIJshUyCrIUNPqyEbNCABqxIrIBIrISJLIQMgmyFTIKshQ0+rIRs0IAADEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghBK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v313",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v315",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v313",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v315",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v418",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v364",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v368",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v430",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v454",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bet_betNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bet_checkWin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v418",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v364",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620027b4380380620027b483398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b6121e080620005d46000396000f3fe6080604052600436106100a55760003560e01c8063832307571161006157806383230757146101505780638e314769146101655780638f3c54f414610178578063ab53f2c61461018b578063ebdbfdcc146101ae578063efd1c683146101c157005b80630ca328e4146100ae5780631e93b0f1146100c157806326b3921a146100e55780632c10a159146100fd5780633bc5b7bf146101105780637eea518c1461013d57005b366100ac57005b005b6100ac6100bc366004611a0d565b6101d4565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ed610204565b60405190151581526020016100dc565b6100ac61010b366004611a0d565b61023f565b34801561011c57600080fd5b5061013061012b366004611a3e565b61026b565b6040516100dc9190611a71565b6100ac61014b366004611a0d565b610297565b34801561015c57600080fd5b506001546100d2565b6100ac610173366004611a0d565b6102c3565b6100ac610186366004611a0d565b6102ef565b34801561019757600080fd5b506101a061031b565b6040516100dc929190611ae2565b6100ac6101bc366004611b1c565b6103b8565b6100d26101cf366004611b2e565b6103e4565b60408051808201909152600080825260208201526102006101fa36849003840184611bef565b82610420565b5050565b600061020e6116cf565b60208082015160009081905260408051808201909152818152918201526102358282610627565b6020015192915050565b604080518082019091526000808252602082015261020061026536849003840184611c54565b826109d4565b604080516060810182526000808252602082018190529181019190915261029182610bf8565b92915050565b60408051808201909152600080825260208201526102006102bd36849003840184611c54565b82610cca565b60408051808201909152600080825260208201526102006102e936849003840184611c54565b82610e5e565b604080518082019091526000808252602082015261020061031536849003840184611c8c565b82610627565b60006060600054600280805461033090611ce6565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90611ce6565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102006103de36849003840184611d1b565b82610ff5565b60006103ee6116fe565b60208082015151849052604080518082019091526000808252918101919091526104188282610420565b519392505050565b610430600a60005414601e611206565b815161044b90158061044457508251600154145b601f611206565b60008080556002805461045d90611ce6565b80601f016020809104026020016040519081016040528092919081815260200182805461048990611ce6565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b50505050508060200190518101906104ee9190611e95565b60408051338152855160208083019190915286015151518183015290519192507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae248919081900360600190a16105453415601d611206565b60208381015151516040519081527f8efc7afe8bcdec09a62958abfe1dc0205b68106da95461c13a443dd0a3888474910160405180910390a1602083810180515151845233600090815260049092526040909120805460ff191660019081178255915151519101556105b561172b565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516105fc90600190611ec8565b602080830180519290925281514391015260a08301519051604001526106218161122c565b50505050565b610637600960005414601b611206565b815161065290158061064b57508251600154145b601c611206565b60008080556002805461066490611ce6565b80601f016020809104026020016040519081016040528092919081815260200182805461069090611ce6565b80156106dd5780601f106106b2576101008083540402835291602001916106dd565b820191906000526020600020905b8154815290600101906020018083116106c057829003601f168201915b50505050508060200190518101906106f59190611e95565b905061071e60408051608081018252600060208201818152928201819052606082015290815290565b6040805133815285516020808301919091528601515115158183015290517f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d9181900360600190a16107723415601a611206565b6040820151600090600161078533610bf8565b51600181111561079757610797611a5b565b146107a35760006107b1565b6107ac33610bf8565b604001515b146107bd5760016107c0565b60005b141561090157604051600181527feeac4eae36ec4e04123a226fe1715b7e591000445cc629fbea872f67cd758d269060200160405180910390a160016020840181905260a083015151516108149190611ec8565b81515260a08201805151602090810151835182015290515160409081015183519015159101528201516108499033600161132d565b336000908152600460205260408120805461ffff191681556001015561086d611762565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608301516108a890600190611ec8565b60208201515260808301516108bf90600190611ec8565b6020808301805190910191909152514360409091015260a083015182516108e99190600090611341565b6020820151606001526108fb816113b5565b50610621565b604051600081527f6b2e082302cf1cf49f777e850457b285a8a2bd7e97ee8889d1e536ba236b4d669060200160405180910390a1600060208085018290523382526004905260408120805461ffff191681556001015561095f611762565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606083015161099a90600190611ec8565b6020808301805192909252608085015182519091015280514360409091015260a08401519051606001526109cd816113b5565b5050505050565b6109e4600160005414600b611206565b81516109ff9015806109f857508251600154145b600c611206565b600080805560028054610a1190611ce6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3d90611ce6565b8015610a8a5780601f10610a5f57610100808354040283529160200191610a8a565b820191906000526020600020905b815481529060010190602001808311610a6d57829003601f168201915b5050505050806020019051810190610aa29190611f5f565b9050610aac611792565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610add929190611f7b565b60405180910390a1610af134156008611206565b60808201515151610b0490600190611fa3565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610b3b9190600090611341565b8160200181905250610b5d610b5633846020015160016114d1565b6009611206565b8151610b75906001600160a01b03163314600a611206565b610b7d6117c2565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551610bcc91839101612039565b60405160208183030381529060405260029080519060200190610bf0929190611803565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c4457610c44611a5b565b1415610cbb576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c8557610c85611a5b565b6001811115610c9657610c96611a5b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610cda600260005414600f611206565b8151610cf5901580610cee57508251600154145b6010611206565b600080805560028054610d0790611ce6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3390611ce6565b8015610d805780601f10610d5557610100808354040283529160200191610d80565b820191906000526020600020905b815481529060010190602001808311610d6357829003601f168201915b5050505050806020019051810190610d989190611f5f565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610dcb929190611f7b565b60405180910390a1610ddf3415600d611206565b8051610df7906001600160a01b03163314600e611206565b610dff61172b565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840180518451830152606080860151855190910152518284018051919091528051439301929092526080840151915101526106218161122c565b610e6e6005600054146018611206565b8151610e89901580610e8257508251600154145b6019611206565b600080805560028054610e9b90611ce6565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec790611ce6565b8015610f145780601f10610ee957610100808354040283529160200191610f14565b820191906000526020600020905b815481529060010190602001808311610ef757829003601f168201915b5050505050806020019051810190610f2c9190612047565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051610f5f929190611f7b565b60405180910390a1610f7334156016611206565b8051610f8b906001600160a01b031633146017611206565b610f93611762565b815181516001600160a01b039182169052602080840151835192169181019190915260808301518251604090810191909152808401518284018051919091528051600193019290925281514391015260608084015191510152610621816113b5565b6110056004600054146014611206565b815161102090158061101957508251600154145b6015611206565b60008080556002805461103290611ce6565b80601f016020809104026020016040519081016040528092919081815260200182805461105e90611ce6565b80156110ab5780601f10611080576101008083540402835291602001916110ab565b820191906000526020600020905b81548152906001019060200180831161108e57829003601f168201915b50505050508060200190518101906110c39190611f5f565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a161112234156011611206565b805161113a906001600160a01b031633146012611206565b6020808401518051908201516040516111889361116293929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611206565b611190611887565b81516001600160a01b039081168252602080840151909116818301526040808401518184015260808085015160608501528683015183015190840152600560005543600155516111e2918391016120af565b604051602081830303815290604052600290805190602001906109cd929190611803565b816102005760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b602081015151156112c95761123f6118ce565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015283516060908101519084015281840180515160808501525181015160a0840152600a60005543600155516112a091839101612147565b604051602081830303815290604052600290805190602001906112c4929190611803565b505050565b6112d16117c2565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015190840152818401518101516080840152600460005543600155516112a091839101612039565b50565b6113388383836114e9565b6112c457600080fd5b611349611912565b60005b60018110156113955784816001811061136757611367611edf565b602002015182826001811061137e5761137e611edf565b60200201528061138d81612156565b91505061134c565b50818184600181106113a9576113a9611edf565b60200201529392505050565b604080516020808201909252600081528282018051606001515151151582525190910151600111156113e85760006113f3565b602082015151600111155b6113fe576000611401565b80515b156114955761140e6118ce565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152818501805151606080860191909152815184015160808601529051015160a08401526009600055436001555161147191839101612147565b60405160208183030381529060405260029080519060200190610621929190611803565b8051156114bb5781516020808201519151908401516060015151516114bb92919061132d565b600080805560018190556102009060029061195d565b60006114df838530856115ba565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161154891612171565b60006040518083038185875af1925050503d8060008114611585576040519150601f19603f3d011682016040523d82523d6000602084013e61158a565b606091505b509150915061159b82826002611694565b50808060200190518101906115b0919061218d565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161162191612171565b60006040518083038185875af1925050503d806000811461165e576040519150601f19603f3d011682016040523d82523d6000602084013e611663565b606091505b509150915061167482826001611694565b5080806020019051810190611689919061218d565b979650505050505050565b606083156116a35750816114e2565b8251156116b35782518084602001fd5b60405163100960cb60e01b815260048101839052602401611223565b6040518060400160405280600081526020016116f960405180602001604052806000151581525090565b905290565b6040518060400160405280600081526020016116f960408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016116f9611997565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016116f96119b8565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016116f9611912565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016116f9611912565b82805461180f90611ce6565b90600052602060002090601f0160209004810192826118315760008555611877565b82601f1061184a57805160ff1916838001178555611877565b82800160010185558215611877579182015b8281111561187757825182559160200191906001019061185c565b506118839291506119e0565b5090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016118c1611912565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016116f95b60405180602001604052806001905b611947604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816119215790505090565b50805461196990611ce6565b6000825580601f10611979575050565b601f01602090049060005260206000209081019061132a91906119e0565b604051806060016040528060008152602001600081526020016116f9611912565b60405180608001604052806000815260200160008152602001600081526020016116f9611912565b5b8082111561188357600081556001016119e1565b600060408284031215611a0757600080fd5b50919050565b600060408284031215611a1f57600080fd5b6114e283836119f5565b6001600160a01b038116811461132a57600080fd5b600060208284031215611a5057600080fd5b81356114e281611a29565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611a9657634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b83811015611ad1578181015183820152602001611ab9565b838111156106215750506000910152565b8281526040602082015260008251806040840152611b07816060850160208701611ab6565b601f01601f1916919091016060019392505050565b600060608284031215611a0757600080fd5b600060208284031215611b4057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611b8057611b80611b47565b60405290565b6040516020810167ffffffffffffffff81118282101715611b8057611b80611b47565b6040516060810167ffffffffffffffff81118282101715611b8057611b80611b47565b60405160a0810167ffffffffffffffff81118282101715611b8057611b80611b47565b60008183036040811215611c0257600080fd5b611c0a611b5d565b833581526020601f1983011215611c2057600080fd5b611c28611b86565b9150611c32611b86565b602094850135815282529283015250919050565b801515811461132a57600080fd5b600060408284031215611c6657600080fd5b611c6e611b5d565b823581526020830135611c8081611c46565b60208201529392505050565b60008183036040811215611c9f57600080fd5b611ca7611b5d565b833581526020601f1983011215611cbd57600080fd5b611cc5611b86565b91506020840135611cd581611c46565b825260208101919091529392505050565b600181811c90821680611cfa57607f821691505b60208210811415611a0757634e487b7160e01b600052602260045260246000fd5b60008183036060811215611d2e57600080fd5b611d36611b5d565b833581526040601f1983011215611d4c57600080fd5b611d54611b5d565b60208581013582526040909501358582015293810193909352509092915050565b600082601f830112611d8657600080fd5b611d8e611b86565b80606080850186811115611da157600080fd5b855b81811015611df257828189031215611dbb5760008081fd5b611dc3611ba9565b8151815260208083015181830152604080840151611de081611c46565b90830152908652909401938201611da3565b50919695505050505050565b60006101008284031215611e1157600080fd5b60405160c0810181811067ffffffffffffffff82111715611e3457611e34611b47565b80604052508091508251611e4781611a29565b81526020830151611e5781611a29565b80602083015250604083015160408201526060830151606082015260808301516080820152611e898460a08501611d75565b60a08201525092915050565b60006101008284031215611ea857600080fd5b6114e28383611dfe565b634e487b7160e01b600052601160045260246000fd5b600082821015611eda57611eda611eb2565b500390565b634e487b7160e01b600052603260045260246000fd5b600060e08284031215611f0757600080fd5b611f0f611bcc565b90508151611f1c81611a29565b81526020820151611f2c81611a29565b806020830152506040820151604082015260608201516060820152611f548360808401611d75565b608082015292915050565b600060e08284031215611f7157600080fd5b6114e28383611ef5565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60008219821115611fb657611fb6611eb2565b500190565b8060005b6001811015610621578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611fbf565b60018060a01b0380825116835280602083015116602084015250604081015160408301526060810151606083015260808101516112c46080840182611fbb565b60e081016102918284611ff9565b600060e0828403121561205957600080fd5b612061611bcc565b825161206c81611a29565b8152602083015161207c81611a29565b6020820152604083810151908201526120988460608501611d75565b606082015260c09290920151608083015250919050565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160e08301916120ec90840182611fbb565b50608083015160c083015292915050565b60018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a08101516112c460a0840182611fbb565b610100810161029182846120fd565b600060001982141561216a5761216a611eb2565b5060010190565b60008251612183818460208701611ab6565b9190910192915050565b60006020828403121561219f57600080fd5b81516114e281611c4656fea2646970667358221220ba5d752d5bdb36da83e7bc94a4681d28b0dc7460b1a890b19b8f5d445046573564736f6c634300080c0033`,
  BytecodeLen: 10164,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:118:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:118:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:64:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bet_betNum": Bet_betNum,
  "Bet_checkWin": Bet_checkWin
  };
export const _APIs = {
  Bet: {
    betNum: Bet_betNum,
    checkWin: Bet_checkWin
    }
  };
