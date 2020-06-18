
<div align="center" >
  <img src="./src/assets/logo-im.png" width="70px" height="70">
</div>



### Sobre
O **iMovie** é um aplicativo mobile para os apaixonados por filmes. 
Com ele, é possível organizar seus filmes favoritos e marcar quais você já assistiu. 
É um projeto que eu criei em **React Native** para aplicar os conceitos de **Mobile First com Firebase**.

<div align="center" >
  <img src="impreview.gif">
</div>

O **IM** está disponível para Android e iOS. :iphone:


### Features
No desenvolvimento do **iMovie** foi utilizado os seguintes recursos e conceitos:

- [x] Conexão nativa com o Firebase Android e iOS;
- [x] Utilização da Context API do React para mudar o tema da aplicação entre dark e light.
- [x] Utilização da API de Animações do React Native;
- [x] Utilização do componente **[FastImage](https://github.com/DylanVann/react-native-fast-image)** para cache e performance de carregamento das imagens;
- [x] Aplicação do efeito **[Shimmer](https://github.com/tomzaku/react-native-shimmer-placeholder)** para o carregamento de contéudo;
- [x] Verifica se há conexão com a Internet utilizando o **[React Native Netinfo](https://github.com/react-native-community/react-native-netinfo)**  
- [x] Utilizei a Context API do React Native com um listener para identificar automaticamente quando muda o status da conexão com a Internet para saber se o aplicativo está offline ou online.


### Anotações

No Android, para verificar o estado na conexão com a internet é necessário incluir no AndroidManifest.xml o seguinte:

```xml
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```


<div align="center">
  <small>Rodrigo Gonçalves Santana - 2020</small>
</div>