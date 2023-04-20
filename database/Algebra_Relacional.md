# Ejercicios de Algebra Relacional
## Mario Ignacio Frias Pina

## Instrucciones

Se dispone de una Base de Datos RELACIONAL para un torneo internacional compuesto de diversas competencias. El esquema de la base de datos es el siguiente:


• COMPETENCIA (NombreCompetencia: STRING, NumPtos: INTEGER, Tipo: STRING)

    Una competencia de un cierto TIPO, se identifica por su nombre NOMBRECOMPETENCIA y aporta un cierto número de puntos NUMPTOS.


• PARTICIPANTE ( Número: INTEGER, Apellidos: STRING, Nombre: STRING, Nacionalidad: STRING)

    Una persona que participa en el torneo es identificada por un número de participante NUMERO y se registra con sus APELLIDOS, su NOMBRE y su NACIONALIDAD.


• PUNTOSACUMULADOS(Número: INTEGER, Puntos: INTEGER )

    Todo participante identificado por NUMERO acumula un número de puntos PUNTOS durante el torneo.


• CLASIFICACION(NombreCompetencia: STRING, Número: INTEGER, Lugar: INTEGER)

    Para la competencia de nombre NOMBRECOMPETENCIA, el participante identificado con el número NUMERO fue clasificado en el lugar LUGAR.

 

## Tomando en cuenta lo anterior, escriba en álgebra relacional las siguientes consultas:

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
7. Nombre de la competencia que aporta el máximo de puntos.
8. Países (nacionalidades) que participaron en todas las competencias.

## Mi explicación de la lógica de los ejercicios

1. Devuelve una tabla donde aparecen todos los participantes de nacionalidad mexicana.
2. Devuelve una tabla donde aparecen todos los participantes y sus puntos acumulados de nacionalidad norteamericana.
3. Devuelve una tabla donde aparecen todos los participantes que tienen un lugar = 1 en la tabla de clasificación.
4. Devuelve una tabla donde aparecen todas las competencias en las que obtuvo un lugar un participante de nacionalidad mexicana.
5. Devuelve una tabla donde aparecen todos los participantes que no tienen un lugar = 1 en la tabla de clasificación.
6. Devuelve una tabla donde existen todos los participantes que clasificaron en por lo menos una de las competencias.
7. Devuelve una tabla con una sola fila que tiene el nombre de la competencia con el valor más alto de puntos.
8. Devuelve una tabla donde existen todas las nacionalidades que existen en tienen una posición en la tabla de clasificación.

## Ejemplos de Tablas

### Competencia
| NombreCompetencia | NumPtos | Tipo |
| - | - | - |
| Natación | 3 | Acuatico |
| 100 m | 5 | Atletismo |
| Clavados | 2 | Acuatico |
|... |... | ...|

### Participante
| Número | Apellidos | Nombre | Nacionalidad |
| - | - | - | - |
| 1 | Diaz Perez | Juan Jose | México |
| 2 | Smith Smithson | John | USA |
| 3 | Johnson Thompson | John | USA |
|... |... | ...| ...|

### Puntos Acumulados
| Número | Puntos |
| - | - |
| 1 | 2 |
| 2 | 5 |
| 3 | 3 |
|... |... |

### Clasificación
| NombreCompetencia | Número | Lugar |
| - | - | - |
| Natación | 3 | 1 |
| Atletismo | 2 | 1 |
| Clavados | 1 | 1 |
|... |... | ...|

## Resultados

1. R = $\Pi_{Apellidos, Nombre}$($\sigma_{Nacionalidad=México}$ (Participante))

    ***R***
2. R = $\Pi_{Apellidos, Nombre, Puntos}$($\sigma_{Nacionalidad=USA}$ (Participante $\bowtie$ Puntos Acumulados))    
    
    ***R***
3. R = $\Pi_{Apellidos, Nombre}$($\sigma_{Lugar=1}$ (Participante $\bowtie$ Clasificacion))
    
    ***R***
4. R = $\Pi_{NombreCompetencia}$($\sigma_{Nacionalidad=México}$ (Participante $\bowtie$ Clasificación))

    ***R***
5. R = $\Pi_{Apellidos, Nombre}$(Participante) - $\Pi_{Apellidos, Nombre}$($\sigma_{Lugar=1}$ (Participante $\bowtie$ Clasificacion))

    ***R***
6. R = $\Pi_{Apellidos, Nombre}$(Clasificación $\bowtie$ Participante)

    ***R***
7. R = $\rho_{NumPtos1} $($\Pi_{NumPtos}$(Competencia)) X $\rho_{NumPtos2} $($\Pi_{NumPtos}$(Competencia))

    S = $\Pi_{NumPtos1}$($\sigma_{NumPtos1 < NumPtos2}$(cross))

    T = $\Pi_{NombreCompetencia}$ ($\sigma_{NumPtos = S}$(NombreCompetencia))

    ***T***
8. R = $\Pi_{NombreCompetencia, Nacionalidad}$(Clasificación $\bowtie$ Participante)

    S = $\Pi_{NombreCompetencia}$(Competencia)

    T = R / S

    ***T***