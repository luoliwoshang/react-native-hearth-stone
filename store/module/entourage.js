import TYPE from "../type"
import { createStore } from "redux"
const l1 = [
    { name: 'dog', atk: 2, hp: 1, holyShield: true },
    { name: 'pink', atk: 1, hp: 3, holyShield: false },
]
const l2 = [
    { name: 'wheat', atk: 2, hp: 3 },
    { name: 'evil', atk: 2, hp: 4 },
    { name: 'son', atk: 2, hp: 2 }
]
const l3 = [
    { name: 'element', atk: 4, hp: 1, holyShield: true },
    { name: 'evil', atk: 2, hp: 4, warRoar: true }
]
const dupilicate = arr => {
    let dupilicated = []
    for (let index = 0; index < 5; index++) {
        dupilicated.push([...arr])
    }
    return dupilicated
}
console.log(dupilicate(l1))
const entourageState = [
    ...l1,
    ...l2,
    ...l3
]
const reducer = (state = entourageState, action) => {
    switch (action.type) {
        case TYPE.NEW_PLAYER: {
            return [
                ...state,
                action.payload
            ]
        }
        case TYPE.SET_PLAYERS: {
            return [
                ...action.payload
            ]
        }
        case TYPE.SET_INDEX_PLAYER: {
            console.log(action.payload, 'py')
            const { data, index } = action.payload
            let _state = [...state]
            _state[index] = data
            return [..._state]
        }

    }
    return state
}
const BUY_ENTOURAGE = data => {
    return {
        type: TYPE.BUY_ENTOURAGE,
        payload: data
    }
}
const SELL_ENTOURAGE = data => {
    return {
        type: TYPE.SELL_ENTOURAGE,
        payload: data
    }
}


const ENTOURAGE = createStore(reducer)
export default {
    ENTOURAGE, SELL_ENTOURAGE, BUY_ENTOURAGE
}