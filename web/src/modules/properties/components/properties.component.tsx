import * as React from 'react';
import * as _ from 'lodash';
import {useState, Fragment, useEffect} from 'react';
import cn from 'classnames';
import {Property} from '../schema/models';
import {Locale} from '../../table/schema/models';
import Value from '../../table/components/cells/value.component';
import * as styles from './properties.component.styles.css';
import {LOCALES}from '../../../config/locales'

interface PropertiesProps {
    properties: Property[],
    updateProperties: (properties: Property[]) => void,
    locale: Locale
}

interface GroupedProperties {
    [K: string]: Property[]
}

export default ({properties, locale, updateProperties}: PropertiesProps) => {
    const [isEditMode, toggleEditMode] = useState(false);
    const [propertiesInMemory, changePropertiesInMemory] = useState<Property[]>(properties);

    useEffect(() => {
        changePropertiesInMemory(properties);
    }, [properties]);

    const createChangeValueEvent = (propertyId: string) => {
        return (value: any, locale?: Locale) => {
            const newProperies =
                propertiesInMemory
                    .map(property => {
                        if (property._id !== propertyId) {
                            return property;
                        }
                        const newValue = locale
                            ? _.isObject(property.value) ? {
                                ...property.value,
                                [locale.key]: value
                            } : LOCALES.reduce((memo, locale)=> ({...memo, [locale.key]: value}), {})
                            : value;
                        return {...property, value: newValue};
                    });
            console.log(newProperies);
            changePropertiesInMemory(newProperies);
        };
    };

    const groupedProperties = propertiesInMemory.reduce<GroupedProperties>((memo: GroupedProperties, property) => {
        const group = property.group || property.name;
        return {...memo, [group]: (memo[group] || []).concat(property)};
    }, {});


    const toolbar =
        <Fragment>
            {!isEditMode && <button className="button" onClick={() => toggleEditMode(true)}>Редактировать</button>}
            {isEditMode &&
            <button className="button" onClick={() => toggleEditMode(false)}>Назад без сохранения</button>}
            {isEditMode &&
            <button className="button" onClick={() => {
                updateProperties(propertiesInMemory);
                toggleEditMode(false);
            }}>Сохранить
                изменения</button>}
                </Fragment>;

                return (
                <div className={styles.Properties}>
                <div className={styles.Properties__toolbar}>
                {toolbar}
                </div>
                {Object.keys(groupedProperties).map(group => {
                    const properties = groupedProperties[group];
                    return (
                        <div className={styles.Group} key={group}>
                            {properties.length > 1
                            && <div className={styles.Group__title}>{properties[0].titleGroup}</div>}
                            <div className={styles.Group__content}>
                                {properties.map(property => (
                                    <div className={cn(styles.Property, {
                                        [styles.Property_asGroup]: properties.length === 1
                                    })} key={property._id}>
                                        <div className={styles.Property__title}>{property.name}</div>
                                        <div className={styles.Property__content}>
                                            <Value type={property.type}
                                                   value={property.value}
                                                   isEditMode={isEditMode}
                                                   changeValue={createChangeValueEvent(property._id)}
                                                   locale={locale}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
                <div className={styles.Properties__toolbar}>
                {toolbar}
                </div>
                </div>
                );
            };
            ;
            ;
            ;;
