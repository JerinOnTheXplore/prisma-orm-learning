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

//retrive all user 
//   const users = await prisma.user.findMany({
    // include: {
    //     post: true,
    //     profile: true
    // }
//     select: {
//         id: true,
//         name: true,
//         email: true,
//         post: true,
//         profile: true
//     }
//   });
  //console.dir(users,{depth: Infinity})
  //console.log(users);

  //update user data
//   const updateUser = await prisma.profile.update({
//     where: {
//         userId:1
//     },
//     data: {
//         bio: "The Cutest and Whitest cat",
//     },
//     select : {
//         id: true,
//         bio: true,
//         user: true
//     }
//   })
//   console.log("Updated user:", updateUser);
  const deleteUser = await prisma.user.delete({
    where: {
        id: 2
    }
  })

  console.log(deleteUser);

}

    

run()


