import React from "react"
import {Story, Meta} from "@storybook/react"
import { MainSearchSection } from "./MainSearchSection"

export default {
    title: "Main/SeachSection/Templates/MainSearchSection",
    component : MainSearchSection,
} as Meta;

const Template : Story = args => <MainSearchSection {...args} />

export const Default = Template.bind({});