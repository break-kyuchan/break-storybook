import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainCards } from "./MainCards"

export default {
    title: "Main/MainContents/Molecules/MainCards",
    component : MainCards,
} as Meta;

const Template : Story = args => <MainCards {...args} />

export const Default = Template.bind({});