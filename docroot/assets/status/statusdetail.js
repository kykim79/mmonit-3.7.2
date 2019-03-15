(function(b){var a=new function(){b.ajaxSettings.traditional=true;var e=this;e.id=ko.observable(b(document).getUrlParam("id"));e.width=ko.observable(b("#main").outerWidth());e.isPhone=ko.computed(function(){return e.width()<768});e.widthColumnName=ko.computed(function(){return e.width()-(e.isPhone()?193:403)});e.widthPopover=ko.computed(function(){return e.width()-65});e.hostname=ko.observable("");e.hoststatus=ko.observable("");e.platform=ko.observable("");e.cpu=ko.observable("");e.memory=ko.observable("");e.swap=ko.observable("");e.isAdmin=ko.observable(false);e.showAction=ko.observable(false);e.system={cpu:{user:0,system:0,wait:0},memory:0,swap:0};e.selectedRows=[];e.timeout=null;function d(j){var m=Math.floor(j/(60*60*24));var f=j%(60*60*24);var k=Math.floor(f/(60*60));var i=f%(60*60);var g=Math.floor(i/60);var n=i%60;var l=Math.ceil(n);var h={d:m,h:k,m:g,s:l};return h}e.pushDetails=function(i,f,h,g){if(h!=null){i.push("<tr><td>"+b("<div/>").text(f).html()+"</td><td>"+(g?"<pre>":"")+b("<div/>").text(h).html()+(g?"</pre>":"")+"</td></tr>")}};e.showDetails=function(t,h){var s=null;for(var q=0;q<e.host.services.length;q++){if(e.host.services[q].name==h){s=e.host.services[q]}}if(s){var r=["<table>"];var p={port:[],unixsocket:[],certificate:[],timestamp:{}};for(var q=0;q<s.statistics.length;q++){var l=s.statistics[q];switch(l.type){case 0:p.loadaverage=l.value;break;case 1:p.cpuuser=l.value;break;case 2:p.cpusystem=l.value;break;case 3:p.cpuwait=l.value;break;case 4:p.memorypercent=l.value;break;case 5:p.memorykilobyte=l.value;break;case 6:p.swappercent=l.value;break;case 7:p.swapkilobyte=l.value;break;case 8:p.proccpuusage=l.value;break;case 9:p.proccpuusagetotal=l.value;break;case 10:p.procmemorypercent=l.value;break;case 11:p.procmemorypercenttotal=l.value;break;case 12:p.procmemorykilobyte=l.value;break;case 13:p.procmemorykilobytetotal=l.value;break;case 14:p.children=l.value;break;case 15:p.port.push({descriptor:l.descriptor,value:l.value});break;case 16:p.unixsocket.push({descriptor:l.descriptor,value:l.value});break;case 17:p.ping=l.value;break;case 18:p.spacepercent=l.value;break;case 19:p.spacemegabyteused=l.value;break;case 20:p.spacemegabytetotal=l.value;break;case 21:p.inodepercent=l.value;break;case 22:p.inodecountused=l.value;break;case 23:p.inodecounttotal=l.value;break;case 24:p.programstatus=l.value;break;case 25:p.flags=l.value;break;case 26:p.mode=l.value;break;case 27:p.uid=l.value;break;case 28:p.gid=l.value;break;case 29:p.size=l.value;break;case 30:p.pid=l.value;break;case 31:ppid=l.value;break;case 32:p.checksum={type:l.descriptor,value:l.value};break;case 33:p.timestamp=new Date(l.value*1000);break;case 34:p.processuptime=d(l.value);break;case 35:p.programoutput=l.value;break;case 36:p.netstate=l.value;break;case 37:p.netspeed=l.value;break;case 38:p.netduplex=l.value;break;case 39:p.netbytesin=l.value;break;case 40:p.netbytesintotal=l.value;break;case 41:p.netpacketsin=l.value;break;case 42:p.netpacketsintotal=l.value;break;case 43:p.neterrorsin=l.value;break;case 44:p.neterrorsintotal=l.value;break;case 45:p.netbytesout=l.value;break;case 46:p.netbytesouttotal=l.value;break;case 47:p.netpacketsout=l.value;break;case 48:p.netpacketsouttotal=l.value;break;case 49:p.neterrorsout=l.value;break;case 50:p.neterrorsouttotal=l.value;break;case 51:break;case 52:p.threads=l.value;break;case 53:p.filesystemtype=l.value;break;case 54:p.filesystemreadbytes=l.value;break;case 55:p.filesystemreadbytestotal=l.value;break;case 56:p.filesystemreadoperations=l.value;break;case 57:p.filesystemreadoperationstotal=l.value;break;case 58:p.filesystemwritebytes=l.value;break;case 59:p.filesystemwritebytestotal=l.value;break;case 60:p.filesystemwriteoperations=l.value;break;case 61:p.filesystemwriteoperationstotal=l.value;break;case 62:p.filesystemservicetimeread=l.value;break;case 63:p.filesystemservicetimewrite=l.value;break;case 64:p.filesystemservicetimewait=l.value;break;case 65:p.filesystemservicetimerun=l.value;break;case 66:p.filesystemservicetime=l.value;break;case 67:p.processreadbytes=l.value;break;case 68:p.processreadbytestotal=l.value;break;case 69:p.processreadoperations=l.value;break;case 70:p.processreadoperationstotal=l.value;break;case 71:p.processwritebytes=l.value;break;case 72:p.processwritebytestotal=l.value;break;case 73:p.processwriteoperations=l.value;break;case 74:p.processwriteoperationstotal=l.value;break;case 75:p.certificate.push({descriptor:l.descriptor,value:l.value});break;case 76:p.timestamp.access=new Date(l.value*1000);break;case 77:p.timestamp.change=new Date(l.value*1000);break;case 78:p.timestamp.modify=new Date(l.value*1000);break;default:e.pushDetails(r,e.map.id.statisticstype[l.type],(l.descriptor?l.descriptor+": ":"")+l.value);break}}if(p.filesystemtype!=null){e.pushDetails(r,e.isPhone()?"Filesystem":"Filesystem type",p.filesystemtype)}if(p.flags!=null){e.pushDetails(r,e.isPhone()?"Flags":"Filesystem flags",p.flags)}if(p.loadaverage!=null){e.pushDetails(r,e.isPhone()?"Load":"Load average 1m",p.loadaverage)}if(p.cpuuser!=null){e.pushDetails(r,e.isPhone()?"CPU":"CPU usage",p.cpuuser+"%us, "+p.cpusystem+"%sy"+((p.cpuwait!=null)?(", "+p.cpuwait+"%wa"):""))}if(p.memorypercent!=null){e.pushDetails(r,e.isPhone()?"Memory":"Memory usage",MMONIT.math.round(p.memorypercent,2)+"% ["+MMONIT.ui.hfbyte(p.memorykilobyte*1024,2,1024)+"]")}if(p.proccpuusage!=null){e.pushDetails(r,e.isPhone()?"CPU":"CPU usage",MMONIT.math.round(p.proccpuusage,2)+"% ("+p.proccpuusagetotal+"% total)")}if(p.procmemorypercent!=null){e.pushDetails(r,e.isPhone()?"Memory":"Memory usage",MMONIT.math.round(p.procmemorypercent,2)+"% ["+MMONIT.ui.hfbyte(p.procmemorykilobyte*1024,2,1024)+"] (total "+p.procmemorypercenttotal+"% ["+MMONIT.ui.hfbyte(p.procmemorykilobytetotal*1024,2,1024)+"])")}if(p.swappercent!=null){e.pushDetails(r,e.isPhone()?"Swap":"Swap usage",MMONIT.math.round(p.swappercent,2)+"% ["+MMONIT.ui.hfbyte(p.swapkilobyte*1024,2,1024)+"]")}if(p.spacepercent!=null){e.pushDetails(r,e.isPhone()?"Space":"Space usage",MMONIT.math.round(p.spacepercent,2)+"% ["+MMONIT.ui.hfbyte(p.spacemegabyteused*1048576,2,1024)+"]")}if(p.inodepercent!=null){e.pushDetails(r,e.isPhone()?"Inode":"Inode usage",MMONIT.math.round(p.inodepercent,2)+"% ["+p.inodecountused+" objects]")}if(p.filesystemreadbytes!=null&&p.filesystemreadbytestotal!=null&&p.filesystemreadoperations!=null&&p.filesystemreadoperationstotal!=null){e.pushDetails(r,"Read",MMONIT.ui.hfbyte(p.filesystemreadbytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.filesystemreadbytestotal,1,1024)+" total], "+p.filesystemreadoperations+" reads/s ["+p.filesystemreadoperationstotal+" reads total]")}else{if(p.filesystemreadoperations!=null&&p.filesystemreadoperationstotal!=null){e.pushDetails(r,"Read",p.filesystemreadoperations+" reads/s ["+p.filesystemreadoperationstotal+" reads total]")}else{if(p.filesystemreadbytes!=null&&p.filesystemreadbytestotal!=null){e.pushDetails(r,"Read",MMONIT.ui.hfbyte(p.filesystemreadbytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.filesystemreadbytestotal,1,1024)+" total]")}}}if(p.filesystemwritebytes!=null&&p.filesystemwritebytestotal!=null&&p.filesystemwriteoperations!=null&&p.filesystemwriteoperationstotal!=null){e.pushDetails(r,"Write",MMONIT.ui.hfbyte(p.filesystemwritebytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.filesystemwritebytestotal,1,1024)+" total], "+p.filesystemwriteoperations+" writes/s ["+p.filesystemwriteoperationstotal+" writes total]")}else{if(p.filesystemwriteoperations!=null&&p.filesystemwriteoperationstotal!=null){e.pushDetails(r,"Write",p.filesystemwriteoperations+" writes/s ["+p.filesystemwriteoperationstotal+" writes total]")}else{if(p.filesystemwritebytes!=null&&p.filesystemwritebytestotal!=null){e.pushDetails(r,"Write",MMONIT.ui.hfbyte(p.filesystemwritebytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.filesystemwritebytestotal,1,1024)+" total]")}}}var f=p.filesystemreadoperations+p.filesystemwriteoperations;if(p.filesystemservicetimeread!=null&&p.filesystemservicetimewrite!=null){var v=f>0?p.filesystemservicetimeread/f:0;var o=f>0?p.filesystemservicetimewrite/f:0;e.pushDetails(r,"Service time",MMONIT.math.round(v+o,3)+"ms/operation (of which read "+MMONIT.math.round(v,3)+"ms, write "+MMONIT.math.round(o,3)+"ms)")}else{if(p.filesystemservicetimewait!=null&&p.filesystemservicetimerun!=null){var g=f>0?p.filesystemservicetimewait/f:0;var u=f>0?p.filesystemservicetimerun/f:0;e.pushDetails(r,"Service time",MMONIT.math.round(g+u,3)+"ms/operation (of which wait "+MMONIT.math.round(g,3)+"ms, run "+MMONIT.math.round(u,3)+"ms)")}else{if(p.filesystemservicetimewait!=null){var g=f>0?p.filesystemservicetimewait/f:0;e.pushDetails(r,"Service time",MMONIT.math.round(g,3)+"ms")}else{if(p.filesystemservicetimerun!=null){var u=f>0?p.filesystemservicetimerun/f:0;e.pushDetails(r,"Service time",MMONIT.math.round(u,3)+"ms")}}}}if(p.processreadbytes!=null&&p.processreadbytestotal!=null&&p.processreadoperations!=null&&p.processreadoperationstotal!=null){e.pushDetails(r,"Disk read",MMONIT.ui.hfbyte(p.processreadbytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.processreadbytestotal,1,1024)+" total], "+p.processreadoperations+" reads/s ["+p.processreadoperationstotal+" reads total]")}else{if(p.processreadoperations!=null&&p.processreadoperationstotal!=null){e.pushDetails(r,"Disk read",p.processreadoperations+" reads/s ["+p.processreadoperationstotal+" reads total]")}else{if(p.processreadbytes!=null&&p.processreadbytestotal!=null){e.pushDetails(r,"Disk read",MMONIT.ui.hfbyte(p.processreadbytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.processreadbytestotal,1,1024)+" total]")}}}if(p.processwritebytes!=null&&p.processwritebytestotal!=null&&p.processwriteoperations!=null&&p.processwriteoperationstotal!=null){e.pushDetails(r,"Disk write",MMONIT.ui.hfbyte(p.processwritebytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.processwritebytestotal,1,1024)+" total], "+p.processwriteoperations+" writes/s ["+p.processwriteoperationstotal+" writes total]")}else{if(p.processwriteoperations!=null&&p.processwriteoperationstotal!=null){e.pushDetails(r,"Disk write",p.processwriteoperations+" writes/s ["+p.processwriteoperationstotal+" writes total]")}else{if(p.processwritebytes!=null&&p.processwritebytestotal!=null){e.pushDetails(r,"Disk write",MMONIT.ui.hfbyte(p.processwritebytes,1,1024)+"/s ["+MMONIT.ui.hfbyte(p.processwritebytestotal,1,1024)+" total]")}}}if(p.pid!=null){e.pushDetails(r,"PID",p.pid)}if(p.ppid!=null){e.pushDetails(r,e.isPhone()?"PPID":"Parent PID",p.ppid)}if(p.threads!=null){e.pushDetails(r,"Threads",p.threads)}if(p.children!=null){e.pushDetails(r,"Children",p.children)}if(p.size!=null){e.pushDetails(r,"Size",MMONIT.ui.hfbyte(p.size,1,1024))}if(p.uid!=null){e.pushDetails(r,"UID",p.uid)}if(p.gid!=null){e.pushDetails(r,"GID",p.gid)}if(p.mode!=null){e.pushDetails(r,"Mode",p.mode)}if(p.processuptime!=null){e.pushDetails(r,"Process uptime",p.processuptime.d+"d, "+p.processuptime.h+"h, "+p.processuptime.m+"m, "+p.processuptime.s+"s")}if(p.netstate!=null){e.pushDetails(r,"Link",(p.netstate==1?"up":"down")+(p.netspeed>0?" [speed "+MMONIT.ui.hfbyte(p.netspeed,0,1000)+"/s, "+(p.netduplex==1?"full":"half")+"-duplex]":""))}if(p.netstate==1&&p.netbytesout!=null&&p.netpacketsout!=null&&p.neterrorsouttotal!=null){var m=MMONIT.ui.hfbyte(p.netbytesin,1,1024)+"/s ["+p.netpacketsin+" packets/s]";if(p.netspeed>0&&p.netbytesin>0){m+=" ["+MMONIT.math.round(100*p.netbytesin*8/p.netspeed,1)+"% link saturation]"}e.pushDetails(r,"Download",m);e.pushDetails(r,"Download total",MMONIT.ui.hfbyte(p.netbytesintotal,1,1024)+" ["+p.netpacketsintotal+" packets] ["+p.neterrorsintotal+" errors] since boot")}if(p.netstate==1&&p.netbytesout!=null&&p.netpacketsout!=null&&p.neterrorsouttotal!=null){var m=MMONIT.ui.hfbyte(p.netbytesout,1,1024)+"/s ["+p.netpacketsout+" packets/s]";if(p.netspeed>0&&p.netbytesout>0){m+=" ["+MMONIT.math.round(100*p.netbytesout*8/p.netspeed,1)+"% link saturation]"}e.pushDetails(r,"Upload",m);e.pushDetails(r,"Upload total",MMONIT.ui.hfbyte(p.netbytesouttotal,1,1024)+" ["+p.netpacketsouttotal+" packets] ["+p.neterrorsouttotal+" errors] since boot")}if(p.timestamp.access!=null){e.pushDetails(r,"Access timestamp",p.timestamp.access.toLocaleString())}if(p.timestamp.change!=null){e.pushDetails(r,"Change timestamp",p.timestamp.change.toLocaleString())}if(p.timestamp.modify!=null){e.pushDetails(r,"Modify timestamp",p.timestamp.modify.toLocaleString())}if(p.checksum!=null){e.pushDetails(r,p.checksum.type+" Checksum",p.checksum.value)}if(p.programstatus!=null){e.pushDetails(r,e.isPhone()?"Prog. status":"Program status",p.programstatus)}if(p.programoutput!=null){e.pushDetails(r,e.isPhone()?"Prog. output":"Program output",p.programoutput.length?p.programoutput:"No output",true)}if(p.ping!=null){e.pushDetails(r,e.isPhone()?"Ping":"Ping response time",parseFloat(p.ping)<0?"N/A":(MMONIT.ui.hftime(p.ping*1000,3)))}for(var q=0;q<p.port.length;q++){var k="";for(var n=0;n<p.certificate.length;n++){if(p.port[q].descriptor===p.certificate[n].descriptor){k=" (certificate valid for "+p.certificate[n].value+" days)";break}}e.pushDetails(r,e.isPhone()?"Port":"Port response time",p.port[q].descriptor+": "+((parseFloat(p.port[q].value)<0?"N/A":(MMONIT.ui.hftime(p.port[q].value*1000,1)+k))))}for(var q=0;q<p.unixsocket.length;q++){e.pushDetails(r,e.isPhone()?"Unix sock.":"Unix socket response time",p.unixsocket[q].descriptor+": "+((parseFloat(p.unixsocket[q].value)<0?"N/A":(MMONIT.ui.hftime(p.unixsocket[q].value*1000,1)))))}if(s.every!=null){e.pushDetails(r,"Monitor",s.every)}if(h=="monit"){e.pushDetails(r,e.isPhone()?"ID":"Monit ID",e.host.monit.id);e.pushDetails(r,e.isPhone()?"Version":"Monit version",e.host.monit.version);e.pushDetails(r,e.isPhone()?"Poll":"Monit poll time",e.host.monit.poll);e.pushDetails(r,e.isPhone()?"Uptime":"Monit uptime",e.host.monit.uptime)}r.push("</table>");return r.join("")}return""};e.ajaxInProgress=ko.observable(false);e.doAction=function(k,m){if(e.selectedRows.length>0&&e.host.led<3&&e.host.heartbeat!==0){var j=e.myDataTable.getSelectedRows();var g={id:e.host.id,action:m.currentTarget.value,service:[]};for(var h=0;h<j.length;h++){var f=e.myDataTable.getRecord(j[h]);if(f){var l=f.getData("name");var n=f.getData("typeid");if(l=="monit"||n==5){MMONIT.error.abort("No actions are allowed for internal System service")}g.service.push(l)}}e.selectedRows=[];e.ajaxInProgress(true);b(".action .btn").removeClass("disabled").addClass("disabled");b.ajax({url:"../../admin/hosts/action",data:b.param(g),type:"POST",dataType:"json",timeout:30000,success:function(o,p,i){e.ajaxInProgress(false);b("#rowselectmode").text("Select All");b("#serviceTable").trigger("reload")},error:function(i,p,o){e.ajaxInProgress(false);MMONIT.error.json(i,p,o)}})}};e.shouldShowPopover=ko.observable(false);e.showPopover=function(f){if(e.shouldShowPopover()&&e.host.led<3&&e.host.heartbeat!==0){b(".popover").remove();b(f).popover({container:"body",animation:false,html:true,template:'<div class="popover" role="tooltip" style="max-width: '+e.widthPopover()+'px;"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"><div class="data-content"></div></div></div>',title:b("<div/>").text(e.myDataTable.getRecord(f).getData("name")).html(),content:e.showDetails(f,e.myDataTable.getRecord(f).getData("name"))}).popover("show")}};e.hidePopover=function(){e.shouldShowPopover(false);b(".popover").remove()};e.goToAdminHost=function(){window.location="../../admin/hosts/edit?id="+e.host.id};e.goToAnalytics=function(){window.location="../../reports/analytics/?start=1&range=1&host="+e.host.id};var c=new YAHOO.util.YUILoader({base:"../../lib/f/yui/2/",loadOptional:false,require:["datasource","datatable","json"],onSuccess:function(){YAHOO.util.Event.onDOMReady(function(){b.ajax({url:"../../map",type:"GET",dataType:"json",traditional:true,timeout:5000,error:MMONIT.error.json,success:function(l){e.map=l.map}});e.myDataSource=new YAHOO.util.XHRDataSource("../../status/hosts/get?id="+e.id());e.myDataSource.connXhrMode="cancelStaleRequests";e.myDataSource.connTimeout=30000;e.myDataSource.responseType=YAHOO.util.XHRDataSource.TYPE_JSON;e.myDataSource.responseSchema={resultsList:"records.host.services",fields:[{key:"id",parser:"number"},{key:"led",parser:"number"},{key:"status",parser:"string"},{key:"type",parser:"string"},{key:"typeid",parser:"number"},{key:"name",parser:"string"},{key:"nameid",parser:"number"},{key:"events",parser:"number"},{key:"every",parser:"string"},{key:"monitormode",parser:"number"},{key:"monitorstate",parser:"number"},{key:"onreboot",parser:"number"},{key:"statistics"}],metaFields:{host:"records.host",is_user_admin:"records.is_user_admin"}};e.myConfigs={dynamicData:false,sortedBy:{key:"type",dir:"yui-dt-desc"},paginated:false};function h(m,l,n,o){YAHOO.util.Dom.addClass(m,"Led");m.innerHTML='<img src="../../img/led'+((e.host.led<3&&e.host.heartbeat!==0)?l.getData("led"):"3")+'.png" alt="led" class="table-led">'}function j(m,l,n,o){YAHOO.util.Dom.addClass(m,"Status");b(m).text((e.host.led<3&&e.host.heartbeat!==0)?l.getData("status"):"Offline")}function g(m,l,n,o){YAHOO.util.Dom.addClass(m,"Events");if(parseInt(l.getData("events"),10)>0){b(m).html('<a href="../../reports/events/?reset=true&host='+encodeURIComponent(e.host.name)+"&servicenameid="+l.getData("nameid")+'">'+l.getData("events")+"</a>")}else{b(m).text(l.getData("events"))}}var k=[{key:"led",label:"*",sortable:true,formatter:h},{key:"type",label:"Service Type",sortable:true,formatter:"text"},{key:"name",label:"Service Name",sortable:true,formatter:"text"},{key:"status",label:"Status",sortable:false,formatter:j},{key:"events",label:"Events",sortable:true,formatter:g}];e.myDataTable=new YAHOO.widget.DataTable("serviceTable",k,e.myDataSource,e.myConfigs);if(!(ISPHONE||ISTABLET)){e.myDataTable.subscribe("rowMouseoverEvent",function(l){var m=e.myDataTable.getRecord(l.target);if(m){e.highlightedRowId=m.getData().id;e.myDataTable.highlightRow(m)}});e.myDataTable.subscribe("rowMouseoutEvent",function(l){var m=e.myDataTable.getRecord(l.target);if(m){e.highlightedRowId=null;e.myDataTable.unhighlightRow(m)}});e.myDataTable.subscribe("cellMouseoverEvent",function(m){var l=e.myDataTable.getColumn(m.target);if(l.key=="led"){e.shouldShowPopover(true);e.showPopover(m.target)}});e.myDataTable.subscribe("cellMouseoutEvent",function(m){var l=e.myDataTable.getColumn(m.target);if(l.key=="led"){e.hidePopover()}})}e.myDataTable.subscribe("cellClickEvent",function(o){var l=e.myDataTable.getColumn(o.target);var m=e.myDataTable.getRecord(o.target);if(ISTABLET&&l.key=="events"&&m.getData("events")>0){window.location="../../reports/events/?reset=true&host="+e.host.name+"&servicenameid="+m.getData("nameid")}else{if(ISTABLET&&l.key=="led"){e.shouldShowPopover(true);e.showPopover(o.target)}else{if(m){var p=m.getData().id;if(e.myDataTable.isSelected(m)){e.myDataTable.unselectRow(m);for(var n=0;n<e.selectedRows.length;n++){if(e.selectedRows[n]==p){e.selectedRows.splice(n,1);break}}if(e.selectedRows.length==0){b(".action .btn").removeClass("disabled").addClass("disabled")}}else{if(e.selectedRows.length==0){b(".action .btn").removeClass("disabled")}e.myDataTable.selectRow(m);e.selectedRows.push(p)}}e.hidePopover()}}});e.myDataTable.subscribe("setSelectionsEvent",function(){var l=e.myDataTable.getRecordSet().getRecords();for(var n=0;n<l.length;n++){var o=l[n].getData();if(o.id==e.highlightedRowId){e.myDataTable.highlightRow(l[n].getId())}for(var m=0;m<e.selectedRows.length;m++){if(o.id==e.selectedRows[m]){e.myDataTable.selectRow(l[n].getId());break}}}b(".yui-dt-highlighted").each(function(p,q){e.showPopover(q.cells[0])})});e.myDataTable.toggleRowSelection=function(){var l=b("#rowselectmode");if(l.text()=="Unselect All"){e.selectedRows=[];b(".action .btn").removeClass("disabled").addClass("disabled");this.unselectAllRows();l.text("Select All")}else{rows=this.getRecordSet();var n=rows.getLength();for(var m=0;m<n;m++){var o=rows.getRecord(m);e.selectedRows.push(o.getData("id"));this.selectRow(o)}b(".action .btn").removeClass("disabled");l.text("Unselect All")}};var i=function(m,l){if(l==YAHOO.widget.DataTable.CLASS_ASC){return function(o,n){return(o[m]<n[m])?-1:(o[m]>n[m])?1:0}}else{return function(o,n){return(o[m]>n[m])?-1:(o[m]<n[m])?1:0}}};e.myDataTable.doBeforeLoadData=function(l,m,o){if(m.error){MMONIT.error.json(m,null,null,e.myDataTable);clearTimeout(e.timeout);return false}var n=e.myDataTable.getState();if(n){e.myConfigs.sortedBy.key=n.sortedBy.key;e.myConfigs.sortedBy.dir=n.sortedBy.dir}m.results.sort(i(e.myConfigs.sortedBy.key,e.myConfigs.sortedBy.dir));e.isAdmin(m.meta.is_user_admin);e.host=m.meta.host;e.hostname(e.host.name);e.hoststatus(e.host.status);e.platform(e.host.platform.name+" "+e.host.platform.release+" ["+e.host.platform.machine+"]");e.cpu(e.host.cpu.count);e.memory(MMONIT.ui.hfbyte(e.host.memory.size*1024,1,1024));e.swap(MMONIT.ui.hfbyte(e.host.swap.size*1024,1,1024));e.system.cpu.user=e.system.cpu.system=e.system.cpu.wait=e.system.memory=e.system.swap=0;b.each(m.results,function(q,p){for(var r=0;r<p.statistics.length;r++){var s=p.statistics[r],t=4;if((p.monitorstate&~t)!=1||s.value==0){continue}if(p.typeid==5){if(s.type==1){e.system.cpu.user=s.value}else{if(s.type==2){e.system.cpu.system=s.value}else{if(s.type==3){e.system.cpu.wait=s.value}else{if(s.type==4){e.system.memory=s.value}else{if(s.type==6){e.system.swap=s.value}}}}}}}});if(e.host.led<3&&e.host.heartbeat!==0){e.cpu(e.cpu()+" ("+MMONIT.math.round(e.system.cpu.user+e.system.cpu.system+e.system.cpu.wait,1)+"% used)");e.memory(e.memory()+" ("+MMONIT.math.round(e.system.memory,1)+"% used)");e.swap(e.swap()+" ("+MMONIT.math.round(e.system.swap,1)+"% used)");e.showAction(e.isAdmin()?true:false)}else{e.showAction(false)}clearTimeout(e.timeout);e.timeout=setTimeout(function(){b("#serviceTable").trigger("reload")},5000);return true};b(document).keydown(function(l){if(l.keyCode==27){if(e.selectedRows.length>0){e.selectedRows=[];b(".action .btn").removeClass("disabled").addClass("disabled");e.myDataTable.unselectAllRows();b("#rowselectmode").text("Select All")}}});b("#rowselectmode").click(function(){e.myDataTable.toggleRowSelection()});b("#serviceTable").on("reload",function(l){e.myDataSource.sendRequest("",{success:e.myDataTable.onDataReturnReplaceRows,scope:e.myDataTable,argument:e.myDataTable.getState()})});b(document).on("vclick",function(l){if(!b(l.target).parents(".yui-dt-col-led").length){e.hidePopover()}});(function f(){e.width(b("#main").outerWidth());if(e.isPhone()){e.myDataTable.reorderColumn(e.myDataTable.getColumn("events"),3)}else{e.myDataTable.reorderColumn(e.myDataTable.getColumn("events"),4)}e.hidePopover();b(window).off("resize orientationchange").on("resize orientationchange",f)})()})}});c.insert()};ko.applyBindings(a)})(jQuery);