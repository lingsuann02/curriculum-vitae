import * as React from 'react';
import './pagination.css';

interface PaginationProps {
    currentIndex: number;
    items: Array<object>;
    onChangeCurrentIndex: Function;
}

class Pagination extends React.Component<PaginationProps, object> {

    constructor(props: PaginationProps) {
        super(props);
    }

    pageTo = (index: number) => {
        if (index < 0 || index >= this.props.items.length) {
            return;
        }
        this.props.onChangeCurrentIndex(index);
    }

    render() {
        return (
            <div className="pagination-component">
                <div className={(this.props.currentIndex === 0) ? 'controls previous disabled' : 'controls previous'}>
                    <i className="fa fa-angle-left"
                       aria-hidden="true"
                       onClick={() => this.pageTo(this.props.currentIndex - 1)}/>
                </div>
                <div className="paginator">
                    {
                        this.props.items.map((item, i) => {
                            return (
                                <span key={'page-' + i}
                                      className={(i === this.props.currentIndex) ? 'active page' : 'page'}
                                      onClick={() => this.pageTo(i)}>
                            {i + 1}
                        </span>
                            );
                        })
                    }
                </div>
                <div className={(this.props.currentIndex === this.props.items.length - 1)
                    ? 'controls next disabled' : 'controls next'}>
                    <i className="fa fa-angle-right"
                       aria-hidden="true" onClick={() => this.pageTo(this.props.currentIndex + 1)}/>
                </div>
            </div>
        );
    }
}

export default Pagination;