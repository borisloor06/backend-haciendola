# Requisitos Desafío

## Descripción
En esta parte debes crear una aplicación en NodeJS que se conecte a una
base de datos para almacenar y rescatar información. Tanto el motor de base de datos como el
framework a usar son de libre elección. La única restricción es que la base de datos debe ser
RELACIONAL.
Debe contar con dos entidades, una de usuarios (Cuentas de usuario, con los datos que se te antojen.
Como mínimo debe tener usuario y contraseña) y una entidad de Productos (Los datos mínimos a
incluir son los que se detallan en las cabeceras del archivo Excel de productos adjunto)
Una vez creadas sus tablas, debe cargar los productos detallados en el archivo Excel a su base de
datos.
En cuanto a los usuarios, debes contar con un endpoint para autenticar un usuario en base a su
usuario/contraseña.
En cuanto a los productos, debes crear los endpoints necesarios para generar una API REST

## Requisitos
- Crear una base de datos relacional con dos tablas: Usuarios y Productos
- Crear un endpoint para autenticar un usuario
- Crear los endpoints necesarios para generar una API REST de productos
- Cargar los productos del archivo Excel a la base de datos
- Crear un archivo README.md con las instrucciones para ejecutar la aplicación

### Adicionales
- Usar JWT para manejar la autenticación de usuarios
- Encriptación de contraseñas (Lo puedes manejar en el front o en el back, en la base de datos la contraseña debe estar encriptada)
- Usar Typescript
- Crear endpoints y ventanas necesarias para rescatar una contraseña olvidada y actualizar la contraseña
- Uso de algún framework para la construcción del backend en NodeJS (Por ejemploExpress o Fastify; NestJS)
- Uso de algún ORM para la gestión de los datos (Por ejemplo, Sequelize, TypeORM, Elloquent)
- Validar la autentificación del usuario al intentar acceder a las rutas de producto. Un usuario no autenticado (O con un token inválido/vencido) no debe poder acceder a las rutas de los productos, y debe recibir un error 401 Unauthorized
- Uso de alguna herramienta para generar documentación (Por ejemplo Swagger o Postman)