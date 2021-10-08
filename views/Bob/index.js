import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import store from "../../store"
const Bob = props => {
    const [entourage, setEntourage] = useState([])
    const _setEntourage = () => {
        let entourageStore = store.ENTOURAGE.getState()
        // setEntourage(entourage)
    }
    useEffect(() => {

        console.log()
    }, [])
    return (
        <View>
            <Text>text</Text>
        </View>
    )
}
export default Bob