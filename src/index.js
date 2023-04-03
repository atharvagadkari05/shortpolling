const express = require('express')

const app = express()
const jobs = {}

app.listen(4000,()=>{
    console.log("listening at 4000");
    
})

app.post('/submit' , (req,res)=>{
const jobId =  `ID:${Date.now()}`
updateNow(jobId,0);
res.send(jobId);
})

app.get('/checkstatus', (req,res)=>{
    res.end(jobs[req.query.jobId]);
})

function updateNow(jobId,prg){
    jobs[jobId] = prg
    console.log(`${prg}% task completed`);
    if(prg==100)return
    this.setTimeout(() => {
        updateNow(jobId,prg+10)
    }, 3000);
}