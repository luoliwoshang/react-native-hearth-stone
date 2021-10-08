import { createStore } from "redux"
import modulePlayer from "./module/player"
import moduleBob from './module/entourage'
import TYPE from "./type"
const store = {
    ...modulePlayer,
    ...moduleBob
}
export default store