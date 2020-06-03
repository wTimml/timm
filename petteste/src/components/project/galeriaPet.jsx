import React  from 'react'
import "./galeriaPet.css"
import ImageGallery from 'react-image-gallery';
import { Pets } from './pets'

import { useParams } from 'react-router';


//https://www.npmjs.com/package/react-image-gallery




function GaleriaPet() {

    const { id } = useParams()
    

    const _getStaticImages = () => {


        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${Pets[id].img}`,
                thumbnail: `${Pets[id].img}`
            });
        }
        return images;
    }
    const images = [


    ].concat(_getStaticImages());

    return (
        <div className="col s12 m6">
            <ImageGallery items={images} />
        </div>
    )

}

export default GaleriaPet;