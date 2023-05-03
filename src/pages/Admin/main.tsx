import { Outlet, useNavigation } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/dashboard.layout";
import { NavbarLayout } from "../../layouts/navbar/navbar.layout";
import { adminlinks } from "../../common/constants/navbars/navbar";
import { LoadingOverlay } from "@mantine/core";

export default function Main(){

  const navigation = useNavigation();
    
    return(
        <DashboardLayout navbar={<NavbarLayout data={adminlinks} />} header={<></>}>
        {navigation.state !== "idle" ? <LoadingOverlay visible={true} overlayBlur={2} /> : <Outlet/>}
        </DashboardLayout>
    )
}