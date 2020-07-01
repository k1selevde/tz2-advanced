import React from 'react'
import './withBreadcrumb.scss'
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const withBreadcrumb = (WrappedComponent) => {
    class WithBreadcrumb extends React.Component {
        render() {
            return (
                <>
                    <Breadcrumb url={this.props.url}/>
                    <WrappedComponent {...this.props} />;
                </>
                )


        }
    }
    return WithBreadcrumb;
};

export default withBreadcrumb;
