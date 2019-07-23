export interface ClientNavbarLink {
    title: string,
    href: string
}

export const clientNavbarLinks: ClientNavbarLink[] = [
    {
        title: 'Информация',
        href: '#'
    },
    {
        title: 'Стенды',
        href: '#'
    },
    {
        title: 'Оборудование',
        href: '/equipments'
    },
    {
        title: 'Новости',
        href: '/news'
    },
    {
        title: 'Контакты',
        href: '/contact'
    }
]
