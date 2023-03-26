import express from "express";
import { isOnWhiteList } from "./helpers/helpers.js";
import { router } from "./routes/routes.js";

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use((req, res, next) => {
    const origin = req.get('origin')
    if (isOnWhiteList(origin)) res.header('Access-Control-Allow-Origin', origin)
    next()
})
app.use('/', router);

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App is listening on port ' + listener.address().port || 3001)
})