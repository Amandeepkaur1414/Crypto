import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { CryptoServiceService } from "../../services/crypto-service.service";
import { Chart,registerables  } from "chart.js";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  name:any;
  details :any;
  selectedCurrency:any;
  price:any;
  volume:any;
  marketCap:any;
  fully_diluted_market_cap:any;
  circulating_supply:any;
  @ViewChild("linechart", { static: true }) private mylineChartREf;
  lineChartLabels:any =[];
  lineChartData:any=[{ data: [] , label: 'Anthracnose',
  fill: false}];
  linechart: any;
  chartData = {
  "data": {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "quotes": [
      {
        "timeOpen": "2021-07-18T00:00:00.000Z",
        "timeClose": "2021-07-18T23:59:59.999Z",
        "timeHigh": "2021-07-18T01:34:03.000Z",
        "timeLow": "2021-07-18T14:42:03.000Z",
        "quote": {
          "open": 31533.8847205,
          "high": 32398.99518648,
          "low": 31215.4923102,
          "close": 31796.81013825,
          "volume": 18787986666.5,
          "marketCap": 596513309276.78,
          "timestamp": "2021-07-18T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-19T00:00:00.000Z",
        "timeClose": "2021-07-19T23:59:59.999Z",
        "timeHigh": "2021-07-19T05:49:03.000Z",
        "timeLow": "2021-07-19T14:07:03.000Z",
        "quote": {
          "open": 31800.01263521,
          "high": 31885.85993224,
          "low": 30563.73534679,
          "close": 30817.83165619,
          "volume": 20434789544.65,
          "marketCap": 578178147283.49,
          "timestamp": "2021-07-19T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-20T00:00:00.000Z",
        "timeClose": "2021-07-20T23:59:59.999Z",
        "timeHigh": "2021-07-20T00:18:03.000Z",
        "timeLow": "2021-07-20T14:18:13.000Z",
        "quote": {
          "open": 30838.28525375,
          "high": 31006.18663047,
          "low": 29360.95583827,
          "close": 29807.34767271,
          "volume": 23148267244.64,
          "marketCap": 559244324356.11,
          "timestamp": "2021-07-20T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-21T00:00:00.000Z",
        "timeClose": "2021-07-21T23:59:59.999Z",
        "timeHigh": "2021-07-21T18:14:05.000Z",
        "timeLow": "2021-07-21T01:17:18.000Z",
        "quote": {
          "open": 29796.28568986,
          "high": 32752.32636341,
          "low": 29526.18371065,
          "close": 32110.69326387,
          "volume": 28203024558.74,
          "marketCap": 602489309201.6,
          "timestamp": "2021-07-21T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-22T00:00:00.000Z",
        "timeClose": "2021-07-22T23:59:59.999Z",
        "timeHigh": "2021-07-22T16:03:16.000Z",
        "timeLow": "2021-07-22T11:14:16.000Z",
        "quote": {
          "open": 32138.87280774,
          "high": 32576.40000828,
          "low": 31745.29924353,
          "close": 32313.10632477,
          "volume": 19555230517.6,
          "marketCap": 606316858335.4,
          "timestamp": "2021-07-22T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-23T00:00:00.000Z",
        "timeClose": "2021-07-23T23:59:59.999Z",
        "timeHigh": "2021-07-23T23:59:07.000Z",
        "timeLow": "2021-07-23T17:15:17.000Z",
        "quote": {
          "open": 32305.95885214,
          "high": 33581.55060854,
          "low": 32057.89353952,
          "close": 33581.55060854,
          "volume": 22552046192.46,
          "marketCap": 630147722704.14,
          "timestamp": "2021-07-23T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-24T00:00:00.000Z",
        "timeClose": "2021-07-24T23:59:59.999Z",
        "timeHigh": "2021-07-24T17:09:05.000Z",
        "timeLow": "2021-07-24T00:12:13.000Z",
        "quote": {
          "open": 33593.72941224,
          "high": 34490.39124375,
          "low": 33424.85900496,
          "close": 34292.44590612,
          "volume": 21664706865.41,
          "marketCap": 643518528650.53,
          "timestamp": "2021-07-24T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-25T00:00:00.000Z",
        "timeClose": "2021-07-25T23:59:59.999Z",
        "timeHigh": "2021-07-25T23:57:11.000Z",
        "timeLow": "2021-07-25T14:28:16.000Z",
        "quote": {
          "open": 34290.29138518,
          "high": 35364.92558378,
          "low": 33881.83744908,
          "close": 35350.18697353,
          "volume": 20856685287.16,
          "marketCap": 663401935102.73,
          "timestamp": "2021-07-25T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-26T00:00:00.000Z",
        "timeClose": "2021-07-26T23:59:59.999Z",
        "timeHigh": "2021-07-26T19:26:03.000Z",
        "timeLow": "2021-07-26T00:04:18.000Z",
        "quote": {
          "open": 35384.02988451,
          "high": 40499.6772793,
          "low": 35287.3117098,
          "close": 37337.5333134,
          "volume": 51022126212.27,
          "marketCap": 700734471386.38,
          "timestamp": "2021-07-26T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-27T00:00:00.000Z",
        "timeClose": "2021-07-27T23:59:59.999Z",
        "timeHigh": "2021-07-27T23:59:03.000Z",
        "timeLow": "2021-07-27T03:05:03.000Z",
        "quote": {
          "open": 37276.03602972,
          "high": 39406.9409837,
          "low": 36441.72630845,
          "close": 39406.9409837,
          "volume": 35097370560.07,
          "marketCap": 739612127373.17,
          "timestamp": "2021-07-27T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-28T00:00:00.000Z",
        "timeClose": "2021-07-28T23:59:59.999Z",
        "timeHigh": "2021-07-28T11:36:03.000Z",
        "timeLow": "2021-07-28T18:01:03.000Z",
        "quote": {
          "open": 39503.18569435,
          "high": 40816.06972357,
          "low": 38862.43592287,
          "close": 39995.90646862,
          "volume": 38702404695.37,
          "marketCap": 750706646106.7,
          "timestamp": "2021-07-28T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-29T00:00:00.000Z",
        "timeClose": "2021-07-29T23:59:59.999Z",
        "timeHigh": "2021-07-29T09:48:03.000Z",
        "timeLow": "2021-07-29T01:25:03.000Z",
        "quote": {
          "open": 39995.45199088,
          "high": 40593.07226017,
          "low": 39352.05976929,
          "close": 40008.42084653,
          "volume": 27167146026.5,
          "marketCap": 750980784072.42,
          "timestamp": "2021-07-29T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-30T00:00:00.000Z",
        "timeClose": "2021-07-30T23:59:59.999Z",
        "timeHigh": "2021-07-30T23:59:06.000Z",
        "timeLow": "2021-07-30T09:29:09.000Z",
        "quote": {
          "open": 40027.4833199,
          "high": 42235.54770874,
          "low": 38397.3545099,
          "close": 42235.54770874,
          "volume": 33072782960.21,
          "marketCap": 792829863258.04,
          "timestamp": "2021-07-30T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-07-31T00:00:00.000Z",
        "timeClose": "2021-07-31T23:59:59.999Z",
        "timeHigh": "2021-07-31T00:00:36.000Z",
        "timeLow": "2021-07-31T17:37:23.000Z",
        "quote": {
          "open": 42196.30388672,
          "high": 42231.44828319,
          "low": 41110.83251138,
          "close": 41626.19567624,
          "volume": 25802845343.24,
          "marketCap": 781431379811.19,
          "timestamp": "2021-07-31T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-01T00:00:00.000Z",
        "timeClose": "2021-08-01T23:59:59.999Z",
        "timeHigh": "2021-08-01T03:58:23.000Z",
        "timeLow": "2021-08-01T23:29:06.000Z",
        "quote": {
          "open": 41460.84408133,
          "high": 42541.67948122,
          "low": 39540.94008121,
          "close": 39974.89602594,
          "volume": 26688438115.4,
          "marketCap": 750472428208.37,
          "timestamp": "2021-08-01T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-02T00:00:00.000Z",
        "timeClose": "2021-08-02T23:59:59.999Z",
        "timeHigh": "2021-08-02T07:09:33.000Z",
        "timeLow": "2021-08-02T20:50:06.000Z",
        "quote": {
          "open": 39907.2628498,
          "high": 40419.18086385,
          "low": 38746.34716686,
          "close": 39201.945189,
          "volume": 25595265436.38,
          "marketCap": 735995665488.55,
          "timestamp": "2021-08-02T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-03T00:00:00.000Z",
        "timeClose": "2021-08-03T23:59:59.999Z",
        "timeHigh": "2021-08-03T00:46:23.000Z",
        "timeLow": "2021-08-03T18:09:36.000Z",
        "quote": {
          "open": 39178.40356586,
          "high": 39750.03090553,
          "low": 37782.05245092,
          "close": 38152.9820898,
          "volume": 26189830449.73,
          "marketCap": 716341544144.93,
          "timestamp": "2021-08-03T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-04T00:00:00.000Z",
        "timeClose": "2021-08-04T23:59:59.999Z",
        "timeHigh": "2021-08-04T22:27:05.000Z",
        "timeLow": "2021-08-04T08:51:09.000Z",
        "quote": {
          "open": 38213.33196989,
          "high": 39952.29786644,
          "low": 37589.16562212,
          "close": 39747.50501675,
          "volume": 25372562723.91,
          "marketCap": 746313542791.34,
          "timestamp": "2021-08-04T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-05T00:00:00.000Z",
        "timeClose": "2021-08-05T23:59:59.999Z",
        "timeHigh": "2021-08-05T19:13:03.000Z",
        "timeLow": "2021-08-05T12:47:03.000Z",
        "quote": {
          "open": 39744.51415501,
          "high": 41341.93499214,
          "low": 37458.00399335,
          "close": 40869.55432742,
          "volume": 35185031016.54,
          "marketCap": 767423192906.2,
          "timestamp": "2021-08-05T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-06T00:00:00.000Z",
        "timeClose": "2021-08-06T23:59:59.999Z",
        "timeHigh": "2021-08-06T17:46:03.000Z",
        "timeLow": "2021-08-06T04:27:03.000Z",
        "quote": {
          "open": 40865.86692448,
          "high": 43271.65861284,
          "low": 39932.17941979,
          "close": 42816.49896809,
          "volume": 38226483045.67,
          "marketCap": 804022903682.01,
          "timestamp": "2021-08-06T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-07T00:00:00.000Z",
        "timeClose": "2021-08-07T23:59:59.999Z",
        "timeHigh": "2021-08-07T23:57:03.000Z",
        "timeLow": "2021-08-07T16:21:03.000Z",
        "quote": {
          "open": 42832.79664244,
          "high": 44689.86095933,
          "low": 42618.56614164,
          "close": 44555.8006644,
          "volume": 40030862141.25,
          "marketCap": 836730623771.7,
          "timestamp": "2021-08-07T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-08T00:00:00.000Z",
        "timeClose": "2021-08-08T23:59:59.999Z",
        "timeHigh": "2021-08-08T06:43:03.000Z",
        "timeLow": "2021-08-08T19:18:03.000Z",
        "quote": {
          "open": 44574.43858612,
          "high": 45282.35328436,
          "low": 43331.9098211,
          "close": 43798.11767796,
          "volume": 36302664749.76,
          "marketCap": 822545074286.19,
          "timestamp": "2021-08-08T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-09T00:00:00.000Z",
        "timeClose": "2021-08-09T23:59:59.999Z",
        "timeHigh": "2021-08-09T18:49:03.000Z",
        "timeLow": "2021-08-09T01:15:03.000Z",
        "quote": {
          "open": 43791.92742356,
          "high": 46456.83291829,
          "low": 42848.68794765,
          "close": 46365.40065035,
          "volume": 38734079049.1,
          "marketCap": 870805373889.23,
          "timestamp": "2021-08-09T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-10T00:00:00.000Z",
        "timeClose": "2021-08-10T23:59:59.999Z",
        "timeHigh": "2021-08-10T00:08:03.000Z",
        "timeLow": "2021-08-10T16:34:03.000Z",
        "quote": {
          "open": 46280.84767425,
          "high": 46637.98783478,
          "low": 44705.55657645,
          "close": 45585.03077231,
          "volume": 33546019517.4,
          "marketCap": 856195142352.03,
          "timestamp": "2021-08-10T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-11T00:00:00.000Z",
        "timeClose": "2021-08-11T23:59:59.999Z",
        "timeHigh": "2021-08-11T15:31:03.000Z",
        "timeLow": "2021-08-11T02:48:03.000Z",
        "quote": {
          "open": 45599.70402605,
          "high": 46735.63156351,
          "low": 45351.71114676,
          "close": 45593.63593071,
          "volume": 34319709072.92,
          "marketCap": 856398622621.77,
          "timestamp": "2021-08-11T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-12T00:00:00.000Z",
        "timeClose": "2021-08-12T23:59:59.999Z",
        "timeHigh": "2021-08-12T03:32:03.000Z",
        "timeLow": "2021-08-12T16:32:03.000Z",
        "quote": {
          "open": 45576.88033369,
          "high": 46228.91094271,
          "low": 43861.44704055,
          "close": 44428.28846681,
          "volume": 33723620826.37,
          "marketCap": 834546790666.29,
          "timestamp": "2021-08-12T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-13T00:00:00.000Z",
        "timeClose": "2021-08-13T23:59:59.999Z",
        "timeHigh": "2021-08-13T23:58:03.000Z",
        "timeLow": "2021-08-13T00:19:03.000Z",
        "quote": {
          "open": 44439.69278522,
          "high": 47831.97604291,
          "low": 44282.41741653,
          "close": 47793.32117908,
          "volume": 31744259538.78,
          "marketCap": 897802604441.08,
          "timestamp": "2021-08-13T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-14T00:00:00.000Z",
        "timeClose": "2021-08-14T23:59:59.999Z",
        "timeHigh": "2021-08-14T09:44:03.000Z",
        "timeLow": "2021-08-14T11:03:03.000Z",
        "quote": {
          "open": 47810.68928692,
          "high": 48098.68409454,
          "low": 46177.63332621,
          "close": 47096.94566198,
          "volume": 31211354441.65,
          "marketCap": 884769956069.2,
          "timestamp": "2021-08-14T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-15T00:00:00.000Z",
        "timeClose": "2021-08-15T23:59:59.999Z",
        "timeHigh": "2021-08-15T01:35:03.000Z",
        "timeLow": "2021-08-15T13:46:03.000Z",
        "quote": {
          "open": 47096.66856627,
          "high": 47357.10642699,
          "low": 45579.59012016,
          "close": 47047.00454195,
          "volume": 30988958445.96,
          "marketCap": 883882942187.64,
          "timestamp": "2021-08-15T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-16T00:00:00.000Z",
        "timeClose": "2021-08-16T23:59:59.999Z",
        "timeHigh": "2021-08-16T03:00:03.000Z",
        "timeLow": "2021-08-16T20:24:03.000Z",
        "quote": {
          "open": 47019.96132369,
          "high": 47998.09667927,
          "low": 45700.3218682,
          "close": 46004.4840786,
          "volume": 32776876609.7,
          "marketCap": 864345726182.62,
          "timestamp": "2021-08-16T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-17T00:00:00.000Z",
        "timeClose": "2021-08-17T23:59:59.999Z",
        "timeHigh": "2021-08-17T11:47:03.000Z",
        "timeLow": "2021-08-17T22:28:03.000Z",
        "quote": {
          "open": 45936.45633673,
          "high": 47139.57060006,
          "low": 44512.41753396,
          "close": 44695.35761921,
          "volume": 33451362599.74,
          "marketCap": 839796717682.57,
          "timestamp": "2021-08-17T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-18T00:00:00.000Z",
        "timeClose": "2021-08-18T23:59:59.999Z",
        "timeHigh": "2021-08-18T16:53:03.000Z",
        "timeLow": "2021-08-18T01:16:03.000Z",
        "quote": {
          "open": 44686.75080965,
          "high": 45952.06217021,
          "low": 44364.02745071,
          "close": 44801.18871714,
          "volume": 32194123075.34,
          "marketCap": 841823296232.89,
          "timestamp": "2021-08-18T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-19T00:00:00.000Z",
        "timeClose": "2021-08-19T23:59:59.999Z",
        "timeHigh": "2021-08-19T23:02:03.000Z",
        "timeLow": "2021-08-19T04:19:03.000Z",
        "quote": {
          "open": 44741.88334742,
          "high": 46970.76087419,
          "low": 43998.31551257,
          "close": 46717.5787452,
          "volume": 37204312298.94,
          "marketCap": 877875534875.42,
          "timestamp": "2021-08-19T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-20T00:00:00.000Z",
        "timeClose": "2021-08-20T23:59:59.999Z",
        "timeHigh": "2021-08-20T23:58:03.000Z",
        "timeLow": "2021-08-20T00:09:03.000Z",
        "quote": {
          "open": 46723.12114785,
          "high": 49342.15226511,
          "low": 46650.70851286,
          "close": 49339.17603688,
          "volume": 34706867451.71,
          "marketCap": 927189789031.53,
          "timestamp": "2021-08-20T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-21T00:00:00.000Z",
        "timeClose": "2021-08-21T23:59:59.999Z",
        "timeHigh": "2021-08-21T17:52:03.000Z",
        "timeLow": "2021-08-21T11:13:03.000Z",
        "quote": {
          "open": 49327.07373292,
          "high": 49717.0189234,
          "low": 48312.19763872,
          "close": 48905.49058555,
          "volume": 40585205312.32,
          "marketCap": 919092181742.55,
          "timestamp": "2021-08-21T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-22T00:00:00.000Z",
        "timeClose": "2021-08-22T23:59:59.999Z",
        "timeHigh": "2021-08-22T23:21:03.000Z",
        "timeLow": "2021-08-22T15:01:03.000Z",
        "quote": {
          "open": 48869.10424226,
          "high": 49471.61043116,
          "low": 48199.94100421,
          "close": 49321.65404941,
          "volume": 25370975377.73,
          "marketCap": 926961622395.32,
          "timestamp": "2021-08-22T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-23T00:00:00.000Z",
        "timeClose": "2021-08-23T23:59:59.999Z",
        "timeHigh": "2021-08-23T11:56:03.000Z",
        "timeLow": "2021-08-23T20:07:04.000Z",
        "quote": {
          "open": 49291.67737487,
          "high": 50482.07640834,
          "low": 49074.60540097,
          "close": 49546.14770729,
          "volume": 34305053718.87,
          "marketCap": 931244272409.32,
          "timestamp": "2021-08-23T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-24T00:00:00.000Z",
        "timeClose": "2021-08-24T23:59:59.999Z",
        "timeHigh": "2021-08-24T07:08:03.000Z",
        "timeLow": "2021-08-24T23:53:12.000Z",
        "quote": {
          "open": 49562.34672915,
          "high": 49878.77128666,
          "low": 47687.11799659,
          "close": 47706.11855498,
          "volume": 35361168833.64,
          "marketCap": 896704765696.58,
          "timestamp": "2021-08-24T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-25T00:00:00.000Z",
        "timeClose": "2021-08-25T23:59:59.999Z",
        "timeHigh": "2021-08-25T22:01:18.000Z",
        "timeLow": "2021-08-25T09:43:19.000Z",
        "quote": {
          "open": 47727.25669296,
          "high": 49202.87847317,
          "low": 47163.61431922,
          "close": 48960.78728025,
          "volume": 32646349930.89,
          "marketCap": 920337950861.22,
          "timestamp": "2021-08-25T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-26T00:00:00.000Z",
        "timeClose": "2021-08-26T23:59:59.999Z",
        "timeHigh": "2021-08-26T00:55:22.000Z",
        "timeLow": "2021-08-26T12:07:17.000Z",
        "quote": {
          "open": 49002.64180701,
          "high": 49347.58357137,
          "low": 46405.78243211,
          "close": 46942.21786802,
          "volume": 32666549568.27,
          "marketCap": 882436522912.52,
          "timestamp": "2021-08-26T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-27T00:00:00.000Z",
        "timeClose": "2021-08-27T23:59:59.999Z",
        "timeHigh": "2021-08-27T23:40:08.000Z",
        "timeLow": "2021-08-27T00:21:13.000Z",
        "quote": {
          "open": 46894.55507054,
          "high": 49112.78526466,
          "low": 46394.28309076,
          "close": 49058.66973026,
          "volume": 34511076994.88,
          "marketCap": 922265559163.93,
          "timestamp": "2021-08-27T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-28T00:00:00.000Z",
        "timeClose": "2021-08-28T23:59:59.999Z",
        "timeHigh": "2021-08-28T01:01:06.000Z",
        "timeLow": "2021-08-28T14:42:12.000Z",
        "quote": {
          "open": 49072.58522066,
          "high": 49283.50564795,
          "low": 48499.23890806,
          "close": 48902.40220635,
          "volume": 28568103400.7,
          "marketCap": 919372790254.05,
          "timestamp": "2021-08-28T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-29T00:00:00.000Z",
        "timeClose": "2021-08-29T23:59:59.999Z",
        "timeHigh": "2021-08-29T01:16:13.000Z",
        "timeLow": "2021-08-29T04:06:30.000Z",
        "quote": {
          "open": 48911.24836282,
          "high": 49644.11465849,
          "low": 47925.8555808,
          "close": 48829.8326,
          "volume": 25889650240.45,
          "marketCap": 918057300166.45,
          "timestamp": "2021-08-29T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-30T00:00:00.000Z",
        "timeClose": "2021-08-30T23:59:59.999Z",
        "timeHigh": "2021-08-30T00:13:11.000Z",
        "timeLow": "2021-08-30T23:49:11.000Z",
        "quote": {
          "open": 48834.85267752,
          "high": 48925.60651985,
          "low": 46950.27228064,
          "close": 47054.98479356,
          "volume": 31847007016.12,
          "marketCap": 884727824088.59,
          "timestamp": "2021-08-30T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-08-31T00:00:00.000Z",
        "timeClose": "2021-08-31T23:59:59.999Z",
        "timeHigh": "2021-08-31T14:03:10.000Z",
        "timeLow": "2021-08-31T00:46:17.000Z",
        "quote": {
          "open": 47024.34166315,
          "high": 48189.55018777,
          "low": 46750.09395271,
          "close": 47166.68794545,
          "volume": 34730363427.12,
          "marketCap": 886869903602.64,
          "timestamp": "2021-08-31T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-01T00:00:00.000Z",
        "timeClose": "2021-09-01T23:59:59.999Z",
        "timeHigh": "2021-09-01T17:50:05.000Z",
        "timeLow": "2021-09-01T01:22:57.000Z",
        "quote": {
          "open": 47099.77486941,
          "high": 49111.08878787,
          "low": 46562.43744881,
          "close": 48847.02907417,
          "volume": 39139399124.64,
          "marketCap": 918501510157.03,
          "timestamp": "2021-09-01T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-02T00:00:00.000Z",
        "timeClose": "2021-09-02T23:59:59.999Z",
        "timeHigh": "2021-09-02T14:13:03.000Z",
        "timeLow": "2021-09-02T00:06:50.000Z",
        "quote": {
          "open": 48807.8488618,
          "high": 50343.42070496,
          "low": 48652.31979053,
          "close": 49327.72318398,
          "volume": 39508070319.03,
          "marketCap": 927590865738.06,
          "timestamp": "2021-09-02T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-03T00:00:00.000Z",
        "timeClose": "2021-09-03T23:59:59.999Z",
        "timeHigh": "2021-09-03T14:35:03.000Z",
        "timeLow": "2021-09-03T01:32:03.000Z",
        "quote": {
          "open": 49288.24911201,
          "high": 50982.27157262,
          "low": 48386.0861629,
          "close": 50025.37460546,
          "volume": 43206179618.68,
          "marketCap": 940757184680.41,
          "timestamp": "2021-09-03T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-04T00:00:00.000Z",
        "timeClose": "2021-09-04T23:59:59.999Z",
        "timeHigh": "2021-09-04T10:05:03.000Z",
        "timeLow": "2021-09-04T17:27:03.000Z",
        "quote": {
          "open": 50009.32509557,
          "high": 50545.58101197,
          "low": 49548.78045079,
          "close": 49944.62690568,
          "volume": 37471327793.79,
          "marketCap": 939286123132.94,
          "timestamp": "2021-09-04T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-05T00:00:00.000Z",
        "timeClose": "2021-09-05T23:59:59.999Z",
        "timeHigh": "2021-09-05T22:58:03.000Z",
        "timeLow": "2021-09-05T06:23:03.000Z",
        "quote": {
          "open": 49937.85801546,
          "high": 51868.68163043,
          "low": 49538.59838076,
          "close": 51753.41192621,
          "volume": 30322676318.63,
          "marketCap": 973354882472.79,
          "timestamp": "2021-09-05T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-06T00:00:00.000Z",
        "timeClose": "2021-09-06T23:59:59.999Z",
        "timeHigh": "2021-09-06T23:34:06.000Z",
        "timeLow": "2021-09-06T12:04:12.000Z",
        "quote": {
          "open": 51769.00432067,
          "high": 52700.94145826,
          "low": 51053.67850996,
          "close": 52633.53620235,
          "volume": 38884105425.88,
          "marketCap": 989965076456.3,
          "timestamp": "2021-09-06T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-07T00:00:00.000Z",
        "timeClose": "2021-09-07T23:59:59.999Z",
        "timeHigh": "2021-09-07T03:22:30.000Z",
        "timeLow": "2021-09-07T15:10:03.000Z",
        "quote": {
          "open": 52660.47935083,
          "high": 52853.7637963,
          "low": 43285.20858869,
          "close": 46811.12952948,
          "volume": 65210059683.34,
          "marketCap": 880498621997.79,
          "timestamp": "2021-09-07T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-08T00:00:00.000Z",
        "timeClose": "2021-09-08T23:59:59.999Z",
        "timeHigh": "2021-09-08T02:21:03.000Z",
        "timeLow": "2021-09-08T08:24:03.000Z",
        "quote": {
          "open": 46827.76337359,
          "high": 47334.0556378,
          "low": 44561.39446278,
          "close": 46091.38930192,
          "volume": 49007762487.62,
          "marketCap": 867002908108.75,
          "timestamp": "2021-09-08T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-09T00:00:00.000Z",
        "timeClose": "2021-09-09T23:59:59.999Z",
        "timeHigh": "2021-09-09T16:55:03.000Z",
        "timeLow": "2021-09-09T03:05:03.000Z",
        "quote": {
          "open": 45774.74222293,
          "high": 47261.94853026,
          "low": 45669.73965231,
          "close": 46391.4229753,
          "volume": 38672657013.28,
          "marketCap": 872686454371.99,
          "timestamp": "2021-09-09T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-10T00:00:00.000Z",
        "timeClose": "2021-09-10T23:59:59.999Z",
        "timeHigh": "2021-09-10T01:43:03.000Z",
        "timeLow": "2021-09-10T23:01:02.000Z",
        "quote": {
          "open": 46396.66247161,
          "high": 47031.74238084,
          "low": 44344.48542484,
          "close": 44883.9101072,
          "volume": 39154666596.52,
          "marketCap": 844367023726.79,
          "timestamp": "2021-09-10T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-11T00:00:00.000Z",
        "timeClose": "2021-09-11T23:59:59.999Z",
        "timeHigh": "2021-09-11T16:42:02.000Z",
        "timeLow": "2021-09-11T00:05:02.000Z",
        "quote": {
          "open": 44869.84026079,
          "high": 45969.29281653,
          "low": 44818.26641318,
          "close": 45201.45898324,
          "volume": 34499835245.04,
          "marketCap": 850381828070.53,
          "timestamp": "2021-09-11T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-12T00:00:00.000Z",
        "timeClose": "2021-09-12T23:59:59.999Z",
        "timeHigh": "2021-09-12T23:15:02.000Z",
        "timeLow": "2021-09-12T01:25:02.000Z",
        "quote": {
          "open": 45206.62926911,
          "high": 46364.87885382,
          "low": 44790.46204888,
          "close": 46063.27035709,
          "volume": 27881980160.72,
          "marketCap": 866636671661.83,
          "timestamp": "2021-09-12T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-13T00:00:00.000Z",
        "timeClose": "2021-09-13T23:59:59.999Z",
        "timeHigh": "2021-09-13T13:46:02.000Z",
        "timeLow": "2021-09-13T14:20:02.000Z",
        "quote": {
          "open": 46057.21532739,
          "high": 46598.6789847073,
          "low": 43591.3207849088,
          "close": 44963.0726328295,
          "volume": 40969943252.55,
          "marketCap": 845980481365.13,
          "timestamp": "2021-09-13T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-14T00:00:00.000Z",
        "timeClose": "2021-09-14T23:59:59.999Z",
        "timeHigh": "2021-09-14T22:58:02.000Z",
        "timeLow": "2021-09-14T00:27:02.000Z",
        "quote": {
          "open": 44960.0493590296,
          "high": 47218.125354847,
          "low": 44752.3313492902,
          "close": 47092.4938332669,
          "volume": 38652152880.49,
          "marketCap": 886095283701.37,
          "timestamp": "2021-09-14T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-15T00:00:00.000Z",
        "timeClose": "2021-09-15T23:59:59.999Z",
        "timeHigh": "2021-09-15T23:19:02.000Z",
        "timeLow": "2021-09-15T06:24:02.000Z",
        "quote": {
          "open": 47097.9981234177,
          "high": 48450.4684657489,
          "low": 46773.3265425882,
          "close": 48176.3463927443,
          "volume": 30484496466.48,
          "marketCap": 906532479371.11,
          "timestamp": "2021-09-15T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-16T00:00:00.000Z",
        "timeClose": "2021-09-16T23:59:59.999Z",
        "timeHigh": "2021-09-16T07:13:02.000Z",
        "timeLow": "2021-09-16T20:54:02.000Z",
        "quote": {
          "open": 48158.9072046662,
          "high": 48486.8294106265,
          "low": 47079.5571229921,
          "close": 47783.3578046439,
          "volume": 31764293754,
          "marketCap": 899179151780.33,
          "timestamp": "2021-09-16T23:59:59.999Z"
        }
      },
      {
        "timeOpen": "2021-09-17T00:00:00.000Z",
        "timeClose": "2021-09-17T23:59:59.999Z",
        "timeHigh": "2021-09-17T05:02:02.000Z",
        "timeLow": "2021-09-17T18:17:02.000Z",
        "quote": {
          "open": 47771.0031076542,
          "high": 48160.9207481278,
          "low": 46832.524598509,
          "close": 47267.5200230691,
          "volume": 28727713710.9,
          "marketCap": 889514744351.26,
          "timestamp": "2021-09-17T23:59:59.999Z"
        }
      }
    ]
  }
};
  constructor(private location: Location,private actvRoute: ActivatedRoute,private service:CryptoServiceService) {
    Chart.register(...registerables);
   }

  ngOnInit() {
    this.actvRoute.params.subscribe((params) => {
      this.name =params['id'];
    });

    this.details = this.service.getCryptoData()[0];
    this.price = this.details.quote.USD.price ? "$"+" "+ this.details.quote.USD.price.toFixed(4) :'';
    this.circulating_supply =this.details.circulating_supply;
    this.fully_diluted_market_cap = this.details.quote.USD.fully_diluted_market_cap;
    this.volume = this.details.quote.USD.volume_24h;
    this.marketCap = this.details.quote.USD.market_cap;
    // draw chart for price 
    this.drawChart();
  }
  back(){
    this.location.back();
  }
  drawChart(){
    /* draw chart starts here */
   let quotes =  this.chartData.data.quotes;
    quotes.forEach((quote)=>{
      let price = quote.quote.high;
      this.lineChartData[0].data.push(price);
      /*process date object */
      this.processLables(quote.quote.timestamp);
    });
   
    
    var dataset = {
      labels: this.lineChartLabels,
      datasets: [
        {
          label: 'Price',
    data: this.lineChartData[0].data,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
        }
      ]
    };

    this.mylineChartREf.nativeElement.height = "200px";
    this.linechart = new Chart(this.mylineChartREf.nativeElement, {
      type: "line",
      data: dataset,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins:{
          title: {
            display: false,
          },
        },
       
        layout: {
          padding: {
            top: 5
          }
        },
       
        hover: {
          mode: 'index',
          intersect: false
        },
        elements: {
          point: {
            radius: 1,
            hoverRadius: 6,
          },
        },
      }
    });
 /* draw chart end here */

  }
  processLables(data){
    let d =new Date(data);
    let date =  d.getDate() +
      "/ " +
       d.getMonth() +
       "/ " +
       d.getFullYear();
       this.lineChartLabels.push(date);
  }

}