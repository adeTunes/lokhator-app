import { Icon } from "@iconify/react";
import React from "react";

function LokahtorLink({ linkTitle }) {
    return (
        <div className="flex py-[3px] px-[5px] items-center gap-2 links">
            <Icon icon="ci:link-02" color="#2FC67E" />
            <span>{linkTitle}</span>
            <Icon icon="ant-design:plus-outlined" />
        </div>
    );
}

export default LokahtorLink;
