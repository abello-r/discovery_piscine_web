
let flanders = document.getElementById('flanders');
let homer = document.getElementById('homer');


function swap_flanders()
{
	flanders.setAttribute("src", "srcs/" + "right_flanders.png")
}

function reset_flanders()
{
	flanders.setAttribute("src", "srcs/" + "flanders.png")
}

function swap_homer()
{
	homer.setAttribute("src", "srcs/" + "left_homer.png")
}

function reset_homer()
{
	homer.setAttribute("src", "srcs/" + "homer_front.png")
}
