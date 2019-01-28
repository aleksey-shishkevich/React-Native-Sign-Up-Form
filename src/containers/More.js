/**
 * Container for "More" screen
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import mapDispatchToProps from  '../lib/mapDispatchToProps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import css from "../lib/basicStyles";

import * as navigationActions from '../reducers/nav/navigationActions';
import { Map } from 'immutable';
import MoreRender from '../components/MoreRender';
import TextIconButton from '../components/TextIconButton';
import getCurrentRouteName from '../lib/getCurrentRouteName';
import autobind from 'autobind-decorator'
import log  from '../lib/log';

import React from 'react';

const actions = {
    navigation: navigationActions,
};

function mapStateToProps(state) {
  return {
      ...state
  };
}


class More extends React.Component {
	static navigationOptions = ({ navigation }) => {
	    const { params = {} } = navigation.state;
	    return ({
		    title: 'More',
	        headerLeft: <TextIconButton
		    				style={{flexDirection: 'row-reverse'}}
		        			onPress={params.handlePress ? params.handlePress : () => null}  
		    				icon="navigate_before"/>,
	      });   
	  }
  
	constructor(props) {
		super(props);
	}
	  
	componentDidMount() { 
		this.props.navigation.setParams({
			handlePress: ()=>this.props.actions.navigation.back(), 
		});
	}

  
    shouldComponentUpdate(nextProps, nextState) {
	    let nextRouteName = getCurrentRouteName(nextProps.nav).routeName;
        return nextRouteName == "More";
    } 

  
	render() {
		return(
			<MoreRender/>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps(actions))(More);
