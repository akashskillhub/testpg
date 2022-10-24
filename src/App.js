import "./App.css"
import DoughnutChart from './DoughnutChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import FullCal from "./FullCal";


export default function App() {
  return <div className='container-fluid' >
    <div className="row">
      {/* <div className="col-sm-6 text-light bg-dark chart-equal-height">
        <BarChart />
      </div> */}
      {/* <div className="col-sm-4 bg-dark chart-equal-height">
        <DoughnutChart />
      </div> */}
      {/* <div className="col-sm-6 text-light bg-dark chart-equal-height">
        <AreaChart />
      </div> */}
      <div className="col-sm-6 offset-sm-3">
        <FullCal />

      </div>

    </div>
  </div>
}
