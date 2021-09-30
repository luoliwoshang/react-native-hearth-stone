import axios from "react-native-axios/lib/axios";
let fetch = axios.create({
    timeout: 8000,
})
fetch.interceptors.response.use((response) => {
    return response.data
})
export default fetch