export const confirmEmailSql = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail;";
export const insertUserSql = "INSERT INTO user (email, password) VALUES (?, ?);";
export const agreeMappingSql = "INSERT INTO user_agree (`check`, user_id, agree_id) VALUES (true, ?, 1);";
export const getUserDataSql = "select user.id, user.email, user.password, agree.title, user_agree.check " +
"from user join user_agree ON user.id = user_agree.user_id JOIN agree ON agree.id = user_agree.agree_id " +
"where user.id = ?;";
