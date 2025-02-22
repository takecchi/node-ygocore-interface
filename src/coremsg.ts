export type Optional<T> = T | undefined;

class BufferReader {
  constructor(private buffer: Buffer, private off: number = 0) {}

  nextI8() {
    return this.buffer.readInt8(this.off++);
  }

  nextU8() {
    return this.buffer.readUInt8(this.off++);
  }

  nextI16() {
    return this.buffer.readInt16LE((this.off += 2) - 2);
  }

  nextU16() {
    return this.buffer.readUInt16LE((this.off += 2) - 2);
  }

  nextI32() {
    return this.buffer.readInt32LE((this.off += 4) - 4);
  }

  nextU32() {
    return this.buffer.readUInt32LE((this.off += 4) - 4);
  }

  finished() {
    return this.off >= this.buffer.length;
  }
}

export interface MsgRetry {
  msgtype: 'MSG_RETRY';
}

export interface MsgHint {
  msgtype: 'MSG_HINT';
  type: number;
  player: number;
  data: number;
}

export interface MsgWin {
  msgtype: 'MSG_WIN';
  player: number;
  type: number;
}

export interface MsgWaiting {
  msgtype: 'MSG_WAITING';
}

export interface MsgStart {
  msgtype: 'MSG_START';
  player_type: number;
  start_lp: Array<number>;
  deck_count: Array<{
    main_deck: number;
    extra_deck: number;
  }>;
}

export interface MsgUpdateData {
  msgtype: 'MSG_UPDATE_DATA';
  player: number;
  location: number;
  cards: Array<{
    query_flag: number;
    code: Optional<number>;
    info: Optional<{
      controller: number;
      location: number;
      position: number;
      sequence: number;
    }>;
    alias: Optional<number>;
    type: Optional<number>;
    level: Optional<number>;
    rank: Optional<number>;
    attribute: Optional<number>;
    race: Optional<number>;
    attack: Optional<number>;
    defense: Optional<number>;
    base_attack: Optional<number>;
    base_defense: Optional<number>;
    reason: Optional<number>;
    reason_card: Optional<{
      controller: number;
      location: number;
      position: number;
      sequence: number;
    }>;
    equip_card: Optional<{
      controller: number;
      location: number;
      position: number;
      sequence: number;
    }>;
    target_cards: Array<{
      controller: number;
      location: number;
      position: number;
      sequence: number;
    }>;
    overlay_cards: Array<number>;
    counters: Array<{
      type: number;
      count: number;
    }>;
    owner: Optional<number>;
    status: Optional<number>;
    lscale: Optional<number>;
    rscale: Optional<number>;
    link: Optional<number>;
    link_marker: Optional<number>;
  }>;
}

export interface MsgUpdateCard {
  msgtype: 'MSG_UPDATE_CARD';
  player: number;
  location: number;
  sequence: number;
  query_flag: number;
  code: Optional<number>;
  alias: Optional<number>;
  info: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  type: Optional<number>;
  level: Optional<number>;
  rank: Optional<number>;
  attribute: Optional<number>;
  race: Optional<number>;
  attack: Optional<number>;
  defense: Optional<number>;
  base_attack: Optional<number>;
  base_defense: Optional<number>;
  reason: Optional<number>;
  reason_card: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  equip_card: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  target_cards: Array<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  overlay_cards: Array<number>;
  counters: Array<{
    type: number;
    count: number;
  }>;
  owner: Optional<number>;
  status: Optional<number>;
  lscale: Optional<number>;
  rscale: Optional<number>;
  link: Optional<number>;
  link_marker: Optional<number>;
}

export interface MsgSelectBattleCmd {
  msgtype: 'MSG_SELECT_BATTLECMD';
  player: number;
  activatable: Array<{
    code_and_flags: number;
    controller: number;
    location: number;
    sequence: number;
    description: number;
  }>;
  attackable: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    directly: number;
  }>;
  to_main_phase2: number;
  to_end_phase: number;
}

export interface MsgSelectIdleCmd {
  msgtype: 'MSG_SELECT_IDLECMD';
  player: number;
  summonables: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
  special_summonables: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
  reposables: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
  setable_monsters: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
  setable_spells: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
  activatables: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    description: number;
  }>;
  to_battle_phase: number;
  to_end_phase: number;
  shuffle_hand: number;
}

export interface MsgSelectEffectyn {
  msgtype: 'MSG_SELECT_EFFECTYN';
  player: number;
  code: number;
  controller: number;
  location: number;
  sequence: number;
  ignore: number;
  desc: number;
}

export interface MsgSelectYesno {
  msgtype: 'MSG_SELECT_YESNO';
  player: number;
  desc: number;
}

export interface MsgSelectOption {
  msgtype: 'MSG_SELECT_OPTION';
  player: number;
  options: Array<number>;
}

export interface MsgSelectCard {
  msgtype: 'MSG_SELECT_CARD';
  player: number;
  non_cancelable: number;
  range: {
    minimal: number;
    maximal: number;
  };
  selections: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
  }>;
}

export interface MsgSelectUnselectCard {
  msgtype: 'MSG_SELECT_UNSELECT_CARD';
  player: number;
  should_continue: number;
  non_cancelable: number;
  range: {
    minimal: number;
    maximal: number;
  };
  not_selected: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
  }>;
  selected: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
  }>;
}

export interface MsgSelectChain {
  msgtype: 'MSG_SELECT_CHAIN';
  player: number;
  c1: number;
  spe_count: number;
  forced: number;
  hint0: number;
  hint1: number;
  activatables: Array<{
    flag: number;
    code: number;
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
    desc: number;
  }>;
}

export interface MsgSelectPlace {
  msgtype: 'MSG_SELECT_PLACE';
  player: number;
  minimal_selection: number;
  pattern: number;
}

export interface MsgSelectDisfield {
  msgtype: 'MSG_SELECT_DISFIELD';
  player: number;
  minimal_selection: number;
  pattern: number;
}

export interface MsgSelectPosition {
  msgtype: 'MSG_SELECT_POSITION';
  player: number;
  code: number;
  positions: number;
}

export interface MsgSelectTribute {
  msgtype: 'MSG_SELECT_TRIBUTE';
  player: number;
  non_cancelable: number;
  range: {
    minimal: number;
    maximal: number;
  };
  selections: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    operation_param: number;
  }>;
}

export interface MsgSelectCounter {
  msgtype: 'MSG_SELECT_COUNTER';
  player: number;
  type: number;
  count: number;
  selections: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    operation_param: number;
  }>;
}

export interface MsgSelectSum {
  msgtype: 'MSG_SELECT_SUM';
  select_mode: number;
  player: number;
  sum_up_to: number;
  range: {
    minimal: number;
    maximal: number;
  };
  includes: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    value: number;
  }>;
  optionals: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
    value: number;
  }>;
}

export interface MsgSortCard {
  msgtype: 'MSG_SORT_CARD';
  player: number;
  selection: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
}

export interface MsgSortChain {
  msgtype: 'MSG_SORT_CHAIN';
  player: number;
  selection: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
}

export interface MsgConfirmDeckTop {
  msgtype: 'MSG_CONFIRM_DECKTOP';
  player: number;
  cards: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
}

export interface MsgConfirmExtratop {
  msgtype: 'MSG_CONFIRM_EXTRATOP';
  player: number;
  cards: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
}

export interface MsgConfirmCards {
  msgtype: 'MSG_CONFIRM_CARDS';
  player: number;
  cards: Array<{
    code: number;
    controller: number;
    location: number;
    sequence: number;
  }>;
}

export interface MsgShuffleDeck {
  msgtype: 'MSG_SHUFFLE_DECK';
  player: number;
}

export interface MsgRefreshDeck {
  msgtype: 'MSG_REFRESH_DECK';
  player: number;
}

export interface MsgSwapGraveDeck {
  msgtype: 'MSG_SWAP_GRAVE_DECK';
  player: number;
}

export interface MsgNewTurn {
  msgtype: 'MSG_NEW_TURN';
  player: number;
}

export interface MsgShuffleHand {
  msgtype: 'MSG_SHUFFLE_HAND';
  player: number;
  cards: Array<number>;
}

export interface MsgShuffleExtra {
  msgtype: 'MSG_SHUFFLE_EXTRA';
  player: number;
  cards: Array<number>;
}

export interface MsgDraw {
  msgtype: 'MSG_DRAW';
  player: number;
  cards: Array<number>;
}

export interface MsgReverseDeck {
  msgtype: 'MSG_REVERSE_DECK';
}

export interface MsgDeckTop {
  msgtype: 'MSG_DECK_TOP';
  player: number;
  sequence: number;
  code: number;
}

export interface MsgShuffleSetCard {
  msgtype: 'MSG_SHUFFLE_SET_CARD';
  location: number;
  c1: number;
  pass1: Array<{
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  }>;
  pass2: Array<{
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  }>;
}

export interface MsgNewPhase {
  msgtype: 'MSG_NEW_PHASE';
  phase: number;
}

export interface MsgMove {
  msgtype: 'MSG_MOVE';
  code: number;
  previous: {
    controller: number;
    location: number;
    sequence: number;
    position: number;
  };
  current: {
    controller: number;
    location: number;
    sequence: number;
    position: number;
  };
  reason: number;
}

export interface MsgPosChange {
  msgtype: 'MSG_POS_CHANGE';
  code: number;
  current_controller: number;
  current_location: number;
  current_sequence: number;
  previous_position: number;
  current_position: number;
}

export interface MsgSet {
  msgtype: 'MSG_SET';
  code: number;
  controller: number;
  location: number;
  sequence: number;
  position: number;
}

export interface MsgSwap {
  msgtype: 'MSG_SWAP';
  first: {
    code: number;
    controller: number;
    location: number;
    sequence: number;
    position: number;
  };
  second: {
    code: number;
    controller: number;
    location: number;
    sequence: number;
    position: number;
  };
}

export interface MsgFieldDisabled {
  msgtype: 'MSG_FIELD_DISABLED';
  pattern: number;
}

export interface MsgSummoning {
  msgtype: 'MSG_SUMMONING';
  code: number;
  controller: number;
  location: number;
  sequence: number;
  position: number;
}

export interface MsgSpsummoning {
  msgtype: 'MSG_SPSUMMONING';
  code: number;
  controller: number;
  location: number;
  sequence: number;
  position: number;
}

export interface MsgFlipsummoning {
  msgtype: 'MSG_FLIPSUMMONING';
  code: number;
  controller: number;
  location: number;
  sequence: number;
  position: number;
}

export interface MsgSummoned {
  msgtype: 'MSG_SUMMONED';
}

export interface MsgSpsummoned {
  msgtype: 'MSG_SPSUMMONED';
}

export interface MsgFlipsummoned {
  msgtype: 'MSG_FLIPSUMMONED';
}

export interface MsgChaining {
  msgtype: 'MSG_CHAINING';
  code: number;
  previous_controller: number;
  previous_location: number;
  previous_sequence: number;
  subsequence: number;
  controller: number;
  location: number;
  sequence: number;
  desc: number;
  param: number;
}

export interface MsgChained {
  msgtype: 'MSG_CHAINED';
  param: number;
}

export interface MsgChainSolving {
  msgtype: 'MSG_CHAIN_SOLVING';
  param: number;
}

export interface MsgChainSolved {
  msgtype: 'MSG_CHAIN_SOLVED';
  param: number;
}

export interface MsgChainNegated {
  msgtype: 'MSG_CHAIN_NEGATED';
  param: number;
}

export interface MsgChainDisabled {
  msgtype: 'MSG_CHAIN_DISABLED';
  param: number;
}

export interface MsgChainEnd {
  msgtype: 'MSG_CHAIN_END';
}

export interface MsgCardSelected {
  msgtype: 'MSG_CARD_SELECTED';
}

export interface MsgBecomeTarget {
  msgtype: 'MSG_BECOME_TARGET';
  cards: Array<{
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
  }>;
}

export interface MsgRandomSelected {
  msgtype: 'MSG_RANDOM_SELECTED';
  player: number;
  cards: Array<{
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
  }>;
}

export interface MsgDamage {
  msgtype: 'MSG_DAMAGE';
  player: number;
  value: number;
}

export interface MsgRecover {
  msgtype: 'MSG_RECOVER';
  player: number;
  value: number;
}

export interface MsgLpUpdate {
  msgtype: 'MSG_LPUPDATE';
  player: number;
  value: number;
}

export interface MsgPayLpCost {
  msgtype: 'MSG_PAY_LPCOST';
  player: number;
  value: number;
}

export interface MsgEquip {
  msgtype: 'MSG_EQUIP';
  card: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
  target: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
}

export interface MsgCardTarget {
  msgtype: 'MSG_CARD_TARGET';
  card: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
  target: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
}

export interface MsgCancelTarget {
  msgtype: 'MSG_CANCEL_TARGET';
  card: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
  target: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
}

