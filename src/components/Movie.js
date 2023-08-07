import React from 'react'
import '../styles/Movie.css'

function Movie({genres, id, image, title, summary, year}){

  return (
    <div className='movie'>
      <img src={image} alt={title} title={title}/>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h4 className="movie_year">{year}</h4>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
          <li className="movie_genre" key={index}>
            {genre}
          </li>
            ))
          }
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
  )
  // slice 메소드 0번째부터 n글자 잘라내기
  // 뒤에는 ...붙여서 말줄임표 만들기
  
}
export default Movie