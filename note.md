# Type Coercion

`Examples:`
```
5 + "5" 
//Output 55

10 - "2" 
//Output 8
"10" - 2 
//Output 8

"10" * 2 
//Output 20
10 * 5 
//Output 50

"10" / 2 
//Output 5
10 / "2"
//Output 5

5 + "5" - 10 
//Output 45 ("55" - 10 : 45)

20 - 8 - 2 + "0" - 50
//Output 50 (10 + "0" - 50 : "100" - 50 : 50)
```
