import React, {useState} from "react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import HeroComponent from "./components/Hero";
import PopularComponent from "./components/PopularPoducts";
import PopularCategory from "./components/PopularCategory";
import HelpingInfoComponent from "./components/helpingInfo";
import LawEnforcement from "../../commons/LawEnforcement"
import './components/home.css';

// layout
import RootLayout from '../../layout/RootLayout';

const Home = ()=>{
    const [heroHeight, setHeight] = useState(0);
	const [blurBackground, setBlurBackground] = useState(false);

    return(
        <div>
             <div className="main-home-container">
            <HeroComponent setHeight={setHeight} blurBackground={blurBackground}/>
            <PopularComponent blurBackground={blurBackground}/>
            <PopularCategory blurBackground={blurBackground}/>
            <HelpingInfoComponent blurBackground={blurBackground}/>
            <LawEnforcement blurBackground={blurBackground}/>
            <RootLayout heroHeight={heroHeight} setBlurBackground={setBlurBackground} blurBackground={blurBackground} />
        </div>
        </div>
    )
}

export default Home;