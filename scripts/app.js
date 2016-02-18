/**
 * Created by esattahaibis on 2016-02-11.
 */

/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	var mData;
	$.ajax({
		url: "\data.json",
		dataType:"text",
		success: function (data) {
			//console.log(data);
			mData = JSON.parse(data);
			console.log(mData);
		}
	});
	setTimeout(function(){
		// bio part
		document.getElementById("paragraphOne").innerHTML = mData.BiographyOne;
		document.getElementById("paragraphTwo").innerHTML = mData.BiographyTwo;
		// Project one Title and the text
		document.getElementById("projectOneTitle").innerHTML = mData.ProjectOneTitle;
		document.getElementById("projectOneText").innerHTML = mData.ProjectOneText;
		// Project two Title and the Text
		document.getElementById("projectTwoTitle").innerHTML = mData.ProjectTwoTitle;
		document.getElementById("projectTwoText").innerHTML = mData.ProjectTwoText;
		// Project three Title and the Text
		document.getElementById("projectThreeTitle").innerHTML = mData.ProjectThreeTitle;
		document.getElementById("projectThreeText").innerHTML = mData.ProjectThreeText;
	}, 300);


	/*//alert("Tryout 1 2 3");

	var myHeading = 'My Biography!';
	var myCurrentBioOne = 'my Bio that coming from JavaScript';
	var myCurrentBioTwo = 'my Bio that coming from JavaScript';
	var projectOneTitle = 'Transformers Animated Series Unoffical Website';
	var projectOneText = 'Project one text comming from Javascript saddsadsadsadsadsadsadsa';
	var projectTwoTitle = 'Artifial Intellegence Movie Unofficial Website';
	var projectTwoText = 'Project two text coming from JavaScript dsadsadasdsadsadsadsadsadsa';
	var projectThreeTitle = 'Information Architecture Personas';
	var projectThreeText = 'Project three text coming from JavaScript dsadsadsadsadsadsadsadsad';

	document.getElementById("paragraphOne").innerHTML = myCurrentBioOne;
	document.getElementById("paragraphTwo").innerHTML = myCurrentBioTwo;

	document.getElementById("projectOneTitle").innerHTML = projectOneTitle;
	document.getElementById("projectTwoTitle").innerHTML = projectTwoTitle;
	document.getElementById("projectThreeTitle").innerHTML = projectThreeTitle;

	document.getElementById("projectOneText").innerHTML = projectOneText;
	document.getElementById("projectTwoText").innerHTML = projectTwoText;
	document.getElementById("projectThreeText").innerHTML = projectThreeText;*/


	document.getElementById("btnSend").addEventListener("click", function(){
		alert("You succesfully sent your massage!");
		console.log('success');
		//this.className += ' scroll-top page-scroll';
		var uName = document.getElementById('name').value;
		var uEmail = document.getElementById('email').value;
		var uPhone = document.getElementById('phone').value;
		var uMessage = document.getElementById('message').value;
		// I'm using template strings from ECMAScript 6
		console.log(`Values that comes from User,\n Name: ${uName}\n E-mail: ${uEmail}\n Phone Number: ${uPhone}\n Message: ${uMessage}\n`);
		window.location.href = "#page-top";
	});


})();
