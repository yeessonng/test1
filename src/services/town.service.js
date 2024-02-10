import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

//타운 생성
export const postNewTown = async(body) => {
    //초대코드생성
    const string_length = 6
    var code = ''
    for(var i = 0; i < string_length; i++){
        code += String(Math.floor(Math.random() * 10))
    }

    

}