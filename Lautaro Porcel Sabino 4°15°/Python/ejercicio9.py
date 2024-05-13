#Ejercicio9
#Dada una fecha que se lee en formato numérico DDMMAAAA (dos números para el día, dos para el mes, cuatropara el año),
#se solicita obtener el día el mes y año por separado en tres variables. (usar descomposición matemática)

def ejercicio9():
    # Leemos la fecha en formato numérico DDMMAAAA
    fecha_numerica = int(input("Ingrese la fecha en formato numérico DDMMAAAA: "))

    # Descomponemos la fecha en día, mes y año
    anio = fecha_numerica % 10000  # Obtenemos los últimos cuatro dígitos para el año
    mes_dia = fecha_numerica // 10000  # Obtenemos los primeros seis dígitos para el mes y día
    mes = mes_dia // 100  # Obtenemos los dos primeros dígitos para el mes
    dia = mes_dia % 100  # Obtenemos los dos últimos dígitos para el día

    # Mostramos los resultados
    print("Día:", dia)
    print("Mes:", mes)
    print("Año:", anio)
