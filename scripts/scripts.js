const baseUrl = "https://tribe.api.fdnd.nl/v1";
const loader = document.querySelector(".lds-grid");
const projectNickname = document.querySelector("#nickName");
const projectSurname = document.querySelector("#surName");
const projectGithub = document.querySelector("#githubHandle");
const projectBio = document.querySelector("#bio");
const projectUrl = document.querySelector("#url");
const errorHandling = document.querySelector(".error");
//Functions

// getMembers();
// async function getMembers() {
// 	const response = await fetch(`${baseUrl}/member`);
// 	const json = await response.json()
// 	const member = json.data.find(member => member.memberId == 15)
// 	hidePreloader();
// 	renderData(member);	
// }

getMembers()
async function getMembers() {
    try {
        const response = await fetch(`${baseUrl}/member`)
        const json = await response.json()
        const member = json.data.find(member => member.memberId == 15)
        hidePreloader();
		renderData(member)
    }
    catch (err) {
        error();
        hidePreloader();
        throw new Error(err);
    }
}

function renderData(data) {
	projectNickname.innerText = `${data.nickname}`;
	projectSurname.innerText = `${data.surname}`;
	projectGithub.innerText = `${data.githubHandle}`;
	projectBio.innerText = `${data.bio}`;
	projectUrl.innerText = `${data.url}`;
}

function hidePreloader() {
	setTimeout(() => {
		loader.style.display = "none";
	}, 1500);
}

function error() {
    setTimeout(() => {
        errorHandling.style.opacity = 1;
        errorHandling.style.transform = "translateX(0)";
        setTimeout(() => {
            errorHandling.style.opacity = 0
            errorHandling.style.transform = "translateX(4em)";
        }, 5000);
    }, 2100)
}