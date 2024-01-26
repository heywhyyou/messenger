import { getCookie } from "typescript-cookie";

export async function getCode(email: string) {
  try {
    const response = await fetch("https://edu.strada.one/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function changeName(name: string) {
  try {
    const response = await fetch("https://edu.strada.one/api/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("code")}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getProfile() {
  try {
    const response = await fetch("https://edu.strada.one/api/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("code")}`,
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
