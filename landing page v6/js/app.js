
//A page can't be manipulated safely until the document is "ready

$(document).ready(function () {
	var _dockPanel;
	var content = document.createElement('div');
	content.innerHTML = "";
	var liststart = document.createElement('ul');
	var listelement1 = document.createElement('li');
	var listelement2 = document.createElement('li');
	listelement1.innerHTML = '<a href="#tabs-1">One</a>';
	listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
	liststart.appendChild(listelement1);
	liststart.appendChild(listelement2);
	var t1 = document.createElement('div');
	var t2 = document.createElement('div');

	t1.id = "tabs-1";
	t2.id = "tabs-2";

	t1.innerHTML = "Tab 1";
	t2.innerHTML = "Tab 2";

	content.appendChild(liststart);
	content.appendChild(t1);
	content.appendChild(t2);

	const para = document.createElement("section");
	para.innerHTML = "Im john doe";
	document.getElementById("mySection").appendChild(para);


	const paraSec = document.createElement("section");
	paraSec.innerHTML = "And I'm a";
	document.getElementById("mySection2").appendChild(paraSec);


	const paraSec3 = document.createElement("section");
	paraSec3.innerHTML = "photographer";
	document.getElementById("mySection3").appendChild(paraSec3);

	const footerHTML = document.createElement("footer");
	footerHTML.innerHTML = "Reaby Industries";
	document.getElementById("footerId").appendChild(footerHTML);



	var html = [
		'<div>',
		'<nav class="navbar navbar-default">',

		'<ul class="nav navbar-nav">',
		'<li class="active"><a href="#">Home</a></li>',
		'<li><a href="html/melbourneSurf.html"> Melbourne surf </a></li>',
		'<li><a href="html/hawaiiSurf.html"> Hawaii Surf </a></li>',
		'<li><a href="html/californiaSurf.html"> California Surf </a></li>',
		'</ul>',

		'</nav>',
		'</div>'
	].join('\n');
	$("#navbar1").append(html);
	//$("#navbar2").append(content);
});