#Ejercicio 6
#Se necesita calcular la superficie de un triángulo, y se dispone solamente de los valores de su base y altura.
#Definir también que tipo de valor es aconsejable para las variables con la información que se tiene.
#**No se podrá usar valores fijos en las fórmulas del algoritmo. Solo variables y/o constantes.**

def ejercicio6():
    base = int(input("Ingrese el valor de la base")) 
    altura = int(input("Ingrese el valor de la altura"))
    superficie = (base * altura)

    print("La superficie es:  ", superficie)
