(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"9I/G":function(e,t,n){"use strict";n.r(t),n.d(t,"InvoiceSummaryModule",function(){return E});var l=n("ofXK"),a=n("tyNb");let r=(()=>{class e{}return e.bar1CAC={chart:{height:350,type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},colors:["#0e9e4a","#4680ff","#ff5252"],stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63]},{name:"Revenue",data:[76,85,101,98,87,105,91]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:e=>"$ "+e+" thousands"}}},e})();var m=n("fXoL"),d=n("/n7v"),o=n("q6ff");const S=[{path:"",component:(()=>{class e{constructor(){this.chartDB=r}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-summary"]],decls:117,vars:4,consts:[[1,"row"],[1,"col-xl-6"],["cardTitle","Sales and Expenses",3,"options"],["chartID","bar-chart-1-cac",3,"chartConfig"],["cardTitle","Sales, Receipt and Dues","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-lg","table-hover","m-0"],["scope","row"],[1,"col-xl-12"],["cardTitle","Recent Orders","blockClass","table-border-style invoice-summary",3,"options"],[1,"table","table-lg","table-styling"],[1,"label","label-md","label-danger"],[1,"label","label-md","label-success"],[1,"label","label-md","label-warning"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"app-card",2),m["\u0275\u0275element"](3,"app-apex-chart",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",1),m["\u0275\u0275elementStart"](5,"app-card",4),m["\u0275\u0275elementStart"](6,"div",5),m["\u0275\u0275elementStart"](7,"table",6),m["\u0275\u0275elementStart"](8,"thead"),m["\u0275\u0275elementStart"](9,"tr"),m["\u0275\u0275elementStart"](10,"th"),m["\u0275\u0275text"](11,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"th"),m["\u0275\u0275text"](13,"Sales"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"th"),m["\u0275\u0275text"](15,"Receipt"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"th"),m["\u0275\u0275text"](17,"Dues"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tbody"),m["\u0275\u0275elementStart"](19,"tr"),m["\u0275\u0275elementStart"](20,"th",7),m["\u0275\u0275text"](21,"Today"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"td"),m["\u0275\u0275text"](23,"$250.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"td"),m["\u0275\u0275text"](25,"Otto"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](26,"td"),m["\u0275\u0275text"](27,"@mdo"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](28,"tr"),m["\u0275\u0275elementStart"](29,"th",7),m["\u0275\u0275text"](30,"This Week"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](31,"td"),m["\u0275\u0275text"](32,"$380.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](33,"td"),m["\u0275\u0275text"](34,"Thornton"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](35,"td"),m["\u0275\u0275text"](36,"@fat"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"tr"),m["\u0275\u0275elementStart"](38,"th",7),m["\u0275\u0275text"](39,"This Month"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](40,"td"),m["\u0275\u0275text"](41,"$450.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"td"),m["\u0275\u0275text"](43,"the Bird"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](44,"td"),m["\u0275\u0275text"](45,"@twitter"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"tr"),m["\u0275\u0275elementStart"](47,"th",7),m["\u0275\u0275text"](48,"This Year"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](49,"td"),m["\u0275\u0275text"](50,"$600.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](51,"td"),m["\u0275\u0275text"](52,"the Bird"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](53,"td"),m["\u0275\u0275text"](54,"@facebook"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](55,"tr"),m["\u0275\u0275elementStart"](56,"th",7),m["\u0275\u0275text"](57,"Total"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](58,"td"),m["\u0275\u0275text"](59,"$600.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](60,"td"),m["\u0275\u0275text"](61,"the Bird"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](62,"td"),m["\u0275\u0275text"](63,"@google"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](64,"div",8),m["\u0275\u0275elementStart"](65,"app-card",9),m["\u0275\u0275elementStart"](66,"div",5),m["\u0275\u0275elementStart"](67,"table",10),m["\u0275\u0275elementStart"](68,"thead"),m["\u0275\u0275elementStart"](69,"tr"),m["\u0275\u0275elementStart"](70,"th"),m["\u0275\u0275text"](71,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](72,"th"),m["\u0275\u0275text"](73,"Order No."),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](74,"th"),m["\u0275\u0275text"](75,"Product Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](76,"th"),m["\u0275\u0275text"](77,"Quantity"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](78,"th"),m["\u0275\u0275text"](79,"Price"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](80,"tbody"),m["\u0275\u0275elementStart"](81,"tr"),m["\u0275\u0275elementStart"](82,"th",7),m["\u0275\u0275text"](83,"1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](84,"td"),m["\u0275\u0275text"](85,"54822"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](86,"td"),m["\u0275\u0275text"](87,"Product 1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](88,"td"),m["\u0275\u0275text"](89,"2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](90,"td"),m["\u0275\u0275elementStart"](91,"label",11),m["\u0275\u0275text"](92,"$99.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](93,"tr"),m["\u0275\u0275elementStart"](94,"th",7),m["\u0275\u0275text"](95,"2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](96,"td"),m["\u0275\u0275text"](97,"54823"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](98,"td"),m["\u0275\u0275text"](99,"Product 2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](100,"td"),m["\u0275\u0275text"](101,"1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](102,"td"),m["\u0275\u0275elementStart"](103,"label",12),m["\u0275\u0275text"](104,"$29.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](105,"tr"),m["\u0275\u0275elementStart"](106,"th",7),m["\u0275\u0275text"](107,"3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](108,"td"),m["\u0275\u0275text"](109,"54824"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](110,"td"),m["\u0275\u0275text"](111,"Product 3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](112,"td"),m["\u0275\u0275text"](113,"3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](114,"td"),m["\u0275\u0275elementStart"](115,"label",13),m["\u0275\u0275text"](116,"$109.00"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("options",!1),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("chartConfig",t.chartDB.bar1CAC),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("options",!1),m["\u0275\u0275advance"](60),m["\u0275\u0275property"]("options",!1))},directives:[d.a,o.a],styles:[""]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.h.forChild(S)],a.h]}),e})();var i=n("ebz3");let E=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.c,s,i.a]]}),e})()}}]);