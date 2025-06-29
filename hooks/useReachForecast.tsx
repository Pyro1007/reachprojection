import { useState } from 'react'

type ForecastData = {
  currentReach: number
  oneMonthForecast: number
  threeMonthForecast: number
  sixMonthForecast: number
}

export function useReachForecast() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null)

  const calculateForecast = (followers: number, avgLikes: number, avgComments: number) => {
    // This is a very simplified forecast calculation
    // In a real-world scenario, you'd use more complex algorithms
    const currentReach = followers * 0.3 + avgLikes * 1.5 + avgComments * 3
    const growthRate = 1.05 // Assuming 5% monthly growth

    setForecastData({
      currentReach: Math.round(currentReach),
      oneMonthForecast: Math.round(currentReach * Math.pow(growthRate, 1)),
      threeMonthForecast: Math.round(currentReach * Math.pow(growthRate, 3)),
      sixMonthForecast: Math.round(currentReach * Math.pow(growthRate, 6))
    })
  }

  return { forecastData, calculateForecast }
}

