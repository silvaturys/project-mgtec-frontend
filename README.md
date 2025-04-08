MGTEC - Automação Residencial
Este é o projeto final do curso de Programação na TripleTen. O site foi desenvolvido como uma landing page para uma empresa de automação residencial e conta com as seguintes seções:

Home: Apresentação da empresa com um fundo (imagem, e futuramente, vídeo) e call-to-action.

Quem Somos: Uma breve descrição sobre a empresa, com um container branco contendo texto informativo e uma imagem (centralizada no mobile) que apresenta a identidade visual da marca.

Contato: Informações para que os clientes entrem em contato via email, WhatsApp e Instagram.

Localização: Uma página separada que exibe, por meio de um mapa interativo, a localização da loja (endereço: Rua Humaitá 258, CEP 88070730), consumindo a API do Google Maps.



Funcionalidades
Navegação interna: As seções Home, Quem Somos e Contato estão na mesma página com scroll suave.

Navegação com React Router: A seção Localização abre uma nova página onde o mapa interativo é exibido.

Menu Responsivo: Um menu hamburger que exibe os links de navegação no mobile.

Integração com Google Maps: Uso de um iframe com a API do Google Maps, configurado com uma chave importada do arquivo src/Utils/api.js.

Layout Responsivo: O design se adapta tanto para desktop quanto para dispositivos móveis.




Estrutura do Projeto
projeto-mgtec/
├── node_modules/
├── public/
│   └── index.html
└── src/
    ├── Assets/           # Arquivos de fontes, estilos gerais, etc.
    ├── Components/       # Componentes React (ex.: Navbar, Home, QuemSomos, Location, Footer)
    ├── Images/           # Imagens utilizadas no projeto
    ├── Utils/            # Arquivos utilitários (ex.: api.js com a chave do Google Maps)
    ├── Vendor/           # Arquivos de terceiros, se houver
    └── index.jsx         # Entrada principal do React



Pré-requisitos
Node.js: Versão 14 ou superior.
npm ou yarn: Gerenciador de pacotes.
Google Maps API Key: Configure a sua chave no arquivo src/Utils/api.js.





Instalação e Execução
Clone o repositório:
git clone https://github.com/seu-usuario/projeto-mgtec.git
Acesse o diretório do projeto:
cd projeto-mgtec
Instale as dependências:
npm install
Inicie o projeto:
npm run dev
Acesse: Abra o navegador e vá para http://localhost:5173/ (ou a porta que o Vite indicar).

Visão Geral da Implementação da Localização
Para a seção de Localização o que foi feito:

Embed do Google Maps: Um iframe que exibe o mapa interativo.

Endereço configurado: O endereço "Rua Humaitá 258, CEP 88070730" é enviado para o Google Maps após ser devidamente formatado com encodeURIComponent.

Chave da API: A chave é importada do arquivo src/Utils/api.js.

Você pode usar este componente como base e futuramente expandir a funcionalidade, por exemplo, para exibir dados adicionais ou incluir um infowindow no mapa.



Possíveis Customizações Futuras
Vídeo de Fundo: Substituir a imagem da seção Home por um vídeo.

Interatividade no Mapa: Adicionar mais recursos interativos (ex.: infowindow com detalhes da loja, rotas, etc.).

Aprimoramento do Layout: Refinar animações, transições e a experiência móvel.

Integração de outras APIs: Caso queira enriquecer a experiência do usuário (ex.: previsão do tempo na região da loja).

