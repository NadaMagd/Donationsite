// let tbody = document.querySelector("tbody");
// async function getAllCases() {
//     try {
//         console.log("hi")
//         const responseCases = await fetch("http://localhost:4000/cases",
//             {
//                 method: "GET"
//             }
//         );
//         if (!responseCases.ok)
//             throw new Error(
//                 "Cannot find the requested"
//             );
//         const DataCases = await responseCases.json();
//         console.log(DataCases);
//         for(let i=0 ;i<DataCases.length;i++){
//             let tr=document.createElement("tr");
//             let td=document.createElement("td");
//             let cat=DataCases[i]["rewards"]["0"]["title"];
//             td.innerText=`${cat}`
//             tr.appendChild(td)
//             tbody.appendChild(tr)
//             console.log(cat)
//         }
//     } catch (error) {
//         console.error("fail")
//     };
// }
// getAllCases();