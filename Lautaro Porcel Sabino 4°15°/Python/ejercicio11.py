#Ejercicio11
#Una concesionaria de autos paga a su personal, un salario de 5500 pesos por mes, mas una comisión del 200
#pesos por cada auto vendido y un adicional del 5% del valor del auto vendido. Diseñar un algoritmo para calcular
#el salario total del vendedor. Conociendo solamente el número de autos vendidos y el valor de venta de la unidad.
def ejercicio11():
    autos = []
    repeticiones = int(input("Ingrese la cantidad de autos que quiere ingresar"))
    
    for i in range(repeticiones):
         valor = float(input("Ingrese el porcentaje del valor del coche"))
         autos.append(valor)    
    
   
    comision = repeticiones * 200
    adicional = sum(autos) * 0.05
    sueldototal = 5500 + comision + adicional 

    print("El sueldo total es de:  ", sueldototal )
