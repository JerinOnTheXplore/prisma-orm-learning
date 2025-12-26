import { prisma } from "./lib/prisma";

//create
async function run(){
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Miki The Cute Billi",
    //         email: "miki@gmail.com",
    //     }
    // })
    // console.log("Created User", createUser);


    //create user for user id = 1
//     const createPost = await prisma.post.create({
//         data: {
//             title: "This is title",
//             content: "This is a big content",
//             authorId: 1
//         }
//     })
//     console.log("Created Post: ", createPost)
   //create profile
//    const createdProfile = await prisma.profile.create({
//     data: {
//         bio: "The cutest billi",
//         userId: 1
//     }
//    })
//    console.log(createdProfile);//{ id: 1, bio: 'The cutest billi', dateOfBirth: null, userId: 1 }
}

    

run()
// Created User {
//   id: 2,
//   name: 'Miki The Cute Billi',
//   email: 'miki@gmail.com',
//   role: 'USER'
// }


