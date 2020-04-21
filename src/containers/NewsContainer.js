import {connect} from 'react-redux'
import {News} from '../components/News/News'
import React from 'react'
import {getNews} from "../redux/actions/newsActions";

class NewsContainer extends React.Component {
    componentWillMount() {
        this.props.getNews()
    }

    render() {
        const {data, isLoad} = this.props
        return ( <News data={data} isLoad={isLoad} />)
    }
}

const mapStateToProps = state => ({
    data: state.news.data,
    isLoad: state.news.isLoading
})

export default connect(mapStateToProps,{getNews})(NewsContainer);