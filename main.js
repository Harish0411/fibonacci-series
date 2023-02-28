// fibonacci series

let f=0,s=1,t;

for(i=0; i<=10; i++){
   document.write(f + ", ");
    t = f+s;
	f=s;
	s=t;
}
