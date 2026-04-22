# Beauty Book - API RESTful (Backend)

Este repositorio contiene el backend del sistema de gestión de citas **Beauty Book**. Desarrollado bajo una arquitectura orientada a servicios (SOA), esta API REST expone los endpoints necesarios para la administración de salones de belleza, especialistas y reservas.

## Arquitectura y Tecnologías
- **Framework:** NestJS
- **ORM:** Prisma
- **Base de Datos:** PostgreSQL
- **Lenguaje:** TypeScript

Este proyecto está completamente desacoplado del frontend. Al operar de forma independiente, garantiza escalabilidad y un mantenimiento más limpio.

## Lógica de Negocio Destacada
El sistema va más allá de operaciones CRUD básicas e implementa lógica de negocio real:
- **Gestión Inteligente de Citas:** El sistema calcula y bloquea automáticamente los espacios de tiempo basándose en la duración específica de cada servicio. Esto previene de forma estricta los conflictos de agenda (overlapping) entre distintas reservas.
- **Validación de Datos:** Todas las peticiones entrantes pasan por validaciones rigurosas utilizando DTOs y `class-validator`, asegurando la integridad de los datos en la base de datos.
- **Manejo de Errores:** Implementación de interceptores y filtros de excepciones globales para devolver respuestas HTTP consistentes y claras al cliente.

## Seguridad y Calidad
- **Autenticación:** Las rutas privadas (como el panel de control y reservas) están protegidas mediante JSON Web Tokens (JWT) y Guards nativos de NestJS.
- **Protección de Datos:** Las contraseñas se almacenan de forma segura utilizando algoritmos de encriptación (Bcrypt).
- **Código Limpio:** El proyecto mantiene una estructura modular y tipado estricto con TypeScript para evitar errores en tiempo de ejecución.

## Integraciones y API Externa
El sistema está diseñado para integrarse fácilmente con servicios de terceros. 
*(Nota: Aquí se implementará la conexión con servicios como envío de correos o almacenamiento de imágenes en la nube para enriquecer la plataforma).*

## Despliegue
La base de datos y la API están configuradas para su despliegue en la nube, garantizando disponibilidad 24/7.
- **Base de Datos:** PostgreSQL
- **API URL:** `[ENLACE_DE_PRODUCCION]`

---

## Entorno de Desarrollo (Local)

Para levantar este proyecto en tu máquina local, asegúrate de tener instalado Node.js y PostgreSQL.

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Variables de entorno
Crea un archivo `.env` en la raíz del proyecto tomando como referencia el `.env.example`. Asegúrate de configurar tu conexión a la base de datos:
```env
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/NOMBRE_BD?schema=public"
JWT_SECRET="tu_secreto_super_seguro"
```

### 3. Base de Datos (Prisma)
Genera el cliente y sincroniza los modelos con tu base de datos:
```bash
npx prisma generate
npx prisma db push
```

### 4. Ejecución del Servidor
```bash
# Modo desarrollo
npm run start:dev
```
La API estará disponible por defecto en `http://localhost:3000`.
