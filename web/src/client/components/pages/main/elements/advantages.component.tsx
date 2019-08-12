import * as React from 'react';
import cn from 'classnames';
import * as styles from './advantages.component.styles.css';
import {useContext} from 'react';
import {LanguageContext} from '../../../../../common/helpers/with-language-context.render-props-component';

interface Advantage {
    image: any,
    text: string,
    title: string
}

const ADVANTAGES: Advantage[] = [
    {
        image: require( '../../../../../../sources/client/adProject.png'),
        title: 'engineering',
        text: 'engineeringDescription'
    }, {
        image: require( '../../../../../../sources/client/adDesign.png'),
        title: 'design',
        text: 'designDescription'
    }, {
        image: require( '../../../../../../sources/client/adBuild.png'),
        title: 'building',
        text: 'buildingDescription'
    }
];
export default () => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    return (

        <div className={cn(styles.Advantages, 'container')}>
            <div className="row">
                {ADVANTAGES.map((advantage, i) => (
                    <div className={cn(styles.Advantages__itemContainer, 'col-md-4')} key={i}>
                        <div className={styles.Advantage}>
                            <div className={styles.Advantage__label}>
                                <img className={styles.Advantage__img} src={advantage.image}/>
                            </div>
                            <div className={styles.Advantage__title}>{dictionary[advantage.title]}</div>
                            <div className={styles.Advantage__description}>{dictionary[advantage.text]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
