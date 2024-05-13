#ejercicio10
#En un curso de ciencias de la computación la calificación final del estudiante se determina a partir del
#rendimiento en tres aspectos del trabajo. A) Existe una calificación por los exámenes parciales que representa el
#30% del valor total de la nota final. B) la calificación por los trabajos prácticos corresponde al 20% del valor de la
#nota final. C) el examen integrador que corresponde al 50% restante. (los valores de las notas pueden ir de 0 a 10)

def ejercicio10():
    calif1 = float(input("Parcial")[0:11])
    calif2 = float(input("nota de tps")[0:11])
    calif3 = float(input("nota de examen")[0:11])

    nota1 = (calif1 / 100) * 30
    nota2 = (calif2 / 100) * 20
    nota3 = (calif3 / 100) * 50
    notatotal = (nota1 + nota2 + nota3)

    print("Tu nota final sera de:  ", notatotal)