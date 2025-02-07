import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";


let state: StateType;

beforeEach(() => {
    state = {
        collapsed: false
    }
})

test("collapsed should be true", () => {
    //data


    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {
    //data
    state = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(false)
})

test("reducer should throw error because action type is incorrect", () => {
    //data
    state = {
        collapsed: true
    }

    //action

    //expect
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})