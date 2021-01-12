import React from 'react'

const ScrollDown = ({ fill, isVisible }) => {
  return (
    <div className={`scroll-div down-chev ${isVisible && 'hidden'}`}>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        fill={fill}
        viewBox='0 0 201.611 201.611'
        style={{ enableBackground: 'new 0 0 201.611 201.611' }}
      >
        <g>
          <g>
            <g>
              <polygon
                points='100.809,155.39 0,51.596 5.536,46.221 100.809,144.317 196.085,46.221 201.611,51.596 			
				'
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ScrollDown
