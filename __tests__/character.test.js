import { changePlayerState, defaultValues, addPlayer, storeState } from '../src/js/character.js'

describe('storeState', () => {
  test("should test that storeState returns an empty object", () => {
    expect(storeState()()).toEqual({});
  });
});

describe('changePlayerState', () =>{
  let Fred;
  beforeEach(() =>{
    Fred = addPlayer(defaultValues);
  })

  test("test empty function 'Fred'", () => {
    expect(Fred(defaultValues)).toEqual({hp: 10, mp: 8, class: "", str: 8, def: 8, wis: 8, con: 8});
  });
});