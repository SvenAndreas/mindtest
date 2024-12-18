type ValidKeys = 'tasks'

export const useLocalStorage = (key:ValidKeys)=>{
    const setItem = (value:unknown)=>{
        localStorage.setItem(key,JSON.stringify(value))
    }

    const getItem = ()=>{
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    }

    const removeItem = ()=>{
        localStorage.removeItem(key)
    }

    return {setItem,getItem,removeItem}
}