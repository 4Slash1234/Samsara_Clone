import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

function SummarySection() {
  return (
  <>


  <Paper className=" flex flex-col flex-auto p-24  pb-12 rounded-2xl shadow overflow-hidden">
      
      <div className="flex flex-row flex-wrap  ">
        <div className="flex flex-col  my-10">
          <Typography color="text.secondary" className="text-2xl font-medium leading-none">
           Suitable For Electrification
          </Typography>
          <Typography className="mt-12 font-medium text-3xl leading-none">
            20
          </Typography>
        </div>
        <div className="flex flex-col  my-20">
          <Typography color="text.secondary" className="text-2xl font-medium leading-none">
            Est Annual Fuel Saving
          </Typography>
          <Typography className="mt-12 font-medium text-3xl leading-none">
            $ 19,100
          </Typography>
        </div>
        <div className="flex flex-col  my-20">
          <Typography color="text.secondary" className="text-2xl font-medium leading-none">
          Est Emmission Saving
          </Typography>
          <Typography className="mt-12 font-medium text-3xl leading-none">
            108,887 lb
          </Typography>
        </div>
      </div>

     
      
    </Paper>
  </>
  )
}

export default SummarySection