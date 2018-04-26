import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="/image.jpg" />
    </Parallax>
);
