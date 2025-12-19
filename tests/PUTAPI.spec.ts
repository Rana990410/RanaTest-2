import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.restful-api.dev/objects';

test('Put API', async ({request}) => {
  const payload = {
     name: 'Apple iPhone 11, 643GB',
    data: { price: 389.99, color: 'olive' }
  }
  const response = await request.put(baseUrl+'/'+'ff8081819782e69e019b21e0f65a7570', {
    data:payload
  })
 // const getResponse = await request.get(
 //   `${baseUrl}/ff8081819782e69e019b21e0f65a7570`
 // );

  
  //expect(response.status()).toBe(206);
})