import { Outlet, useNavigation } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/dashboard.layout";
import { NavbarLayout } from "../../layouts/navbar/navbar.layout";
import { mainlinks } from "../../common/constants/navbars/navbar";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { useEffect } from "react";

export default function Main() {
  const navigation = useNavigation();
useEffect(() => {
  
  if (navigation.state !== "idle") {
    nprogress.start();
  } else {
    nprogress.complete();
  }
}, [navigation.state])
  

  return (
    <>
      <NavigationProgress  />
      <DashboardLayout
        navbar={<NavbarLayout data={mainlinks} />}
        header={<></>}
      >
        <Outlet />
      </DashboardLayout>
    </>
  );
}
