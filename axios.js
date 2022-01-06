
import axios from 'axios'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use(config => config)

requests.interceptors.request.use((res) => {
    return res.data;
},(error)=>{
    return Promise.reject(new error('faile'));
})

export default axios;
