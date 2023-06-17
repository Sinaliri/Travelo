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
import styles from "./Signup.module.scss";
//function
import { validate } from "@/Context/Services/Functions/validate";
//primereact
import { Toast } from "primereact/toast";
import { signUp } from "@/Context/Services/Functions/Api";
const Signup = () => {
  const toast = useRef<Toast>(null);
  const [UserData, setUserData] = useState<IUser>({
    FName: "",
    LName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  // const { UserData , setUserData }=useContext(DataContext);
  const [touch, setTouch] = useState<Itouch>({});
  const [errors, setErrors] = useState<Ierror>({});

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "isAccepted") {
      setUserData({ ...UserData, [event.target.name]: event.target.checked });
    } else {
      setUserData({ ...UserData, [event.target.name]: event.target.value });
    }
  };
  const signUpClick = () => {
    if (!Object.keys(errors).length) {
      signUp(UserData.email, UserData.FName, UserData.LName, UserData.password, UserData.confirmPassword).then((res) => {
        if (res.status === 201) {
          showSuccess();
        }
        else ErrorToast(res.response.data.error)
      });
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
  }
  useEffect(() => {
    setErrors(validate(UserData, "SignUp"));
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

  const ErrorToast = (text: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: text,
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


  return (
    <div className={`${styles.SignupContainer}`}>
      <Toast ref={toast} />
      <h2>Welcome!</h2>
      <form
        className={`${styles.form} grid flex-column`}
        onSubmit={submitHandler}
      >
        <div className="col-12 flex flex-wrap px-0">
          <div className={`${styles.inputwrapper} col-12 xl:col-6`}>
            <label>First Name</label>
            <input
              //    className={(errors.name && touch.name ) && styles.uncompleted}
              type="text"
              name="FName"
              value={UserData.FName}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {errors.FName && touch.FName && <span>{errors.FName}</span>}
          </div>
          <div className={`${styles.inputwrapper} col-12 xl:col-6 `}>
            <label>Last Name</label>
            <input
              //  className={(errors.name && touch.name ) && styles.uncompleted}
              type="text"
              name="LName"
              value={UserData.LName}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            {errors.LName && touch.LName && <span>{errors.LName}</span>}
          </div>
        </div>
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
          <label>Confirm Password</label>
          <input
            // className={(errors.confirmPassword && touch.confirmPassword )&& styles.uncompleted}
            type="password"
            name="confirmPassword"
            value={UserData.confirmPassword}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={`${styles.inputwrapper} col-12`}>
          <div className={`flex align-items-center`}>
            <input
              // className={(errors.isAccepted && touch.isAccepted )? styles.uncompleted : null}
              type="checkbox"
              name="isAccepted"
              value={UserData.isAccepted.toString()}
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            <label className={`${styles.checkboxlabel} ml-2`}>I agree with privecy and policy</label>
          </div>
          {errors.isAccepted && touch.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div
          className={`${styles.ButtonContainer} flex justify-content-center align-items-center md:col-8 md:col-offset-2 p-0`}
        >
          <button type="submit" onClick={signUpClick}>Sign up!</button>
        </div>
      </form>
      <div className={`flex ${styles.LoginRef} align-items-center`}>
        <h5 className="">Already have an account?</h5>
        <Link className={`${styles.loginLink}`} href="/login">
          Sign in!
        </Link>
      </div>
    </div>
  );
};

export default Signup;
