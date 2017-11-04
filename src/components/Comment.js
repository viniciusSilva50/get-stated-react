import React from 'react';
import UserInfo from './UserInfo';

export default class Comment extends React.Component{




    render(){
        return(
            <div className="Comment">
               <UserInfo user={this.props.user} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </div>
        );
    };


    commentPostWithoutComponet(props){
        return(
            <div className="Comment">
                <div className="UserInfo">
                    <img
                        className="Avatar"
                        src={props.user.avatarUrl}
                        alt={props.user.name}
                    />
                    <div className="UserInfo-name">
                        {props.user.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {props.date}
                </div>
            </div>
        );
    };


    formatDate(date){
        return date;
    };


}