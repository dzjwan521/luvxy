import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? '//localhost:3000' :'//luvxy.cn'

// '//111.230.242.63:3000'
const  $http = axios.create({
    baseURL
});

export default $http