<?php

interface CanDispatchEvents
{
    public function dispatchEvent($eventName);
    public function subscribe(CanObserveEvents $observer);
}

interface CanObserveEvents
{
    public function handleEvent($event);
}

class Better implements CanObserveEvents
{
    private $name;
    private $bet;

    public function __construct($name, $bet)
    {
        $this->name = $name;
        $this->bet = $bet;
    }

    public function handleEvent($event)
    {
        if ($this->bet === $event) {
            echo $this->name . " bet on " . $this->bet . " and won!" . PHP_EOL;
        } else {
            echo $this->name . " bet on " . $this->bet . " but didn't win." . PHP_EOL;
        }
    }
}

class Roulette implements CanDispatchEvents
{
    private $subscribers = [];

    public function dispatchEvent($eventName)
    {
        foreach ($this->subscribers as $subscriber) {
            $subscriber->handleEvent($eventName);
        }
    }

    public function subscribe(CanObserveEvents $observer)
    {
        $this->subscribers[] = $observer;
        echo $observer->name . " has been subscribed to the roulette." . PHP_EOL;
    }

    public function play()
    {
        $num = rand(1, 36);
        echo "The number " . $num . " came up." . PHP_EOL;

        if ($num % 2 === 0) {
            $this->dispatchEvent("EVEN");
        } else {
            $this->dispatchEvent("ODD");
        }

        if ($num <= 18) {
            $this->dispatchEvent("BLACK");
        } else {
            $this->dispatchEvent("RED");
        }
    }
}

$roulette = new Roulette();

$marika = new Better("Marika", "ODD");
$marco = new Better("Marco", "EVEN");
$gabriele = new Better("Gabriele", "RED");


$roulette->subscribe($marika);
$roulette->subscribe($marco);
$roulette->subscribe($gabriele);

$roulette->play();
