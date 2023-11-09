import { useSelector, useDispatch } from "react-redux";
import cx  from 'classnames'
import styles from "../Toolbox/index.module.css";
import { COLORS, MENU_ITEMS } from "@/constant";
import { changeBrushSize,changeColor } from "@/slice/toolboxSlice";

const Toolbox = () => {
     const dispatch = useDispatch()

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
   const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem ===MENU_ITEMS.ERASER
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }))  
    } 
     const updateColor = (newColor) => {
        dispatch(changeColor({ item : activeMenuItem,color: newColor }))  
    } 
    return (<div className={styles.toolboxContainer}>
        {showStrokeToolOption && <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
            <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BALCK })} style={{ backgroundColor: COLORS.BALCK }} onClick={updateColor(COLORS.BALCK)} />
             <div className={cx(styles.colorBox,{[styles.active]:color === COLORS.RED})} style={{ backgroundColor: COLORS.RED}}  onClick={updateColor(COLORS.RED)}/>
             <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE})} style={{backgroundColor: COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}/>
             <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE})} style={{backgroundColor: COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}/>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW})} style={{backgroundColor: COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}/>
                
                </div>
        </div>}
        {showBrushToolOption &&  <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush Size </h4>
             <div className={styles.itemContainer}>
            <input type="range" min={1} max={10} step={1} onChange={updateBrushSize}></input>
 </div>
        </div> }
       
     </div>)
}
 export default Toolbox