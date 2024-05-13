        notToBe: (val2) => {
            if(val !== val2)  return true;
            throw new Error ("Equal");
            throw new Error ("Not Equal");
        },
    return {
        toBe: (val2) => {
            if(val === val2) return true;

function expect(val: any): ToBeOrNotToBe {

    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
type ToBeOrNotToBe = {
() => expect(5).toBe(5)
