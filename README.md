# JSRMS

Making maps in AOE3 with Typescript

## Introduction

After developing a lot of maps, I have figured I always facing the same issues that resulted in a particularly poor developer experience such as:

-   Map code being wrong and crashes the game, so you need to create again a new lobby instead of just restarting the game.
-   It is really hard to find what causes a map crash. Need to delete lines and bisect until you find the broken code.
-   No documentation of functions
-   I am always doing typo when using enum "california/ground3" (oops I forget the suffix "\_cal")
-   No autocompletion
-   Bad code formatting like semicolon not added automatically on save (particularly frustrating)
-   Duplicated strings for object creating actually get rid of all objects except one....

This project aims at tackling all the issues aforementioned :)

## How does this work

Basicall a lot of problems above are resolved if you use a statically typed language. This project offers you the ability to use **Typescript** which is one of the most popular programing language in the world.

Here is the flow that this project involves:

Map written in Typescript => jsrms compiler => Map written in RMS (understandable by the AOE game)

## Installation

1. Download this project => it downloads the compiler
2. Download Visual Studio Code => it will show you errors reported by Typescript
3. Install [the Prettier Extention](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) => it will format properly your code on save.
4. Download [nodejs](https://nodejs.org/en/) => it will install the Javascript Engine

5. Open the project in VSCode
6. In the command line, run `npm install` => it will download dependencies from the web
7. In the command line, run `npm run tsc`
8. In a second command line, run `npm run start`

9. start editing the `map.ts` file
10. Open AOE3 and select the "\_\_\_test" map in your game lobby.

## Documentation

I chose the Typescript language because the syntax is actually really similar to the RMS one, so there is not a lot of difference.

| Description                   | RMS                                | Typescript                      |
| ----------------------------- | ---------------------------------- | ------------------------------- |
| Declaring an int              | `int toto = 5;`                    | `var toto = 5;`                 |
| Declaring a bool              | `bool toto = true;`                | `var toto = true;`              |
| Declaring a float             | `float toto = 10.2;`               | `var toto = 10.2;`              |
| Declaring a string            | `string toto = "ererer";`          | `var toto = "ererer";`          |
| Declaring a vector            | `vector toto = ...;`               | `var toto = ...;`               |
| For loop                      | `for(i=0; <10)`                    | `for(i=0; i <10;)`              |
| String with backslash         | `"amazonia\ground3"`               | `"amazonia\\ground3"`           |
| Functions with unique strings | `rmCreateArea("UNIQUE Area name")` | `rmCreateArea("whatever name")` |

The last remaining differencies are the file structure. The compiler already grants you the common `include` statement

So in RMS you would usually start your script with:

```C
include "mercenaries.xs";
include "ypAsianInclude.xs";
include "ypKOTHInclude.xs";


void main (void) {
    rmSetStatusText("", 0.01);
}
```

whereas with the jsrms compiler you can directly write:

```C
rmSetStatusText("", 0.01);
```
