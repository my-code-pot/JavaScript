const parseString = require("xml2js").parseString;
const fs = require("fs");
const inspect = require("util").inspect;
/**
 * Code used to parse XML and create the json files, uncomment it if first time
 */

const content = fs.readFileSync("./data.xml", "utf8");
const content2 = fs.readFileSync("./data2.xml", "utf8");
const content3 = fs.readFileSync("./nonxml.xml", "utf8");
const content4 = fs.readFileSync("./biogHists.xml", "utf8");

let resultJSON;

parseString(content4, function (err, result) {
  resultJSON = result
  console.log(JSON.stringify(resultJSON.bio))
});
// parseString(content2, function (err, result) {
//   resultData2 = JSON.stringify(result);
// });

fs.writeFileSync("biogHist.json", JSON.stringify(resultJSON), (err) => {
  if (err) throw err;
});

// fs.writeFileSync("result2.json", resultData2, (err) => {
//   if (err) throw err;
// });


// const jsonData = require("./result2.json");
// let pageBreakIDs = [];


// function getDivBreaks(divList){
//      divList.forEach((div) => {
//        if ("pb" in div) {
//          div.pb.forEach((pb) => pageBreakIDs.push(pb.$.facs));
//        }
//      });
// }

// if ("front" in jsonData.TEI.text[0]) {
//     let front =jsonData.TEI?.text[0]?.front[0]
//       front.pb?.forEach((pb) => {
//           pageBreakIDs.push(pb?.$?.facs);
//         });
//     if("div" in front){
//         getDivBreaks(front.div)
//     }
// }

// //Get the ones that are body's children
// if ("body" in jsonData.TEI?.text[0]) {
//     let body = jsonData.TEI?.text[0]?.body[0]
//     //   for (const pid of jsonData.TEI?.text[0]?.body[0]?.pb) {
//       //     pageBreakIDs.push(pid.$.facs);
//       //   }
//       body.pb?.forEach((pb) => {
//           pageBreakIDs.push(pb.$.facs);
//         });

//         if ("div" in body) {
//           getDivBreaks(body.div);
//         }
// }

// if ("back" in jsonData.TEI.text[0]) {
//   let back = jsonData.TEI.text[0].back[0];
//   back.pb?.forEach((pb) => {
//     pageBreakIDs.push(pb.$.facs);
//   });
//   if ("div" in back) {
//     getDivBreaks(back.div);
//   }
// }

// pageBreakIDs.forEach((pb) => console.log(pb))