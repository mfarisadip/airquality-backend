import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { UserController } from "./controllers/UserController";
import { AuthController } from "./controllers/AuthController";
import { isAuthenticated } from "./utils/isAuthenticated";
import { AirQualityController } from "./controllers/airQualityController";
const app = new Elysia();

app.get("/", () => "Hello Elysia");
app.use(swagger())
app.use(AuthController);
app.group("/user", (route) => route.use(isAuthenticated).use(UserController));
app.group("/air-quality", (route) => route.use(isAuthenticated).use(AirQualityController));

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
