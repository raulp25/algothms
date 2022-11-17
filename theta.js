   ------ALGORITHMS------
   
-INSERTION(ITERATIVE & RECURSIVE MODEL) 
- MERGE SORT (ITERATIVE & RECURSIVE MODEL)  
- FINDNUMBER (FINDNUMER CAN BE WITH FILTER, MAP, FOR) 
- sum2IntegersEqualX (ITERATIVE & RECURSIVE MODEL) 
-SUM ONE ELEMENT WITH THE REST ONE BY ONE 
- matrixMultiply(ARRAYS) AND DISPLAY ARRAY
-StrassenmatrixMultiply(ARRAYS) AND DISPLAY ARRAY
-GET RANDOM NUMBER MIN INCLUDED MAX EXCLUDED
-GET RANDOM NUMBER MIN INCLUDED MAX INCLUDED
-RANDOM PERMUTE
-HEAP TREE
-HEAP MAX
-BUILD HEAP MAX >  BUILD MIN HEAP LEFT WITH PROPS (ARRAY,I) BUT MAX HEAP IS WITH b DIRECTLY.
Just for learning purposes if i want to remember how is with b and compare it with array props, i 
-BUILD HEAP MIN > WHAT I JUST SAID
-FIND MIN AND MAX VALUES IN ARRAY



-------DATA STRUCTURES------------
-STACK DATA STRUCTURE > THIS STRUCTURE WAS BUILD USING CLASS, IN COMPARE WITH THE QUE WE COULDNT USE CLASS BECAUSE
 THE METHODS WERE NOT ENOUGH TO ACHIEVE THE DESIRE OPERATIONS, WE HAD TO USE FUNCTIONS 
-QUE DATA STRUCTURE  > THIS STRUCTURE WAS BUILD USING FUNCTIONS, IN COMPARE WITH THE STACK WERE WE WERE ABLE TO USE CLASS 
 BECUASE THE METHODS WERE ENOUGH TO AVOID FUNCTIONS
-LINKED LISTS 



let A = [10,11,12,13,14,15,1,2,3,7,8,9,23,16,17,18,19,20,21,4,5,6,22]
let A1 = []
let A2 = []
let B = [6,16,3,7,14,10,1,17,9,12,5,13,15,2,8,4,11]
let B1 = []
let B2 = []
let a = [45178, 27054, 37462, 30582, 49202]
let a1 = []
let a2 = []

1- ITERATIVE INSERTION SORT
let insertionSort = (A)=>{

        for (let i =1; i < A.length; i++) {

        let key = A[i]

        let j = i-1

        while (j >= 0 && A[j]>key) {

          A[j+1] = A[j]

          j = j-1

          A[j+1] = key

        }

      } }
      
      insertionSort(a)
      console.log(a)

     

1.2- RECURSIVE INSERSION SORT

let insertionSort = (A)=>{

let i = 1
  while (i <A.length){

    let key = A[i]

          let j = i-1

          while (j >= 0 && A[j]>key) {

            A[j+1] = A[j]

            j = j-1

            A[j+1] = key

          }

       i = i+1 
      // console.log(`Valor de i es ${i}`)
    }

        }

>--------------------------------------------------------------<

2- ITERATIVE MERGE SORT 
let mergeSort = (A,A1,A2)=>{
let x = A.length/2-.5
    for (let i = 0; i < Math.floor(A.length/2); i++) {
        let j = Math.floor(A.length/2)
          A1[i]= A[i]
          A2[i] = A[j+i]

          if (x == Math.floor(A.length/2) && i== Math.floor(A.length/2)-1){
            i = i+1
           A2[i] = A[j+i]
         }

        }

        insertionSort(A1)
        insertionSort(A2)


    let k = 0
    let i = 0
    let j = 0


    while (i < A1.length && j < A2.length) {
      if(A1[i]<A2[j]){
        A[k] = A1[i]

        i = i+1
        k = k+1


      } else {
        A[k] = A2[j]

        j = j+1
        k = k+1


      }


    }

     while (i < A1.length){
     A[k] = A1[i]
     i = i + 1
     k = k + 1}

     while (j < A2.length){

       A[k] = A2[j]

     j = j + 1
     k = k + 1}

// console.log(A1)
// console.log(A2)
// console.log(A)

   }

  mergeSort(a,a1,a2)

console.log(a)

2.2- RECURSIVE MERGE SORT 
let mergeSort = (A,A1,A2)=>{
  let x = A.length/2-.5
  let l = 0 

  while (l <  Math.floor(A.length/2)){
    let h = Math.floor(A.length/2)
    A1[l]= A[l]
    A2[l] = A[h+l]

    if (x == Math.floor(A.length/2) && l== Math.floor(A.length/2)-1){
    l = l+1
    A2[l] = A[h+l]
     }   
    l = l+1}


          insertionSort(A1)
          insertionSort(A2)


      let k = 0
      let i = 0
      let j = 0


      while (i < A1.length && j < A2.length) {
        if(A1[i]<A2[j]){
          A[k] = A1[i]

          i = i+1
          k = k+1


        } else {
          A[k] = A2[j]

          j = j+1
          k = k+1


        }


      }

       while (i < A1.length){
       A[k] = A1[i]
       i = i + 1
       k = k + 1}

       while (j < A2.length){

         A[k] = A2[j]

       j = j + 1
       k = k + 1}

  // console.log(A1)
  // console.log(A2)
  // console.log(A)

     }

     mergeSort(a,a1,a2)

>--------------------------------------------------------------<

3.- FINDNUMBER 

let findNumber = (x)=>{

    let b = A.filter(element=>{
    if (element == x){
      return element
    }
  }) 
  if (b != x) {
    console.log(`number ${x} not found`)
  }else{ console.log(`found number matches ${x}`)}
  }

mergeSort(A,A1,A2)
mergeSort(B,B1,B2)
findNumber(13)


let C = [10,11,12,13,14,15,1,2,3,7,8,9,16,17,18,19,20,21,4,5,6,22]
let x = 28

>--------------------------------------------------------------<
4.- sum2IntegersEqualX ITERATIVE SUM ONE ELEMENT WITH THE REST ONE BY ONE 
let sum2IntegersEqualX = ()=>{

  for (let i = 0; i < C.length; i++) {

      for (let j = 0; j < C.length; j++) {
        let b = C[i] + C[j]
         if( b === x){
           console.log(`The current number ${C[i]} with position i: ${i} > plus the number ${C[j]} with position j: ${j} equals to X: ${x}`)

         }
      }
    }

  }

sum2IntegersEqualX()

4.1.- sum2IntegersEqualX RECURSIVE SUM ONE ELEMENT WITH THE REST ONE BY ONE 
let C = [10,11,12,13,14,15,1,2,3,7,8,9,16,17,18,19,20,21,4,5,6,22]
let x = 16


let sum2IntegersEqualX = ()=>{

  let i = 0 

  while (i< C.length){

    let j = 0

    while(j< C.length){

      let b = C[i] + C[j]

        if( b === x){
          console.log(`The current number ${C[i]} with position i: ${i} > plus the number ${C[j]} with position j: ${j} equals to X: ${x}`) 
          } else{console.log(`we couldnt find the number`)}
        j = j+1 
      }
      i = i+1
    } 
}

sum2IntegersEqualX()

>--------------------------------------------------------------<


5.- Evaluate polinomial  2x(^3) + 3x(^2) - 4x + C1(1) 

          X= 8
          ||Factorizar la ecuacion{
            x(2x(^2)+3x-4) + 1
              x(x(2x+3)-4) +1
                Resolver
                x(x(19)-4) +1
                  x(152-4) +1
                    x(148) +1 
                      1184 +1 = 1185
          }

let A = [2,3,-4,1]

let polinomyal = (x)=>{
  let s = A[0]
  for (let i = 1; i < A.length; i++) {
    s = x*s + A[i]
    console.log(s)
  }
console.log(s)
}


polinomyal(8)

>--------------------------------------------------------------<

6.- iNVERSION COST ALGORITHM THIS ONE CAN GO ALONE WITH 1 ARRAY OR INSIDE MERGE SORT TO CALCULATE 
 while A[i]>A[j] & i<j

let A =[9,23,16,17,18,19,20,21,4,5,6,22,1,2,3,7,8,10,11,12,13,14,15]
let inversionCost = (A)=>{

  let inversions = 0
    let i = 0
    let j = 0   

      while (i < A.length) {

          if(A[i]>A[j] && i<j){
            inversions = inversions+1

              console.log(A[i],A[j])
              console.log(i,j)

            console.log(`Total of inversions while sorting is: ${inversions}`)
            j = j+1} 

            else if (j == A.length){ 
              i= i +1 
              j=0} 

              else{j=j+1}
        } 
      }

      inversionCost(A)

6.1.-INVERSIONS BETWEEN THE TWO SORTED ARRAYS

let A1 = [9,23,16,17,18,19,20,21,4,5]
let A2 = [6,22,1,2,3,7,8,10,11,12,13,14,15]


let mergeInversionCost = (A1,A2)=>{

  let inversions = 0
  let i = 0
  let j = 0    

    while (i < A1.length) {

        if(A1[i]>A2[j] && i<j){
          inversions = inversions+1

            console.log(A1[i],A2[j])
            console.log(i,j)

          console.log(`Total of inversions while sorting is: ${inversions}`)
          j = j+1} 

            else if (j == A2.length){ 
              i= i +1 
              j=0} 

              else{j=j+1}
    }}


  mergeInversionCost(A1,A2)


6.2.-MERGESORT WITH MERGE INVERSIONCOST AND INSERTION SORT

let mergeSortWithCost = (A,A1,A2)=>{
  let x = A.length/2-.5
      for (let i = 0; i < Math.floor(A.length/2); i++) {
        let j = Math.floor(A.length/2)
          A1[i]= A[i]
          A2[i] = A[j+i]

          if (x == Math.floor(A.length/2) && i== Math.floor(A.length/2)-1){
            i = i+1
           A2[i] = A[j+i]
         }

        }

        insertionSort(A1)
        insertionSort(A2)
        mergeInversionCost(A1,A2)


    let k = 0
    let i = 0
    let j = 0


    while (i < A1.length && j < A2.length) {
        if(A1[i]<A2[j]){
            A[k] = A1[i]

        i = i+1
        k = k+1


      } else {
          A[k] = A2[j]

          j = j+1
          k = k+1


        }


      }

       while (i < A1.length){
     A[k] = A1[i]
     i = i + 1
     k = k + 1}

     while (j < A2.length){

         A[k] = A2[j]

       j = j + 1
       k = k + 1}

  console.log(A1)
  console.log(A2)
  console.log(A)

     }
mergeSortWithCost(A,A1,A2)

>--------------------------------------------------------------<

7.- FIBONACCI

let fibo = []
let fibonacci= ()=>{



   for (let i = 0; i < 10; i++) {
     if (fibo[i] = 0)fibo[i]=0
                      fibo[i]=1

     if(i > 1)
     fibo[i] = fibo[i-1]+fibo[i-2]

    }



   }

fibonacci()


function fib(n, memo = {}){
  
  if(n<=2)return 1;
  if(n in memo){ return memo[n]}
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n]
}

console.log(fib(40))

>--------------------------------------------------------------<

8.- matrixMultiply(ARRAYS) AND DISPLAY ARRAY


let m1 = [
[1,3],
[7,5]
]
let m2 = [
[6,8],
[4,2]
]
let m3=[]


let matrixMultiply = ()=>{

  for (let i = 0; i < m1.length; ++i) {
    m3[i] = []
    console.log(`valor de i: ${i}
    `)

      for (let j = 0; j < m1.length; j++) {
        m3[i][j] = 0

        console.log(`valor de j: ${j}
        `)


        for (let k = 0; k < m1.length; k++) {
          m3[i][j] += m1[i][k] * m2[k][j];
          console.log(`valor de k: ${k}`)

        }
      } 
    }
    console.log(m3)
  }

let displayMatrix = (A)=>{
for (let i = 0; i < m3.length; i++) {
 console.log(m3[i])
}
}


displayMatrix(matrixMultiply())

>--------------------------------------------------------------<

8.1.- StrassenmatrixMultiply(ARRAYS) AND DISPLAY ARRAY

let m1 = [
  [1,3],
  [7,5]
  ]
let m2 = [
  [6,8],
  [4,2]
  ]

let m3=[];

let strassenMultiplyMatrix= ()=>{
  
  m3[0] = [];
  m3[1] = [];
  
  let a11 = m1[0][0];
  let a12 = m1[0][1];
  let a21 = m1[1][0];
  let a22 = m1[1][1];
  
  let b11 = m2[0][0];
  let b12 = m2[0][1];
  let b21 = m2[1][0];
  let b22 = m2[1][1];
  
  let s1 = b12 - b22;
  
  let s2 = a11 + a12;
  
  let s3 = a21 + a22;
  
  let s4 = b21 - b11;
  
  let s5 = a11 + a22;
  
  let s6 = b11 + b22;
  
  let s7 = a12 - a22;
  
  let s8 = b21 + b22;
  
  let s9 = a11 - a21;
  
  let s10 = b11 + b12; 
  
  let P1 = a11 * s1;
  
  let P2 = s2  * b22;
  
  let P3 = s3  * b11;
  
  let P4 = a22 * s4;
  
  let P5 = s5  * s6;
  
  let P6 = s7  * s8;
  
  let P7 = s9  * s10; 
  
  
  m3[0][0] = P5 + P4 - P2 + P6;
  m3[0][1] = P1 + P2;
  m3[1][0] = P3 + P4;
  m3[1][1] = P5 + P1 - P3 - P7;  
  
  // console.log(P1,P2,P3,P4,P5,P6,P7)
  console.log(m3);
}

let displayMatrix = (A)=>{
        for (let i = 0; i < m3.length; i++) {
                console.log(m3[i]);
        }
}

displayMatrix(strassenMultiplyMatrix())

>--------------------------------------------------------------<                
9.- GET RANDOM NUMBER MIN INCLUDED MAX EXCLUDED

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return `${Math.floor(Math.random() * (max - min) + min)},${Math.floor(Math.random() * (max - min) + min)}`
}

console.log(getRandomInt(0,2))

9.1.-GET RANDOM NUMBER MIN INCLUDED MAX INCLUDED
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return `${Math.floor(Math.random() * (max - min +1) + min)}`
}

console.log(getRandomIntInclusive(0,1))

10.- RANDOM PERMUTE

let A1 = [1,2,3,4,5,6,7,8,9,10]


let randomPermute= (array)=>{
  for (let i = array.length - 1; i > 0; i--) {
   let  j = Math.floor(Math.random() * (i + 1));   
  [array[i],array[j]] = [array[j],array[i]];

   //  let temp = array[i]
  //  array[i] = array[j]
   array[j] = temp

  }
  return array;

}
console.log(randomPermute(A1))

>--------------------------------------------------------------<


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

console.log(shuffleArray(A1))

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    console.log(currentIndex)
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = [1,2,3,4,5,6,7,8,9,10];
shuffle(arr);
console.log(arr);


>--------------------------------------------------------------<

11.- HEAP TREE

let a = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1,200,69,302,4322,653]

let heapTree = (array)=>{

    let b = []

    let arrayLengthHalf = Math.floor(array.length/2)

    for (let i = 0; i < arrayLengthHalf; i++) {
        let parent = Math.floor(i+(1/2))
        let left = (2*i)+1
        let  right = (2*i)+2

        console.log(parent) 
        console.log(`ì : ${i}`)

        if (i==0){
            b.push(a[parent])
            console.log(`the parent of all is ${b[parent]}`)
        }

        if(i<arrayLengthHalf-1){
            b.push(a[left],a[right])
            console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )
    }
        if(i==arrayLengthHalf-1 && arrayLengthHalf != array.length/2){
            b.push(a[left],a[right])
            console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )

        }

        if(i==arrayLengthHalf-1 && arrayLengthHalf == array.length/2){ b.push(a[left])
            console.log( ` a left ${a[left]} parent is ${parent}`)}

           }   console.log(b)
    }        

heapTree(a)

console.log(a.length)

11.1.- HEAP MAX. CHANGES LOWER PARENTS WITH ITS CHILDREN IF THEY ARE BIGGER. CHECKS THAT ALL PARENT ELEMENTS FOLLOW THE MAX ATTRIBUTE, S

let a = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1,23,21,69,200,300,400]
let b = []

let heapTree = (array)=>{


        let arrayLengthHalf = Math.floor(array.length/2)

        for (let i = 0; i < arrayLengthHalf; i++) {
            let parent = Math.floor(i+(1/2))
            let left = (2*i)+1
            let  right = (2*i)+2

            console.log(parent) 
            console.log(`ì : ${i}`)

            if (i==0){
                b.push(a[parent])
                console.log(`the parent of all is ${b[parent]}`)
            }

            if(i<arrayLengthHalf-1){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )
        }
            if(i==arrayLengthHalf-1 && arrayLengthHalf != array.length/2){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )

            }

            if(i==arrayLengthHalf-1 && arrayLengthHalf == array.length/2){ b.push(a[left])
                console.log( ` a left ${a[left]} parent is ${parent}`)}

               }   console.log(b)
        }        

