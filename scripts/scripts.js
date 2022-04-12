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
	const req = await fetch(`${baseUrl}/member`);
	await req.json().then(function (json) {
		console.log(json);
		hidePreloader();
		json.data.forEach((item) => {
			if (item.memberId == 15) {
				// document.querySelector("#surName").innerHTML = item.surname
				// document.querySelector("#nickName").innerHTML = item.nickname
				// document.querySelector("#githubHandle").innerHTML = item.githubHandle
				// document.querySelector("#bio").innerHTML = item.bio
				// document.querySelector("#url").innerHTML =item.url
				// document.querySelector("avatar").image.src= avatar
				projectNickname.innerText = `${item.nickname}`;
				projectSurname.innerText = `${item.surname}`;
				projectGithub.innerText = `${item.githubHandle}`;
				projectBio.innerText = `${item.bio}`;
				projectUrl.innerText = `${item.url}`;
			}
		});
	});

	function hidePreloader() {
		setTimeout(() => {
			loader.style.display = "none";
		}, 1500);
	}
}
