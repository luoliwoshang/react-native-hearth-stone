import React, { useCallback, useState } from "react"
import { View, Text } from "react-native"
import store from "../../store"
import { useFocusEffect } from "@react-navigation/native"
import { Button } from "react-native-elements"
import Bob from "../Bob"
const Role = (props) => {
    const [level, setLevel] = useState(1)
    const upgrade = () => {
        let { data, index } = props
        if (data.level >= 6) return
        store.PLAYER.dispatch(store.SET_INDEX_PLAYER(
            {
                index, data: {
                    ...data, level: data.level + 1
                }
            })
        )
    }

    useFocusEffect(
        useCallback(() => {
            setLevel(props.data.level)

        }, []))
    const { name } = props
    return (
        <View>
            <View style={{ overflow: 'hidden' }}>
                <Button
                    title={() => <Text>current {props.data.level}</Text>}
                    onPress={() => {
                        upgrade()
                    }}
                    type="outline" />
            </View>
            <Bob />
        </View>
    )
}
export default Role