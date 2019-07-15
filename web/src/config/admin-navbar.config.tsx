export interface NavbarLink {
    title: string,
    iconClassName: string,
    href: string,
    links?: NavbarLink[]
}


export const adminNavbarLinks: NavbarLink[] = [
    {
        iconClassName: 'fas fa-chart-pie link__icon',
        title: 'Аналитика',
        href: '/admin/analitics'
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Заказанные звонки',
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
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Таблицы',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Тест',
                href: `/admin/tables/test`
            }
        ]
    }
];
