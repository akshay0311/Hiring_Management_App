const express = require('express');

const swaggerUi = require('swagger-ui-express');

const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/api/v1",require("./routes/jobs"));


app.listen(3000, () => {
    console.log(`App is running !!`);
})

