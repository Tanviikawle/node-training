const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

const timeZones = [
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
  'America/Los_Angeles'
];

app.get('/time', (req, res) => {
  const timeData = timeZones.map(timeZone => {
    return {
      timeZone,
      time: moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss')
    };
  });
  res.json(timeData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});