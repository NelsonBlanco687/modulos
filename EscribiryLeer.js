//constantes para agregar
const  fs= require('fs')
const archivo ='nota.txt'
//Escribir el contenido para el archivo
const contenido= 'Escribir el contenido para agregar a la nota';

//Adjuntar el texto
const textoadicional='\nAgregar otra linea de codigo';

fs.appendFile(archivo,textoadicional,(err)=>{
    if(err) throw("no se pudo adjuntar mas texto");

    console.log('Se ha adjuntado mas informacion...');
});

//leer el archivo 
fs.readdir('./', (error,files) => {

    if(error){
    throw error;
    }
console.log(files);

fs.readFile('./nota.txt','utf-8',(error,archivo)=> {
    if(error){
        throw error;
    }
    console.log(archivo);
  });
    console.log('Contenido del archivo...');
  });
