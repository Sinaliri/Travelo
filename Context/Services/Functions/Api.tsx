import axios from "axios";
import { log } from "console";

export const url = "http://localhost:8000/api/v1/";
export const base_url = url;

let defaultApi = axios.create({
  baseURL: base_url,
});

// const accessToken = localStorage.getItem("accessToken");

export const login = (phone_or_email: string, password: string) => {
  console.log(phone_or_email)
  console.log(password)
    return defaultApi({
    method: "post",
    url: `${base_url}accounts/login/`,
    data: {
      phone_or_email,
      password,
    },
  })
    .then((res) => console.log("res" + res))
    .catch((err) => console.log("err" + err))
};
export const Api_signup = async (
    phone_or_email: string,
    password: string,
    first_name: string,
    last_name: string,
    password2: string
  ) => {
    try {
      const response = await defaultApi.post(`${base_url}accounts/signup/`, {
        phone_or_email,
        first_name,
        last_name,
        password,
        password2,
      });
      
      console.log("res:", response.data); // Access the response data
      
      // Check for specific success criteria in the response and return relevant data if needed
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Error:", error);
      // Check if the error response is available
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      throw error; // Rethrow the error to handle it at the calling code level
    }
  };

  
  
  
  
  
  
