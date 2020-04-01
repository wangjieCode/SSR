import ReactDom from 'react-dom/server'
import React from 'react'
import  Index  from './pages'
const experss = require('express')

const app = experss()

app.get("*", (req,res) => {
    const re = ReactDom.renderToString(<Index />)
    res.send(re)
})

app.listen(80, _ => {
    console.log("启动成功")
})
