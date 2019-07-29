import {Property} from '../../../../modules/properties/schema/models';
import {Locale} from '../../../../modules/table/schema/models';
import {DEFAULT_LOCALE} from '../../../../config/locales';

export default (properties: Property[], propertyName: string, locale?: Locale) => {
    const property = (properties || []).find(prop => prop.internalName === propertyName);
    return property
        ? locale
            ? property.value[locale.key] || property.value[DEFAULT_LOCALE.key] || ''
            : property.value || ''
        : '';
}
