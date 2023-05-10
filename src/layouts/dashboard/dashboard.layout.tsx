import { PropsWithChildren, useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';


interface IDashboardLayout {
    navbar?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined,
    header?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined,
    footer?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined
}

export default function DashboardLayout({children, navbar, header, footer} : PropsWithChildren<IDashboardLayout>) {
  const theme = useMantineTheme();
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.teal[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        navbar ?
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          {navbar}
        </Navbar>
        : undefined
      }

      footer={
        footer ?
        <Footer height={60} p="md">
          {footer}
        </Footer>
        : undefined
      }
      header={
        header ?
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            {header}
          </div>
        </Header>
        : undefined
      }
    >

    {children}
    </AppShell>
  );
}