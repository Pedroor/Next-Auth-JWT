import { v4 as uuid } from "uuid";

interface SignInRequestData {
  email: string;
  password: string;
}

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Pedro Arthur",
      email: "parthur259@gmail.com",
      avatar_url: "https://github.com/Pedroor.png",
    },
  };
}

export async function recoverUserData() {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Pedro Arthur",
      email: "parthur259@gmail.com",
      avatar_url: "https://github.com/Pedroor.png",
    },
  };
}
