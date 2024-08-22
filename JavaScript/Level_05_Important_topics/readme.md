# Null, Undefined and not defined
Undefined is a value
* ye value tab di jati hai jb variable ko koi value na mili ho, iska matlab hai, ye ik garbage value ki tarha treat ki jati hai, ap ise default value bhi keh skte ho.
not defined is an error
* koi prticular element/identity ko use krna without its decleration gives an error, nd thats error is not defined error
null is also a value
* this is a value which resolve like, not found
* null is received when something is not found

# Arrays
What
>Array ka mtlb hai jb bhi ek ya ek se jyada value sath rkhi ho ya kisi type ka data. isme hm ik ya ik se zyada rkh skte hein.
How
var anyName = [] ---> These brackets are must in
Array me phle index ka bnda 0th index pr hota ha
Why we make them?
Alot of time the data is in the shape of more than on member/value.

# Objects
What?
> Object ik tarika hai jisse ki hum ik identity ki details ko ek sth rkh skte hein.
Ik bande ka data = array
ik bande ka sara data = object

# Synchronous & Asynchronous Js
Synchromous code line by line chalta hai
Asynchronous code line by line nhi chalta hai ye sb ko shoro krta hai or jo phle complete ho jaye wo answer de dia jata hai.

## Indepth
Js me 2 stacks hote hein main or side. Jb code run means execute hota hai to synchronous code main stack me jata hai or async side stack me execute hone ke liay bhej dia jata ha. Jb tk main  stack khali ni hota to side stack se code nhi aata hai. Jb main stack khali ho jata hai to side stack mein se async code aake main stack mein execute hota ha.