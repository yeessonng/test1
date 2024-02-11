export const previewUserDataDTO = (data) => {
    return {"userId": data[0].id, "email": data[0].email, "password": data[0].password, "agreeTitle": data[0].title};
}