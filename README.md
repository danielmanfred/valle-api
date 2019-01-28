# Valle Test Restful API

## How to run this API

1. go to your terminal and paste: git clone https://github.com/danielmanfred/valle-api.git
2. enter app: cd valle-api
3. install the dependencies: npm i
4. run the API: npm start
5. in case you use nodemon: npm run local

## Resources used in development

- Node
- Express
- Restful concepts
- MongoDB
- Mongoose
- JWT
- Mlab
- Babel

## Routes of the API

### User collection endpoints

URL                  |     HTTP(Method)  |      Description      |           Data params              |
---------------------| ----------------- | --------------------- | ---------------------------------- |
/user/               |       GET         | Select all users      |                                    |
/user/:id            |       GET         | Select a user by ID   |                                    |
/user/               |       POST        | Create a user         | username: String, password: String |
/user/:id            |       PUT         | Update a user by Id   | username: String, email: String    |
/user/:id            |       DELETE      | Remove a user by Id   |                                    |

### Authentication endpoints

URL                   |     HTTP(Method)  |      Description      |    Data params                     |
----------------------| ----------------- | --------------------- | ---------------------------------- | 
/auth/decodeToken     |       GET         | Decode user token     |                                    |
/auth/signin          |       POST        | Authenticate the user | username: String, password: String |
