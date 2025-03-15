# test-backend

Este es un proyecto de backend REST API construido con Node.js, Express y TypeScript. La aplicación proporciona un servicio simple con endpoints para verificar la salud de la API y para manejar un listado de posts.

## Estructura del Proyecto

```
test-backend
├── src
│   ├── app.ts                     # Punto de entrada de la aplicación
│   ├── controllers                # Controladores para manejar la lógica de negocio
│   │   ├── healthCheckController.ts # Controlador para el health check
│   │   ├── postController.ts      # Controlador para manejar posts
│   ├── routes                     # Rutas de la aplicación
│   │   ├── healthCheckRoutes.ts   # Rutas para el health check
│   │   ├── postRoutes.ts          # Rutas para manejar posts
│   └── types                      # Definiciones de tipos e interfaces
│       └── index.ts               # Interfaces para la estructura de datos
├── package.json                   # Configuración de npm y dependencias
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Documentación del proyecto
```

## Endpoints

- **GET /**: Verifica la salud de la API.

  - Respuesta: `{"message":"API Test ver. 1.0.0"}`
  - Estado: 200 OK

- **GET /post**: Retorna un listado de posts generados de muestra.

- **GET /post/:id**: Retorna un post específico por su ID.

## Instalación

1. Clona el repositorio:

   ```
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:

   ```
   cd my-restapi-app
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:

```
npm start
```

La API estará disponible en `http://localhost:3000`.

Compilación de la imagen de docker

docker build -t test-backend .

docker run -p 3000:3000 test-backend
