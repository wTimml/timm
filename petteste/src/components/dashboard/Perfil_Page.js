import React from 'react'
import './Perfil_Page.css'
import TabsPerfil from '../layout/tabsPerfil'

export default function PerfilPage({ name, doados, adotados, cadastrados })  {

    return (

        <div className="body">

            <div className="Container">
                <div className="header">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>

                <div className="perfilMain">
                    <div className="row">
                        <div className="perfilLeft col s4 ">
                            <div className="photo-perfilLeft">
                                <img className="photo" src="https://pbs.twimg.com/profile_images/378800000435627552/b5de73bd2853881438d261ad7994e0b3.jpeg" />
                                <div className="perfilActive"></div>
                            </div>
                            <h4 className="perfilName" >{name}</h4>
                            {// <p className="info">UI/UX Designer</p>
                             //<p className="info">jane.doe@gmail.com</p>
                            }
                            <div className="">
                                <h6 className='perfilSubName' >Pets</h6>
                            </div>
                            <div className="stats row">
                                <div className="stat col s12 m4" >
                                    <p className="number-stat">{cadastrados}</p>
                                    <p className="desc-stat">Cadastrados</p>
                                </div>
                                <div className="stat col s12 m4">
                                    <p className="number-stat">{doados}</p>
                                    <p className="desc-stat">Doados</p>
                                </div>
                                <div className="stat col s12 m4" style={{ "padding-left": "50px;" }}>
                                    <p className="number-stat">{adotados}</p>
                                    <p className="desc-stat">adotados</p>
                                </div>
                            </div>
                            <p className="desc">Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and moutains.</p>
                            {/*<div className="social">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                                <i className="fa fa-tumblr-square" aria-hidden="true"></i>
                            </div>*/}
                        </div>
                        <div className="perfilRight col s12 m8 ">
                           <TabsPerfil/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
