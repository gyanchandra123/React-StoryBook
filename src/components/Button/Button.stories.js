import React from "react";
import Button from "./Button";
//import Center from "../center/Center";

export default {
  title: "Form/Button",// this is the title of the story that will display in the story browser
  component: Button,// this is the component for which we need to create the story
  args: {
    children:'Button' // maintening the same children value for all the stories for the book component.
  },
  //decorators:[(story) =><Center>{story()}</Center>]
};   

/* export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button> */
                          
const Template =  args => <Button {...args} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant:'primary',
 // children :'primary Args'
}

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
 ...PrimaryA,
 // children :'primary Args'
}