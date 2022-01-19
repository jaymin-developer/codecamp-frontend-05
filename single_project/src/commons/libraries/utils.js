export const getMyDate = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  // getMonth()는 0부터 시작, + 1 해줄 것
  const dd = aaa.getDate();
  return `${yyyy}.${mm}.${dd}`;
};
