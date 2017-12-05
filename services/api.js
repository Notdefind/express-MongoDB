function success(message = '成功', data = null) {
  const successData = { message, data, code: "01" };

  return successData;
}

function err(message = "错误", data = null) {
  const errData = { message, data, code: "00" };

  return errData;
}

export default { success, err } 