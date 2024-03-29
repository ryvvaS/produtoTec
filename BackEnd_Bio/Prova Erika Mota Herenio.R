#Objetivo: Ajudar ao usu�rio a descobrir qual frasco de cultura (garrafa e /ou placa de cultivo) e quantas c�lulas � preciso para seu experimento de cultivo celular. 
#Valores m�nimos e m�ximos de c�lulas para cada frasco de cultura:menor que 12000 - n�o cultivar/entre 75000 e 175000- garrafa T25/entre 225000 e 525000- garrafa T75/entre 30000 e 70000- placa 6 po�os/entre 12000 e 28000- placa 12 po�os/acima de 175000- m�ltiplos frascos
#de acordo com a quantidade de c�lulas informada, o usu�rio recebe a informa��o em qual frasco de cultura suas c�lulas podem ser cultivadas
cel<-as.numeric(readline(prompt='quantidadedecelulas:'))
if(cel < 12000){
  print('naocultivar')
}else if(cel <= 28000){
  print('placa12po�os')
}else if(cel <= 70000){
  print('placa6po�os')
}else if(cel <= 175000){
  print('garrafaT25')
}else if(cel <= 525000){
  print('garrafaT75')
}else{
  print('multiplosfrascos')
}
# cultivo de MSCs , utilizar entre 3000 a 7000 c�lulas por cm2 de �rea ser cultivada, o usu�rio  vai digitar qual n�mero de c�lulas por cm2 desejar utilizar.
# Para descobrir qual quantidade de c�lulas ser�o necess�rias para determinado frasco de cultura, o usu�rio ir� informar c�lulas por cm2 x �rea de cultivo desejada.
# Garrafa T25 (�rea com tamanho de 25 cm2 )/Garrafa T75 (�rea com tamanho de 75 cm2)/Placa de 6 po�os  (�rea com tamanho de 10 cm2 por po�o)/Placa de 12 po�os  (�rea com tamanho de 04 cm2 por po�o)
celcm2 = as.numeric(readline(prompt = 'numcelareacultivo (entre 3000 a 7000 por cm2): '))
4000
# o usu�rio vai digitar qual �rea de cultivo por cm2 desejar utilizar, entre as op��es indicadas.
areacultivo = as.numeric(readline(prompt = 'informeareacultivo ( entre as op��es 04, 10, 25, 75 cm2): '))
25
# dada a f�rmula : quantidade de c�lulas = c�lulas por cm2 * �rea de cultivo
qtecel<-celcm2*areacultivo    
qtecel
#Dados os seguintes vetores para finalidade de saber se o usu�rio ter� a qte de c�lulas suficiente para todo o experimento, gerar a  informa��o com a quantidade de c�lulas (por mil) por frasco de cultura ao longo de 7 dias de cultivo:
garrafaT25<- c(75,83,82,100,123,96,157)
garrafaT75<- c(230,290,376,490,520, 312,443)
placa12po�os<- c(27,24,16,13,19,26,12)
placa6po�os<- c(50,41,37,67,54,49,33)
#dataframe
dados_c�lulascultivadas <- data.frame(garrafaT25, garrafaT75, placa12po�os, placa6po�os)
dados_c�lulascultivadas
#Calcular a m�dia e soma de todos os frascos
apply(dados_c�lulascultivadas,2,mean) # 2  para indicar que iremos calcular a m�dia das colunas
apply(dados_c�lulascultivadas,1,mean) # 1 para indicar que iremos calcular a m�dia das linhas
apply(dados_c�lulascultivadas,2,sum) # 2  para indicar que iremos calcular a soma das colunas
soma_4_dia <- sum(dados_c�lulascultivadas [4,]) #soma de c�lulas cultivadas no quarto dia 
soma_4_dia
