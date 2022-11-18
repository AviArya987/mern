const mongoose=require('mongoose');
const DB=process.env.DATABASE;
// console.log(DB);
mongoose.connect(DB,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true
  // useFindAndModify:true
}).then(()=>{
  console.log('connection successfull');
}).catch((err)=>{
  console.log('no connection');
})