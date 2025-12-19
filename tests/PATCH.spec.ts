import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.restful-api.dev/objects';

test('patch API', async ({request}) => {
  const payload = {
     name: 'Apple iPhonenew test 11, 643GB',
   
  }
  const response = await request.patch(baseUrl+'/'+'ff8081819782e69e019b21e0f65a7570', {
    data:payload
  })
 // const getResponse = await request.get(
 //   `${baseUrl}/ff8081819782e69e019b21e0f65a7570`
 // );

  
  //expect(response.status()).toBe(206);
})