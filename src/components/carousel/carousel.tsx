import * as React from 'react';
import './carousel.css';

interface CarouselProps {
    currentIndex: number;
    items: Array<object>;
    speed: number;
    onChangeCurrentIndex: Function;
}

class Carousel extends React.Component<CarouselProps, object> {

    constructor(props: CarouselProps) {
        super(props);
    }

    pageTo = (index: number) => {
        this.props.onChangeCurrentIndex(index);
    }

    render() {
        return (
            <div className="carousel-component">
                {
                    this.props.items.map((item, i) => {
                        return (
                            <div key={'seat-' + i} className={(i === this.props.currentIndex) ? 'active seat' : 'seat'}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default Carousel;