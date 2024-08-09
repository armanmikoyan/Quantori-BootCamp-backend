import assert from 'assert';

async function request(headers: any) {
   const fetch =  (await import('node-fetch')).default;
   try {
      const resp = await fetch(`http://localhost:${process.env.PORT}/profile`, {
         headers,
      });
      return resp.json();
   } catch (error: any) {
      throw error;
   }
};

async function test6() {
   const wrongHeaders = {}
   const res: any = await request(wrongHeaders); 
   try {
      assert.strictEqual("error" in res, true,  'expected error');
      console.log('\x1b[32m%s\x1b[0m', `${test6.name} is passed`);
   } catch (error: any) {
      console.error(`${test6.name} is failed. Expected: ${error.message}`);
   }
};

async function test7() {
   const wrongHeaders = {
      Authorization: "wrongToken"
   }
   const res: any = await request(wrongHeaders); 
   try {
      assert.strictEqual("error" in res, true,  'expected error');
      console.log('\x1b[32m%s\x1b[0m', `${test7.name} is passed`);
   } catch (error: any) {
      console.error(`${test7.name} is failed. Expected: ${error.message}`);
   }
};

async function test8() {
   const wrongHeaders = {
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybWFuLm1pa295YW4xQGdtYWlsLmNvbSIsImlhdCI6MTcyMzIwNjUxN30.CQTWK4mwsIRy5tR7xAfIEkgaSYGSoqJLvNJ96hpsZcE"
   }
   const res: any = await request(wrongHeaders); 
   try {
      assert.strictEqual("error" in res, true,  'expected error');
      console.log('\x1b[32m%s\x1b[0m', `${test8.name} is passed`);
   } catch (error: any) {
      console.error(`${test8.name} is failed. Expected: ${error.message}`);
   }
};

async function test9() {
   const correctHeaders = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybWFuLm1pa295YW4xQGdtYWlsLmNvbSIsImlhdCI6MTcyMzIwNjUxN30.CQTWK4mwsIRy5tR7xAfIEkgaSYGSoqJLvNJ96hpsZcE"
   }
   const res: any = await request(correctHeaders); 
   try {
      assert.strictEqual("email" in res && "username" in res, true, 'expected user object');
      console.log('\x1b[32m%s\x1b[0m', `${test9.name} is passed`);
   } catch (error: any) {
      console.error(`${test9.name} is failed. Expected: ${error.message}`);
   }
};

export default async function execAllProfileTests() {
   await test6();
   await test7();
   await test8();
   await test9();
};



