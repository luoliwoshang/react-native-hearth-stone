import React from "react";
import { ActivityIndicator, View, Text, StyleSheet, Dimensions } from "react-native";
const Loading = (props) => {
    const { show } = props
    return (
        show ?
            <View style={styles.wrap}>
                <ActivityIndicator />
            </View>
            : <></>
    )
}
const styles = StyleSheet.create({
    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    }
})
export default Loading