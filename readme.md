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

