import './Gallery.css';
import data from '../../data';

const{ gallery } = data;

const template = () => `
<section class="ourproducts">
    <section>
        <article class="background">
            <h1>Gallery</h1>
            <p><span>Home > </span> Gallery</p>
        </article>

        <div class="nav-bar">

        </div>
    </section>
    <section class="gallery_section">
        <p>Share your setup with</p>
        <h2>#Furniture</h2>
        <div class="gallery_container">
        
        </div>
    </section>
</section>
`

const Gallery = () => {
    document.querySelector('main').innerHTML = template();
    for(let img of gallery){
        document.querySelector('.gallery_container').innerHTML += `
        <img src="${img.img}" class="${img.class}">
        `
    }
}

export default Gallery;