import React from 'react'

function Header({data}) {
  return (
    <div>Header

        <br></br>

        <code>{JSON.stringify(data)}</code>
    </div>
  )
}

// React.memo provides only rendering when a prop (header's) changes.
export default  React.memo(Header);