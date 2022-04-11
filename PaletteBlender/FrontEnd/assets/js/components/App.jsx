import React, { useContext, useEffect, useRef, useState } from 'react';

import { PalletteProvider, PaletteContext } from './PaletteContext';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';
import Sidebar from './content/Sidebar';
import PaletteEditor from './paletteInterface/PaletteEditor';
import Toolbox from './paletteInterface/Toolbox';
import Documentation from './content/Documentation';
import Guide from './content/Guide';

const ThemedContent = () => {
    const [ colorPalette ] = useContext(PaletteContext);
    // TODO: Replace page state with React Router links
    const [ currentPage, setCurrentPage ] = useState('main');

    const bgColor = colorPalette.greys[8].color;
    document.body.style.backgroundColor = bgColor;

    const mainPage = () => {
        return (
            <React.Fragment>
                <ContentContainer colorPalette={colorPalette} />
                <Sidebar colorPalette={colorPalette} />
            </React.Fragment>
        );
    };

    const documentation = () => {
        return (
            <Documentation colorPalette={colorPalette} />
        );
    }

    const guide = () => {
        return (
            <Guide colorPalette={colorPalette} />
        );
    };

    const getContent = () => {
        let content;
        switch (currentPage) {
            case 'main':
                content = mainPage();
                break;
            case 'documentation':
                content = documentation();
                break;
            case 'guide':
                content = guide();
                break;
            default:
                content = mainPage();
        }

        return content;
    };

    return (
        <React.Fragment>
            <SearchBar colorPalette={colorPalette} />
            <Navbar colorPalette={colorPalette} setCurrentPage={setCurrentPage} />
            <SubNav colorPalette={colorPalette} />
            <BreadCrumbNav colorPalette={colorPalette} />
            <div className="content-wrapper">
                {getContent()}
            </div>
        </React.Fragment>
    );
}

function App() {
    const toolboxModal = useRef(null);

    return (
        <PalletteProvider>
            <ThemedContent />
            <PaletteEditor toolboxModal={toolboxModal} />
            <Toolbox toolboxModal={toolboxModal} />
        </PalletteProvider>
    );
};

export default App;
