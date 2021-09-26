import React from 'react'
import { Primary } from '../Button/Button.stories'
import { Large } from '../input/Input.stories'

export default {
  title: 'Form/Subscription',
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)