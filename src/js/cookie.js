const setCookie = (cookieName = "isOnLevel", level = getLevel(), expireDays = 30) => {
  let date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  let expires = date.toUTCString();

  document.cookie = `${cookieName}=${level}; ${expires}; path=/`;
};

const getCookie = (cookieName = "isOnLevel") => {
  let name = `${cookieName}=`;
  // Falls Cookie Sonderzeichen wie $ beinhaltet
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

const checkCookie = () => {
  let level = getCookie();
  if (level !== "") {
	// alert(`Wir haben deinen Fortschritt auf \nLevel: ${level} wiederhergestellt!`);
  } else {
	// alert("Dein Fortschritt wird über Cookies gespeichert! \nDu kannst also beruhigt den Browser schließen und wann anders wiederkommen :)");
	setCookie();
  }
}

const getLevel = () => {
  return 1;
}