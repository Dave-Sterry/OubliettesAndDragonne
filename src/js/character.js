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

//UI

const updateStateObj = storeState();
const defaultValues = {hp: 10, mp: 8, inventory: [], class: "", str: 8, def: 8, wis: 8, con: 8}
const knightValues = {hp: 15, mp: 8, inventory: [], class: "", str: 8, def: 12, wis: 8, con: 10}
const clericValues = {hp: 10, mp: 8, inventory: [], class: "", str: 8, def: 8, wis: 12, con: 8}

const newPlayer = addPlayer(knightValues)("Fred");
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

| US03 | As user, I should be able to create an inventory | false |
| US04 | As user, I should be able to level up my character | false |