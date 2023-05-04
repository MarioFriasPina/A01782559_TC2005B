DROP SCHEMA IF EXISTS olimpiada;
CREATE SCHEMA olimpiada;
USE olimpiada;

CREATE TABLE pais (
  pais_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  numero_participantesx INT UNSIGNED NOT NULL,
  numero_medallas INT UNSIGNED NOT NULL,
  PRIMARY KEY  (pais_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE deportista (
  deportista_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(90) NOT NULL,
  apellidos VARCHAR(90) NOT NULL,
  sexo ENUM('M', "F"),
  pais TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY  (deportista_id),
  CONSTRAINT `fk_pais` FOREIGN KEY (pais) REFERENCES pais (pais_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE disciplina (
	disciplina_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(90) NOT NULL,
    disciplina VARCHAR(90) NOT NULL,
    PRIMARY KEY (disciplina_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE prueba (
	prueba_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    disciplina SMALLINT UNSIGNED NOT NULL,
	fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lugar VARCHAR(90) NOT NULL,
    numero_deportistas SMALLINT UNSIGNED NOT NULL,
    naturaleza ENUM("Eliminatoria", "Final"),
    PRIMARY KEY (prueba_id),
	CONSTRAINT `fk_disciplina` FOREIGN KEY (disciplina) REFERENCES disciplina (disciplina_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE clasificacion (
	clasificacion_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	deportista SMALLINT UNSIGNED NOT NULL,
    prueba SMALLINT UNSIGNED NOT NULL,
    rango TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (clasificacion_id),
	CONSTRAINT `fk_deportista` FOREIGN KEY (deportista) REFERENCES deportista (deportista_id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT `fk_prueba` FOREIGN KEY (prueba) REFERENCES prueba (prueba_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE resultado (
	resultado_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	disciplina SMALLINT UNSIGNED NOT NULL,
    oro SMALLINT UNSIGNED NOT NULL,
	plata SMALLINT UNSIGNED NOT NULL,
    bronce SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (resultado_id),
	CONSTRAINT `fk_resultado_disciplina` FOREIGN KEY (disciplina) REFERENCES disciplina (disciplina_id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT `fk_oro` FOREIGN KEY (oro) REFERENCES deportista (deportista_id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT `fk_plata` FOREIGN KEY (plata) REFERENCES deportista (deportista_id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT `fk_bronce` FOREIGN KEY (bronce) REFERENCES deportista (deportista_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
