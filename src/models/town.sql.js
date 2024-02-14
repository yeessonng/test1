//타운 추가
export const confirmCodeSql = "SELECT EXISTS(SELECT 1 FROM town WHERE code = ?) as isExistCode;";
export const insertTownSql = "INSERT INTO town (name, explanation, code, user_id) VALUES (?, ?, ?, ?);";
export const insertTownMemberSql = "INSERT INTO town_member (user_id, town_id) VALUES (?, ?);";
export const insertTownChallengeSql = "INSERT INTO town_challenge (time, town_id) VALUES (?, ?);";
export const getTownDataSql = "select town.id, town.user_id, town.name, town.explanation, town.code, town_challenge.time " +
"from town join town_challenge on town.id = town_challenge.town_id where town.id = ?;";

//타운 멤버 추가
export const inviteCodeConfirmSql = "select ifnull((select town.id from town where town.code = ?), false) as id;";
export const confirmMemNumSql = "select count(town_id) as count from town_member where town_id = ?;";
export const getTownMemberSql = "select id, name, explanation, code, coin from town where id = ?;";
export const checkMemSql = "select exists (select 1 from town_member where user_id = ? and town_id = ?) as isExistMember;";