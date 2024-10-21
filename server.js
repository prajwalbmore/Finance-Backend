const express = require('express');
const bodyParser = require('body-parser');
const {connectdb} = require('./config/db');
const authRoute = require('./routes/userRoutes');
const memberRoute = require('./routes/memberRoutes')
const FDRoutes = require('./routes/FDRoutes')
const loanRoutes = require('./routes/loanRoutes')

const cors = require('cors');
const app = express();
const PORT = 7000;

app.use(express.json());
app.use(bodyParser.json());

connectdb();

app.use(cors());
 
app.use('/api/auth',authRoute);

app.use('/api/member',memberRoute)

app.use('/api/FD',FDRoutes)

app.use('/api/loan',loanRoutes)

app.listen(PORT,()=>{
    console.log('Server Started at ',PORT);
})

