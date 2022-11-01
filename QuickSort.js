let list = [];
for(let i=1;i<=100;i++)
{
  list[i]=Math.floor(Math.random()*100);
}
console.log(list);
function qsort(l,r) {
   let mid=list[Math.floor((l+r)/2)];
   let i=l,j=r;
   do
   {
     while(list[i]<mid) i++;
     while(list[j]>mid) j--;
     if(i<=j)
     {
       let tmp=list[i];
       list[i]=list[j];
       list[j]=tmp;
       i++;
       j--;
     }
   }while(i<=j);
   if(l<j)
   {
     qsort(l,j);
   }
   if(i<r)
   {
     qsort(i,r);
   }
}
qsort(1,100);
console.log(list);
