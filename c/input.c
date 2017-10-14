#include <stdio.h>

int main(){
    int flag=0;
    int a;
    int i=0;
    int s=0;
    while(flag==0){
        scanf("%d",&a);
        if(a==0) break;
        i++;
        s+=a;
    }
    printf("%d\n%d\n",s,i);
return 0;
}

