/* eslint-disable no-unused-vars */

import moment from "moment"
import Delete from '../../assets/delete.png'

/* eslint-disable react/prop-types */
const CardComponent = ({ onClickCard, titleCard, dateCard, deleteCard }) => {
  const newTime = moment(dateCard).locale('id-ID')
  console.log(newTime.format('LL'))

  return (
    <div className=" h-32 w-64 max-w-sm rounded bg-gray-40 overflow-hidden mt-11 shadown-lg p-4 max-w-xs max-auto">
      <div className="text-xl font-semibold text-gray-800 mb-2">
        {titleCard}
      </div>

      <div className="text-sm text-gray-400 mb-4">
        {newTime.format('LL')}
      </div>

      <div className="flex justify-between item-center">
        <a onClick={onClickCard} className="text-blue-500 hover:underline">Read More</a>
        <a onClick={deleteCard}>
          <img 
            src={Delete} 
            alt="delet" 
            width='20'
            // height='125'
          />
        </a>
      </div>
    </div>
  )
}

export default CardComponent