const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

export const previewUserDataDTO = (data) => {
    return {"userId": data[0].id, "email": data[0].email, "password": data[0].password, "agreeTitle": data[0].title};
}

export const previewUserCoinDTO = (data) => {
    return {"userId": data[0].userId ,"user_coin": data[0].user_coin + '개'};
}

export const previewUserTownDTO = (data) => {
    const datas = [];
    for(let i = 0; i < data.length; i++){
        datas.push({
            "town_id": data[i].town_id,
            "town_name": data[i].town_name,
            "town_explanation": data[i].town_explanation,
            "town_regist_date": formatDate(data[i].created_at)
        })
    }
    return {"userTownData": datas};
}

export const previewUserOneTownDTO = (data) => {
    return {"town_id": data[0].town_id, "town_name": data[0].town_name, "town_explanation": data[0].town_explanation, "town_code": data[0].town_code, "town_challenge_time": data[0].town_challenge_time, "town_regist_date": formatDate(data[0].created_at), "town_leader": data[0].town_leader, "town_member_count": data[0].town_member_count};
}
