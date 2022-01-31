
function submeter () {


//criacao de variaveis
//colocar o gabarito aqui
var gabarito = ["A", "C", "B", "C", "D", "A", "A", "B", "C","D"];
var questao1,questao2,questao3,questao4,questao5,questao6,questao7,questao8,questao9,questao10
var certas=0
var percentual=0

//resposta 1
var resp1 = document.getElementsByName("pergunta1");
var len = resp1.length

	
for(i=0;i<len;i++)
{
if(resp1[i].checked)
{
  questao1 = resp1[i].value
  //alert("resposta 1: " + questao1);
}
}

//resposta 2
var resp2 = document.getElementsByName("pergunta2");
var len = resp2.length
	
for(i=0;i<len;i++)
{
if(resp2[i].checked)
{
 questao2 = resp2[i].value
//alert("Resposta 2: "+resp2[i].value);
}
}

//resposta 3
var resp3 = document.getElementsByName("pergunta3");
var len = resp3.length
	
for(i=0;i<len;i++)
{
if(resp3[i].checked)
{
 questao3 = resp3[i].value
//alert("Resposta 3: "+resp3[i].value);
}
}

//resposta 4
var resp4 = document.getElementsByName("pergunta4");
var len = resp4.length
	
for(i=0;i<len;i++)
{
if(resp4[i].checked)
{
 questao4 = resp4[i].value
//alert("Resposta 4: "+resp4[i].value);
}
}

//resposta 5
var resp5 = document.getElementsByName("pergunta5");
var len = resp5.length
	
for(i=0;i<len;i++)
{
if(resp5[i].checked)
{
 questao5 = resp5[i].value
//alert("Resposta 5: "+resp5[i].value);
}
}
	
//resposta 6
var resp6 = document.getElementsByName("pergunta6");
var len = resp6.length
	
for(i=0;i<len;i++)
{
if(resp6[i].checked)
{
 questao6 = resp6[i].value
//alert("Resposta 6: "+resp6[i].value);
}
}
	
//resposta 7
var resp7 = document.getElementsByName("pergunta7");
var len = resp7.length
	
for(i=0;i<len;i++)
{
if(resp7[i].checked)
{
 questao7 = resp7[i].value
//alert("Resposta 7: "+resp7[i].value);
}
}	
	
//resposta 8
var resp8 = document.getElementsByName("pergunta8");
var len = resp8.length
	
for(i=0;i<len;i++)
{
if(resp8[i].checked)
{
 questao8 = resp8[i].value
//alert("Resposta 8: "+resp8[i].value);
}
}

//resposta 9
var resp9 = document.getElementsByName("pergunta9");
var len = resp9.length
	
for(i=0;i<len;i++)
{
if(resp9[i].checked)
{
 questao9 = resp9[i].value
//alert("Resposta 9: "+resp9[i].value);
}
}	

//resposta 10
var resp10 = document.getElementsByName("pergunta10");
var len = resp10.length
	
for(i=0;i<len;i++)
{
if(resp10[i].checked)
{
 questao10 = resp10[i].value
//alert("Resposta 10: "+resp10[i].value);
}
}	
	
if(questao1==gabarito[0])
{
   certas=certas+1
}
if(questao2==gabarito[1])
{
   certas=certas+1
}

if(questao3==gabarito[2])
{
	certas=certas+1
}

if(questao4==gabarito[3])
{
	certas=certas+1
}

if(questao5==gabarito[4])
{
	certas=certas+1
}

if(questao6==gabarito[5])
{
	certas=certas+1
}
    
if(questao7==gabarito[6])
{
	certas=certas+1
}

if(questao8==gabarito[7])
{
	certas=certas+1
}	
	
if(questao9==gabarito[8])
{
	certas=certas+1
}

if(questao10==gabarito[9])
{
	certas=certas+1
}


	percentual=(certas/10)*100
	alert("Certas: "+certas+"/10 - "+percentual+"%");

}


