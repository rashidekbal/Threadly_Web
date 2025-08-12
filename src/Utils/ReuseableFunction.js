import { getCookies } from "./CookieManager";

async function checkLoggedIn() {
  const response = await getCookies("userData");
  if (response != null) {
    location.replace("/home");
  }
}

// Function to validate Email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate Phone Number (10 digits, India example)
function isValidPhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
}

export { checkLoggedIn, isValidEmail, isValidPhone };
