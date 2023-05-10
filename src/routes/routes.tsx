import { createBrowserRouter, json } from "react-router-dom";
import { isAuthorized } from "../common/helpers/auth";
import logo from "../logo.svg";
import AdminMain from "../pages/admin/main";
// import mainMain from "../pages/main/main"
import { notAuthorized } from "../common/constants/errors/errors";

const router = createBrowserRouter([
  {
    path: "/",
    async loader() {
      const auth = await isAuthorized(["Admins"]);

      return auth;
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
    ),
  },
  {
    path: "admin/",
    element: <AdminMain />,
    loader: async () => {
      const value = await isAuthorized(["Admins"]);

      if (value.status) {
        return value;
      }else {
        throw json(
          {
            message: notAuthorized,
          },
          {
            status: 401,
            statusText: "UNAUTHORIZATION",
          }
        );
      }
    },
    children: [
      {
        path: "department/",
        lazy: () => import('../pages/admin/department/department.page'),
        
        children: [
          {
            path: ":id/",
            lazy: () =>
              import("../pages/admin/department/singledepartment.page"),
          },
          {
            path: "create/",
            lazy: () => import("../pages/admin/department/createdepartment.page"),
          },
          {
            path: "edit/",
            lazy: () => import("../pages/admin/department/editdepartment.page"),
          }
        ],
      },
      {
        path: "course/",
        lazy: () => import('../pages/admin/course/course.page'),
        
        children: [
          {
            path: ":id/",
            lazy: () =>
              import("../pages/admin/course/singlecourse.page"),
          },
          {
            path: "create/",
            lazy: () => import("../pages/admin/course/createcourse.page"),
          },
          {
            path: "edit/",
            lazy: () => import("../pages/admin/course/editcourse.page"),
          }
        ],
      },
      {
        path: "notification/",
        lazy: () => import('../pages/admin/notification/notification.page'),

        children: [
          {
            path: "create/",
            lazy: () => import("../pages/admin/notification/createnotification.page")
          }
        ]
      },
      {
        path: "user/",
        // Add Lazy to render element
        
        children: [
          // add children as per needs
        ],
      },
    ],
    errorElement: <>Error</>,
  },

]);

export default router;
