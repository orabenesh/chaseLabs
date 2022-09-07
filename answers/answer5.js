const express = require('express');
const { createHash } = require('crypto');

const app = express();

async function hash(string) {
    return await createHash('sha256').update(string).digest('hex');
}
const hashMiddleware = async (req, res, next) => {
    debugger
    try {
        const{message}=req.query;
        const hash256 = await hash(message)
        res.status(200).send(JSON.parse(`{"SHA256 hash":"${hash256}"}`));
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    return next();
}
app.use('', hashMiddleware);

const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log(`app listen on port ${port}`)});