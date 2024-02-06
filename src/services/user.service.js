import {addUser} from '../models/user.dao.js';
import {status} from "../../config/response.status.js";


/*export const loginUser=async(body)=>{
    
    const confirmIdData=await confirm.id(body.id);
    const confirmPasswordData=await confirm.password(body.password);

    if(!(confirmIdData || confirmPasswordData)){
        throw new BaseError(status.LOGIN_DISABLED)
    }


}*/