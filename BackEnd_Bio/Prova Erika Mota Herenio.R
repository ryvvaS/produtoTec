#Objetivo: Ajudar ao usuário a descobrir qual frasco de cultura (garrafa e /ou placa de cultivo) e quantas células é preciso para seu experimento de cultivo celular. 
#Valores mínimos e máximos de células para cada frasco de cultura:menor que 12000 - não cultivar/entre 75000 e 175000- garrafa T25/entre 225000 e 525000- garrafa T75/entre 30000 e 70000- placa 6 poços/entre 12000 e 28000- placa 12 poços/acima de 175000- múltiplos frascos
#de acordo com a quantidade de células informada, o usuário recebe a informação em qual frasco de cultura suas células podem ser cultivadas
cel<-as.numeric(readline(prompt='quantidadedecelulas:'))
if(cel < 12000){
  print('naocultivar')
}else if(cel <= 28000){
  print('placa12poços')
}else if(cel <= 70000){
  print('placa6poços')
}else if(cel <= 175000){
  print('garrafaT25')
}else if(cel <= 525000){
  print('garrafaT75')
}else{
  print('multiplosfrascos')
}
# cultivo de MSCs , utilizar entre 3000 a 7000 células por cm2 de área ser cultivada, o usuário  vai digitar qual número de células por cm2 desejar utilizar.
# Para descobrir qual quantidade de células serão necessárias para determinado frasco de cultura, o usuário irá informar células por cm2 x área de cultivo desejada.
# Garrafa T25 (área com tamanho de 25 cm2 )/Garrafa T75 (área com tamanho de 75 cm2)/Placa de 6 poços  (área com tamanho de 10 cm2 por poço)/Placa de 12 poços  (área com tamanho de 04 cm2 por poço)
celcm2 = as.numeric(readline(prompt = 'numcelareacultivo (entre 3000 a 7000 por cm2): '))
4000
# o usuário vai digitar qual área de cultivo por cm2 desejar utilizar, entre as opções indicadas.
areacultivo = as.numeric(readline(prompt = 'informeareacultivo ( entre as opções 04, 10, 25, 75 cm2): '))
25
# dada a fórmula : quantidade de células = células por cm2 * área de cultivo
qtecel<-celcm2*areacultivo    
qtecel
#Dados os seguintes vetores para finalidade de saber se o usuário terá a qte de células suficiente para todo o experimento, gerar a  informação com a quantidade de células (por mil) por frasco de cultura ao longo de 7 dias de cultivo:
garrafaT25<- c(75,83,82,100,123,96,157)
garrafaT75<- c(230,290,376,490,520, 312,443)
placa12poços<- c(27,24,16,13,19,26,12)
placa6poços<- c(50,41,37,67,54,49,33)
#dataframe
dados_célulascultivadas <- data.frame(garrafaT25, garrafaT75, placa12poços, placa6poços)
dados_célulascultivadas
#Calcular a média e soma de todos os frascos
apply(dados_célulascultivadas,2,mean) # 2  para indicar que iremos calcular a média das colunas
apply(dados_célulascultivadas,1,mean) # 1 para indicar que iremos calcular a média das linhas
apply(dados_célulascultivadas,2,sum) # 2  para indicar que iremos calcular a soma das colunas
soma_4_dia <- sum(dados_célulascultivadas [4,]) #soma de células cultivadas no quarto dia 
soma_4_dia
