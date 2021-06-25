import axios from "axios";

export default async function logOut(history, token) {
  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post("http://localhost:4000/sign-out", {}, config);
  }

  localStorage.removeItem("userData");
  history.push("/");
}
