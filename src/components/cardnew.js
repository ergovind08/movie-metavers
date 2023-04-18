import React, { useState } from 'react'
import ReactStars from 'react-stars'


const Cardnew = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGPaYBc6i3lhBrbfbc1umq8WZdUprVwjoBgZX6HDjmDiosBhgJ_p8I3NUitWpBBc2OWk&usqp=CAU"
    },


    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtkfNcYp8L5f4imMf9Ei5k_xwIM7YDPU6_g&usqp=CAU"
    },


    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9L8mWX-VYb200eFCS9LeeEehBnJNushJkQ&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGlIOCvyRpijIvwvZb2dfAZNs1RbzQZdP6w&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfnyQ6zd67BwWrr7FsE-DorcfwkNfoed9Pw&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugNSHcIitXa9NIH0UIJOUhDwYKGtk58tomA&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzxhApZakYk1PvUdGb0ERkFKFSQBb2S81hQ&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEPymGK2ZVIhy4_dXL0dJbCZF-eYUcb24Nw&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo50vFlEFckwwKE8omGb-PEUJn6fwtoRO2TQIjhzOu3FQfcMAZB5bfQ5pTUdLphdZTqCY&usqp=CAU"
    },

    {
      name: "The Dark",
      year: "2023",
      rating: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3if80882RecihWhGotabyVZT4VDqx8OH3Bw&usqp=CAU"
    },





  ])


  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {data.map((e, i) => {
        return (
          <div key={i} className='card  shadow-lg p-2 hover:-translate-y-4 cursor-pointer md:mt-0 mt-15 ml-.5 mr-.5 mb-4 rounded-xl transition-all duration-500'>
            <img className='h-72' src={e.img} />
            <h1><span className='text-gray-400'>Name :</span> {e.name} </h1>
            <h1>
              <span className='text-gray-400'>Rating :</span> {e.rating}
              <ReactStars
                size={20}
                half={true}
                value={e.rating}

              />
            </h1>
            <h1><span className='text-gray-400'>Year :</span>{e.year}</h1>
          </div>
        )
      })}
    </div>
  )
}





export default Cardnew