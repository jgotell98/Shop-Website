import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
            name:'Jaquavious',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {  
            name: 'Addias Shirt',
            category:'Shirts',
            image:'/images/IMG_0339.jpeg',
            price:15,
            countInStock: 2,
            brand:'Addias',
            rating:5,
            numReviews:10,
            description:'high quality product'
        }
    ]
};
export default data;