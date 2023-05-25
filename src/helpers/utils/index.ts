export const isLogin = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (!userInfo) return false;
  return true;
};
