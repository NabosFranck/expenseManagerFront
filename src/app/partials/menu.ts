export const menu = [
    {
        title: 'Accueil',
        link: 'Home',
        icon: 'home-outline',
        home: true
    },
    {
        title : 'Frais',
        link: 'Frais',
        icon: 'menu',
        children: [
            {
                title: 'Liste',
                link: 'frais/liste'
            },
            {
                title: 'Ajouter',
                link: 'frais/ajouter'
            }
        ]
    },
    {
        title : 'Clients',
        link: 'Clients',
        icon: 'menu',
        children: [
            {
                title: 'Liste',
                link: 'clients/liste'
            },
            {
                title: 'Ajouter',
                link: 'clients/ajouter'
            }
        ]
    }
       
]