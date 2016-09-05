#include<stdio.h>
#include<stdlib.h>
typedef enum{lp,rp,plus,minus,mult,divide,eos,op}pre;
char expr[20];
int stack[20];
int top= -1;

void push(int item)
{
	if(top==19)
	{
		printf("stack overflow");
		exit(0);
	}
	else
		stack[++top]=item;
}

int pop()
{
        if(top==-1)
        {
                printf("stack underflow");
                exit(0);
        }
        else
                return (stack[top--]);
}


pre getToken(char *symbol, int *n)
{
	*symbol=expr[(*n)++];
	switch(*symbol)
	{
		case '(': return  lp;
                case ')': return  rp;
                case '+': return  plus;
                case '-': return  minus;
                case '*': return  mult;
                case '/': return  divide;
                case '\0': return  eos;
                default : return  op;
	}
}


int eval(void)
{
	pre token;
	char symbol;
	int op1,op2;
	int n=0;
	token=getToken(&symbol, &n);
	while(token!=eos)
	{
		if(token==op)
			push(symbol-'0');
		else
		{
			op2=pop();
			op1=pop();
			switch(token)
			{
				case plus:push(op1+ op2);  break;
                                case minus:push(op1- op2);  break;
                                case mult:push(op1 *op2);  break;
                                case divide:push(op1/ op2);  break;
                         }
		}
		token=getToken(&symbol, &n);
	}
return pop();
}

int main()
{
 	int result;
	printf("enter the expr");
	scanf("%s",expr);
	result=eval();
	printf("\nResult=%d", result);
	return 0;
}
