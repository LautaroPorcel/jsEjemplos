#Ejercicio 5
#Se ingresa 3 números que representan horas, minutos y segundos. Se pide informar el resultado expresado en 
#segundos. Determinar qué tipo de valor es el aconsejable para los datos solicitados

def calcular_segundos(horas, minutos, segundos):
    total_segundos = horas * 3600 + minutos * 60 + segundos
    return total_segundos

# Definir los valores de tiempo
def ejercicio5():
    horas = int(input("Ingrese un valor"))
    minutos = int(input("Ingrese un valor"))
    segundos = int(input("Ingrese un valor"))

# Calcular los segundos totales
    segundos_totales = calcular_segundos(horas, minutos, segundos)

# Mostrar el resultado
    print("El resultado expresado en segundos es:", segundos_totales)