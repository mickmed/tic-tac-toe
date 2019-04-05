
let board = ['','','','','','','','',''];



//got win sequence concept from a previous tic tac toe I did for a ruby exercise about 9 months ago. See my personal gitbhub https://github.com/mickmed/oo-tic-tac-toe-bootcamp-prep-000
let winSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let msg = ''
let gameboard = document.querySelector('.gameboard')
let squares = document.querySelectorAll('.square')
let currentText = 'X';
squares.forEach((e) => {
    e.addEventListener('click', ()=>{
        console.log(e)
        classNumber = e.className.split(' ')[1]
        if(e.innerText === ''){
            if(currentText === 'X'){
                e.innerText = 'X'   
                board[classNumber] = 'X'
            }
            if(currentText === 'O'){
                e.innerText = 'O'  
                board[classNumber] = 'O' 
            }
            if(currentText === 'X'){
                currentText = 'O'
                
            }else{
                currentText = 'X'
            }
        }
        winCheck()
    })
})

let winCheck = () => {
    
    //breaking out of forEach involved throwing an exception, so used 'some' instead. Inspired by first answer here  ---> https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break
   console.log(board)
   
    for(let i=0; i<winSeq.length; i++){

        console.log(board[i])
        // check for win -- match board array to sequence
        if ((board[winSeq[i][0]] === "X" && board[winSeq[i][1]] === "X" && board[winSeq[i][2]] === "X") ||
            (board[winSeq[i][0]] === "O" && board[winSeq[i][1]] === "O" && board[winSeq[i][2]] === "O")) {
                console.log('winner')
            //announce winner and highligh winner row;
            // currentPlayer.innerText = `GAME OVER - ${board[i[0]]} is the winner`;
            console.log(winSeq[i][0], winSeq[i][1], winSeq[i][2])
            squares[winSeq[i][0]].style.backgroundColor = "lightgreen";
            squares[winSeq[i][1]].style.backgroundColor = "lightgreen";
            squares[winSeq[i][2]].style.backgroundColor = "lightgreen";
            //freeze board
            
            gameboard.style.pointerEvents = "none";
            let msg = 'winner is'
            return msg

        }
        //if game is a tie
        if (!board.includes('') && board.length === 9) {
            console.log('tie')
            let msg = 'tie'
            return msg
           

        }
    };

}
console.log(msg)



