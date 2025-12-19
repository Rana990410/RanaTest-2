import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.restful-api.dev/objects';

test('post API', async ({request}) => {
  const payload = {
     name: 'Apple iPhone 11, 64GB',
    data: { price: 389.99, color: 'Grey' }
  }
  const response = await request.post(baseUrl, {
    data:payload
  })
 // expect(response.status()).toBe(206);

 //to get id of product
 let responseBody = await response.json();
 console.log(responseBody);
})
//ff8081819782e69e019b21e0f65a7570