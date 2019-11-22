import React from 'react';
import {Provider} from 'mobx-react';
import {useStrict} from 'mobx';
//
// /* components */
// import Menu from '../components/menu';
//
/* stores */
import stores from '../../stores/index';

//
// /* styles */
// import './global.css';
// import styles from './app.css';
//
// /* use mobx strict mode */
// useStrict(true);
//
// const stores = { leftMenuStore, userStore };
//
// const App = props => (
//     <Provider { ...stores }>
//         <div className={styles['app-container']}>
//             <Menu />
//             <div className={styles['page-container']}>
//                 {props.children}
//             </div>
//         </div>
//     </Provider>
// );

const App = props => (
    <Provider {...stores}>
        <div>
            <div>
                {props.children}
            </div>
        </div>
    </Provider>);

export default App;
