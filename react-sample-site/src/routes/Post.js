import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Post = () => {
  // const params = useParams();
  // console.log( params );
  const { postId } = useParams();
  const [ post, setPost ] = useState('');

  useEffect( () => {
    // useEffect内で関数の定義
    const fetchPost = async () => {
      const res = await fetch(
        `http://dbaraistg.gs3.goo.ne.jp/search?page=${ postId }`
      );
      const data = await res.json();
      setPost( data ); // postで使えるようにセットする
    };
    fetchPost(); // 関数起動
  }, [ postId ] ); // useeEffectはpostIdに依存させる

  return (
    <div>
      <h2>記事のページ</h2>
      <div>
        <p>postId:{ post.id }</p>
        <p>タイトル:{ post.title }</p>
        <p>body:{ post.body }</p>
      </div>
    </div>
  )
}
