import {Router} from 'express';
var mssql =require('mssql');

var config = {  
    server: 'localhost',  //update me
    //database: 'PELICULAS',
    host: 'localhost',
    user: 'test',
    password: '1234',
    port: 1433
};  

class peliculasRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', (req,res)=> res.send('hola desde pelicula'));
//********************************get peliculas*****************************************************
        this.router.get('/peliculas', async function(req,res){
            try{
                var cadena="select * from pelicula";
                var con = new mssql.ConnectionPool(config);
        
                con.connect(function(err:any){
                var req= new mssql.Request(con);
                    if(err){
                        console.log(err);
                        return;
                    }
                req.query(cadena,function(err:any,recordset:any){
                        if(err){
                            console.log(err);
                        }else{
                            res.send(JSON.stringify(recordset.recordsets[0]));
                        }
                        con.close();
                    });
                });
            }catch(Exception){
                console.log(Exception);
            }
        });
        this.router.post('/nueva', async function(req,res){
            try{
                let resp=req.body;
                console.log(resp.titulo);
                var cadena="insert into pelicula values('"+resp.titulo+"','"+resp.descripcion+"','"+resp.imagen+"');";
                var con = new mssql.ConnectionPool(config);
        
                con.connect(function(err:any){
                var req= new mssql.Request(con);
                    if(err){
                        console.log(err);
                        return;
                    }
                req.query(cadena,function(err:any,recordset:any){
                        if(err){
                            console.log(err);
                        }else{
                            res.send(JSON.stringify(recordset));
                        }
                        con.close();
                    });
                });
            }catch(Exception){
                console.log(Exception);
            }
        }); 
        this.router.post('/quitar', async function(req,res){
            try{
                let resp=req.body;
                console.log(resp.titulo);
                var cadena="delete from pelicula where id="+resp.id+";";
                var con = new mssql.ConnectionPool(config);
        
                con.connect(function(err:any){
                var req= new mssql.Request(con);
                    if(err){
                        console.log(err);
                        return;
                    }
                req.query(cadena,function(err:any,recordset:any){
                        if(err){
                            console.log(err);
                        }else{
                            res.send(JSON.stringify(recordset));
                        }
                        con.close();
                    });
                });
            }catch(Exception){
                console.log(Exception);
            }
        });
    }
}

const peliculasroutes=new peliculasRoutes();
export default peliculasroutes.router;