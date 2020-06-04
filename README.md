# SoyYo Web
### Estructura de archivos
Al hacer uso del framework Angular en su versión 9, a continuación definimos la estructura estandar que permitira mantener organizado el proyecto y hacerlo escalable para futuros desarrollos:

*Nota*: El [+] indica que la carpeta tiene archivos adicionales.

    |-- app
        |-- auth
            |-- [+] components
            |-- [+] pages
            |-- [+] services
            |-- auth-routing.module.ts
            |-- auth.component.html
            |-- auth.component.ts
            |-- auth.module.ts
        |-- configs
            |-- app-config.ts
            |-- form-fields.ts
            |-- routing-path.spec.ts
            |-- routing-path.ts
        |-- core
            |-- [+] authentication
            |-- [+] guards
            |-- [+] helpers
            |-- [+] http
            |-- [+] interceptors
            |-- [+] models
            |-- [+] routes
        |-- pages
            |-- modules
                |-- home
                    |-- [+] components
                    |-- [+] pages
                    |-- home-routing.module.ts
                    |-- home.component.ts
                    |-- home.module.ts
        |-- services [+]
        |-- shared
            |-- [+] components
            |-- [+] directives
            |-- [+] pipes
            |-- [+] theme
                |-- [+] footer
                |-- [+] header
                |-- [+] not-authorized
                |-- [+] page-not-found
                |-- [+] service-error
        |-- app.routing.module.ts
        |-- app.component.html
        |-- app.component.spect.ts
        |-- app.component.ts
        |-- app.module.ts
    |-- assets
        |-- [+] icons
        |-- [+] images
        |-- [+] scss
        |-- [+] vendors   
    |-- enviroments
        |-- environment.dev.ts 
        |-- environment.prod.ts 
        |-- environment.qa.ts 
        |-- environment.ts 
        |-- environment.uat.ts 


| Carpeta | Descripción |
| ------ | ------ |
| auth | Módulo que contempla el proceso de inicio de sesión y registro en la plataforma. |
| configs | Contiene archivos de parametrización, variables globales, rutas y definiciones de campos de formulario. |
| core | Esta carpeta debe contener características principales y transversales a toda la aplicación. |
| authentication | Maneja el ciclo de autenticación del usuario (desde el inicio de sesión hasta el cierre de sesión). |
| guards | Contiene todos los guards que uso para proteger diferentes rutas en nuestra aplicación. |
| helpers | Clases simi-componentes para la capa de aplicación, ellos contienen la lógica presentacional que es compartida entre vistas, elementos, o layouts. |
| http | En esta carpeta se gestiona todo lo relacionado a token de acceso (JWT) para el consumo de los servicios. |
| interceptors | En esta carpeta encontramos archivos que nos permiten capturar y modificar las solicitudes y respuestas en la comunucación con los servicios del backend. |
| models | En esta carpeta encontramos todos los modelos de datos que que facilitarán la estructura lógica de la aplicación. |
| routes | Aquí ubicamos las estrategias de precarga en las rutas para lazy loading |
| pages | En esta carpeta encontramos todos los módulos de la lógica de negocio de la aplicación, con su correspondiente module.ts, routing.module.ts, carpeta de pages, componentes especificos para el mismo. |
| services | Contiene la lógica de todos los servicios expuestos por el backend. |
| shared | Contiene archivos que serán usados en diferentes partes de nuestra aplicación, componentes como loaders y botones, pipes, directivas, y demás que se pueden importar en cualquier otro módulo cuando esos elementos se reutilicen |
| assests | Esta carpeta contiene iconos, imagenes, scss, y vendors, elementos que se utilizan en toda la aplicación.  |
| enviroments | Contiene información precisa de los diferentes ambientes en lo que se moverá la aplicación. |