export interface MsgUnequip {
  msgtype: 'MSG_UNEQUIP';
  controller: number;
  location: number;
  sequence: number;
  ignore: number;
}

export interface MsgAddCounter {
  msgtype: 'MSG_ADD_COUNTER';
  type: number;
  controller: number;
  location: number;
  sequence: number;
  count: number;
}

export interface MsgRemoveCounter {
  msgtype: 'MSG_REMOVE_COUNTER';
  type: number;
  controller: number;
  location: number;
  sequence: number;
  count: number;
}

export interface MsgAttack {
  msgtype: 'MSG_ATTACK';
  attacker: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
  defender: {
    controller: number;
    location: number;
    sequence: number;
    ignore: number;
  };
}

export interface MsgBattle {
  msgtype: 'MSG_BATTLE';
  attacker: {
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
    atkvalue: number;
    defvalue: number;
    ignore: number;
  };
  defender: {
    controller: number;
    location: number;
    sequence: number;
    subsequence: number;
    atkvalue: number;
    defvalue: number;
    ignore: number;
  };
}

export interface MsgAttackDisabled {
  msgtype: 'MSG_ATTACK_DISABLED';
}

export interface MsgDamageStepStart {
  msgtype: 'MSG_DAMAGE_STEP_START';
}

export interface MsgDamageStepEnd {
  msgtype: 'MSG_DAMAGE_STEP_END';
}

export interface MsgMissedEffect {
  msgtype: 'MSG_MISSED_EFFECT';
  controller: number;
  location: number;
  sequence: number;
  subsequence: number;
  code: number;
}

export interface MsgTossCoin {
  msgtype: 'MSG_TOSS_COIN';
  player: number;
  tosses: Array<number>;
}

export interface MsgTossDice {
  msgtype: 'MSG_TOSS_DICE';
  player: number;
  tosses: Array<number>;
}

export interface MsgRockPaperScissors {
  msgtype: 'MSG_ROCK_PAPER_SCISSORS';
  player: number;
}

export interface MsgHandRes {
  msgtype: 'MSG_HAND_RES';
  result: number;
}

export interface MsgAnnounceRace {
  msgtype: 'MSG_ANNOUNCE_RACE';
  player: number;
  count: number;
  available: number;
}

export interface MsgAnnounceAttrib {
  msgtype: 'MSG_ANNOUNCE_ATTRIB';
  player: number;
  count: number;
  available: number;
}

export interface MsgAnnounceCard {
  msgtype: 'MSG_ANNOUNCE_CARD';
  player: number;
  declarable_type: number;
}

export interface MsgAnnounceNumber {
  msgtype: 'MSG_ANNOUNCE_NUMBER';
  player: number;
  announcements: Array<number>;
}

export interface MsgAnnounceCardFilter {
  msgtype: 'MSG_ANNOUNCE_CARD_FILTER';
  player: number;
  announcements: Array<number>;
}

export interface MsgCardHint {
  msgtype: 'MSG_CARD_HINT';
  controller: number;
  location: number;
  sequence: number;
  ignore: number;
  chtype: number;
  value: number;
}

export interface MsgPlayerHint {
  msgtype: 'MSG_PLAYER_HINT';
  player: number;
  chtype: number;
  value: number;
}

export interface MsgMatchKill {
  msgtype: 'MSG_MATCH_KILL';
  match_kill: number;
}

export interface MsgTagSwap {
  msgtype: 'MSG_TAG_SWAP';
  player: number;
  m: number;
  e: number;
  p: number;
  h: number;
}

export interface MsgReloadField {
  msgtype: 'MSG_RELOAD_FIELD';
  duel_rule: number;
  players: Array<{
    lp: number;
    mzone_cards: Array<
      Optional<{
        position: number;
        xyz_count: number;
      }>
    >;
    card_positions: Array<Optional<number>>;
    deck_count: number;
    hand_count: number;
    grave_count: number;
    banish_count: number;
    extra_count: number;
    extra_pendu_count: number;
    chains: Array<{
      code: number;
      previous_controller: number;
      previous_location: number;
      previous_sequence: number;
      previous_subsequence: number;
      current_controller: number;
      current_location: number;
      current_sequence: number;
      desc: number;
    }>;
  }>;
}
/**
 * message type
 */
export type Message =
  | MsgRetry
  | MsgHint
  | MsgWin
  | MsgWaiting
  | MsgStart
  | MsgUpdateData
  | MsgUpdateCard
  | MsgSelectBattleCmd
  | MsgSelectIdleCmd
  | MsgSelectEffectyn
  | MsgSelectYesno
  | MsgSelectOption
  | MsgSelectCard
  | MsgSelectUnselectCard
  | MsgSelectChain
  | MsgSelectPlace
  | MsgSelectDisfield
  | MsgSelectPosition
  | MsgSelectTribute
  | MsgSelectCounter
  | MsgSelectSum
  | MsgSortCard
  | MsgSortChain
  | MsgConfirmDeckTop
  | MsgConfirmExtratop
  | MsgConfirmCards
  | MsgShuffleDeck
  | MsgRefreshDeck
  | MsgSwapGraveDeck
  | MsgNewTurn
  | MsgShuffleHand
  | MsgShuffleExtra
  | MsgDraw
  | MsgReverseDeck
  | MsgDeckTop
  | MsgShuffleSetCard
  | MsgNewPhase
  | MsgMove
  | MsgPosChange
  | MsgSet
  | MsgSwap
  | MsgFieldDisabled
  | MsgSummoning
  | MsgSpsummoning
  | MsgFlipsummoning
  | MsgSummoned
  | MsgSpsummoned
  | MsgFlipsummoned
  | MsgChaining
  | MsgChained
  | MsgChainSolving
  | MsgChainSolved
  | MsgChainNegated
  | MsgChainDisabled
  | MsgChainEnd
  | MsgCardSelected
  | MsgBecomeTarget
  | MsgRandomSelected
  | MsgDamage
  | MsgRecover
  | MsgLpUpdate
  | MsgPayLpCost
  | MsgEquip
  | MsgCardTarget
  | MsgCancelTarget
  | MsgUnequip
  | MsgAddCounter
  | MsgRemoveCounter
  | MsgAttack
  | MsgBattle
  | MsgAttackDisabled
  | MsgDamageStepStart
  | MsgDamageStepEnd
  | MsgMissedEffect
  | MsgTossCoin
  | MsgTossDice
  | MsgRockPaperScissors
  | MsgHandRes
  | MsgAnnounceRace
  | MsgAnnounceAttrib
  | MsgAnnounceCard
  | MsgAnnounceNumber
  | MsgAnnounceCardFilter
  | MsgCardHint
  | MsgPlayerHint
  | MsgMatchKill
  | MsgTagSwap
  | MsgReloadField;

/**
 * parse bytes as MsgRetry (MSG_RETRY)
 */
function parseMsgRetry(_buffer: BufferReader): MsgRetry {
  const result: any = {};
  {
    /* reading result (MsgRetry) */
  }
  result.msgtype = 'MSG_RETRY';
  return result as MsgRetry;
}

/**
 * parse bytes as MsgHint (MSG_HINT)
 */
function parseMsgHint(buffer: BufferReader): MsgHint {
  const result: any = {};
  {
    /* reading result (MsgHint) */
    result.type = buffer.nextI8();
    result.player = buffer.nextU8();
    result.data = buffer.nextI32();
  }
  result.msgtype = 'MSG_HINT';
  return result as MsgHint;
}

/**
 * parse bytes as MsgWin (MSG_WIN)
 */
function parseMsgWin(buffer: BufferReader): MsgWin {
  const result: any = {};
  {
    /* reading result (MsgWin) */
    result.player = buffer.nextU8();
    result.type = buffer.nextI8();
  }
  result.msgtype = 'MSG_WIN';
  return result as MsgWin;
}

/**
 * parse bytes as MsgWaiting (MSG_WAITING)
 */
function parseMsgWaiting(_buffer: BufferReader): MsgWaiting {
  const result: any = {};
  {
    /* reading result (MsgWaiting) */
  }
  result.msgtype = 'MSG_WAITING';
  return result as MsgWaiting;
}

/**
 * parse bytes as MsgStart (MSG_START)
 */
function parseMsgStart(buffer: BufferReader): MsgStart {
  const result: any = {};
  {
    /* reading result (MsgStart) */
    result.player_type = buffer.nextU8();
    const start_lp: any[] = [];
    for (let i = 0; i !== 2; ++i) {
      const start_lp1 = buffer.nextI32();
      start_lp.push(start_lp1);
    }
    result.start_lp = start_lp;
    const deck_count: any[] = [];
    for (let i = 0; i !== 2; ++i) {
      const deck_count1: any = {};
      {
        /* reading deck_count1 (DeckCount) */
        deck_count1.main_deck = buffer.nextI16();
        deck_count1.extra_deck = buffer.nextI16();
      }
      deck_count.push(deck_count1);
    }
    result.deck_count = deck_count;
  }
  result.msgtype = 'MSG_START';
  return result as MsgStart;
}

/**
 * returned from `query_card()`
 */
export interface QueryCardChunk {
  query_flag: number;
  code: Optional<number>;
  info: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  alias: Optional<number>;
  type: Optional<number>;
  level: Optional<number>;
  rank: Optional<number>;
  attribute: Optional<number>;
  race: Optional<number>;
  attack: Optional<number>;
  defense: Optional<number>;
  base_attack: Optional<number>;
  base_defense: Optional<number>;
  reason: Optional<number>;
  reason_card: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  equip_card: Optional<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  target_cards: Array<{
    controller: number;
    location: number;
    position: number;
    sequence: number;
  }>;
  overlay_cards: Array<number>;
  counters: Array<{
    type: number;
    count: number;
  }>;
  owner: Optional<number>;
  status: Optional<number>;
  lscale: Optional<number>;
  rscale: Optional<number>;
  link: Optional<number>;
  link_marker: Optional<number>;
}

/* */
function parseInfoLocation(buffer: BufferReader): any {
  const info: any = {};
  info.controller = buffer.nextU8();
  info.location = buffer.nextU8();
  info.sequence = buffer.nextU8();
  info.position = buffer.nextU8();
  return info;
}

function parseInfoLocations(buffer: BufferReader): any {
  const many: any[] = [];
  const count = buffer.nextU32();
  for (let i = 0; i !== count; ++i) {
    many.push(parseInfoLocation(buffer));
  }
  return many;
}

function parseChunks(buffer: BufferReader): any[] {
  const chunks: any[] = [];
  while (!buffer.finished()) {
    const bytes = buffer.nextU32();
    if (bytes === 4) continue;

    const chunk: any = {};
    const flags = buffer.nextU32();

    chunk.query_flag = flags;
    if (flags & QUERY.CODE) chunk.code = buffer.nextU32();
    if (flags & QUERY.POSITION) chunk.info = parseInfoLocation(buffer);
    if (flags & QUERY.ALIAS) chunk.alias = buffer.nextU32();
    if (flags & QUERY.TYPE) chunk.type = buffer.nextU32();
    if (flags & QUERY.LEVEL) chunk.level = buffer.nextU32();
    if (flags & QUERY.RANK) chunk.rank = buffer.nextU32();
    if (flags & QUERY.ATTRIBUTE) chunk.attribute = buffer.nextU32();
    if (flags & QUERY.RACE) chunk.race = buffer.nextU32();
    if (flags & QUERY.ATTACK) chunk.attack = buffer.nextI32();
    if (flags & QUERY.DEFENSE) chunk.defense = buffer.nextI32();
    if (flags & QUERY.BASE_ATTACK) chunk.base_attack = buffer.nextI32();
    if (flags & QUERY.BASE_DEFENSE) chunk.base_defense = buffer.nextI32();
    if (flags & QUERY.REASON) chunk.reason = buffer.nextI32();

    if (flags & QUERY.REASON_CARD)
      chunk.reason_card = parseInfoLocation(buffer);
    if (flags & QUERY.EQUIP_CARD) chunk.equip_card = parseInfoLocation(buffer);
    if (flags & QUERY.TARGET_CARD)
      chunk.target_cards = parseInfoLocations(buffer);
    if (flags & QUERY.OVERLAY_CARD) {
      const count = buffer.nextU32();
      for (let i = 0; i !== count; ++i)
        chunk.overlay_cards.push(buffer.nextU32());
    }
    if (flags & QUERY.COUNTERS) {
      const count = buffer.nextU32();
      for (let i = 0; i !== count; ++i) {
        const type = buffer.nextU16();
        const count = buffer.nextU16();
        chunk.counters.push({ type, count });
      }
    }
    if (flags & QUERY.OWNER) chunk.owner = buffer.nextU32();
    if (flags & QUERY.STATUS) chunk.status = buffer.nextU32();
    if (flags & QUERY.LSCALE) chunk.lscale = buffer.nextU32();
    if (flags & QUERY.RSCALE) chunk.rscale = buffer.nextU32();

    if (flags & QUERY.LINK) chunk.link = buffer.nextU32();
    if (flags & QUERY.LINK) chunk.link_marker = buffer.nextU32();

    chunks.push(chunk);
  }

  return chunks;
}

