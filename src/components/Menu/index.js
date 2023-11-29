<<<<<<< HEAD
import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faEraser,faRotateRight,faRotateLeft, faFileArrowDown}  from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css' 
import cx from 'classnames';
import { menuItemClick,ac } from '@/slice/menuSlice'
import { MENU_ITEMS } from '@/constant';
const Menu = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
   
    
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))   
    }
    
    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} onClick={()=> handleMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}  />

            </div>
            <div  className={cx(styles.iconWrapper,{ [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })} onClick={()=> handleMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser}  className={styles.icon}  />

            </div>
            <div  className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>

            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />

            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />

            </div>
        </div>
    )
} 
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames'

import {
    faPencil,
    faEraser,
    faLockOpen, 
    faDownload,
    faRotateLeft,
    faRotateRight
} from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css' 
import { menuItemClick,actionItemClick } from '../../slice/menuslice'
import { MENU_ITEMS } from '../../../constants'
const Menu = () => {
    const dispatch = useDispatch()
     const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))
    }
    const handleActionItemClick = (itemName) => {
        dispatch (actionItemClick(itemName))
    }
    return (
        // this is the div for the whole menu container
        <div className={styles.menuContainer}>
           {/* this is the div for  every individualv icon wrapper */}
            <div className={styles.iconWrapper} >
                <FontAwesomeIcon icon={faLockOpen} className={styles.icon} /> 
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem ===MENU_ITEMS.PENCIL})}   onClick={()=> handleMenuClick(MENU_ITEMS.PENCIL)} >
                <FontAwesomeIcon icon={faPencil} className={styles.icon}  /> 
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem ===MENU_ITEMS.ERASER})} onClick={()=> handleMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon} /> 
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleActionItemClick(MENU_ITEMS.UNDO)}>
                <FontAwesomeIcon icon={faRotateLeft}  className={styles.icon}/> 
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleActionItemClick(MENU_ITEMS.REDO)}>
                <FontAwesomeIcon icon={faRotateRight}className={styles.icon} /> 
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleActionItemClick(MENU_ITEMS.DOWNLOAD)}>
                <FontAwesomeIcon icon={faDownload} className={styles.icon} /> 
            </div>
        </div>
    )
}

>>>>>>> a2c88c73e8bc1688a8a46b86fef05214c79356a1
export default Menu;