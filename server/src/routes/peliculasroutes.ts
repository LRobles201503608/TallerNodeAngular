import {Router} from 'express';

class peliculasRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', (req,res)=> res.send('hola desde pelicula'));
        this.router.get('/peliculas', (req,res)=> res.send('pelicula 1'));
    }
}

const peliculasroutes=new peliculasRoutes();
export default peliculasroutes.router;