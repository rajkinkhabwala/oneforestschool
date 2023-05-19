import { createBrowserRouter, json } from "react-router-dom";
import { isAuthorized } from "../common/helpers/auth";
import AdminMain from "../pages/admin-dashboard/main";
import StudentMain from "../pages/main-dashboard/main.dashboard";
import ParentMain from "../pages/parent-dashboard/main.parent"
// import mainMain from "../pages/main/main"
import { notAuthorized } from "../common/constants/errors/errors";

const router = createBrowserRouter([
  {
    path: "main/",
    element: <StudentMain />,
    loader: async() => {
      const value = await isAuthorized(["Students"]);

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
        path: 'courses/',
        lazy: () =>
              import("../pages/main-dashboard/course/viewallcourse.page"),
      },
      {
        path: 'mycourses/',
        lazy: () =>
              import("../pages/main-dashboard/course/mycourse.page")
      }
    ]
  },
  {
  path: "parent/",
  element: <ParentMain supTitle={undefined} description={undefined} data={[]} />,
  loader: async() => {
    const value = await isAuthorized(["Parent"]);

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
      path: 'home/',
      lazy: () =>
            import("../pages/main-dashboard/course/viewallcourse.page"),
    },
    // {
    //   path: 'progressandplan/',
    //   lazy: () =>
    //         import("../pages/main-dashboard/course/mycourse.page")
    // },
    // {
    //   path:: 'report/',
    //   lazy: () =>
    //           import("../pages/parent-dashboard/progressandplan.parent")
    // },
  ]
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
        lazy: () => import('../pages/admin-dashboard/department/department.page'),
        
        children: [
          {
            path: ":id/",
            lazy: () =>
              import("../pages/admin-dashboard/department/singledepartment.page"),
          },
          {
            path: "create/",
            lazy: () => import("../pages/admin-dashboard/department/createdepartment.page"),
          },
          {
            path: "edit/",
            lazy: () => import("../pages/admin-dashboard/department/editdepartment.page"),
          }
        ],
      },
      {
        path: "course/",
        lazy: () => import('../pages/admin-dashboard/course/course.page'),
        
        children: [
          {
            path: ":id/",
            lazy: () =>
              import("../pages/admin-dashboard/course/singlecourse.page"),
          },
          {
            path: "create/",
            lazy: () => import("../pages/admin-dashboard/course/createcourse.page"),
          },
          {
            path: "edit/",
            lazy: () => import("../pages/admin-dashboard/course/editcourse.page"),
          }
        ],
      },
      {
        path: "notification/",
        lazy: () => import('../pages/admin-dashboard/notification/notification.page'),

        children: [
          {
            path: "create/",
            lazy: () => import("../pages/admin-dashboard/notification/createnotification.page")
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
    
  },

]);

export default router;
