import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/user/';

class UserService{
    saveUser(user){
        return axios.post(BASE_URL+'register/',user);
    }

    getUser(nam){
        console.log("Name = ",nam)
        return axios.get(BASE_URL+`${nam}`)
    }
}

export default new UserService();