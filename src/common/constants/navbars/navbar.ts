import { Icon123, IconAbc, IconBuilding, IconNotification, IconProgress, IconReportAnalytics, IconSubscript, IconUser } from "@tabler/icons-react";

export const logout_link = "Logout"

export const adminlinks = [
    { link: '/admin/department', label: 'Departments', icon: IconBuilding },
    { link: '/admin/course', label: 'Courses', icon: IconAbc },
    { link: '/admin/user', label: 'Users', icon: IconUser },
    { link: '/admin/notification', label: 'Notifications', icon: IconNotification},
    // { link: '/admin/assignments', label: 'Assignments', icon: Icon123}

];

export const mainlinks = [
    { link: '/main/courses', label: 'All Courses', icon: IconAbc },
    { link: '/main/mycourses', label: 'My Courses', icon: IconSubscript }
]

export const parentlinks = [
    { link: '/parent/home', label: 'All Courses', icon: IconAbc },
    { link: '/parent/progressandplan', label: 'My Courses', icon: IconProgress },
    { link: '/parent/report', label: 'My Courses', icon: IconReportAnalytics }
]

export const teacherlinks = [
    { link: '/teacher/home', label: 'All Courses', icon: IconAbc },
    { link: '/teacher/progressandplan', label: 'My Courses', icon: IconProgress },
    { link: '/teacher/report', label: 'My Courses', icon: IconReportAnalytics }
]