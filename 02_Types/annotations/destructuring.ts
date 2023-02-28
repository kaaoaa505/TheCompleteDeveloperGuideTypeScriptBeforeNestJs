const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = ({forecast}: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  const dateString = date.toISOString().slice(0, 9);
  const timeString = date.toISOString().slice(11, 19);
  console.log('Date is: ', dateString);
  console.log('Time is: ', timeString);
  console.log('Weather is: ', weather);
};

logWeather(todayWeather);
