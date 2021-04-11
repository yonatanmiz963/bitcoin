import { storageService } from "./async-storage.service";

export const userService = {
    getUser,
    getEmptyMove,
    updateUser,
    addMove,
    signUp
}

const USER_KEY = 'user'

const user_DB = {
    name: "Ochoa Hyde",
    balance: 100,
    moves: []
}

async function signUp(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user
}

async function getUser() {
    if (!localStorage.getItem(USER_KEY)) {
        localStorage.setItem(USER_KEY, JSON.stringify(user_DB));
        return user_DB
    }
    const user = await storageService.query(USER_KEY);
    return user;
}


async function updateUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user
}

// add ID to move
async function addMove(move) {
    const user = JSON.parse(localStorage.getItem(USER_KEY))
    user.moves.unshift(move)
    user.balance -= move.amount
    await updateUser(user)
    return user
}

async function getEmptyMove() {
    return {
        toId: "",
        to: "",
        at: null,
        amount: 0
    }
}