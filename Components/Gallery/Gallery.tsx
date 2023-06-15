import React, { useState } from 'react';
import GallerySection from '../GallerySection/GallerySection';

const Gallery = (props: {
    title: string;
    description: string;
    tabs: {
        title: string;
        content: JSX.Element;
    }[];
}) => {
    const { title, description, tabs } = props;

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
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

    return (
        <div className="Gallery ">
            <div style={{ background: '#FFE588' }} className="py-5">
                <div className='my-5'>
                    <div className="flex justify-content-between mx-7">
                        <h3 className="text-2xl font-normal">{title}</h3>
                        <h2 className="text-3xl font-normal">TRAVELO</h2>
                    </div>
                    <div>
                        <h4 className="mx-7 font-normal mt-1">{description}</h4>
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

export default Gallery;
