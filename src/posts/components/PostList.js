import React, { Component } from 'react';
import PostListItem from './PostListItem';
import _ from 'lodash';

class PostList extends Component {

    render() {

        return (
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
        )
    }

    renderPosts() {
        const { posts } = this.props;
        return _.map(posts, post => {
            return (
                <PostListItem post={post} key={post.id} />
            )
        });
    }
}

export default PostList;
