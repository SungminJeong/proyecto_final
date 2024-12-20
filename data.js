const data = {
    header: {
        header_logo: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Meubel%20House_Logos-05.png?raw=true",
        header_title: "Furniture",
        header_hamburger: "https://github.com/SungminJeong/proyecto-web-componentes/blob/main/public/icon/hamburger.png?raw=true",
        nav_menu: ["home", "shop", "gallery", "contact"],
    },
    footer: {

    },
    space_list:[
        {
            link:"shop",
            img:"dining.jpg",
            //img:"https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/image%20106.png?raw=true",
            h4: "Dining"
        },
        {
            link:"shop",
            img:"living.jpg",
            //img:"https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Mask%20Group.png?raw=true",
            h4:"Living"
        },
        {
            link:"shop",
            img:"bedroom.jpg",
            //img:"https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Image-living%20room.png?raw=true",
            h4:"Bedroom"
        },
    ],
    products: [
        {
            name: "Sylethertine",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/sylthe.png?raw=true",
            description: "stylish cafe chair",
            price: 20,
            isExprice: true,
            exprice: 25,
            alt: "Sylethertine",
            category: "chair",
            seller: "Furniture",
            dimension: "(W): 45cm x (D): 62cm x (H): 91cm",
            longdesc:"Small yet practical, the Modern Mini Chair features a sleek design that fits perfectly into any space.",
            favorite: false,
            cart: false,
        },
        {
            name: "Lolito",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/lolito.png?raw=true",
            description: "Luxury big sofa",
            price: 300,
            isExprice: true,
            exprice: 400,
            alt: "Lolito",
            category:"sofa",
            seller: "Furniture",
            dimension: "(W): 210cm x (D): 90cm x (H): 85cm",
            longdesc: "The new Modern 3-Seater Sofa combines style and comfort seamlessly. Crafted with soft fabric upholstery and a sophisticated finish, it complements any interior effortlessly. With generous seat depth and plush cushions, this sofa provides lasting comfort for extended relaxation.",
            favorite: false,
            cart: false,
        },
        {
            name: "Leviosa",
            imgage: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "stylish cafe chair",
            price: 20,
            isExprice: false,
            exprice: null,
            alt: "Leviosa",
            category: "chair",
            seller: "Furniture",
            dimension: "(W): 45cm x (D): 62cm x (H): 91cm",
            longdesc:"The Small Chair is the perfect blend of style and comfort in a compact form. Ideal for any space, it provides comfortable seating without taking up too much room.",
            favorite: false,
            cart: false,
        },
        {
            name: "Respira",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/respira.png?raw=true",
            description: "Outdoor bar table stool",
            price: 100,
            isExprice: true,
            exprice: 150,
            alt: "Respira",
            category:"table",
            seller: "Furniture",
            dimension: "(W): 120cm x (D): 100cm x (H): 70cm",
            longdesc:"Elevate your outdoor gatherings with the stylish and durable Outdoor Bar Table Stool. Designed for comfort and functionality, it’s the perfect addition to your patio, garden, or outdoor bar setup.",
            favorite: false,
            cart: false,
        },
        {
            name: "Grifo",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/grifo.png?raw=true",
            description: "Night lamp",
            price: 80,
            isExprice: false,
            exprice: null,
            alt: "Grifo",
            category:"lamp",
            seller: "Furniture",
            longdesc:"Transform your space with the elegant and functional Modern Ambient Lamp, designed to add warmth and style to any room.",
            favorite: false,
            cart: false,
        },
        {
            name: "Muggo",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/muggo.png?raw=true",
            description: "small table",
            price: 100,
            isExprice: false,
            exprice: null,
            alt: "Muggo",
            category:"table",
            seller: "Furniture",
            dimension: "(W): 50cm x (D): 50cm x (H): 70cm",
            longdesc:"Add charm and functionality to any space with the Compact Circle Table. Perfectly sized for small areas, it offers a stylish and practical solution for your home or office.",
            favorite: false,
            cart: false,
        },
        {
            name: "Pingky",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/pingky.png?raw=true",
            description: "Cute bed sofa",
            price: 300,
            isExprice: true,
            exprice: 400,
            alt: "Pingky",
            category: "sofa",
            seller: "Furniture",
            dimension: "(W): 210cm x (D): 90cm x (H): 85cm",
            longdesc: "The new Modern 3-Seater Sofa combines style and comfort seamlessly. Crafted with soft fabric upholstery and a sophisticated finish, it complements any interior effortlessly. With generous seat depth and plush cushions, this sofa provides lasting comfort for extended relaxation.",
            favorite: false,
            cart: false,
        },
        {
            name: "Potty",
            imgage: "https://github.com/SungminJeong/entrega-Practica-DOM/blob/main/entrega_%20Pra%CC%81ctica%20DOM/assets/potty.png?raw=true",
            description: "Leather sofa",
            price: 300,
            isExprice: false,
            exprice: null,
            alt: "Potty",
            category: "sofa",
            seller: "Furniture",
            longdesc:"Experience the perfect blend of luxury and comfort with the Leather Sofa. Designed to enhance your living space, this sofa offers timeless elegance and a durable seating solution for any room.",
            dimension: "(W): 210cm x (D): 90cm x (H): 85cm",
            favorite: false,
            cart: false,
        },
        {
            name: "Greece",
            imgage: "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "sofa with beautiful color",
            price: 300,
            isExprice: false,
            exprice: null,
            alt: "Greece",
            category:"sofa",
            seller: "Furniture",
            dimension: "(W): 210cm x (D): 90cm x (H): 85cm",
            longdesc: "Add a vibrant touch to your living room with the Sofa with Beautiful Color. Designed to elevate any space, this sofa combines comfort, style, and a stunning color that complements your interior decor.",
            favorite: false,
            cart: false,
        },
        {
            name: "Grantham",
            imgage: "https://images.unsplash.com/photo-1520099912525-050e1258ec9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "wooden dining table",
            price: 100,
            isExprice: false,
            exprice: null,
            alt: "Grantham",
            category: "table",
            seller: "Furniture",
            dimension: "(W): 120cm x (D): 100cm x (H): 70cm",
            longdesc:"This table combines sleek design with exceptional functionality to enhance the ambiance of your home. Featuring premium hardwood materials and meticulous craftsmanship, it boasts a spacious surface, perfect for gatherings with family or friends.",
            favorite: false,
            cart: false,
        },
        {
            name: "Sheesham",
            imgage: "https://plus.unsplash.com/premium_photo-1673615348080-ee9125ce948d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "cute tea table",
            price: 80,
            isExprice: true,
            exprice: 90,
            alt: "Sheesham",
            category: "table",
            seller: "Furniture",
            dimension: "(W): 120cm x (D): 100cm x (H): 70cm",
            longdesc:"Add a touch of charm to your living space with the Cute Tea Table. This adorable yet practical table is perfect for enjoying tea, coffee, or simply displaying your favorite decor.",
            favorite: false,
            cart: false,
        },
        {
            name: "Flavia",
            imgage: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "classic desk for working",
            price: 100,
            isExprice: false,
            exprice: null,
            alt: "Flavia",
            category: "table",
            seller: "Furniture",
            dimension: "(W): 120cm x (D): 100cm x (H): 70cm",
            longdesc:"This table combines sleek design with exceptional functionality to enhance the ambiance of your home. Featuring premium hardwood materials and meticulous craftsmanship, it boasts a spacious surface, perfect for gatherings with family or friends.",
            favorite: false,
            cart: false,
        },
    ],
    items:[],
    cartItems: [],
    gallery: [
        {
            name: "a",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/a.png?raw=true",
            class: "image a"
        },
        {
            name:"b",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/b.png?raw=true",
            class: "image b"
        },
        {
            name:"c",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/c.png?raw=true",
            class: "image c"
        },
        {
            name:"d",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/d.png?raw=true",
            class: "image d"
        },
        {
            name:"e",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/e.png?raw=true",
            class: "image e"
        },
        {
            name:"f",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/f.png?raw=true",
            class: "image f"
        },
        {
            name:"g",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/g.png?raw=true",
            class: "image g"
        },
        {
            name:"h",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/h.png?raw=true",
            class: "image h"
        },
        {
            name:"i",
            img: "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/i.png?raw=true",
            class: "image i"
        },
    ]
}

export default data;
