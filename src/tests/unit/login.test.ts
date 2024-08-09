import assert from 'assert';

async function request(reqBody: any) {
   const fetch =  (await import('node-fetch')).default;
   try {
      const resp = await fetch(`http://localhost:${process.env.PORT}/login`, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json' 
         },
         body: JSON.stringify(reqBody),
      });
      return resp.json();
   } catch (error: any) {
      throw error;
   }
}


async function test1() {
   const correctReqBody = {
      email: "arman.mikoyan1@gmail.com",
      password: "Arman111",
   };
   const res: any = await request(correctReqBody); 
   try {
      assert.strictEqual("accessToken" in res, true,  'expected access token');
      console.log('\x1b[32m%s\x1b[0m', `${test1.name} is passed`);
   } catch (error: any) {
      console.error(`${test1.name} is failed. Expected: ${error.message}`);
   }
};


async function test2() {
   const wrongReqBody = {
      email: "arman.1@gmail.com",
      password: "Arman111",
   };
   const res: any = await request(wrongReqBody); 
   try {
      assert.strictEqual("message" in res, true, 'error message is expected');
      console.log('\x1b[32m%s\x1b[0m', `${test2.name} is passed`);
   } catch (error: any) {
      console.error(`${test2.name} is failed. Expected: ${error.message}`);
   }
};

async function test3() {
   const wrongReqBody = {
      email: "arman.mikoyan1@gmail.com",
      password: "wrongEmail",
   };
   const res: any = await request(wrongReqBody); 
   try {
      assert.strictEqual("message" in res, true, 'error message is expected');
      console.log('\x1b[32m%s\x1b[0m', `${test3.name} is passed`);
   } catch (error: any) {
      console.error(`${test3.name} is failed. Expected: ${error.message}`);
   }
}

async function test4() {
   const wrongReqBody = {
      email: "",
      password: "wrongEmail",
   };
   const res: any = await request(wrongReqBody); 
   try {
      assert.strictEqual("errors" in res, true, 'error message is expected');
      console.log('\x1b[32m%s\x1b[0m', `${test4.name} is passed`);
   } catch (error: any) {
      console.error(`${test4.name} is failed. Expected: ${error.message}`);
   }
};

async function test5() {
   const wrongReqBody = {};
   const res: any = await request(wrongReqBody); 
   try {
      assert.strictEqual("errors" in res, true, 'error message is expected');
      console.log('\x1b[32m%s\x1b[0m', `${test5.name} is passed`);
   } catch (error: any) {
      console.error(`${test5.name} is failed. Expected: ${error.message}`);
   }
}

export default async function execAllLoginTests() {
   await test1();
   await test2();
   await test3();
   await test4();
   await test5();
};




