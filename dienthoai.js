// function turnon() {
//     if(status===true) {
//         alert("may dang bat");
//     }
// }
// function turnoff() {
//     if(status===false) {
//         alert("may dang tat");
//
//     }
// }
let Phone = function (name) {
    this.name = name;
    this.battery = 100;
    this.msg = "";
    this.inbox = [];
    this.outbox = [];
    this.status = true;
    this.getBattery = function (a) {
        this.battery = a;
    };
    this.setBattery = function () {
        return this.battery;
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;

    };
    this.checkOn = function () {
        if (this.status === true) {
            alert("Phone On");
            this.battery--;
        } else {
            alert("Phone Off");
            this.battery--;
        }

    };
    this.writeMsg = function (letter) {
        if (this.status === true) {
            this.msg = letter;
            this.battery--;
        }
    };
    this.sendMsg = function (Receiver) {
        if (this.status ===true) {
            this.outbox.push(this.msg);
            Receiver.inbox.push(this.msg);
            Receiver.battery--;
            this.battery--;
        }
    }
};
let phone1 = new Phone("giay");
let phone2 = new Phone("la");
// console.log (phone1.name);
// console.log (phone2.name);


phone1.writeMsg(prompt("tin nhan cho phone la"));
phone1.sendMsg(phone2);
alert(phone2.inbox);
alert(phone2.battery);

// console.log(phone1.outbox);
// console.log(phone2.inbox);