/**
 * MSG_UPDATE_DATA
 */
function parseMsgUpdateData(buffer: BufferReader): MsgUpdateData {
  const result: any = {};
  result.msgtype = 'MSG_UPDATE_DATA';
  result.player = buffer.nextU8();
  result.location = buffer.nextU8();
  result.cards = parseChunks(buffer);

  return result as MsgUpdateData;
}

export function parseFieldCardQueryResult(buffer: Buffer): QueryCardChunk[] {
  return parseChunks(new BufferReader(buffer)) as QueryCardChunk[];
}

/**
 * MSG_UPDATE_CARD
 */
function parseMsgUpdateCard(buffer: BufferReader): MsgUpdateCard {
  const result: any = {};
  result.msgtype = 'MSG_UPDATE_CARD';

  result.player = buffer.nextU8();
  result.location = buffer.nextU8();
  result.sequence = buffer.nextU8();
  const chunk = parseChunks(buffer);
  return { ...result, ...chunk[0] } as MsgUpdateCard;
}

export function parseCardQueryResult(buffer: Buffer): QueryCardChunk {
  return parseChunks(new BufferReader(buffer))[0] as QueryCardChunk;
}

/**
 * parse bytes as MsgSelectBattleCmd (MSG_SELECT_BATTLECMD)
 */
function parseMsgSelectBattleCmd(buffer: BufferReader): MsgSelectBattleCmd {
  const result: any = {};
  {
    /* reading result (MsgSelectBattleCmd) */
    result.player = buffer.nextU8();
    const activatable: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const activatable1: any = {};
      {
        /* reading activatable1 (Activatable) */
        activatable1.code_and_flags = buffer.nextU32();
        activatable1.controller = buffer.nextU8();
        activatable1.location = buffer.nextU8();
        activatable1.sequence = buffer.nextU8();
        activatable1.description = buffer.nextI32();
      }
      activatable.push(activatable1);
    }
    result.activatable = activatable;
    const attackable: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const attackable1: any = {};
      {
        /* reading attackable1 (Attackable) */
        attackable1.code = buffer.nextU32();
        attackable1.controller = buffer.nextU8();
        attackable1.location = buffer.nextU8();
        attackable1.sequence = buffer.nextU8();
        attackable1.directly = buffer.nextI8();
      }
      attackable.push(attackable1);
    }
    result.attackable = attackable;
    result.to_main_phase2 = buffer.nextI8();
    result.to_end_phase = buffer.nextI8();
  }
  result.msgtype = 'MSG_SELECT_BATTLECMD';
  return result as MsgSelectBattleCmd;
}

/**
 * parse bytes as MsgSelectIdleCmd (MSG_SELECT_IDLECMD)
 */
function parseMsgSelectIdleCmd(buffer: BufferReader): MsgSelectIdleCmd {
  const result: any = {};
  {
    /* reading result (MsgSelectIdleCmd) */
    result.player = buffer.nextU8();
    const summonables: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const summonables1: any = {};
      {
        /* reading summonables1 (IdleCommandSelection) */
        summonables1.code = buffer.nextU32();
        summonables1.controller = buffer.nextU8();
        summonables1.location = buffer.nextU8();
        summonables1.sequence = buffer.nextU8();
      }
      summonables.push(summonables1);
    }
    result.summonables = summonables;
    const special_summonables: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const special_summonables1: any = {};
      {
        /* reading special_summonables1 (IdleCommandSelection) */
        special_summonables1.code = buffer.nextU32();
        special_summonables1.controller = buffer.nextU8();
        special_summonables1.location = buffer.nextU8();
        special_summonables1.sequence = buffer.nextU8();
      }
      special_summonables.push(special_summonables1);
    }
    result.special_summonables = special_summonables;
    const reposables: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const reposables1: any = {};
      {
        /* reading reposables1 (IdleCommandSelection) */
        reposables1.code = buffer.nextU32();
        reposables1.controller = buffer.nextU8();
        reposables1.location = buffer.nextU8();
        reposables1.sequence = buffer.nextU8();
      }
      reposables.push(reposables1);
    }
    result.reposables = reposables;
    const setable_monsters: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const setable_monsters1: any = {};
      {
        /* reading setable_monsters1 (IdleCommandSelection) */
        setable_monsters1.code = buffer.nextU32();
        setable_monsters1.controller = buffer.nextU8();
        setable_monsters1.location = buffer.nextU8();
        setable_monsters1.sequence = buffer.nextU8();
      }
      setable_monsters.push(setable_monsters1);
    }
    result.setable_monsters = setable_monsters;
    const setable_spells: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const setable_spells1: any = {};
      {
        /* reading setable_spells1 (IdleCommandSelection) */
        setable_spells1.code = buffer.nextU32();
        setable_spells1.controller = buffer.nextU8();
        setable_spells1.location = buffer.nextU8();
        setable_spells1.sequence = buffer.nextU8();
      }
      setable_spells.push(setable_spells1);
    }
    result.setable_spells = setable_spells;
    const activatables: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const activatables1: any = {};
      {
        /* reading activatables1 (Activatable) */
        activatables1.code = buffer.nextU32();
        activatables1.controller = buffer.nextU8();
        activatables1.location = buffer.nextU8();
        activatables1.sequence = buffer.nextU8();
        activatables1.description = buffer.nextI32();
      }
      activatables.push(activatables1);
    }
    result.activatables = activatables;
    result.to_battle_phase = buffer.nextI8();
    result.to_end_phase = buffer.nextI8();
    result.shuffle_hand = buffer.nextI8();
  }
  result.msgtype = 'MSG_SELECT_IDLECMD';
  return result as MsgSelectIdleCmd;
}

/**
 * parse bytes as MsgSelectEffectyn (MSG_SELECT_EFFECTYN)
 */
function parseMsgSelectEffectyn(buffer: BufferReader): MsgSelectEffectyn {
  const result: any = {};
  {
    /* reading result (MsgSelectEffectyn) */
    result.player = buffer.nextU8();
    result.code = buffer.nextU32();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.ignore = buffer.nextI8();
    result.desc = buffer.nextI32();
  }
  result.msgtype = 'MSG_SELECT_EFFECTYN';
  return result as MsgSelectEffectyn;
}

/**
 * parse bytes as MsgSelectYesno (MSG_SELECT_YESNO)
 */
function parseMsgSelectYesno(buffer: BufferReader): MsgSelectYesno {
  const result: any = {};
  {
    /* reading result (MsgSelectYesno) */
    result.player = buffer.nextU8();
    result.desc = buffer.nextI32();
  }
  result.msgtype = 'MSG_SELECT_YESNO';
  return result as MsgSelectYesno;
}

/**
 * parse bytes as MsgSelectOption (MSG_SELECT_OPTION)
 */
function parseMsgSelectOption(buffer: BufferReader): MsgSelectOption {
  const result: any = {};
  {
    /* reading result (MsgSelectOption) */
    result.player = buffer.nextU8();
    const options: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const options1 = buffer.nextI32();
      options.push(options1);
    }
    result.options = options;
  }
  result.msgtype = 'MSG_SELECT_OPTION';
  return result as MsgSelectOption;
}

/**
 * parse bytes as MsgSelectCard (MSG_SELECT_CARD)
 */
function parseMsgSelectCard(buffer: BufferReader): MsgSelectCard {
  const result: any = {};
  {
    /* reading result (MsgSelectCard) */
    result.player = buffer.nextU8();
    result.non_cancelable = buffer.nextI8();
    const range: any = {};
    {
      /* reading range (Range) */
      range.minimal = buffer.nextI8();
      range.maximal = buffer.nextI8();
    }
    result.range = range;
    const selections: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selections1: any = {};
      {
        /* reading selections1 (Selection) */
        selections1.code = buffer.nextU32();
        selections1.controller = buffer.nextU8();
        selections1.location = buffer.nextU8();
        selections1.sequence = buffer.nextU8();
        selections1.subsequence = buffer.nextU8();
      }
      selections.push(selections1);
    }
    result.selections = selections;
  }
  result.msgtype = 'MSG_SELECT_CARD';
  return result as MsgSelectCard;
}

/**
 * parse bytes as MsgSelectUnselectCard (MSG_SELECT_UNSELECT_CARD)
 */
function parseMsgSelectUnselectCard(
  buffer: BufferReader
): MsgSelectUnselectCard {
  const result: any = {};
  {
    /* reading result (MsgSelectUnselectCard) */
    result.player = buffer.nextU8();
    result.should_continue = buffer.nextI8();
    result.non_cancelable = buffer.nextI8();
    const range: any = {};
    {
      /* reading range (Range) */
      range.minimal = buffer.nextI8();
      range.maximal = buffer.nextI8();
    }
    result.range = range;
    const not_selected: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const not_selected1: any = {};
      {
        /* reading not_selected1 (Selection) */
        not_selected1.code = buffer.nextU32();
        not_selected1.controller = buffer.nextU8();
        not_selected1.location = buffer.nextU8();
        not_selected1.sequence = buffer.nextU8();
        not_selected1.subsequence = buffer.nextU8();
      }
      not_selected.push(not_selected1);
    }
    result.not_selected = not_selected;
    const selected: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selected1: any = {};
      {
        /* reading selected1 (Selection) */
        selected1.code = buffer.nextU32();
        selected1.controller = buffer.nextU8();
        selected1.location = buffer.nextU8();
        selected1.sequence = buffer.nextU8();
        selected1.subsequence = buffer.nextU8();
      }
      selected.push(selected1);
    }
    result.selected = selected;
  }
  result.msgtype = 'MSG_SELECT_UNSELECT_CARD';
  return result as MsgSelectUnselectCard;
}

/**
 * parse bytes as MsgSelectChain (MSG_SELECT_CHAIN)
 */
function parseMsgSelectChain(buffer: BufferReader): MsgSelectChain {
  const result: any = {};
  {
    /* reading result (MsgSelectChain) */
    result.player = buffer.nextU8();
    const c1 = buffer.nextI8();
    /* c1: hidden */
    result.spe_count = buffer.nextI8();
    result.forced = buffer.nextI8();
    result.hint0 = buffer.nextI32();
    result.hint1 = buffer.nextI32();
    const activatables: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = c1; i !== n; ++i) {
      const activatables1: any = {};
      {
        /* reading activatables1 (Activatable) */
        activatables1.flag = buffer.nextI8();
        activatables1.code = buffer.nextU32();
        activatables1.controller = buffer.nextU8();
        activatables1.location = buffer.nextU8();
        activatables1.sequence = buffer.nextU8();
        activatables1.subsequence = buffer.nextU8();
        activatables1.desc = buffer.nextI32();
      }
      activatables.push(activatables1);
    }
    result.activatables = activatables;
  }
  result.msgtype = 'MSG_SELECT_CHAIN';
  return result as MsgSelectChain;
}

/**
 * parse bytes as MsgSelectPlace (MSG_SELECT_PLACE)
 */
function parseMsgSelectPlace(buffer: BufferReader): MsgSelectPlace {
  const result: any = {};
  {
    /* reading result (MsgSelectPlace) */
    result.player = buffer.nextU8();
    result.minimal_selection = buffer.nextI8();
    result.pattern = buffer.nextU32();
  }
  result.msgtype = 'MSG_SELECT_PLACE';
  return result as MsgSelectPlace;
}

/**
 * parse bytes as MsgSelectDisfield (MSG_SELECT_DISFIELD)
 */
function parseMsgSelectDisfield(buffer: BufferReader): MsgSelectDisfield {
  const result: any = {};
  {
    /* reading result (MsgSelectDisfield) */
    result.player = buffer.nextU8();
    result.minimal_selection = buffer.nextI8();
    result.pattern = buffer.nextU32();
  }
  result.msgtype = 'MSG_SELECT_DISFIELD';
  return result as MsgSelectDisfield;
}

/**
 * parse bytes as MsgSelectPosition (MSG_SELECT_POSITION)
 */
function parseMsgSelectPosition(buffer: BufferReader): MsgSelectPosition {
  const result: any = {};
  {
    /* reading result (MsgSelectPosition) */
    result.player = buffer.nextU8();
    result.code = buffer.nextU32();
    result.positions = buffer.nextU8();
  }
  result.msgtype = 'MSG_SELECT_POSITION';
  return result as MsgSelectPosition;
}

/**
 * parse bytes as MsgSelectTribute (MSG_SELECT_TRIBUTE)
 */
