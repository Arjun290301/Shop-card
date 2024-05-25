import React,{useState} from 'react'

const Buttonfunction = ({item,setItem}) => {
    const [toggle,setToggle] = useState(true)
  return<>
  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              
                              <div className="text-center">
                              {
                              toggle?<button className="btn btn-outline-dark mt-auto" 
                              onClick={()=>{
                                
                                setToggle(current=>!current)
                                setItem(item+1)
                                }}>Add to cart</button>
                                :
                                <button className="btn btn-dark mt-auto" 
                                onClick={()=>{
                                  setToggle(current=>!current)
                                  setItem(item-1)

                                  
                                  }}>Remove</button>
                                
                              }
                                </div>
                            </div>
  </>
}

export default Buttonfunction


