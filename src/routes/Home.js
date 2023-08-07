import React, { Component } from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import '../styles/Home.css'

export class Home extends Component {

  state = {
    isLoading: true, //로딩이 true인 동안 loader text가 보이게 함. false일 땐 안 보이고 movies가 보이게 함
    movies: [], //영화 배열은 여기다 저장
  }

    getMovies = async () => {
    const { // 불러왔더니
      data: { // 객체였고
        data: {movies} // 그 안에 또 data 객체가 들어있다. 그 중에 movies 배열만 가져오자 (구조분해할당)
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log('movies', movies);

    // axios는 라이브러리이기 때문에 설치해줘야 함. npm install axios
    // 설치 확인은 packages.json에서 dependencies: axios 
    // 실행 이후에 설치한 경우에는 import 해줘야 불러와짐 = lines 3
    // url에서 ?는 '쿼리'. 앞 url 중에서 '?' 장르가 animation이고 좋아요 순으로 정렬된 것을 가져와라
    
    // ↓ 배열과 속성 값의 이름이 같으면 속성 이름만 써도 된다 
    // this.setState({isLoading: false, movies: movies})
    this.setState({isLoading: false, movies})
  }

  componentDidMount(){
    this.getMovies();

    // setTimeout(()=>{
    //   this.setState({isLoading : false});
    // }, 6000);
    // 1. 6초 뒤에 로딩 해제
    // 2. setState로 state가 바뀌면 자동으로 render 함수가 재실행됨
  }

  /* 삼항 연산자를 사용. isLoading이 true일 때는 앞의 문장이, false일 때는 뒤의 문장이 실행됨 */
  /* {isLoading ? true : false} */

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ?
        <div className="loader">
          <span className="loader_text">'Loading...'</span>
        </div>
        :
        <div className="movies">
          {movies.map((movie, index) => (
          <Movie 
            key = {index}
            id = {movie.id}
            image = {movie.medium_cover_image}
            title = {movie.title}
            year = {movie.year}
            summary= {movie.summary}
            genres = {movie.genres}
          />
          ))}
        </div>
        }
      </section>
    )
  }
}

export default Home
