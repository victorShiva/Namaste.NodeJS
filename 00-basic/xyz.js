console.log("Hey Good Morning!");
setTimeout(() => {
    console.log("After 2 second executed");
}, 2000);

// __--------------------- "module" -------------------

export let userId = "@raghav123";
export const greeting = function () {
    console.log("Hey How are you?");
}

//export default function greeting() {
//    console.log("Hey How are you?");
//}

export const obj = {
    name: "Joker",
    fav: "500",
    findName() {
        console.log(`My name is ${this.name}`);
    }
}

//export { userId, greeting, obj }