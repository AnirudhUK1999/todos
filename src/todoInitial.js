import ToDoObject from "./todoObject"
import { format } from "date-fns"

let myDate = new Date();

const ToDosInitial = [
    new ToDoObject("Random Title","This is a random long description",sampleDueDateCalculator(new Date(2021,10,6)),"Yes"),
    new ToDoObject("This is another Random Title","This is a random long description jhasbdjhbasn d  asjkdnajskdnjaksdnkj ndajkna sdkjnasdkjandjnawjdnakjd  adkjnadkjnawkjdnakdjna masndjkasd",sampleDueDateCalculator(new Date(2021,11,26)),"No"),
    new ToDoObject("A Third Random Title","This is a random long description",sampleDueDateCalculator(new Date(2022,4,3)),"No"),
    new ToDoObject("Surely not a fourth Random Title","This is a random long description",sampleDueDateCalculator(new Date(2022,5,10)),"Maybe"),
    new ToDoObject("A Fifth Random Title","This is a random long description",sampleDueDateCalculator(new Date(2022,7,11)),"Yes"),
]

function sampleDueDateCalculator(curr){
    return format(curr,`ccc, Lo LLL yy`);
}

export default ToDosInitial;