# Curso de TypeScript - Platzi

[Curso](https://platzi.com/cursos/typescript/)

Prof. Nicolas Molina

### Ventajas de TypeScript

* Analisis de código estático (en compilación) dentro del editor.
* Prevenir errores (-15% bugs).
* En la traducción de ts a js o viceversa, typescript permite trabajar con distitas versiones de JS.
  ~~~
  TypeScript file (*.ts) <Classes, Interface, Modules, Types> => 
        
        TypeScript Compiler (tsc) <Target: ES3, ES5, ES6> => 
                
                JavaScript file (*.js) <Runs everywhere>
  ~~~

### Primeros pasos - configuración

Luego de copiar los archivos **.gitignore**, **.editorconfig** y **package.json** ejecutamos en la terminal, dentro de la carpeta del proyecto, los siguiente comandos iniciales:

~~~
npm install typescript --save-dev

npx tsc --version
~~~

### Analisis estático de código:

Arriba del archivo de código .js que queremos analisar escribimos el siguiente comentario:
~~~
//@ts-check
~~~

Para compilar el código **.ts** y crear el archivo **.js** primero debemo crear el directorio **dist** y luego ejecutar:
~~~
npx tsc src/nombre.ts --target es6 --outDir dist
~~~

Tambien podemos compilar todos los **.ts** usando la expresión regular *:
~~~
npx tsc src/*.ts --target es6 --outDir dist
~~~

Con este comando compilamos los *.ts* en la versión *es6* de JavaScript y guardamos los nuevos archivos *.js* en el directorio *dist*.

Actualmente se está creando un *proyecto/extensión* de VSCode que está en *beta* para compilar automáticamente los archivos *.ts* . El proyecto se llama **Deno**.

Otra forma de ahorrar trabajo es el archivo **TSConfig.json**. Para generarlo debemos ejectucar:
~~~
npx tsc --init
~~~
Luego, aparecen algunas opciones configuradas y otras hay que configurarlas y descomentarlas, como por ejemplo:
~~~
"outDir": "./dist",

"rootDir": "./src",
~~~
Una vez configurado el archivo, de ahora en adelante solo debemos ejecutar:
~~~
npx tsc
~~~
Este proceso se puede realizar constantemente con cada cambio si usamos el comando:
~~~
npx tsc --watch
~~~

## Qué es el tipado en TypeScript

### Tipos de datos en JS

Los tipos de datos para let y const:

~~~
let example = null; // null
example = 'string'; // string
example = 3.14; // number
example = true; // boolean
example = undefined; // undefined
example = []; // array
example = Symbol("abc") // Symbol

example = {  // object
  name: 'Nicolas',
  lastName: 'Molina'
}

example = function (a) { // functions
  return a;
}
~~~

Ahora, en JS también tenemos la posibilidad de trabajar con clases:

~~~
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}

const p = new Rectangulo();
~~~

Tambien contamos de forma natural en JS con estatic:

~~~
class Punto {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia (a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt ( dx. dx + dy * dy );
  }
}
~~~

### Variables en TS

En typescript agregamos el tipo de datos, y si no lo agregamos el compilador lo infiere automáticamente evitando errores.

~~~
let productPrice: number = 12;
~~~

**: number** se conoce como *Type Annotation* o tipado.

Es muy similar a Java ya que evita errores al confundir distintos tipos en funciones o trabajar con variables. Ver ejemplos en clases 03 a 07.

## Tipos exclusivos de TS

### Any

Any es un tipo de dato específico de TS. Que significa Any, cualquier, es decir que cualquier cosa puede ir ahí. Así, se puede decir que desactivamos el sistema de TS y volvemos a JS ya que esta variable puede ser lo que sea. Básicamente es quitarle nuestro sistema de analisis de tipos a una variable en particular. 

Se trata de evitar usar Any. En proyectos avanzados es considerado mala práctica. Pero es muy útil cuando se está migrando de JS a TS hasta que nos acostumbramos a trabajar con TS. 

### Union Types

Permite trabajar con tipos de datos diferentes:

~~~
function greeting(myText: string | number){
        if(typeof myText === 'string'){
            console.log(`string ${myText.toUpperCase()}`);   
        } else { // Como el if es string, el else va a ser number por defecto.
            console.log(`number ${myText.toFixed(2)}`);
            
        }
    }
    greeting('hola');
    greeting(10.12235454);
~~~

Este puede ser muy útil para trabajar con arreglos que contienen distintos tipos de datos como veíamos en clase 07. Un caso práctico específico puede ser para trabajar con distintos id de usuarios.

### Alias y tipos literales

Para crear nuestros propios tipos de datos mediante un **alias** usando la palabra reservada **type**.

~~~
    type UserId = string | number | boolean;
    let userId: UserId; 
    
    function greeting(userId: UserId){
        if(typeof userId === 'string'){
            console.log(`string ${userId.toUpperCase()}`);   
        }
    }    
~~~

Otra forma de crear nuestro propio tipo es con **literal types**:

~~~
let shirtSize: 'S' | 'M' | 'L' | 'XL'; // Definimos valores específicos.
shirtSize = 'S';
shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';
//shirtSize = 'cualquier cosa que sea string'; // Esto no debería ser permitido.
~~~

Literal types permiten definir un tipo de dato que solo puede tener un valor específico.

### Null y undefined

Los null y undefined se deben trabajar de la siguiente manera. 

~~~
    //let myNumber: number = undefined; 
    //let myString: string = null;
    
    let myUndefined = undefined; // El tipo de dato va a ser inferido como any.
    let myNull = null; // El tipo de dato va a ser inferido como any.

    let myNumber: number | null = null;
    myNumber = 10;

    let myString: string | undefined = undefined;
    myString = 'hola';
~~~

Por qué necesitaríamos un null o undefined. Un posible caso de uso puede ser cuandolevantamos una aplicación, se pueden requerir valores null o undenided hasta que se cargan los valores que se van a utilizar, ya se por el usuario o que provengan de alguna otra fuente, DB, API... 

## Funciones

En los ejemplos se pueden ver una función común con todos sus valores y una arrow function (recomendada) con parámetro opcional. En ambos casos hay tipado de datos para crear un objeto JSON.

Tipado de funciones para establecer el tipo de retorno. El tipo de retorno también puede ser void, es decir, no retornar nada. Es una función que se llama para que llame a otra función que sí va a ser la que va a ofrecer la respuesta. Por medio de la primera, debemos enviar parámetros, ejecutar la función con retorno e imprimir la respuesta. 

### Objetos en funciones

Como enviar objetos en funciones. Por qué? Porque cuando tenemos muchos parámetros es mejor capturarlos todos en un objeto. 