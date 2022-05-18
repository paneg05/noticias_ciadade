function mensagem(mensagem=`teste`){
    let Arr = []
    let tamanho = mensagem.length
    for(let x=0;x<6;x++){
        if(x==0){
            Arr.push(`\n`)
            for(let i=0;i<(tamanho+4);i++){
                Arr.push(`*`)
                if(i==(tamanho+3)) {
                    Arr.push(`\n`)
                }
            }
        }else if(x==2){
            for (let i=0;i<(tamanho+4);i++){
                if(i==0){
                    Arr.push('*')
                } else if(i!=0&&i<(tamanho+3)){
                    Arr.push(' ')
                }if((tamanho+2)==i){
                    Arr.push('*\n')
                }
            }
        }else if(x==3){
            for(let i=0;i<tamanho+4;i++){
                if(i==0  ){
                    Arr.push('*')
                }else if(i==1 || i==tamanho+2){
                    Arr.push(' ')
                }else if(i==2){
                    Arr.push(mensagem)
                }else if(i==tamanho+3){
                    Arr.push('*\n')
                }
                
            }
        }else if(x==4){
            for (let i=0;i<(tamanho+4);i++){
                if(i==0){
                    Arr.push('*')
                } else if(i!=0&&i<(tamanho+3)){
                    Arr.push(' ')
                }if((tamanho+2)==i){
                    Arr.push('*\n')
                }
            }
        }else if(x==5){
            for(let i=0;i<(tamanho+4);i++){
                Arr.push(`*`)
                if(i==(tamanho+3)) {
                    Arr.push(`\n`)
                }
            }
        }
        
    }

    return console.log( Arr = Arr.join(""))
    
}

module.exports = mensagem