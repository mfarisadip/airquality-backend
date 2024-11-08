# Elysia Js with Bun runtime

### CRUD and AUTH with Elysia Js Bun API

#### Install Bun
- https://bun.sh/docs/installation

#### Install dependency
```bash
bun i  
```
#### Init prisma
```bash
npx prisma migrate dev --name init  
```

#### Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

#### Http request list
- Register user* post: http://localhost:3000/register (body: name email, password)
- Login user* post: http://localhost:3000/login (body: email, password) (access_token will set in cookie named "access_token_cookie")
- Logout user* post: http://localhost:3000/logout
  
- List user* get: http://localhost:3000/user
- By ID user* get: http://localhost:3000/user/1 (params: id)
- Update user* put: http://localhost:3000/user/1 (params: id) (body: name, email, password)
- Delete user* delete: http://localhost:3000/user/1 (params: id)

#### Swagger
`http://localhost:3000/swagger`