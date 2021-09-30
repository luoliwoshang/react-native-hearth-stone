import fetch from '../util/fetch'
export default function getRandomPic(params) {
    return fetch('https://www.dmoe.cc/random.php?return=json', {
        method:'GET'
    })
}
