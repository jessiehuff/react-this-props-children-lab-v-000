import React from 'react' 

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme})
    })
    return(
      <div>
        {childrenWithProps}
      </div> 
    )
  }
}