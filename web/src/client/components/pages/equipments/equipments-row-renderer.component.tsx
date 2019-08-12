import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import ImageGallery from 'react-bnb-gallery';
import Layout from '../../layout/layout.component';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import Slider from 'react-slick';


import * as styles from './equipments-row-renderer.component.styles.css';

export default (props: any) => {
    const languageContext = useContext(LanguageContext);
    const [isOpenGallery, changeImageGalleryState] = useState(false);
    const [currentImageIndex, changeCurrentImageIndex] = useState(0);
    const toggleImageGallery = () => changeImageGalleryState(!isOpenGallery);

    const title = getCellValueByInternalName(props.row, 'title', languageContext.locale);
    const image = getCellValueByInternalName(props.row, 'image');
    const imageGallery = getCellValueByInternalName(props.row, 'image-gallery');
    const description = getCellValueByInternalName(props.row, 'text', languageContext.locale);

    const photos = [image].concat(imageGallery || [])
        .map((img: string) => ({
            photo: img,
            caption: ''
        }));

    console.log(photos);

    return (
        <Layout>
            <div className={styles.Equipment}>
                <span className={styles.Equipment__title}>
                    {title}
                </span>
                <div className={cn("row", styles.Equipment__descriptionContainer)}>
                    <div className={cn('col-md-8', styles.Equipment__image)}>
                        <div className={styles.Wrapper}>
                            <div className={styles.GalleryWrapper}>
                                <Slider className={styles.Gallery}
                                afterChange={changeCurrentImageIndex}>
                                    {photos.map((img: any) => {
                                        return (
                                            <div>
                                                <div className={styles.Gallery__imgContainer}
                                                     style={{backgroundImage: `url("${img.photo}")`}}>
                                                    <button onClick={toggleImageGallery}
                                                            className={styles.Gallery__zoomBtn}></button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div dangerouslySetInnerHTML={{__html: description}}></div>
                    </div>
                </div>

                <ImageGallery show={isOpenGallery}
                              onClose={toggleImageGallery}
                              activePhotoIndex={currentImageIndex}
                              photos={photos}/>
            </div>
        </Layout>
    );
}
