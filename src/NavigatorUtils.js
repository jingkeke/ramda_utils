/**
 * Created by jingzy on 2017/8/26.
 *
 * 使用
 const exportExcel = (batchId) => {
   let tableTemplate = '<thead><tr><th style="border:1px solid black">扣车单位</th> <th style="border:1px solid black">强制措施凭证</th><th style="border:1px solid black">车辆号牌</th><th style="border:1px solid black">当事人姓名</th> <th style="border:1px solid black">车辆类型</th><th style="border:1px solid black">违法地点</th><th style="border:1px solid black">违法时间</th> <th style="border:1px solid black">通知状态</th></tr></thead><tbody>';

   const datasoureTmp = dataSource.filter(item => item.BATCHID == batchId);

   const filelist = datasoureTmp.map((k, index) => {
     return `<tr><td style="border:1px solid black">${cascaderFormatReturnStr(k.DETAIN_UNIT, departmentOptions)}</td><td style="border:1px solid black"><span style="width: 20em;">&nbsp;${k.COERCIVEMEASURE_CODE}</span></td> <td style="border:1px solid black">${k.CARNUMBER}</td> <td style="border:1px solid black">${k.NAME}</td><td style="border:1px solid black">${cascaderFormatReturnStr(k.VEHICLE_TYPE, vehicleTypeByWeight)}</td> <td style="border:1px solid black">${k.DETAIN_AREA}</td><td style="border:1px solid black">${k.DETAIN_DATE}</td><td style="border:1px solid black">${notificationStatusFormat(k.NOTIFICATION_STATUS)}</td><td></tr>  `;

   })
   tableTemplate += filelist.join('');
   tableTemplate += '</tbody>';

   const table = document.createElement('table');
   table.innerHTML = tableTemplate;
   const len = document.querySelectorAll('.exportExcelLink').length;
   document.querySelectorAll('.exportExcelLink').forEach(function (item) {
     item.download = "车辆违法信息.xls"

     item.href = tableToExcel(table);
   })

 };
 */


const tableToExcel = (function () {
  let uri = 'data:application/vnd.ms-excel;base64,';
    let template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'
      + '<head><style>tr td{ border:1pt solid darkgray;} tr th{ border:1pt solid darkgray;} </style> <meta http-equiv="Content-type" content="text/html;charset=UTF-8" /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>'
      + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
    let base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    };
    let format = function (s, c) {
      return s.replace(/{(\w+)}/g, (m, p) => {
        return c[p];
      });
    };

  return function (table, name) {
    const ctx = {
      worksheet: name || 'Worksheet',
      table: table.innerHTML,
    };
    return uri + base64(format(template, ctx));
  };
}());

export { tableToExcel };
