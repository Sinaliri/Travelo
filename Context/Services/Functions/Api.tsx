import axios from "axios";
import { useEffect, useState } from "react";

export const url = "http://192.168.1.102:8000/api/v1/";
export const base_url = url;

let defaultApi = axios.create({
  baseURL: base_url,
});

if (typeof window !== "undefined") {
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

export const CreateTrip = (owner: number, country: string, from_city: string, to_city: string,
  moving_day: string, day_to: string, Transportstion: string, price: number, description: string
) => {
  return defaultApi({
    method: "post",
    url: `${base_url}trip/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      owner, country, from_city, to_city, moving_day, day_to, Transportstion, price, description
    },
  })
    .then((res) => res)
    .catch((err) => err);
};


export const MainPageTrip = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}main-page/trip/`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err" + err));
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
export const ChangeProfile = (changedData) => {
  const data = {};
  Object.keys(changedData).forEach((key) => {
    if (changedData[key]?.length > 0) {
      data[key] = changedData[key];
    }
  });
  console.log(Object.keys(changedData))
  return defaultApi({
    method: "put",
    url: `${base_url}user-detail/profile/`,
    data: changedData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
export const UserProfile = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}user-detail/profile/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};


export const Contacts = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}messenger/contacts`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
