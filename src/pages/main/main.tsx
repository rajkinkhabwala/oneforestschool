import { Outlet, useNavigation } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/dashboard.layout";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { MainHeaderLayout } from "../../layouts/header/mainheader.layout";

export default function Main() {
  const navigation = useNavigation();

  const data = {
    "user": {
      "name": "Jane Spoonfighter",
      "email": "janspoon@fighter.dev",
      "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    },
    "tabs": [
      "Home",
      "Orders",
      "Education",
      "Community",
      "Forums",
      "Support",
      "Account",
      "Helpdesk"
    ]
  }

  if (navigation.state !== "idle") {
    nprogress.start();
  } else {
    nprogress.complete();
  }

  return (
    <>
      <NavigationProgress />
      <DashboardLayout
        header={<MainHeaderLayout user={data.user} tabs={data.tabs} />}
      >
        <Outlet />
      </DashboardLayout>
    </>
  );
}
