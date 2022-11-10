import {TABS} from '../redux/actions/type.js'

import { useDispatch } from 'react-redux';
import { toggleTab } from '../redux/actions/index.js';

const Tabs=({currentTab})=>{
    // TABS array hai esliye map krege

    const dispatch = useDispatch();

    return(
       TABS.map(tab=>(
            <button 
                className= {currentTab===tab? 'selected button': 'button'}
                onClick={()=>dispatch(toggleTab(tab))}    
            >
                {tab}
            </button>
       ))     
    )
}

export default Tabs;
