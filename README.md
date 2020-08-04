# Express API Starter

[https://github.com/w3cj/express-api-starter](https://github.com/w3cj/express-api-starter)

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

## Azure AD -  Open ID Connect  JWT validation middleware for Node.

```
npm install passport-azure-ad
```

[passport-azure-ad](http://www.passportjs.org/packages/passport-azure-ad/)


[Repo](https://github.com/AzureAD/passport-azure-ad)

* [Sample - Restify, Mongo](https://github.com/AzureADQuickStarts/AppModelv2-WebAPI-nodejs/blob/master/node-server/app.js)
* [Sample - Restify, Mongo](https://github.com/Azure-Samples/active-directory-node-webapi-basic/blob/master/app.js)


## Google, Facebook, Twitter 

[Passportjs.org](http://www.passportjs.org/docs/)

## Deploy Multi-Containers Group

(Resource Manager Template - ARM)(https://docs.microsoft.com/en-us/azure/container-instances/container-instances-multi-container-group)

```
az deployment group create -g myRG -f acig-web-mongo-arm.json
```

### ARM Template:  acig-web-mongo-arm.json
* 3 containers (2 web, 1 mongo):
  * 1 public web port, 1 private web port, 1 private mongodb port
  
### ARM Template:  acig-mongo-arm.json
* 1 container mongo
  * 1 public mongo port - require authentication


## MongoDB

### Create User / Role

#### Admin [root](https://docs.mongodb.com/manual/reference/built-in-roles/#root)
``` 
use admin
db.createUser({ user: "username", pwd: "password", roles: ["root"] })
```

#### DB [dbOwner](https://docs.mongodb.com/manual/reference/built-in-roles/#dbOwner)
```
use mydb
db.createUser({ user: "username", pwd: "password", roles: ["dbOwner"] })
```

### Authentication

#### Allow anonymous:
* Mongo start arm:  ``` "command": [ "mongod", "--dbpath=/aci/data", "--bind_ip_all" ]  ```
* connectionString: ``` mongodb://myaci.eastus.azurecontainer.io/?retryWrites=true ```

#### Authenticated users only (--auth):
* Mongo start arm: ``` "command": [ "mongod", "--dbpath=/aci/data", "--bind_ip_all", "--auth" ] ```
* connectionString: ``` mongodb://username:password@myaci.eastus.azurecontainer.io/?authSource=mydb&retryWrites=true ```



## References

* [How to create a REST API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api)
* [MongoDB CRUD](https://docs.mongodb.com/drivers/node/fundamentals/crud)
* [Resource Template Environment Variable - SecretValue](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values)
* [MongoDB Container](https://jussiroine.com/2019/02/an-adventure-in-containers-and-command-line-tools-running-mongodb-in-azure/)
* [MongoDB Docker](https://hub.docker.com/_/mongo)
* [MongoDB Docker](https://www.tutorialspoint.com/docker/docker_setting_mongodb.htm)
* [MongoDB Docker Video](https://youtu.be/D5Q5WhGT0w8)
* [MongoDB Docker-compose Video](https://youtu.be/0w0lJn4O6YQ)
  * [source](https://www.dlighthouse.co/2017/09/docker-node-express-mongo.html)
* [MongoDB Docker-compose Video](https://youtu.be/hP77Rua1E0c)