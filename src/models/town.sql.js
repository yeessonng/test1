//타운 추가
export const confirmCodeSql = "SELECT EXISTS(SELECT 1 FROM town WHERE code = ?) as isExistCode;";
export const insertTownSql = "INSERT INTO town (name, explanation, code, user_id) VALUES (?, ?, ?, ?);";
export const insertTownLeaderSql = "INSERT INTO town_member (user_id, town_id) VALUES (?, ?);";
export const insertTownChallengeSql = "INSERT INTO town_challenge (time, town_id) VALUES (?, ?);";
export const getTownDataSql = "select town.id, town.user_id, town.name, town.explanation, town.code, town_challenge.time " +
"from town join town_challenge on town.id = town_challenge.town_id where town.id = ?;";