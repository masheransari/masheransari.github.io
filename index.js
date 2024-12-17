require('dotenv').config()
const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const callbackRouter = require('./routes/callback');

// Get route that display a message "hello world"
app.use('/', (req, res,next) => {
  console.log('middleware 1');
  // do something extra to the request 
  // add a header, check credentials, check permissions, etc
  next();
})

app.use('/user',userRouter);

app.use('/callback',callbackRouter);

// Endpoint "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
  }
);

// Fallback route
app.use('/',(req,res)=>{
  res.status(501)
  res.json({
      message:'This url was not implemented in this API'
  })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})