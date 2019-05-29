// https://www.npmjs.com/package/casual
// https://www.npmjs.com/package/faker
const casual = require('casual');
const faker = require('faker');

const imagesURL = 'https://raw.githubusercontent.com/eecs130/spring2019/master/course-files/homework/hw04/images/';


const photos = ["poppies.jpg", "dogwoods.jpg", "blossom.jpg", "field3.jpg", "field4.jpg", "branch.jpg", "red.jpg", "purple2.jpg", "field1.jpg", "purple.jpg", "jar.jpg", "green.jpg", "green1.jpg", "purple1.jpg", "magnolias.jpg", "daisy1.jpg"]
const users = []
for (let i = 1; i < 11; i++) {
    users.push({
        id: i,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        firstname: casual.first_name,
        lastname: casual.last_name,
        password: casual.password
    });
}

// Create an object for config file
const db = {
    photos:[],
    users: users,
    comments: []
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

let i = 1;
for (photo of photos) {
    console.log(faker.internet.userName())
    const post_date = faker.date.between('1/1/2018', '5/30/2019', format='YYYY-MM-DD');
    const author = users[getRandomInt(users.length - 1)];
    db.photos.push({
        id: i++,
        title: casual.words(casual.integer(1,6)),
        username: author.username,
        user_id: author.id,
        likes: parseInt(Math.floor(Math.random()*100+1)/20),
        date: faker.date.between('1/1/2018', '5/30/2019', format='YYYY-MM-DD'),
        image_url: imagesURL + photo
    })

    // comments
    for (let j=1; j <= casual.integer(1,5); j++) {
        const commenter = users[getRandomInt(users.length - 1)];
        db.comments.push({
            id: db.comments.length + 1,
            photo_id: i,
            username: commenter.username,
            user_id: commenter.id,
            text: casual.sentences(n=casual.integer(1,3)),
            date: faker.date.between(post_date, '5/31/2019', format='YYYY-MM-DD'),
        })
    }
}

// for (let i=1; i <= 5; i++) {
//     // books:
//     db.photos.push({
//         id: i,
//         title: casual.words(casual.integer(1,6)),
//         author: casual.first_name + ' ' + casual.last_name,
//         likes: parseInt(Math.floor(Math.random()*100+1)/20),
//         date: casual.date(format = 'YYYY-MM-DD'),
//     });

//     // users:
//     db.users.push({
//         id: i,
//         email: casual.email,
//         firstname: casual.first_name,
//         lastname: casual.last_name,
//         password: casual.password,
//         avatar: faker.image.avatar()
//     })

//     // blog posts
//     db.posts.push({
//         id: i, 
//         title: casual.title,
//         body: casual.sentences(n=casual.integer(10,20)),
//         user_id: casual.integer(1,10),
//         date: casual.date(format = 'YYYY-MM-DD'),
//         images: [
//             faker.random.image(),
//             faker.random.image()
//         ]
//     })
// }
console.log(JSON.stringify(db, null, 4));