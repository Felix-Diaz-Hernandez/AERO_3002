
/*Ganancias de cada aerolínea en 2019 con gráfica ,este aggregate nos dará las aerolíneas pero solo
con los campos Callsing y Ingresos_anuales_dolares creando una colección de datos nueva que usaremos para crear la gráfica*/


db.aerolineas_2019.aggregate([
    {$match:{$expr:{$gt:[{Ingresos_anuales_dolares: 0  },2019] } }},
    {$project:{
        _id:false,    
    }},
    {$unset:["Numero_empleados","Numero_aviones","Numero_pasajeros_transportados","Aerolineas","date"]},
    {$merge:{into:"grafica_aerolineas_2019"}}
]).pretty()

/*Línea que use para poder exportar los datos haciendo uso de la herramienta mongoexport*/

/*mongoexport --db=aerolineas_2019 --collection=test --type=csv --fieldFile=Ingresos_anuales_dolares,Callsign --out=/desktop/grafica.csv*/


/*RESULTADO EN EL DOCUMENTO grafica_aerolinea_2019.js */

/*Este aggregate nos dará la Aerolínea con más ingresos de 2019 incluyendo como resultado los datos contenidos
en los campos Ingresos_anuales¨_dolares*/

db.aerolineas_2019.aggregate([
    { $match: { Ingresos_anuales_dolares: { $gt: 1715000000 } } },
    { $match: { Ingresos_anuales_dolares: { $gt: 10200000000 } } },
    { $match: { Ingresos_anuales_dolares: { $gt: 47000000001 } } },
    {$project:{
        _id:false,    
    }},
    {$unset:["Numero_aviones","Numero_pasajeros_transportados","date","Numero_empleados","Callsign"]},

]).pretty()


/*RESSULTADO
{ "Aerolinea" : "Delta Air Lines", "Ingresos_anuales_dolares" : 47100000000 }
*/





/*Funciona de la misma forma que el aggregate para saber la aerolinea con mayores ingresos solo que este se aplica a la aerolinea con más aviones en 2019*/


db.aerolineas_2019.aggregate([
    { $match: { Numero_aviones: { $gt: 300 } } },
    { $match: { Numero_aviones: { $gt: 600 } } },
    { $match: { Numero_aviones: { $gt: 814 } } },
    {$project:{
        _id:false,    
    }},
    {$unset:["Ingresos_anuales_dolares","Numero_pasajeros_transportados","date","Numero_empleados"]},

]).pretty()

/*RESULTADO 
{
        "Aerolinea" : "American Airlines Group",
        "Numero_aviones" : 884,
        "Callsing" : "AAL"
}
*/


/*Aerolínea* con más empleados funciona igual que el aggregate para saber el número de aviones y el de ingersos pero en este caso será para saber la que más empleados tiene en 2019*/

db.aerolineas_2019.aggregate([
    { $match: { Numero_empleados: { $gt: 100000 } } },
    { $match: { Numero_empleados: { $gt: 150000 } } },
    { $match: { Numero_empleados: { $gt: 200000 } } },
    { $match: { Numero_empleados: { $gt: 230000 } } },
    {$project:{
        _id:false,    
    }},
    {$unset:["Ingresos_anuales_dolares","Numero_pasajeros_transportados","date","Numero_aviones"]},

]).pretty()


/*RESULTADO
{
        "Aerolinea" : "International Airlines Group",
        "Numero_empleados" : 250000,
        "Callsign" : [
                "IBE",
                "BAW"
        ]
}
*/


/*Este aggregate es parecido a los anteriores y nos permitirá ver la Aerolínea con mayoress perdidas y menos empleados en 2020*/


db.aerolineas_2020.aggregate([
    { $match: { Numero_empleados: { $lt: 150000 } } },
    { $match: { Ingresos_anuales_dolares: { $lt:-8080000000  } } },
    {$project:{
        _id:false,    
    }},
    {$unset:["Numero_pasajeros_transportados","date"]},

]).pretty()


/*RESULTADO
{
        "Aerolinea" : "American Airlines Group",
        "Ingresos_anuales_dolares" : -8885000000,
        "Numero_empleados" : 130000,
        "Numero_aviones" : 884,
        "Callsign" : "AAL"
}
*/ 










