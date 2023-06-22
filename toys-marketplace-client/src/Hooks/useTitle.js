import { useEffect } from "react"


const useTitle = (title) => {
  useEffect(()=> {
    document.title = `KIDZcars - ${title}`
  },[title])
}

export default useTitle;