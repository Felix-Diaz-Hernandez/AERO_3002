/*Coleccion de datos Aerolineas_2019*/


db.aerolineas_2019.insertMany([
    {
        _id:1,
        Aerolinea:"American Airlines Group",
        Ingresos_anuales_dolares:1686000000,
        Numero_pasajeros_transportados:256928663,
        Numero_empleados:133000,
        Numero_aviones:884,
        Callsigm:"AAL",
        date: new Date("2019-12-04")
    },
    {
        _id:2,
        Aerolinea:"Delta Air Lines",
        Ingresos_anuales_dolares:47100000000,
        Numero_pasajeros_transportados:233758798,
        Numero_empleados:200000,
        Numero_aviones:779,
        Callsigm:"DAL",
        date: new Date("2019-12-30")
    },
    {
        _id:3,
        Aerolinea:"United Continental Holdings",
        Ingresos_anuales_dolares:1472000000,
        Numero_pasajeros_transportados:134863000,
        Numero_empleados:109000,
        Numero_aviones:814,
        Callsigm:"UAL",
        date: new Date("2019-12-31")
    },
    {
        _id:4,
        Aerolinea:"Lufthansa",
        Ingresos_anuales_dolares:47000000000,
        Numero_pasajeros_transportados:90465791,
        Numero_empleados:120000,
        Numero_aviones:268,
        Callsigm:"DLH",
        date: new Date("2019-12-31")
    },
    {
        _id:5,
        Aerolinea:"Air France-KLM",
        Ingresos_anuales_dolares:1496000000,
        Numero_pasajeros_transportados:34065000000,
        Numero_empleados:215000,
        Numero_aviones:329,
        Callsigm:["AFR","KLM"],
        date: new Date("2019-11-05")
    },
    {
        _id:6,
        Aerolinea:"International Airlines Group",
        Ingresos_anuales_dolares:1715000000,
        Numero_pasajeros_transportados:10378000000,
        Numero_empleados:250000,
        Numero_aviones:329,
        Callsigm:["IBE","BAW"],
        date: new Date("2019-12-31")
    },
    {
        _id:7,
        Aerolinea:"Southwest Airlines",
        Ingresos_anuales_dolares:2300000000,
        Numero_pasajeros_transportados:209526838 ,
        Numero_empleados:114000,
        Numero_aviones:730,
        Callsigm:"SWA",
        date: new Date("2019-12-31")
    },
    {
        _id:8,
        Aerolinea:"China Southern Airlines",
        Ingresos_anuales_dolares:10200000000,
        Numero_pasajeros_transportados:131972745 ,
        Numero_empleados:150000,
        Numero_aviones:629,
        Callsigm:"CSN",
        date: new Date("2019-12-30")
    },
    {
        _id:9,
        Aerolinea:"China Eastern Airlines",
        Ingresos_anuales_dolares:17130000000,
        Numero_pasajeros_transportados:122917175 ,
        Numero_empleados:145000,
        Numero_aviones:555,
        Callsigm:"CES",
        date: new Date("2019-12-30") 
    },
    {
        _id:10,
        Aerolinea:"All Nippon Airways",
        Ingresos_anuales_dolares:4554000000,
        Numero_pasajeros_transportados:72674568,
        Numero_empleados:230000,
        Numero_aviones:230,
        Callsigm:"ANA",
        date: new Date("2019-12-31") 
    }

])