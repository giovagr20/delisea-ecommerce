import { Products } from "../models/products";

let is_ok = true;

export const customFetch = async (time: number, task: Array<Products>): Promise<Array<Products>> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the customFetch :(");
            }
        }, time);
    });
}