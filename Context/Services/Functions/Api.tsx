import { IUserSetting } from "@/Context/ContextProvider";
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

export const CreateTrip = (
  owner: number,
  country: string,
  from_city: string,
  to_city: string,
  moving_day: string,
  day_to: string,
  Transportstion: string,
  price: number,
  description: string
) => {
  return defaultApi({
    method: "post",
    url: `${base_url}trip/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      owner,
      country,
      from_city,
      to_city,
      moving_day,
      day_to,
      Transportstion,
      price,
      description,
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
export const ChangeProfile = (userdail: any) => {
  // console.log(Object.keys(userde))
  const {
    first_name,
    last_name,
    email,
    phone_number,
    career,
    education,
    living_in,
    personality_type,
    telegram,
    workout,
    description,
    
  } = userdail;
  const formData = new FormData();

  formData.append("age", userdail.age);
  formData.append("birthdate", userdail.birthdate);
  formData.append("career", career);
  formData.append("completion_percentage", userdail.completion_percentage);
  formData.append("created_at", userdail.created_at);
  formData.append("description", description);
  formData.append("education", education);
  formData.append("email", email);
  formData.append("first_name", first_name);
  formData.append("gender", userdail.gender);
  formData.append("image", userdail.image);
  formData.append("instagram", userdail.instagram);
  formData.append("is_verified", userdail.false);
  formData.append("last_name", last_name);
  formData.append("living_in",living_in);
  formData.append("marital_status", userdail.marital_status);
  formData.append("personality_type", personality_type);
  formData.append("phone_number", userdail.phone_number);
  formData.append("pk", userdail.pk);
  formData.append("telegram", userdail.telegram);
  formData.append("updated_at", userdail.updated_at);
  formData.append("workout", workout);
  return defaultApi({
    method: "put",
    url: `${base_url}user-detail/profile/`,
    data: {
     formData
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type":"multipart/form-data"
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
export const AddToFavorite_api = (id: string) => {
  return defaultApi({
    method: "get",
    url: `${base_url}add-to-favorite/trip/${id}/`,
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
export const Api_search = (
  url?: string,
  from_city?: string,
  to_city?: string,
  moving_date?: string,
  price?: number
) => {
  console.log(from_city);
  console.log(to_city);
  console.log(moving_date);
  console.log(price);
  return defaultApi({
    method: "get",
    url: `${base_url}search/trip/`,
    data: {
      from_city,
      to_city,
      moving_date,
      price,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
export const Api_search2 = (
  from_city?: string,
  to_city?: string,
  moving_date?: string,
  price?: number
) => {
  console.log(from_city);
  console.log(to_city);
  console.log(moving_date);
  console.log(price);
  return defaultApi({
    method: "get",
    url: `${base_url}search/trip/?from_city=${from_city}&to_city=${to_city}&moving_date=${moving_date}&price=${price}`,
    // url: `${base_url}${url}`,
    data: {
      from_city,
      to_city,
      moving_date,
      price,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
export const Userprofile_get = () => {
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
