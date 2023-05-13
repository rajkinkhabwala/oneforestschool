import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import {QueryClientProvider, QueryClient} from "react-query"
import { GoogleOAuthProvider } from "@react-oauth/google";

// const isLocalhost = Boolean(
//   window.location.hostname === "localhost" ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === "[::1]" ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

// // Assuming you have two redirect URIs, and the first is for localhost and second is for production
// const [productionRedirectSignIn, localRedirectSignIn] =
//   awsmobile.oauth.redirectSignIn.split(",");

// const [productionRedirectSignOut, localRedirectSignOut] =
//   awsmobile.oauth.redirectSignOut.split(",");

// const updatedAwsConfig = {
//   ...awsmobile,
//   oauth: {
//     ...awsmobile.oauth,
//     redirectSignIn: isLocalhost
//       ? localRedirectSignIn
//       : productionRedirectSignIn,
//     redirectSignOut: isLocalhost
//       ? localRedirectSignOut
//       : productionRedirectSignOut,
//   },
// };

Amplify.configure(awsmobile);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient()
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <GoogleOAuthProvider clientId={"396573244367-cjr3e2it26rf8cb8v9s6dg1iv0cjf7jn.apps.googleusercontent.com"}>
    <QueryClientProvider client={client} contextSharing={true}>
      <App />
    </QueryClientProvider>
    </GoogleOAuthProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
