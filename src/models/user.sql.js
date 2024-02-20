export const insertUser = "INSERT INTO user (email, password) VALUES (?, ?);";
export const loginValid="SELECT id,password FROM users WHERE id=?";