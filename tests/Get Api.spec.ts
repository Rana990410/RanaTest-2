import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.restful-api.dev/objects/ff8081819782e69e019b21e0f65a7570';

test('GET API', async ({request}) => {
  
  const startingTime = Date.now();
  const response = await request.get(baseUrl);
  let responseBody = await response.json();
  let responseHeaders = response.headers();
  console.log(responseBody);
 // expect(response.status()).toBe(200);
 // expect(responseBody[1].id).toBe('2');
//  expect(responseHeaders['content-type']).toContain('application/json');

let responsetime = Date.now() - startingTime;
console.log(responsetime);


});


