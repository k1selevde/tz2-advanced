import {connect} from 'react-redux'
import {News} from '../components/News/News'
import React from 'react'
import {getNews} from "../redux/actions/newsActions";

class NewsContainer extends React.Component {
    componentWillMount() {
        this.props.getNews()
    }

    render() {
        const {data} = this.props
        return ( data && <News data={data}/> )
    }
}

const mapStateToProps = state => ({
    data: state.news.data
})

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNews())
})

export default connect(mapStateToProps,mapDispatchToProps)(NewsContainer);