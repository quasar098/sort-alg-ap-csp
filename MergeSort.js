let list=[],tmp=[];
for (let i = 0; i <100; i++) list[i]=Math.floor((Math.random())*100);
//for (let i = 0; i < list.length; i++) console.log(list[i]);
function Merge(left1, right1, left2, right2)
{
  let index=left1,left=left1;
	while(left1<=right1&&left2<=right2)
	{
		if(list[left1]<=list[left2]) tmp[index++]=list[left1++];
		else tmp[index++]=list[left2++];
	}
	while(left1<=right1) tmp[index++]=list[left1++];
	while(left2<=right2) tmp[index++]=list[left2++];
	for(let i=left;i<=right2;i++) list[i]=tmp[i];
}
function MergeSort(left, right)
{
  if(left>=right) return;
	let right1=Math.floor((left+right)/2), left2=right1+1;
	MergeSort(left, right1);
	MergeSort(left2, right);
	Merge(left, right1, left2, right);
}
MergeSort(0,99);
//for (let i = 0; i < list.length; i++) console.log(list[i]);
