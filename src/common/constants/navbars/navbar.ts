import { Icon123, IconAbc, IconBuilding, IconNotification, IconUser } from "@tabler/icons-react";

export const logout_link = "Logout"

export const adminlinks = [
    { link: '/admin/department', label: 'Departments', icon: IconBuilding },
    { link: '/admin/course', label: 'Courses', icon: IconAbc },
    { link: '/admin/user', label: 'Users', icon: IconUser },
    { link: '/admin/notification', label: 'Notifications', icon: IconNotification},
    // { link: '/admin/assignments', label: 'Assignments', icon: Icon123}

];

export const mainlinks = [
    { link: '/main/course', label: 'Courses', icon: IconAbc}
]