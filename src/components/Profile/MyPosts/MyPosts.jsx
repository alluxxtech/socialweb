
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/formsControl';

const MyPosts = (props) => {
    const { posts } = props;
    const onAddPost = (value) => {
        props.addPost(value.postMessage);
    }
    console.log(posts)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posts.map((item, index) => 
                    <Post key={index} message={item.message} likesCount={item.likesCount}/>
            )}
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Enter your message'
                name={'postMessage'}
                component={TextArea}
                validate={[required, maxLength10]}
            >
            </Field>
            <button>
                Add post
            </button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPostForm'
})(addPostForm)

export default MyPosts;
