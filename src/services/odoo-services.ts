import { POST } from "./web-services";

// thực hiện login bằng user/pass lên máy chủ xác thực
export function AUTHENTICATION(
  host: string,
  db: string,
  login: string,
  password: string
) {
  let jsonData = {
    jsonrpc: "2.0",
    method: "call",
    id: 1,
    params: {
      db,
      login,
      password,
      base_location: "",
      context: {},
    },
  };

  return POST(`${host}/web/session/authenticate`, jsonData)
    .then((result) => {
      console.log("data", result);
      return result;
    })
    .catch((err) => {
      throw err;
    });
}
