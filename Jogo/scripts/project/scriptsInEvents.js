

const scriptsInEvents = {

	async Ejogo_Event22_Act4(runtime, localVars)
	{
		//Obter o valor das vidas da variável global vidas
		let vidas = runtime.globalVars.Vidas;
		
		//Reduz uma vida
		vidas--;
		
		//Atualzia a variável global no construct 3
		runtime.globalVars.Vidas = vidas;
		
		//Se vidas chegarem a zero, execute a ação (ir para GameOver)
		if(vidas<0){
			console.log("GameOver");
			runtime.goToLayout.GameOver;//Trocar para o layout GameOver
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
