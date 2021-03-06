
        import './style.css'
        import React, { Component } from 'react'
        import {StylesProvider} from "@material-ui/core/styles";
        import ChatsList from "../ChatsList/ChatsList.jsx";
        import Messages from "../Messages/Messages.jsx";

        import { contacts } from '../../moduls/Contacts/Contacts'

        export default class Layout extends Component {
            constructor(props) {
                super(props);
            }
            
            componentDidMount() {
            }

            render() {
                let activeChatId = this.props.match ? this.props.match.params.chatId : ''
                return (
                    <StylesProvider>
                        <div className="wrapper">
                            <ChatsList contacts={contacts.emails()} activeChatId={activeChatId}/>
                            <Messages />
                        </div>
                    </StylesProvider>
                )
            }
        }
    