import { Outlet, useNavigation } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/dashboard.layout";
import { NavbarLayout } from "../../layouts/navbar/navbar.layout";
import { adminlinks } from "../../common/constants/navbars/navbar";
import { NavigationProgress, nprogress } from "@mantine/nprogress";

export default function Main() {
  const navigation = useNavigation();

  if (navigation.state !== "idle") {
    nprogress.start();
  } else {
    nprogress.complete();
  }

  return (
    <>
      <NavigationProgress />
      <DashboardLayout
        navbar={<NavbarLayout data={adminlinks} />}
        header={<></>}
      >
        <Outlet />
      </DashboardLayout>
    </>
  );
}
