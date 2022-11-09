export async function POST(apiUrl: string, jsonData: any) {
// Set Header
const customConfig = {
headers: {
"Content-Type": "application/json",
},
};

const result = await axios
.post(apiUrl, jsonData, customConfig)
.catch((err) => {
console.log("Err:", err);
return {};
});
console.log("Result:", result);
}
