import { createBrowserRouter } from "react-router-dom";
import { isAuthorized } from "../common/helpers/auth";
import logo from '../logo.svg';
import AdminMain from '../pages/admin/main';

const router = createBrowserRouter([
    {
        path: '/',
        async loader(){
            const auth = await isAuthorized(["Admins"])

            return auth
        },
        element: (
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        )
    },
    {
      path: 'admin/',
      element: <AdminMain />,
      children: [{
        path: "department/",
        lazy: () => import('../pages/admin/department/department.page'),
        children: [
          
        ],
        errorElement: <>Error</>
      }]
    }
])

export default router;