import Gallery from "@/Components/Gallery/Gallery";
import GallerySection from "@/Components/GallerySection/GallerySection";

export default function Galley() {
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

    return (
        <div className='gallery' style={{ fontFamily: 'Inter' }}>
            <Gallery title="Our Gallery" description="Share your happy moments" tabs={tabs} />
        </div>
    )
}
