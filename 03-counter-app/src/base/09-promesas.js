import { getheroeById } from "./08-imp-ex"

 export const getHeroeByIdAsync = (id)=>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const p1 = getheroeById(id);
            if(p1)
                resolve(p1);
            else
                reject('No se pudo encontrar el Héroe');
         },1500)
     })
 }