# Valle Restful API

## Resources used in development

- Node
- Express
- Restful concepts
- MongoDB
- Mongoose
- JSON Data
- Visual Studio Code
- Postman

## Routes of the API

### User collection endpoints

ROUTE                     |     HTTP(Verbs)   |      Description      | 
------------------------- | ----------------- | --------------------- | 
/user/                    |       GET         | Select all users      | 
/user/:id                 |       GET         | Select a user by ID   | 
/user/                    |       POST        | Create a user         | 
/user/:id                 |       PUT         | Update a user by Id   |    
/user/:id                 |       DELETE      | Remove a user by Id   |

### Authentication endpoints

ROUTE                     |     HTTP(Verbs)   |      Description      | 
------------------------- | ----------------- | --------------------- | 
/auth/signin              |       POST        | Authenticate the user | 
