# Ejercicios de MySQL
## Mario Ignacio Frias Pina

### Tercera forma Normal de una base de datos Relacional

1. La primera forma normal 1NF elimina los valores repetidos dentro de una base de datos.

2. La segunda forma normal 2NF es que si los atributos que no forman parte de ninguna clave dependen de forma completa de la clave principal. Es decir, que no existen dependencias parciales. Todos los atributos que no son clave principal deben depender únicamente de la clave principal.

3. La tercera forma normal 3NF es si no existe ninguna dependencia funcional transitiva en los atributos que no son clave.

- Nuestra base de datos cumple con estas primeras tres formas normales, ya que no tenemos varios valores en una sola celda. Todos los atributos que dependen de una llave primaria estan separados por tablas. Y no existen las dependencias transitivas.

### Importancia de las consultas

9. En esta consulta obtenemos el valor promedio de las medallas de todos los paises.

10. En esta consulta agrupamos a los atletas por su pais, su nombre y sus apellidos.

11. En esta consulta obtenemos los primeros 10 eventos, agrupados por disciplina y por su nombre.

12. En esta consulta obtenemos toda la informacion de los eventos para hombres.