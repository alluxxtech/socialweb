
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const { posts } = props;
    const newPostElement = React.createRef();
    const onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map((item, index) => 
                    <Post key={index} message={item.message} likesCount={item.likesCount}/>
            )}
            </div>
        </div>
    )
};

export default MyPosts;
