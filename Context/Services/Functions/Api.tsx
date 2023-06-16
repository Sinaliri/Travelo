import axios from "axios";

export const url = "https://godopetbackend.darkube.app/";
export const base_url = url;

let defaultApi = axios.create({
    baseURL: base_url,
});

// const accessToken = localStorage.getItem("accessToken");

export const login = (phone_or_email: string, password: string) => {
    return defaultApi({
        method: "post",
        url: `${base_url}api/v1/accounts/login/`,
        data: {
            phone_or_email,
            password,
        },
    })
        .then((res) => res)
        .catch((err) => err);
};