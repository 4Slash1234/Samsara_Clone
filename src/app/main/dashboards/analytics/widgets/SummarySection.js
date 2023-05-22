import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

function SummarySection() {
  return (
  <>
  <Paper className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="text-3xl font-medium tracking-tight leading-6 truncate">
            Summary
          </Typography>
        </div>
       
      </div>
      <div className="flex flex-row flex-wrap mt-16 -mx-24">
        <div className="flex flex-col mx-24 my-24">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
           Suitable For Electrification
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            20
          </Typography>
        </div>
        <div className="flex flex-col mx-24 my-24">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
            Est Annual Fuel Saving
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            $ 19,100
          </Typography>
        </div>
        <div className="flex flex-col mx-24 my-24">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
          Est Annual Emmission Saving
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            108,887 lb
          </Typography>
        </div>
      </div>

     
      
    </Paper>
  </>
  )
}

export default SummarySection