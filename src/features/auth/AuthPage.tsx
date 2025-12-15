import { AuthIdentifierStep } from "./components";

const AuthPage = () => {
  return <AuthIdentifierStep onSubmit={() => console.log("Submit Clicked")} />;
};

export default AuthPage;
