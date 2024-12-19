import './Contact.css';

const template = () => `
<section class="ourproducts">
    <section>
        <article class="background">
            <h1>Contact</h1>
            <p><span>Home > </span> Contact</p>
        </article>

        <div class="nav-bar"></div>
    </section>
    <section class="contact_section"></section>
</section>
`

const Contact = () => {
    document.querySelector('main').innerHTML = template();
    const container = document.querySelector('.contact_section');
    container.innerHTML = `
    <article>
        <img id="contectImg" src="/DALL2024.png" alt="office"/>
    </article>
    <article id="contactForm">
        <p>Contact Us</p>
        <form id="formContainer" action="/submit" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="write your name" class="inputBox" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="ex)email@gmail.com" class="inputBox" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" row="10" cols="40" placeholder="Wrtite message.." class="messageBox" required></textarea>
            </div>
            <div class="form-group">
                <button id="submitBtn" type="submit">Send message</button>
            </div>
        </form>
    </article>
    `
}

export default Contact;