import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/dashboard.layout";
import { NavbarLayout } from "../../layouts/navbar/navbar.layout";
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
  } from "@tabler/icons-react";

export default function Main(){
    const data = [
        { link: "", label: "Notifications", icon: IconBellRinging },
        { link: "", label: "Billing", icon: IconReceipt2 },
        { link: "", label: "Security", icon: IconFingerprint },
        { link: "", label: "SSH Keys", icon: IconKey },
        { link: "", label: "Databases", icon: IconDatabaseImport },
        { link: "", label: "Authentication", icon: Icon2fa },
        { link: "", label: "Other Settings" },
      ];

    return(
        <DashboardLayout navbar={<NavbarLayout data={data} />} header={<></>}>
        <Outlet />
        </DashboardLayout>
    )
}