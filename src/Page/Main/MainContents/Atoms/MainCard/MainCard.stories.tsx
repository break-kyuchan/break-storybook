import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainCard } from "./MainCard"

export default {
    title: "Main/MainContents/Atoms/MainCard",
    component : MainCard,
} as Meta;

const Template : Story = args => <MainCard {...args} />

export const Default = Template.bind({});