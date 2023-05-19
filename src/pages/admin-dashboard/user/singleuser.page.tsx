import { Tabs } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";



export function Component() {

    return (
        <Tabs defaultValue="Edit">
            <Tabs.List>
            <Tabs.Tab value="Edit">Details</Tabs.Tab>
            <Tabs.Tab value="event" icon={<IconMessageCircle size="0.8rem" />}>Event</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Edit" pt="xl">
                
        </Tabs.Panel>
        <Tabs.Panel value="event" pt="xl">
            
        </Tabs.Panel>
            </Tabs>
        )

}
Component.displayName = "SingleUser"