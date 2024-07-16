import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const WeatherBoard = () => {
  return (
    <div className="   ">
<Card className="rounded-lg border bg-card text-card-foreground shadow-sm ">
  <CardHeader className="flex flex-col">
    <CardTitle className="flex flex-row items-center justify-between">
      <div className="text-xl">
        Sunday
      </div>
      <div className="text-xl">
        0:00:00 PM
      </div>

    </CardTitle>
    <div>
      kolkata
    </div>
  </CardHeader>
  <CardContent className="flex items-center justify-center text-9xl font-bold">

    24 °
  </CardContent>
  <CardTitle className="flex  flex-row items-center justify-between ">
    <div className="flex flex-row p-6 pt-0 gap-2">
      <div className="items-center flex ">Sunny</div>
      <div>
        <div className="text-xl font-semi-bold">Clear</div>
        <CardDescription className="text-md">clear sky</CardDescription>
      </div>
    
    </div>
<CardDescription className="p-6 text-md">
H:25°  L: 20°
</CardDescription>
  </CardTitle>
</Card>

</div>
  )
}

export default WeatherBoard