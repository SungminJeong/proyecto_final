import './Home.css';
import data from '../../data';

const { space_list } = data;

const template = () => `
<section class="header_main">
    <article class="box">
      <div class="new_arrival">
        <p class="newarrival">With our furniture</p>
        <h1>Design Your Space</h1>
        <p>Our furniture company creates exceptional spaces with elegant designs and superior quality. We offer furniture that adds value to life, prioritizing your style and comfort above all.</p>
        <a href="/shop"><button class="buy_now_btn">buy now</button></a>
      </div>
    </article>
</section>
  
  <section class="browsetherange">
    <article class="browsetherange_title">
      <h2>Create Everlasting Spaces</h2>
      <p>Transform your space into a masterpiece.</p>
    </article>
    <article class="space">
      <ul class="space_list">
      
      </ul>
    </article>
  </section>
`

const Home = () => {
    document.querySelector('main').innerHTML = template();
    const ul = document.querySelector('.space_list');
    for(let list of space_list){
      const li = document.createElement('li');
      li.innerHTML = `
          <a href="/${list.link}">
            <img src="${list.img}"/>
            <h4>${list.h4}</h4>
          </a>
      `
      ul.appendChild(li);
    }
}

export default Home;