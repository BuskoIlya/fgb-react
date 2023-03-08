export {
  fullName,
  fullNameOfObj,
  getDate
}

function fullName(family, name, father) {
  return [family, name, father].join(' ').trim();
}

function fullNameOfObj(obj) {
  return [obj['family'], obj['name'], obj['father']].join(' ').trim();
}

function getDate(date) {
  if (!date) {
    return '';
  }
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };
  return new Date(date).toLocaleDateString('ru-Ru', options);
}