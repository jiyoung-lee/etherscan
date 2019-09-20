module.exports = {
    HTML: function (body, list) {
        return `
        <!doctype html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Etherscan</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        </head>
        <body class = "container">
            ${body}
            <table class = "table">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Miner</th>
                        <th scope="col">transactions</th>
                    </tr>
                </thead>
                <tbody>
                    ${list}
                </tbody>
            </table>
                
        </body>
        </html>
    `
    },
    blockPage: function (num, Block_Height, Timestamp, Transactions, Mined_by, Block_Reward, Uncles_Reward, Difficulty, 
        Total_Difficulty, Size, Gas_Used, Gas_Limit, Extra_Data, Hash, Parent_Hash, Sha3Uncles, Nonce) {
        return `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Etherscan</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </head>
    <body class = "container">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="../public/images/eth.png" width="" height="40" alt="">
                </a>
                <form class="form-inline" action= "/block" method ="post">
                    <input class="form-control mr-sm-2" type="search" name= "address" placeholder="Address / Txn Hash / Block" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        <table class = "table">
            <h3> block #${num} </h3>
            <tr>
                <th scope="row">Block Height</th>
                <td>${Block_Height}</td>
            </tr>
            <tr>
                <th scope="row">Timestamp</th>
                <td>${Timestamp}</td>
            </tr>
            <tr>
                <th scope="row">Transactions</th>
                <td>${Transactions}</td>
            </tr>
            <tr>
                <th scope="row">Mined by</th>
                <td>${Mined_by}</td>
            </tr>
            <tr>
                <th scope="row">Block Reward</th>
                <td>${Block_Reward}</td>
            </tr>
            <tr>
                <th scope="row">Uncles Reward</th>
                <td>${Uncles_Reward}</td>
            </tr>
            <tr>
                <th scope="row">Difficulty</th>
                <td>${Difficulty}</td>
            </tr>
            <tr>
                <th scope="row">Total Difficulty</th>
                <td>${Total_Difficulty}</td>
            </tr>
            <tr>
                <th scope="row">Size</th>
                <td>${Size}</td>
            </tr>
            <tr>
                <th scope="row">Gas Used</th>
                <td>${Gas_Used}</td>
            </tr>
            <tr>
                <th scope="row">Gas Limit</th>
                <td>${Gas_Limit}</td>
            </tr>
            <tr>
                <th scope="row">Extra Data</th>
                <td>${Extra_Data}</td>
            </tr>
            <tr>
                <th scope="row">Hash</th>
                <td>${Hash}</td>
            </tr>      
            <tr>
                <th scope="row">Parent Hash</th>
                <td>${Parent_Hash}</td>
            </tr>
            <tr>
                <th scope="row">Sha3Uncles</th>
                <td>${Sha3Uncles}</td>
            </tr>
            <tr>
                <th scope="row">Nonce</th>
                <td>${Nonce}</td>
            </tr>       
        </table>
    </body>
    </html>
    `
    }
}