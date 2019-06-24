var AI = {
    name: 'AI',
    logic: (game) => {
        if(game.state[4] == '') {
            game.makeMove(4)
        } else if(game.state[0] == '') {
            game.makeMove(0)
        } else if(game.state[6] == '') {
            game.makeMove(6)
        } else if(game.state[1] == '') {
            game.makeMove(1)
        } else if(game.state[5] == '') {
            game.makeMove(5)
        } else if(game.state [7] == '') {
            game.makeMove(7)
        } else if(game.state[8] == '') {
            game.makeMove(8)
        } else if(game.state[3] == '') {
            game.makeMove(3)
        } else if(game.state[2] == '') {
            game.makeMove(2)
        }
    }
}