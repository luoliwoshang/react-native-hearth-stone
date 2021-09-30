import * as React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import { Card, ListItem, Button, Input } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style'
import getRandomPic from '../../api'
import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import { store, NEW_PLAYER_ACTION, SET_PLAYERS_ACTION } from '../../store';
export default function Setting({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState(0)
    const numberRef = useRef(number)
    const loadingRef = useRef(loading)
    const [request_status, set_request_status] = useState('')
    const [bannerImg, setBannerImg] = useState('https://img0.baidu.com/it/u=3675914383,561856736&fm=26&fmt=auto')
    const [players, setPlayers] = useState([])
    // const [mainHeight,setMainHeight]=useState()
    useFocusEffect(
        useCallback(() => {
            request_image()
            console.log(Dimensions.get('window').height, Dimensions.get('screen').height)
            let storePlayers = store.getState()
            setPlayers([...storePlayers])
            //首次加载时从redux获取,在点击保存/离开屏幕时 再执行一次reducer
        }, [])
    )
    const request_image = () => {
        if (loadingRef.current) {
            console.log('当前有图片正在加载')
        } else {
            setLoading(true)
            getRandomPic().then(res => {
                setBannerImg(res.imgurl)
                setLoading(false)
            })
        }
    }
    const newPlayer = () => {
        let curPlayers = players
        curPlayers.push({
            name: 'player' + (curPlayers.length + 1),
            status: 0
        })
        setPlayers([...curPlayers])
    }
    const setPlayerName = (index, name) => {
        let curPlayers = players
        curPlayers[index].name = name
        setPlayers([...curPlayers])
    }
    const savePlayers = () => {
        console.log(players)
        store.dispatch(SET_PLAYERS_ACTION(players))
        console.log(store.getState(), '保存')
    }
    useEffect(() => {
        loadingRef.current = loading
    })
    return (
        <SafeAreaView>
            <View style={{ height: Dimensions.get('window').height }}>
                <ImageBackground style={styles.InfoBanner} source={{ uri: bannerImg }} >
                    <View style={styles.TopInfo}>
                        <View style={styles.avatar}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                source={{
                                    uri: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.yCbA2DuLAcNxulo52Dav3AAAAA&w=242&h=238&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                                }}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.InfoText}>永远支持giegie</Text>
                            <Text style={[styles.InfoText, styles.number]}>肖战号:1008611</Text>
                        </View>
                    </View>

                </ImageBackground>
                <Loading show={loading} ></Loading>
                <View
                    style={{ flexGrow: 1 }}>
                    <Card containerStyle={{ height: '80%', }}>
                        <Card.Title>
                            SET THE NUMBER OF PLAYER
                        </Card.Title>
                        <Card.FeaturedSubtitle>
                            <Button
                                onPress={() => {
                                    newPlayer()
                                }}
                                icon={<Icon name="add" color="white" />
                                }
                                title="添加" />
                            <Button title="保存" onPress={() => {
                                savePlayers()
                            }} />
                        </Card.FeaturedSubtitle>
                        <Card.Divider />
                        <ScrollView style={{ height: 300 }} >
                            {players.map((e, index) => {
                                return (
                                    <ListItem key={index} containerStyle={{ ...styles.PM0 }} >
                                        <ListItem.Content >
                                            <Input label={e.name} value={e.name} onChangeText={value => setPlayerName(index, value)} />

                                        </ListItem.Content>
                                    </ListItem>
                                )
                            })}
                        </ScrollView>
                    </Card>
                </View>


            </View>
        </SafeAreaView >

    )
}