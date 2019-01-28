/**
 * Render for 'Congratulations' state depending on device
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import Mobile from './Mobile';
import TabletP from './TabletP';
import TabletL from './TabletL';


export default (props) => {
	switch (props.layout) {
		case 'PHONE': return <Mobile {...props}/>
		case 'TABLETP': return <TabletP {...props}/>
		case 'TABLETL': return <TabletL {...props}/>
	}	
}