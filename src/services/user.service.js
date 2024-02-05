import {addUser} from '../models/user.dao.js';

//test api(db 확인용)
export const userTestTest = async(body) => {

    const addUserTest = await addUser({
        'email': body.email,
        'password': body.password
    })

    return addUserTest;
}