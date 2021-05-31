import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainBreakPick } from "./MainBreakPick"

export default {
    title: "Main/MainContents/Organisms/MainBreakPick",
    component : MainBreakPick,
} as Meta;

const Template : Story = args => <MainBreakPick {...args} />

export const Default = Template.bind({});