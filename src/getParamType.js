export { getParamType };

function getParamType(name) {
  return name.toLowerCase().split(" ").join("-");
}