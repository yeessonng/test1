export const previewUserDataDTO = (data) => {
    return {"userId": data[0].id, "email": data[0].email, "password": data[0].password, "agreeTitle": data[0].title};
}

export const previewUserCoinDTO = (data) => {
    return {"userId": data[0].userId ,"user_coin": data[0].user_coin + '개'};
}