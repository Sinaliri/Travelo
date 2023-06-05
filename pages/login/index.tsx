//picture
import LoginSvg from "../../assets/images/Login.svg"
//components
import EnterLayout from "@/Components/layout/EnteredLayout/EnterLayout"
import SignUp from "../../Components/modules/Signup/Signup"
const login = () => {
  return (
    <EnterLayout imgsrc={LoginSvg as string}>
        {/* complete login component and replace it with signup component */}
        <SignUp/>
    </EnterLayout>
  )
}

export default login