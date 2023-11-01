interface CanDispatchEvents {
    dispatchEvent(eventName: string): string;
    subscribe(observer: CanObserveEvents, event: string): void;
}

interface CanObserveEvents {
    handleEvent(): void;
}

class Player implements CanObserveEvents {
    handleEvent(): void {
        throw new Error("Method not implemented.");
    }
}

//
// ROULETTE
//
class Roulette implements CanDispatchEvents {
    dispatchEvent(eventName: string): string {
        throw new Error("Method not implemented.");
    }

    subscribe(observer: CanObserveEvents, event: string): void {
        throw new Error("Method not implemented.");
    }

    // TODO Implement game logic that will dipatch events
    play() {
        throw new Error("Method not implemented.");
    }
}

const roulette = new Roulette();

// TODO Subscribe players

// TODO Dispatch events
roulette.dispatchEvent("number_odd");
roulette.dispatchEvent("number_7");

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
