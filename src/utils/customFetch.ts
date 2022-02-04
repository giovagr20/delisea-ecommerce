let is_ok = true;

export const customFetch = async (time: any, task: any) => {
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