function parseMsgSelectTribute(buffer: BufferReader): MsgSelectTribute {
  const result: any = {};
  {
    /* reading result (MsgSelectTribute) */
    result.player = buffer.nextU8();
    result.non_cancelable = buffer.nextI8();
    const range: any = {};
    {
      /* reading range (Range) */
      range.minimal = buffer.nextI8();
      range.maximal = buffer.nextI8();
    }
    result.range = range;
    const selections: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selections1: any = {};
      {
        /* reading selections1 (Selection) */
        selections1.code = buffer.nextU32();
        selections1.controller = buffer.nextU8();
        selections1.location = buffer.nextU8();
        selections1.sequence = buffer.nextU8();
        selections1.operation_param = buffer.nextI8();
      }
      selections.push(selections1);
    }
    result.selections = selections;
  }
  result.msgtype = 'MSG_SELECT_TRIBUTE';
  return result as MsgSelectTribute;
}

/**
 * parse bytes as MsgSelectCounter (MSG_SELECT_COUNTER)
 */
function parseMsgSelectCounter(buffer: BufferReader): MsgSelectCounter {
  const result: any = {};
  {
    /* reading result (MsgSelectCounter) */
    result.player = buffer.nextU8();
    result.type = buffer.nextI16();
    result.count = buffer.nextI16();
    const selections: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selections1: any = {};
      {
        /* reading selections1 (Selection) */
        selections1.code = buffer.nextU32();
        selections1.controller = buffer.nextU8();
        selections1.location = buffer.nextU8();
        selections1.sequence = buffer.nextU8();
        selections1.operation_param = buffer.nextI16();
      }
      selections.push(selections1);
    }
    result.selections = selections;
  }
  result.msgtype = 'MSG_SELECT_COUNTER';
  return result as MsgSelectCounter;
}

/**
 * parse bytes as MsgSelectSum (MSG_SELECT_SUM)
 */
function parseMsgSelectSum(buffer: BufferReader): MsgSelectSum {
  const result: any = {};
  {
    /* reading result (MsgSelectSum) */
    result.select_mode = buffer.nextI8();
    result.player = buffer.nextU8();
    result.sum_up_to = buffer.nextI32();
    const range: any = {};
    {
      /* reading range (Range) */
      range.minimal = buffer.nextI8();
      range.maximal = buffer.nextI8();
    }
    result.range = range;
    const includes: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const includes1: any = {};
      {
        /* reading includes1 (Selection) */
        includes1.code = buffer.nextU32();
        includes1.controller = buffer.nextU8();
        includes1.location = buffer.nextU8();
        includes1.sequence = buffer.nextU8();
        includes1.value = buffer.nextI32();
      }
      includes.push(includes1);
    }
    result.includes = includes;
    const optionals: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const optionals1: any = {};
      {
        /* reading optionals1 (Selection) */
        optionals1.code = buffer.nextU32();
        optionals1.controller = buffer.nextU8();
        optionals1.location = buffer.nextU8();
        optionals1.sequence = buffer.nextU8();
        optionals1.value = buffer.nextI32();
      }
      optionals.push(optionals1);
    }
    result.optionals = optionals;
  }
  result.msgtype = 'MSG_SELECT_SUM';
  return result as MsgSelectSum;
}

/**
 * parse bytes as MsgSortCard (MSG_SORT_CARD)
 */
function parseMsgSortCard(buffer: BufferReader): MsgSortCard {
  const result: any = {};
  {
    /* reading result (MsgSortCard) */
    result.player = buffer.nextU8();
    const selection: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selection1: any = {};
      {
        /* reading selection1 (Selection) */
        selection1.code = buffer.nextU32();
        selection1.controller = buffer.nextU8();
        selection1.location = buffer.nextU8();
        selection1.sequence = buffer.nextU8();
      }
      selection.push(selection1);
    }
    result.selection = selection;
  }
  result.msgtype = 'MSG_SORT_CARD';
  return result as MsgSortCard;
}

/**
 * parse bytes as MsgSortChain (MSG_SORT_CHAIN)
 */
function parseMsgSortChain(buffer: BufferReader): MsgSortChain {
  const result: any = {};
  {
    /* reading result (MsgSortChain) */
    result.player = buffer.nextU8();
    const selection: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const selection1: any = {};
      {
        /* reading selection1 (Selection) */
        selection1.code = buffer.nextU32();
        selection1.controller = buffer.nextU8();
        selection1.location = buffer.nextU8();
        selection1.sequence = buffer.nextU8();
      }
      selection.push(selection1);
    }
    result.selection = selection;
  }
  result.msgtype = 'MSG_SORT_CHAIN';
  return result as MsgSortChain;
}

/**
 * parse bytes as MsgConfirmDeckTop (MSG_CONFIRM_DECKTOP)
 */
function parseMsgConfirmDeckTop(buffer: BufferReader): MsgConfirmDeckTop {
  const result: any = {};
  {
    /* reading result (MsgConfirmDeckTop) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1: any = {};
      {
        /* reading cards1 (ConfirmCard) */
        cards1.code = buffer.nextU32();
        cards1.controller = buffer.nextU8();
        cards1.location = buffer.nextU8();
        cards1.sequence = buffer.nextU8();
      }
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_CONFIRM_DECKTOP';
  return result as MsgConfirmDeckTop;
}

/**
 * parse bytes as MsgConfirmExtratop (MSG_CONFIRM_EXTRATOP)
 */
function parseMsgConfirmExtratop(buffer: BufferReader): MsgConfirmExtratop {
  const result: any = {};
  {
    /* reading result (MsgConfirmExtratop) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1: any = {};
      {
        /* reading cards1 (ConfirmCard) */
        cards1.code = buffer.nextU32();
        cards1.controller = buffer.nextU8();
        cards1.location = buffer.nextU8();
        cards1.sequence = buffer.nextU8();
      }
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_CONFIRM_EXTRATOP';
  return result as MsgConfirmExtratop;
}

/**
 * parse bytes as MsgConfirmCards (MSG_CONFIRM_CARDS)
 */
function parseMsgConfirmCards(buffer: BufferReader): MsgConfirmCards {
  const result: any = {};
  {
    /* reading result (MsgConfirmCards) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1: any = {};
      {
        /* reading cards1 (ConfirmCard) */
        cards1.code = buffer.nextU32();
        cards1.controller = buffer.nextU8();
        cards1.location = buffer.nextU8();
        cards1.sequence = buffer.nextU8();
      }
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_CONFIRM_CARDS';
  return result as MsgConfirmCards;
}

/**
 * parse bytes as MsgShuffleDeck (MSG_SHUFFLE_DECK)
 */
function parseMsgShuffleDeck(buffer: BufferReader): MsgShuffleDeck {
  const result: any = {};
  {
    /* reading result (MsgShuffleDeck) */
    result.player = buffer.nextU8();
  }
  result.msgtype = 'MSG_SHUFFLE_DECK';
  return result as MsgShuffleDeck;
}

/**
 * parse bytes as MsgRefreshDeck (MSG_REFRESH_DECK)
 */
function parseMsgRefreshDeck(buffer: BufferReader): MsgRefreshDeck {
  const result: any = {};
  {
    /* reading result (MsgRefreshDeck) */
    result.player = buffer.nextU8();
  }
  result.msgtype = 'MSG_REFRESH_DECK';
  return result as MsgRefreshDeck;
}

/**
 * parse bytes as MsgSwapGraveDeck (MSG_SWAP_GRAVE_DECK)
 */
function parseMsgSwapGraveDeck(buffer: BufferReader): MsgSwapGraveDeck {
  const result: any = {};
  {
    /* reading result (MsgSwapGraveDeck) */
    result.player = buffer.nextU8();
  }
  result.msgtype = 'MSG_SWAP_GRAVE_DECK';
  return result as MsgSwapGraveDeck;
}

/**
 * parse bytes as MsgNewTurn (MSG_NEW_TURN)
 */
function parseMsgNewTurn(buffer: BufferReader): MsgNewTurn {
  const result: any = {};
  {
    /* reading result (MsgNewTurn) */
    result.player = buffer.nextU8();
  }
  result.msgtype = 'MSG_NEW_TURN';
  return result as MsgNewTurn;
}

/**
 * parse bytes as MsgShuffleHand (MSG_SHUFFLE_HAND)
 */
