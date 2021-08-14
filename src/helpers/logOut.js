import axios from "axios";

export default async function logOut(history, token) {
  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/sign-out`,
      {},
      config
    );
  }

  localStorage.removeItem("userData");
  history.push("/");
}
