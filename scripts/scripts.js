const baseUrl = "https://tribe.api.fdnd.nl/v1";



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
            // console.log(item.surname)
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
function fetchtMembers() {
	data.forEach(element => {
		if(element.memberId == memberId) {
			const memberId = element;
			nameEl.innerHTML = `Hallo, ik ben ${memberId.name}`
			bioEl.innerHTML = `Hallo, ik ben ${memberId.bio}`
		}
	});
}

function postAndRenderData(){
    const baseUrl = `${baseUrl/member}`
    const options = {
        method:'PATCH',
        headers: {
                    'Content-Type': 'application/json',
 
        },
        body: JSON.stringify({
                     memberId:15,
                     squadId: 1,
                     type: "student",
                     nickname:"SCNnnhMC",
                     name:"Shauri",
                     prefix:"",
                     surname:"Maigua caceres",
                     avatar:"",
                     githubHandle:"",
                     bio:"TESTTT",
                     url:"",


        })

        

    }

    fetch(url,options).then(response => response.json())
	.then(data => {
			console.log(data)
	}).catch(err => {
			console.log(err)
	})

}

