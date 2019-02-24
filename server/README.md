# Apollo Server Minimal Vanilla

Minimal example of Apollo Server with vanilla JavaScript.

## Stacks

* Apollo 2
* Sequelize (Node.js ORM)
* SQLite3 (Database)


## Bootstrap

```
npm install
npm run db:initialize
npm run start
```

Access GraphiQL.

```
access http://localhost:4000
```

### Query

```
{
  users {
    id
    name
  } 
}
```

### Mutation

```
mutation createUserTest {
  User: createUser(name: "hello") {
    id
  }
}
```
