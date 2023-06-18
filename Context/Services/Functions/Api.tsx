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
  const formdate=new FormData();
  const formData = new FormData();

  formData.append("age", 14);
  formData.append("birthdate", "2009-02-16");
  formData.append("career", "Financial adviser");
  formData.append("completion_percentage", 100);
  formData.append("created_at", "2023-06-18T21:15:15.490249+03:30");
  formData.append("description", "Little indicate together training speech research leg analysis. Hit social road degree will thousand word. Foot physical read shoulder real involve education. Stock century kitchen power political. Morning write political study.");
  formData.append("education", "Computer Engineering");
  formData.append("email", "sina.liri@yahoo.com");
  formData.append("first_name", "Suzanne");
  formData.append("gender", "Female");
  // formData.append("image", <file object representing the image>);
  formData.append("instagram", "instagram-2583590646");
  formData.append("is_verified", false);
  formData.append("last_name", "Armstrong");
  formData.append("living_in", "Jacksonmouthss");
  formData.append("marital_status", "married");
  formData.append("personality_type", "Introverted");
  formData.append("phone_number", "+98912 3456 789");
  formData.append("pk", 1);
  formData.append("telegram", "telegram-2259932400");
  formData.append("updated_at", "2023-06-18T21:50:20.377280+03:30");
  formData.append("workout", "tennis");
  return defaultApi({
    method: "put",
    url: `${base_url}user-detail/profile/`,
    data: {
     formdate
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