heapTree(a)

// // console.log(b)


let heapMax=()=>{

    let left = 0
    let right = 0
    let largest = 0
    let largestIndex = 0
    let i = 0
    // let modifyLargest = 0
    console.log(b)

    while(i< Math.floor(b.length/2)){
        let parent = Math.floor(i+(1/2))

        // console.log(`valor de i: ${i}`)
        // console.log(`parent: ${parent}`)
        // console.log(`b parent: ${b[parent]}`)

        left = (2*i)+1
        // console.log(`left: ${left}`)
        // console.log(`b left: ${b[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`b right: ${b[right]}`)
        // console.log(`array b: ${b}`)

    if ( (b[left]) > b[parent]) {

        // console.log(`actual b[i] value: ${b[i]}`)
        largest = b[left]
        largestIndex = b.indexOf(b[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ largest = b[parent]

            largestIndex = b.indexOf(b[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (b[right] > largest) {
                largest = b[right]
                largestIndex = b.indexOf(b[right])
            }

            if(largest != b[i]){

                [b[i],b[largestIndex]] = [b[largestIndex],b[i]]

                // modifyLargest=  b[i]

                // b[i] = b[largestIndex]

                // b[largestIndex] = modifyLargest
                // console.log(`b[i] whe largest is different from b[i]: ${b[i]}`)
            }

            i= i+1
        }

        console.log(b)
    }

heapMax()



>--------------------------------------------------------------<

11.2.- MIN HEAP


let a = [1, 10, 2, 6, 3, 4, 5, 7, 8,9]
let b = []

let heapTree = (array)=>{


        let arrayLengthHalf = Math.floor(array.length/2)

        for (let i = 0; i < arrayLengthHalf; i++) {
            let parent = Math.floor(i+(1/2))
            let left = (2*i)+1
            let  right = (2*i)+2

            console.log(parent) 
            console.log(`ì : ${i}`)

            if (i==0){
                b.push(a[parent])
                console.log(`the parent of all is ${b[parent]}`)
            }

            if(i<arrayLengthHalf-1){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )
        }
            if(i==arrayLengthHalf-1 && arrayLengthHalf != array.length/2){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )

            }

            if(i==arrayLengthHalf-1 && arrayLengthHalf == array.length/2){ b.push(a[left])
                console.log( ` a left ${a[left]} parent is ${parent}`)}

               }   console.log(b)
        }        

heapTree(a)

// // console.log(b)


let heapMin=()=>{

    let left = 0
    let right = 0
    let min = 0
    let minIndex = 0
    let i = 0
    // let modifyLargest = 0
    console.log(b)

    while(i< Math.floor(b.length/2)){
        let parent = Math.floor(i+(1/2))

        // console.log(`valor de i: ${i}`)
        // console.log(`parent: ${parent}`)
        // console.log(`b parent: ${b[parent]}`)

        left = (2*i)+1
        // console.log(`left: ${left}`)
        // console.log(`b left: ${b[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`b right: ${b[right]}`)
        // console.log(`array b: ${b}`)

    if ( (b[left]) < b[parent]) {

//         // console.log(`actual b[i] value: ${b[i]}`)
        min = b[left]
        minIndex = b.indexOf(b[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ min = b[parent]

            minIndex = b.indexOf(b[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (b[right] < min) {
                min = b[right]
                minIndex = b.indexOf(b[right])
            }

            if(min != b[i]){

                [b[i],b[minIndex]] = [b[minIndex],b[i]]

                // modifyLargest=  b[i]

                // b[i] = b[largestIndex]

                // b[largestIndex] = modifyLargest
                // console.log(`b[i] whe largest is different from b[i]: ${b[i]}`)
            }

            i= i+1
        }

        console.log(b)
    }

heapMin()

>--------------------------------------------------------------<

11.3.- BUILD HEAPMAX 

let a = [4,1,3,2,16,9,10,14,8,7]
let b = []

let heapTree = (array)=>{


        let arrayLengthHalf = Math.floor(array.length/2)

        for (let i = 0; i < arrayLengthHalf; i++) {
            let parent = Math.floor(i+(1/2))
            let left = (2*i)+1
            let  right = (2*i)+2

            console.log(parent) 
            console.log(`ì : ${i}`)

//             if (i==0){
                b.push(a[parent])
                console.log(`the parent of all is ${b[parent]}`)
            }

            if(i<arrayLengthHalf-1){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )
        }
            if(i==arrayLengthHalf-1 && arrayLengthHalf != array.length/2){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )

            }

            if(i==arrayLengthHalf-1 && arrayLengthHalf == array.length/2){ b.push(a[left])
                console.log( ` a left ${a[left]} parent is ${parent}`)}

               }   console.log(b)
        }        

heapTree(a)

// // console.log(b)
let heapMax=(array,i)=>{

        let left = 0
        let right = 0
        let largest = 0
        let largestIndex = 0

        while(i<= Math.floor(array.length/2)){
            let parent = Math.floor(i+(1/2))

            // console.log(`valor de i: ${i}`)
            // console.log(`parent: ${parent}`)
            // console.log(`b parent: ${b[parent]}`)

            left = (2*i)+1
            // console.log(`left: ${left}`)
            // console.log(`b left: ${b[left]}`)

            right = (2*i)+2
            // console.log(`right: ${right}`)
            // console.log(`b right: ${b[right]}`)
            // console.log(`array b: ${b}`)

        if ( (b[left]) > b[parent]) {

            // console.log(`actual b[i] value: ${b[i]}`)
            largest = b[left]
            largestIndex = b.indexOf(b[left])
            // console.log(`"if normal" largest stored value: ${largest} `)


            } else{ largest = b[parent]

                largestIndex = b.indexOf(b[right])
                // console.log(`"else" largest stored value: ${largest} `)
            }

        if (b[right] > largest) {
                    largest = b[right]
                    largestIndex = b.indexOf(b[right])
                }

                if(largest != b[i]){

                    [b[i],b[largestIndex]] = [b[largestIndex],b[i]]

                    // modifyLargest=  b[i]

                    // b[i] = b[largestIndex]

                    // b[largestIndex] = modifyLargest
                    // console.log(`b[i] whe largest is different from b[i]: ${b[i]}`)
                }

                i= i+1
            }

            console.log(b)
        }


let buildHeapMax=()=>{

    let i = Math.floor(b.length/2)

    // let modifyLargest = 0
    console.log(b)

    while(i>= 0){
        heapMax(b,i)

            i= i-1
        }

        console.log(`funciona el build max heap?`)
        console.log(b)
    }

buildHeapMax()

>--------------------------------------------------------------<

11.4.- BUILD MIN HEAP

let a = [4,1,3,2,16,9,10,14,8,7]
let b = []

let heapTree = (array)=>{


        let arrayLengthHalf = Math.floor(array.length/2)

        for (let i = 0; i < arrayLengthHalf; i++) {
            let parent = Math.floor(i+(1/2)
            let left = (2*i)+1
            let  right = (2*i)+2

            console.log(parent) 
            console.log(`ì : ${i}`)

            if (i==0){
                b.push(a[parent])
                console.log(`the parent of all is ${b[parent]}`)
            }

            if(i<arrayLengthHalf-1){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )
        }
            if(i==arrayLengthHalf-1 && arrayLengthHalf != array.length/2){
                b.push(a[left],a[right])
                console.log( ` a left ${a[left]} parent is ${parent}, a right ${a[right]} parent is ${parent}` )

            }

            if(i==arrayLengthHalf-1 && arrayLengthHalf == array.length/2){ b.push(a[left])
                console.log( ` a left ${a[left]} parent is ${parent}`)}

               }   console.log(b)
        }        

heapTree(a)

let heapMin=(array,i)=>{

    let left = 0
    let right = 0
    let min = 0
    let minIndex = 0

    // let modifyLargest = 0
    console.log(array)

    while(i< Math.floor(array.length/2)){
        let parent = Math.floor(i+(1/2))

        // console.log(`valor de i: ${i}`)
        // console.log(`parent: ${parent}`)
        // console.log(`array parent: ${array[parent]}`)

//         left = (2*i)+1
        // console.log(`left: ${left}`)
        // console.log(`array left: ${array[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`array right: ${array[right]}`)
        // console.log(`array array: ${array}`)

    if ( (array[left]) < array[parent]) {

        // console.log(`actual array[i] value: ${array[i]}`)
        min = array[left]
        minIndex = array.indexOf(array[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ min = array[parent]

            minIndex = array.indexOf(array[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (array[right] < min) {
                min = array[right]
                minIndex = array.indexOf(array[right])
            }

            if(min != array[i]){

                [array[i],array[minIndex]] = [array[minIndex],array[i]]

                // modifyLargest=  array[i]

                // array[i] = array[largestIndex]

                // array[largestIndex] = modifyLargest
                // console.log(`array[i] whe largest is different from array[i]: ${array[i]}`)
            }

            i= i+1
        }

        console.log(array)
    }


let buildHeapMin=()=>{

        let i = Math.floor(b.length/2)

        // let modifyLargest = 0
        console.log(b)

        while(i>= 0){
            heapMin(b,i)

                i= i-1
            }

            console.log(`funciona el build min?`)
            console.log(b)
        }

//     buildHeapMin()


// 11.5.- HEAPSORT USING BUILDMAXHEAP WICH CAUSES THE FINAL ARRAY TO BE IN DECREASING ORDER. IN CASE TO WANT THE FINAL ARRAY 
// TO BE IN INCREASING ORDER USE HEAPSORT WITH BUILDMINHEAP FUCK YEAH

let a = [34692, 8993, 27086, 26252, 42791, 13702, 7365, 27352, 608, 36051, 24626, 29528, 47230, 41264, 35444, 9090, 5489, 4143, 25777, 42750, 33225, 43422, 27836, 39461, 23738, 44621, 9223, 34647, 2634, 32781, 41543, 3068, 26014, 47320, 9578, 17827, 18414, 15900, 39484, 6536, 39886, 26087, 2718, 32613, 21820, 35115, 4687, 44987, 2807, 15017, 22277, 15489, 12109, 5128, 3499, 27448, 17976, 19691, 6594, 40686, 46891, 5436, 19808, 48635, 12122, 6791, 18564, 42657, 12748, 37339, 40353, 5775, 13093, 39378, 21975, 32986, 19291, 17985, 15596, 42401, 6330, 35610, 20544, 27812, 27011, 32135, 18783, 14758, 7897, 31057, 30632, 46476, 35797, 14875, 16835, 48355, 31759, 38133, 46783, 49562, 48268, 23440, 8099, 3007, 21517, 35410, 2175, 18265, 8786, 5797, 17165, 14691, 35475, 13823, 41284, 28482, 46949, 36688, 6721, 41997, 29473, 3108, 10775, 48818, 20940, 6514, 45987, 46687, 17790, 41549, 5122, 47618, 29328, 19210, 32906, 2678, 5934, 40172, 17707, 29844, 25312, 8320, 806, 16545, 48517, 11453, 29539, 27281, 6473, 9509, 24881, 15657, 13827, 15507, 43321, 6181, 37277, 34331, 10231, 43989, 6832, 42669, 368, 38676, 33076, 40158, 19641, 37892, 27553, 33679, 26755, 1015, 31010, 47828, 41306, 14266, 46050, 47900, 44158, 25098, 27296, 9489, 408, 2887, 33694, 38973, 42570, 36537, 35318, 945, 15024, 48657, 921, 6745, 8736, 39364, 9913, 11739, 42021, 46704, 47724, 34116, 13295, 44061, 6358, 35311, 30, 5254, 3877, 44257, 21171, 36032, 46647, 45981, 31117, 929, 19495, 48554, 17334, 28579, 34193, 16007, 39097, 8750, 28169, 25485, 7606, 5936, 20964, 16890, 22980, 3422, 39146, 10233, 38762, 34273, 40864, 11659, 14122, 25965, 17099, 12267, 16346, 24543, 45525, 13316, 46071, 37430, 17316, 46481, 6998, 23351, 28346, 34276, 29405, 25630, 16244, 21769, 41521, 2985, 1481, 8791, 38236, 30298, 34633, 16009, 27684, 687, 202, 1523, 15835, 11679, 30728, 24946, 39352, 3923, 42219, 22375, 28325, 6387, 3593, 6985, 48888, 17209, 36136, 40827, 37090, 11620, 12943, 42775, 2977, 45003, 35752, 31392, 38752, 3482, 28077, 12956, 47042, 22286, 6835, 35733, 616, 26305, 48908, 30803, 17691, 48267, 22290, 49118, 4270, 44400, 15075, 18954, 18815, 21474, 31974, 694, 12622, 5142, 11507, 5560, 20621, 33443, 45779, 41329, 753, 31387, 29889, 26395, 8433, 4923, 20337, 30150, 19916, 16680, 13521, 44262, 5024, 19391, 10900, 2639, 4717, 46099, 39722, 23376, 37443, 14530, 18549, 14567, 2764, 37457, 27551, 43544, 9622, 820, 14956, 4129, 29595, 15892, 15574, 47671, 10294, 21164, 48126, 521, 32656, 47598, 47347, 41291, 48543, 2032, 10935, 2429, 42020, 42145, 23455, 37137, 42282, 25390, 28124, 16488, 30323, 25921, 9756, 47585, 3243, 22403, 16335, 15138, 11919, 27909, 11072, 23109, 29002, 38847, 7014, 4962, 6210, 23135, 18864, 19206, 7366, 48106, 994, 41487, 45676, 4844, 4645, 30492, 13225, 26450, 32879, 13957, 1550, 6008, 613, 24971, 29280, 15678, 11029, 49542, 7841, 14986, 31455, 37894, 47980, 20494, 29838, 45867, 41878, 30661, 18704, 41735, 14640, 21899, 38363, 27813, 13817, 7856, 44020, 38881, 40531, 45750, 5575, 533, 49332, 23991, 26073, 31834, 1877, 10268, 39811, 24399, 41606, 9213, 676, 20817, 22084, 18662, 26691, 42660, 49419, 32013, 39514, 15946, 47698, 25153, 44954, 33617, 20897, 16161, 15478, 27030, 38570, 37835, 40286, 24848, 31978, 831, 17038, 20480, 45425, 40953, 44815, 14611, 19775, 42946, 7626, 19500, 41837, 23746, 42375, 36541, 36805, 49093, 20296, 26593, 16171, 872, 1105, 16570, 40426, 15864, 12307, 18694, 10687, 40391, 22319, 8827, 26118, 30415, 44900, 12902, 40328, 30358, 41393, 58, 6167, 21815, 9810, 10277, 846, 47175, 49583, 13219, 43838, 30313, 6174, 26267, 1360, 15661, 9196, 42802, 31327, 13245, 15966, 46168, 26346, 39434, 31485, 48159, 22741, 38650, 28451, 39424, 22655, 27470, 28831, 45711, 15712, 44926, 12924, 17419, 37385, 15796, 3221, 25015, 17436, 14860, 7335, 47898, 39867, 31320, 5007, 4859, 46092, 10844, 34745, 8164, 10578, 24739, 24659, 16815, 14711, 44401, 4581, 27869, 44760, 44565, 22128, 7441, 16004, 23099, 11859, 2050, 12653, 40650, 44741, 42568, 44347, 42908, 12899, 12648, 21331, 34014, 37577, 19599, 31378, 45098, 18606, 28282, 16532, 17913, 43147, 21104, 22954, 43256, 35061, 46962, 40050, 7456, 8242, 9641, 5896, 24565, 6457, 3249, 18116, 19683, 21132, 26182, 13508, 27288, 23911, 24102, 45129, 25980, 22763, 39858, 38877, 26276, 13021, 8302, 11582, 22333, 6320, 31168, 491, 9707, 25021, 18198, 34750, 6493, 17946, 3617, 7503, 8397, 35937, 24053, 18542, 45, 49134, 44245, 18927, 22224, 40580, 35676, 39015, 13264, 46342, 14085, 31921, 14437, 12890, 5330, 39026, 37914, 25524, 40583, 44592, 13930, 31388, 33826, 38599, 4393, 29310, 37553, 33085, 22595, 48116, 21940, 41317, 33924, 7127, 34063, 6995, 32594, 29611, 6188, 23742, 35112, 47484, 12764, 1485, 30996, 14123, 47075, 45557, 32717, 40275, 18325, 20932, 49881, 22114, 14335, 17872, 9408, 30440, 21491, 45693, 2617, 17260, 35157, 13218, 30922, 6221, 33861, 25351, 32196, 27803, 39943, 48492, 40097, 6459, 39973, 13933, 4933, 17097, 15282, 29267, 7827, 25527, 42618, 34784, 2231, 13331, 18004, 20009, 33235, 47268, 49427, 10988, 19501, 35862, 30064, 27016, 12893, 33337, 39210, 22307, 10978, 31741, 40818, 22138, 22096, 12305, 41048, 34036, 22930, 2864, 17326, 4901, 11551, 3331, 439, 15073, 15868, 38897, 6618, 15745, 16549, 15332, 39023, 21007, 15704, 17737, 13325, 10278, 35873, 20952, 9282, 22197, 25131, 28444, 41844, 28132, 31703, 9543, 8805, 17196, 36574, 29543, 49117, 16301, 45792, 48587, 46020, 22121, 32212, 35759, 29471, 44372, 5072, 10425, 1212, 20037, 30379, 9309, 14026, 26295, 19307, 31272, 45090, 27951, 8418, 49877, 15148, 37032, 35131, 1118, 21464, 20626, 29073, 46125, 27702, 27733, 46457, 20048, 4016, 31976, 48525, 43711, 7872, 34233, 577, 11560, 27243, 11030, 6706, 43459, 6412, 32823, 26906, 42894, 35604, 11223, 13877, 45399, 38741, 48213, 39407, 34104, 7672, 42268, 38582, 23622, 4079, 9804, 23097, 4754, 34573, 41798, 12050, 764, 43993, 14185, 41658, 13145, 39572, 26665, 40539, 36406, 15525, 47891, 6793, 42644, 31121, 2665, 30280, 13284, 6360, 14042, 13296, 45231, 29728, 46308, 43722, 24947, 25037, 6551, 15378, 18072, 22684, 19684, 3671, 35669, 20309, 35468, 11549, 24261, 26476, 8712, 5271, 9929, 36652, 13619, 17259, 39795, 30915, 18727, 32669, 27148, 22404, 25691, 31358, 22292, 10944, 15878, 30147, 16724, 7963, 49566, 43392, 1287, 2604, 37061, 33021, 25244, 35213, 33231, 23059, 940, 20006, 33889, 26487, 40584, 17015, 16833, 32581, 8522, 5320, 45377, 28438, 23017, 13189, 246, 26456, 47814, 31597, 47470, 39383, 11949, 16039, 47604, 5195, 1240, 4904, 38566, 454, 29567, 33824, 16560, 14344, 858, 43196, 20687, 44702, 6681, 36220, 14063, 39282, 30460, 19357, 28880, 33718, 14199, 17049, 27943, 39145, 43776, 15597, 27391, 43534, 4908, 22853, 18188, 6300, 35075, 46388, 47338, 37182, 45126, 34471, 10585, 15112, 10788, 41240, 18673, 29491, 6069, 40970, 26193, 21097, 12712, 3441, 45005, 18379, 3694, 22486, 3808, 39316, 29735, 41660, 17161, 49843, 35586, 35452, 25801, 6862, 7449, 47838, 45298, 38815, 3968, 49209, 8034, 36719, 27637, 7188, 34912, 33299, 23337, 34836, 33, 32889, 23803, 30331, 24483, 2795, 11710, 13833, 23614, 43950, 24804, 11845, 881, 44837, 46946, 5356, 32499, 26807, 34833, 39538, 9277, 32341, 4005, 358, 8301, 13745, 9241, 30092, 26033, 31660, 21997, 15283, 39978, 11386, 32413, 30989, 1831, 6956, 34824, 43490, 44287, 44052, 643, 36248, 2950, 39382, 41613, 2251, 2819, 590, 39686, 21306, 20987, 14214, 37630, 46535, 18457, 20556, 42704, 44159, 9033, 25323, 18252, 47214, 9222, 42406, 26394, 18385, 15415, 4412, 41412, 10039, 45445, 48724, 43720, 7237, 13510, 20281, 37269, 48868, 38104, 15807, 46155, 23605, 19427, 6376, 39700, 29091, 8607, 623, 25710, 8796, 39035, 2589, 19398, 10299, 49824, 2466, 44320, 22059, 6984, 48166, 46623, 23891, 11474, 20517, 30759, 26717, 46887, 14015, 38381, 4268, 28509, 1133, 8010, 14406, 29377, 39969, 31093, 10740, 47783, 47072, 49890, 11130, 46449, 32174, 47471, 26281, 42839, 4367, 21064, 22228, 31763, 326, 12424, 37633, 18940, 34525, 40961, 23286, 45503, 4748, 41573, 19418, 47780, 30859, 2595, 6934, 48551, 12320, 4186, 11031, 19312, 6650, 4722, 15015, 21853, 31621, 25103, 412, 24157, 25177, 16513, 5023, 41269, 34356, 35542, 32449, 45476, 7426, 31339, 24052, 24313, 39861, 49622, 27061, 38643, 28777, 35123, 35476, 14378, 33940, 26271, 36172, 33377, 16522, 45818, 3579, 18609, 36073, 18260, 11490, 12696, 46075, 22410, 36908, 796, 42440, 16821, 4483, 29253, 17120, 29946, 16077, 2582, 27522, 10624, 33422, 961, 18740, 49586, 45495, 1971, 12174, 32791, 17757, 1363, 21949, 13874, 38099, 8749, 22889, 3442, 13633, 2719, 44819, 9129, 24627, 6468, 22917, 39783, 14922, 45236, 49589, 10419, 44585, 32885, 4197, 9209, 7894, 39451, 24378, 31198, 37046, 44619, 2014, 40921, 9031, 18961, 48976, 18762, 18067, 25050, 39951, 33465, 2873, 14543, 44230, 1660, 24890, 13913, 42370, 15007, 34768, 8141, 16222, 5467, 32239, 6699, 27278, 24595, 9726, 22896, 12730, 21689, 38632, 11136, 821, 24352, 24250, 45970, 24703, 14189, 26932, 32307, 4579, 35417, 38250, 10087, 5921, 17018, 6325, 13318, 34892, 18772, 6807, 47862, 10473, 23969, 20500, 27397, 9976, 13538, 44990, 20295, 12886, 1940, 7199, 17050, 6180, 17728, 39430, 40351, 40950, 35348, 7707, 23626, 20219, 9089, 29069, 11400, 3516, 46808, 47889, 42432, 6773, 475, 36012, 45898, 40103, 11996, 21100, 10374, 47651, 39079, 48457, 3865, 26522, 40440, 6759, 11437, 4284, 8775, 16497, 14713, 282, 44778, 15051, 8134, 20088, 6139, 46628, 11027, 3601, 36031, 35765, 40974, 38252, 26518, 19809, 27682, 47246, 47193, 2566, 13265, 28154, 4932, 35130, 1304, 9415, 28731, 44354, 13384, 49786, 33059, 14116, 30905, 31064, 33772, 35723, 16649, 35834, 14287, 47101, 24366, 32632, 48584, 34510, 29965, 14856, 16932, 5808, 38197, 31793, 35529, 41571, 36765, 38432, 25680, 38983, 31350, 4327, 30591, 14824, 6406, 17327, 40751, 47959, 33325, 41442, 34982, 5527, 10128, 10569, 22483, 47800, 26920, 38578, 3471, 30458, 21730, 30111, 34218, 49028, 49154, 18165, 10739, 15862, 32219, 11365, 853, 43246, 34405, 15877, 1341, 10830, 29771, 47790, 43495, 23492, 46380, 14007, 14418, 14656, 4202, 42137, 31038, 17574, 31931, 31809, 31180, 11508, 47767, 46738, 11782, 15526, 12434, 19326, 10218, 49932, 6078, 48981, 13947, 37314, 49837, 17367, 29767, 23488, 30013, 14525, 26235, 46790, 2332, 39367, 46840, 9685, 11037, 1925, 24651, 10839, 31288, 36318, 31237, 23704, 31864, 42516, 5505, 30643, 10846, 20927, 30011, 22421, 12035, 25110, 6149, 34075, 24684, 20928, 39916, 47739, 27766, 31581, 28479, 39037, 38000, 29355, 17239, 10221, 18111, 11004, 6309, 1399, 28368, 19208, 49271, 2349, 22210, 1087, 13403, 11108, 20386, 6936, 4008, 15466, 29856, 6786, 46079, 26221, 35713, 27622, 20549, 13421, 35525, 39063, 10591, 19719, 41589, 23780, 34023, 41030, 40812, 5123, 8669, 22736, 9793, 24426, 13759, 31609, 18329, 35703, 4354, 30822, 5683, 35796, 14091, 8036, 9170, 27493, 43547, 16974, 948, 27623, 43843, 13206, 6696, 45723, 28638, 29175, 19049, 28417, 41779, 10966, 15444, 24701, 39032, 24080, 31338, 14604, 3801, 12417, 10058, 1251, 49318, 40867, 29510, 24387, 13299, 40992, 5317, 42974, 265, 4055, 46317, 22647, 39766, 6498, 21224, 41327, 7496, 38346, 40502, 44001, 14512, 13879, 41102, 9077, 4913, 26900, 31615, 9048, 37654, 39778, 27201, 36664, 6591, 8830, 8297, 27084, 14313, 27833, 21179, 1396, 27041, 48162, 34891, 4771, 20033, 20966, 19145, 33572, 37829, 3143, 32054, 24800, 30095, 21017, 32520, 20318, 25830, 24050, 14038, 35097, 27029, 1344, 34192, 1768, 16907, 4615, 25000, 13334, 28641, 23798, 36444, 14412, 39064, 12770, 30934, 3913, 3926, 32176, 41564, 36088, 601, 28670, 17257, 22859, 29054, 4274, 8079, 15566, 1513, 41274, 46732, 39696, 2581, 22444, 6860, 32204, 44325, 12177, 10524, 8970, 41462, 9106, 34336, 33876, 18411, 40898, 14331, 12394, 36691, 31942, 13081, 2220, 36226, 13594, 13499, 213, 13143, 40678, 23851, 7755, 7863, 29920, 17694, 35222, 48652, 45352, 7716, 35374, 28097, 26095, 20358, 18384, 42720, 33771, 42514, 40226, 17781, 8057, 18447, 16705, 42754, 6544, 18887, 32383, 38174, 36120, 13855, 34598, 9038, 33218, 10175, 17829, 14768, 399, 7200, 43519, 28624, 12065, 45166, 31270, 11285, 7050, 35710, 5883, 4957, 11161, 766, 3274, 18115, 33247, 26471, 16374, 27717, 1757, 39660, 31054, 44810, 30292, 46553, 39880, 47983, 42926, 23533, 36237, 29689, 25108, 24419, 17937, 28985, 11749, 9255, 45147, 36854, 40833, 28462, 41248, 27437, 22046, 39104, 28297, 14522, 37078, 23384, 49619, 38112, 40034, 878, 3924, 35064, 16240, 741, 42359, 19638, 17874, 23338, 48838, 35046, 43836, 43471, 37631, 17782, 33191, 49319, 26696, 16554, 17586, 49735, 30407, 35945, 49770, 34563, 43649, 26367, 807, 49998, 9200, 16493, 3511, 48927, 13514, 49204, 11898, 22731, 4773, 19293, 48556, 1670, 12460, 10090, 15348, 30346, 19818, 42435, 4380, 16429, 47497, 3890, 20763, 49246, 48005, 29697, 5392, 2010, 35917, 11666, 32114, 5511, 30072, 7564, 15484, 32138, 5886, 9461, 34840, 3762, 26142, 21140, 41717, 26865, 35008, 11732, 14594, 44526, 38001, 3362, 41266, 23945, 10808, 14141, 10111, 20429, 7656, 27040, 37320, 2037, 41643, 48430, 42942, 48194, 37742, 12721, 19139, 19130, 39726, 5550, 43499, 8403, 34993, 49502, 48832, 26833, 26922, 5465, 18053, 29053, 23836, 21927, 2209, 31065, 27704, 16075, 25045, 49630, 7088, 24494, 43819, 49103, 26374, 6060, 45900, 35666, 27753, 41753, 30624, 21832, 15342, 2737, 219, 22661, 20074, 18834, 36986, 26068, 48400, 31955, 41990, 19289, 35482, 35474, 8185, 43241, 7275, 31201, 33825, 49882, 35957, 38076, 46259, 20345, 21051, 9407, 11713, 47459, 4725, 24407, 29157, 2432, 13614, 5691, 16213, 42588, 13658, 48880, 42833, 18360, 7041, 42083, 4255, 46786, 41767, 4425, 30763, 33251, 14666, 438, 46077, 30474, 47895, 2804, 6395, 40670, 40092, 13262, 49864, 47609, 34668, 45744, 34032, 35236, 4972, 49031, 28407, 20708, 29850, 30752, 49723, 6160, 8336, 4601, 253, 8460, 46657, 27955, 41907, 49750, 42415, 7537, 46205, 21204, 16372, 15742, 33407, 32988, 40329, 18737, 26124, 1157, 25167, 43997, 21054, 48600, 26947, 43636, 35370, 8846, 48271, 46185, 32847, 47981, 40628, 5308, 40484, 1808, 17690, 13343, 16555, 46019, 47280, 36277, 21109, 21562, 12432, 43089, 42155, 11676, 39332, 48887, 9007, 49555, 2919, 46575, 25052, 16764, 26745, 34166, 559, 49112, 40879, 24566, 11478, 21687, 40917, 21312, 46433, 46619, 20179, 5654, 38211, 2394, 33830, 5014, 28929, 39499, 20930, 26398, 30706, 20937, 42684, 30286, 30688, 17577, 40230, 3669, 42861, 47810, 30727, 30004, 291, 47147, 5513, 3679, 21145, 44743, 9403, 37370, 39246, 31892, 42914, 11205, 28924, 1336, 12938, 13869, 4147, 6676, 3542, 32338, 7292, 38187, 12789, 33156, 39646, 18094, 35143, 27433, 28664, 13784, 21619, 8342, 18211, 30169, 46995, 19992, 39805, 12526, 39496, 1753, 42178, 4924, 29431, 27094, 14139, 7998, 49373, 9844, 1001, 738, 19911, 5802, 25514, 43600, 20079, 23958, 48767, 26878, 17964, 8845, 46214, 30653, 30418, 38512, 26017, 31120, 31838, 9593, 39259, 32408, 42128, 6280, 21819, 17963, 23426, 40270, 41645, 20250, 6565, 46663, 40233, 28862, 37214, 11913, 47512, 20848, 29285, 27570, 21614, 31673, 8885, 17455, 36503, 20338, 37406, 4172, 41375, 16665, 39699, 11587, 21219, 32541, 37225, 1596, 19962, 43641, 33450, 12567, 24918, 4128, 49267, 3376, 3410, 7421, 16288, 23754, 47552, 43590, 12932, 3039, 34544, 7556, 25185, 35520, 37883, 24720, 22926, 6647, 18949, 46202, 14453, 30687, 15486, 3294, 9128, 20727, 43851, 25580, 4879, 49426, 34413, 32894, 11576, 5213, 31989, 27903, 49421, 5631, 28079, 16808, 19399, 13616, 47975, 22044, 26045, 44683, 32784, 44704, 36123, 49023, 24151, 2384, 45664, 16939, 29518, 3649, 49448, 4313, 9037, 43254, 6513, 29725, 41580, 12036, 13976, 30954, 10078, 24974, 33602, 23347, 43579, 14588, 27646, 17167, 1320, 39103, 42326, 26261, 2837, 25908, 22746, 33757, 24980, 28356, 14136, 26469, 16743, 24989, 37016, 15198, 26698, 20871, 5850, 47770, 16437, 12800, 47836, 18016, 47460, 5396, 8015, 33416, 41894, 30368, 21319, 37517, 12708, 33737, 8219, 44016, 25736, 45156, 26127, 22634, 11764, 4938, 46040, 16682, 15533, 30386, 45212, 17844, 14943, 39752, 37159, 6875, 34103, 41283, 22400, 41221, 28023, 29666, 7914, 28273, 39503, 27428, 9588, 24206, 42383, 29181, 38069, 19643, 654, 43368, 42520, 30941, 47976, 4180, 16383, 46450, 34632, 20696, 4161, 45460, 43387, 27804, 49082, 34613, 47538, 45763, 7631, 39171, 49153, 20205, 3072, 24545, 32084, 4614, 19685, 44385, 46334, 28716, 40087, 36953, 16232, 35828, 22988, 24828, 31722, 20813, 42308, 39127, 18878, 31394, 45148, 15356, 48645, 15998, 5191, 24007, 21082, 42212, 32183, 34251, 42830, 5799, 37048, 49633, 1990, 5160, 41909, 43918, 7031, 6262, 10263, 37800, 8439, 33514, 10291, 35524, 33074, 30772, 45845, 5417, 2700, 37355, 30536, 21126, 10471, 1254, 34361, 13438, 7849, 199, 4833, 17262, 17420, 28344, 12046, 311, 29516, 38260, 25118, 17276, 38734, 15968, 4524, 19018, 4253, 13971, 13416, 21926, 37549, 1170, 42191, 9195, 39771, 28327, 29176, 12520, 9080, 16584, 46784, 19591, 15201, 37632, 32772, 21461, 6977, 3678, 30037, 43263, 1161, 13106, 39327, 11028, 31308, 41473, 34026, 24235, 19522, 15836, 4997, 17789, 44388, 39132, 5653, 29752, 7836, 36162, 15965, 24433, 11552, 23510, 17530, 42849, 37765, 33292, 29420, 16410, 2820, 25295, 33526, 1374, 39992, 10589, 14276, 16115, 8165, 12113, 40117, 25359, 20745, 11383, 38253, 24181, 44706, 19019, 46854, 48112, 11496, 27036, 29217, 36992, 37645, 27263, 4659, 40621, 49726, 27028, 5932, 28967, 5248, 46815, 361, 46572, 25486, 31370, 29096, 2847, 45462, 40683, 38350, 21431, 49577, 1529, 11064, 28779, 37284, 2483, 11809, 25929, 13414, 6848, 41557, 45416, 39125, 47188, 26055, 20286, 46102, 28614, 26274, 26061, 33558, 46608, 4135, 45118, 29205, 28506, 33805, 27580, 23773, 21534, 33287, 45934, 589, 1083, 2724, 4515, 5757, 38921, 775, 3970, 30316, 21087, 16110, 33635, 12578, 8007, 20884, 36302, 5814, 9087, 3298, 18085, 47730, 23512, 25090, 2759, 1097, 23609, 39180, 8739, 14793, 39398, 23027, 21249, 46511, 33400, 39806, 15263, 2059, 31027, 15041, 6829, 42228, 26550, 43548, 14054, 24482, 48640, 11297, 28067, 40161, 30170, 26653, 3247, 48368, 34007, 7013, 36974, 40344, 13301, 41814, 45884, 2968, 24114, 16313, 17208, 10507, 46223, 17279, 5286, 7797, 18160, 12264, 28617, 35074, 6863, 45535, 36609, 1059, 49428, 401, 39808, 37167, 2119, 17388, 10125, 4165, 47547, 9471, 6812, 39224, 35085, 20748, 18831, 10132, 25058, 7926, 24281, 30216, 41916, 23760, 48450, 23389, 44953, 39038, 13478, 20023, 47299, 44021, 37978, 8170, 37278, 1409, 35762, 27478, 38090, 31177, 18359, 6781, 37576, 19903, 11042, 33144, 48097, 25132, 26988, 22269, 44093, 46453, 14571, 33507, 26825, 12584, 23221, 28151, 37572, 45646, 39324, 7147, 7840, 19616, 38858, 4071, 34601, 23189, 14065, 449, 15078, 8425, 30867, 16898, 8747, 11831, 36491, 15510, 803, 7502, 40960, 3383, 33722, 9099, 24213, 48628, 9548, 6717, 32953, 43326, 41194, 19224, 44896, 12149, 46507, 22291, 35641, 45856, 7947, 24748, 5170, 40561, 14045, 27429, 44780, 16399, 42336, 2459, 6297, 28050, 40998, 19668, 10261, 27100, 32038, 37116, 19228, 36566, 37252, 9052, 23871, 43970, 7731, 12561, 17173, 13493, 19734, 26160, 3151, 6065, 10876, 8664, 9964, 150, 41992, 42715, 12006, 25878, 47393, 34864, 8016, 20513, 45008, 22227, 46234, 6946, 11267, 25851, 5694, 39884, 12041, 15951, 46667, 47638, 4809, 23952, 5120, 40064, 32899, 44888, 5716, 41169, 26071, 37840, 27414, 41595, 35784, 3413, 20130, 48288, 44947, 47999, 39429, 40817, 37248, 15206, 12734, 11243, 26738, 12619, 37823, 45466, 48109, 18644, 34491, 48089, 22190, 37485, 36983, 5630, 23065, 7085, 10742, 18521, 6577, 45303, 26760, 18024, 18213, 518, 18792, 39715, 27751, 36163, 1710, 8335, 44190, 5156, 37265, 34614, 43537, 45545, 44729, 42018, 45685, 4133, 26931, 36281, 21863, 30088, 38534, 11662, 36003, 47743, 6639, 7854, 32951, 27190, 47211, 36706, 47693, 1319, 14805, 47493, 34505, 24106, 38622, 42635, 43960, 46624, 47523, 35490, 18769, 47216, 31574, 37961, 40403, 33402, 21626, 27158, 31001, 25667, 22024, 22489, 48118, 42023, 11797, 43194, 48107, 26500, 11215, 43446, 13377, 4960, 21308, 26607, 29877, 47821, 14581, 45451, 17618, 24634, 16712, 3034, 47012, 42036, 21514, 36531, 27923, 40610, 29692, 19506, 31391, 41429, 12633, 1357, 32721, 46282, 32213, 26238, 14121, 8799, 40518, 22903, 19899, 21688, 29608, 43758, 16938, 21807, 18856, 8671, 15435, 7674, 10325, 18293, 49229, 1148, 12895, 19175, 46245, 24341, 2834, 2601, 4845, 47173, 45769, 44430, 15650, 49491, 44465, 17344, 930, 4293, 16851, 46167, 46028, 43691, 13524, 48001, 24142, 32429, 39122, 35772, 29806, 47908, 38740, 1986, 756, 51, 32512, 40747, 13200, 25247, 39851, 25046, 42150, 17333, 25599, 7112, 16723, 43988, 10506, 48947, 8300, 38016, 2637, 37119, 5881, 48780, 38358, 28680, 36578, 34221, 46936, 32264, 39373, 49191, 49054, 43648, 5369, 15592, 10713, 317, 37518, 46187, 28009, 8672, 35998, 12080, 49582, 28778, 14227, 26754, 34143, 42461, 33978, 43149, 40046, 2107, 18059, 30845, 45421, 37671, 26210, 49934, 23959, 15789, 41661, 26414, 39391, 36011, 28306, 33013, 12815, 36145, 5723, 33606, 38010, 21315, 20040, 7016, 41223, 49018, 19801, 21857, 1784, 39611, 15754, 44097, 16769, 38930, 42641, 7452, 16562, 14756, 37150, 1698, 23388, 41345, 49898, 32425, 39520, 12411, 9492, 2001, 7883, 48705, 49169, 43533, 49155, 1622, 34109, 9936, 31427, 26509, 5893, 343, 6030, 10938, 14784, 1053, 12863, 15921, 26379, 34006, 6182, 34990, 21982, 14169, 11840, 18839, 33769, 2240, 15254, 18828, 34368, 35191, 25946, 2859, 39804, 20417, 46994, 13511, 21280, 41705, 27832, 35580, 4106, 49111, 36791, 19205, 20650, 44298, 37191, 34412, 6063, 6401, 32529, 75, 39507, 1687, 49412, 40895, 7748, 22516, 42226, 45682, 24594, 10432, 13381, 10159, 17820, 32877, 22119, 37810, 24856, 40907, 22733, 19636, 27609, 43650, 49178, 8196, 7347, 24327, 34823, 20010, 8092, 25749, 38801, 33629, 49783, 36874, 9313, 32575, 26089, 47979, 1906, 19363, 16702, 2229, 18089, 10314, 30582, 2418, 17756, 13948, 123, 40084, 28959, 44024, 38085, 11568, 48334, 15133, 43886, 13699, 16559, 9651, 14803, 9374, 16817, 36790, 45606, 42203, 49293, 35934, 34108, 12833, 33603, 8409, 42186, 25829, 24532, 32256, 14888, 47727, 29991, 45081, 41492, 48478, 30469, 40175, 11063, 15087, 36598, 28271, 35290, 632, 3576, 13131, 34524, 43253, 13876, 38873, 37776, 23795, 20842, 37346, 47597, 11385, 30694, 2133, 36412, 44114, 7636, 23732, 25757, 36590, 3191, 47200, 26030, 5266, 14926, 25678, 49730, 32245, 44475, 11290, 34847, 33068, 22639, 39361, 33545, 29592, 2564, 18647, 4865, 11609, 24992, 8395, 30504, 45775, 41553, 48911, 44416, 17596, 18575, 7644, 47286, 38854, 36090, 34552, 39082, 102, 38755, 3625, 14330, 26855, 8215, 30499, 33371, 40715, 18051, 35614, 29480, 19172, 24658, 32117, 10093, 4514, 4322, 27515, 4290, 39673, 34024, 3386, 48606, 7266, 33997, 44420, 19258, 44408, 42223, 32189, 43455, 30376, 25102, 240, 16957, 40535, 422, 30615, 49078, 43108, 15490, 41195, 26615, 45167, 39945, 15753, 29975, 24443, 13796, 8559, 43996, 1524, 49654, 48232, 35056, 4007, 46510, 10130, 25782, 48605, 22149, 30131, 4900, 34127, 49602, 15323, 45786, 523, 18600, 42805, 26532, 47323, 37184, 4122, 12289, 17726, 20468, 28427, 18105, 37231, 29626, 11357, 40259, 31546, 3822, 11079, 13182, 5542, 18744, 8314, 49844, 1466, 44070, 31108, 1684, 24790, 38664, 549, 46566, 35364, 33657, 59, 27893, 32802, 18993, 46311, 39389, 34019, 37152, 36438, 18451, 21895, 45757, 11208, 17557, 29379, 1226, 25320, 2891, 3603, 43102, 9215, 27839, 23834, 28255, 43673, 26617, 4982, 48156, 3887, 20557, 16188, 17808, 29745, 26946, 27594, 33088, 48624, 42387, 38668, 17977, 35973, 38851, 8488, 23416, 42747, 4792, 37684, 29715, 48984, 29401, 6527, 36793, 36312, 8694, 29547, 3237, 48160, 46470, 39292, 46591, 4737, 31612, 3353, 32524, 48728, 40626, 30374, 935, 28429, 20320, 24628, 11647, 30967, 46216, 43148, 35275, 10867, 6726, 6248, 4214, 14993, 15108, 38510, 15346, 31606, 19150, 17870, 8080, 274, 13617, 23004, 12324, 11435, 13631, 42427, 49307, 25235, 21772, 29064, 36075, 3241, 638, 16595, 24706, 24226, 16891, 32941, 14815, 34871, 27001, 33017, 31282, 9185, 36700, 37215, 15912, 39782, 17800, 1243, 33170, 19077, 7898, 4222, 4292, 42742, 4298, 28611, 29788, 17566, 1548, 47822, 11744, 31538, 10064, 20989, 29818, 30047, 41962, 6856, 28522, 31478, 1822, 29446, 41226, 26344, 41422, 24156, 45224, 986, 18132, 32475, 33801, 12140, 38058, 40586, 38098, 5255, 35016, 26340, 47741, 41478, 40538, 17528, 29263, 2550, 48137, 35876, 3780, 36852, 2783, 43664, 25342, 28793, 4112, 1552, 43947, 33275, 7944, 34313, 43393, 39114, 25387, 40671, 33618, 31055, 22328, 11715, 21498, 18620, 3931, 2008, 12280, 42679, 49066, 44454, 6621, 15447, 37846, 32217, 26531, 25437, 30740, 7588, 22478, 29678, 8657, 43671, 46573, 34056, 18709, 28195, 34182, 38047, 48901, 21561, 26144, 6597, 24951, 32063, 41809, 13422, 779, 24967, 10315, 41198, 9731, 39346, 10777, 30907, 37552, 18582, 16179, 38917, 10343, 18568, 22803, 15672, 453, 47018, 30035, 19810, 46666, 33522, 77, 455, 32642, 40849, 14672, 42460, 43701, 31292, 23002, 5214, 41185, 37197, 26851, 23364, 18082, 20874, 16157, 27817, 11463, 36927, 29075, 1306, 22350, 22035, 21361, 44236, 34029, 38966, 35039, 26035, 44931, 37880, 13777, 49646, 40156, 8142, 31571, 9693, 48211, 26255, 48685, 19027, 47966, 1231, 28979, 46026, 6605, 3956, 16719, 40313, 1199, 34213, 35643, 27444, 32108, 24110, 92, 13341, 4979, 15768, 35108, 26843, 1041, 38181, 24585, 40891, 11459, 30381, 31946, 6614, 30509, 32710, 11712, 15224, 28507, 31337, 21519, 49453, 33329, 27942, 13484, 23398, 41137, 38506, 28618, 28881, 21986, 15476, 26733, 32254, 41574, 1983, 34612, 41533, 2099, 36946, 11493, 13537, 32599, 19906, 41686, 24713, 2777, 41372, 28230, 41276, 21212, 16656, 32133, 7084, 20797, 28908, 48406, 42560, 33546, 47174, 22309, 30729, 47492, 29221, 48561, 23735, 33211, 24569, 32081, 39372, 36007, 23699, 4803, 41339, 6816, 40299, 41103, 44614, 10946, 3352, 28476, 44181, 9397, 4999, 27017, 13204, 33764, 24603, 5328, 16961, 42497, 23914, 19601, 33210, 13227, 8457, 3122, 11808, 5673, 45351, 35660, 17424, 25143, 14851, 46661, 1046, 48541, 13370, 8680, 47584, 20801, 46091, 44240, 39939, 42996, 27043, 12968, 12785, 44543, 11373, 35167, 21351, 204, 13875, 41312, 34705, 39159, 45249, 43203, 32031, 14566, 6584, 21645, 23561, 25142, 32458, 12657, 32210, 48583, 20867, 5887, 32591, 23925, 34702, 25874, 4726, 19191, 10927, 8948, 6244, 21090, 14117, 24645, 17972, 26467, 44270, 21576, 8654, 38191, 21613, 18827, 25289, 42211, 38832, 45273, 6486, 39086, 33105, 46483, 34271, 23813, 26748, 12133, 16441, 13966, 27410, 47857, 15265, 3793, 6723, 33819, 25305, 2598, 2159, 39480, 18791, 16256, 12749, 30735, 48621, 17843, 39329, 12489, 24019, 30890, 15686, 31798, 44959, 22415, 25365, 14985, 48616, 39348, 30274, 4708, 25869, 37999, 17205, 9618, 44929, 41775, 34717, 41351, 22845, 44369, 30833, 9917, 46630, 1853, 20424, 25463, 3172, 47581, 9291, 30607, 46497, 30470, 27591, 33521, 4818, 17345, 46846, 38618, 20803, 28841, 29618, 42011, 34694, 15125, 2710, 29691, 46823, 10185, 9034, 36454, 45433, 21122, 23503, 44858, 34317, 3952, 21911, 14971, 22242, 25126, 40193, 29953, 30784, 5841, 31049, 7078, 43040, 1952, 42000, 363, 4743, 1346, 12064, 34829, 17852, 8177, 3540, 35680, 42859, 23051, 3735, 35355, 28364, 47388, 10659, 23089, 49634, 30513, 48444, 39074, 4713, 42096, 4359, 40252, 45512, 7164, 23762, 11857, 35331, 24571, 48858, 8901, 21716, 4160, 9605, 21958, 43327, 11131, 46896, 23145, 47291, 9801, 14751, 9117, 20652, 40585, 10470, 28574, 31278, 8474, 40019, 49227, 25468, 621, 25356, 27650, 9348, 40366, 47888, 885, 25285, 14436, 42210, 9506, 8262, 29391, 35249, 3518, 1262, 41818, 48080, 39589, 49712, 5599, 5477, 29861, 15637, 41039, 25752, 29881, 48299, 42318, 7567, 3477, 43631, 23361, 16573, 36265, 31869, 34043, 46477, 38843, 31231, 33616, 45941, 10276, 43309, 41889, 11955, 1129, 24878, 31576, 8980, 31435, 32568, 5483, 5000, 2205, 42430, 27110, 31961, 39711, 34255, 15214, 3301, 49444, 27556, 29429, 32739, 45661, 38672, 41590, 29523, 198, 12518, 21976, 17451, 12405, 37001, 26503, 29809, 13121, 11776, 17949, 7519, 37257, 23474, 4443, 31159, 10258, 1496, 46064, 18981, 9836, 47947, 28752, 25420, 12079, 7969, 27360, 11973, 20657, 39506, 39226, 15001, 12271, 11367, 24895, 5265, 28570, 15947, 43624, 27435, 23595, 14405, 12973, 35194, 6788, 42535, 11236, 24516, 49616, 20663, 8544, 35044, 47362, 11086, 22702, 26713, 24079, 32579, 24377, 39, 7659, 15883, 40320, 32260, 17151, 49354, 49367, 8815, 24513, 15963, 25510, 44921, 24331, 13813, 2821, 41246, 45056, 11567, 7, 34378, 42723, 40928, 21451, 30253, 28548, 13188, 48690, 10540, 39995, 38886, 19724, 4328, 10883, 49495, 13881, 35668, 48722, 11734, 35744, 13082, 42671, 9280, 19386, 394, 21542, 10798, 27472, 17620, 26451, 47805, 45315, 48408, 44966, 30178, 35554, 11908, 2085, 24885, 15345, 8105, 44955, 30810, 18636, 39597, 40546, 40986, 25910, 22908, 17532, 25398, 34799, 7363, 38631, 13305, 12564, 8236, 4191, 19513, 32030, 30196, 15625, 26440, 31504, 4042, 6399, 28606, 7590, 4437, 38557, 19162, 36909, 41406, 48623, 18789, 276, 11224, 30721, 34049, 27367, 11994, 33906, 25109, 4024, 16793, 45812, 40318, 49439, 46736, 31357, 36147, 7378, 42722, 47650, 26380, 20534, 37243, 40006, 45254, 9791, 23278, 29656, 16925, 26765, 30649, 16726, 35577, 30569, 1079, 1324, 45179, 5948, 39317, 22420, 21639, 24855, 44887, 25348, 43978, 28801, 29989, 10355, 36938, 22179, 10212, 12974, 44613, 15513, 19588, 40222, 4863, 9690, 45035, 2884, 44448, 49177, 15761, 3416, 45972, 24160, 13960, 46405, 41160, 29803, 26632, 29161, 22502, 45091, 32105, 48715, 38820, 11266, 4388, 21129, 7808, 32537, 6247, 33464, 31735, 19901, 20950, 21664, 17902, 7107, 38057, 11261, 43358, 7389, 15938, 15050, 48428, 4162, 5999, 37936, 2308, 33405, 11169, 49740, 17599, 26626, 44909, 25838, 16977, 21496, 13836, 38218, 24995, 50000, 26232, 46597, 46002, 18904, 39874, 34455, 2288, 40045, 40253, 327, 19452, 12940, 5169, 30819, 34110, 27406, 31136, 16180, 7442, 26761, 16303, 24262, 21592, 3650, 33632, 29826, 23360, 10644, 3286, 43680, 17548, 4665, 19321, 17164, 7316, 43110, 3087, 43, 19021, 7815, 44324, 48122, 15344, 27929, 48239, 31243, 42408, 43905, 38214, 20584, 31109, 33964, 16758, 25464, 626, 26583, 45015, 35280, 5538, 47105, 41955, 41342, 27908, 32891, 32177, 125, 47049, 21590, 44350, 14569, 43045, 28032, 21833, 3414, 17911, 28634, 20300, 39031, 13925, 18838, 47431, 24493, 17221, 43467, 22364, 22844, 10234, 8272, 11366, 25440, 34623, 31652, 24082, 48274, 42241, 22466, 37904, 20994, 45859, 26018, 15317, 3764, 1375, 39631, 46844, 6519, 13743, 30814, 32238, 41463, 46796, 25282, 46233, 47901, 11392, 46644, 14609, 46226, 44673, 7864, 44268, 33749, 25355, 32097, 4249, 3078, 47905, 34641, 19659, 4919, 3146, 23277, 39600, 30991, 4802, 11628, 22842, 49282, 29126, 35932, 45058, 31936, 42048, 3374, 42564, 45393, 35010, 29077, 28238, 11834, 39204, 44770, 6340, 4432, 7779, 12208, 21855, 23313, 5464, 12849, 23506, 18804, 34534, 22608, 30085, 14333, 38042, 45610, 5355, 6919, 46599, 44637, 21817, 32650, 36976, 46246, 45408, 4649, 40139, 20473, 3623, 39417, 9180, 13104, 38768, 35826, 10708, 14655, 46945, 3686, 4314, 8900, 18479, 28835, 40454, 45658, 13087, 14862, 17611, 23194, 24061, 8226, 40277, 5726, 21468, 2268, 21696, 36774, 15076, 473, 19520, 15726, 19259, 2829, 14465, 13794, 16191, 4004, 22127, 16762, 23593, 1702, 34366, 13190, 44254, 47558, 11800, 42981, 38783, 46733, 36544, 16220, 7661, 43667, 30335, 47050, 40820, 17615, 32185, 30609, 37968, 17884, 14765, 45799, 47392, 33145, 45390, 16729, 34346, 41323, 20327, 46495, 20214, 42029, 47183, 25242, 29177, 5383, 39997, 42840, 19014, 8903, 48658, 29990, 15873, 36420, 49356, 15725, 33255, 14182, 45777, 3091, 11306, 33032, 32119, 15937, 36169, 20724, 24880, 8930, 48574, 24420, 12482, 3280, 42285, 48040, 18222, 28578, 38839, 24406, 38400, 37998, 43546, 5411, 46474, 37200, 3598, 29842, 32774, 20196, 7056, 1551, 9017, 36319, 36272, 49710, 37422, 3848, 18087, 37349, 14657, 14454, 558, 24778, 2510, 41652, 34158, 19633, 16799, 17480, 49632, 17423, 34795, 3291, 29103, 31263, 889, 9535, 33233, 41673, 15679, 44911, 23412, 12894, 11477, 26262, 45324, 19181, 45469, 7134, 18270, 3969, 12955, 30063, 39546, 7945, 12689, 28434, 13095, 12555, 13931, 44602, 26176, 42090, 14869, 43725, 36072, 22010, 12698, 788, 24441, 3489, 19251, 1207, 10463, 46669, 11876, 6993, 22843, 3742, 32231, 10950, 37952, 37710, 41569, 33412, 17879, 16863, 9624, 29235, 35609, 4843, 11174, 47778, 11512, 30380, 19216, 35947, 20985, 29365, 49563, 14759, 33340, 21339, 29167, 28378, 39483, 31096, 3270, 19834, 49273, 690, 9759, 14867, 42380, 41936, 7217, 44314, 17122, 4484, 35809, 45349, 43458, 1483, 4728, 31928, 30389, 39012, 19728, 38987, 26832, 49942, 3170, 27628, 40758, 37510, 44163, 38611, 34274, 48349, 6730, 35383, 36142, 156, 4585, 28053, 43570, 48622, 37060, 45272, 746, 12436, 5399, 9886, 48102, 12952, 34304, 25265, 10750, 9469, 39102, 42374, 42474, 26570, 44222, 12878, 509, 35869, 16596, 49680, 47151, 14836, 22982, 41524, 13677, 22799, 48846, 34209, 28211, 15360, 46542, 9600, 24961, 1740, 30559, 13621, 17430, 6689, 3859, 27032, 44755, 28199, 45255, 38682, 30613, 38471, 6768, 11670, 21898, 31352, 38915, 31674, 43310, 41228, 36939, 4964, 618, 21034, 23716, 20595, 12232, 23046, 28723, 39223, 30142, 22946, 36218, 4807, 23372, 6542, 33713, 23653, 815, 38766, 6196, 46930, 11543, 21660, 3147, 11553, 22599, 45464, 14910, 13689, 2477, 28252, 43038, 26963, 31739, 41528, 19101, 4188, 38477, 7848, 5119, 26786, 25407, 6397, 15774, 8566, 40689, 41394, 20089, 7518, 42169, 39823, 39357, 16360, 10530, 36679, 7801, 17431, 7896, 30425, 38216, 20683, 6776, 15609, 43126, 28080, 42431, 33663, 37559, 4209, 27545, 29382, 35109, 29627, 21272, 2161, 48425, 31867, 48032, 11404, 20311, 13926, 28412, 11447, 17702, 31175, 49088, 18657, 49755, 4318, 3400, 46997, 1760, 11103, 32787, 45639, 48242, 36930, 30392, 4895, 46279, 26543, 29987, 38168, 43804, 47428, 46847, 18780, 5373, 40632, 36814, 20346, 11419, 44170, 30199, 30428, 14603, 43990, 20792, 37025, 44377, 40456, 32148, 42551, 8565, 10818, 20993, 20772, 9437, 41257, 45178, 10142, 40157, 46255, 34931, 24653, 27115, 6893, 8574, 3149, 41908, 29810, 463, 22828, 39253, 15916, 5551, 22298, 25360, 5754, 32863]
let b = []

// // // console.log(b)
let heapMax=(array,i)=>{

    let left = 0
    let right = 0
    let largest = 0
    let largestIndex = 0

    while(i<= Math.floor(array.length/2)){
        let parent = Math.floor(i+(1/2))

        // console.log(`valor de i: ${i}`)
        // console.log(`parent: ${parent}`)
        // console.log(`b parent: ${b[parent]}`)

        left = (2*i)+1
        // console.log(`left: ${left}`)
        // console.log(`b left: ${b[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`b right: ${b[right]}`)
        // console.log(`array b: ${b}`)

    if ( (array[left]) > array[parent]) {

        // console.log(`actual b[i] value: ${b[i]}`)
        largest = array[left]
        largestIndex = array.indexOf(array[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ largest = array[parent]

            largestIndex = array.indexOf(array[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (array[right] > largest) {
                largest = array[right]
                largestIndex = array.indexOf(array[right])
            }

            if(largest != array[i]){

                [array[i],array[largestIndex]] = [array[largestIndex],array[i]]

                // modifyLargest=  b[i]

                // b[i] = b[largestIndex]

                // b[largestIndex] = modifyLargest
                // console.log(`b[i] whe largest is different from b[i]: ${b[i]}`)
            }

            i= i+1

        }

        // console.log(array)
    }


let buildHeapMax=(array)=>{

let i = Math.floor(array.length/2)

// let modifyLargest = 0
// console.log(array)

while(i>= 0){
    heapMax(array,i)

        i= i-1
    }

    // console.log(`funciona el build max heap?`)
    // console.log(array)
}



let heapSort = (array)=>{

    let m= array.length-1

    // console.log(` a antes de ejecutar el heap sort`)
buildHeapMax(array)
for (let i = array.length-1; i >= 0; i--) {


    [array[0],array[i]] = [array[i],array[0]]
    b.push(array[i]) 
    // console.log( `el array: ${array}`)
    // console.log(`array 0: ${array[0]}`)
    // console.log(`array i: ${array[i]}`)
//    c.push(array[0],array[i])
    // console.log(array)

    // console.log(`Eliminated value from the <Que>: ${array[i]} `)


a.length = a.length-1

    heapMax(array,0)    
    // console.log(array)

}
console.log(b)

for (let i = 0; i < b.length/2; i++) {

    [b[i],b[m]] = [b[m],b[i]]

    m = m-1


}
}

heapSort(a)

console.log(b)

>--------------------------------------------------------------<

11.6.- HEAPSORT USING BUILDMINHEAP WHICH CAUSES THE FINAL ARRAY TO BE IN INCREASING ORDER RATHER THAN DECREASING ORDER
WITH THE USE OF BUILDMAXHEAP

let a = [4,1,3,2,16,9,10,14,8,7]
let a = [5, 13, 2, 25, 7, 17, 20, 8, 4]
let b = []

// console.log(b)

let heapMin=(array,i)=>{

        let left = 0
        let right = 0
        let min = 0
        let minIndex = 0

        // let modifyLargest = 0
//         console.log(array)

        while(i< Math.floor(array.length/2)){
            let parent = Math.floor(i+(1/2))

            // console.log(`valor de i: ${i}`)
            // console.log(`parent: ${parent}`)
            // console.log(`array parent: ${array[parent]}`)

            left = (2*i)+1
            // console.log(`left: ${left}`)
            // console.log(`array left: ${array[left]}`)

            right = (2*i)+2
            // console.log(`right: ${right}`)
            // console.log(`array right: ${array[right]}`)
            // console.log(`array array: ${array}`)

        if ( (array[left]) < array[parent]) {

            // console.log(`actual array[i] value: ${array[i]}`)
            min = array[left]
            minIndex = array.indexOf(array[left])
            // console.log(`"if normal" largest stored value: ${largest} `)


            } else{ min = array[parent]

                minIndex = array.indexOf(array[right])
                // console.log(`"else" largest stored value: ${largest} `)
            }

        if (array[right] < min) {
                    min = array[right]
                    minIndex = array.indexOf(array[right])
                }

                if(min != array[i]){

                    [array[i],array[minIndex]] = [array[minIndex],array[i]]

                    // modifyLargest=  array[i]

                    // array[i] = array[largestIndex]

                    // array[largestIndex] = modifyLargest
                    // console.log(`array[i] whe largest is different from array[i]: ${array[i]}`)
                }

                i= i+1
            }

            console.log(array)
        }


    let buildHeapMin=()=>{

            let i = Math.floor(a.length/2)

            // let modifyLargest = 0
            console.log(a)

            while(i>= 0){
                heapMin(a,i)

                    i= i-1
                }

                console.log(`funciona el build min?`)
                console.log(a)
            }



let heapSort = (array)=>{

    let m= array.length-1

    console.log(` a antes de ejecutar el heap sort`)
buildHeapMin(array)
for (let i = array.length-1; i >= 0; i--) {


    [array[0],array[i]] = [array[i],array[0]]
    b.push(array[i]) 
    // console.log( `el array: ${array}`)
    // console.log(`array 0: ${array[0]}`)
    // console.log(`array i: ${array[i]}`)
//    c.push(array[0],array[i])
    // console.log(array)

    console.log(`Eliminated value from the <Que>: ${array[i]} `)


a.length = a.length-1

    heapMin(array,0)    
    // console.log(array)

}
console.log(b)

for (let i = 0; i < b.length/2; i++) {

    [b[i],b[m]] = [b[m],b[i]]

    m = m-1


}
}

heapSort(a)

// console.log(a)
// console.log(b)


>--------------------------------------------------------------<

11.5.- HEAP MAX MAXIMUM, MAX HEAP EXTRACT MAX, MAX HEAP INCREASE KEY, MAX HEAP INSERT , I DIDNT DEVELOPED THE "MAX HEAP DELETE " CUZ ITS EASY

let a = [15,13,9,5,12,8,7,4,0,6,2,1]
let b = []

// console.log(b)
let heapMax=(array,i)=>{

    let left = 0
    let right = 0
    let largest = 0
    let largestIndex = 0

    while(i<= Math.floor(array.length/2)){
//         let parent = Math.floor(i+(1/2))

//         // console.log(`valor de i: ${i}`)
//         // console.log(`parent: ${parent}`)
//         // console.log(`b parent: ${b[parent]}`)

        left = (2*i)+1
        console.log(`left: ${left}`)
        // console.log(`b left: ${b[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`b right: ${b[right]}`)
        // console.log(`array b: ${b}`)

    if ( (array[left]) > array[parent]) {

        // console.log(`actual b[i] value: ${b[i]}`)
        largest = array[left]
        largestIndex = array.indexOf(array[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ largest = array[parent]

            largestIndex = array.indexOf(array[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (array[right] > largest) {
                largest = array[right]
                largestIndex = array.indexOf(array[right])
            }

            if(largest != array[i]){

                [array[i],array[largestIndex]] = [array[largestIndex],array[i]]

                // modifyLargest=  b[i]

                // b[i] = b[largestIndex]

                // b[largestIndex] = modifyLargest
                // console.log(`b[i] whe largest is different from b[i]: ${b[i]}`)
            }

            i= i+1

        }

        // console.log(array)
    }


let buildHeapMax=(array)=>{

let i = Math.floor(array.length/2)

// let modifyLargest = 0
console.log(array)

while(i>= 0){
    heapMax(array,i)

        i= i-1
    }

    console.log(`funciona el build max heap?`)
    console.log(array)
}



let heapSort = (array)=>{

    let m= array.length-1

    console.log(` a antes de ejecutar el heap sort`)
buildHeapMax(array)
// for (let i = array.length-1; i >= 0; i--) {


    [array[0],array[i]] = [array[i],array[0]]
    b.push(array[i]) 
    // console.log( `el array: ${array}`)
    // console.log(`array 0: ${array[0]}`)
    // console.log(`array i: ${array[i]}`)
//    c.push(array[0],array[i])
    // console.log(array)

    console.log(`Eliminated value from the <Que>: ${array[i]} `)


a.length = a.length-1

    heapMax(array,0)    
    // console.log(array)

}
console.log(b)

// for (let i = 0; i < b.length/2; i++) {

//     [b[i],b[m]] = [b[m],b[i]]

//     m = m-1


// }
}

console.log(a)

let maxHeapMaximum = (array)=>{
    let cero = 0
    if (array.length == false) {
        console.log(`Error:> Heap Underflow`)
    }
    return array[cero]
}

console.log(maxHeapMaximum(a))

let maxHeapExtractMax = (array)=>{
    let cero = 0
    let heapSize = array.length-1
    let max = maxHeapMaximum(array)

    console.log(array[cero])
    console.log(array[heapSize])
    
    array[cero] = array[heapSize]
    array.length = heapSize
    heapMax(array,cero)
    return `The max Number: ${max} has been deleted from the Priority Que`
}

console.log(maxHeapExtractMax(a))

console.log(a)

console.log(a)

let x = {
    name:'Charlotte',
    age: 21,
    key: 10
    
}

let parent =(i)=>{
 return Math.floor(i+(1/2))
    
}

let maxHeapIncreaseKey = (array)=>{
    let i = array.length-1

    console.log(i)

    let parent = Math.floor((i-1)/2)

    console.log(parent)

while (array[parent]<array[i] ) {

[array[parent],array[i]] = [array[i],array[parent]]

    i= array.indexOf(array[parent])
    parent = Math.floor((i-1)/2)    
}

   
}

let maxHeapInsert= (array,xObject)=>{

    array.length = array.length+1
    a[a.length-1]= xObject.key
    maxHeapIncreaseKey(array)

}

maxHeapInsert(a,x)

console.log(a)

>--------------------------------------------------------------<


11.6.- MIN HEAP MINIMUM , MIN HAEAP EXTRACT MINIMUM, MIN HEAP DRECREASE KEY, MIN HEAP INSERT  - I DIDNT DEVELOPED THE "MIN HEAP DELETE CUZ ITS EASY"

let a = [0, 1, 4, 6, 3, 7, 13, 5, 15, 12, 9, 8]


let heapMin=(array,i)=>{

            let left = 0
            let right = 0
            let min = 0
            let minIndex = 0
    
            // let modifyLargest = 0
            console.log(array)
    
            while(i< Math.floor(array.length/2)){
                let parent = Math.floor(i+(1/2))
    
                // console.log(`valor de i: ${i}`)
                // console.log(`parent: ${parent}`)
                // console.log(`array parent: ${array[parent]}`)
    
                left = (2*i)+1
                // console.log(`left: ${left}`)
                // console.log(`array left: ${array[left]}`)
    
                right = (2*i)+2
                // console.log(`right: ${right}`)
                // console.log(`array right: ${array[right]}`)
                // console.log(`array array: ${array}`)
    
            if ( (array[left]) < array[parent]) {
    
                // console.log(`actual array[i] value: ${array[i]}`)
                min = array[left]
                minIndex = array.indexOf(array[left])
                // console.log(`"if normal" largest stored value: ${largest} `)
    
    
                } else{ min = array[parent]
    
                    minIndex = array.indexOf(array[right])
                    // console.log(`"else" largest stored value: ${largest} `)
                }
    
            if (array[right] < min) {
                        min = array[right]
                        minIndex = array.indexOf(array[right])
                    }
    
                    if(min != array[i]){
    
                        [array[i],array[minIndex]] = [array[minIndex],array[i]]
    
                        // modifyLargest=  array[i]
    
                        // array[i] = array[largestIndex]
    
                        // array[largestIndex] = modifyLargest
                        // console.log(`array[i] whe largest is different from array[i]: ${array[i]}`)
                    }
    
                    i= i+1
                }
    
                console.log(array)
            }
    
    
let buildHeapMin=()=>{
    
                let i = Math.floor(a.length/2)
    
                // let modifyLargest = 0
                console.log(a)
    
                while(i>= 0){
                    heapMin(a,i)
    
                        i= i-1
                    }
    
                    console.log(`funciona el build min?`)
                    console.log(a)
                }



let minHeapMinimum = (array)=>{
                    let cero = 0
                    if (array.length == false) {
                        console.log(`Error:> Heap Underflow`)
                    }
                    return array[cero]
                }
                
console.log(minHeapMinimum(a))
                
let minHeapExtractMin = (array)=>{
                    let cero = 0
                    let heapSize = array.length-1
                    let min = minHeapMinimum(array)
                
                    console.log(array[cero])
                    console.log(array[heapSize])
                    
                    array[cero] = array[heapSize]
                    array.length = heapSize
                    heapMin(array,cero)
                    return `The min Number: ${min} has been deleted from the Priority Que`
                }
                
console.log(minHeapExtractMin(a))
                
console.log(a)
                
console.log(a)

let x = {
    name:'Laurent',
    age: 21,
    key: 2
}

let parent =(i)=>{
 return Math.floor(i+(1/2))
    
}

let minHeapDecreaseKey = (array)=>{
    let i = array.length-1

    console.log(i)

    let parent = Math.floor((i-1)/2)

    console.log(parent)

while (array[parent] > array[i]) {

[array[parent],array[i]] = [array[i],array[parent]]

    i= array.indexOf(array[parent])
    parent = Math.floor((i-1)/2)    
}

   
}

let minHeapInsert= (array,xObject)=>{

    array.length = array.length+1
    a[a.length-1]= xObject.key
    minHeapDecreaseKey(array)

}

minHeapInsert(a,x)

// console.log(a)

>--------------------------------------------------------------<

11.7.- MERGE TWO SORTED LISTS. C + D = [ 1,2,3,4,5,6,7,8,9,10,11... ETC ]

let c = [1,3,5,7,9,11,15,16,17,18,19,26,27,28,29,30,34,35,36]
let d = [2,4,6,8,10,12,13,14,20,21,22,23,24,25,31,32,33]
let e = []


let minHeapInsert= (array1,array2,finalarray)=>{

        
    let i = 0
    let j = 1 
    
    let k = 0
    while(i< array1.length+array2.length && j< array1.length+array2.length){
        
    finalarray.push(array1[k],array2[k]) 
     
        j=j+2
        i = i+2
        k = k+1

        while(j<array1.length+array2.length ){
            finalarray.push(array2[k]) 
            j=j+2
        
        k = k+1

        }

    
    let i = 0
    let j = 0
    let k = 0
    let h = 1
    while(i< array1.length&& j<array2.length){
        
       
            finalarray[k] = array1[i]
            
            finalarray[h] = array2[j]
            
            j=j+1
            i = i+1
            k = k+2
            h = h+2
            console.log(` i normal ${i}`)
            console.log(`jota normal ${j}`)
            console.log(` k normal ${k}`)
            console.log(`h normal ${h}`)
            console.log(e)

    }

    while(i<array1.length){
        console.log(`primer k en el segundo while ${k}`)
        console.log(`array 1 i ${array1[i]}`)
        k = k-1
        console.log(`segundo k en el segundo while despues de restar k-1 ${k}`)
        finalarray[k] = array1[i]
        console.log(`final array k ${finalarray[k]}`)
        i = i+1
            k = k+2
            console.log(e)
            // console.log(i)
    }

    while (j<array2.length) {
        h=h-1
        console.log(e)
        console.log(`primer h en el segundo while ${h}`)
        console.log(`array 2 j ${array2[j]}`)
        
        finalarray[h] = array2[j]
        
        console.log(`final array h ${finalarray[h]}`)
            
            j=j+1
            h = h+2
        console.log(`jota segundo while ${j}`)
        console.log(`h segundo while ${h}`)
    }
       
        // minHeapDecreaseKey(array)
    
    }

let mergeSortedListsMinHeap = ()=>{

  minHeapInsert(c,d,e)
        
    }


mergeSortedListsMinHeap()
console.log(e)


>--------------------------------------------------------------<


11.8.- D-HAEPTREE MORE THAN 2 LEAVES MEANING BIGGER THAN A BINARY TREE

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
let b = []


let dHeapTree = (array)=>{

    let h = 0;

    let arrayLengthHalf2 = Math.floor(array.length/3);
    let arrayLengthHalf = array.length/3;

    for (let i = 0; i < array.length/3; i++) {
        
        let parent = Math.floor(i+(1/2));
        let left = (2*i)+1+h;
        let  center = (2*i)+2+h;
        let right = (2*i)+3+h;
        
        console.log(a.length)
        console.log(a.length/3)
        console.log(Math.floor(a.length/3))
        console.log(b);
                    console.log(parent) ;
                    console.log(`ì : ${i}`);
                    console.log(`left is: ${array[left]}`);
                    console.log(`center is: ${array[center]}`);
                    console.log(`right is: ${array[right]}`);
                    console.log(array.length/3)
                    console.log(arrayLengthHalf2);
                    console.log(arrayLengthHalf2+.5);
            h = h+1;

            if (i==0){
                b.push(array[parent]);
                console.log(`the parent of all is ${b[parent]}`);
            }

            if(i<arrayLengthHalf-1){
                b.push(array[left],array[center],array[right]);
                console.log( `" SE EJECUTA EL PRIMER IF " a left ${array[left]} parent is ${parent}, a center ${array[center]} parent is ${parent}, a right ${array[right]} parent is ${parent}` );
        }
             if(i==arrayLengthHalf2 && array.length/3 > arrayLengthHalf2+.5){
                b.push(array[left]);
                console.log( `" SE EJECUTA EL SEGUNDO IF " a left ${array[left]} parent is ${parent}`);
            
        }
        
            if(i==arrayLengthHalf2-1 && arrayLengthHalf2 == array.length/3){
                b.push(array[left],array[center]);
                console.log( ` " SE EJECUTA EL TERCER IF " a left ${array[left]} a center is ${array[center]} parent is ${parent}`);

        }
        
    }   console.table(b);
    
    
    
    
}   

dHeapTree(a)

>--------------------------------------------------------------<


12.- YOUNG TABLEU  IMPORTANT TO REMEMBER THAT EXISTS AND WE MUST USE FLAT TO FLAT ARRAY OF ARRAYS AND THERES ALSO THE POSIBILITY TO USE INFINITY TO FLATTEN N ARRAYS INSIDE N ARRAYS [[[[[]]][[]][[[]]]]]
let m1 = [
    [2,3,4,5],
    [3,4,5,8],
    [4,5,8,9],
    [5,8,9,12]
              ]

    let m2 = [
    [2,3,4,5],
    [3,4,5,8],
    [4,5,8,9],
    [5,8,9,12]
            ]
    let m3=[]

    
let multiplyYoungTableuMaxHeap = ()=>{

let matrixMultiply = ()=>{
    
      for (let i = 0; i < m1.length; ++i) {
        m3[i] = []
        console.log(`valor de i: ${i}
        `)
    
          for (let j = 0; j < m1.length; j++) {
            m3[i][j] = 0
    
            console.log(`valor de j: ${j}
            `)
    
    
            for (let k = 0; k < m1.length; k++) {
              m3[i][j] += m1[i][k] * m2[k][j];
              console.log(`valor de k: ${k}`)
    
            }
          } 
        }
        console.log(m3)
      }
    

let heapMax=(array,i)=>{

    let left = 0
    let right = 0
    let largest = 0
    let largestIndex = 0
    
    // let modifyLargest = 0
    console.log(array)

    while(i< Math.floor(array.length/2)){
        let parent = Math.floor(i+(1/2))

        // console.log(`valor de i: ${i}`)
        // console.log(`parent: ${parent}`)
        // console.log(`array parent: ${array[parent]}`)

        left = (2*i)+1
        // console.log(`left: ${left}`)
        // console.log(`array left: ${array[left]}`)

        right = (2*i)+2
        // console.log(`right: ${right}`)
        // console.log(`array right: ${array[right]}`)
        // console.log(`array array: ${array}`)

    if ( (array[left]) > array[parent]) {

        // console.log(`actual array[i] value: ${array[i]}`)
        largest = array[left]
        largestIndex = array.indexOf(array[left])
        // console.log(`"if normal" largest stored value: ${largest} `)


        } else{ largest = array[parent]

            largestIndex = array.indexOf(array[right])
            // console.log(`"else" largest stored value: ${largest} `)
        }

    if (array[right] > largest) {
                largest = array[right]
                largestIndex = array.indexOf(array[right])
            }

            if(largest != array[i]){

                [array[i],array[largestIndex]] = [array[largestIndex],array[i]]

                // modifyLargest=  array[i]

                // array[i] = array[largestIndex]

                // array[largestIndex] = modifyLargest
                // console.log(`array[i] whe largest is different from array[i]: ${array[i]}`)
            }

            i= i+1
        }

        console.log(array)
    }

let buildHeapMax=(array)=>{

      let i = Math.floor(array.length/2)
      
      // let modifyLargest = 0
      console.log(array)
      
      while(i>= 0){
          heapMax(array,i)
      
              i= i-1
          }
      
          console.log(`funciona el build max heap?`)
          console.log(array)
      }
      
      
let youngTableuMaxHeap = (array)=>{
        buildHeapMax(array) 
      }
      
  matrixMultiply()
  m3 = m3.flat(1)
  youngTableuMaxHeap(m3)
}

multiplyYoungTableuMaxHeap()
      console.log(m3)

console.log(m3)


>--------------------------------------------------------------<

13.- QUICKSORT


let a = [2,8,7,1,3,5,6,4]
// let a = [2,8,10,7,1,11,9,5,6,4,3]
let a = [17,2,8,7,1,50,20,3,27,52,15,62,212,21,5,82,34,18,25,9,6,4,22,19,16,29,26,23,14,13,12,24,33,11,10,30,28,31,32]
// // let a = [6,6,6,6,6,6,6,6]

let quickSort = (array)=>{

let x = array.length-1;
let j = 0;
let i = -1;
let same = 0;
let q = (a[0]*2)/2;
let half = Math.floor((array.length-1)/2);
let z = 0;
let pivotBiggest = 0


for(j;j < array.length-1;j++) {

  
  if (array[j] <= array[x]) {
    same = same+1;
    console.log(`same ${same}`);
    i = i+1;
    pivotBiggest = pivotBiggest+1;
    console.log(array.length-1);
    console.log(pivotBiggest);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
    
    [array[i],array[j]] = [array[j],array[i]];
    console.log(array);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
  } 
};

if (pivotBiggest == array.length-1){

  // console.log(`array half ${array[half]} with position ${half};`);
  // console.log(half);
  console.log(`el fucking pivot is the biggest`);}

if (same == array.length-1 && array[array.length-1] ==array[0]){
  

  array[half]= q;
  console.log(`array half ${array[half]} with position ${half};`);
  console.log(half);
  console.log(`el fucking pivot is the biggest`);
};

if(same!= array.length-1){
  console.log(array);
  console.log(`puta`);
  console.log(`array i+1 ${array[i+1]} array x ${array[x]}`);
  [array[i+1],array[x]] = [array[x],array[i+1]]; 

  console.log(`array pivot i+1 nuevo ${array[i+1]}`);
  
  console.log(array);
  console.log(`i+1 ${i+1}`);
  console.log(`array i +1 ${array[i+1]}`);
  console.log(`the pivot wasnt the biggest `);
};

let pivot = i+1;
let rest = pivot+1;

for (z; z < array.length; z++) {

          let key = array[z];
  
          let j = z-1;
  
          while (j >= 0 && array[j]>key) {
            
            array[j+1] = array[j];
  
            j = j-1;
  
            array[j+1] = key;
  
          }
  
        };

// for (rest; rest < array.length; rest++) {

//           let key = array[rest]
  
//           let j = rest-1
  
//           while (j >= 0 && array[j]>key) {
  
//             array[j+1] = array[j]
  
//             j = j-1
  
//             array[j+1] = key
  
          }
  
//         }
console.table(a)
      }

quickSort(a)


>--------------------------------------------------------------<

13.1.- RANDOMIZED QUICKSORT, IT CHANGES THE PIVOT WITH THE RANDOM PIVOT BEFORE QUICKSORTING. 

// let a = [2,8,7,1,3,5,6,4];
// let a = [2,8,10,7,1,11,9,5,6,4,3]
let a = [17,2,8,7,1,50,20,3,27,52,15,62,212,21,5,82,34,18,25,9,6,4,22,19,16,29,26,23,14,13,12,24,33,11,10,30,28,31,32]
// let a = [6,6,6,6,6,6,6,6]

let quickSort = (array)=>{

let x = array.length-1;
let y = 0;
let randomPivot = `${Math.floor(Math.random() * (x - y +1) + y)}`;


console.log(`randomPIVOT selected ${randomPivot}`);

let j = 0;
let i = -1;
let same = 0;
let q = (a[0]*2)/2;
let half = Math.floor((array.length-1)/2);
let z = 0;
let pivotBiggest = 0;

console.log(` x ${x}`);
console.log(` array x ${array[x]}`);
console.log(`randomPivot ${randomPivot}`);
console.log(` array randomPivot ${array[randomPivot]}`);
[array[x],array[randomPivot]] = [array[randomPivot],array[x]];
console.log(`array depues de cambiar x por randompivot`);
console.log(array);


for(j;j < array.length-1;j++) {

  
  if (array[j] <= array[x]) {
    same = same+1;
    console.log(`same ${same}`);
    i = i+1;
    pivotBiggest = pivotBiggest+1;
    console.log(array.length-1);
    console.log(pivotBiggest);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
    
    [array[i],array[j]] = [array[j],array[i]];
    console.log(array);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
  } 
};

if (pivotBiggest == array.length-1){

  // console.log(`array half ${array[half]} with position ${half};`);
  // console.log(half);
  console.log(`el fucking pivot is the biggest`);}

if (same == array.length-1 && array[array.length-1] ==array[0]){
  

  array[half]= q;
  console.log(`array half ${array[half]} with position ${half};`);
  console.log(half);
  console.log(`el fucking pivot is the biggest`);
};

if(same!= array.length-1){
  console.log(array);
  console.log(`puta`);
  console.log(`array i+1 ${array[i+1]} array x ${array[x]}`);
  [array[i+1],array[x]] = [array[x],array[i+1]]; 

  console.log(`array pivot i+1 nuevo ${array[i+1]}`);
  
  console.log(array);
  console.log(`i+1 ${i+1}`);
  console.log(`array i +1 ${array[i+1]}`);
  console.log(`the pivot wasnt the biggest `);
};

let pivot = i+1;
let rest = pivot+1;

for (z; z < array.length; z++) {

          let key = array[z];
  
          let j = z-1;
  
          while (j >= 0 && array[j]>key) {
            
            array[j+1] = array[j];
  
            j = j-1;
  
            array[j+1] = key;
  
          }
  
        };

// for (rest; rest < array.length; rest++) {

//           let key = array[rest]
  
//           let j = rest-1
  
//           while (j >= 0 && array[j]>key) {
  
//             array[j+1] = array[j]
  
//             j = j-1
  
//             array[j+1] = key
  
//           }
  
//         }
console.log(a)
      }

quickSort(a)

>--------------------------------------------------------------<

13.2.- RANDOMIZED QUICKSORT USING MEDIAN OF 3 NUMBERS AS PIVOT. 


let a = [2,8,7,1,3,5,6,4];
let a = [2,8,10,7,1,11,9,5,6,4,3]
let a = [17,2,8,7,1,50,20,3,27,52,15,62,212,21,5,82,34,18,25,9,6,4,22,19,16,29,26,23,14,13,12,24,33,11,10,30,28,31,32]
let a = [6,6,6,6,6,6,6,6]

let quickSort = (array)=>{
let median = [];
let x = array.length-1;
let y = 0;
let randomPivot = { randomSample: (max,min)=>{return Math.floor(Math.random() * (max - min +1) + min)}};

while(y <= 2){
median.push(randomPivot.randomSample(0,array.length-1));
y=y+1;
}

console.log(median)
console.log(`median number is ${median[1]}`)
randomPivot = median[1]



console.log(`randomPIVOT selected ${randomPivot}`);

let j = 0;
let i = -1;
let same = 0;
let q = (a[0]*2)/2;
let half = Math.floor((array.length-1)/2);
let z = 0;
let pivotBiggest = 0;

console.log(` x ${x}`);
console.log(` array x ${array[x]}`);
console.log(`randomPivot ${randomPivot}`);
console.log(` array randomPivot ${array[randomPivot]}`);
[array[x],array[randomPivot]] = [array[randomPivot],array[x]];
console.log(`array depues de cambiar x por randompivot`);
console.log(array);


for(j;j < array.length-1;j++) {

  
  if (array[j] <= array[x]) {
    same = same+1;
    console.log(`same ${same}`);
    i = i+1;
    pivotBiggest = pivotBiggest+1;
    console.log(array.length-1);
    console.log(pivotBiggest);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
    
    [array[i],array[j]] = [array[j],array[i]];
    console.log(array);
    console.log(`array i ${array[i]}, array j: ${array[j]}`);
  } 
};

if (pivotBiggest == array.length-1){

  // console.log(`array half ${array[half]} with position ${half};`);
  // console.log(half);
  console.log(`el fucking pivot is the biggest`);}

if (same == array.length-1 && array[array.length-1] ==array[0]){
  

  array[half]= q;
  console.log(`array half ${array[half]} with position ${half};`);
  console.log(half);
  console.log(`el fucking pivot is the biggest`);
};

if(same!= array.length-1){
  console.log(array);
  console.log(`paaas`);
  console.log(`array i+1 ${array[i+1]} array x ${array[x]}`);
  [array[i+1],array[x]] = [array[x],array[i+1]]; 

  console.log(`array pivot i+1 nuevo ${array[i+1]}`);
  
  console.log(array);
  console.log(`i+1 ${i+1}`);
  console.log(`array i +1 ${array[i+1]}`);
  console.log(`the pivot wasnt the biggest `);
};

let pivot = i+1;
let rest = pivot+1;

for (z; z < array.length; z++) {

          let key = array[z];
  
          let j = z-1;
  
          while (j >= 0 && array[j]>key) {
            
            array[j+1] = array[j];
  
            j = j-1;
  
            array[j+1] = key;
  
          }
  
        };

for (rest; rest < array.length; rest++) {

          let key = array[rest]
  
          let j = rest-1
  
          while (j >= 0 && array[j]>key) {
  
            array[j+1] = array[j]
  
            j = j-1
  
            array[j+1] = key
  
          }
  
        }
console.log(a)
      }

quickSort(a)

>--------------------------------------------------------------<

14.- COUNTING SORT 
let a = [17,2,8,7,1,50,20,3,27,50,52,15,62,212,21,5,82,34,18,25,9,6,4,22,19,16,29,26,23,14,212,13,12,24,33,11,10,30,28,31,32];
let a = [6,0,2,0,1,3,4,6,1,3,2]
let max = Math.max(...a);
let min = Math.min(...a);


function countingSort(arr) {
   const count = [];

   for (let i = min; i <= max; i++) {
      count[i] = 0;
      // 
   }
   for (let i = 0; i < arr.length; i++) {
    
      count[arr[i]]++;
      
      // 
   }
   const sortedArr = [];
   for (let i = min; i <= max; i++) {
      while (count[i] > 0) {
        
         sortedArr.push(i);
         
         
         count[i]--;
         
      }
   }

   let rangeMin = 0;
   let rangeMax = 4
   let totalNumbersQuery = 0

   sortedArr.forEach((element)=>{
      if(element >=rangeMin && element <=rangeMax){
         totalNumbersQuery++
         
      }
   })

   console.log(`total numbers to fal into the range [${rangeMin} : ${rangeMax}] is :> ${totalNumbersQuery}]`)
   return sortedArr;
}

   
// console.log(countingSort(a));




>--------------------------------------------------------------<

15.- RADIX SORT


function getDigit(num, place) {
   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
 }
 console.log(getDigit(43263, 0)) // 3
 console.log(getDigit(43263, 1)) // 6
 console.log(getDigit(43263, 2)) // 2
 console.log(getDigit(43263, 3)) // 3
 console.log(getDigit(43263, 4)) // 4
 
 function digitCount(num) {
   if (num === 0) return 1
   return Math.floor(Math.log10(Math.abs(num))) + 1
 }
// //  console.log(digitCount(1)) // 1
// //  console.log(digitCount(21)) // 2
// //  console.log(digitCount(3547)) // 4

 function mostDigits(nums) {
   let maxDigits = 0
   for (let i = 0; i < nums.length; i++) {
     maxDigits = Math.max(maxDigits, digitCount(nums[i]))
   }
   return maxDigits
 }
// //  console.log(mostDigits([44, 849, 1, 3333])) // 4 (because 3333 has four digits)


 function radixSort(arrOfNums) {
   let maxDigitCount = mostDigits(arrOfNums)
   console.log(`maxDigitCount ${maxDigitCount}`)

   for (let k = 0; k < maxDigitCount; k++) {
     let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
   
     console.log(`digit buckets ${digitBuckets}`)
     console.log(digitBuckets)
     for (let i = 0; i < arrOfNums.length; i++) {
       let digit = getDigit(arrOfNums[i], k)
       console.log(digitBuckets[digit])
    
       digitBuckets[digit].push(arrOfNums[i])
     }
     // New order after each loop
     let si = []
     arrOfNums = si.concat(digitBuckets.flat(Infinity))
     console.log(arrOfNums)
   }
   return arrOfNums
 }
 console.log(radixSort([1556, 4, 3556, 593, 29, 86, 7]))



//>--------------------------------------------------------------<

16.- BUCKET SORT

let A = [78,17,39,26,72,94,21,12,23,68]


// // console.log(A)

let insertionSort = (A)=>{

  for (let i =1; i < A.length; i++) {

  let key = A[i]

  let j = i-1

  while (j >= 0 && A[j]>key) {

    A[j+1] = A[j]

    j = j-1

    A[j+1] = key

  }

}}


let bucketSort = (array)=>{

  let bucketLists = Array.from({ length: array.length }, () => [])
  console.log(bucketLists)
  
  for (let i = 0; i < array.length; i++) { 
    
    array[i] >= 0 && array[i] <= 19 ? bucketLists[1].push(array[i]): null;
    
    array[i] >= 20 && array[i] <= 29 ? bucketLists[2].push(array[i]): null;
    
    array[i] >= 30 && array[i] <= 39 ? bucketLists[3].push(array[i]): null;
    
    array[i] >= 40 && array[i] <= 49 ? bucketLists[4].push(array[i]): null;
    
    array[i] >= 50 && array[i] <= 59 ? bucketLists[5].push(array[i]): null;
    
    array[i] >= 60 && array[i] <= 69 ? bucketLists[6].push(array[i]): null;
    
    array[i] >= 70 && array[i] <= 79 ? bucketLists[7].push(array[i]): null;
    
    array[i] >= 80 && array[i] <= 89 ? bucketLists[8].push(array[i]): null;
    
    array[i] >= 90 && array[i] <= 99 ? bucketLists[9].push(array[i]): null;
   }
   
   for (let i = 0; i < array.length-1; i++) {
    insertionSort(bucketLists[i])
    
   }
  
   console.log(bucketLists)
   
   let helpArr = []
   
   bucketLists = helpArr.concat(bucketLists.flat(Infinity))
   
   console.log(bucketLists)

}

bucketSort(A)

>--------------------------------------------------------------<

17.- ColumnSort Array

let m1 = [
  [10,14,5],
  [8,7,17],
  [12,1,6],
  [16,9,11],
  [4,15,2],
  [18,3,13]
  ]
let m1 = [
  [1,0,1],
  [1,0,1],
  [0,1,1],
  [0,1,0],
  [1,0,1],
  [1,0,0]
  ]
  let m2 = [
  [6,8],
  [4,2]
  ]


let matrixColumnSort = (A)=>{
  
        for (let i =0; i < A.length; i++) {
         
          for (let j = 0; j < A.length; j++) {
            
            for (let k = 0; k < A.length-1; k++) {
              
              if (A[k][j] > A[k+1][j]) {
                
                [A[k][j],A[k+1][j]] = [A[k+1][j],A[k][j]]
          }
        }
      }
    }
  }

        
        
let transposeArray = (A)=>{
   
  
  let filaCero = 0
  let filaUno = 1
  
  let cero = 0
  let sumador = 0
  let tres = 0
  let cuatro = 4
  
  while(tres <3){

    [A[tres][cero],A[filaCero][sumador]] = [A[filaCero][sumador],A[tres][cero]];
    
    sumador++
    tres++
  }
  
  
  console.log(`tres ${tres}`)
  console.log(A[tres][cero])
  
console.log(A[cuatro][cero])
console.log(A[cuatro+1][cero])


sumador = 0
while(tres < 6){
  console.log('tres menor a 5');
  
  [A[tres][cero],A[filaUno][sumador]] = [A[filaUno][sumador],A[tres][cero]]
  sumador++
  tres++
}

}



let transposeArray1 = (A) =>{
let copiedNumber = Array.from({length: A.length},()=>[])

// console.log(copiedNumber)


for (let i = 0; i < A.length; i++) {
  let cero = 0

  i < 3 ?  copiedNumber[0].push(A[i][cero]) : null
  i >=3 && i < 6 ?  copiedNumber[1].push(A[i][cero]) : null
    
  
}
for (let i = 0; i < A.length; i++) {
  
  let uno= 1
  
  
  
  i < 3 ?  copiedNumber[2].push(A[i][uno]) : null
  i >=3 && i < 6 ?  copiedNumber[3].push(A[i][uno]) : null
  
  
}
for (let i = 0; i < A.length; i++) {
  
  let dos= 2
  
 
  
  i < 3 ?  copiedNumber[4].push(A[i][dos]) : null
  i >=3 && i < 6 ?  copiedNumber[5].push(A[i][dos]) : null
  
  
}

console.log(copiedNumber)


let shit = Array.from({length:A.length},()=>[])

for (let i = 0; i < A.length; i++) {
  
  
  shit[i].push(copiedNumber[i])
  
  A[i] = shit[i].flat(Infinity)
}

matrixColumnSort(A)

}



let transposeReverseArray1 = (A) =>{
  let copiedNumber = Array.from({length: A.length},()=>[])
  
  // console.log(copiedNumber)
  
  let ceros = 0
  let cero = 0;    
  
  for (let i = 0; i < A.length; i++) {
    i < 3 ?  copiedNumber[i].push(A[cero][i]) : null ;
    if(i >=3 && i < 6){ 
      copiedNumber[i].push(A[1][ceros]);
    ceros++;
    };
  }
  
  let ceros2= 0
  
  for (let i = 0; i < A.length; i++) {
    
    i < 3 ?  copiedNumber[i].push(A[2][i]) : null;
    if(i >=3 && i < 6){
      copiedNumber[i].push(A[3][ceros2]);
      ceros2++;
    }
  }
  
  let ceros3 = 0
  for (let i = 0; i < A.length; i++) {
    i < 3 ?  copiedNumber[i].push(A[4][i]) : null;
    if(i >=3 && i < 6){
      copiedNumber[i].push(A[5][ceros3]);
      ceros3++;

    }
    
  }
  
  console.log(copiedNumber)
  
  
  
  let shit = Array.from({length:A.length},()=>[])
  
  for (let i = 0; i < A.length; i++) {
    
    
    shit[i].push(copiedNumber[i])
    
    A[i] = shit[i].flat(Infinity)
  }
  
  matrixColumnSort(A)
   
}
  


let shiftHalfBottom = (A)=>{
  let copiedNumber = Array.from({length: A.length},()=>[])
  
  console.log(copiedNumber)

  let cero = 0
  let tres = 3
  for (let i = 0; i < 3; i++) {
    if(i < 3) {copiedNumber[i].push(A[tres][cero]) ;
    tres++;
    ;
  }
      

  }
  
  let tres1 = 3
  let uno = 1
  for (let i = 0; i < 3; i++) {
    if(i < 3) {copiedNumber[i].push(A[tres1][uno]) ;
      tres1++;
    
    }
    
  }
  let tres2 = 3
  let dos = 2
  for (let i = 0; i < 3; i++) {
    if(i < 3) {copiedNumber[i].push(A[tres2][dos]) ;
      tres2++;
    
    }
  }
  
  for (let i = 0; i < 3; i++) {
    copiedNumber[i].unshift(``)
    
  }
  
  
  let cero4 = 0
  let primero = 0
  for (let i = 3; i < A.length; i++) {
    if(i < 6) {copiedNumber[i].push(A[primero][cero4]) ;
    primero++;
    ;
    }   

  }
  let cero5 = 1
  let segundo = 0
  for (let i = 3; i < A.length; i++) {
    if(i < 6) {copiedNumber[i].push(A[segundo][cero5]) ;
      segundo++;
      ;
    }   

  }
  let cero6 = 2
  let tercero = 0
  for (let i = 3; i < A.length; i++) {
    if(i < 6) {copiedNumber[i].push(A[tercero][cero6]) ;
    tercero++;
    ;
    }   

  }
  
  
  console.log(`copied number ${copiedNumber}`)
  console.log(copiedNumber)
  
  let shit = Array.from({length:A.length},()=>[])
  
  for (let i = 0; i < A.length; i++) {
    
    
    shit[i].push(copiedNumber[i])
    
    A[i] = shit[i].flat(Infinity)
  }
  
  matrixColumnSort(A)
}




let transposeReverseBottom = (A) =>{
  let copiedNumber = Array.from({length: A.length},()=>[])
  
  // console.log(copiedNumber)
  
  let ceros = 0;
  let tres= 3;    
  let uno1= 1;
  let dos1 = 2
  
  for (let i = 0; i < 3; i++) {
    if(i < 3){
      copiedNumber[i].push(A[tres][ceros]);
      copiedNumber[i].push(A[tres][uno1]);
      copiedNumber[i].push(A[tres][dos1]);
    tres++
    console.log(tres);
  };
  
  }
  let  ceros2= 0;    
  let  uno2 = 1;
  let dos2 = 2;
let tres2 = 3  

for (let i = 3; i < A.length; i++) {
  if(i < 6){
    copiedNumber[i].push(A[ceros2][uno2]);
      copiedNumber[i].push(A[ceros2][dos2]);
      copiedNumber[i].push(A[ceros2][tres2]);
    ceros2++;
  };
  }
    console.log(copiedNumber)
    
    
  let shit = Array.from({length:A.length},()=>[])
  
  for (let i = 0; i < A.length; i++) {
    
    
    shit[i].push(copiedNumber[i])
    
    A[i] = shit[i].flat(Infinity)
  }
  
  matrixColumnSort(A)
  
}
  
 
  
  let displayMatrix = (A)=>{
  for (let i = 0; i < A.length; i++) {
   console.log(A[i])
  }
}

let columnSort = ()=>{
matrixColumnSort(m1);
transposeArray1(m1);
transposeReverseArray1(m1);
shiftHalfBottom(m1);
transposeReverseBottom(m1);
displayMatrix(m1);
}

columnSort()

>--------------------------------------------------------------<

-FIND MIN AND MAX VALUES IN ARRAY-------
let array = [79,12,68,77,123,7,5,6];

function findMaxMin(array){
  let max= -Infinity;
  let min = Infinity;
  let i = array.length;
  let minAndMaxSum =0;
  

  console.log(array);

  if (!array.length) return `empty array`
  
  while (i--){
        if(array[i] == null || array[i] === undefined) i--;
    if ( min >= array[i]) min = array[i];
    if(max <= array[i]) max = array[i];
    }
  
  minAndMaxSum = min+max;
  
  return `max is ${max} and min is ${min}, and the sum of both is ${minAndMaxSum}`
}


console.log(findMaxMin(array))



let array = [79,12,68,77,123,7,5,6];

function findMaxMin(array){
  let max= -Infinity;
  let min = Infinity;
  let i = array.length;
  let minAndMaxSum =0;
  

  console.log(array);

  if (!array.length) return `empty array`
  
  while (i--){
        array[i] == null || array[i] === undefined ? i-- : 0;
    min >= array[i] ? min = array[i] : min;
    max <= array[i] ? max = array[i] : max;
    }
  
  minAndMaxSum = min+max;
  
  return `max is ${max} and min is ${min}, and the sum of both is ${minAndMaxSum}`
}


console.log(findMaxMin(array))

let min = a[0]
let max = a[0]
  for (let i = 1; i < a.length; i++) {
       array[i] == null || array[i] === undefined ? i++ : 0;
    min >= a[i] ? min = a[i] : null;
    max <= a[i] ? max = a[i] : null;
  }
  console.log(min,max)
-------------------------------------------------------------------------------------

DATA STRUCTURES 

1.- STACK STRUCTURE  CREATED WITH CLASS. 

class Stack{


constructor(){
  this.newStack = [];
  this.top;
}

  pushStack(x){
    let arrayLength = this.newStack.length-1
    arrayLength = arrayLength+1
    this.newStack[arrayLength] = x
    if(arrayLength == 0) console.log(`thge top of the stack is index ${0}`)
    
    this.top = arrayLength
    if(arrayLength != 0) console.log(`thge top of the stack is index ${this.top}`)
    console.log( this.newStack);
  }
  popStack(){
    let arrayLength1 = this.newStack.length-1
    this.newStack.length = this.newStack.length-1
    this.top = arrayLength1-1
    if(this.top < 0){console.log(`the stack is empy`) 
    return console.log(this.newStack)};
    console.log(`thge top of the stack is index ${this.top}`);
    console.log(this.newStack);
   }
 

}

let stack1 = new Stack

stack1.pushStack(2)
stack1.pushStack(3)
stack1.pushStack(4)

stack1.popStack()
stack1.pushStack(50000)


>--------------------------------------------------------------<

2.- QUE STRUCTURE  CREATED WITH FUNCTIONS BECAUSE CLASS METHODS WERENT ENOUGH

let que1 = []
let head = 0
let contadorHead = 0
let tail = 0
let contadorTail = 0
let contador = 0
let limit = 0
let arrayPopLimit = 21 + 1
let arrayPushLimit = arrayPopLimit-2



let pushQue = (x)=>{
  console.log(`LIMIT antes del mas mas ${limit}`)
  limit++
  console.log(`LIMIT despues del mas mas ${limit}`)
  let arrayLength = que1.length-1;
  if(tail <arrayPushLimit){
  arrayLength = arrayLength+1;
  que1[arrayLength] = [];
  que1[arrayLength][0] = x;
  }
  
  
  tail = que1.indexOf(que1[que1.length-1])
  
  
  console.log(`the Head now is ${contadorHead}`)
  console.log(`the tail is ${tail}`)
  
  
  if (que1[contadorTail].length == 0 && limit>=arrayPopLimit) {
    que1[contadorTail].push(x);
    contadorTail++;
    console.log(`contadorTail ${contadorTail}`)
  } 
  

 

}


function popQue(que){
  let number = contador
  que[number].length = que[number].length-1;
  contador++

  if(contador == que.length ){
    console.log(`The Que is empty`)
    contador = 0
    console.log(contador)
  }
    
  console.log(`the tail is ${tail}`)
  contadorHead++
  console.log(`the Head now is ${contadorHead}`)
  
  
}
let ss = {
  
  head:{
   value:0,
   next:{
     value:1,
     next:{
       value:2,
       next:{
         value:3,
         next:{
           value:4,
           next:{
             value:5,
             next: {
               value:6,
               next:{
                 value:7,
                 next:{
                   value: 8,
                   next:{
                     value: 9,
                     next:{
                       value: 10,
                       next:{
                         value: 11,
                         next:{
                           value: 12,
                           next:{
                             value: 13,
                             next:{
                               value: 14,
                               next:{
                                 value: 15,
                                 next:{
                                   value: 16,
                                   next:{
                                     value: 17,
                                     next:{
                                       value: 18,
                                       next:{
                                         value: 19,
                                         next:{
                                           value: `if you read 
                                           (swear words were deleted lol)`,
                                           next:{
                                             value: 21,
                                             next:{
                                               value: null,
                                             }
                                           }
                                         }
                                       }
                                     }
                                   }
                                 }
                               }
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       }
     }
   }
  }
};


let x = ss;
let p;
pushQue(0)
pushQue(1)
pushQue(2)
pushQue(3)
pushQue(4)
pushQue(5)
pushQue(15)
pushQue(6)
pushQue(9)
pushQue(8)
pushQue(4)

popQue(que1)
popQue(que1)
popQue(que1)
popQue(que1)
popQue(que1)
popQue(que1)

pushQue(17)
pushQue(3)
pushQue(5)
popQue(que1)
popQue(que1)
pushQue(3)
pushQue(3)
pushQue(3)
pushQue(3)
pushQue(3)
pushQue(499)
pushQue(500)
pushQue(501)
pushQue(502)
pushQue(503)


// for (let i = 0; i < 6; i++) {
//   pushQue(i)
  
// }

for (let i = 0; i < que1.length; i++) {
  console.log(que1[i])
  
}
console.log(que1)

for (let i = 0; i < arrayPushLimit; i++) {
  if(i==0){
  pushQue(x.head)
  p = x.head.next
  pushQue(p)
} else {

    pushQue(p.next)
    p = p.next

 }
 
  }


  console.log(que1)

  >--------------------------------------------------------------<

3.-  LinkedLists
let ss = {
  
   head:{
    value:0,
    next:{
      value:1,
      next:{
        value:2,
        next:{
          value:3,
          next:{
            value:4,
            next:{
              value:5,
              next: {
                value:6,
                next:{
                  value:7,
                  next:{
                    value: 8,
                    next:{
                      value: 9,
                      next:{
                        value: 10,
                        next:{
                          value: 11,
                          next:{
                            value: 12,
                            next:{
                              value: 13,
                              next:{
                                value: 14,
                                next:{
                                  value: 15,
                                  next:{
                                    value: 16,
                                    next:{
                                      value: 17,
                                      next:{
                                        value: 18,
                                        next:{
                                          value: 19,
                                          next:{
                                            value: 20,
                                            next:{
                                              value: 21,
                                              next:{
                                                value: null,
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
   }
};


let x = ss;
let p;

function ListSearch(k){
  if (x.head.value == k){
    console.log(`value found ${k}`)
 
 } else{
  p = x.head.next
 }
 

 while(p.value !=k && p.value!= null){
  p =p.next
 
 }

 return p

}
console.log(ListSearch(20))

class LinkedList {
  constructor() {
    let length = 0;
    let head = null;
    this.nodes;

    class Node {
      constructor(element) {
        this.element = element;
        this.next = null;

      }
    }

    this.size = function () {
      return length;
    };

    this.head = function () {
      return head;
    };

    this.add = function (element) {
      let node = new Node(element);
      if (head === null) {
        head = node;
      } else {
        let currentNode = head;

        while (currentNode.next) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
        
      }
      this.nodes = head
      length++;
    };

    this.remove = function (element) {
      let currentNode = head;
      let previousNode;
      if (currentNode.element === element) {
        head = currentNode.next;
      } else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
      }

      length--;
    };

    this.isEmpty = function () {
      return length === 0;
    };

    this.indexOf = function (element) {
      let currentNode = head;
      let index = -1;

      while (currentNode) {
        index++;
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next;
      }

      return -1;
    };

    this.elementAt = function (index) {
      let currentNode = head;
      let count = 0;
      while (count < index) {
        count++;
        currentNode = currentNode.next;
      }
      return currentNode.element;
    };


    this.addAt = function (index, element) {
      let node = new Node(element);

      let currentNode = head;
      let previousNode;
      let currentIndex = 0;

      if (index > length) {
        return false;
      }

      if (index === 0) {
        node.next = currentNode;
        head = node;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
      }
      length++;
    };

    this.removeAt = function (index) {
      let currentNode = head;
      let previousNode;
      let currentIndex = 0;
      if (index < 0 || index >= length) {
        return null;
      }
      if (index === 0) {
        head = currentNode.next;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
      return currentNode.element;
    };
      this.showNodes = function (){
        console.log(this.nodes)
      }
  }
} 

let camion = {
  no: 'Joanna',
  edad:20,
  saludar: () =>{
          console.log(`Mi nombre es`)
  }
}

// camion.saludar()


let conga = new LinkedList();
conga.add('Kitten')
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add(camion);
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(0));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());


for (let i = 12; i >= 0; i--) {
  conga.add(i)
  
// }
conga.showNodes()



class LinkedList{

  constructor(){
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data){
    const newNode = new LinkedListNode(data,this.head)
    this.length++
  }

  getByIndex(index){
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

class LinkedListNode{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}
 


LinkedList.fromValues = function(...values){
  const ll = new LinkedList()
  for (let i = values.length; i >= 0; i--) {
    ll.insertAtHead(values[i])
  }
   return ll

// }

// const lz = LinkedList.fromValues(10,20)

// console.log(lz)

// console.log(conga.head())



>--------------------------------------------------------------<

4.- Hash Tables 

hash functions

      Division Method 
let ca = 100%12

// console.log(ca)
        Multiplication Method  "A" can be any constant between 0 & 1, this means
        A remains the same value all the time because is a CONSTANT 


function hashMult(){
let k= 61
let n = 1000
let A = 0.618033  
let hashFunctMultiply = k* 0.618033

let ba = hashFunctMultiply%1

console.log(hashFunctMultiply)
// console.log(ba)

let aw = Math.floor(n*ba)

console.log(aw)
}
function hashMult3(){
  let k= 62
  let n = 1000
let A = 0.618033  
let hashFunctMultiply = k* 0.618033

let ba = hashFunctMultiply%1

console.log(hashFunctMultiply)
console.log(ba)

let aw = Math.floor(n*ba)

console.log(aw)
}

function hashMult1(){
  let k= 63
  let n = 1000
let A = 0.618033  
let hashFunctMultiply = k* 0.618033

let ba = hashFunctMultiply%1

console.log(hashFunctMultiply)
console.log(ba)

let aw = Math.floor(n*ba)

console.log(aw)
}
function hashMult2(){
  let k= 64
  let n = 1000
let A = 0.618033  
let hashFunctMultiply = k* 0.618033

let ba = hashFunctMultiply%1

console.log(hashFunctMultiply)
console.log(ba)

let aw = Math.floor(n*ba)

console.log(aw)
}


hashMult()
hashMult3()
hashMult1()
hashMult2()

console.log(123456%701)
Constructor
function User(name,age) {
  this.name =  name;
  this.age = age
}

let user1 = new User('Laurent',25);
let user2 = new User('Joanna',21);

//Adding property to constructor using prototype
User.prototype.list = 'one';

console.log(user1.name)
console.log(user2.name,user2.age)

console.log(user1.list); // 25
console.log(user2.list); //

console.log(user1)
console.log(user2)

user1.sex = 'Fem'

console.log(user1)
class Stack{


constructor(newStack = [],top){
  this.newStack = newStack;
  this.top = top 
// }

pushStack(x){
  let arrayLength = this.newStack.length-1
  arrayLength = arrayLength+1
  this.newStack[arrayLength] = x
  if(arrayLength == 0) console.log(`thge top of the stack is index ${0}`)
  
  this.top = arrayLength
  if(arrayLength != 0) console.log(`thge top of the stack is index ${this.top}`)
  console.log( this.newStack);
}
popStack(){
  let arrayLength1 = this.newStack.length-1
  this.newStack.length = this.newStack.length-1
  this.top = arrayLength1-1
  if(this.top < 0){console.log(`the stack is emtpy`) 
  return console.log(this.newStack)};
  console.log(`thge top of the stack is index ${this.top}`);
  console.log(this.newStack);
}

}

let stack1 = new Stack;

for (let i = 0; i < 12; i++) {
  if(i==0){
  stack1.pushStack(x.head)
  p = x.head.next
  stack1.pushStack(p)
} else {

    stack1.pushStack(p.next)
    p = p.next

 }
 
  }

stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()
stack1.popStack()


>--------------------------------------------------------------<

class Que{
  constructor(newQue = [],head,tail,contador){
    this.newQue = newQue;
    this.head = head 
    this.tail = tail 
    this.contador = contador
  }

  pushQue(x){
    let arrayLength = this.newQue.length-1
    arrayLength = arrayLength+1
    this.newQue[arrayLength] = []
    this.newQue[arrayLength][0] = x
    
    if(arrayLength == 0) console.log(`thge top of the Que is index ${0}`)
    
    this.top = arrayLength
    if(arrayLength != 0) console.log(`thge top of the Que is index ${this.top}`)
//     console.log( this.newQue);
//   }
//   *popQue(){
    for(const number of this.newQue){
      this.newQue[number].length = this.newQue[number].length-1;
             yield number;
  }
}
// }    ;
let que1 = new Que

for (let i = 0; i < 5; i++) {
  que1.pushQue(i)
  
}


let contador = 0
function popQue(que){
  let number = contador
  que.newQue[number].length = que.newQue[number].length-1;
  contador++

  if(contador == que.newQue.length ){
    console.log(`The Que is empty`)
    contador = 0
    console.log(contador)
  }
   
}

popQue()
popQue()
popQue()
popQue()
popQue()
popQue()

popQue(que1)
popQue(que1)
popQue(que1)
popQue(que1)
popQue(que1)


for (let i = 0; i < que1.newQue.length; i++) {
  console.log(que1.newQue[i])
  
}
console.log(que1.newQue)


let camion = que1.popQue()
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)
console.log(camion.next().value)

>--------------------------------------------------------------<

class Polygon {
  constructor(...sides) {
    this.sides = sides;
//   }
//   // Method
//   *getSides() {
    for(const side of this.sides){
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5,6,7);

console.log([...pentagon.getSides()])

; // [1,2,3,4,5]

 // 26
// console.log(maxHeapExtractMax(a))

// console.log(a)

// console.log(a)


let a = [5,6,3,7,1,8,9,2]

// 

   const obj1 = { foo: 'bar', x: 42 };
   const obj2 = { foos: 'baz', y: 13 };
   const merge = (...objects) => objects.reduce((acc, cur) => { return ({ ...acc, ...cur })});
  
   const mergedObj1 = merge(obj1, obj2);
  
   console.log(mergedObj1)

   let numberStore = [0, 1, 2];
   let newNumber = [12,[13],[14],[[15],[16],17]];
  
   numberStore = numberStore.concat(newNumber.flat(Infinity))
  
   console.log(numberStore)
  
  
  // stoogesort es una mamada
  function stoogeSort(items) {
      var array = [];
    
  if ( items ) {
    array = items.map(function(item) { return item; });
  }
  
  performStoogeSort(array, 0, array.length - 1);
  
  return array;
// }

function performStoogeSort(array, low, high) {
  var t;

  console.log(` array low before first if ${array[low]}`)
  console.log(` array high before first if ${array[high]}`)
  
  if ( array[low] > array[high] ) {
    swap(array, low, high);
//   }
//   console.log(`______________________`)
//   console.log(` array low after first if ${array[low]}`)
//   console.log(` array high after first if ${array[high]}`)
//   console.log(` array before last if that calls recursevly performstoogesort ${array}`)
  
  if ( (high - low + 1) > 2 ) {
    t = Math.floor((high - low + 1) / 3);
    performStoogeSort(array, low, high - t);
    performStoogeSort(array, low + t, high);
    performStoogeSort(array, low, high - t);
    console.log(` array after last if that calls recursevly performstoogesort ${array}`)
  }
// }

// swap what is stored at position i and j in the array
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
// }

var items1 = [5,4,3,2,1],
    items2 = [6,2,5,10,13,9,1,11,8,15,7,4];
console.log(items1 + ' -> ' + stoogeSort(items1));
// // console.log(items2 + ' -> ' + stoogeSort(items2));




let arr = [null,1,null,2,null,60,300,50,21]


var largest = arr[0];

}// for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
    
}
// console.log(largest);


let objectsFetch = { features: [
  {attributes: {
    idPea:'1',
    Nombre: 'Riley Reid',
    Municipio: 'L.A.'
  }},
  {attributes: {
    idPea:'2',
    Nombre: 'Thomas Cormen',
    Municipio: 'M.A.'
  }}
]}

let c = objectsFetch.features.map( ({attributes: {Nombre}}) => Nombre)

console.log(c)


let k = objectsFetch.features.filter( item => item.attributes.Nombre === 'Riley Reid')

let c = objectsFetch.features.map(attributes => {
  return {...attributes}
})
console.log(c)


let k = c.map(element => {
  return element.attributes.Nombre
})

console.log(k)


let arr = [1,2,3,4,5,6,7,8,9,200];

let start = 0;
let end = arr.length-1;
let x = 600

function recursiveFunction(arr, x, start, end) {
//   console.log(start,end)    
//   console.log(`${arr[start]}, ${arr[end]}`)
     
  if (start > end) return false;

  // Find the middle index
  let mid=Math.floor((start + end)/2);
//  console.log(mid)
//   console.log(`mid ${arr[mid]}`)
//   // Compare mid with given key x
  if (arr[mid]===x) return true;
       
//   // If element at mid is greater than x,
//   // search in the left half of mid
  if(arr[mid] > x)
      return recursiveFunction(arr, x, start, mid-1);
  else

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(arr, x, mid+1, end);
}

console.log(recursiveFunction(arr,x,start,end))

let y = 100;
let x = 100;

let str = "";

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i + j >= y){
            str = str.concat(`{`);
        }else{
            str = str.concat(` `)
        }
    }
    str = str.concat("\n")
}

console.log(str)  