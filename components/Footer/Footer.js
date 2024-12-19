import './Footer.css';

const Footer = () => {
    return `
    <section class="footer">
			<article class="company">
				<h1>Funiture</h1>
				<p>Calle de Bailen 12, Madrid</p>
			</article>
			<ul class="footer_list">
        <p>Links</p>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <ul class="footer_list">
        <p>Help</p>
        <li><a href="#">Payment Option</a></li>
        <li><a href="#">Return</a></li>
        <li><a href="#">Privacy Polices</a></li>
      </ul>
      <form action="" method="post" class="footer_list" >
        <p>Newsletter</p>
        <div class="email">
          <input type="email" name="email" id="email"
          placeholder="Enter Your Email Address">
          <button type="submit" class="subs_btn">subscribe</button>
        </div>
      </form> 
    </section>
    <section class="realFooter">© 2024 Furniture. All Rights Reserved.</section>
    `
}

export default Footer;