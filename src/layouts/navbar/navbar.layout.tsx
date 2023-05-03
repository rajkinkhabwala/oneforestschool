import { PropsWithChildren, useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  TablerIconsProps,
} from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import { logout_link } from "../../common/constants/navbars/navbar";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

interface INavbarLayout {
  data: (
    | {
        link: string;
        label: string;
        icon: (props: TablerIconsProps) => JSX.Element;
      }
    | {
        link: string;
        label: string;
        icon?: undefined;
      }
  )[];
}

export function NavbarLayout({ data }: PropsWithChildren<INavbarLayout>) {
  const { classes, cx } = useStyles();
  
  const links = data.map((item) => (
      <NavLink
        className={({isActive}) => cx(classes.link, { [classes.linkActive]: isActive })}
        to={item.link}
        key={item.link}
      >
        
      {item.icon ? (
        <item.icon className={classes.linkIcon} stroke={1.5} />
      ) : (
        <></>
      )}
      <span>{item.label}</span>
      </NavLink>
  ));

  return (
    <>
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <Link
          className={classes.link}
          onClick={() => {
            Auth.signOut()
          }} to={"/"}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>{logout_link}</span>
        </Link>
      </Navbar.Section>
    </>
  );
}
