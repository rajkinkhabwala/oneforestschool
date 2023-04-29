import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Auth from './common/auth/auth.component';


function App() {
  
  const { route, user } = useAuthenticator((context) => [context.route]);

  if(route === "authenticated"){

    return(
      <RouterProvider router={router} />
    )
  }

  return (
    <Auth />
  );
}

export default App;
