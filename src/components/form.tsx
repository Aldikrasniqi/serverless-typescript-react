import React,{ useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
export function Form() {
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [response, setResponse] = useState();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    
    try { 
      axios.post('/.netlify/functions/submit', {
        name,
        favoriteColor,
      }).then((res) => {
        setResponse(res.data.message);
        setName('');
        setFavoriteColor('');
      }).catch((error) => {
        console.error(error);
      })

      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          name="name"
          type="text"
          id="name"
          value={name}
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="favoriteColor" className={styles.label}>Favorite Color:</label>
        <input
          name="favoriteColor"
          type="text"
          id="favoriteColor"
          value={favoriteColor}
          className={styles.input}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className={styles.submibutton}>Submit</button>
      </form>
    </>
  );
}
