interface CanDispatchEvents {
    dispatchEvent(eventName: string): void;
    subscribe(observer: CanObserveEvents, event: string): void;
}

interface CanObserveEvents {
    handleEvent(event: string): void;
}

class Player implements CanObserveEvents {
    name: string;
    bet : string;
    constructor(name:string, bet: string){
        this.name = name;
        this.bet= bet;
    }
    handleEvent(event:string): void {
        if (this.bet === event) {
            console.log(`${this.name}, you bet on ${this.bet}! You won!`);
        } else {
            console.log(`${this.name}, you bet on ${this.bet} but you lost.`);
        }
}
}

//
// ROULETTE
//
class Roulette implements CanDispatchEvents {
    subscribers: CanObserveEvents[];
    constructor(){
        this.subscribers = [];
    }
    dispatchEvent(eventName: string): void {
        for (let subscriber of this.subscribers){
            subscriber.handleEvent(eventName);
        }

    //chiamo il metodo handleEvent() di ogni subscriber 
        // throw new Error("Method not implemented.");
    }

    subscribe(observer: CanObserveEvents): void {
        this.subscribers.push(observer);
        console.log(this.subscribers);

        // throw new Error("Method not implemented.");
    }

    // TODO Implement game logic that will dipatch events
    play() {

        const num = Math.floor(Math.random() * 36 + 1);
        console.log("Number " + num + " is out"   )

        if (num % 2 === 0) {
            this.dispatchEvent("EVEN");
        } else {
            this.dispatchEvent("ODD");
        }

        if (num <= 18) {
            this.dispatchEvent("BLACK");
        } else {
            this.dispatchEvent("RED");
        }

        // throw new Error("Method not implemented.");
    }


}


const roulette = new Roulette();

// TODO Subscribe players
const marika = new Player("Marika", "ODD");
const marco = new Player("Marco", "EVEN");
const gabriele = new Player("Gabriele", "RED");
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
