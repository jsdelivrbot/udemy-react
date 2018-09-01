import React, { Fragment } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

const average = data => _.round(_.sum(data)/data.length)

const Chart = ({ data, color, units }) => {

  return (
    <Fragment>
      <div>
        <Sparklines width={180} height={120} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
      </div>
      <div>{average(data)} {units}</div>
    </Fragment>
  )
}

export default Chart
