import * as React from 'react';
import {Property} from '../../../../modules/properties/schema/models';
import getPropertyValueByName from '../../../../common/modules/properties/helpers/getPropertyValueByName';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
interface FooterProps {
    properties?: Property[]
}
export default ({properties}:FooterProps) => {
    const languageContext = useContext(LanguageContext);

    const country = getPropertyValueByName(properties, 'country', languageContext.locale);
    const street = getPropertyValueByName(properties, 'street', languageContext.locale);
    const phone = getPropertyValueByName(properties, 'phone1');
    const email = getPropertyValueByName(properties, 'mail');
    const copyright = getPropertyValueByName(properties, 'copyright', languageContext.locale);

    return (
        <div className="footer">
            <div className="footer__container container">
                <div className="footer__address">
                    {country}<br/>
                    {street}<br/>
                    тел. {phone}<br/>
                    e-mail: {email}
                </div>
                <div className="footer__copyright ">
                    © {copyright}
                </div>
            </div>
        </div>
    );
}
