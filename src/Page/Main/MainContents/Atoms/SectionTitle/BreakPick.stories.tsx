import React from "react"
import {Story, Meta} from "@storybook/react"
import { BreakPick } from "./BreakPick"

export default {
    title: "Main/MainContents/Atoms/SectionTitle/BreakPick",
    component : BreakPick,
} as Meta;

const Template : Story = args => <BreakPick {...args} />

export const Default = Template.bind({});