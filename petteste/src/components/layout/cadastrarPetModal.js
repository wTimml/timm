import React from 'react'
import M from 'materialize-css'

class cadastrarPetModal extends React.Component {
    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });

        return (

            <div>

                <a class="waves-effect waves-light btn-floating btn-large modal-trigger orange" href="#modal1">
                    <i class="material-icons">add</i>
                </a>


                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default cadastrarPetModal