const baseUrl = "https://tribe.api.fdnd.nl/v1";
// console.log(baseUrl);

getMembers()
function getMembers(){
   const req= fetch (`${baseUrl}/member`)
   console.log(req);
}