import React, { Component } from 'react';
import Cable from 'actioncable';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messages';

class MessagesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: '',
      chatLogs: []
    };
  }

  componentWillMount() {
    this.createSocket();
    this.props.onGetMessages(this.state.chatLogs);
    // this.setState({chatLogs: })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ chatLogs: nextProps.chatLogs });
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        let chatLogs = this.state.chatLogs;
        chatLogs.push(data);
        this.setState({ chatLogs: chatLogs });
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent
        });
      }
    });
  }

  renderChatLog() {
    return this.state.chatLogs.map((el) => {
      return (
        <li className="message" key={`chat_${el.id}`}>
          <span className='chat-message'>{ el.content }</span>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  render() {
    console.log(this.props, "***************")
    console.log(this.state, "state")
    return (
      <div className='App'>
        <div className='wrapper'>
          <h1>Chat</h1>
          <div className="messages-list-frame">
            <ul className='chat-logs'>
              { this.renderChatLog() }
            </ul>
          </div>
          <div className="panel">
          <input
            onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
            value={ this.state.currentChatMessage }
            onChange={ (e) => this.updateCurrentChatMessage(e) }
            type='text'
            placeholder='Enter your message...'
            className='message-input' />
          <button
            onClick={ (e) => this.handleSendEvent(e) }
            className='send'>
            Send
          </button>
          </div>
        </div>
      </div>
    );
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  handleChatInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }
}

export default connect(
  state => ({
    chatLogs: state.messages.chatLogs
  }),
    dispatch => ({
    onGetMessages: () => {
      dispatch(getMessages());
    }
  })
)(MessagesPage);
