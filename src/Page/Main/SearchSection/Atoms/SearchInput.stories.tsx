import React from "react"
import {Story, Meta} from "@storybook/react"
import { SearchInput } from "./SearchInput"

export default {
    title: "Main/SeachSection/Atoms/SearchInput",
    component : SearchInput,
} as Meta;

const Template : Story = args => <SearchInput {...args} />

export const Default = Template.bind({});