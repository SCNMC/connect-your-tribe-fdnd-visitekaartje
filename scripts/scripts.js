const baseUrl = "https://tribe.api.fdnd.nl/v1";
const loader = document.querySelector(".lds-grid");
const projectNickname = document.querySelector("#nickName");
const projectSurname = document.querySelector("#surName");
const projectGithub = document.querySelector("#githubHandle");
const projectBio = document.querySelector("#bio");
const projectUrl = document.querySelector("#url");

//Functions

getMembers();
async function getMembers() {
	const response = await fetch(`${baseUrl}/member`);
	const json = await response.json()
	const member = json.data.find(member => member.memberId == 15)
	hidePreloader();
	renderData(member);
}

function renderData(item) {
	projectNickname.innerText = `${item.nickname}`;
	projectSurname.innerText = `${item.surname}`;
	projectGithub.innerText = `${item.githubHandle}`;
	projectBio.innerText = `${item.bio}`;
	projectUrl.innerText = `${item.url}`;
}

function hidePreloader() {
	setTimeout(() => {
		loader.style.display = "none";
	}, 1500);
}