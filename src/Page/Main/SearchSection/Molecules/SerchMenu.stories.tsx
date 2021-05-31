import React from "react"
import {Story, Meta} from "@storybook/react"
import { SearchMenu } from "./SearchMenu"

export default {
    title: "Main/SeachSection/Molecules/SearchMenu",
    component : SearchMenu,
} as Meta;

const Template : Story = args => <SearchMenu {...args} />

export const Default = Template.bind({});