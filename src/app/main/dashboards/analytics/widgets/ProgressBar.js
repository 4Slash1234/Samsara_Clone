import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import { LinearProgress, Typography } from '@mui/material'
import React from 'react'

function ProgressBar() {
  return (
    <>
    <div className="my-32 space-y-32">
        <div className="flex flex-col">
          <div className="flex items-center space-x-16">
            <div className="flex items-center justify-center w-56 h-56 rounded bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50">
              <FuseSvgIcon className="text-current">heroicons-outline:credit-card</FuseSvgIcon>
            </div>
            <div className="flex-auto leading-none">
              <Typography className="text-12 font-medium" color="text.secondary">
                Expenses
              </Typography>
              <Typography className="font-medium text-20">
               
              </Typography>
             
            </div>
            <div className="flex items-end justify-end min-w-72 mt-auto ml-24">
              <div className="text-lg leading-none">2.6%</div>
              <FuseSvgIcon size={16} className="text-green-600">
                heroicons-solid:arrow-narrow-down
              </FuseSvgIcon>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-16">
            <div className="flex items-center justify-center w-56 h-56 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-50">
              <FuseSvgIcon className="text-current">heroicons-outline:cash</FuseSvgIcon>
            </div>
            <div className="flex-auto leading-none">
              <Typography className="text-12 font-medium" color="text.secondary">
                Savings
              </Typography>
              <Typography className="font-medium text-20">
              
              </Typography>
              
            </div>
            <div className="flex items-end justify-end min-w-72 mt-auto">
              <div className="text-lg leading-none">12.7%</div>
              <FuseSvgIcon size={16} className="text-red-600 ml-4">
                heroicons-solid:arrow-narrow-up
              </FuseSvgIcon>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-16">
            <div className="flex items-center justify-center w-56 h-56 rounded bg-teal-100 text-teal-800 dark:bg-teal-600 dark:text-teal-50">
              <FuseSvgIcon className="text-current">heroicons-outline:light-bulb</FuseSvgIcon>
            </div>
            <div className="flex-auto leading-none">
              <Typography className="text-12 font-medium" color="text.secondary">
                Bills
              </Typography>
              <Typography className="font-medium text-20">
                
              </Typography>
              
            </div>
            <div className="flex items-end justify-end min-w-72 mt-auto">
              <div className="text-lg leading-none">105.7%</div>
              <FuseSvgIcon size={16} className="text-red-600 ml-4">
                heroicons-solid:arrow-narrow-up
              </FuseSvgIcon>
            </div>
          </div>

          <Typography className="mt-12 text-md" color="text.secondary">
            Exceeded your personal limit! Be careful next month.
          </Typography>
        </div>
      </div>
    </>
  )
}

export default ProgressBar