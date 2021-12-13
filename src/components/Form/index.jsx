import React, {useState, useEffect} from 'react';

const Form = () => {

  //two-way data binding

  const [name, setName] = useState('You');
  const [city, setCity] = useState('Reykjavik');
  const [nameday, setNameday] = useState('');
  const [namedate, setNamedate] = useState('');

  const handleInput = (event) => {
    setName(event.target.value);
  }

  const handleSelect = (event) => {
    setCity(event.target.value);
  }

/*If we console log it, it will overwrite with every change we kame on the page just with the function parameter. There is some use state and the component generates some code where tha state is used. So when the state is changed, React nows the components needs to be ovewriten with the new value.*/
 /* useEffect(
    () => {
      console.log('with every change it will overwrite the component without the second parametr')
    }
  )
  */

/* the function is going to happen only with the first creation of the component component. Now when I change something in the we, it does not overwrite it again. */
/*
  useEffect(
    () => {
      console.log('the component is created ')
    },
    []
  )
  */

//API
  useEffect(
    () => {
      fetch('https://svatky.adresa.info/json')
      /*fetch return promise, and if that is fullfiled, so the answer from the server will happen with the function inside it. So what the server return as an answer will be given to the response function inside. And from the answer from the server we want to decode the json formate.*/ 
      .then(response => response.json())
      /* If this promise is fullfiled, then we want to do something with the json. */
      .then(json => {
        //for now we do not care there could be more names
        setNameday(json[0].name)
      })
      //take care of the errors, just very simple for now, not the best
      .catch(console.log('some mistake appeared'))
    },
    []
  )

/*Function is called only when the second parameter is changed on the web in our case the function displaying the nameday date with its corresponding name.*/
  useEffect(
    () => {
      fetch(`https://svatky.adresa.info/json?name=${name}`)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          setNamedate(json[0].date)
        } else {
          setNamedate(null)
        }
      })
    },
    [name]
  )



  return (
    <>
      <h2>Today is a nameday of {nameday}</h2>


      <hr />
      <input type="text" onChange={handleInput} value={name}/>
      <h2>{namedate ? `${name} has nameday on ${namedate}` : `${name} is without a nameday :(`}</h2>

      <hr />
      <select onChange={handleSelect} value={city}>
        <option value="Reykjavik">Reykjavik</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
      </select>

      <h2>{city}</h2>
    </>
  )
}

export default Form;