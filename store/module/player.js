import TYPE from "../type"
import { createStore } from "redux"
const defaultPlayer = {
    hp: 30,
    level: 1,
    status: 0,
    entourage: []
}
const playerState = [{
    name: 'player1',
    ...defaultPlayer
}, {
    name: 'player2',
    ...defaultPlayer
}]
const reducer = (state = playerState, action) => {
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
const NEW_PLAYER = data => {
    return {
        type: TYPE.NEW_PLAYER,
        payload: data
    }
}
const SET_PLAYERS = data => {
    return {
        type: TYPE.SET_PLAYERS,
        payload: data
    }
}
const SET_INDEX_PLAYER = data => {
    return {
        type: TYPE.SET_INDEX_PLAYER,
        payload: data
    }
}

const PLAYER = createStore(reducer)
export default {
    PLAYER, SET_PLAYERS, NEW_PLAYER, SET_INDEX_PLAYER, defaultPlayer
}