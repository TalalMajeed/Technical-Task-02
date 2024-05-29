import React from 'react';
import PropTypes from 'prop-types';


//A simple BlogPost Component to Check the Tests
//The Post Title, Content and Author are Rendered
//The Edit and Delete Buttons are also Rendered
const BlogPost = ({ post, onEdit, onDelete }) => {
    return (
        <div>
            d
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <button data-testid="edit-button" onClick={onEdit}>Edit</button>
            <button data-testid="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

//PropTypes for the BlogPost Component
//The Post Object is Required and should have a Title, Content and Author
BlogPost.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

//Default Props for the BlogPost Component
export default BlogPost;
