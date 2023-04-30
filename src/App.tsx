import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Auth from './common/auth/auth.component';
import { listEvents } from './common/api/calendar/calendar';


function App() {
  
  const { route, user } = useAuthenticator((context) => [context.route]);

  if(route === "authenticated"){
    listEvents().then((value) => console.log(value)).catch((err) => console.log(err))
    return(
      <RouterProvider router={router} />
    )
  }

  return (
    <Auth />
  );
}

export default App;
