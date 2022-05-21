import React, { useEffect, useState } from 'react'
import './Stats.css'
import { getLanguages } from '../../Services/services';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

const Stats = ({data}) => {

   const [langList, setLangList] = useState()
   
    
   
   let dataInfo = []
   useEffect(()=>{
    const result = data?.map((item)=>{
      return {
        Languages: item.languages_url, name: item.name, stars_count: item.stargazers_count}
     })
    result?.sort((a, b) => parseFloat(b.stars_count) - parseFloat(a.stars_count));
    const mostStarred = result?.slice(0, 5);
      //console.log(mostStarred,'most starred')
     if(mostStarred){
       let lang_List = []
       for (let i = 0; i < mostStarred?.length; i++) {
          const lang_url = mostStarred[i].Languages
          const lang_resp = getLanguages(lang_url)
        
          lang_resp.then(function(resp){
           lang_List.push(resp?.data)
            //console.log(resp?.data,"dattttttaaa")
        }) 
      }
      setLangList(lang_List)
      
    }
    const mergeArray = data => {
      const result = {}; //(1)
    
      data.forEach(item => { //(2)
        for (let [key, value] of Object.entries(item)) { //(3)
          if (result[key]) { //(4)
            result[key] += value; //(5)
          } else { //(6)
            result[key] = value;
          }
        }
      });
      return result; //(7)
    };
    let mergedObject ;
    if(langList){
     mergedObject = mergeArray(langList);
     console.log(mergedObject, "objecc")
    }
    
    
    if(mergedObject){
      for (const [key, value] of Object.entries(mergedObject)) {
        const element = {label: key, value: value}
        dataInfo = [...dataInfo, element]
       //console.log(`${key}: ${value}`);
       }
    }
      console.log(dataInfo)
   },[])
    
   const chartConfigs = {
    type: 'doughnut2d',
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
    <div className="container">
       <ReactFC {...chartConfigs} />;
    </div>
  );
};

export default React.memo(Stats);
   


