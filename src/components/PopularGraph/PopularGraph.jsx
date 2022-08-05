import React from 'react'
import './PopularGraph.css'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';



  const PopularGraph = ({data}) => {

   // console.log(data)
    const result = data?.map((item)=>{
      //console.log(item)
      return {
        count: item.stargazers_count, name: item.name
      }
     })
     result?.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
     const mostStarred = result?.slice(0, 6);
     //console.log(mostStarred,'most starred')

  let dataInfo = []
       
   for (const [key, value] of Object.entries(mostStarred || {})) {
     //console.log(key)
     const element = {label: value.name, value: value.count}
    dataInfo = [...dataInfo, element]
    //console.log(`${key}: ${value}`);
   }
   //console.log(dataInfo)
    const chartConfigs = {
      type: 'column2d',
      dataFormat: 'json',
      width: `100%`,
      height: 500,
      dataSource:  {
        "chart": {
          caption: 'Most Popular Repo',
          yAxisName: 'Stars',
          yAxisNameFontSize: 16,
          xAxisName: 'Repos',
          xAxisNameFontSize: 14,
          showCanvasBorder: 0,
          showAlternateHGridColor: 0,
          usePlotGradientColor: 0,
          valueFontSize: 16,
          placeValuesInside: 0,
          divLineColor: "#102a42",
          divLineAlpha: 15,
          captionFontColor: "#102a42",
          captionFontBold: 0,
          captionFontSize: 20,
          captionFont: "Roboto",
          baseFont: "Open Sans",
          baseFontSize: 12,
          baseFontColor: "#617d98",
          smartLineColor: "#617d98",
          showShadow: 0,
          showPlotBorder: 0,
          paletteColors:
            "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
          bgColor: "#FFFFFF",
          showBorder: 0,
        },
        
        "data": dataInfo
    },  
    };
    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  return (
    <>
    <div className='popular-chart'>
       <ReactFC {...chartConfigs} />;
    </div>
    </>
  )
}

export default PopularGraph
