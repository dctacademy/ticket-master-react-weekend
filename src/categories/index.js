import React from 'react' 
import axios from 'axios'

import api from '../config/api'

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(`${api.categories.baseURL}`).then(response => {
            this.setState({
                categories: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2> Listing Categories - { this.state.categories.length} </h2>
                <ul>
                    { this.state.categories.map(category => {
                        return <li key={category.id}> { category.name } </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default CategoryIndex