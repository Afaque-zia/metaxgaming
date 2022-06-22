let contractAddress = "0x9F90BA2EE8724512eF7d0b01B896484b066804d4"; // Token Contract

let abi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }], "name": "Multisended", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "upline", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "NewDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "_bnbamount", "type": "uint256" }], "name": "_bnbToTokens", "outputs": [{ "internalType": "uint256", "name": "_token", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_burnamt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_devandteam", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_liquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_marketing", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_presaleIdo", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_referalairdrop", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_selltoken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_upline", "type": "address" }], "name": "buyToken", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "buyprice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "init", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_buyprice", "type": "uint256" }], "name": "setBuyPrice", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address payable", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
let accounts;
var account;
var upline = "0x680d613CD1F5fE151357430c0B1c6ce63c624073";
const showAccount = document.querySelector('#refaddress');
const walletAdd = document.querySelector('#walletAdd');
const referall = document.querySelector('#vala');
const income = document.querySelector('#income');
const loginid = document.querySelector('#login');
const blinkText = document.querySelector('.blink-text');
$(document).ready(function () {
    var value = RegExp("[?&]ref=[^&]+").exec(window.location.search);
    var m = unescape(!!value ? value.toString().replace(/^[^=]+./, "") : "");
    /*alert(m);*/
    if (m) {
        document.cookie = "ref=" + m + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
        var parentaddress = "";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../Services/Account.asmx/getparentAddress",
            data: "{randomid: " + JSON.stringify(m) + "}",
            dataType: "json",
            async: false,
            success: function (Result) {
                parentaddress = Result.d;
            },
            error: function (d) {

            }
        });
        if (parentaddress == "") {
            alert('Invalid Referral', '4caf50');
        }
        else {
            $('#code').hide();
            upline = parentaddress;
            $('#refferalid').val(m);
        }
    }
    else {
        
    }
});
$('#connectmetamaskclick').click(
    async function getAccount() {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        
        if (accounts) {
            walletAdd.innerHTML = account;
            $(".ConnWallet").hide();
            $("#walletModal").hide();
            $("#buyMXG").show();
            $("#ardroptasks").show();
            Getuser(walletAdd.innerHTML);
        }
    }
);
$('#connecttrustclick').click(
    async function getAccount() {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];

        if (accounts) {
            walletAdd.innerHTML = account;
            $(".ConnWallet").hide();
            $("#walletModal").hide();
            $("#buyMXG").show();
            $("#ardroptasks").show();
            Getuser(walletAdd.innerHTML);
        }
    }
);
function Getuser(mainAccount) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../Services/Account.asmx/getUserInfo",
        data: "{account: " + JSON.stringify(mainAccount) + "}",
        dataType: "json",
        async: false,
        success: function (Result) {
            var res = Result.d;
            if(res.loginid!="0")
            {
                showAccount.innerHTML = 'https://metaxgaming.io/buyMXG.html?ref='+res.loginid; 
                blinkText.innerHTML = 'Copy this invitation code and get 5% extra tokens on your purchase.';
                referall.innerHTML = parseInt(res.referrals);
                income.innerHTML = parseFloat(res.direct_bonus).toFixed(2);
                //loginid.innerHTML = res.loginid;
                $("#showcopy").show();
            }
            else
            {
                showAccount.innerHTML = 'Your referral link will appear after buying MXG token.'; 
                $("#showcopy").hide();
            }
        },
        error: function (d) {

        }
    });
}

function convert(currency) {
    var price = 0.00000003;
    debugger
    if (currency === 'bnb') {
        var bnbvalue = $('#buyinput').val();
        var token = bnbvalue / price;
        if(bnbvalue < 0.1){
            $('#amttkn').val("Min 0.1 BNB");
        }
        else if(bnbvalue > 0.1 & bnbvalue <= 5){
            $('#amttkn').val(token.toFixed(2));
        }else if(bnbvalue > 5){
            $('#amttkn').val("Max 5 BNB");
        }
    } else {
        var tokenvalue = $('#amttkn').val();
        var bnbvalue = tokenvalue * price;
        if(bnbvalue < 0.1){
            $('#buyinput').val("Min 0.1 BNB");
        }else if(bnbvalue > 5){
            $('#buyinput').val("Max 5 BNB");
        }else{
            $('#buyinput').val(bnbvalue.toFixed(8));
        }
    }
}
function buyToken() {
    const trApp = async () => {
        $(".mint-error").hide();
        let token = $('#amttkn').val();
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        window.web3 = new Web3(ethereum);
        var buyamount = $('#buyinput').val();
        var connected_address_bal = 0;
        let connected_address_bal_ = await web3.eth.getBalance(account);
        let contract_decimal_value = '1.0E+18';
        connected_address_bal = connected_address_bal_ / contract_decimal_value;
       
      
        if (connected_address_bal >= buyamount) {
           
            var _amount = web3.utils.toWei(buyamount.toString(), "ether");
            let contract = new web3.eth.Contract(abi, contractAddress);
          
            contract.methods.buyToken(upline).send(
                {
                    from: account,
                    value: _amount,
                })
                .on('transactionHash', function (hash) {
                    $(".mint-success").show();
                    $(".mint-success").html("Transaction Successfull!");
                    $(".mint-success").addClass("text-success");
                    if (loginid.innerHTML == "0") {

                        ProcessRegistration(hash, upline, account,token);
                    }

                    else {
                        processUpgradation(hash,account,token);
                    }
                   
                })
                .on('receipt', function (receipt) {
                    //console.log(receipt);;
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                    if (receipt.status) { console.log(receipt); }
                })
                .on('error', function (error, receipt) {
                    console.log(receipt);
                });
                
        }
        else {
            $(".mint-error").show();
            $(".mint-error").html("Insuffcient balance!");
            $(".mint-error").addClass("text-error");
        }
    };
    trApp();
}
function CopyToClipboard() {
    let copyText = document.getElementById("refaddress");
    navigator.clipboard.writeText(copyText.innerHTML)
  }

document.querySelector('.top-area').addEventListener("click", (e) => {
    let targets = document.querySelectorAll('.top-area .tab a');
    targets.forEach(element => {
        element.classList.remove('active');
    });
    e.target.classList.add('active');
})

function processUpgradation(txnNumber, mainAccount, amount) {
    var objRegisterRequest = {};
    objRegisterRequest.RAddress = mainAccount;
    objRegisterRequest.amountlist = amount;
    objRegisterRequest.txn = txnNumber;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../Services/Account.asmx/ProcessUpgradation",
        data: "{objRegisterRequest: " + JSON.stringify(objRegisterRequest) + "}",
        dataType: "json",
        async: false,
        success: function (Result) {
            var result = Result.d;
            if (result.status == 'success') {

            }
            else {
            }
        },
        error: function (d) {

        }
    });
    return false;
}

function ProcessRegistration(txnNumber, Sponsor, mainAccount, amount) {
    var objRegisterRequest = {};
    objRegisterRequest.SID = Sponsor;
    objRegisterRequest.RAddress = mainAccount;
    objRegisterRequest.amountlist = amount;
    objRegisterRequest.txn = txnNumber;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../Services/Account.asmx/ProcessRegistration",
        data: "{objRegisterRequest: " + JSON.stringify(objRegisterRequest) + "}",
        dataType: "json",
        async: false,
        success: function (Result) {
            var result = Result.d;
            if (result.status == 'success') {

            }
            else {
            }
        },
        error: function (d) {

        }
    });
    return false;
}
