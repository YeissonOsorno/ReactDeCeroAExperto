import { heroes } from "../data/heroes";


export const getheroeById = (id) => heroes.find((heroe)=>heroe.id === id);

export const getheroebyOwner = owner=>heroes.filter((heroe)=>heroe.owner ===owner);