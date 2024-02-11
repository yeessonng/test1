export const previewTownDataDTO = (data) => {
    return {'townId': data[0].id, 'town_leader': data[0].user_id, 'town_name': data[0].name, 'town_explanation': data[0].explanation, 'town_code': data[0].code, 'challenge_time': data[0].time}
}