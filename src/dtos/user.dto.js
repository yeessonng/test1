export const LoginDataDTO=(data)=>{
    console.log(data);
    return {"userId":data[0].id,"password":data[0].password};
}