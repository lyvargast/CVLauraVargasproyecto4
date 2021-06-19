import React from "react"
import ReactDOM from "react-dom"
import Nav from "../nav/nav"
import Bodycv from "../bodycv/bodycv"
import Footer from "../footer/footer"

const Cv = () =>{
	return(
	<div>
		<Nav />
	    <Bodycv />
	    <Footer />
	 </div>
   
	);
}

export default Cv;