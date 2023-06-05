import EnterLayout from "@/Components/layout/EnteredLayout/EnterLayout"
import signup from "../../assets/images/Signup.svg"
import Signup from "@/Components/modules/Signup/Signup"
const SignUp = () => {
  return (
    <EnterLayout imgsrc={signup as string}>
      <Signup/>
    </EnterLayout>
  )
}

export default SignUp