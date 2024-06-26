// const testService = require('../services/testService');

async function pingRequest(req,res) {
    console.log(this.testService);
    const response= await this.testService.pingCheck();
    return res.send({data:response});
}
//can access service directly in controllers like we have done using this keyword 
//this- is a fastify instance which can access through routes since we have decorated  api the function in serviceplugin.js
/*
the decorate API, which allows you to attach properties or functions to the Fastify instance
*/
module.exports=pingRequest;
/*
### Explanation:
- **Default Export:** Only one default export is allowed per module. When you use `module.exports = pingCheck;`, 
you are setting `pingCheck` as the default export. The import should then be `const pingCheck = require('../services/testService');`.

- **Named Export:** You can have multiple named exports per module. By exporting `pingCheck` as an object property
 (`module.exports = { pingCheck };`), you can then import it with destructuring `const testService = require('../services/testService');`.

Choose one of these approaches to resolve the issue and ensure that your import/export statements are consistent.

*/ 