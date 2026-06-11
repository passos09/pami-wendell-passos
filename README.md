DOCUMENTAÇÃO DO TUTORIAL EXPO WEB

O Expo é uma plataforma que facilita o desenvolvimento de aplicações móveis utilizando React Native. Além de permitir a execução em dispositivos Android e iOS, também possibilita a visualização da aplicação diretamente em navegadores por meio do Expo Web.

Neste tutorial foi desenvolvido um projeto, utilizando a ferramenta Expo. Durante o processo foram abordados conceitos fundamentais como criação de projetos, navegação entre telas, estilização de componentes, manipulação de imagens, utilização de gestos, captura de tela e tratamento de diferenças entre plataformas.

O objetivo desta atividade foi aprender a configurar e utilizar o ambiente Expo para o desenvolvimento de aplicações multiplataforma, compreendendo os principais recursos disponibilizados pelo framework React Native e pelo Expo.

Ferramentas Utilizadas

• Node.js
• NPM
• Visual Studio Code
• Expo
• React Native
• Expo Router
• Google Chrome
• Windows

O projeto foi iniciado utilizando a ferramenta Create Expo App.

Comandos utilizados:

npx create-expo-app@latest
cd aula04

Para iniciar o servidor de desenvolvimento foi utilizado o comando:

npx expo start

Como o desenvolvimento foi realizado pela Web, foi utilizada a opção:

w

Desenvolvimento da Interface Inicial

O primeiro arquivo modificado foi app/index.tsx. Foram utilizados os componentes View, Text e StyleSheet para a construção da interface.

Foram utilizados recursos como expo-image-picker, Modal, FlatList e Expo Router para seleção de imagens, exibição de stickers, listagem de emojis e navegação.

Foram utilizadas as bibliotecas react-native-gesture-handler e react-native-reanimated para permitir interação com os stickers através de duplo toque e movimentação livre na tela.

Foram utilizadas as bibliotecas react-native-view-shot e expo-media-library para capturar e salvar imagens geradas pelo usuário.

Foi utilizada a biblioteca expo-splash-screen para configurar a tela de carregamento da aplicação.

Foi possível criar uma aplicação React Native utilizando Expo Web, implementar navegação, selecionar imagens, adicionar stickers, utilizar gestos e salvar imagens geradas.

A atividade permitiu compreender o funcionamento do Expo e do React Native no desenvolvimento de aplicações multiplataforma, proporcionando experiência prática com recursos modernos de desenvolvimento mobile.
