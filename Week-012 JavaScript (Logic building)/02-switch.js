// Build a rating system for pizzahut.

// 1 star = poor ; 2 stars = emm, ok   3 stars =  average 4 stars =  Cool 5 stars = great 6 stars = awesome 7 stars = nailed it

// switch (expression) {
//   case value1:
//     statement1;
//     statement2;
//     break;

//   default:
//     break;
// }

const rating = 10;
switch (rating) {
  case 1:
    console.log("poor");
    break;
  case 2:
    console.log("emm, ok");
    break;
  case 3:
    console.log("average");
    break;
  case 4:
    console.log("cool");
    break;
  case 5:
    console.log("great");
    break;
  case 5 + 5:
    console.log("awesome");
    break;
  case 7:
    console.log("nailed it!");
    break;

  default:
    console.log("Not matching.");
}
