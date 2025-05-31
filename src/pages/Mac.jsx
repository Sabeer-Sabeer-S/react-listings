import { Button } from '@/components/ui'
import React from 'react'
import { Link } from 'react-router-dom'

const Mac = () => {
  return (
    <div>Mac
        <Link to={'/'}>
        <Button>To App</Button>
        </Link>
    </div>
  )
}

export default Mac