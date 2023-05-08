import { createStyles, rem } from "@mantine/core";

export const tableStyles = createStyles((theme) => ({
    table: {
        border: `2px solid ${theme.colors.dark[8]}`,
        borderRadius: `5px`,
        background: `#fff`
    },

    header: {
        display: `flex`,
        justifyContent: `end`,
        margin: `0 2rem 0rem 2rem`,
        alignItems: `center`,
        paddingBottom: rem(10)
    },
    modify: {
        display: `flex`,
        justifyContent: `space-around`,
        margin: `0 2rem 0rem 2rem`,
        alignItems: `center`,
    }
    
}))