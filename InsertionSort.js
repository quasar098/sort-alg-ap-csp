let list=[]
for(let i=0;i<100;i++) list[i]=Math.floor(Math.random()*100);
console.log(list);
function swapping(index)
{
	if(index==0) return;
	if(list[index]<list[index-1])
	{
    let tmp=list[index];
    list[index]=list[index-1];
    list[index-1]=tmp;
		swapping(index-1);
	}
	return;
}
for(let i=1;i<100;i++) swapping(i);
console.log(list);
