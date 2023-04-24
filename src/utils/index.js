export {
  fullName,
  fullNameOfObj
}

function fullName(family, name, father) {
  return [family, name, father].join(' ').trim();
}

function fullNameOfObj(obj) {
  return [obj['family'], obj['name'], obj['father']].join(' ').trim();
}