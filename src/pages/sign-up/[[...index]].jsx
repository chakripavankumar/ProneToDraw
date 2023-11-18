import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => (
  <div className=" flex items-center justify-center">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
);
export default SignUpPage;