import * as React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


export default () => {
    return (
        <div>
            COntacts
            <YMaps>
                <Map defaultState={{ center: [53.849535, 27.471748], zoom: 17 }}>
                    <Placemark
                        geometry={[53.849535, 27.471748]}
                        properties={{
                            balloonContent: '&lt;img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" /&gt;',
                            iconContent: "Экспофорум"
                        }}
                        options={{
                            preset: "islands#greenStretchyIcon",
                            // Disabling the close balloon button.
                            balloonCloseButton: false,
                            // The balloon will open and close when the placemark icon is clicked.
                            hideIconOnBalloonOpen: false
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}
