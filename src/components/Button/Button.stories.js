import React from "react";
import Button from "./Button";

export default {
  title: "Button",// this is the title of the story that will display in the story browser
  component: Button,// this is the component for which we need to create the story
};

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
                          
