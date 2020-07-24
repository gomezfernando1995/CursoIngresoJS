function mostrar()
{
	let numero;
	
	numero = Math.round(Math.random()*9+1);
  
	if(numero>=9)
	{
      alert(`Tu nota es ${numero}, Exelente`);
	}
	else if (numero>=4)
    {
     alert(`Tu nota es ${numero}, Aprobo`); 
    }
	else 
    {
     alert(`Tu nota es ${numero}, Vamos la proxima se puede`);
    }
    

}//FIN DE LA FUNCIÓN