/*Coleccion de datos Aerolineas_2020*/


db.aerolineas_2020.insertMany([
    {
        _id:1,
        Aerolinea:"American Airlines Group",
        Ingresos_anuales_dolares:-8885000000,
        Numero_pasajeros_transportados:1102663,
        Numero_empleados:130000,
        Numero_aviones:884,
        Callsigm:"AAL",
        date: new Date("2020-12-10")
    },
    {
        _id:2,
        Aerolinea:"Delta Air Lines",
        Ingresos_anuales_dolares:-12385000000,
        Numero_pasajeros_transportados:1450102,
        Numero_empleados:150000,
        Numero_aviones:779,
        Callsigm:"DAL",
        date: new Date("2020-12-31")
    },
    {
        _id:3,
        Aerolinea:"United Continental Holdings",
        Ingresos_anuales_dolares:-5172000000,
        Numero_pasajeros_transportados:134863000,
        Numero_empleados:109000,
        Numero_aviones:814,
        Callsigm:"UAL",
        date: new Date("2020-12-31")
    },
    {
        _id:4,
        Aerolinea:"Lufthansa",
        Ingresos_anuales_dolares:-8080000000,
        Numero_pasajeros_transportados:10301101,
        Numero_empleados:120000,
        Numero_aviones:260,
        Callsigm:"DLH",
        date: new Date("2020-12-30")
    },
    {
        _id:5,
        Aerolinea:"Air France-KLM",
        Ingresos_anuales_dolares:-7078000000,
        Numero_pasajeros_transportados:34065000,
        Numero_empleados:200000,
        Numero_aviones:325,
        Callsigm:["AFR","KLM"],
        date: new Date("2020-12-01")
    },
    {
        _id:6,
        Aerolinea:"International Airlines Group",
        Ingresos_anuales_dolares: -6923000000,
        Numero_pasajeros_transportados:10378000,
        Numero_empleados:210000,
        Numero_aviones:323,
        Callsigm:["IBE","BAW"],
        date: new Date("2020-12-31")
    },
    {
        _id:7,
        Aerolinea:"Southwest Airlines",
        Ingresos_anuales_dolares:-3500000000,
        Numero_pasajeros_transportados:10126483,
        Numero_empleados:104000,
        Numero_aviones:725,
        Callsigm:"SWA",
        date: new Date("2020-12-30")
    },
    {
        _id:8,
        Aerolinea:"China Southern Airlines",
        Ingresos_anuales_dolares:-100000000,
        Numero_pasajeros_transportados:100275235,
        Numero_empleados:140000 ,
        Numero_aviones:810,
        Callsigm:"CSN",
        date: new Date("2020-12-31")
    },
    {
        _id:9,
        Aerolinea:"China Eastern Airlines",
        Ingresos_anuales_dolares:-84000000,
        Numero_pasajeros_transportados:1012100,
        Numero_empleados:135000,
        Numero_aviones:550,
        Callsigm:"CES",
        date: new Date("2020-12-31") 
    },
    {
        _id:10,
        Aerolinea:"All Nippon Airways",
        Ingresos_anuales_dolares: -3564000000,
        Numero_pasajeros_transportados:33264201,
        Numero_empleados:200000,
        Numero_aviones:225,
        Callsigm:"ANA",
        date: new Date("2020-12-30") 
    }

])