import IconSunTwentyFour from "./icons/IconSunTwentyFour"

export const ChatPlaceholder = () => {
    return (
        <div className="m-5 ">
            <h3 className="text-4xl font-bold text-center mt-8 mb-8">CHAT-RDPT</h3>


            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">

                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Exemplo

                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Explique o sentido da vida em termos simples"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Qual é o maior desafio que você enfrentou desde que começou a operar?"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Faça um plano mentalmente instavel para mim"</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Exemplo

                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Como você processa e entende as perguntas que te fazem?"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Qual é a sua capacidade de retenção de informações?"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Como a IA pode impactar diferentes setores da sociedade no futuro?"</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Exemplo

                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Qual é a definição de inteligência artificial?"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Como funciona a tecnologia por trás dos chatbots?"</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white 
                    mb-3 p-3">"Qual é a diferença entre inteligência artificial e aprendizado de máquina?"</div>
                </div>

            </div>

        </div>
    )
}