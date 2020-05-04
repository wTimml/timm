import React, { Component } from 'react'
import "./galeriaPet.css"
import ImageGallery from 'react-image-gallery';


//https://www.npmjs.com/package/react-image-gallery

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];




class galeriaPet extends Component {

    render() {


        return (
            <div className="col s12 m6">
			    <ImageGallery items={images}/>
			</div>
                )
	}
}

export default galeriaPet;