import React from 'react';

export const MyBarSelector = (props) => {

  let handleOnClick = () => {
    props.onClick(props.selector)
  }
  let buttonClass = "btn-small blue-grey darken-2"

  if (props.selected) {
    buttonClass = "btn-small blue-grey darken-4"
  }

  return (
    <div>
      <button className={buttonClass} onClick={handleOnClick}>
        {props.selector}
      </button>
    </div>
  )
}