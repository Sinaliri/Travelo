import React from 'react';
import pointer from '../../../assets/images/pointer.svg';
import Image from 'next/image';
import Link from 'next/link';

const CommonButtonWithRadius = (props: {
    text: string;
    bgColor: string;
    bothSideRadius?: boolean;
    fontSize?: number
    link?:string
    handler: () => void;

}) => {
    const { text, bgColor, bothSideRadius, fontSize,link , handler } = props;

    const borderRadiusStyle = bothSideRadius ? '50px' : '50px 0 0 50px';

    return (
        <div
            className={`${fontSize || "text-xs"} flex align-items-center cursor-pointer`}
            style={{
                color: '#000000',
                background: `${bgColor}`,
                width: 'fit-content',
                height: 'fit-content',
                padding: '13px 20px',
                gap: '10px',
                borderRadius: borderRadiusStyle,
                fontSize: `${fontSize}px`
            }}
            onClick={handler}
        >
            {<Link href={link || "#"}>{text}</Link>}
            <Image src={pointer} alt='' />
        </div>
    );
};

export default CommonButtonWithRadius;
