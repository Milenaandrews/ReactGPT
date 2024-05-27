
import { TextMessageBox, TypingLoader } from "../../components"
import { GptMessage } from "../../components/chat-bubbles/GptMessage"
import { MyMessage } from "../../components/chat-bubbles/MyMessage"

export const OrthographyPage = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    <GptMessage text="Hola, puedes escribir tu text y te ayudo con las correciones"/>
                    <MyMessage text="Hola Mundo"/>
                    <TypingLoader className="fade-in"/>
                    

                </div>
            </div>

            <TextMessageBox
                onSendMessage={ message => console.log(message)}
                placeholder="Escribe aqui lo que deseas"
                disableCorrections
            />

        </div>
    )
}
