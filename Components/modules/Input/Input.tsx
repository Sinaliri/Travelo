import styles from './Input.module.scss'

interface Iinput{
    label:string,
    width?:string,
    height?:string,
  }
const Input = ({label , width="6", height}:Iinput) => {

  return (
    <div className={`${styles.inputwrapper} col-12 xl:col-${width}`}>
            <label>{label}</label>
            <input
            style={{height:`${height}`}}
              //    className={(errors.name && touch.name ) && styles.uncompleted}
              type='textarea'
              name="FName"
            //   value={UserData.FName}
              
            />
           
          </div>
  )
}

export default Input