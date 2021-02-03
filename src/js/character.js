const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
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
  (value) => {
    return (state, playerName) => ({
      ...state,
      [playerName] : {...state[playerName], [prop]: (state[playername][prop] || 0) + value}
    })
  }
}

//UI

const defaultValues = {hp: 10, mp: 8, inventory: [], class: "", str: 8, def: 8, wis: 8, con: 8}

const holyKnight = addPlayer(defaultValues)("Fred");

const updateStateObj = storeState();

const newState = updateStateObj(holyKnight); // show current state
console.log("state obj", newState);


// const holyKnightUpdate = updateStateObj(holyKnight);