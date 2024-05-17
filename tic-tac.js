let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset");
const newGameButtons = document.querySelectorAll("#new-game");
let msgcont = document.querySelectorAll("#msg-contain");
let msg = document.querySelectorAll("#msg");
let msgContainer = document.querySelector("#msg-contain"); 

let turn0 = true ;
let count = 0 ;

const winPatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[0,1,2],
[1,4,7],
[2,5,8],
[2,4,6],
[6,7,8],
];

// const resetGame = () =>{
// 	turn0 = true;
// 	count = 0;
// 	enableBoxes();

// 	msgContainer.classList.add("hide");
// };

function resetGame(){
	turn0 = true;
	count = 0;
	enableBoxes();

	//msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
	box.addEventListener("click",() => {
	if ( turn0) {
		box.innerText = "O";
		//document.getElementByclass("box").innerHTML("O");
		//document.write("O");
		turn0 =false;
}
	else {
		box.innerText ="X";
		turn0 =true;	
}
	box.disabled= true;
	count++;
	let isWinner = checkWinner();

	if (count === 9 && !isWinner){
		gameDraw();
		}
	
	});
});

	const gameDraw= () => {
		msg.innerText=' Game was Draw ';

	msgContainer.classlist.remove("hide");
		disableBoxes();
};

	const disableBoxes = () => {
		for (let box of boxes){
			box.disable = true;
				}
			};

// 	const enableBoxes = () => {
// 		for( let box of  boxes ){
// 		box.disable = false;
// 		box.innerText = "";
// 	}
// };

function enableBoxes () {
	for( let box of  boxes ){
	box.disable = false;
	box.innerHTML = "";
	}
}


const showWinner = (winner) => {
	msg.innerText = 'Winner is ${winner}';
	//alert("Winner is "+ winner);
	document.getElementById("msg-contain").innerHTML="Winnner is "+winner;
	console.log("winner is" + winner);
	// msgContainer.classList.remve("hide");
	disableBoxes();
};

const checkWinner = () => {
// 	for(pattern of winPatterns){
//  //cosole.log(pattern[0],pattern[1],pattern[2]);
// let pos1Val= boxes[pattern[0]].innerText;
// let pos2Val= boxes[pattern[1]].innerText;
// let pos3Val= boxes[pattern[2]].innerText;

// if(pos1Val != "" && pos2Val != "" && pos3Val != "")
// {
// 	if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
// 	console.log("Winner",pos1Val);
// 	showWinner(pos1Val);
// 	return true;
// 			}
// 		}
// 	}	
// };

// 	newGameButtons.addEventListener("click", resetGame);
// 	reset.addEventListener("click", resetGame)

for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

// newGameButtons.addEventListener("click", resetGame());
// resetBtn.addEventListener("click", resetGame());
