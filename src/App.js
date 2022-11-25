import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'aa', body: 'bb'},
      {id: 2, title: 'ggt 2', body: 'ss'},
      {id: 3, title: 'dd 3', body: 'vv'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        console.log('Отработала функция Sorted Posts')
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const createPost = (newPost) => {
      setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }


  return (
    <div className="App">
        <MyButton onClick={() => setModal(true)} style={{marginTop: '20px'}}>
            Создать пост
        </MyButton>

        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>

        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />

       {/* Создаем условную отрисовку (если все посты удалены или не найдены) Перенесли в компонент PostList*/}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JavaScript"/>

    </div>
  );
}

export default App;
