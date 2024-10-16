import React from 'react';

import './error.css';




const Error = ({joinUsFromChild}) => {
    joinUsFromChild(false);

    return (
                <div id="container-404" class="container-fluid">
                    <div class="row-fluid">
                        <div class="col-md-12 text-center text-404">
                            <h1>GAME OVER</h1>
                            <h3>Error 404 this page could not be found.</h3>
                            <a href="index.html" class="button">Take Me Back</a>
                        </div>
                    </div>
                </div>
        
            );
};
    
export default Error;