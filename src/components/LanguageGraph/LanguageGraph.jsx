import React, { useEffect } from 'react'
import './LanguageGraph.css'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

const LanguageGraph = ({data}) => {
  //console.log(data)
  const result = data?.map((item)=>{
    return item.language
   })
   //console.log(result)
   const counts = {};
   
   result?.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
   //console.log(counts)
   let dataInfo = []
   for (const [key, value] of Object.entries(counts)) {
     const element = {label: key, value: value}
    dataInfo = [...dataInfo, element]
    //console.log(`${key}: ${value}`);
   }

   //console.log(dataInfo)
   const chartConfigs = {
    type: 'Pie2D',
    dataFormat: 'json',
    width:'100%',
    height: 500,
    dataSource: {
      "chart": {
        caption: "Languages",
        captionFontColor: "#102a42",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 16,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: "#FFFFFF",
        showBorder: 0,
        decimals: 0,
        pieRadius: "45%",
      },
      "data": dataInfo
  }, 
   };


  
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  return (
    <>
    <div className='language-chart'>
       <ReactFC {...chartConfigs} />;
    </div>
    </>
  )
}

export default LanguageGraph
