import './Card.css';

const template = () => `
<img src="" class="smallFoto" alt=""/>
<h1>${item.name}</h1>
`

const Card = (item) => template(item);

export default Card;