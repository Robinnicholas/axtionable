import React from 'react'
import { Applied, FullTime, Remote } from '../../components/Badge'
import Button from '../../components/Button'

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
      <Button size="small">Get Curated Jobs</Button>
      <Button size="medium">Get Curated Jobs</Button>
      <Button size="large">Get Curated Jobs</Button>
    </div>
    </>
  )
}

export default page