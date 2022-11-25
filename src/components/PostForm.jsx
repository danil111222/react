import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})
    //const [title, setTitle] = useState('') // Название поста
    //const [body, setBody] = useState('') // Описание поста

    //const bodyInputRef = useRef() // хук для неуправляемого компонента
    // по умолчанию при отправке формы странца обновляется, preventDefault убираем действие по умолчанию


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    return (
        <form action="">
            {/* Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />

            {/* Неуправляемый или не контролируемый компонент*/}
            {/*<MyInput
                ref={bodyInputRef} // нужно для неуправляемого компонента
                type="text"
                placeholder="Описание поста"/>*/}

            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"/>



            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;