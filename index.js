import React, { Component } from "react";
import {Platform, Image, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class TouchAble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled:false,
		};
	}
	onPressFuntion(){
		var preventTime = 500
		if (this.props.preventTime) {
			preventTime = this.props.preventTime
		}
		this.setState({disabled:true})
		setTimeout(()=>{
			this.setState({disabled:false})
		},preventTime)
		this.props.onTouch()
	}
render = () => {
    const { style, children } = this.props;
    return (
      <TouchableOpacity
			{...this.props}
			 disabled={this.state.disabled} onPress={() =>{this.onPressFuntion()}} style={style}>
       			{children}
      </TouchableOpacity>
    );
  }
}


export default TouchAble;

