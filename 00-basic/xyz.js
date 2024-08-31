console.log("Hey Good Morning!");

// __--------------------- "module" -------------------

export let userId = "@raghav123";
export const greeting = function () {
    console.log("Hey How are you?");
}

export const obj = {
    name: "Joker",
    fav: "500",
    findName() {
        console.log(`My name is ${this.name}`);
    }
}

//export { userId, greeting, obj }