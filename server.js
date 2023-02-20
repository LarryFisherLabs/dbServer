import express from "express";
import { router } from "./routes/routes.js";

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/', router);

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App is listening on port ' + listener.address().port || 3001)
})