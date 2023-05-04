import { createBrowserRouter } from "react-router-dom";
import { isAuthorized } from "../common/helpers/auth";
import logo from '../logo.svg';
import AdminMain from '../pages/Admin/main';
import path from "path";
import { lazy } from "react";
import { DepartmentPage, loader } from "../pages/Admin/department/department.page";

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
        element: <DepartmentPage />,
        loader: () => loader,
        children: [
          {
            path: "single/",
            lazy: ()=> import('../pages/Admin/department/singledepartment.page')
          },
          {
            path: ":id/"
          }
         ],
        errorElement: <>Error</>
      }]
    }
])

export default router;