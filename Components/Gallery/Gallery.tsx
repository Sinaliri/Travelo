import React, { useState } from 'react';
import GallerySection from '../GallerySection/GallerySection';

const Gallery = () => {
    const tabs = [
        {
            title: 'Top',
            content: (
                <div>
                    <GallerySection introduction={false} /> <GallerySection introduction={false} />
                </div>
            ),
        },
        {
            title: 'Recent',
            content: (
                <div>
                    <GallerySection introduction={false} generateRandomOrder={true} />{' '}
                    <GallerySection introduction={false} generateRandomOrder={true} />
                </div>
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="Gallery ">
            <div style={{background : '#FFE588'}} className='py-5'>
                <div>
                    <div className="flex justify-content-between mx-7">
                        <h3 className="text-2xl font-normal"> Our Gallery </h3>
                        <h2 className="text-3xl font-normal"> TRAVELO </h2>
                    </div>
                    <div>
                        <h4 className="mx-7 font-normal mt-1"> Share your happy moments </h4>
                    </div>
                </div>

                <div>
                    <div className="mt-2 text-2xl" style={tabContainerStyles}>
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                style={{
                                    ...tabStyles,
                                    borderBottom: activeTab === index ? '2px solid #000' : 'none',
                                }}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.title}
                            </div>
                        ))}
                        <div
                            style={{
                                ...tabIndicatorStyles,
                                left: `${activeTab * (100 / tabs.length)}%`,
                                width: `${100 / tabs.length}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-7" style={tabContentStyles}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

const tabContainerStyles: React.CSSProperties = {
    display: 'flex',
    borderBottom: '1px solid',
};

const tabStyles: React.CSSProperties = {
    padding: '10px 45px',
    cursor: 'pointer',
    margin: '0px 25px',
};

const tabIndicatorStyles: React.CSSProperties = {
    position: 'relative',
    height: '2px',
    backgroundColor: '#000',
    transition: 'left 0.3s ease',
    display: 'none',
};

const tabContentStyles: React.CSSProperties = {
    marginTop: '20px',
};

export default Gallery;
