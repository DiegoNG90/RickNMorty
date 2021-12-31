export const episodeFromUrl = (url) => {
  const arrUrl = url.split('/');
  return `${arrUrl[arrUrl.length - 2]} ${arrUrl[arrUrl.length - 1]}`;
};

export const getCharacterInitials = (name) => {
  const arrName = name.split(' ');
  let initials = '';
  for (let i = 0; i < arrName.length; i++) {
    initials += arrName[i][0].toUpperCase();
  }

  return arrName.length < 4
    ? initials
    : `${arrName[0][0]}${arrName[arrName.length - 1][0]}`;
};
