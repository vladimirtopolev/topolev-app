import * as React from 'react';
import * as moment from 'moment';
import cn from 'classnames';
import ImageGallery from 'react-bnb-gallery';
import withAdminTableData, {WithAdminTableDataHoc} from '../../../../common/helpers/with-admin-table-data.hoc';
import Layout from '../../layout/layout.component';
import {Row} from '../../../../modules/table/schema/models';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {useContext, useState} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';

import * as styles from './portfolio.component.styles.css';

const Portfolio = ({adminTableData}: WithAdminTableDataHoc) => {
    const languageContext = useContext(LanguageContext);
    const [isOpenGallery, changeGalleryState] = useState(false);
    const [activeImgIndex, changeActiveIndexImg] = useState(0);

    const toggleImageGallery = () => changeGalleryState(!isOpenGallery);

    const groupedByYears: { [K: string]: Row[] } = adminTableData.reduce((memo: { [K: string]: Row[] }, itemRow: Row) => {
        const date = getCellValueByInternalName(itemRow, 'date');
        const year = moment(date).year();
        return Object.assign(memo, {
            [year]: (memo[year] || []).concat(itemRow)
        });
    }, {});

    const photos = adminTableData.reduce((memo: any, itemRow: Row) => {
        const image = getCellValueByInternalName(itemRow, 'image');
        const imageMockup = getCellValueByInternalName(itemRow, 'image_mockup');
        const caption = getCellValueByInternalName(itemRow, 'title', languageContext.locale);
        return memo.concat({
            photo: image,
            caption
        }, {
            photo: imageMockup,
            caption: 'Эскиз ' + caption
        });
    }, []);

    return (
        <Layout>
            {Object.keys(groupedByYears)
                .map(year => {
                    return (
                        <div key={year}
                             className={styles.PortfolioGroup}>
                            <p className={styles.PortfolioGroup__title}>
                                {year}
                            </p>
                            <div className={cn(styles.PortfolioGroup__content, 'row')}>
                                {
                                    groupedByYears[year].map(item => {
                                        const date = getCellValueByInternalName(item, 'date');
                                        const title = getCellValueByInternalName(item, 'title', languageContext.locale);
                                        const image = getCellValueByInternalName(item, 'image');
                                        const imageMockup = getCellValueByInternalName(item, 'image_mockup');
                                        return (
                                            <div key={item._id}
                                                 className={cn(styles.Portfolio, 'col-md-6')}>
                                                <div className={styles.Portfolio__imageContainer}>
                                                    <div className={styles.Portfolio__mainImage}
                                                         onClick={() => {
                                                             const index = photos.findIndex((photo:any) => {
                                                                   return photo.photo === image || photo.photo === imageMockup
                                                             });
                                                             console.log(index);
                                                             changeActiveIndexImg(index === -1 ? 0 : index);
                                                             toggleImageGallery();
                                                         }}>
                                                        <img src={image}/>
                                                    </div>
                                                    <img src={imageMockup} className={styles.Portfolio__mockupImage}/>
                                                </div>
                                                <div className={styles.Portfolio__description}>
                                                    <p className={styles.Portfolio__title}>
                                                        {title}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })}
            <ImageGallery show={isOpenGallery}
                          onClose={toggleImageGallery}
                          activePhotoIndex={activeImgIndex}
                          photos={photos}/>
        </Layout>
    );
};

export default withAdminTableData<any>('portfolio')(Portfolio);
