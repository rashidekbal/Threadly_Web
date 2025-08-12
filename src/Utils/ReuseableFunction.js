function checkLoggedIn() {
  const token = sessionStorage.getItem("token");
  if (token != undefined) {
    location.replace("/home");
  }
}

export { checkLoggedIn };
