import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Auth from './common/auth/auth.component';
import {ColorScheme, MantineProvider, ColorSchemeProvider, Button ,} from '@mantine/core';
import { useState } from 'react';
import {useColorScheme} from "@mantine/hooks"
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { CredentialResponse, useGoogleLogin } from '@react-oauth/google';
import { API, Auth as AAuth } from 'aws-amplify';
import { listUsers } from './common/api/admin/admin.api';
function App() {

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const { route } = useAuthenticator((context) => [context.route]);
  
  const login = useGoogleLogin({
    onSuccess: async codeResponse => {
    //   console.log(codeResponse)
    //   let apiName = 'CalendarApi';
    //   let path = '/calendar/create-tokens';
    //   let myInit = {
    //     body: {
    //         "code" : codeResponse.code,
    //     },
    //     header: {
    //         'content-type' : 'application/json',
    //         Authorization: `Bearer ${(await AAuth.currentSession()).getAccessToken().getJwtToken()}`
    //     }

    // }
    //   API.post(apiName, path, myInit).then((value) => {
    //     console.log(value)
    //   }).catch((error) => console.log(error))
    },
    onError :(errorResponse) => console.log(errorResponse),
    onNonOAuthError: (nonOAuthError) => console.log(nonOAuthError),
    flow: 'auth-code',
    scope: "https://www.googleapis.com/auth/calendar",
  });

  if(route === "authenticated"){
    listUsers().then((value) => console.log(value)).catch((error) => console.log(error))
    return(
      // <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      // <MantineProvider theme={{ colorScheme: colorScheme }}  withGlobalStyles withNormalizeCSS>
      // <ModalsProvider>
      //   <Notifications />
      // <RouterProvider router={router} fallbackElement/>
      // </ModalsProvider>
      // </MantineProvider>
      // </ColorSchemeProvider>
      <Button onClick={login}>Login With Google</Button>
    )
  }

  return (
    <Auth />
  );
}

export default App;