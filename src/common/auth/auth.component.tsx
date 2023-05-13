import { Authenticator } from "@aws-amplify/ui-react";
export default function Auth() {

  return (
    <>
      <Authenticator
      loginMechanisms={["email"]}
      
      className="authentication" /></>
  );
}
