
let addNumbers3 = function(x?:number, y?:number, z?:number):number{
    if(x&&y&&z)return x+y+z
    if(x&&y)return x+y
    if(x&&z)return x+z
    if(y&&z)return y+z
    if(x) return x     
    if(y) return y
    if(z) return z
 
    throw new Error('El dato ingresado no es válido')
}



