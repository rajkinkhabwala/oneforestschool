import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Auth from './common/auth/auth.component';
import {ColorScheme, MantineProvider, ColorSchemeProvider ,} from '@mantine/core';
import { useState } from 'react';
import {useColorScheme} from "@mantine/hooks"
function App() {

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const { route } = useAuthenticator((context) => [context.route]);
  

  if(route === "authenticated"){
    
    return(
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme: colorScheme }}  withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} fallbackElement/>
      </MantineProvider>
      </ColorSchemeProvider>
    )
  }

  return (
    <Auth />
  );
}

export default App;
