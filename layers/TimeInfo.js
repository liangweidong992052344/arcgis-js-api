// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../TimeExtent","./TimeReference","./LayerTimeOptions"],function(e,i,t,n,s,r,T){var U=e(null,{declaredClass:"esri.layers.TimeInfo",constructor:function(e){null!==e&&(i.mixin(this,e),e.exportOptions&&(this.exportOptions=new T(e.exportOptions)),this.timeExtent=null,e.timeExtent&&2===e.timeExtent.length&&(this.timeExtent=new s(e.timeExtent)),this.timeReference=new r(e.timeReference))}});return i.mixin(U,{UNIT_CENTURIES:"esriTimeUnitsCenturies",UNIT_DAYS:"esriTimeUnitsDays",UNIT_DECADES:"esriTimeUnitsDecades",UNIT_HOURS:"esriTimeUnitsHours",UNIT_MILLISECONDS:"esriTimeUnitsMilliseconds",UNIT_MINUTES:"esriTimeUnitsMinutes",UNIT_MONTHS:"esriTimeUnitsMonths",UNIT_SECONDS:"esriTimeUnitsSeconds",UNIT_UNKNOWN:"esriTimeUnitsUnknown",UNIT_WEEKS:"esriTimeUnitsWeeks",UNIT_YEARS:"esriTimeUnitsYears"}),t("extend-esri")&&i.setObject("layers.TimeInfo",U,n),U});