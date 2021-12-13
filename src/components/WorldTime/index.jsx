import React, {useState, useEffect} from 'react';

const WorldTime = ({zone}) => {
  // const [datetime, setDatetime] = useState('');
  // const [timezone, setTimezone] = useState('Europe/Prague');

  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState(zone);

  useEffect (
    () => {
      fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then(response => response.json())
      .then(data => {
        setDatetime(data.datetime.slice(11, 19))
      })
    },
    [timezone]
  );

  const handleChange = (event) => {
    setTimezone(event.target.value)
  }




  return (
    <div>
      <h2>Current time</h2>
      <select onChange={handleChange} value={timezone}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
        <p>{datetime}</p>
    </div>
  )


}

export default WorldTime;