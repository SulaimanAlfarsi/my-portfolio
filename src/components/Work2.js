import pic1 from "../Images/simple1.png"
import pic2 from "../Images/bard.png"

import {Link} from "react-router-dom"


const ProjectCardData = [
    {
        imgsrc: pic1,
        title:"Online Medicine Shopping",
        text: "I develop the website use coding techniques from pure PHP and HTML as desired.",
        view: <Link to="/picturegallery">View</Link>
    },
    {
        imgsrc: pic2,
        title:"Bared",
        text: "The Ice Tea project called Bard is a web application built with React, HTML, and CSS, offering a refreshing experience for tea enthusiasts.",
        view: <Link to="/video">View</Link>
    }

];

export default ProjectCardData;