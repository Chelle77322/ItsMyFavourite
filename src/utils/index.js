//**LOCAL STORAGE SETTINGS FOR THE REDUX STORE */
export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string'){
        content = JSON.stringify(content)
    }
    return window.localStorage.setItem(name, content)
}
//**GETS THE INFORMATION FROM THE REDUX STORE */
export const getStore = (name)=> {
    if (!name) return
    return JSON.parse(window.localStorage.getItem(name))
}
//**GETS RID OF INFORMATION IN THE REDUX STORE */
export const removeItem = (name) => {
    if(!name) return
    return window.localStorage.removeItem(name)
}
//**VALIDATES ALL EMAIL ADDRESSES */
export const isValidEmail = (value)=> {
    return !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i.test(value))
}