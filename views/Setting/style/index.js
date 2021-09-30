import { StyleSheet } from "react-native";
const test_border = {
    borderColor: '#fff',
    borderWidth: 3
}
const styleUtil = StyleSheet.create({
    overHide: {
        overflow: 'hidden'
    },
    testBor: {
        borderColor: '#ddd',
        borderWidth: 2
    },
    PM0: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
    }
})
const styles = StyleSheet.create({
    ...styleUtil,
    InfoBanner: {
        // backgroundColor: 'yellow',
        height: 200,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20
    },
    TopInfo: {
        flexDirection: 'row',
        height: 60,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 120,
        overflow: 'hidden',
        borderColor: '#fff',
        borderWidth: 3
    },
    info: {
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'space-around',
    },
    InfoText: {
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
    },
    number: {
        fontSize: 12
    }
})
export default styles