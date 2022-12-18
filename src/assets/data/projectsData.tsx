const mysferic = (require)('../images/mysferic.png');
const mysburguer = (require)('../images/mbu.png');
const myspet = (require)('../images/myspet.png');
const coffyst = (require)('../images/cofist.png');
const managementDashboard = (require)('../images/management-dashboard.png');
const imc = (require)('../images/imc.png');
const pokedex = (require)('../images/pkdex.png');
const drmyst1 = (require)('../images/drmyst1.png');
const lojaDeNatal = (require)('../images/lojadenatal.png');
const digidex = (require)('../images/digidex.png');
const netflixClone = (require)('../images/mysflix.png');

const projects = [
    {
        id: 1,
        name: 'Mysferic',
        description: 'Loja de perifericos com algumas bases na loja da Kabum',
        image:`${mysferic}`,
        link: 'https://myst1-dev1.github.io/MysFeric/'
    },
    {
        id: 2,
        name: 'MysBurguer',
        description: 'Hamburgueria feita como primeira prática em bootstrap',
        image:`${mysburguer}`,
        link: 'https://myst1-dev1.github.io/Mysburguer/'
    },
    {
        id: 3,
        name: 'MysPet',
        description: 'Loja de PetShop simples com HTML CSS JAVACRIPT',
        image:`${myspet}`,
        link: 'https://myst1-dev1.github.io/MysPet/'
    },
    {
        id: 4,
        name: 'Coffyst',
        description: 'Site de cafeteria para praticar o Web Design',
        image:`${coffyst}`,
        link: 'https://myst1-dev1.github.io/Coffyst/'
    },
    {
        id: 5,
        name: 'Management Dashboard',
        description: 'Layout responsivo de um sistema de gerenciamento de projetos',
        image:`${managementDashboard}`,
        link: 'https://myst1-dev1.github.io/Management-Dashboard/'
    },
    {
        id: 6,
        name: 'IMC',
        description: 'Calculo de Indice de Massa corporal com javascript',
        image:`${imc}`,
        link: 'https://myst1-dev1.github.io/IMC/'
    },
    {
        id: 7,
        name: 'Pokedex',
        description: 'Primeira pratica com react e consumo de API',
        image:`${pokedex}`,
        link: 'https://myspokedex.netlify.app/'
    },
    {
        id: 8,
        name: 'Covid Site',
        description: 'Site sobre a Covid-19, baseado no teste de uma empresa',
        image:`${drmyst1}`,
        link: 'https://myst1-dev1.github.io/Dr-Myst1/'
    },
    {
        id: 9,
        name: 'Natal Shop',
        description: 'As vendas de natal começaram, feliz natal',
        image:`${lojaDeNatal}`,
        link: 'https://myst1-dev1.github.io/Myst-Noel/'
    },
    {
        id: 10,
        name: 'DigiDex',
        description: 'Site consumindo API com filtro e paginação',
        image:`${digidex}`,
        link: 'https://projetodigimon.netlify.app/'
    },
    {
        id: 11,
        name: 'Netflix Clone',
        description: 'Clone do netflix para aprimorar o aprendizado em react',
        image:`${netflixClone}`,
        link: 'https://mysflix.netlify.app/'
    },
    
]

export default projects;