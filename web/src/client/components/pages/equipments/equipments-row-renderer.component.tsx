import * as React from 'react';
import {useState} from 'react';
import ImageGallery from 'react-bnb-gallery';
import Layout from '../../layout/layout.component';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';

export default (props: any) => {
    const languageContext = useContext(LanguageContext);
    const [isOpenGallery, changeImageGalleryState] = useState(false);
    const toggleImageGallery = () => changeImageGalleryState(!isOpenGallery);

    const title = getCellValueByInternalName(props.row, 'title', languageContext.locale);
    const image = getCellValueByInternalName(props.row, 'image');
    const imageGallery = getCellValueByInternalName(props.row, 'image-gallery');
    const description = getCellValueByInternalName(props.row, 'text', languageContext.locale);

    const photos = (imageGallery||[]).map((img: string) => ({
        photo: img,
        caption: ''
    }));

    return (
        <Layout>
            <div>
                {title}
                <img src={image}/>
                <ImageGallery show={isOpenGallery}
                              onClose={toggleImageGallery}
                              photos={photos}/>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
        </Layout>
    );
}
