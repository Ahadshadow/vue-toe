
import {Bar} from "vue-chartjs";

export default async function fetchGraphData()  {
  console.log("HIIIIIIIII from function")
  let userlist = null;
  interface ChartData {
    loaded: boolean;
    chartData: any;
  }

const data: ChartData = {
  loaded: false,
  chartData: null
};

  data.loaded = false;
  console.log("HIIIIIIIII")
  try {
    const response =  await fetch('https://www.ec.europa.eu/agrifood/api/cereal/prices?productCodes=MAI&memberStateCodes=EL&marketCodes=ALEX, BOE, DRA, EVROSA, GRE, IOAN,KAR, KAV, KIL, KOM, KOZ, LAR, LEI , MES, ORE, PYR, SER, THE&beginDate=06/10/2023&endDate=06/01/2024');
    const { userlist } =  await response.json();
    data.chartData = userlist;

    data.loaded = true;
    console.log("test data =" +userlist);
    console.log("test data json =" + response);
    return userlist;
  } catch (e) {
    console.error(e);
  }

// async function mounted(): Promise<any> {
//   data.loaded = false;
// console.log("HIIIIIIIII")
//   try {
//     const response = await fetch('https://flux.agritel.com/agritelwebsite/QuotesAjax.aspx?KEY=677e9348-833d-4bf2-bc73-b8dfb61e1bb2&LANG=en');
//     const { userlist } = await response.json();
//     data.chartData = userlist;
//
//     data.loaded = true;
//     console.log(userlist);
//     return userlist;
//   } catch (e) {
//     console.error(e);
//   }
// }


return userlist;
}
