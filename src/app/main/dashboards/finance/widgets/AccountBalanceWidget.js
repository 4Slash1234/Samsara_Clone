import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import { selectWidgets } from '../store/widgetsSlice';

function AccountBalanceWidget(props) {
  const theme = useTheme();
  const widgets = useSelector(selectWidgets);
  const { series, growRate, ami } = widgets?.accountBalance;

  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      width: '100%',
      height: '100%',
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    colors: [theme.palette.secondary.light, theme.palette.secondary.light],
    fill: {
      colors: [theme.palette.secondary.dark, theme.palette.secondary.light],
      opacity: 0.5,
    },
    series,
    stroke: {
      curve: 'straight',
      width: 2,
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy',
      },
      y: {
        formatter: (value) => `${value}%`,
      },
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex flex-col p-24 pb-16">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <Typography className="mr-16 text-3xl font-medium tracking-tight leading-0 truncate">
              Time Graph
            </Typography>
            <Typography className="font-medium" color="text.secondary">
              It Show Us Engine On Time & Driving Timing 
            </Typography>
          </div>

       
        </div>
        <div className="flex items-start mt-24 mr-8">
          <div className="flex flex-col">
            <Typography className="font-semibold text-3xl md:text-5xl tracking-tighter">
              3547 hr 31 m
            </Typography>
            <Typography className="font-medium text-sm leading-none" color="text.secondary">
              Driving Timing
            </Typography>
          </div>
          <div className="flex flex-col ml-32 md:ml-64">
            <Typography className="font-semibold text-3xl md:text-5xl tracking-tighter">
            35547 hr 41 m
            </Typography>
            <Typography className="font-medium text-sm leading-none" color="text.secondary">
              Engine On Time
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full h-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
          height={chartOptions.chart.height}
        />
      </div>
    </Paper>
  );
}

export default AccountBalanceWidget;
