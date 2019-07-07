export var adminNavbarLinks = [
    {
        iconClassName: 'fas fa-chart-pie link__icon',
        title: 'Аналитика',
        href: '/admin/analitics'
    },
    {
        iconClassName: 'fa fa-table link__icon',
        title: 'Таблицы',
        href: '#',
        links: [
            {
                iconClassName: 'fa fa-table link__icon',
                title: 'Тест',
                href: "/admin/tables/test"
            }
        ]
    }
];
//# sourceMappingURL=admin-navbar.config.js.map