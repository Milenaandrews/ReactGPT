
import { useState, } from "react"
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../components";

interface Message {
    text: string;
    isGpt: boolean;
}

export const ChatTemplate = () => {

    const [isloading, setIsloading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([])

    const handlePost = async( text:string ) => {
        setIsloading(true);
        setMessages( (prev) => [ ...prev, { text: text, isGpt: false }]);

        //TODO: Usecase

        setIsloading(false)

        //TODO: añador el mensaje isGPt en true
    }

    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    <GptMessage text="Hola, puedes escribir tu text y te ayudo con las correciones" />
                    {
                        messages.map((message, index) => (
                            message.isGpt
                                ? (
                                    <GptMessage key={index} text="Esto es de OpenAI" />
                                )
                                : (
                                    <MyMessage key={index} text={message.text} />
                                )

                        ))
                    }

                    {
                        isloading && (
                            <div className="col-start-1 col-end-12 fade-in">
                                <TypingLoader />
                            </div>

                        )
                    }
                    {/* <MyMessage text="Hola Mundo"/> */}


                </div>
            </div>

            <TextMessageBox
                onSendMessage={ handlePost}
                placeholder="Escribe aqui lo que deseas"
                disableCorrections
            />

        </div>
    )
}
