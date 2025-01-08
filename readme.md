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
