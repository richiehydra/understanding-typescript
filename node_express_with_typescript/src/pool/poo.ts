import { Pool } from "pg";

const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'users',
    password:'Keshav@2003',
    port:5432,
  });

  pool.on('connect',()=>{
    console.log('Connected to database')
  })

  pool.emit('connect')

  export default pool;