import React,{ useState } from 'react';
import styles from './form.module.css';
import { useSubmit } from '../hooks/useSubmit';
export function Form() {
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const { handleSubmit, response } = useSubmit();

  
  async function handleFormSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    
    handleSubmit(name, favoriteColor)
      .then(() => {
        setName('');
        setFavoriteColor('');
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  }
  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form className={styles.form} onSubmit={handleFormSubmit}>
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
