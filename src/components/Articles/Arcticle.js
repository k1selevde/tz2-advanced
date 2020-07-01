import React from 'react'
import withBreadcrumb from "../HOC/withBreadcrumb";

const Article  = ({name}) => {
    return (
        <div>
            <p>HELLO</p>
            <div>{name}</div>
        </div>
    );
}

export default withBreadcrumb(Article);