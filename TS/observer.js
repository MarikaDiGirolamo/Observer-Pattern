var Player = /** @class */ (function () {
    function Player(name, bet) {
        this.name = name;
        this.bet = bet;
    }
    Player.prototype.handleEvent = function (event) {
        if (this.bet === event) {
            console.log("".concat(this.name, ", you bet on ").concat(this.bet, "! You won!"));
        }
        else {
            console.log("".concat(this.name, ", you bet on ").concat(this.bet, " but you lost."));
        }
    };
    return Player;
}());
//
// ROULETTE
//
var Roulette = /** @class */ (function () {
    function Roulette() {
        this.subscribers = [];
    }
    Roulette.prototype.dispatchEvent = function (eventName) {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.handleEvent(eventName);
        }
        //chiamo il metodo handleEvent() di ogni subscriber 
        // throw new Error("Method not implemented.");
    };
    Roulette.prototype.subscribe = function (observer) {
        this.subscribers.push(observer);
        console.log(this.subscribers);
        // throw new Error("Method not implemented.");
    };
    // TODO Implement game logic that will dipatch events
    Roulette.prototype.play = function () {
        var num = Math.floor(Math.random() * 36 + 1);
        console.log("Number " + num + " is out");
        if (num % 2 === 0) {
            this.dispatchEvent("EVEN");
        }
        else {
            this.dispatchEvent("ODD");
        }
        if (num <= 18) {
            this.dispatchEvent("BLACK");
        }
        else {
            this.dispatchEvent("RED");
        }
        // throw new Error("Method not implemented.");
    };
    return Roulette;
}());
var roulette = new Roulette();
// TODO Subscribe players
var marika = new Player("Marika", "ODD");
var marco = new Player("Marco", "EVEN");
var gabriele = new Player("Gabriele", "RED");
roulette.subscribe(marika);
roulette.subscribe(marco);
roulette.subscribe(gabriele);
// TODO Dispatch events
// roulette.dispatchEvent("number_odd");
// roulette.dispatchEvent("number_7");
roulette.play();
//
// DICES
//
//
// HORSES
//
//
// SLOT MACHINE
//
//
// BLACK JACK
//
