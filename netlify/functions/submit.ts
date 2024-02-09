import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { name, favoriteColor } = JSON.parse(event.body || '{}');
  console.log(`Hello ${name}, your favorite color is ${favoriteColor}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      name,
      favoriteColor,
      message: `Hello ${name}, your favorite color is ${favoriteColor}`
     }),
  };
};  
