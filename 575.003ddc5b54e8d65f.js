"use strict";(self.webpackChunkdispath_tool_fe=self.webpackChunkdispath_tool_fe||[]).push([[575],{6575:(k,p,n)=>{n.r(p),n.d(p,{UsersModule:()=>F});var u=n(6895),c=n(9299),i=n(7155),g=n(9798),m=n(6308),f=n(7013),t=n(4650),h=n(6074),U=n(4859),Z=n(3683),T=n(7392),C=n(9549),v=n(4144);function A(e,s){1&e&&(t.TgZ(0,"th",20),t._uU(1," Name"),t.qZA())}function _(e,s){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=s.$implicit;t.xp6(1),t.hij(" ",a.name," ")}}function L(e,s){1&e&&(t.TgZ(0,"th",20),t._uU(1," Is active"),t.qZA())}function y(e,s){if(1&e&&(t.TgZ(0,"td",21)(1,"mat-icon",22),t._uU(2),t.qZA()()),2&e){const a=s.$implicit;t.xp6(1),t.Q6J("color",a.isActive?"primary":"warn"),t.xp6(1),t.hij(" ",a.isActive?"check":"close"," ")}}function P(e,s){1&e&&(t.TgZ(0,"th",20),t._uU(1," Created"),t.qZA())}function x(e,s){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=s.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,a.createdAt),"")}}function D(e,s){1&e&&(t.TgZ(0,"th",20),t._uU(1," Role"),t.qZA())}function N(e,s){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=s.$implicit,o=t.oxw();t.xp6(1),t.hij(" ",o.userRole[a.role]," ")}}function b(e,s){1&e&&t._UZ(0,"th",20)}function w(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"td",21)(1,"button",23),t.NdJ("click",function(){const d=t.CHM(a).$implicit,I=t.oxw();return t.KtG(I.onDetailsBtnClick(d._id))}),t.TgZ(2,"mat-icon"),t._uU(3," visibility "),t.qZA()()()}}function Y(e,s){1&e&&t._UZ(0,"tr",24)}function q(e,s){1&e&&t._UZ(0,"tr",25)}function j(e,s){if(1&e&&(t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t.qZA()()),2&e){t.oxw();const a=t.MAs(11);t.xp6(2),t.hij('No data matching the filter: "',a.value,'"')}}const R=function(){return[10,25,100]};let S=(()=>{class e{constructor(a,o){this.httpUsers=a,this.router=o,this.displayedColumns=["name","isActive","role","createdAt","actions"],this.userRole=f.i,this.isLoading=!1,this.dataSource=new i.by([])}ngOnInit(){this.requestUsers()}onDetailsBtnClick(a){this.router.navigate(["/user",a]).then()}requestUsers(){this.isLoading=!0,this.httpUsers.getUsersFullData().subscribe({next:o=>this.dataSource.data=o,error:o=>console.error(o.error)}).add(()=>this.isLoading=!1)}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h.z),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-list-page"]],viewQuery:function(a,o){if(1&a&&(t.Gf(g.NW,5),t.Gf(m.YE,5)),2&a){let r;t.iGM(r=t.CRH())&&(o.paginator=r.first),t.iGM(r=t.CRH())&&(o.sort=r.first)}},decls:36,vars:6,consts:[["color","primary",1,"gap-2"],[1,"container","mx-auto","p-4"],[1,"flex","flex-row","justify-between","items-center"],["appearance","standard"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],["mat-icon-button","",3,"disabled","click"],[1,"mat-elevation-z8","overflow-auto"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","isActive"],["matColumnDef","createdAt"],["matColumnDef","role"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[3,"color"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(a,o){1&a&&(t.TgZ(0,"mat-toolbar",0)(1,"mat-icon"),t._uU(2,"group"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Users"),t.qZA()(),t.TgZ(5,"div",1)(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Filter"),t.qZA(),t.TgZ(10,"input",4,5),t.NdJ("keyup",function(d){return o.applyFilter(d)}),t.qZA()(),t.TgZ(12,"button",6),t.NdJ("click",function(){return o.requestUsers()}),t.TgZ(13,"mat-icon"),t._uU(14," refresh "),t.qZA()()(),t.TgZ(15,"div",7)(16,"table",8),t.ynx(17,9),t.YNc(18,A,2,0,"th",10),t.YNc(19,_,2,1,"td",11),t.BQk(),t.ynx(20,12),t.YNc(21,L,2,0,"th",10),t.YNc(22,y,3,2,"td",11),t.BQk(),t.ynx(23,13),t.YNc(24,P,2,0,"th",10),t.YNc(25,x,3,3,"td",11),t.BQk(),t.ynx(26,14),t.YNc(27,D,2,0,"th",10),t.YNc(28,N,2,1,"td",11),t.BQk(),t.ynx(29,15),t.YNc(30,b,1,0,"th",10),t.YNc(31,w,4,0,"td",11),t.BQk(),t.YNc(32,Y,1,0,"tr",16),t.YNc(33,q,1,0,"tr",17),t.YNc(34,j,3,1,"tr",18),t.qZA(),t._UZ(35,"mat-paginator",19),t.qZA()()),2&a&&(t.xp6(12),t.Q6J("disabled",o.isLoading),t.xp6(4),t.Q6J("dataSource",o.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(5,R)))},dependencies:[U.lW,Z.Ye,T.Hw,C.KE,C.hX,v.Nt,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,i.Ee,m.YE,m.nU,g.NW,u.uU],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})();var l=n(3546),Q=n(3162);function M(e,s){1&e&&(t.TgZ(0,"mat-card-footer"),t._UZ(1,"mat-progress-bar",7),t.qZA())}const J=[{path:"",children:[{path:"",component:S},{path:":id",component:(()=>{class e{constructor(a,o){this.httpUsers=a,this.route=o,this.isLoading=!1,this.userRole=f.i,this.id=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.requestUser()}requestUser(){this.isLoading=!0,this.id&&this.httpUsers.getUser(this.id).subscribe({next:o=>this.user=o,error:o=>console.error(o.error)}).add(()=>this.isLoading=!1)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h.z),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-details-page"]],decls:31,vars:10,consts:[["color","primary",1,"gap-2"],[1,"material-symbols-outlined"],[1,"container","mx-auto","p-4"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4"],[1,"flex","flex-grow","justify-end"],["mat-icon-button","",3,"disabled","click"],[4,"ngIf"],["mode","indeterminate"]],template:function(a,o){1&a&&(t.TgZ(0,"mat-toolbar",0)(1,"mat-icon")(2,"div",1),t._uU(3," person_search "),t.qZA()(),t.TgZ(4,"span"),t._uU(5,"User details"),t.qZA()(),t.TgZ(6,"div",2)(7,"div",3)(8,"mat-card")(9,"mat-card-header")(10,"mat-card-title"),t._uU(11),t.qZA(),t.TgZ(12,"mat-card-subtitle"),t._uU(13),t.qZA(),t.TgZ(14,"div",4)(15,"button",5),t.NdJ("click",function(){return o.requestUser()}),t.TgZ(16,"mat-icon"),t._uU(17," refresh "),t.qZA()()()(),t.TgZ(18,"mat-card-content")(19,"div"),t._uU(20),t.qZA(),t.TgZ(21,"div"),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"div"),t._uU(25),t.qZA(),t.TgZ(26,"div"),t._uU(27),t.qZA()(),t.YNc(28,M,2,0,"mat-card-footer",6),t.qZA(),t.TgZ(29,"mat-card"),t._uU(30," TTT "),t.qZA()()()),2&a&&(t.xp6(11),t.hij(" ",(null==o.user?null:o.user.name)||"Name"," "),t.xp6(2),t.hij(" Role: ",o.userRole[(null==o.user?null:o.user.role)||0]," "),t.xp6(2),t.Q6J("disabled",o.isLoading),t.xp6(5),t.hij(" ID: ",null==o.user?null:o.user._id," "),t.xp6(2),t.hij(" Created at: ",t.lcZ(23,8,null==o.user?null:o.user.createdAt)," "),t.xp6(3),t.hij(" Is active: ",null==o.user?null:o.user.isActive," "),t.xp6(2),t.hij(" Telegram id: ",(null==o.user?null:o.user.telegramId)||"NOT SET"," "),t.xp6(1),t.Q6J("ngIf",o.isLoading))},dependencies:[u.O5,U.lW,Z.Ye,T.Hw,l.a8,l.dk,l.dn,l.n5,l.$j,l.rt,Q.pW,u.uU]}),e})()}]}];let B=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(J),c.Bz]}),e})();var z=n(4872);let F=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,B,z.q]}),e})()}}]);