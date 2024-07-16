import React from 'react'
import FeatureCard from './ui/feature-card'

const FeatureList = () => {
  return (
    <div className='flex flex-row gap-4 mt-4'>
      <FeatureCard />  
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>


  )
}

export default FeatureList