## Instalação

Nessa seção, ensinarei do processo de deployment do projeto na nuvem.

### Importante!

Antes de começarmos, você deverá cumprir alguns passos preliminares.

1. Você deverá criar uma conta aqui, no [GitHub](https://github.com/signup). Caso já possua uma conta, pode pular essa preliminar.
2. Você deverá criar uma conta na [Heroku](https://id.heroku.com/signup), o servidor no qual hospedaremos o nosso aplicativo.
3. (Opcional) Você deverá criar uma conta na [Random.org](https://accounts.random.org/create). Caso não esteja interessado em criar uma conta no Random.org e usar o serviço de geração de números aleatórios, não tem problema! O sistema se adapta a isso e passa a usar a geração padrão de números pseudoaleatórios.
4. Você deverá fazer o [fork](https://github.com/alyssapiresfernandescefet/openrpg/fork) desse repositório para a sua conta.

### Sobre o Random.org (Opcional)

Caso tenha optado por não usar os serviços do Random.org, pode pular essa seção.

Após criar uma conta no Random.org, você deverá criar um serviço de API. Siga os passos:

1. Acesse a [sua conta](https://accounts.random.org/) no Random.org.
2. Procure por "API Services" e clique em "Use this service".
3. Crie um novo serviço, clicando em "Create a new API key".
4. Digite o nome do serviço (para fins de identificação, é recomendável que o nome do serviço seja "nomeDoSeuApp_random") e clique em "Create".
5. Após criar, clique no novo item que foi criado na lista.
6. Copie o primeiro item, "API Key", e salve em algum lugar do seu computador (em um bloco de notas). Você vai precisar dessa chave mais para frente.

### Iniciando

1. Primeiramente, você deve acessar o seu [Dashboard](https://dashboard.heroku.com/) na Heroku e criar um novo App. Você deverá preencher o nome do aplicativo e a região em que o aplicativo irá ser hospedado. Digite um nome simples mas que lembre o nome do seu RPG, porque esse nome também será o endereço do seu site. Selecione a região mais próxima e clique em Criar App.

2. Após isso, você deverá acessar a aba de Deploy. Em "Deployment method", selecione GitHub e conecte a sua conta do GitHub ao Heroku. Depois de conectada, você se direcionará à seção de "Connect to GitHub", logo abaixo de "Deployment method". Nessa seção, em repo-name, você deverá digitar "openrpg" e clicar em "Search". Depois de alguns segundos, um item com o nome do seu GitHub / openrpg vai aparecer, e logo ao lado um botão nomeado "Connect". Clique no botão.

3. Depois de conectar o seu repositório GitHub ao Heroku, você precisará configurar o aplicativo para uso. Acesse a aba Settings, e na segunda seção, em "Config Vars", clique em "Reveal Config Vars". Após isso, dois campos de textos irão aparecer com o nome KEY e VALUE, respectivamente. Você deverá preencher alguns campos agora. Abaixo, haverá uma tabela dos campos que devem ser preenchidos. Ao preencher cada valor, clique em "Add" para adicioná-los ao aplicativo.

|            KEY            |                                                                VALUE                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| SESSION_SECRET            | Um valor aleatório de no mínimo 32 dígitos, que pode ser gerado [aqui](https://onlinehashtools.com/generate-random-sha256-hash). |
| RANDOM_ORG_KEY (Opcional) | A chave de API da Random.org. Se lembra da chave que pedi para salvar? Cole ela nesse campo.                                     |

Caso tenha feito tudo corretamente, a seção "Config Vars" deverá estar semelhante a essa aqui:

![image](https://user-images.githubusercontent.com/71353674/160728220-49c66b8f-6634-46f2-a55e-78cf698ef810.png)

### Configurando o Banco de Dados (Heroku Add-ons)

Antes de utilizar o seu aplicativo, você precisa configurar o seu banco de dados pela Heroku.

Primeiramente, você irá precisar de um cartão de crédito. Não se preocupe, a Heroku não te cobra nada, ela só precisa de um cartão para firmar um contrato com um provedor de banco de dados. No caso, o provedor que escolheremos é grátis, então não será cobrado nada no cartão. Os provedores de banco de dados da Heroku são totalmente confiáveis e muito eficientes.

Siga esses passos:

1. Acesse a aba de Resources. Na seção Add-ons, você irá procurar por "ClearDB MySQL".

![image](https://user-images.githubusercontent.com/71353674/160009589-58dd6722-0b31-45bc-b4db-65734460627e.png)

2. Selecione esse item e logo após surgirá uma tela de planos. Selecione o plano Ignite - Free e clique em "Submit Order Form". Caso ele peça seu cartão de crédito, preencha.
3. Após um tempo, a ordem de "compra" irá suceder, e o banco de dados estará instalado e pronto para uso!

### Fazendo o Deploy

Após configurar a Heroku e configurar o banco de dados, você irá acessar novamente a página de Deploy e, no final da página, clicar em "Deploy Branch". Espere o seu deploy terminar, e bom jogo!

Para acessar o seu app, role até o topo da página e clique em "Open App". Compartilhe a url do aplicativo para todos os jogadores!
