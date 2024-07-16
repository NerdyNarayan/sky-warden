import FeatureList from "@/components/feature-list"
import Forecast from "@/components/forecast"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import WeatherBoard from "@/components/weather-board"
export default function HomePage() {

  return (
    <div className="container max-w-6xl  mx-auto">
<Navbar/>
   <WeatherBoard/>
<FeatureList/>
<Forecast/>
    </div>
  )
}
