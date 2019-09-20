var express = require('express');
var router = express.Router();
var template = require('../public/template.js');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'))

router.get('/', function (req, res) {
    web3.eth.getBlockNumber(async function (err, rtn) {
        let latest_block_number = rtn;
        let list = ''
        for (var i = 0; i <= 4; i++) {
            await web3.eth.getBlock(latest_block_number - i, false, function (err, block) {
                console.log(block.number)
                list += `
                <tr>
                    <td>${block.number}</td>
                    <td>${block.miner}</td>
                    <td>${block.transactions.length}</td>
                </tr>`
            });
        }
        let html = template.HTML(
            `
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="../public/images/eth.png" width="" height="40" alt="">
                </a>
            </nav>
            
            <a class="navbar-brand" href="#">Ethereum Blockchain Explorer</a>
           
            <form action="/block" method = "post">    
            <div class="input-group mb-3">
                <input type="text" class="form-control" name="address" placeholder="Address / Txn Hash / Block" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                </div>
            </div>
            </form>
            `, list);
        return res.send(html);
    });

});

module.exports = router;    