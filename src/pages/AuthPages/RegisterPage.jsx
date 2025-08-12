import React, { useEffect, useState } from "react";
import { checkLoggedIn } from "../../Utils/ReuseableFunction.js";
export default function RegisterPage() {
  const [IsLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return <div>Register</div>;
}
