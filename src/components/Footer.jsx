import React from 'react';
import "../../bootstrap/css/bootstrap.css";
import "./footer-view.css"

function Footer() {
    return (
	<div>
		<div style={{marginBottom: "50px"}} />
		<div className="footer jumbotron jumbotron-fluid bg-dark">
			<div className="container text-center">
				<p>Made by Moslem Ouled Sghaier (Bois de boulogne) and modified by Guillaume Goffaux
				</p>
			</div>
		</div>
	</div>
    );
}

export default Footer;
