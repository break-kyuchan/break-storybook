import React from "react"
import {Story, Meta} from "@storybook/react"
import { SectionTitle } from "../SectionTitle/SectionTitle"

export default {
    title: "Main/MainContents/Atoms/SectionTitle",
    component : SectionTitle,
} as Meta;

const Template : Story = args => <SectionTitle {...args} />

export const Default = Template.bind({});