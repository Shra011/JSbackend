// import express from "express";
        //or
require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("shravan_eleven");
});

app.get("/login",(req,res)=>{
    res.send("<h1>login at chai aur code</h1>");
});

app.get("/youtube",(req,res)=>{
    res.send("<h2>chai aur code</h2>");
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});