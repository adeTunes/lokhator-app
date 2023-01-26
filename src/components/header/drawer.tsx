import React from "react";
import { Drawer, Group } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { navData } from "../../layout/navData";
import Link from "next/link";

function NavDrawer() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="sm"
                classNames={{ drawer: "bg-[#ffffff47]" }}>
                <ul className="flex flex-col gap-3 text-light-white">
                    {navData.map((item, idx) => (
                        <li className="font-medium leading-[21.86px]" key={idx}>
                            <Link href="/">{item}</Link>
                        </li>
                    ))}
                </ul>
            </Drawer>

            <Group position="center">
                <Icon
                    onClick={() => setOpened(true)}
                    style={{ cursor: "pointer" }}
                    className="navDrawer hidden max-[640px]:inline-block"
                    color="#ffffff"
                    icon="mi:menu"
                    height="30px"
                />
            </Group>
        </>
    );
}

export default NavDrawer;
