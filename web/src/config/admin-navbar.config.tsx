export interface NavbarLink {
    title: string,
    iconClassName: string,
    href: string,
    links?: NavbarLink[]
}


export const adminNavbarLinks: NavbarLink[] = [
    {
        iconClassName: 'fas fa-info-circle link__icon',
        title: 'Общая информация',
        href: '/admin/properties/dashboard'
    },
    {
        iconClassName: 'fas fa-rss link__icon',
        title: 'Новости',
        href: '/admin/tables/news',
    },
    {
        iconClassName: 'fas fa-rss link__icon',
        title: 'Портфолио стендов',
        href: '/admin/tables/portfolio',
    },
    {
        iconClassName: 'fas fa-tools link__icon',
        title: 'Оборудование',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Строительство стендов',
                href: `/admin/tables/buildingStands`
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Наполнение стендов',
                href: `/admin/tables/fullingStands`
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Оформление стендов',
                href: `/admin/tables/design`
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Энергоснабжение, освещение',
                href: `/admin/tables/electricity`
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Презентации, семинары',
                href: `/admin/tables/presentations`
            }
        ]
    },
    {
        iconClassName: 'fas fa-handshake link__icon',
        title: 'Партнеры',
        href: `/admin/tables/partners`
    },
    {
        iconClassName: 'fas fa-phone link__icon',
        title: 'Сообщения клиентов',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Панель управления',
                href: `/admin/orderCalls/dashboard`
            },
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Заархивированные звонки',
                href: `/admin/orderCalls`
            }
        ]
    }
    /*
    {
        iconClassName: 'fas fa-chart-pie link__icon',
        title: 'Аналитика',
        href: '/admin/analitics'
    },*/
];
