# Space Rocks
_My take on a classic space game_

The purpose of this project is to help keep my skills sharp as I explore and implement various design patterns and play around while making something "useful". When I was in charge of hiring at a software company, I placed high value on code that a candidate could show me from extra-curricular projects. When giving advice to programmers seeking jobs, I almost always encourage them to have Github accounts with code that can be shared and examined. This project is me keeping my own advice, even if I'm not currently looking for a new job.

## Introduction
Scattered across the asteroid belt of Sol, lonely, independent profiteers scavenge fragments of asteroids and ships for resources to survive. This is a story of determination, resourcefulness, skill, and grit. Someday, I will finish this riveting story that may or may not have any bearing on the actual game.

## Architecture

### Entity Component System (ECS)
The game is built on the ECS pattern, popular in games, that allows for a clean and efficient separation of all game objects. In traditional OOP, objects would typically be organized into Classes which bundle both state and functionality into a nice clean package. In a game, however, there is so much going on that traditional OOP can leads to large unwieldy objects with many bindings and functionality reuse that inheritance begins to hinder more than help. ECS, at least as I am using it here, helps solve this by completely separating object state from game logic.

In ECS, game objects are represented by Entities. An Entity is really nothing more than a bag of Components.

Components are pieces of game data that may be interesting to Systems. A `position` component, for example, may contain `x` and `y` values.

Systems are where the work happens. On each tick, the entire list of game objects is handed to each of the systems, which operate on them. Systems are allowed to mutate components in entities and even add new components to entities. A collision system, for example, will examine `position` components and decide which entities are colliding. It will then add a `collision` component that systems further down the line can use. The order in which systems run is important.

### Design Principles
1) Entities are _state only_. No logic.
2) Systems may not communicate with one another directly.
3) Game must gracefully tolerate a broken system.
4) All game state is contained in `game.world`.

### Optimizations
My primary design goal will be a working, performant game. Second comes the readability of the code. If the second comes into conflict with the first, I will make the necessary optimizations and document them appropriately. This should be rare if my architecture is in good shape. Many optimizations is often a symptom of an architecture that needs improvement.

## Lessons Learned
In the course of the project, I will document here things I've learned along the way.

### How to spell "optimization"
o-p-t-i-m-i-z-a-t-i-o-n

### Craftsmanship
Craftsmanship is maybe part talent, but is much more about patience, dicipline, and discipline.

## Acknowledgements
I work closely day-to-day with [Jared Barnes](https://github.com/jaredjbarnes) and am therefore heavily influenced by his ideas. He's working on a [game engine of his own](https://github.com/jaredjbarnes/SimpleGameEngine), and we share ideas.