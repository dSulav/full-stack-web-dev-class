/* facebook example */
var facebookProfile = {
    name: "Bob",
    friends:10,
    messages: ["Hello there!","Follow me"],
    postMessage: function(message){
        document.write("<br> You have posted this message - "+this.messages.push(message));
    },
    deleteMessage: function(index){
        document.write("<br> You have deleted this meesage - "+this.messages.splice(index,1));
    },
    addFriend: function(){
        this.friends++;
        document.write("<br> Added a friend. Total friends : "+ this.friends+".");
    },
    removeFriend: function(){
        this.friends--;
        document.write("<br> Removed a friend. Total friends : "+this.friends+".");

    }
};
document.write("<hr>");
document.write("<br>facebook example<br>");
document.write("<hr>");
document.write(facebookProfile.name);
document.write("<br>")
document.write(facebookProfile.friends);
document.write("<br>")
document.write(facebookProfile.messages);
document.write(facebookProfile.postMessage("A new message "));
document.write(facebookProfile.deleteMessage(1));
document.write(facebookProfile.addFriend());
document.write(facebookProfile.removeFriend());

/* Account Example */
var savingAccount = {
    balance:500,
    interestRatePercent: 1,
    deposit: function(amount){
        if(amount>0){
            savingAccount.balance += amount;
            document.write("<br> Successfull deposited $"+amount);
        }else{
            document.write("<br> Oops! something went wrong");
        }
    },
    withdraw: function(amount){
        verifyBalance = savingAccount.balance - amount;
        if(amount>0 && verifyBalance >= 0){
            savingAccount.balance -= amount;
            document.write("<br> Successfully withdrawn $"+amount);
        }else{
            document.write("<br> Oops! something went wrong.");
        }
    },
    printAccountSummary: function(){
        document.write("<br> Your current balance is $"+savingAccount.balance+" and your interest rate is "+savingAccount.interestRatePercent+"%");
    }
};
document.write("<hr>");
document.write("<br> Bank account example<br>");
document.write("<hr>");
savingAccount.balance;
savingAccount.interestRatePercent;
savingAccount.deposit(200);
savingAccount.withdraw(300);
savingAccount.printAccountSummary();

