import React from 'react';

function Food({ name, picture }) {
  return(
    <div>
      <h2> I like {name} </h2>
     <img src={picture} />
   </div>
  );
}

const foodILIke = [
  {
    name: "Kimchi",
    image:
      "https://www.google.co.kr/url?sa=i&source=images&cd=&ved=2ahUKEwie85PvhYXnAhWUBIgKHdPcC-wQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Fchaesik-kimchi&psig=AOvVaw3GtcA36MP6Tpl0J9lcviS0&ust=1579158470397337"
  },
  {
    name: "spongebob",
    image:
      "https://www.google.co.kr/url?sa=i&source=images&cd=&ved=2ahUKEwifrZOSiYXnAhXXMt4KHYZbCsEQjRx6BAgBEAQ&url=https%3A%2F%2Fprograms.sbs.co.kr%2Fnick%2Fspongebob%2Fcast%2F58220&psig=AOvVaw25DChgcQFqVAb4OLAWzmWO&ust=1579159344704053"
  }
]

function App() {
  return (
    <div>
      {foodILIke.map(dish =>(
        <Food name={dish.name}
          picture={dish.image}
         />
        )
       )
      }
    </div>
  );
}

export default App;
