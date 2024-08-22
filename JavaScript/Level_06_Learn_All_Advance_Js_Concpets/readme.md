# This
This keyword js mein sbse zayada suspensful keyword hai
Keyword means jiska language me koi matlab ho
This ki value baar baar badal skti hai alag alag conditions mein, saari conditions ko seekh jao to this smj jao gay

This ki value different jaga pr:
1. function mein - window
2. global - window
3. method - object
4. fnc inside method (es5) - window
5. fnc inside method (es6) - object
6. constructor function mein this ki value - new blank object
7. event listener mein this ki value - elemnt jis pr event laga ho

# Call, apply bind
Ye teen tarikay hein function ko call krne ke object maan kr.

## Call
Jb bhi hm chahte hein ke this ke value function me window ki bjaye kxh or ho to call use krte hein.

## Apply
Jb hm chahein ke parametres hein to bhejne ke liay scope bhi object kr skte ho means value or sth parametres bhi bhej skte ho. pehli chez this ki value or dosri arrray deni hai.

## Bind
Bind call ki trha hai butt ye answer baad me daita hai jisko baad me chla skte hein, usay save krke kisi variable me.