import request from "@/utils/request";

export function resetEmail(data) {
  return request({
    url: "api/code/resetEmail",
    method: "post",
    data
  });
}

export function updatePass(pass) {
  return request({
    url: "api/user/updatePass/" + pass,
    method: "get"
  });
}
