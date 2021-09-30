import { createStore } from "redux"
const initialPlayerState = [{
    name: 'player1',
    status: 0
}, {
    name: 'player2',
    status: 0
}]
const NEW_PLAYER = "NEW_PLAYER"
const SET_PLAYERS = "SET_PLAYERS"
const reducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case NEW_PLAYER: {
            return [
                ...state,
                action.payload
            ]
        }
        case SET_PLAYERS: {
            return [
                ...action.payload
            ]
        }
    }
    return state
}

// 一个action，作为dispatch的一个参数
const NEW_PLAYER_ACTION = (player) => {
    return {
        type: NEW_PLAYER,
        payload: player
    }
}
const SET_PLAYERS_ACTION = (players) => {
    return {
        type: SET_PLAYERS,
        payload: players
    }
}

const store = createStore(reducer)
export { store, NEW_PLAYER_ACTION, SET_PLAYERS_ACTION }