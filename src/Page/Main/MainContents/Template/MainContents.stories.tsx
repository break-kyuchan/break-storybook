import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainContents } from "./MainContents"

export default {
    title: "Main/MainContents/Templates/MainContents",
    component : MainContents,
} as Meta;

const Template : Story = args => <MainContents {...args} />

export const Default = Template.bind({});