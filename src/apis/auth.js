var axios = require("axios");

let data = JSON.stringify({
  jsonrpc: "2.0",
  method: "call",
  params: {
    service: "object",
    method: "execute",

    //arg1 : your database name must be "string"
    //arg2 : id of the user admin must be "int" ex:1 or 3 or 66
    //arg3 : password of the user admin must be "string"
    // admin:admin do like this 2:"admin"
    //arg4 : object or model name ex:"res.users"
    //arg5 : orm methods ex:"search,search_read..."

    //"args":["arg1",'arg2',"arg3","arg4","arg5"]}
    args: ["app", 2, "admin", "res.users", "search_read", [], []],
  },
});

let config = {
  method: "get",
  url: "http://localhost:8069/jsonrpc",
  headers: { "Content-Type": "application/json" },
  data: data,
};

axios(config).then((response) => {
  handleResult(response);
});
function handleResult(data) {
  // if you want you can remove result
  console.log(JSON.stringify(data.data.result));
}
