import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
//types
import { IUser, Itouch, Ierror, DataContext } from "@/Context/ContextProvider";
//style
import styles from "./Login.module.scss";
//function
import { validate } from "@/Context/Services/Functions/validate";
//primereact
import { Toast } from "primereact/toast";
import { login } from "@/Context/Services/Functions/Api";
const Login = () => {
  const toast = useRef<Toast>(null);
  const [UserData, setUserData] = useState<IUser>({
    FName: "",
    LName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  //   const { UserData, setUserData }=useContext(DataContext) || {};
  const [touch, setTouch] = useState<Itouch>({});
  const [errors, setErrors] = useState<Ierror>({});

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "isAccepted") {
      setUserData({ ...UserData, [event.target.name]: event.target.checked });
    } else {
      setUserData({ ...UserData, [event.target.name]: event.target.value });
    }
  };
  useEffect(() => {
    setErrors(validate(UserData, "Login"));
  }, [UserData, touch]);
  const touchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: "invalid data",
      life: 3000,
    });
  };
  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Signed in successfully",
      life: 3000,
    });
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const ErrorToast = (text: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: text,
      life: 3000,
    });
  };

  const loginClick = () => {
    login(UserData.email, UserData.password).then((res) => {
      if (!Object.keys(errors).length) {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.access)
          showSuccess();
        }
        else {
          console.log(res);

          ErrorToast(res.response.data.error)
        }
      }
      else {
        showError();
        setTouch({
          FName: true,
          LName: true,
          email: true,
          password: true,
          confirmPassword: true,
          isAccepted: true,
        });
      }
    });
  }
  return (
    <div className={`${styles.SignupContainer}`}>
      <Toast ref={toast} />
      <h2>Welcome Back!</h2>
      <form
        className={`${styles.form} grid flex-column`}
        onSubmit={submitHandler}
      >
        <div className={`${styles.inputwrapper} col-12`}>
          <label>Email</label>
          <input
            // className={(errors.email && touch.email ) && styles.uncompleted }
            type="text"
            name="email"
            value={UserData.email}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={`${styles.inputwrapper} col-12`}>
          <label>Password</label>
          <input
            // className={(errors.password && touch.password ) && styles.uncompleted}
            type="password"
            name="password"
            value={UserData.password}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div className={`${styles.inputwrapper} col-12`}>
          <div className={`flex align-items-center justify-content-between`}>
            <div className={`flex align-items-center`}>
              <input
                // className={(errors.isAccepted && touch.isAccepted )? styles.uncompleted : null}
                type="checkbox"
                name="isAccepted"
                // value={UserData.isAccepted.toString()}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              <label className={`${styles.checkboxlabel} ml-2`}>Remember me</label>
            </div>
            <label className={`${styles.checkboxlabel} ml-2`}>Forogot password?</label>
          </div>
        </div>
        <div
          className={`${styles.ButtonContainer} flex justify-content-center align-items-center md:col-8 md:col-offset-2 p-0`}
        >
          <button type="submit" onClick={loginClick}>Sign in!</button>
        </div>
      </form>
      <div className={`flex ${styles.LoginRef} align-items-center`}>
        <h5 className="">Don’t have an account?</h5>
        <Link className={`${styles.loginLink}`} href="/signup">
          Sign up!
        </Link>
      </div>
    </div>
  );
};

export default Login;
