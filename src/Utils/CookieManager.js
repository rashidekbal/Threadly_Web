async function setCookieObject(name, object) {
  await cookieStore.set({
    name: name,
    value: JSON.stringify(object),
    expires: Date.now() + 7200 * 60 * 1000, //expire in 5 days
  });
}
async function getCookies(name) {
  let cookie = await cookieStore.get(name);

  if (cookie != null) {
    cookie = JSON.parse(cookie.value);
    return cookie;
  }
  return null;
}

export { setCookieObject, getCookies };
