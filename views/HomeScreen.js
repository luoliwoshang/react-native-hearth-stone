import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useCallback, useEffect } from 'react';
import { store } from '../store';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Role from './Role';
const TopTab = createMaterialTopTabNavigator();
const page1 = () => {
    return <View><Text>1</Text>
    </View>
}
const page2 = () => {
    return <Text>page2</Text>
}
export default function HomeScreen({ route, navigation }) {
    const [articles, setArticles] = React.useState([{
        id: 1,
        comment: ''
    },
    {
        id: 2,
        comment: ''
    },
    {
        id: 3,
        comment: ''
    }
    ])
    const [players, setPlayers] = React.useState([{
        name: 'player1',
        status: 0
    }, {
        name: 'player2',
        status: 0
    }])
    useFocusEffect(
        useCallback(() => {
            let players = store.getState()
            setPlayers([...players])//初始化当前组件的players
            console.log(players, '屏幕聚焦时')
        }, [])
    )

    React.useEffect(() => {
        if (route.params?.comment) {
            //上一个页面返回时留下了评论时，发起的goback函数携带了参数
            // route就被更新了一次，在此也就能获得数据
            setArticles(articles.map((item) => {
                item.id === route.params.id ? item.comment = route.params.comment : item
                return item
            }))
            console.log(articles)
        }
    }, [route.params?.comment])
    return (
        <TopTab.Navigator screenOptions={{ tabBarScrollEnabled: true }}>
            {
                players.map((e, index) => {
                    return <TopTab.Screen key={index} name={e.name} component={() => <Role name={e.name} />} />
                })
            }
        </TopTab.Navigator >
    );
}
