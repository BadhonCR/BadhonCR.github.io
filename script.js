const roles=["Mathematics Student","Web Enthusiast","Open Source Learner"];
let i=0,j=0,d=1,e=document.getElementById("typing");
setInterval(()=>{
e.textContent=roles[i].slice(0,j);
j+=d;
if(j>roles[i].length)d=-1;
if(j<0){d=1;i=(i+1)%roles.length;j=0;}
},120);
