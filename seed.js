const { db, Student, Campus } = require("./server/db");
// import faker from "faker";
const { faker } = require("@faker-js/faker");

// FAKER DATA!
// const seed = async () => {
//   try {
//     await db.sync({ force: true });
//     function capitalize(word) {
//       return word[0].toUpperCase() + word.slice(1);
//     }
//     let students = [];
//     let campuses = [];
//     for (let i = 0; i < 100; i++) {
//       let newStudent = {
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         imageUrl: faker.image.people(),
//         gpa: faker.datatype.number({ min: 2.5, max: 4, precision: 0.1 }),
//         // campusId: faker.datatype.number({ min: 1, max: 100 }),
//       };
//       students.push(newStudent);
//       let newCampus = {
//         name: `${capitalize(faker.word.adjective())} ${capitalize(
//           faker.word.noun()
//         )} University`,
//         address: faker.address.streetAddress(),
//         imageUrl: faker.image.city(),
//         description: faker.lorem.paragraph(),
//       };
//       campuses.push(newCampus);
//     }
//     students.forEach(async (student) => {
//       await Student.create(student);
//       console.log("Faker student data seeded!");
//     });
//     campuses.forEach(async (campus) => {
//       await Campus.create(campus);
//       console.log("Faker campus data seeded!");
//     });
//   } catch (err) {
//     console.error("Something went wrong!");
//     console.error(err);
//     db.close();
//   }
// };

const seed = async () => {
  try {
    await db.sync({ force: true });

    const [nyu, lehigh, montclair] = await Promise.all([
      Campus.create({
        name: "New York University",
        imageUrl:
          "https://www.coindesk.com/resizer/MP9rhPRLji0t0iyp3lmUSxu2rJk=/1056x792/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WWUN772SGVAQTKRFYW57MF3GOE.jpg",
        address: "60 Washington Square S #210, New York, NY 10012",
        description:
          "New York University (NYU) is a private research university in New York City.",
      }),
      Campus.create({
        name: "Lehigh University",
        imageUrl:
          "https://www.cappex.com/sites/default/files/styles/college_hero_desktop/public/images/hero/college/213543_hero.jpg?itok=bEDkUBEO",
        address: "27 Memorial Dr W, Bethlehem, PA 18015",
        description:
          "Lehigh University (LU) is a private research university in Bethlehem, Pennsylvania in the Lehigh Valley region of eastern Pennsylvania.",
      }),
      Campus.create({
        name: "Montclair State University",
        imageUrl:
          "https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/listings/montclair-state-university/VkYGfyf2S9ng.jpg",
        address: "1 Normal Ave, Montclair, NJ 07043",
        description:
          "Montclair State University is a public research university in Montclair, New Jersey, with parts of the campus extending into Little Falls.",
      }),
    ]);

    const [shoshana, marc, paula, victoria] = await Promise.all([
      Student.create({
        firstName: "Shoshana",
        lastName: "Levitt",
        email: "shoshana.levitt@nyu.edu",
        // imageUrl:
        gpa: 3.7,
      }),
      Student.create({
        firstName: "Marc",
        lastName: "Elliot",
        email: "marc.elliot@lehigh.edu",
        // imageUrl:
        gpa: 4.0,
      }),
      Student.create({
        firstName: "Paula",
        lastName: "Barbarito",
        email: "paula.barbarito@montclair.edu",
        // imageUrl:
        gpa: 3.8,
      }),
      Student.create({
        firstName: "Victoria",
        lastName: "Marton",
        email: "victoria.marton@nyu.edu",
        // imageUrl:
        gpa: 3.8,
      }),
    ]);

    await shoshana.setCampus(nyu);
    await marc.setCampus(lehigh);
    await paula.setCampus(montclair);
    await victoria.setCampus(nyu);
    console.log("Data seeded!");
  } catch (err) {
    console.error("Something went wrong!");
    console.error(err);
    db.close();
  }
};

seed();
module.exports = seed;
