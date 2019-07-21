import * as React from 'react';

interface Advantage {
    image: any,
    text: string,
    title: string
}

const ADVANTAGES: Advantage[] = [
    {
        image: require('../../../../../../sources/client/ad-project.png'),
        title: 'Проектирование',
        text: `
        Мы можем предложить как стандартную комплектацию стендов,
        которые позволяют подготовиться к участию за несколько дней,
        а также разаработать индивидуальный проект исходя из бюджета
        и пожеланий`
    }, {
        image: require('../../../../../../sources/client/ad-design.png'),
        title: 'Дизайн',
        text: `
        Стенды украшаются различной полиграфической продукцией:
        печтатью полотен, наклейками различного вида исполнения,
        баннерами, растяжками, разрабатывается система освещения `
    }, {
        image: require('../../../../../../sources/client/ad-build.png'),
        title: 'Строительство',
        text: `
        Профессиональная команда устанавливает стенд,
        обеспечивая его электроснабжением и водоснабжением.
        Стенд собирается в помещении выставки незадолго до ее начала.  `
    }
];
export default () => {

    return (

        <div className="advantages container">
            <div className="advantages__container row">
                {ADVANTAGES.map((advantage, i) => (
                    <div className="advantages__item-container col-md-4" key={i}>
                        <div className="advantage">
                            <div className="advantage__label">
                                <img className="advantage__img" src={advantage.image}/>
                            </div>
                            <div className="advantage__title">{advantage.title}</div>
                            <div className="advantage__description">{advantage.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
