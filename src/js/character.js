const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state, playerName) => {
    const newState = stateChangeFunction(currentState, playerName);
    currentState = {...newState};
    return newState;
  }
}

const addPlayer = (defaultValues) => {
  return (playerName) => {
    return (state) => ({
      ...state,
      [playerName] : defaultValues
    })
  }
}

const changePlayerState = (prop) => {
  return (value) => {
    return (state, playerName) => ({
      ...state,
      [playerName] : {...state[playerName], [prop]: (state[playerName][prop] || 0) + value}
    })
  }
}

// UI

const updateStateObj = storeState();
const defaultValues = {hp: 10, mp: 8, class: "", str: 8, def: 8, wis: 8, con: 8}
const knightValues = {hp: 15, mp: 8, class: "Knight", str: 8, def: 12, wis: 8, con: 10}
const clericValues = {hp: 10, mp: 8, class: "Cleric", str: 8, def: 8, wis: 12, con: 8}

const newPlayer = addPlayer(knightValues)("Fred");
console.log(newPlayer);
const newPlayer2 = addPlayer(clericValues)("Wilma");


const newState = updateStateObj(newPlayer);
console.log("state obj", newState); // show current state
const newState2 = updateStateObj(newPlayer2);
console.log("state obj", newState2)
const healthPotion = changePlayerState("hp")(10);
const newState3 = updateStateObj(healthPotion, "Fred");
console.log("state obj", newState3) // should show Fred hp: 20
const newState4 = updateStateObj(healthPotion, "Wilma");
console.log("state obj", newState4);

// const weapon = changePlayerState("inventory")(["master sword"]);
// const shield = changePlayerState("inventory")(["hylian shield"]);
// const newState5 = updateStateObj(weapon, "Fred");
// console.log("state obj", newState5);
// const newState6 = updateStateObj(shield, "Fred");
// console.log("state obj", newState6);

// For updating inventory: Object.assign() instead of spread operator. But, Object.assign() doesn't like being iterated on - so it would have to go in its own function that gets called on once...