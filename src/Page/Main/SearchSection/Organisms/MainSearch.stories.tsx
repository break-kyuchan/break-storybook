import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainSearch } from "./MainSearch"

export default {
    title: "Main/SeachSection/Organisms/MainSearch",
    component : MainSearch,
} as Meta;

const Template : Story = args => <MainSearch {...args} />

export const Default = Template.bind({});