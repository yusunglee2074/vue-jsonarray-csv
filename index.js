<template>
  <div id="Excel" :class="{ divClass: divClass }">
    <button @click="JSONArrayConverToCSV(jsonArray, fileName, true)">{{ buttonName }}</button>
  </div>
</template>
<script>
  export default {
    props: [
      'jsonArray',
      'fileName',
      'keys',
      'firstRowForLabel',
      'buttonName',
      'divClass'
    ],
    name: 'Excel',
    methods: {
      JSONArrayConverToCSV(JSONArray, title, ShowLabel) {
        let label = JSON.parse(this.keys)
        // If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONArray != 'object' ? JSON.parse(JSONArray) : JSONArray;
        var CSV = '';
        //Set Report title in first row or line
        CSV += title + '\r\n\n';
        //This condition will generate the Label/Header
        if (ShowLabel) {
          var row = "";
          row = this.firstRowForLabel
          //append Label row with line break
          CSV += row + '\r\n';
        }
        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (let ii = 0; ii < label.length; ii++) {
            let temp = label[ii].split('.').reduce((a,v) => a[v], arrData[i])
            let text = typeof temp === 'string' 
              ? temp 
              : JSON.stringify(temp).replace(/\"/g, "\"\"")
            row += '"' + text + '",'
          }
          row.slice(0, row.length - 1);
          //add a line break after each row
          CSV += row + '\r\n';
        }
        if (CSV == '') {        
          alert("Invalid data");
          return;
        }   
        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += title.replace(/ /g,"_");   
        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=UTF-8,\uFEFF' + encodeURI(CSV);
        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension    

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");    
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
