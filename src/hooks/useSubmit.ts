// useSubmit.ts
import { useState } from 'react';
import axios from 'axios';

export function useSubmit() {
  const [response, setResponse] = useState();
  
  async function handleSubmit(name: string, favoriteColor: string) {
    // const localUrl = '/.netlify/functions/submit';
    const deployUrl = 'https://typescrpt-srvless.netlify.app/.netlify/functions/submit'
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    try {
      const res = await axios.post(deployUrl, {
        name,
        favoriteColor,
      }, {
        headers: headers
      });
      
      setResponse(res.data);
      return res.data; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }

  return { handleSubmit, response };
}
