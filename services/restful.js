function success(message = '成功', data = null) {
  const successData = { message, data, code: "200" };

  return successData;
}

function err(message = "错误", data = null) {
  const errData = { message, data, code: "500" };

  return errData;
}

export default { success, err } 