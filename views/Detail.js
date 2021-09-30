import * as React from 'react';
import { Alert, View, Text, Button, TextInput } from 'react-native';
export default function Detail({ route, navigation }) {
    let number = route.params?.id
    const [comment, setComment] = React.useState('');
    React.useEffect(() => {
        //只有在首次挂载时会执行
        let comment = route.params?.comment
        if (comment) {
            setComment(route.params.comment)
        }
    }, [])
    React.useLayoutEffect(() => {
        // 在DOM渲染完成后，设置右边的点击事件
        navigation.setOptions({
            headerRight: () => <Button title='查看详细信息' onPress={() => {
                Alert.alert('评论内容:' + comment + ',\n用户id:' + number)
            }} />
        })
    }, [navigation, comment, number])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail</Text>
            <Text ></Text>
            <Text>
                {number ? '我有参数' : '我没有参数'}
            </Text>
            {number ? <Text>我接受到参数了</Text> : <Text>我没得参数</Text>}
            <Text>我接受到的信息有{number}</Text>
            <Button title="返回" onPress={() => navigation.goBack()} />
            <Button
                title="返回栈中第一个导航   "
                onPress={() => navigation.popToTop()}
            />
            <TextInput
                multiline
                placeholder="请留下评论"
                style={{ height: 200, padding: 10, width: '80%', backgroundColor: 'white' }}
                value={comment}
                onChangeText={setComment}
            />
            <Button title='留下评论' onPress={() => {
                navigation.navigate({
                    name: 'Home',
                    params: { comment, id: number }
                })
            }} />
        </View>
    );
}