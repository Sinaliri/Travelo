import { IUser } from "@/Context/ContextProvider";
export const validate = (data: IUser, type: string): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (type === "Login") {
    if (!data.email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else if (data.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    } else {
      delete errors.password;
    }
  } else if (type === "SignUp") {
    if (!data.FName.trim()) {
      errors.FName = "Username is Required";
    } else {
      delete errors.FName;
    }
    if (!data.LName.trim()) {
      errors.LName = "lastname is Required";
    } else {
      delete errors.FName;
    }

    if (!data.email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else if (data.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    } else {
      delete errors.password;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our terms";
    }
  }

  return errors;
};