function parseMsgShuffleHand(buffer: BufferReader): MsgShuffleHand {
  const result: any = {};
  {
    /* reading result (MsgShuffleHand) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1 = buffer.nextU32();
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_SHUFFLE_HAND';
  return result as MsgShuffleHand;
}

/**
 * parse bytes as MsgShuffleExtra (MSG_SHUFFLE_EXTRA)
 */
function parseMsgShuffleExtra(buffer: BufferReader): MsgShuffleExtra {
  const result: any = {};
  {
    /* reading result (MsgShuffleExtra) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1 = buffer.nextU32();
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_SHUFFLE_EXTRA';
  return result as MsgShuffleExtra;
}

/**
 * parse bytes as MsgDraw (MSG_DRAW)
 */
function parseMsgDraw(buffer: BufferReader): MsgDraw {
  const result: any = {};
  {
    /* reading result (MsgDraw) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1 = buffer.nextU32();
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_DRAW';
  return result as MsgDraw;
}

/**
 * parse bytes as MsgReverseDeck (MSG_REVERSE_DECK)
 */
function parseMsgReverseDeck(_buffer: BufferReader): MsgReverseDeck {
  const result: any = {};
  {
    /* reading result (MsgReverseDeck) */
  }
  result.msgtype = 'MSG_REVERSE_DECK';
  return result as MsgReverseDeck;
}

/**
 * parse bytes as MsgDeckTop (MSG_DECK_TOP)
 */
function parseMsgDeckTop(buffer: BufferReader): MsgDeckTop {
  const result: any = {};
  {
    /* reading result (MsgDeckTop) */
    result.player = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.code = buffer.nextU32();
  }
  result.msgtype = 'MSG_DECK_TOP';
  return result as MsgDeckTop;
}

/**
 * parse bytes as MsgShuffleSetCard (MSG_SHUFFLE_SET_CARD)
 */
function parseMsgShuffleSetCard(buffer: BufferReader): MsgShuffleSetCard {
  const result: any = {};
  {
    /* reading result (MsgShuffleSetCard) */
    result.location = buffer.nextU8();
    const c1 = buffer.nextI8();
    /* c1: hidden */
    const pass1: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = c1; i !== n; ++i) {
      const pass11: any = {};
      {
        /* reading pass11 (Pass) */
        pass11.controller = buffer.nextU8();
        pass11.location = buffer.nextU8();
        pass11.sequence = buffer.nextU8();
        pass11.ignore = buffer.nextI8();
      }
      pass1.push(pass11);
    }
    result.pass1 = pass1;
    const pass2: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = c1; i !== n; ++i) {
      const pass21: any = {};
      {
        /* reading pass21 (Pass) */
        pass21.controller = buffer.nextU8();
        pass21.location = buffer.nextU8();
        pass21.sequence = buffer.nextU8();
        pass21.ignore = buffer.nextI8();
      }
      pass2.push(pass21);
    }
    result.pass2 = pass2;
  }
  result.msgtype = 'MSG_SHUFFLE_SET_CARD';
  return result as MsgShuffleSetCard;
}

/**
 * parse bytes as MsgNewPhase (MSG_NEW_PHASE)
 */
function parseMsgNewPhase(buffer: BufferReader): MsgNewPhase {
  const result: any = {};
  {
    /* reading result (MsgNewPhase) */
    result.phase = buffer.nextU16();
  }
  result.msgtype = 'MSG_NEW_PHASE';
  return result as MsgNewPhase;
}

/**
 * parse bytes as MsgMove (MSG_MOVE)
 */
function parseMsgMove(buffer: BufferReader): MsgMove {
  const result: any = {};
  {
    /* reading result (MsgMove) */
    result.code = buffer.nextU32();
    const previous: any = {};
    {
      /* reading previous (Card) */
      previous.controller = buffer.nextU8();
      previous.location = buffer.nextU8();
      previous.sequence = buffer.nextU8();
      previous.position = buffer.nextU8();
    }
    result.previous = previous;
    const current: any = {};
    {
      /* reading current (Card) */
      current.controller = buffer.nextU8();
      current.location = buffer.nextU8();
      current.sequence = buffer.nextU8();
      current.position = buffer.nextU8();
    }
    result.current = current;
    result.reason = buffer.nextI32();
  }
  result.msgtype = 'MSG_MOVE';
  return result as MsgMove;
}

/**
 * parse bytes as MsgPosChange (MSG_POS_CHANGE)
 */
function parseMsgPosChange(buffer: BufferReader): MsgPosChange {
  const result: any = {};
  {
    /* reading result (MsgPosChange) */
    result.code = buffer.nextU32();
    result.current_controller = buffer.nextU8();
    result.current_location = buffer.nextU8();
    result.current_sequence = buffer.nextU8();
    result.previous_position = buffer.nextU8();
    result.current_position = buffer.nextU8();
  }
  result.msgtype = 'MSG_POS_CHANGE';
  return result as MsgPosChange;
}

/**
 * parse bytes as MsgSet (MSG_SET)
 */
function parseMsgSet(buffer: BufferReader): MsgSet {
  const result: any = {};
  {
    /* reading result (MsgSet) */
    result.code = buffer.nextU32();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.position = buffer.nextU8();
  }
  result.msgtype = 'MSG_SET';
  return result as MsgSet;
}

/**
 * parse bytes as MsgSwap (MSG_SWAP)
 */
function parseMsgSwap(buffer: BufferReader): MsgSwap {
  const result: any = {};
  {
    /* reading result (MsgSwap) */
    const first: any = {};
    {
      /* reading first (Swapping) */
      first.code = buffer.nextU32();
      first.controller = buffer.nextU8();
      first.location = buffer.nextU8();
      first.sequence = buffer.nextU8();
      first.position = buffer.nextU8();
    }
    result.first = first;
    const second: any = {};
    {
      /* reading second (Swapping) */
      second.code = buffer.nextU32();
      second.controller = buffer.nextU8();
      second.location = buffer.nextU8();
      second.sequence = buffer.nextU8();
      second.position = buffer.nextU8();
    }
    result.second = second;
  }
  result.msgtype = 'MSG_SWAP';
  return result as MsgSwap;
}

/**
 * parse bytes as MsgFieldDisabled (MSG_FIELD_DISABLED)
 */
function parseMsgFieldDisabled(buffer: BufferReader): MsgFieldDisabled {
  const result: any = {};
  {
    /* reading result (MsgFieldDisabled) */
    result.pattern = buffer.nextU32();
  }
  result.msgtype = 'MSG_FIELD_DISABLED';
  return result as MsgFieldDisabled;
}

/**
 * parse bytes as MsgSummoning (MSG_SUMMONING)
 */
function parseMsgSummoning(buffer: BufferReader): MsgSummoning {
  const result: any = {};
  {
    /* reading result (MsgSummoning) */
    result.code = buffer.nextU32();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.position = buffer.nextU8();
  }
  result.msgtype = 'MSG_SUMMONING';
  return result as MsgSummoning;
}

/**
 * parse bytes as MsgSpsummoning (MSG_SPSUMMONING)
 */
function parseMsgSpsummoning(buffer: BufferReader): MsgSpsummoning {
  const result: any = {};
  {
    /* reading result (MsgSpsummoning) */
    result.code = buffer.nextU32();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.position = buffer.nextU8();
  }
  result.msgtype = 'MSG_SPSUMMONING';
  return result as MsgSpsummoning;
}

/**
 * parse bytes as MsgFlipsummoning (MSG_FLIPSUMMONING)
 */
function parseMsgFlipsummoning(buffer: BufferReader): MsgFlipsummoning {
  const result: any = {};
  {
    /* reading result (MsgFlipsummoning) */
    result.code = buffer.nextU32();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.position = buffer.nextU8();
  }
  result.msgtype = 'MSG_FLIPSUMMONING';
  return result as MsgFlipsummoning;
}

/**
 * parse bytes as MsgSummoned (MSG_SUMMONED)
 */
function parseMsgSummoned(_buffer: BufferReader): MsgSummoned {
  const result: any = {};
  {
    /* reading result (MsgSummoned) */
  }
  result.msgtype = 'MSG_SUMMONED';
  return result as MsgSummoned;
}

/**
 * parse bytes as MsgSpsummoned (MSG_SPSUMMONED)
 */
function parseMsgSpsummoned(_buffer: BufferReader): MsgSpsummoned {
  const result: any = {};
  {
    /* reading result (MsgSpsummoned) */
  }
  result.msgtype = 'MSG_SPSUMMONED';
  return result as MsgSpsummoned;
}

/**
 * parse bytes as MsgFlipsummoned (MSG_FLIPSUMMONED)
 */
function parseMsgFlipsummoned(_buffer: BufferReader): MsgFlipsummoned {
  const result: any = {};
  {
    /* reading result (MsgFlipsummoned) */
  }
  result.msgtype = 'MSG_FLIPSUMMONED';
  return result as MsgFlipsummoned;
}

/**
 * parse bytes as MsgChaining (MSG_CHAINING)
 */
function parseMsgChaining(buffer: BufferReader): MsgChaining {
  const result: any = {};
  {
    /* reading result (MsgChaining) */
    result.code = buffer.nextU32();
    result.previous_controller = buffer.nextU8();
    result.previous_location = buffer.nextU8();
    result.previous_sequence = buffer.nextU8();
    result.subsequence = buffer.nextU8();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.desc = buffer.nextI32();
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAINING';
  return result as MsgChaining;
}

/**
 * parse bytes as MsgChained (MSG_CHAINED)
 */
function parseMsgChained(buffer: BufferReader): MsgChained {
  const result: any = {};
  {
    /* reading result (MsgChained) */
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAINED';
  return result as MsgChained;
}

/**
 * parse bytes as MsgChainSolving (MSG_CHAIN_SOLVING)
 */
function parseMsgChainSolving(buffer: BufferReader): MsgChainSolving {
  const result: any = {};
  {
    /* reading result (MsgChainSolving) */
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAIN_SOLVING';
  return result as MsgChainSolving;
}

/**
 * parse bytes as MsgChainSolved (MSG_CHAIN_SOLVED)
 */
function parseMsgChainSolved(buffer: BufferReader): MsgChainSolved {
  const result: any = {};
  {
    /* reading result (MsgChainSolved) */
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAIN_SOLVED';
  return result as MsgChainSolved;
}

/**
 * parse bytes as MsgChainNegated (MSG_CHAIN_NEGATED)
 */
function parseMsgChainNegated(buffer: BufferReader): MsgChainNegated {
  const result: any = {};
  {
    /* reading result (MsgChainNegated) */
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAIN_NEGATED';
  return result as MsgChainNegated;
}

/**
 * parse bytes as MsgChainDisabled (MSG_CHAIN_DISABLED)
 */
function parseMsgChainDisabled(buffer: BufferReader): MsgChainDisabled {
  const result: any = {};
  {
    /* reading result (MsgChainDisabled) */
    result.param = buffer.nextI8();
  }
  result.msgtype = 'MSG_CHAIN_DISABLED';
  return result as MsgChainDisabled;
}

/**
 * parse bytes as MsgChainEnd (MSG_CHAIN_END)
 */
function parseMsgChainEnd(_buffer: BufferReader): MsgChainEnd {
  const result: any = {};
  {
    /* reading result (MsgChainEnd) */
  }
  result.msgtype = 'MSG_CHAIN_END';
  return result as MsgChainEnd;
}

/**
 * parse bytes as MsgCardSelected (MSG_CARD_SELECTED)
 */
function parseMsgCardSelected(_buffer: BufferReader): MsgCardSelected {
  const result: any = {};
  {
    /* reading result (MsgCardSelected) */
  }
  result.msgtype = 'MSG_CARD_SELECTED';
  return result as MsgCardSelected;
}

/**
 * parse bytes as MsgBecomeTarget (MSG_BECOME_TARGET)
 */
function parseMsgBecomeTarget(buffer: BufferReader): MsgBecomeTarget {
  const result: any = {};
  {
    /* reading result (MsgBecomeTarget) */
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1: any = {};
      {
        /* reading cards1 (Card) */
        cards1.controller = buffer.nextU8();
        cards1.location = buffer.nextU8();
        cards1.sequence = buffer.nextU8();
        cards1.subsequence = buffer.nextU8();
      }
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_BECOME_TARGET';
  return result as MsgBecomeTarget;
}

/**
 * parse bytes as MsgRandomSelected (MSG_RANDOM_SELECTED)
 */
function parseMsgRandomSelected(buffer: BufferReader): MsgRandomSelected {
  const result: any = {};
  {
    /* reading result (MsgRandomSelected) */
    result.player = buffer.nextU8();
    const cards: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const cards1: any = {};
      {
        /* reading cards1 (Card) */
        cards1.controller = buffer.nextU8();
        cards1.location = buffer.nextU8();
        cards1.sequence = buffer.nextU8();
        cards1.subsequence = buffer.nextU8();
      }
      cards.push(cards1);
    }
    result.cards = cards;
  }
  result.msgtype = 'MSG_RANDOM_SELECTED';
  return result as MsgRandomSelected;
}

/**
 * parse bytes as MsgDamage (MSG_DAMAGE)
 */
function parseMsgDamage(buffer: BufferReader): MsgDamage {
  const result: any = {};
  {
    /* reading result (MsgDamage) */
    result.player = buffer.nextU8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_DAMAGE';
  return result as MsgDamage;
}

/**
 * parse bytes as MsgRecover (MSG_RECOVER)
 */
function parseMsgRecover(buffer: BufferReader): MsgRecover {
  const result: any = {};
  {
    /* reading result (MsgRecover) */
    result.player = buffer.nextU8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_RECOVER';
  return result as MsgRecover;
}

/**
 * parse bytes as MsgLpUpdate (MSG_LPUPDATE)
 */
function parseMsgLpUpdate(buffer: BufferReader): MsgLpUpdate {
  const result: any = {};
  {
    /* reading result (MsgLpUpdate) */
    result.player = buffer.nextU8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_LPUPDATE';
  return result as MsgLpUpdate;
}

/**
 * parse bytes as MsgPayLpCost (MSG_PAY_LPCOST)
 */
function parseMsgPayLpCost(buffer: BufferReader): MsgPayLpCost {
  const result: any = {};
  {
    /* reading result (MsgPayLpCost) */
    result.player = buffer.nextU8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_PAY_LPCOST';
  return result as MsgPayLpCost;
}

/**
 * parse bytes as MsgEquip (MSG_EQUIP)
 */
function parseMsgEquip(buffer: BufferReader): MsgEquip {
  const result: any = {};
  {
    /* reading result (MsgEquip) */
    const card: any = {};
    {
      /* reading card (Card) */
      card.controller = buffer.nextU8();
      card.location = buffer.nextU8();
      card.sequence = buffer.nextU8();
      card.ignore = buffer.nextI8();
    }
    result.card = card;
    const target: any = {};
    {
      /* reading target (Card) */
      target.controller = buffer.nextU8();
      target.location = buffer.nextU8();
      target.sequence = buffer.nextU8();
      target.ignore = buffer.nextI8();
    }
    result.target = target;
  }
  result.msgtype = 'MSG_EQUIP';
  return result as MsgEquip;
}

/**
 * parse bytes as MsgCardTarget (MSG_CARD_TARGET)
 */
function parseMsgCardTarget(buffer: BufferReader): MsgCardTarget {
  const result: any = {};
  {
    /* reading result (MsgCardTarget) */
    const card: any = {};
    {
      /* reading card (Card) */
      card.controller = buffer.nextU8();
      card.location = buffer.nextU8();
      card.sequence = buffer.nextU8();
      card.ignore = buffer.nextI8();
    }
    result.card = card;
    const target: any = {};
    {
      /* reading target (Card) */
      target.controller = buffer.nextU8();
      target.location = buffer.nextU8();
      target.sequence = buffer.nextU8();
      target.ignore = buffer.nextI8();
    }
    result.target = target;
  }
  result.msgtype = 'MSG_CARD_TARGET';
  return result as MsgCardTarget;
}

/**
 * parse bytes as MsgCancelTarget (MSG_CANCEL_TARGET)
 */
function parseMsgCancelTarget(buffer: BufferReader): MsgCancelTarget {
  const result: any = {};
  {
    /* reading result (MsgCancelTarget) */
    const card: any = {};
    {
      /* reading card (Card) */
      card.controller = buffer.nextU8();
      card.location = buffer.nextU8();
      card.sequence = buffer.nextU8();
      card.ignore = buffer.nextI8();
    }
    result.card = card;
    const target: any = {};
    {
      /* reading target (Card) */
      target.controller = buffer.nextU8();
      target.location = buffer.nextU8();
      target.sequence = buffer.nextU8();
      target.ignore = buffer.nextI8();
    }
    result.target = target;
  }
  result.msgtype = 'MSG_CANCEL_TARGET';
  return result as MsgCancelTarget;
}

/**
 * parse bytes as MsgUnequip (MSG_UNEQUIP)
 */
function parseMsgUnequip(buffer: BufferReader): MsgUnequip {
  const result: any = {};
  {
    /* reading result (MsgUnequip) */
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.ignore = buffer.nextI8();
  }
  result.msgtype = 'MSG_UNEQUIP';
  return result as MsgUnequip;
}

/**
 * parse bytes as MsgAddCounter (MSG_ADD_COUNTER)
 */
function parseMsgAddCounter(buffer: BufferReader): MsgAddCounter {
  const result: any = {};
  {
    /* reading result (MsgAddCounter) */
    result.type = buffer.nextI16();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.count = buffer.nextI16();
  }
  result.msgtype = 'MSG_ADD_COUNTER';
  return result as MsgAddCounter;
}

/**
 * parse bytes as MsgRemoveCounter (MSG_REMOVE_COUNTER)
 */
function parseMsgRemoveCounter(buffer: BufferReader): MsgRemoveCounter {
  const result: any = {};
  {
    /* reading result (MsgRemoveCounter) */
    result.type = buffer.nextI16();
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.count = buffer.nextI16();
  }
  result.msgtype = 'MSG_REMOVE_COUNTER';
  return result as MsgRemoveCounter;
}

/**
 * parse bytes as MsgAttack (MSG_ATTACK)
 */
function parseMsgAttack(buffer: BufferReader): MsgAttack {
  const result: any = {};
  {
    /* reading result (MsgAttack) */
    const attacker: any = {};
    {
      /* reading attacker (Card) */
      attacker.controller = buffer.nextU8();
      attacker.location = buffer.nextU8();
      attacker.sequence = buffer.nextU8();
      attacker.ignore = buffer.nextI8();
    }
    result.attacker = attacker;
    const defender: any = {};
    {
      /* reading defender (Card) */
      defender.controller = buffer.nextU8();
      defender.location = buffer.nextU8();
      defender.sequence = buffer.nextU8();
      defender.ignore = buffer.nextI8();
    }
    result.defender = defender;
  }
  result.msgtype = 'MSG_ATTACK';
  return result as MsgAttack;
}

/**
 * parse bytes as MsgBattle (MSG_BATTLE)
 */
function parseMsgBattle(buffer: BufferReader): MsgBattle {
  const result: any = {};
  {
    /* reading result (MsgBattle) */
    const attacker: any = {};
    {
      /* reading attacker (Battle) */
      attacker.controller = buffer.nextU8();
      attacker.location = buffer.nextU8();
      attacker.sequence = buffer.nextU8();
      attacker.subsequence = buffer.nextU8();
      attacker.atkvalue = buffer.nextI32();
      attacker.defvalue = buffer.nextI32();
      attacker.ignore = buffer.nextI8();
    }
    result.attacker = attacker;
    const defender: any = {};
    {
      /* reading defender (Battle) */
      defender.controller = buffer.nextU8();
      defender.location = buffer.nextU8();
      defender.sequence = buffer.nextU8();
      defender.subsequence = buffer.nextU8();
      defender.atkvalue = buffer.nextI32();
      defender.defvalue = buffer.nextI32();
      defender.ignore = buffer.nextI8();
    }
    result.defender = defender;
  }
  result.msgtype = 'MSG_BATTLE';
  return result as MsgBattle;
}

/**
 * parse bytes as MsgAttackDisabled (MSG_ATTACK_DISABLED)
 */
function parseMsgAttackDisabled(_buffer: BufferReader): MsgAttackDisabled {
  const result: any = {};
  {
    /* reading result (MsgAttackDisabled) */
  }
  result.msgtype = 'MSG_ATTACK_DISABLED';
  return result as MsgAttackDisabled;
}

/**
 * parse bytes as MsgDamageStepStart (MSG_DAMAGE_STEP_START)
 */
function parseMsgDamageStepStart(_buffer: BufferReader): MsgDamageStepStart {
  const result: any = {};
  {
    /* reading result (MsgDamageStepStart) */
  }
  result.msgtype = 'MSG_DAMAGE_STEP_START';
  return result as MsgDamageStepStart;
}

/**
 * parse bytes as MsgDamageStepEnd (MSG_DAMAGE_STEP_END)
 */
function parseMsgDamageStepEnd(_buffer: BufferReader): MsgDamageStepEnd {
  const result: any = {};
  {
    /* reading result (MsgDamageStepEnd) */
  }
  result.msgtype = 'MSG_DAMAGE_STEP_END';
  return result as MsgDamageStepEnd;
}

/**
 * parse bytes as MsgMissedEffect (MSG_MISSED_EFFECT)
 */
function parseMsgMissedEffect(buffer: BufferReader): MsgMissedEffect {
  const result: any = {};
  {
    /* reading result (MsgMissedEffect) */
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.subsequence = buffer.nextU8();
    result.code = buffer.nextU32();
  }
  result.msgtype = 'MSG_MISSED_EFFECT';
  return result as MsgMissedEffect;
}

/**
 * parse bytes as MsgTossCoin (MSG_TOSS_COIN)
 */
function parseMsgTossCoin(buffer: BufferReader): MsgTossCoin {
  const result: any = {};
  {
    /* reading result (MsgTossCoin) */
    result.player = buffer.nextU8();
    const tosses: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const tosses1 = buffer.nextU8();
      tosses.push(tosses1);
    }
    result.tosses = tosses;
  }
  result.msgtype = 'MSG_TOSS_COIN';
  return result as MsgTossCoin;
}

/**
 * parse bytes as MsgTossDice (MSG_TOSS_DICE)
 */
function parseMsgTossDice(buffer: BufferReader): MsgTossDice {
  const result: any = {};
  {
    /* reading result (MsgTossDice) */
    result.player = buffer.nextU8();
    const tosses: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const tosses1 = buffer.nextU8();
      tosses.push(tosses1);
    }
    result.tosses = tosses;
  }
  result.msgtype = 'MSG_TOSS_DICE';
  return result as MsgTossDice;
}

/**
 * parse bytes as MsgRockPaperScissors (MSG_ROCK_PAPER_SCISSORS)
 */
function parseMsgRockPaperScissors(buffer: BufferReader): MsgRockPaperScissors {
  const result: any = {};
  {
    /* reading result (MsgRockPaperScissors) */
    result.player = buffer.nextU8();
  }
  result.msgtype = 'MSG_ROCK_PAPER_SCISSORS';
  return result as MsgRockPaperScissors;
}

/**
 * parse bytes as MsgHandRes (MSG_HAND_RES)
 */
function parseMsgHandRes(buffer: BufferReader): MsgHandRes {
  const result: any = {};
  {
    /* reading result (MsgHandRes) */
    result.result = buffer.nextU8();
  }
  result.msgtype = 'MSG_HAND_RES';
  return result as MsgHandRes;
}

/**
 * parse bytes as MsgAnnounceRace (MSG_ANNOUNCE_RACE)
 */
function parseMsgAnnounceRace(buffer: BufferReader): MsgAnnounceRace {
  const result: any = {};
  {
    /* reading result (MsgAnnounceRace) */
    result.player = buffer.nextU8();
    result.count = buffer.nextU8();
    result.available = buffer.nextU32();
  }
  result.msgtype = 'MSG_ANNOUNCE_RACE';
  return result as MsgAnnounceRace;
}

/**
 * parse bytes as MsgAnnounceAttrib (MSG_ANNOUNCE_ATTRIB)
 */
function parseMsgAnnounceAttrib(buffer: BufferReader): MsgAnnounceAttrib {
  const result: any = {};
  {
    /* reading result (MsgAnnounceAttrib) */
    result.player = buffer.nextU8();
    result.count = buffer.nextU8();
    result.available = buffer.nextU32();
  }
  result.msgtype = 'MSG_ANNOUNCE_ATTRIB';
  return result as MsgAnnounceAttrib;
}

/**
 * parse bytes as MsgAnnounceCard (MSG_ANNOUNCE_CARD)
 */
function parseMsgAnnounceCard(buffer: BufferReader): MsgAnnounceCard {
  const result: any = {};
  {
    /* reading result (MsgAnnounceCard) */
    result.player = buffer.nextU8();
    result.declarable_type = buffer.nextI32();
  }
  result.msgtype = 'MSG_ANNOUNCE_CARD';
  return result as MsgAnnounceCard;
}

/**
 * parse bytes as MsgAnnounceNumber (MSG_ANNOUNCE_NUMBER)
 */
function parseMsgAnnounceNumber(buffer: BufferReader): MsgAnnounceNumber {
  const result: any = {};
  {
    /* reading result (MsgAnnounceNumber) */
    result.player = buffer.nextU8();
    const announcements: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const announcements1 = buffer.nextI32();
      announcements.push(announcements1);
    }
    result.announcements = announcements;
  }
  result.msgtype = 'MSG_ANNOUNCE_NUMBER';
  return result as MsgAnnounceNumber;
}

/**
 * parse bytes as MsgAnnounceCardFilter (MSG_ANNOUNCE_CARD_FILTER)
 */
function parseMsgAnnounceCardFilter(
  buffer: BufferReader
): MsgAnnounceCardFilter {
  const result: any = {};
  {
    /* reading result (MsgAnnounceCardFilter) */
    result.player = buffer.nextU8();
    const announcements: any[] = [];
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
      const announcements1 = buffer.nextI32();
      announcements.push(announcements1);
    }
    result.announcements = announcements;
  }
  result.msgtype = 'MSG_ANNOUNCE_CARD_FILTER';
  return result as MsgAnnounceCardFilter;
}

/**
 * parse bytes as MsgCardHint (MSG_CARD_HINT)
 */
function parseMsgCardHint(buffer: BufferReader): MsgCardHint {
  const result: any = {};
  {
    /* reading result (MsgCardHint) */
    result.controller = buffer.nextU8();
    result.location = buffer.nextU8();
    result.sequence = buffer.nextU8();
    result.ignore = buffer.nextI8();
    result.chtype = buffer.nextI8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_CARD_HINT';
  return result as MsgCardHint;
}

/**
 * parse bytes as MsgPlayerHint (MSG_PLAYER_HINT)
 */
function parseMsgPlayerHint(buffer: BufferReader): MsgPlayerHint {
  const result: any = {};
  {
    /* reading result (MsgPlayerHint) */
    result.player = buffer.nextU8();
    result.chtype = buffer.nextI8();
    result.value = buffer.nextI32();
  }
  result.msgtype = 'MSG_PLAYER_HINT';
  return result as MsgPlayerHint;
}

/**
 * parse bytes as MsgMatchKill (MSG_MATCH_KILL)
 */
function parseMsgMatchKill(buffer: BufferReader): MsgMatchKill {
  const result: any = {};
  {
    /* reading result (MsgMatchKill) */
    result.match_kill = buffer.nextI32();
  }
  result.msgtype = 'MSG_MATCH_KILL';
  return result as MsgMatchKill;
}

/**
 * parse bytes as MsgTagSwap (MSG_TAG_SWAP)
 */
function parseMsgTagSwap(buffer: BufferReader): MsgTagSwap {
  const result: any = {};
  {
    /* reading result (MsgTagSwap) */
    result.player = buffer.nextU8();
    result.m = buffer.nextI8();
    result.e = buffer.nextI8();
    result.p = buffer.nextI8();
    result.h = buffer.nextI8();
  }
  result.msgtype = 'MSG_TAG_SWAP';
  return result as MsgTagSwap;
}

/**
 * parse bytes as MsgReloadField (MSG_RELOAD_FIELD)
 */
function parseMsgReloadField(buffer: BufferReader): MsgReloadField {
  const result: any = {};
  {
    /* reading result (MsgReloadField) */
    result.duel_rule = buffer.nextI8();
    const players: any[] = [];
    for (let i = 0; i !== 4; ++i) {
      const players1: any = {};
      {
        /* reading players1 (Field) */
        players1.lp = buffer.nextI32();
        const mzone_cards: any[] = [];
        for (let i = 0; i !== 7; ++i) {
          const _test_mzone_cards1 = buffer.nextU8();
          let mzone_cards1;
          if (_test_mzone_cards1) {
            const mzone_cards11: any = {};
            {
              /* reading mzone_cards11 (MCard) */
              mzone_cards11.position = buffer.nextU8();
              mzone_cards11.xyz_count = buffer.nextI8();
            }
            mzone_cards1 = mzone_cards11;
          }
          mzone_cards.push(mzone_cards1);
        }
        players1.mzone_cards = mzone_cards;
        const card_positions: any[] = [];
        for (let i = 0; i !== 8; ++i) {
          const _test_card_positions1 = buffer.nextU8();
          let card_positions1;
          if (_test_card_positions1) {
            const card_positions11 = buffer.nextU8();
            card_positions1 = card_positions11;
          }
          card_positions.push(card_positions1);
        }
        players1.card_positions = card_positions;
        players1.deck_count = buffer.nextU8();
        players1.hand_count = buffer.nextU8();
        players1.grave_count = buffer.nextU8();
        players1.banish_count = buffer.nextU8();
        players1.extra_count = buffer.nextU8();
        players1.extra_pendu_count = buffer.nextU8();
        const chains: any[] = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (let i = 0, n = buffer.nextU8(); i !== n; ++i) {
          const chains1: any = {};
          {
            /* reading chains1 (Chain) */
            chains1.code = buffer.nextU32();
            chains1.previous_controller = buffer.nextU8();
            chains1.previous_location = buffer.nextU8();
            chains1.previous_sequence = buffer.nextU8();
            chains1.previous_subsequence = buffer.nextU8();
            chains1.current_controller = buffer.nextU8();
            chains1.current_location = buffer.nextU8();
            chains1.current_sequence = buffer.nextU8();
            chains1.desc = buffer.nextI32();
          }
          chains.push(chains1);
        }
        players1.chains = chains;
      }
      players.push(players1);
    }
    result.players = players;
  }
  result.msgtype = 'MSG_RELOAD_FIELD';
  return result as MsgReloadField;
}

/**
 * parse one message
 */
function parseOneMessage(buffer: BufferReader): Message {
  const message = buffer.nextU8();
  switch (message) {
    case MSG.RETRY:
      return parseMsgRetry(buffer);
    case MSG.HINT:
      return parseMsgHint(buffer);
    case MSG.WIN:
      return parseMsgWin(buffer);
    case MSG.WAITING:
      return parseMsgWaiting(buffer);
    case MSG.START:
      return parseMsgStart(buffer);
    case MSG.UPDATE_DATA:
      return parseMsgUpdateData(buffer);
    case MSG.UPDATE_CARD:
      return parseMsgUpdateCard(buffer);
    case MSG.SELECT_BATTLECMD:
      return parseMsgSelectBattleCmd(buffer);
    case MSG.SELECT_IDLECMD:
      return parseMsgSelectIdleCmd(buffer);
    case MSG.SELECT_EFFECTYN:
      return parseMsgSelectEffectyn(buffer);
    case MSG.SELECT_YESNO:
      return parseMsgSelectYesno(buffer);
    case MSG.SELECT_OPTION:
      return parseMsgSelectOption(buffer);
    case MSG.SELECT_CARD:
      return parseMsgSelectCard(buffer);
    case MSG.SELECT_UNSELECT_CARD:
      return parseMsgSelectUnselectCard(buffer);
    case MSG.SELECT_CHAIN:
      return parseMsgSelectChain(buffer);
    case MSG.SELECT_PLACE:
      return parseMsgSelectPlace(buffer);
    case MSG.SELECT_DISFIELD:
      return parseMsgSelectDisfield(buffer);
    case MSG.SELECT_POSITION:
      return parseMsgSelectPosition(buffer);
    case MSG.SELECT_TRIBUTE:
      return parseMsgSelectTribute(buffer);
    case MSG.SELECT_COUNTER:
      return parseMsgSelectCounter(buffer);
    case MSG.SELECT_SUM:
      return parseMsgSelectSum(buffer);
    case MSG.SORT_CARD:
      return parseMsgSortCard(buffer);
    case MSG.SORT_CHAIN:
      return parseMsgSortChain(buffer);
    case MSG.CONFIRM_DECKTOP:
      return parseMsgConfirmDeckTop(buffer);
    case MSG.CONFIRM_EXTRATOP:
      return parseMsgConfirmExtratop(buffer);
    case MSG.CONFIRM_CARDS:
      return parseMsgConfirmCards(buffer);
    case MSG.SHUFFLE_DECK:
      return parseMsgShuffleDeck(buffer);
    case MSG.REFRESH_DECK:
      return parseMsgRefreshDeck(buffer);
    case MSG.SWAP_GRAVE_DECK:
      return parseMsgSwapGraveDeck(buffer);
    case MSG.NEW_TURN:
      return parseMsgNewTurn(buffer);
    case MSG.SHUFFLE_HAND:
      return parseMsgShuffleHand(buffer);
    case MSG.SHUFFLE_EXTRA:
      return parseMsgShuffleExtra(buffer);
    case MSG.DRAW:
      return parseMsgDraw(buffer);
    case MSG.REVERSE_DECK:
      return parseMsgReverseDeck(buffer);
    case MSG.DECK_TOP:
      return parseMsgDeckTop(buffer);
    case MSG.SHUFFLE_SET_CARD:
      return parseMsgShuffleSetCard(buffer);
    case MSG.NEW_PHASE:
      return parseMsgNewPhase(buffer);
    case MSG.MOVE:
      return parseMsgMove(buffer);
    case MSG.POS_CHANGE:
      return parseMsgPosChange(buffer);
    case MSG.SET:
      return parseMsgSet(buffer);
    case MSG.SWAP:
      return parseMsgSwap(buffer);
    case MSG.FIELD_DISABLED:
      return parseMsgFieldDisabled(buffer);
    case MSG.SUMMONING:
      return parseMsgSummoning(buffer);
    case MSG.SPSUMMONING:
      return parseMsgSpsummoning(buffer);
    case MSG.FLIPSUMMONING:
      return parseMsgFlipsummoning(buffer);
    case MSG.SUMMONED:
      return parseMsgSummoned(buffer);
    case MSG.SPSUMMONED:
      return parseMsgSpsummoned(buffer);
    case MSG.FLIPSUMMONED:
      return parseMsgFlipsummoned(buffer);
    case MSG.CHAINING:
      return parseMsgChaining(buffer);
    case MSG.CHAINED:
      return parseMsgChained(buffer);
    case MSG.CHAIN_SOLVING:
      return parseMsgChainSolving(buffer);
    case MSG.CHAIN_SOLVED:
      return parseMsgChainSolved(buffer);
    case MSG.CHAIN_NEGATED:
      return parseMsgChainNegated(buffer);
    case MSG.CHAIN_DISABLED:
      return parseMsgChainDisabled(buffer);
    case MSG.CHAIN_END:
      return parseMsgChainEnd(buffer);
    case MSG.CARD_SELECTED:
      return parseMsgCardSelected(buffer);
    case MSG.BECOME_TARGET:
      return parseMsgBecomeTarget(buffer);
    case MSG.RANDOM_SELECTED:
      return parseMsgRandomSelected(buffer);
    case MSG.DAMAGE:
      return parseMsgDamage(buffer);
    case MSG.RECOVER:
      return parseMsgRecover(buffer);
    case MSG.LPUPDATE:
      return parseMsgLpUpdate(buffer);
    case MSG.PAY_LPCOST:
      return parseMsgPayLpCost(buffer);
    case MSG.EQUIP:
      return parseMsgEquip(buffer);
    case MSG.CARD_TARGET:
      return parseMsgCardTarget(buffer);
    case MSG.CANCEL_TARGET:
      return parseMsgCancelTarget(buffer);
    case MSG.UNEQUIP:
      return parseMsgUnequip(buffer);
    case MSG.ADD_COUNTER:
      return parseMsgAddCounter(buffer);
    case MSG.REMOVE_COUNTER:
      return parseMsgRemoveCounter(buffer);
    case MSG.ATTACK:
      return parseMsgAttack(buffer);
    case MSG.BATTLE:
      return parseMsgBattle(buffer);
    case MSG.ATTACK_DISABLED:
      return parseMsgAttackDisabled(buffer);
    case MSG.DAMAGE_STEP_START:
      return parseMsgDamageStepStart(buffer);
    case MSG.DAMAGE_STEP_END:
      return parseMsgDamageStepEnd(buffer);
    case MSG.MISSED_EFFECT:
      return parseMsgMissedEffect(buffer);
    case MSG.TOSS_COIN:
      return parseMsgTossCoin(buffer);
    case MSG.TOSS_DICE:
      return parseMsgTossDice(buffer);
    case MSG.ROCK_PAPER_SCISSORS:
      return parseMsgRockPaperScissors(buffer);
    case MSG.HAND_RES:
      return parseMsgHandRes(buffer);
    case MSG.ANNOUNCE_RACE:
      return parseMsgAnnounceRace(buffer);
    case MSG.ANNOUNCE_ATTRIB:
      return parseMsgAnnounceAttrib(buffer);
    case MSG.ANNOUNCE_CARD:
      return parseMsgAnnounceCard(buffer);
    case MSG.ANNOUNCE_NUMBER:
      return parseMsgAnnounceNumber(buffer);
    case MSG.ANNOUNCE_CARD_FILTER:
      return parseMsgAnnounceCardFilter(buffer);
    case MSG.CARD_HINT:
      return parseMsgCardHint(buffer);
    case MSG.PLAYER_HINT:
      return parseMsgPlayerHint(buffer);
    case MSG.MATCH_KILL:
      return parseMsgMatchKill(buffer);
    case MSG.TAG_SWAP:
      return parseMsgTagSwap(buffer);
    case MSG.RELOAD_FIELD:
      return parseMsgReloadField(buffer);
    default:
      throw new Error(`Unknown mesage (${message})`);
  }
}
/**
 * parse bytes into message
 */
export function parseMessage(from: Buffer): Message[] {
  const buffer = new BufferReader(from);
  const messages: Message[] = [];
  while (!buffer.finished()) {
    const message = parseOneMessage(buffer);
    messages.push(message);
  }
  return messages;
}

export const OPERATION = {
  SUCCESS: 0x000000000001,
  FAIL: 0x000000000000,
};

export const TRUE = 0x000000000001;

export const FALSE = 0x000000000000;

export const NULL = 0x000000000000;

export const LOCATION = {
  DECK: 0x000000000001,
  HAND: 0x000000000002,
  MZONE: 0x000000000004,
  SZONE: 0x000000000008,
  GRAVE: 0x000000000010,
  REMOVED: 0x000000000020,
  EXTRA: 0x000000000040,
  OVERLAY: 0x000000000080,
  ONFIELD: 0x00000000000c,
  FZONE: 0x000000000100,
  PZONE: 0x000000000200,
};

export const POS = {
  FACEUP_ATTACK: 0x000000000001,
  FACEDOWN_ATTACK: 0x000000000002,
  FACEUP_DEFENSE: 0x000000000004,
  FACEDOWN_DEFENSE: 0x000000000008,
  FACEUP: 0x000000000005,
  FACEDOWN: 0x00000000000a,
  ATTACK: 0x000000000003,
  DEFENSE: 0x00000000000c,
};

export const NO_FLIP_EFFECT = 0x000000010000;

export const FLIP_SET_AVAILABLE = 0x000000020000;

export const TYPE = {
  MONSTER: 0x000000000001,
  SPELL: 0x000000000002,
  TRAP: 0x000000000004,
  NORMAL: 0x000000000010,
  EFFECT: 0x000000000020,
  FUSION: 0x000000000040,
  RITUAL: 0x000000000080,
  TRAPMONSTER: 0x000000000100,
  SPIRIT: 0x000000000200,
  UNION: 0x000000000400,
  DUAL: 0x000000000800,
  TUNER: 0x000000001000,
  SYNCHRO: 0x000000002000,
  TOKEN: 0x000000004000,
  QUICKPLAY: 0x000000010000,
  CONTINUOUS: 0x000000020000,
  EQUIP: 0x000000040000,
  FIELD: 0x000000080000,
  COUNTER: 0x000000100000,
  FLIP: 0x000000200000,
  TOON: 0x000000400000,
  XYZ: 0x000000800000,
  PENDULUM: 0x000001000000,
  SPSUMMON: 0x000002000000,
  LINK: 0x000004000000,
};

export const ATTRIBUTE = {
  EARTH: 0x000000000001,
  WATER: 0x000000000002,
  FIRE: 0x000000000004,
  WIND: 0x000000000008,
  LIGHT: 0x000000000010,
  DARK: 0x000000000020,
  DEVINE: 0x000000000040,
};

export const RACE = {
  WARRIOR: 0x000000000001,
  SPELLCASTER: 0x000000000002,
  FAIRY: 0x000000000004,
  FIEND: 0x000000000008,
  ZOMBIE: 0x000000000010,
  MACHINE: 0x000000000020,
  AQUA: 0x000000000040,
  PYRO: 0x000000000080,
  ROCK: 0x000000000100,
  WINDBEAST: 0x000000000200,
  PLANT: 0x000000000400,
  INSECT: 0x000000000800,
  THUNDER: 0x000000001000,
  DRAGON: 0x000000002000,
  BEAST: 0x000000004000,
  BEASTWARRIOR: 0x000000008000,
  DINOSAUR: 0x000000010000,
  FISH: 0x000000020000,
  SEASERPENT: 0x000000040000,
  REPTILE: 0x000000080000,
  PSYCHO: 0x000000100000,
  DEVINE: 0x000000200000,
  CREATORGOD: 0x000000400000,
  WYRM: 0x000000800000,
  CYBERSE: 0x000001000000,
};

export const REASON = {
  DESTROY: 0x000000000001,
  RELEASE: 0x000000000002,
  TEMPORARY: 0x000000000004,
  MATERIAL: 0x000000000008,
  SUMMON: 0x000000000010,
  BATTLE: 0x000000000020,
  EFFECT: 0x000000000040,
  COST: 0x000000000080,
  ADJUST: 0x000000000100,
  LOST_TARGET: 0x000000000200,
  RULE: 0x000000000400,
  SPSUMMON: 0x000000000800,
  DISSUMMON: 0x000000001000,
  FLIP: 0x000000002000,
  DISCARD: 0x000000004000,
  RDAMAGE: 0x000000008000,
  RRECOVER: 0x000000010000,
  RETURN: 0x000000020000,
  FUSION: 0x000000040000,
  SYNCHRO: 0x000000080000,
  RITUAL: 0x000000100000,
  XYZ: 0x000000200000,
  REPLACE: 0x000001000000,
  DRAW: 0x000002000000,
  REDIRECT: 0x000004000000,
  LINK: 0x000010000000,
};

export const STATUS = {
  DISABLED: 0x000000000001,
  TO_ENABLE: 0x000000000002,
  TO_DISABLE: 0x000000000004,
  PROC_COMPLETE: 0x000000000008,
  SET_TURN: 0x000000000010,
  NO_LEVEL: 0x000000000020,
  BATTLE_RESULT: 0x000000000040,
  SPSUMMON_STEP: 0x000000000080,
  FORM_CHANGED: 0x000000000100,
  SUMMONING: 0x000000000200,
  EFFECT_ENABLED: 0x000000000400,
  SUMMON_TURN: 0x000000000800,
  DESTROY_CONFIRMED: 0x000000001000,
  LEAVE_CONFIRMED: 0x000000002000,
  BATTLE_DESTROYED: 0x000000004000,
  COPYING_EFFECT: 0x000000008000,
  CHAINING: 0x000000010000,
  SUMMON_DISABLED: 0x000000020000,
  ACTIVATE_DISABLED: 0x000000040000,
  EFFECT_REPLACED: 0x000000080000,
  FUTURE_FUSION: 0x000000100000,
  ATTACK_CANCELED: 0x000000200000,
  INITIALIZING: 0x000000400000,
  JUST_POS: 0x000001000000,
  CONTINUOUS_POS: 0x000002000000,
  FORBIDDEN: 0x000004000000,
  ACT_FROM_HAND: 0x000008000000,
  OPPO_BATTLE: 0x000010000000,
  FLIP_SUMMON_TURN: 0x000020000000,
  SPSUMMON_TURN: 0x000040000000,
};

export const QUERY = {
  CODE: 0x000000000001,
  POSITION: 0x000000000002,
  ALIAS: 0x000000000004,
  TYPE: 0x000000000008,
  LEVEL: 0x000000000010,
  RANK: 0x000000000020,
  ATTRIBUTE: 0x000000000040,
  RACE: 0x000000000080,
  ATTACK: 0x000000000100,
  DEFENSE: 0x000000000200,
  BASE_ATTACK: 0x000000000400,
  BASE_DEFENSE: 0x000000000800,
  REASON: 0x000000001000,
  REASON_CARD: 0x000000002000,
  EQUIP_CARD: 0x000000004000,
  TARGET_CARD: 0x000000008000,
  OVERLAY_CARD: 0x000000010000,
  COUNTERS: 0x000000020000,
  OWNER: 0x000000040000,
  STATUS: 0x000000080000,
  LSCALE: 0x000000200000,
  RSCALE: 0x000000400000,
  LINK: 0x000000800000,
};

export const LINK_MARKER = {
  BOTTOM_LEFT: 0x000000000001,
  BOTTOM: 0x000000000002,
  BOTTOM_RIGHT: 0x000000000004,
  LEFT: 0x000000000008,
  RIGHT: 0x000000000020,
  TOP_LEFT: 0x000000000040,
  TOP: 0x000000000080,
  TOP_RIGHT: 0x000000000100,
};

export const MSG = {
  RETRY: 0x000000000001,
  HINT: 0x000000000002,
  WAITING: 0x000000000003,
  START: 0x000000000004,
  WIN: 0x000000000005,
  UPDATE_DATA: 0x000000000006,
  UPDATE_CARD: 0x000000000007,
  REQUEST_DECK: 0x000000000008,
  SELECT_BATTLECMD: 0x00000000000a,
  SELECT_IDLECMD: 0x00000000000b,
  SELECT_EFFECTYN: 0x00000000000c,
  SELECT_YESNO: 0x00000000000d,
  SELECT_OPTION: 0x00000000000e,
  SELECT_CARD: 0x00000000000f,
  SELECT_CHAIN: 0x000000000010,
  SELECT_PLACE: 0x000000000012,
  SELECT_POSITION: 0x000000000013,
  SELECT_TRIBUTE: 0x000000000014,
  SORT_CHAIN: 0x000000000015,
  SELECT_COUNTER: 0x000000000016,
  SELECT_SUM: 0x000000000017,
  SELECT_DISFIELD: 0x000000000018,
  SORT_CARD: 0x000000000019,
  SELECT_UNSELECT_CARD: 0x00000000001a,
  CONFIRM_DECKTOP: 0x00000000001e,
  CONFIRM_CARDS: 0x00000000001f,
  SHUFFLE_DECK: 0x000000000020,
  SHUFFLE_HAND: 0x000000000021,
  REFRESH_DECK: 0x000000000022,
  SWAP_GRAVE_DECK: 0x000000000023,
  SHUFFLE_SET_CARD: 0x000000000024,
  REVERSE_DECK: 0x000000000025,
  DECK_TOP: 0x000000000026,
  SHUFFLE_EXTRA: 0x000000000027,
  NEW_TURN: 0x000000000028,
  NEW_PHASE: 0x000000000029,
  CONFIRM_EXTRATOP: 0x00000000002a,
  MOVE: 0x000000000032,
  POS_CHANGE: 0x000000000035,
  SET: 0x000000000036,
  SWAP: 0x000000000037,
  FIELD_DISABLED: 0x000000000038,
  SUMMONING: 0x00000000003c,
  SUMMONED: 0x00000000003d,
  SPSUMMONING: 0x00000000003e,
  SPSUMMONED: 0x00000000003f,
  FLIPSUMMONING: 0x000000000040,
  FLIPSUMMONED: 0x000000000041,
  CHAINING: 0x000000000046,
  CHAINED: 0x000000000047,
  CHAIN_SOLVING: 0x000000000048,
  CHAIN_SOLVED: 0x000000000049,
  CHAIN_END: 0x00000000004a,
  CHAIN_NEGATED: 0x00000000004b,
  CHAIN_DISABLED: 0x00000000004c,
  CARD_SELECTED: 0x000000000050,
  RANDOM_SELECTED: 0x000000000051,
  BECOME_TARGET: 0x000000000053,
  DRAW: 0x00000000005a,
  DAMAGE: 0x00000000005b,
  RECOVER: 0x00000000005c,
  EQUIP: 0x00000000005d,
  LPUPDATE: 0x00000000005e,
  UNEQUIP: 0x00000000005f,
  CARD_TARGET: 0x000000000060,
  CANCEL_TARGET: 0x000000000061,
  PAY_LPCOST: 0x000000000064,
  ADD_COUNTER: 0x000000000065,
  REMOVE_COUNTER: 0x000000000066,
  ATTACK: 0x00000000006e,
  BATTLE: 0x00000000006f,
  ATTACK_DISABLED: 0x000000000070,
  DAMAGE_STEP_START: 0x000000000071,
  DAMAGE_STEP_END: 0x000000000072,
  MISSED_EFFECT: 0x000000000078,
  BE_CHAIN_TARGET: 0x000000000079,
  CREATE_RELATION: 0x00000000007a,
  RELEASE_RELATION: 0x00000000007b,
  TOSS_COIN: 0x000000000082,
  TOSS_DICE: 0x000000000083,
  ROCK_PAPER_SCISSORS: 0x000000000084,
  HAND_RES: 0x000000000085,
  ANNOUNCE_RACE: 0x00000000008c,
  ANNOUNCE_ATTRIB: 0x00000000008d,
  ANNOUNCE_CARD: 0x00000000008e,
  ANNOUNCE_NUMBER: 0x00000000008f,
  ANNOUNCE_CARD_FILTER: 0x000000000090,
  CARD_HINT: 0x0000000000a0,
  TAG_SWAP: 0x0000000000a1,
  RELOAD_FIELD: 0x0000000000a2,
  AI_NAME: 0x0000000000a3,
  SHOW_HINT: 0x0000000000a4,
  PLAYER_HINT: 0x0000000000a5,
  MATCH_KILL: 0x0000000000aa,
  CUSTOM_MSG: 0x0000000000b4,
};

export const HINT = {
  EVENT: 0x000000000001,
  MESSAGE: 0x000000000002,
  SELECTMSG: 0x000000000003,
  OPSELECTED: 0x000000000004,
  EFFECT: 0x000000000005,
  RACE: 0x000000000006,
  ATTRIB: 0x000000000007,
  CODE: 0x000000000008,
  NUMBER: 0x000000000009,
  CARD: 0x00000000000a,
};

export const CHINT = {
  TURN: 0x000000000001,
  CARD: 0x000000000002,
  RACE: 0x000000000003,
  ATTRIBUTE: 0x000000000004,
  NUMBER: 0x000000000005,
  DESC_ADD: 0x000000000006,
  DESC_REMOVE: 0x000000000007,
};

export const PHINT_DESC = {
  ADD: 0x000000000006,
  REMOVE: 0x000000000007,
};

export const EDESC = {
  OPERATION: 0x000000000001,
  RESET: 0x000000000002,
};

export const OPCODE = {
  ADD: 0x000040000000,
  SUB: 0x000040000001,
  MUL: 0x000040000002,
  DIV: 0x000040000003,
  AND: 0x000040000004,
  OR: 0x000040000005,
  NEG: 0x000040000006,
  NOT: 0x000040000007,
  ISCODE: 0x000040000100,
  ISSETCARD: 0x000040000101,
  ISTYPE: 0x000040000102,
  ISRACE: 0x000040000103,
  ISATTRIBUTE: 0x000040000104,
};

export const PLAYER = {
  NONE: 0x000000000002,
  ALL: 0x000000000003,
};

export const PHASE = {
  DRAW: 0x000000000001,
  STANDBY: 0x000000000002,
  MAIN1: 0x000000000004,
  BATTLE_START: 0x000000000008,
  BATTLE_STEP: 0x000000000010,
  DAMAGE: 0x000000000020,
  DAMAGE_CAL: 0x000000000040,
  BATTLE: 0x000000000080,
  MAIN2: 0x000000000100,
  END: 0x000000000200,
};

export const DUEL = {
  TEST_MODE: 0x000000000001,
  ATTACK_FIRST_TURN: 0x000000000002,
  OBSOLETE_RULING: 0x000000000008,
  PSEUDO_SHUFFLE: 0x000000000010,
  TAG_MODE: 0x000000000020,
  SIMPLE_AI: 0x000000000040,
};

/**
 * questions to the players
 */
export type Question =
  | MsgSelectBattleCmd
  | MsgSelectIdleCmd
  | MsgSelectEffectyn
  | MsgSelectYesno
  | MsgSelectOption
  | MsgSelectCard
  | MsgSelectUnselectCard
  | MsgSelectChain
  | MsgSelectPlace
  | MsgSelectDisfield
  | MsgSelectPosition
  | MsgSelectTribute
  | MsgSelectCounter
  | MsgSelectSum
  | MsgSortCard
  | MsgSortChain
  | MsgRockPaperScissors
  | MsgAnnounceRace
  | MsgAnnounceAttrib
  | MsgAnnounceCard
  | MsgAnnounceNumber
  | MsgAnnounceCardFilter;

const questionTypes = [
  'MSG_SELECT_BATTLECMD',
  'MSG_SELECT_IDLECMD',
  'MSG_SELECT_EFFECTYN',
  'MSG_SELECT_YESNO',
  'MSG_SELECT_OPTION',
  'MSG_SELECT_CARD',
  'MSG_SELECT_UNSELECT_CARD',
  'MSG_SELECT_CHAIN',
  'MSG_SELECT_PLACE',
  'MSG_SELECT_DISFIELD',
  'MSG_SELECT_POSITION',
  'MSG_SELECT_TRIBUTE',
  'MSG_SELECT_COUNTER',
  'MSG_SELECT_SUM',
  'MSG_SORT_CARD',
  'MSG_SORT_CHAIN',
  'MSG_ROCK_PAPER_SCISSORS',
  'MSG_ANNOUNCE_RACE',
  'MSG_ANNOUNCE_ATTRIB',
  'MSG_ANNOUNCE_CARD',
  'MSG_ANNOUNCE_NUMBER',
  'MSG_ANNOUNCE_CARD_FILTER',
  /* SHUT UP LINTER! */
];

/**
 * check if a given message is a 'question'
 */
export function isQuestionMessage(message: Message): message is Question {
  return questionTypes.some((msgtype) => message.msgtype === msgtype);
}
