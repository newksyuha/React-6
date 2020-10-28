import './style.css';
import React, { Component } from 'react';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [], 
        }
    }

    sendMessage = txt => {
        let { messages } = this.state;
        this.setState({
            messages: [...messages, { sender: 'Me', text: txt }],
        })
    }

    componentDidMount() {
        console.log('MOUNTED')
    }

    componentDidUpdate() {
        let { messages } = this.props;
        if (messages[messages.length - 1].sender != 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: [...messages, { sender: 'Bot', text: 'Я робот, отстань' }],
                })
            }, 500);
        }
        
    }

    render() {
        let { messages } = this.props;
        let messagesArray = messages.map((msg, i) => <Message sender = { msg.sender } text = { msg.text }  key = { i }/>);

        return (
            <div className="msg-main">
                <div className="msg-wrap" >
                    { messagesArray }
                </div>
                 <ChatInput send = { this.sendMessage } />
            </div>
        )
    }
}

const mapStateToProps = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ /*createChat*/ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);