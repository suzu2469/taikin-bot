import * as dotenv from 'dotenv'
import axios from 'axios'
import * as queryString from 'querystring'


dotenv.config()

console.log('Notify service started.')

setInterval(() => {
  const apiKey = process.env.LINE_NOTIFY_APIKEY
  if (!apiKey) return console.error('Error: ApiKey not found')

  const targetTime = process.env.NOTIFY_TIME
  if (!targetTime) return console.error('Error: NOTIFY_TIME not found.')

  const timeMatch = targetTime.match(/^(\d+):(\d+)$/)
  const targetHour = timeMatch[1]
  const targetMinute = timeMatch[2]
  if (!targetHour || !targetMinute) return console.error('Error:  NOTIFY_TIME is invalid format.')
  
  const date = new Date()
  const currentHour = date.getHours()
  const currentMinute = date.getMinutes()
  
  if (currentHour.toString() === targetHour && currentMinute.toString() === targetMinute) {
    axios({
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: queryString.stringify({ message: 'Do taikin. Just do taikin.' })
    })
  } else {
    console.log(`It isn't time now. ${currentHour}:${currentMinute}`)
  }
}, 60000)