const LoginBtn = document.getElementById("login-btn");
const main_page = document.getElementById("main-page")
const Add_depositBTN = document.getElementById('Add_depositBTN')
Add_depositBTN.addEventListener('click', function(){
    const deposit_input = document.getElementById("deposit_input").value;
    const depositNewInput = parseInt(deposit_input)
    if(deposit_input === ""){
        alert("enter value");
    }
    else if(deposit_input >5000) {
        alert("enter amount which is < 5000");
            return;
          }
          else{
    const total_deposit = document.getElementById("total-deposit").innerHTML;
    const Total_NewDeposit = parseInt(total_deposit);
    const Total_Deposit =  depositNewInput+Total_NewDeposit;
    document.getElementById("total-deposit").innerHTML=Total_Deposit;
}
        //change balance
    const total_balance = document.getElementById("total-balance").innerHTML;
    const NewTotal_balance = parseInt(total_balance);
    const Total_New_Balance = depositNewInput + NewTotal_balance;
    document.getElementById("total-balance").innerHTML=Total_New_Balance;
})
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click', function() {
    const withdraw_input = document.getElementById("withdraw_input").value;
    const Newwithdraw_input= parseInt(withdraw_input)
    const withdraw_total = document.getElementById("withdraw_total").innerHTML;
    const Newwithdraw_total= parseInt(withdraw_total)
    const Total_withdraw = Newwithdraw_total+Newwithdraw_input;
   document.getElementById("withdraw_total").innerHTML=Total_withdraw;
           const TotalBalance = document.getElementById("total-balance").innerHTML;
            const NewBalance = parseInt(TotalBalance);
            const multiplication = NewBalance - Newwithdraw_input;
            document.getElementById("total-balance").innerHTML= multiplication
        
    })