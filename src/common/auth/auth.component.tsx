import { Authenticator } from "@aws-amplify/ui-react";
export default function Auth() {

  return (
    <>
      <Authenticator
      signUpAttributes={["name"]}
      loginMechanisms={["email"]}
      
      className="authentication" /></>
  );
}
