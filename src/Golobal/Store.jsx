import { createContext } from "react";

const data = createContext([]);
const name = "rashid";

export default function ContextProvider({ children }) {
  return <data.Provider value={{ name }}>{children}</data.Provider>;
}
export { data };
