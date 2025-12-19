import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.restful-api.dev/objects';

test('Delete API', async ({request}) => {
  const payload = {
     name: 'Apple iPhonenew test 11, 643GB',
   
  }
  const response = await request.delete(baseUrl+'/'+'ff8081819782e69e019b21e0f65a7570')
 // const getResponse = await request.get(
 //   `${baseUrl}/ff8081819782e69e019b21e0f65a7570`
 // );

  
  //expect(response.status()).toBe(206);
})