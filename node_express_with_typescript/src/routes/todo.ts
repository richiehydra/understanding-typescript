import express, { Router } from 'express'
import Data from '../models.ts/model';
import pool from '../pool/poo';
const router=Router();

let counter=3;

router.post('/',async(req,res)=>{
    const data=req.body.name;
     
    try{
        await pool.query(`INSERT INTO customers(id,name) VALUES ($1,$2)`,[counter,data]);
        counter=counter+1;
        res.json({mesage:"data inserted Successfully"})
    }catch(err){
        res.json({message:err})
    }
})


router.get('/',async(req:express.Request,res:express.Response)=>{
    
    try{
        const result=await pool.query(` SELECT * FROM customers`);
        const ans=result.rows;
        res.json({message:ans})
    }catch(err){
        res.json({message:"Error in Fetching Data"})
    }
})






export default router;