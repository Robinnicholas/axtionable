import React from 'react'
import { Applied, FullTime, Remote } from '../../components/Badge'
import Button from '../../components/Button'
import Input from '@/src/components/Input'

const page = () => {
  return (
    <>
    <div className="flex gap-2 mx-40 my-20">
      <h2>Badges</h2>
      <FullTime />
      <Remote />
      <Applied />
    </div>
    <div className="flex gap-2 mx-40 my-20">
      <h2>Buttons</h2>
      <Button type='button' size="small">Get Curated Jobs</Button>
      <Button type='button' size="medium">Get Curated Jobs</Button>
      <Button type='button' size="large">Get Curated Jobs</Button>
    </div>
    <div className="flex gap-2 mx-40 my-20">
      <h2>Input</h2>
      <Input type='text' label='Name' errorMessage='*This field can’t be empty'/>
    </div>
    </>
  )
}

export default page