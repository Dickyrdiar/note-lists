import moment from "moment"
import { useState } from "react"
import { useEffect } from "react"
import ContainerBackground from "../../components/ContainerBackgrund"

/* eslint-disable react/no-unknown-property */
const DetailNote = () => {
  const [dataDetail, setDataDetail] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('dataDetail')) || []
    setDataDetail(data)
  },[])

  const TimeFormat = moment(dataDetail?.time).locale('id-ID')

  return (
    <>
      <ContainerBackground>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="sm:mb-8 sm:flex sm:justify-left">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold max-w-1xl  text-indigo-600 ml-10 pt-4">
                  {dataDetail?.titleNote} 
                </p>
              </div>
              <div>
                <div className="text-sm text-gray-400 ml-8 mt-6">
                  {TimeFormat.format('LL')}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ml-11">
            {dataDetail?.descNote}
          </div>
        </div>
      </ContainerBackground>
    </>
  )
}

export default DetailNote