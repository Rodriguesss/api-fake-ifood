exports.formatter = () => {
  return new Date(new Date().valueOf() - new Date().getTimezoneOffset() * 60000)
}