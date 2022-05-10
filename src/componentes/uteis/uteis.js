import React from "react"
export function childrenwrithProps(props){
    return  React.Children.map(props.children,child => {
             return React.cloneElement(child,{...
                props, ...child.props
           })
         
          
          } )
  }