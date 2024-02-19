//회원가입
export const confirmEmailSql = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail;";
export const insertUserSql = "INSERT INTO user (email, password) VALUES (?, ?);";
export const agreeMappingSql = "INSERT INTO user_agree (`check`, user_id, agree_id) VALUES (true, ?, 1);";
export const getUserDataSql = "select user.id, user.email, user.password, agree.title, user_agree.check " +
"from user join user_agree ON user.id = user_agree.user_id JOIN agree ON agree.id = user_agree.agree_id " +
"where user.id = ?;";

//user 전체 타운 조회 - 가입순 정렬
export const userTownDataSql = "select t.id town_id, t.name town_name, t.explanation town_explanation, tm.created_at from town_member tm " +
"join town t on tm.town_id = t.id where tm.user_id = ? order by tm.created_at;";
export const confirmUserSql = "select exists (select 1 from town_member where user_id = ?) as confirmUser;";
export const userOneTownDataSql = "select t.id town_id, t.name town_name, t.explanation town_explanation, t.code town_code, tc.time town_challenge_time, tm.created_at, t.user_id town_leader " +
"from town t join town_member tm on t.id = tm.town_id join town_challenge tc on t.id = tc.town_id where tm.user_id = ? and tm.town_id = ?;";