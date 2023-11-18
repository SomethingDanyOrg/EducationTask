import React, { useRef } from 'react';
import './styles/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/header";
// @ts-ignore
import Logo from "./image/slider/photo.jpeg";
// @ts-ignore
import Photo from "./image/slider/slider.jpg";
import Topper from "./components/topper";
import PhotoSlider from './components/slider';
import News from "./components/news";
import CustomizedAccordions from "./components/contacts";
import Events from "./components/events";


function App() {

    const photos = [Photo , Photo , Photo, Photo];

    const blockRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        Home: useRef(null),
        News: useRef(null),
        Events: useRef(null),
        Contact: useRef(null),
    };

    const scrollToBlock = (blockId: string) => {
        const targetBlockRef = blockRefs[blockId];
        if (targetBlockRef.current) {
            targetBlockRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
      <body>
            <header>
                <Navbar logo={Logo} menuItems={['Home', 'News', 'Events', 'Contact']} scrollToBlock={scrollToBlock} />
            </header>
            <div ref={blockRefs.Home}>
                <Topper />
                <PhotoSlider photos={photos} />
            </div>
            <div ref={blockRefs.News}>
                <News/>
            </div>
            <div ref={blockRefs.Events}>
                <Events />
            </div>
            <div ref={blockRefs.Contact}>
                <CustomizedAccordions />
            </div>
            <footer>
                <p>
                    Hi, It's me!
                </p>
            </footer>
      </body>
  );
}

export default App;
