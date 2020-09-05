(this["webpackJsonpmars-react"]=this["webpackJsonpmars-react"]||[]).push([[0],{48:function(e,t,a){e.exports=a(71)},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/mars-ui.0704d26e.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/inputTags.f2dfff48.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/error-handling.11e661db.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/ABC.ba71a782.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/Gravity.febf123b.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/split-series.4301950a.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/Input-Buttons.8e730b15.jpg"},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),l=a.n(r),c=(a(53),a(33)),i=a(6),m=a(101),o=(a(54),a(39)),u=a(44),d=a(106),h=a(105),p=a(108),E=a(110),f=a(103),T=a(109),g=a(13),w=Object(m.a)((function(e){return{drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:230,flexShrink:0}),drawerPaper:{width:230,backgroundColor:"rgba(39.525, 55.335, 74.46, 165.75)"}}}));var v=function(e){var t=e.window,a=w(),n=Object(g.a)(),r=s.a.useState(!1),l=Object(o.a)(r,2),i=l[0],m=l[1],u=s.a.useState("Home"),v=Object(o.a)(u,2),y=v[0],b=v[1],D=function(e){b(e.target.text)},N=s.a.createElement("div",null,s.a.createElement(f.a,null,["Home","About","Documentation","Validation Details"].map((function(e,t){return s.a.createElement(T.a,{key:t},s.a.createElement(c.b,{to:"/"+e.replace(/\s+/g,"").toLowerCase(),onClick:D,style:{textDecoration:"none",color:"white",fontSize:"12pt",margin:"2%",fontWeight:e===y?"bold":"normal"}},e))}))),s.a.createElement(h.a,null),s.a.createElement(f.a,null,["Example Files"].map((function(e,t){return s.a.createElement(T.a,{key:t},s.a.createElement(c.b,{to:"/examplefiles",onClick:D,style:{textDecoration:"none",color:"white",fontSize:"12pt",margin:"2%",fontWeight:e===y?"bold":"normal"}},e))})))),x=void 0!==t?function(){return t().document.body}:void 0;return s.a.createElement("div",null,s.a.createElement(d.a,null),s.a.createElement("nav",{className:a.drawer,"aria-label":"folders"},s.a.createElement(E.a,{smUp:!0,implementation:"css"},s.a.createElement(p.a,{container:x,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:function(){m(!i)},classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},N)),s.a.createElement(E.a,{xsDown:!0,implementation:"css"},s.a.createElement(p.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},N))))},y=a(107);a(60);var b=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"mainHeader"},"MARS"),s.a.createElement("div",{className:"secondaryHeader"},e.subHeader))};a(61);var D=function(){return s.a.createElement(y.a,{item:!0,xs:12},s.a.createElement("div",{className:"divider"}))};a(62);var N=function(){return s.a.createElement("div",null,s.a.createElement(b,{subHeader:"Mass Reduction Software"}),s.a.createElement("div",{className:"home"},s.a.createElement(y.a,{container:!0,spacing:3},s.a.createElement(y.a,{item:!0,xs:6},s.a.createElement("p",null,"Create and run advanced mass input files with error checking, line-by-line air buoyancy corrections and a graphical user interface.")),s.a.createElement(y.a,{item:!0,xs:6}),s.a.createElement(y.a,{item:!0,xs:12},s.a.createElement("img",{src:a(63),width:"90%",alt:"Mars software user interface"})),s.a.createElement(D,null),s.a.createElement(y.a,{item:!0,xs:5},s.a.createElement("h3",null,"Input File Readability"),s.a.createElement("p",null,"Line tags are automatically inserted as you create files for better readability and lower chance of data entry errors.")),s.a.createElement(y.a,{item:!0,xs:7},s.a.createElement("img",{src:a(64),width:"100%",alt:"Input file with caught error"})),s.a.createElement(D,null),s.a.createElement(y.a,{item:!0,xs:5},s.a.createElement("h3",null,"Identify Errors in Input Files"),s.a.createElement("p",null,"MARS will run a series of checks on your input files before they run and identify any errors it finds.")),s.a.createElement(y.a,{item:!0,xs:7},s.a.createElement("img",{src:a(65),width:"100%",alt:"Input file with caught error"})),s.a.createElement(D,null),s.a.createElement(y.a,{item:!0,xs:4},s.a.createElement("h3",null,"Perform for line-by-line air buoyancy corrections and center of mass gravitational corrections"),s.a.createElement("p",null)),s.a.createElement(y.a,{item:!0,xs:5},s.a.createElement("img",{src:a(66),width:"100%",alt:"Input file with caught error"})),s.a.createElement(y.a,{item:!0,xs:3},s.a.createElement("img",{src:a(67),width:"100%",alt:"Input file with caught error"})),s.a.createElement(D,null),s.a.createElement(y.a,{item:!0,xs:2},s.a.createElement("img",{src:a(68),width:"100%",alt:"Split series menu view"})),s.a.createElement(y.a,{item:!0,xs:5},s.a.createElement("h3",null,"View One Series at a Time"),s.a.createElement("p",null,"Navigate between connected series in a calibration and view one series at a time.")),s.a.createElement(y.a,{item:!0,xs:5}),s.a.createElement(D,null),s.a.createElement(y.a,{item:!0,xs:5},s.a.createElement("h3",null,"Keep Tack of Data That Has Been Entered in Each Series"),s.a.createElement("p",null,"Data entry is organized in sections. Buttons colors will indicate what data has been entered in each series and what is left to complete.")),s.a.createElement(y.a,{item:!0,xs:7},s.a.createElement("img",{src:a(69),width:"70%",alt:"Input file with caught error"})),s.a.createElement(D,null))))};var x=function(){return s.a.createElement("div",null,s.a.createElement(b,{subHeader:"Mass Reduction Software: About"}))};var k=function(){return s.a.createElement("div",null,s.a.createElement(b,{subHeader:"Mass Reduction Software: Documentation"}))};a(70);var S=function(){return s.a.createElement("div",null,s.a.createElement(b,{subHeader:"Mass Reduction Software: Validation Details"}),s.a.createElement("div",{className:"validationDetails"},s.a.createElement(y.a,{container:!0,spacing:3},s.a.createElement(y.a,{item:!0,xs:8},s.a.createElement("p",null,'This page provides details on validation that MARS has been through. All of the validation checks detailed below are automatically re-run each time MARS is opened. This ensures that in the unlikely event of a file becoming corrupted, an error will be displayed when the program is opened. These checks can also be run by clicking "Run Tests" from the menu, where you can see results of the validation tests including details if any tests failed. ',s.a.createElement("br",null))),s.a.createElement(y.a,{item:!0,xs:4})),s.a.createElement("h2",null,"System Checks"),s.a.createElement("h3",null,"Test 1 - Test 6:"),s.a.createElement("p",{className:"testDesc"},"Tests that the nessesary software is installed to run the program and that the correct versions of dependencies are installed."),s.a.createElement("h2",null,"Runtime Error Handling"),s.a.createElement("h3",null,"Test 6:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file can be run sucessfully."),s.a.createElement("h3",null,"Test 7:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with a non-invertible design matrix produces an error when run."),s.a.createElement("h3",null,"Test 8:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run."),s.a.createElement("h2",null,"Input File Error Identification"),s.a.createElement("h3",null,"Test 9 - Test 10:"),s.a.createElement("p",{className:"testDesc"},"Tests that direct readings vs manual readings are sucessfully determined. This is used to set required lines in the input file."),s.a.createElement("h3",null,"Test 11:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-input report number (exists, no spaces) is identified as correct."),s.a.createElement("h3",null,"Test 12:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-structured input file (@SERIES before each series) is identified as correct."),s.a.createElement("h3",null,"Test 13:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with recognized entry tags is identified as correct."),s.a.createElement("h3",null,"Test 14:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with all required entry tags is identified as correct."),s.a.createElement("h3",null,"Test 15:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file without repeated entry tags is identified as correct."),s.a.createElement("h3",null,"Test 16:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the input checks (checking all individual entries for correct type and formatting)."),s.a.createElement("h3",null,"Test 17:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the required checks (checking structure consistency, restraints passed down, number of balance observations and environmentals match the design)."),s.a.createElement("h3",null,"Test 18:"),s.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits)."),s.a.createElement("h3",null,"Test 19:"),s.a.createElement("p",{className:"testDesc"},"Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect."),s.a.createElement("h3",null,"Test 20:"),s.a.createElement("p",{className:"testDesc"},"Tests that a incorrectly-structured input file is identified as incorrect."),s.a.createElement("h3",null,"Test 21:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with an unrecognized entry tag is identified as incorrect."),s.a.createElement("h3",null,"Test 22:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with a missing entry tag is identified as incorrect."),s.a.createElement("h3",null,"Test 23:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with a repeated entry tag is identified as incorrect."),s.a.createElement("h3",null,"Test 24:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with entry tags but missing input is identified as incorrect."),s.a.createElement("h3",null,"Test 25:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with non-numerical input is identified as incorrect."),s.a.createElement("h3",null,"Test 26:"),s.a.createElement("p",{className:"testDesc"},"Tests that an input file with the check standard and restraint in the same position is identified as incorrect."),s.a.createElement("h2",null,"Output File Checks"),s.a.createElement("h3",null,"Test 27:"),s.a.createElement("p",{className:"testDesc"},"Tests that an output file can be sucessfully written out."),s.a.createElement("h3",null,"Test 28 - Test 33:"),s.a.createElement("p",{className:"testDesc"},"Tests that calculated masses are correctly written to the output file."),s.a.createElement("h3",null,"Test 34 - Test 39:"),s.a.createElement("p",{className:"testDesc"},"Tests that weight densities are correctly written to the output file."),s.a.createElement("h3",null,"Test 40:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated within-process standard deviation is correctly written to the output file."),s.a.createElement("h3",null,"Test 41:"),s.a.createElement("p",{className:"testDesc"},"Tests that the accepted within-process standard deviation is correctly written to the output file."),s.a.createElement("h3",null,"Test 42:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated F-critical value is correctly written to the output file."),s.a.createElement("h3",null,"Test 43:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated F-value is correctly written to the output file."),s.a.createElement("h3",null,"Test 44:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated check standard correction is correctly written to the output file."),s.a.createElement("h3",null,"Test 45:"),s.a.createElement("p",{className:"testDesc"},"Tests that the accepted check standard correction is correctly written to the output file."),s.a.createElement("h3",null,"Test 46:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated T-critical value is correctly written to the output file."),s.a.createElement("h3",null,"Test 47:"),s.a.createElement("p",{className:"testDesc"},"Tests that the calculated T-value is correctly written to the output file."),s.a.createElement("h2",null,"Data Storage Checks"),s.a.createElement("h3",null,"Test 48:"),s.a.createElement("p",{className:"testDesc"},"Tests that a sensitivity weight can be saved to the database."),s.a.createElement("h3",null,"Test 49:"),s.a.createElement("p",{className:"testDesc"},"Tests that all sensitivity weights can be retrieved from the database."),s.a.createElement("h3",null,"Test 50 - Test 53:"),s.a.createElement("p",{className:"testDesc"},"Tests that sensitivity weight data retrieved from the database is the same as the data that was put in for a given entry (name, mass, density, cce match going in and coming out)."),s.a.createElement("h3",null,"Test 54:"),s.a.createElement("p",{className:"testDesc"},"Tests that a sensitivity weight can be deleted from the database."),s.a.createElement("h3",null,"Test 55:"),s.a.createElement("p",{className:"testDesc"},"Tests that standard deviations can be saved to the database."),s.a.createElement("h3",null,"Test 56:"),s.a.createElement("p",{className:"testDesc"},"Tests that all standard deviations can be retrieved from the database."),s.a.createElement("h3",null,"Test 57 - Test 59:"),s.a.createElement("p",{className:"testDesc"},"Tests that standard deviation data retrieved from the database is the same as the data that was put in for a given entry (nominal, sigma-w, sigma-t match going in and coming out)."),s.a.createElement("h3",null,"Test 60:"),s.a.createElement("p",{className:"testDesc"},"Tests that a standard deviation can be deleted from the database."),s.a.createElement("h2",null,"Data Reduction Checks"),s.a.createElement("h3",null,"Test 61 - 72:"),s.a.createElement("p",{className:"testDesc"},"Tests that MARS air density calculations agree with NIST Mass Code air density calculations for different temperatures, pressures and humidities with a tolerance of 1e-7 g/cm",s.a.createElement("sup",null,"3"),".")))};var M=function(){return s.a.createElement("div",null,s.a.createElement(b,{subHeader:"Mass Reduction Software: Example Files"}))},R=Object(m.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)}}}));var I=function(){var e=R();return s.a.createElement(c.a,null,s.a.createElement("div",{className:"App ".concat(e.root)},s.a.createElement(v,null),s.a.createElement("div",{className:e.content},s.a.createElement(i.a,{exact:!0,path:"/",component:N}),s.a.createElement(i.a,{exact:!0,path:"/home",component:N}),s.a.createElement(i.a,{exact:!0,path:"/about",component:x}),s.a.createElement(i.a,{exact:!0,path:"/documentation",component:k}),s.a.createElement(i.a,{exact:!0,path:"/validationdetails",component:S}),s.a.createElement(i.a,{exact:!0,path:"/examplefiles",component:M}))))};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.dec719c5.chunk.js.map