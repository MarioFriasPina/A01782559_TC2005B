-- Apellidos y nombre de los participantes de nacionalidad mexicana.
SELECT deportista.nombre, deportista.apellidos
FROM olimpiada.deportista INNER JOIN olimpiada.pais ON pais.pais_id = deportista.pais
WHERE pais.nombre = "MEXICO";

-- Apellidos, nombre y puntos acumulados de los participantes de USA.
SELECT deportista.nombre, deportista.apellidos, pais.numero_medallas
FROM olimpiada.deportista INNER JOIN olimpiada.pais ON pais.pais_id = deportista.pais
WHERE pais.nombre = "UNITED STATES";

-- Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
SELECT deportista.nombre, deportista.apellidos
FROM olimpiada.deportista INNER JOIN olimpiada.clasificacion ON clasificacion.deportista = deportista.deportista_id
WHERE clasificacion.rango = 1;

-- Nombre de las competencias en las que intervinieron los participantes mexicanos.
SELECT disciplina.nombre
FROM olimpiada.disciplina
	INNER JOIN olimpiada.prueba
		ON disciplina.disciplina_id = prueba.disciplina
	INNER JOIN olimpiada.clasificacion
		ON prueba.prueba_id = clasificacion.prueba
	INNER JOIN olimpiada.deportista
		ON clasificacion.deportista = deportista.deportista_id
WHERE pais = 2;

-- Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
SELECT deportista.nombre, deportista.apellidos
FROM olimpiada.deportista INNER JOIN olimpiada.clasificacion ON clasificacion.deportista = deportista.deportista_id
WHERE NOT clasificacion.rango = 1;

-- Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
SELECT deportista.nombre, deportista.apellidos
FROM olimpiada.deportista INNER JOIN olimpiada.clasificacion ON clasificacion.deportista = deportista.deportista_id;

-- Nombre de la competencia que aporta el máximo de puntos. 
-- Las competencias no tienen puntos, por lo cual no se puede calcular el maximo de puntos

-- Países (nacionalidades) que participaron en todas las competencias.
SELECT DISTINCT pais.nombre
FROM olimpiada.disciplina
	INNER JOIN olimpiada.prueba
		ON disciplina.disciplina_id = prueba.disciplina
	INNER JOIN olimpiada.clasificacion
		ON prueba.prueba_id = clasificacion.prueba
	INNER JOIN olimpiada.deportista
		ON clasificacion.deportista = deportista.deportista_id
	INNER JOIN olimpiada.pais
		ON pais.pais_id = deportista.pais;

-- Propongan una consulta que involucre una sola tabla con alguna funcion como MIN, AVG
SELECT AVG(pais.numero_medallas) FROM olimpiada.pais;

-- Porpongan una consulta que involucre dos tabla con GROUP BY
SELECT pais.nombre, deportista.nombre, deportista.apellidos
	FROM olimpiada.deportista INNER JOIN olimpiada.pais ON deportista.pais = pais.pais_id
    GROUP BY pais.nombre, deportista.nombre, deportista.apellidos;

-- Porpongan una consulta que involucre tres tablas con las sentencias LEFT JOIN, ORDER BY, GROUP BY Y LIMIT
SELECT disciplina.nombre, disciplina.disciplina
FROM olimpiada.disciplina
	LEFT JOIN olimpiada.prueba
		ON disciplina.disciplina_id = prueba.disciplina
	LEFT JOIN olimpiada.clasificacion
		ON prueba.prueba_id = clasificacion.prueba
GROUP BY disciplina.disciplina, disciplina.nombre ORDER BY disciplina.nombre LIMIT 10;

-- Porpongan una consulta que involucre tres tablas con las sentencias INNER JOIN y LIKE
SELECT *
FROM olimpiada.disciplina
	INNER JOIN olimpiada.prueba
		ON disciplina.disciplina_id = prueba.disciplina
	INNER JOIN olimpiada.clasificacion
		ON prueba.prueba_id = clasificacion.prueba
WHERE disciplina.nombre LIKE 'MEN%';
