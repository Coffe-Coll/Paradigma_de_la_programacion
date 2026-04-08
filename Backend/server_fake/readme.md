1 ¿Cuando hacer una peticion de tipo PATCH?
R/: Una petición PATCH se utiliza para realizar actualizaciones parciales en un recurso existente, modificando solo los campos específicos que han cambiado sin necesidad de enviar el objeto completo. Es ideal para ahorrar ancho de banda y evitar sobrescribir accidentalmente datos no modificados en APIs REST. 

¿Cuándo usarla?

- Modificaciones específicas: Cuando solo necesitas actualizar un atributo (ej. cambiar la contraseña o el email).

- Actualizaciones incrementales: Para añadir, eliminar o modificar campos específicos.

- Optimización: Cuando el recurso es grande y solo quieres enviar pequeños cambios, a diferencia de PUT que reemplaza el recurso entero.

- Operaciones asíncronas: Es útil para acciones como activar/desactivar recursos o actualizar estados sin reemplazar los datos.

2 ¿Que es SOAP, cuales son las diferencias con REST?
R/: SOAP (Simple Object Access Protocol) es un protocolo estandarizado basado en XML para el intercambio de mensajes estructurados, ideal para entornos empresariales seguros. A diferencia de SOAP, REST (Representational State Transfer) es un estilo arquitectónico más flexible, rápido y ligero que usa JSON, ideal para aplicaciones web/móviles modernas, siendo REST más fácil de escalar y usar. 

Diferencias Principales:

- Definición: SOAP es un protocolo oficial (W3C), mientras que REST es un estilo de arquitectura.

- Formato de Datos: SOAP solo admite XML. REST es flexible, admitiendo JSON, XML, texto plano, entre otros (JSON es el más usado).

- Seguridad: SOAP ofrece mayor seguridad nativa (WS-Security) para transacciones críticas. REST depende de la seguridad del transporte (HTTPS).

- Rendimiento: REST es generalmente más rápido y eficiente debido a mensajes más pequeños y uso de caché. SOAP es más pesado por el "envoltorio" XML.

- Estado: SOAP suele ser "con estado" (stateful), manteniendo sesiones. REST es "sin estado" (stateless), lo que facilita su escalabilidad.

- Uso: SOAP es ideal para operaciones bancarias o APIs privadas. REST es preferido para aplicaciones móviles, redes sociales y servicios web públicos.

3 ¿Que es GraphQL, cuales son las diferencias con REST?
R/: GraphQL es un lenguaje de consulta y tiempo de ejecución para APIs creado por Facebook que permite a los clientes solicitar exactamente los datos que necesitan, ni más ni menos. A diferencia de REST, que usa múltiples endpoints y suele sobrecargar de datos, GraphQL utiliza un único endpoint y ofrece flexibilidad, eficiencia y tipado fuerte para aplicaciones complejas. 

Principales Diferencias entre GraphQL y REST:

- Puntos de Entrada (Endpoints): REST utiliza múltiples endpoints (ej. /users, /posts) para acceder a diferentes recursos. GraphQL utiliza un único endpoint para todas las consultas, generalmente POST /graphql.

- Estructura de Datos: En REST, el servidor define la estructura de los datos que envía. En GraphQL, el cliente define la estructura de los datos que desea recibir, solucionando problemas de sobredescarga (over-fetching) o subdescarga (under-fetching) de información.

- Eficiencia: GraphQL permite obtener datos relacionados en una sola petición, mientras que REST a menudo requiere realizar múltiples llamadas.

- Esquema y Tipado: GraphQL utiliza un sistema de tipos fuerte y un esquema (Schema) para definir los datos disponibles, lo que autodocumenta la API. REST no requiere esquema de forma nativa.

- Versionado: Las APIs REST suelen requerir versiones (v1, v2) para cambios en la estructura. En GraphQL, se pueden añadir nuevos campos sin romper las consultas existentes, lo que a menudo elimina la necesidad de versiones.

4 ¿Que significa status 201 Created? En donde aparece
R/: El estado HTTP 201 Created (Creado) indica que una solicitud (usualmente un POST o PUT) fue exitosa y resultó en la creación de un nuevo recurso en el servidor, como un usuario nuevo, una publicación o un archivo. Incluye la URL del nuevo recurso en el encabezado Location. 

¿En dónde aparece?

- APIs RESTful: Al registrar datos (ej. formularios) o crear recursos.

- Subida de archivos: Al almacenar imágenes o documentos con éxito.

- Respuesta de Servidor: En las herramientas de desarrollo del navegador (pestaña Network) o en logs de API.

5 ¿Como verificar la actualizacion de los datos por medio de la terminal?
R/: Para verificar la actualización de datos o paquetes a través de la terminal (Linux/Ubuntu), usa apt list --upgradable para listar lo pendiente. Tras actualizar con sudo apt upgrade, repite el comando para confirmar que ya no hay actualizaciones. Para monitorear cambios en tiempo real, usa watch -n 0.1 find /ruta. 

Comandos clave para verificar actualizaciones:

Linux/Ubuntu (Paquetes):

apt list --upgradable: Muestra la lista de paquetes que tienen una versión más nueva disponible.

sudo apt update: Actualiza el índice de paquetes para asegurar que la verificación sea precisa.

apt show <paquete>: Muestra los detalles de un paquete específico, incluida su versión, para verificar si se actualizó.

Monitoreo en Tiempo Real (Archivos):

watch -n 0.1 find /ruta/al/directorio: Ejecuta una búsqueda cada 0.1 segundos para ver cambios inmediatos en archivos o directorios.

Windows (CMD/Terminal):

winh. update: Comando para buscar actualizaciones en la consola de Windows.

Verificar versión instalada:

nombre_del_programa --version: La mayoría de herramientas CLI permiten verificar la versión activa con este comando.

6 ¿Cuales son los status existentes y comunes?
R/: Los códigos de estado HTTP son respuestas numéricas del servidor que indican el resultado de una solicitud. Los más comunes son 200 (OK) para éxito, 404 (Not Found) para recursos inexistentes, 500 (Internal Server Error) para fallos del servidor, y 301/302 para redirecciones. Se clasifican por su primer dígito (1xx-5xx). 

Códigos de Estado HTTP Más Comunes:

2xx (Éxito - Petición completada):

200 OK: La solicitud fue exitosa.
201 Created: Recurso creado exitosamente (común en POST/PUT).
204 No Content: Petición exitosa, pero sin contenido que devolver.
3xx (Redirección - Acción adicional):

301 Moved Permanently: El recurso se movió permanentemente.
302 Found (o Temporary Redirect): Redirección temporal.
304 Not Modified: Se utiliza la versión en caché.
4xx (Error de Cliente - La solicitud no pudo procesarse):

400 Bad Request: Petición mal formada o incorrecta.
401 Unauthorized: Requiere autenticación.
403 Forbidden: Servidor deniega el acceso, aunque entienda la solicitud.
404 Not Found: El recurso solicitado no se encuentra.
5xx (Error de Servidor - Fallo al procesar la solicitud):

500 Internal Server Error: Error genérico del servidor.
502 Bad Gateway: Servidor recibió respuesta inválida de otro servidor.
503 Service Unavailable: Servidor sobrecargado o en mantenimiento.
504 Gateway Timeout: El servidor no respondió a tiempo.