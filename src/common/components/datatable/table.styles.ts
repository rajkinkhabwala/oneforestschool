import { createStyles } from "@mantine/core";

export const tableStyles = createStyles((theme) => ({
    table: {
        border: `2px solid ${theme.colors.dark[8]}`,
        borderRadius: `5px`,
        background: `#fff`
    },

    header: {
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 2rem 0rem 2rem`,
        alignItems: `center`,
        fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`
    }
}))