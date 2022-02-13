const baseUrl = "https://tribe.api.fdnd.nl/v1";
const loader = document.querySelector(".loader");
const main = document.querySelector("main");


//Functions

getMembers()
async function getMembers() {
   const req = await fetch(`${baseUrl}/member`)
   await req.json()
   .then(function(json){
       console.log(json);
    json.data.forEach(item => {
        if(item.memberId ==15) {
            document.querySelector("#surName").innerHTML = item.surname
            document.querySelector("#nickName").innerHTML = item.nickname
            document.querySelector("#githubHandle").innerHTML = item.githubHandle
            document.querySelector("#bio").innerHTML = item.bio
            document.querySelector("#url").innerHTML =item.url
         
        
            // console.log(item)
        }
        // console.log(item.memberId)
    });
   })


//    const data = json.data

//    data.foreach((item) => {
    //    console.log(item)
//    })
//    console.log(json.data);
}

