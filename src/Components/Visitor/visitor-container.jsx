import React from 'react'
import VisitorItem from './visitor-item';


export default function VisitorContainer(props) {
  console.log(props)
  const visitors = props.visitors.map((visitor) => {
    return <VisitorItem
       key={visitor.id}
       deleteVisitor={props.deleteVisitor}
         id={visitor.id} name={visitor.name}
          about={visitor.about}
          />
  })

  return(
    <React.Fragment>
    
      <div  className="visitor-card-list">{visitors}</div>

    </React.Fragment>
  )
}
