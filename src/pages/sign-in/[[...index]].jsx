import { SignIn } from "@clerk/nextjs";
 
const SignInPage = () => (
  <div className=" flex items-center justify-center">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
);
 
export default SignInPage;