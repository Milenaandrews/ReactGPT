import { GptMessage } from "../../components/sidebar"
import { MyMessage } from "../../components/chat-bubbles/MyMessage"

export const OrthographyPage = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    <GptMessage text="Hola, puedes escribir tu text y te ayudo con las correciones"/>

                    <MyMessage text="Hola Mundo"/>

                </div>
            </div>
        </div>
    )
}
