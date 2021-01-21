import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        // -- two properties posts and errorMsg. Posts is an array which will contain list of posts. ErrorMsg is an errro message which shows when we fail to fetch a data
        this.state = {
            userId: '',
            title: '',
            body: '',
            // posts: [],
            // errorMsg: ''
        }
    }

    // -- In componentDidMount() method we make our get() request. It brings data from http adress and sets posts state to that data. To get an error message from catch just try to change url adress in anxios.get() method
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }
    
    render() {
        // const {posts, errorMsg} = this.state
        const {userId, title, body} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='userId' value={userId} onChange={ this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='title' value={title} onChange={ this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='body' value={body} onChange={ this.changeHandler}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            // <div>
            //     List of posts
            //     {
            //         posts.length ? 
            //             posts.map(post => <div key={post.id}>{post.title}</div>) : 
            //             null
            //     }
            //     {
            //         errorMsg ? <div>{errorMsg}</div> : null 
            //     }
            // </div>
        )
    }
}

export default PostList
