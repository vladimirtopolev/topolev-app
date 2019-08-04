import * as React from 'react';
import cn from 'classnames';
import * as styles from './advantages.component.styles.css';

interface Advantage {
    image: any,
    text: string,
    title: string
}

const ADVANTAGES: Advantage[] = [
    {
        image: require( '../../../../../../sources/client/adProject.png'),
        title: 'Проектирование',
        text: `
        Мы можем предложить как стандартную комплектацию стендов,
        которые позволяют подготовиться к участию за несколько дней,
        а также разаработать индивидуальный проект исходя из бюджета
        и пожеланий`
    }, {
        image: require( '../../../../../../sources/client/adDesign.png'),
        title: 'Дизайн',
        text: `
        Стенды украшаются различной полиграфической продукцией:
        печтатью полотен, наклейками различного вида исполнения,
        баннерами, растяжками, разрабатывается система освещения `
    }, {
        image: require( '../../../../../../sources/client/adBuild.png'),
        title: 'Строительство',
        text: `
        Профессиональная команда устанавливает стенд,
        обеспечивая его электроснабжением и водоснабжением.
        Стенд собирается в помещении выставки незадолго до ее начала.  `
    }
];
export default () => {

    return (

        <div className={cn(styles.Advantages, 'container')}>
            <div className="row">
                {ADVANTAGES.map((advantage, i) => (
                    <div className={cn(styles.Advantages__itemContainer, 'col-md-4')} key={i}>
                        <div className={styles.Advantage}>
                            <div className={styles.Advantage__label}>
                                <img className={styles.Advantage__img} src={advantage.image}/>
                            </div>
                            <div className={styles.Advantage__title}>{advantage.title}</div>
                            <div className={styles.Advantage__description}>{advantage.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
