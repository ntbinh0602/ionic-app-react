import axios from "axios";

// chuyển đổi các ký tự đặt biệt khi nhập liệu sang ký tự hiển thị trên web,
// không cho nhúng script vào web như bình thường, tránh XSS
export function convertSpecial2Html(str: string) {
  if (!str) {
    return str;
  }
  return str
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

// hàm tổng quát để gọi web
export function cngApiService(
  baseURL: string | undefined,
  headers: any = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: number = 20000
) {
  // Bước 1: Định nghĩa cấu hình tham số chung
  const customAxios = axios.create({
    baseURL,
    timeout,
    headers,
  });

  return customAxios;
}

// Hàm get lấy kết quả
export function GET(apiUrl: string, token: string | boolean = false) {
  // kiểm tra trực tiếp ở đây được không?
  const customAxios = cngApiService(undefined, token);
  return customAxios
    .get(apiUrl)
    .then((result) => {
      if (result && result.data) {
        return result.data;
      }
      throw `Không có kết quả trên hàm GET: ${apiUrl}`;
    })
    .catch((err) => {
      throw err;
    });
}

// hàm xóa một bảng ghi
export function DELETE(apiUrl: string, token: string | boolean = false) {
  // kiểm tra trực tiếp ở đây được không?
  const customAxios = cngApiService(undefined, token);
  return customAxios
    .delete(apiUrl)
    .then((result) => {
      if (result && result.data) {
        return result.data;
      }
      throw `Không có kết quả trên hàm DELETE: ${apiUrl}`;
    })
    .catch((err) => {
      // đây là trạng thái được xác định ở máy chủ cấm rồi đây

      throw err;
    });
}

// chuyển json sang lệnh post
export async function POST(apiUrl: string, jsonData: any) {
  let result = await axios
    .post(apiUrl, jsonData)
    .then((result) => {
      console.log("Data", result);
      return result;
    })
    .catch((err) => {
      console.log("====================================");
      console.log("Lỗi err", err);
      console.log("====================================");
      // throw err;
      return {};
    });

  return result;

  // const customAxios = cngApiService(undefined);
  // // console.log("Post cái gì?", apiUrl, jsonData, token);
  // return customAxios
  //   .post(apiUrl, jsonData)
  //   .then((result) => {
  //     console.log(result);
  //     if (result && result.data) {
  //       //body
  //       return result.data;
  //     }
  //     throw `Không có kết quả trên hàm POST: ${apiUrl}`;
  //   })
  //   .catch((err) => {
  //     console.log("====================================");
  //     console.log("Lỗi err", err);
  //     console.log("====================================");
  //     // throw err;
  //     return {};
  //   });
}

// Hàm lệnh put tức là update
export function PUT(
  apiUrl: string,
  jsonData: any,
  token: string | boolean = false
) {
  const customAxios = cngApiService(undefined, token);
  return customAxios
    .put(apiUrl, jsonData)
    .then((result) => {
      if (result && result.data) {
        return result.data;
      }
      throw `Không có kết quả trên hàm PUT: ${apiUrl}`;
    })
    .catch((err) => {
      throw err;
    });
}

// chuyển file bằng FormData
/**
 * let form_data: FormData = new FormData();
    for (let key in formData){
      form_data.append(key, formData[key]);
    }
    files.forEach((file:any,idx:number)=>{
      form_data.append(`file_${idx+1}`, file, file.filename);
    });
 * @param token 
 * @param apiUrl 
 * @param formData 
 * @returns 
 */
export function POST_FORM_DATA(
  apiUrl: string,
  formData: FormData,
  token: string | boolean = false
) {
  const customAxios = cngApiService(undefined, token);
  return customAxios
    .post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      if (result && result.data) {
        return result.data;
      }
      throw `Không có kết quả trên hàm POST: ${apiUrl}`;
    })
    .catch((err) => {
      // đây là trạng thái được xác định ở máy chủ cấm rồi đây
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        throw `${err.response.data.message}`;
      }
      throw err;
    });
}
