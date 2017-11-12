import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions'
import PostList from './../components/PostList';
import { Link } from 'react-router-dom';

class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts:</h3>
                <PostList posts={this.props.posts} />
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect( mapStateToProps, { fetchPosts } )(PostListContainer);
