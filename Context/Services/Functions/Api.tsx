import axios from "axios";
import { useEffect, useState } from "react";

export const url = "http://192.168.1.102:8000/api/v1/";
export const base_url = url;

let defaultApi = axios.create({
  baseURL: base_url,
});

if (typeof window !== 'undefined') {
  var token = localStorage.getItem("accessToken");
}



export const login = (phone_or_email: string, password: string) => {
  return defaultApi({
    method: "post",
    url: `${base_url}accounts/login/`,
    data: {
      phone_or_email,
      password,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
export const signUp = (
  phone_or_email: string,
  first_name: string,
  last_name: string,
  password: string,
  password2: string
) => {
  return defaultApi({
    method: "post",
    url: `${base_url}accounts/signup/`,
    data: {
      phone_or_email,
      first_name,
      last_name,
      password,
      password2,
    },
  })
    .then((res) => res)
    .catch((err) => err);
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
  export const MainPageTrip = () => {
      return defaultApi({
      method: "get",
      url: `${base_url}main-page/trip/`,
      
    })
      .then((res) =>{return res.data})
      .catch((err) => console.log("err" + err))
  };

export const People = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}user-detail/people/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};


export const FavoriteTrip = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}user-detail/favorite/trip/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const MyTrip = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}user-detail/mytrip/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};







