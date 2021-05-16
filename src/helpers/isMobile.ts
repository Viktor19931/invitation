const isMobile = (userAgent = window.navigator.userAgent) =>
  !!userAgent &&
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/gi.test(userAgent);

export default isMobile;
