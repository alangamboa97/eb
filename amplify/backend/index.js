const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express')
const bodyparser = require('body-parser')
const express = require('express')

const app = express();
app.use(bodyparser.json())
app.use(awsServerlessExpressMiddleware.eventContext())