import React from 'react'
import { Card, CardContent, CardTitle } from './card'

const FeatureCard = () => {
  return (
    <Card className=" ">
  <CardTitle className="p-6 justify-center flex">Feature</CardTitle>
  <CardContent className="p-6 pt-4 justify-center flex text-4xl font-bold">xx</CardContent>
  <CardContent className="p-6 pt-4"> excepturi doloremque, sunt cum dolor </CardContent>
</Card>
  )
}

export default FeatureCard