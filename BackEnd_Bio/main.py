
def calculo():
    tipoceluar = input("Qual tipo celular você está trabalhando?")
    opcao_Neubauer = input("Você quer calcular o número de células pela contagem da Câmara de Neubauer?")
    opcao = opcao_Neubauer.capitalize()
    if opcao == "S":
        total_cell = camara_neubauer()
    elif opcao == "N":
        total_cell = input("Digite o número total de células calculado:")
    tipo_frasco = input("""1- Garrafas T25 
                            2- garrafa T75
                            3- garrafa T175  
                            4- placa 6 poços     
                            5- placa 12 poços            
                            6- placas 24 
                            7- placa 96 poços
                            Digite em qual tipo de placa/frasco vai plaquear as células: """)
    Qtd_cell_experimento = qtd_cell_desejadas()


def camara_neubauer():
    global numtotal
    Qtd_quadrante = int(input("Quantos Quadrantes voce utilizou na contagem?"))
    for i in range(0, Qtd_quadrante):
            Qtd_cell = int(input(f"quantidade de celulas no quadrante {i}: "))
            Qtd_cell += Qtd_cell
    diluicao = int(input("Qual foi a diluição (ml) utilizada para a contagem das células?"))
    numtotal = (Qtd_cell/Qtd_quadrante)*diluicao*10000
    print(f"Seu número total de células/ml é:{numtotal}")
    return numtotal


def qtd_cell_desejadas():
    opcao = input("""Escolha a melhor alternativa para calcular a quantidade 
                        desejada de celulas para o seu experimento: 
                                                                    1-Cm2 
                                                                    2-Numero total de celulas por garrafa 
                                                                    3- seguir sugestao de densidade celular 
                                                                    informe sua opcao :
                                                                    """)
    if opcao == 3:
        tipo_experimento = input("""Informe para qual experimento você está plaqueando as células
                                                           1- MTT 24h 
                                                           2- MTT 48h
                                                           3- MTT 72h 
                                                           4- MTT 7 dias 
                                                           5- ensaio de senescência celular 
                                                           6- ensaio de migração celular (wound healing)  
                                                           7- manutençao padrao do cultivo 
                                                           8- transfecção em 24h 
                                                           9- preciso das células confluentes o mais rápido possível.  
""")
    return opcao

def densidade():
    pass