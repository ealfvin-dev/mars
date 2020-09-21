(this["webpackJsonpmars-react"]=this["webpackJsonpmars-react"]||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/logo-out.ec51513b.png"},53:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/mars-ui.67acb611.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/mars-ui-small.d668ad8d.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/inputTags.b941b309.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/inputTags-small.933b7f61.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/error-handling.ce23ee9a.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/error-handling-small.060ba478.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/Gravity.78a08bdf.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/ABC.9c6f7631.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/split-series.221a39fa.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/Input-Buttons.11e571b7.jpg"},82:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(7),c=a.n(r),l=(a(58),a(34)),i=a(6),m=a(116),o=(a(59),a(40)),d=a(46),h=a(120),u=a(119),E=a(128),p=a(129),T=a(118),g=a(130),N=a(15),f=Object(m.a)((function(e){return{drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:230,flexShrink:0}),drawerPaper:{width:230,backgroundColor:"rgba(39.525, 55.335, 74.46, 1)"}}}));var w=function(e){var t=e.window,a=f(),s=Object(N.a)(),r=n.a.useState(!1),c=Object(o.a)(r,2),i=c[0],m=c[1],d=n.a.useState(""),w=Object(o.a)(d,2),b=w[0],y=w[1],v=function(e){y(e.target.text)},D=n.a.createElement("div",null,n.a.createElement(T.a,null,["Home","Features","Documentation","Validation Details","About"].map((function(e,t){return n.a.createElement(g.a,{key:t},n.a.createElement(l.b,{to:"/"+e.replace(/\s+/g,"").toLowerCase(),onClick:v,style:{textDecoration:"none",color:"white",fontSize:"12pt",margin:"2%",fontWeight:e===b?"bold":"normal"}},e))}))),n.a.createElement(u.a,null),n.a.createElement(T.a,null,["Example Files"].map((function(e,t){return n.a.createElement(g.a,{key:t},n.a.createElement(l.b,{to:"/examplefiles",onClick:v,style:{textDecoration:"none",color:"white",fontSize:"12pt",margin:"2%",fontWeight:e===b?"bold":"normal"}},e))})))),S=void 0!==t?function(){return t().document.body}:void 0;return n.a.createElement("div",null,n.a.createElement(h.a,null),n.a.createElement("nav",{className:a.drawer,"aria-label":"folders"},n.a.createElement(p.a,{smUp:!0,implementation:"css"},n.a.createElement(E.a,{container:S,variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:i,onClose:function(){m(!i)},classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},D)),n.a.createElement(p.a,{xsDown:!0,implementation:"css"},n.a.createElement(E.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},D))))},b=a(122);a(65);var y=function(){return n.a.createElement("div",null,n.a.createElement(b.a,{container:!0,spacing:3},n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement("p",null,n.a.createElement("br",null))),n.a.createElement(b.a,{item:!0,xs:12,style:{justifyContent:"center"}},n.a.createElement("img",{src:a(45),height:"200px",alt:"Mars Logo",style:{display:"block",margin:"auto"}})),n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement("h2",{className:"logoTitle",style:{textAlign:"center"}},"Mass Reduction Software")),n.a.createElement(b.a,{item:!0,xs:4}),n.a.createElement(b.a,{item:!0,xs:4},n.a.createElement("h3",{className:"homepageText",style:{textAlign:"center"}},"Allows your lab to produce more accurate precision mass results that are less prone to data-entry errors.")),n.a.createElement(b.a,{item:!0,xs:4})))};a(66);var v=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(b.a,{container:!0,spacing:2},n.a.createElement(b.a,{item:!0,style:{minWidth:"345px"}},n.a.createElement("div",{className:"mainHeader"},"MARS"),n.a.createElement("div",{className:"secondaryHeader"},"Mass Reduction Software")),n.a.createElement(b.a,{item:!0},n.a.createElement("img",{className:"headerLogo",src:a(45),height:"90px",alt:"Mars logo"}))))};a(67);var D=function(){return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("div",{className:"about"},n.a.createElement(b.a,{container:!0,spacing:3},n.a.createElement(b.a,{item:!0,xs:9},n.a.createElement("p",null,"MARS was developed by Erik Alfvin, the former Technical Manager for the State of Minnesota Metrology Lab, and now a full-time software engineer. The idea for MARS came from the desire to develop something that could help calibration laboratories produce more accurate precision measurement results (following NIST SOP 28) with an easy-to-use graphical interface.",n.a.createElement("br",null)," ",n.a.createElement("br",null),"The largest accuracy improvement that MARS offers is line-by-line air buoyancy corrections. This is especially important when measurements are made on automated balances and even made manually when the air pressure changes during the calibration.",n.a.createElement("br",null)," ",n.a.createElement("br",null),"For improved reliability, MARS is designed to check input data for consistency and identify any errors that may have occurred during data entry. This makes troubleshooting fast and reduces the risk of producing bad measurement results. There are also a series of 211 internal validation tests that run each time the program is opened and ensure that real-time mass calculations are accurate.")),n.a.createElement(b.a,{item:!0,xs:3}))))};var S=function(){return n.a.createElement("div",null,n.a.createElement(v,null))};a(68);var H=function(){return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("div",{className:"validationDetails"},n.a.createElement(b.a,{container:!0,spacing:3},n.a.createElement(b.a,{item:!0,xs:8},n.a.createElement("p",null,'This page provides details on validation for MARS. All of the validation tests detailed below have been checked manually and are also automatically re-run every time MARS is opened. This ensures that in the unlikely event of a file becoming corrupted or computer malfunction, an error will be displayed when the program is opened. These tests can also be run by clicking "Run Tests" in the menu. ',n.a.createElement("br",null)," ",n.a.createElement("br",null),"Solutions to the designs are calculated with the matrix least squares solution in NBS Technical Note 952. ",n.a.createElement("br",null),"Air densities are calculated using the CIPM 2007 air density equation (Picard et al.).")),n.a.createElement(b.a,{item:!0,xs:4})),n.a.createElement("h2",null,"System Checks"),n.a.createElement("h3",{className:"testHeader"},"Test 1 - Test 6:"),n.a.createElement("p",{className:"testDesc"},"Tests that the nessesary software is installed to run the program and that the correct versions of dependencies are installed."),n.a.createElement("h2",null,"Runtime Error Handling"),n.a.createElement("h3",{className:"testHeader"},"Test 6:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file can be run sucessfully."),n.a.createElement("h3",{className:"testHeader"},"Test 7:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a non-invertible design matrix produces an error when run."),n.a.createElement("h3",{className:"testHeader"},"Test 8:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run."),n.a.createElement("h2",null,"Input File Error Identification"),n.a.createElement("h3",{className:"testHeader"},"Test 9 - Test 10:"),n.a.createElement("p",{className:"testDesc"},"Tests that direct readings vs manual readings are sucessfully determined."),n.a.createElement("h3",{className:"testHeader"},"Test 11:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-input report number (exists, no spaces) is identified as correct."),n.a.createElement("h3",{className:"testHeader"},"Test 12:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-structured input file (@SERIES before each series) is identified as correct."),n.a.createElement("h3",{className:"testHeader"},"Test 13:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with recognized entry tags is identified as correct."),n.a.createElement("h3",{className:"testHeader"},"Test 14:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with all required entry tags is identified as correct."),n.a.createElement("h3",{className:"testHeader"},"Test 15:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file without repeated entry tags is identified as correct."),n.a.createElement("h3",{className:"testHeader"},"Test 16:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes checks for correct typing and formatting."),n.a.createElement("h3",{className:"testHeader"},"Test 17:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the checks for the required number of balance and environmental observations."),n.a.createElement("h3",{className:"testHeader"},"Test 18:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the checks for restraint, check standard and pass-down vector lengths."),n.a.createElement("h3",{className:"testHeader"},"Test 19:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes design consistency checks."),n.a.createElement("h3",{className:"testHeader"},"Test 20:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes checks on restraints passed between series."),n.a.createElement("h3",{className:"testHeader"},"Test 21:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits)."),n.a.createElement("h3",{className:"testHeader"},"Test 22:"),n.a.createElement("p",{className:"testDesc"},"Tests that direct readings vs manual readings are sucessfully determined for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 23:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-input report number (exists, no spaces) is identified as correct for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 24:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-structured input file (@SERIES before each series) is identified as correct for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 25:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with recognized entry tags is identified as correct for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 26:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with all required entry tags is identified as correct for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 27:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file without repeated entry tags is identified as correct for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 28:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes checks for correct typing and formatting for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 29:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the checks for the required number of balance and environmental observations for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 30:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the checks for restraint, check standard and pass-down vector lengths for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 31:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes design consistency checks for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 32:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes checks on restraints passed between series for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 33:"),n.a.createElement("p",{className:"testDesc"},"Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits) for a single-series input."),n.a.createElement("h3",{className:"testHeader"},"Test 34:"),n.a.createElement("p",{className:"testDesc"},"Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 35:"),n.a.createElement("p",{className:"testDesc"},"Tests that a incorrectly-structured input file is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 36:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with an unrecognized entry tag is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 37:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a missing entry tag is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 38:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a repeated entry tag is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 39:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with entry tags but missing input is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 40:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with non-numerical input is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 41:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with the check standard and restraint in the same position is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 42:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a passed down restraint that does not match the nominal of the next restraint is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 43:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with an incorrectly-structured position is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 44:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a design vector length that does not match the number of positions is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 45:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a restraint vector length that does not match the number of positions is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 46:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a check standard vector length that does not match the number of positions is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 47:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a pass-down vector length that does not match the number of positions is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 48:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file where the number of balance observations does not match the number of lines in the design is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 49:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file where the number of environmental observations does not match the number of lines in the design is identified as incorrect."),n.a.createElement("h3",{className:"testHeader"},"Test 50:"),n.a.createElement("p",{className:"testDesc"},"Tests that an input file with a design that is incompatible with the weight nominals is identified as incorrect."),n.a.createElement("h2",null,"Output File Generation"),n.a.createElement("h3",{className:"testHeader"},"Test 51:"),n.a.createElement("p",{className:"testDesc"},"Tests that an output file can be sucessfully written out."),n.a.createElement("h3",{className:"testHeader"},"Test 52 - Test 56:"),n.a.createElement("p",{className:"testDesc"},"Tests that metadata is correctly written to the output file (RESTRAINT ID, CHECK STANDARD ID, BALANCE ID, TECHNICIAN ID, DESIGN ID)."),n.a.createElement("h3",{className:"testHeader"},"Test 57 - Test 62:"),n.a.createElement("p",{className:"testDesc"},"Tests that calculated masses are correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 63 - Test 68:"),n.a.createElement("p",{className:"testDesc"},"Tests that weight densities are correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 69:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated within-process standard deviation is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 70:"),n.a.createElement("p",{className:"testDesc"},"Tests that the accepted within-process standard deviation is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 71:"),n.a.createElement("p",{className:"testDesc"},"Tests that the accepted long-term standard deviation is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 72:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated F-critical value is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 73:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated F-value is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 74:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated check standard correction is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 75:"),n.a.createElement("p",{className:"testDesc"},"Tests that the accepted check standard correction is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 76:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated T-critical value is correctly written to the output file."),n.a.createElement("h3",{className:"testHeader"},"Test 77:"),n.a.createElement("p",{className:"testDesc"},"Tests that the calculated T-value is correctly written to the output file."),n.a.createElement("h2",null,"Data Storage Checks"),n.a.createElement("h3",{className:"testHeader"},"Test 78:"),n.a.createElement("p",{className:"testDesc"},"Tests that a sensitivity weight can be saved to the database."),n.a.createElement("h3",{className:"testHeader"},"Test 79:"),n.a.createElement("p",{className:"testDesc"},"Tests that all sensitivity weights can be retrieved from the database."),n.a.createElement("h3",{className:"testHeader"},"Test 80 - Test 83:"),n.a.createElement("p",{className:"testDesc"},"Tests that sensitivity weight data retrieved from the database matches the data that was put in for a given entry (name, mass, density, cce)."),n.a.createElement("h3",{className:"testHeader"},"Test 84:"),n.a.createElement("p",{className:"testDesc"},"Tests that a sensitivity weight can be deleted from the database."),n.a.createElement("h3",{className:"testHeader"},"Test 85:"),n.a.createElement("p",{className:"testDesc"},"Tests that standard deviations can be saved to the database."),n.a.createElement("h3",{className:"testHeader"},"Test 86:"),n.a.createElement("p",{className:"testDesc"},"Tests that all standard deviations can be retrieved from the database."),n.a.createElement("h3",{className:"testHeader"},"Test 87 - Test 89:"),n.a.createElement("p",{className:"testDesc"},"Tests that standard deviation data retrieved from the database matches the data that was put in for a given entry (nominal, sigma-w, sigma-t)."),n.a.createElement("h3",{className:"testHeader"},"Test 90:"),n.a.createElement("p",{className:"testDesc"},"Tests that a standard deviation can be deleted from the database."),n.a.createElement("h2",null,"Data Reduction"),n.a.createElement("h3",{className:"testHeader"},"Test 91 - 102:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS air density calculations agree with NIST Mass Code air density calculations for different temperatures, pressures and humidities with a tolerance of 1e-7 g/cm",n.a.createElement("sup",null,"3"),"."),n.a.createElement("h3",{className:"testHeader"},"Test 103 - Test 106:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in an automated 4-1 calibration at 1 kg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 107 - Test 108:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in an automated 4-1 calibration at 1 kg with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 109 - Test 113:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 5-1 calibration at 1 kg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 114 - Test 115:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 5-1 calibration at 1 kg with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 116 - Test 121:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 500 g with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 122 - Test 123:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 500 g with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 124 - Test 129:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 522111 calibration at 50 g with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 130 - Test 131:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 522111 calibration at 50 g with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 132 - Test 137:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 522111 calibration at 5 g with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 138 - Test 139:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 522111 calibration at 5 g with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 140 - Test 145:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 500 mg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 146 - Test 147:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 500 mg with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 148 - Test 153:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 50 mg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 154 - Test 155:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 50 mg with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 156 - Test 161:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 5 mg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 162 - Test 163:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 5 mg with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 164 - Test 166:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 3-1 calibration at 3000 lb with constant air density. The agreement tolerance is 1e-4 g."),n.a.createElement("h3",{className:"testHeader"},"Test 167 - Test 168:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 3-1 calibration at 3000 lb with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 169 - Test 172:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 4-1 calibration at 1 lb with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 173 - Test 174:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 4-1 calibration at 1 lb with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 175 - Test 180:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.5 lb with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 181 - Test 182:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.5 lb with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 183 - Test 188:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.05 lb with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 189 - Test 190:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.05 lb with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 191 - Test 196:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.005 lb with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 197 - Test 198:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.005 lb with constant air density. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 199 - Test 202:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in an automated 4-1 calibration at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 203 - Test 204:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in an automated 4-1 calibration at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. The agreement tolerance is 0.02."),n.a.createElement("h3",{className:"testHeader"},"Test 205 - Test 209:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual ascending 52211 calibration at 1 kg with constant air density. The agreement tolerance is 1e-7 g."),n.a.createElement("h3",{className:"testHeader"},"Test 210 - Test 211:"),n.a.createElement("p",{className:"testDesc"},"Tests that MARS F and T values agree with NIST Mass Code values in a manual ascending 52211 calibration at 1 kg with constant air density. The agreement tolerance is 0.02.")))},x=a(123),M=a(126),A=a(124),I=a(127),k=a(125),R=(a(69),Object(m.a)({root:{width:"210px"},title:{fontSize:14},pos:{marginBottom:12}}));var C=function(){var e=R();return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("div",{className:"exampleFiles"},n.a.createElement(b.a,{container:!0,spacing:3},n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Input File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"4-1 at 1 kg"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Automated balance,",n.a.createElement("br",null),"direct readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Output File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"4-1 at 1 kg"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Automated balance,",n.a.createElement("br",null),"direct readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Input File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"1 kg - 1 mg"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Metric dissemination,",n.a.createElement("br",null),"manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Output File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"1 kg - 1 mg"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Metric dissemination,",n.a.createElement("br",null),"manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0,xs:12}),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Input File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"2x3-1 at 3000 lb"),n.a.createElement(k.a,{variant:"body2",component:"p"},"AVDP, ",n.a.createElement("br",null),"Manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Output File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"2x3-1 at 3000 lb"),n.a.createElement(k.a,{variant:"body2",component:"p"},"AVDP, ",n.a.createElement("br",null),"Manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Input File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"1 lb to 0.001 lb"),n.a.createElement(k.a,{variant:"body2",component:"p"},"AVDP dissemination,",n.a.createElement("br",null),"manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Output File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"1 lb to 0.001 lb"),n.a.createElement(k.a,{variant:"body2",component:"p"},"AVDP dissemination,",n.a.createElement("br",null),"manual readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0,xs:12}),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Input File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"3211"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Metric dissemination,",n.a.createElement("br",null),"automated readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))),n.a.createElement(b.a,{item:!0},n.a.createElement(x.a,{className:e.root,variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(k.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Output File"),n.a.createElement(k.a,{variant:"h5",component:"h2"},"3211"),n.a.createElement(k.a,{variant:"body2",component:"p"},"Metric dissemination,",n.a.createElement("br",null),"automated readings")),n.a.createElement(M.a,null,n.a.createElement(I.a,{size:"small"},"View")))))))},F=a(121);a(70);var j=function(){return n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement("div",{className:"divider"}))};a(71);var B=function(){var e=Object(F.a)("(min-width:1600px)");return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("div",{className:"features"},n.a.createElement(b.a,{container:!0,spacing:3},n.a.createElement(b.a,{item:!0,xs:6},n.a.createElement("p",{className:"summary"},"Create and run advanced mass input files with error checking, line-by-line air buoyancy corrections and a graphical user interface.")),n.a.createElement(b.a,{item:!0,xs:6}),n.a.createElement(b.a,{item:!0,xs:12},e?n.a.createElement("img",{src:a(72),width:"1268px",alt:"Mars software user interface"}):n.a.createElement("img",{src:a(73),width:"964px",alt:"Mars software user interface"})),n.a.createElement(j,null),n.a.createElement(b.a,{item:!0,xs:5},n.a.createElement("h3",null,"Input File Readability"),n.a.createElement("p",null,"Line tags are automatically inserted as you create files for better readability and lower risk of data entry errors.")),n.a.createElement(b.a,{item:!0,xs:7},e?n.a.createElement("img",{src:a(74),width:"735px",alt:"Input file with caught error"}):n.a.createElement("img",{src:a(75),width:"526",alt:"Input file with caught error"})),n.a.createElement(j,null),n.a.createElement(b.a,{item:!0,xs:5},n.a.createElement("h3",null,"Identify Errors in Input Files"),n.a.createElement("p",null,"MARS will run a series of checks on your input files before they run and identify any errors it finds.")),n.a.createElement(b.a,{item:!0,xs:7},e?n.a.createElement("img",{src:a(76),width:"735px",alt:"Input file with caught error"}):n.a.createElement("img",{src:a(77),width:"530px",alt:"Input file with caught error"})),n.a.createElement(j,null),n.a.createElement(b.a,{item:!0,xs:4},n.a.createElement("h3",null,"Perform line-by-line air buoyancy corrections and center of mass gravitational corrections"),n.a.createElement("p",null)),n.a.createElement(b.a,{item:!0,xs:8}),n.a.createElement(b.a,{item:!0,xs:4},n.a.createElement("img",{src:a(78),width:"325",alt:"Gravity correction input example"})),n.a.createElement(b.a,{item:!0,xs:8},n.a.createElement("img",{src:a(79),width:"594",alt:"Air buoyancy correction input example"})),n.a.createElement(j,null),n.a.createElement(b.a,{item:!0,xs:2},n.a.createElement("img",{src:a(80),width:"154px",alt:"Split series menu view"})),n.a.createElement(b.a,{item:!0,xs:5},n.a.createElement("h3",null,"View One Series at a Time"),n.a.createElement("p",null,"Navigate between connected calibrations in an input file and view input data for one series at a time.")),n.a.createElement(b.a,{item:!0,xs:5}),n.a.createElement(j,null),n.a.createElement(b.a,{item:!0,xs:5},n.a.createElement("h3",null,"Keep Track of What Data Has Been Entered in Each Series"),n.a.createElement("p",null,"Data entry is organized by series. Buttons colors will indicate what data has been entered in each series and what is left to complete.")),n.a.createElement(b.a,{item:!0,xs:7},n.a.createElement("img",{src:a(81),width:"400",alt:"Input file with caught error"})),n.a.createElement(j,null))))},O=Object(m.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)}}}));var z=function(){var e=O();return n.a.createElement(l.a,{basename:"/"},n.a.createElement("div",{className:"App ".concat(e.root)},n.a.createElement(w,null),n.a.createElement("div",{className:e.content},n.a.createElement(i.a,{exact:!0,path:"/",component:y}),n.a.createElement(i.a,{exact:!0,path:"/home",component:y}),n.a.createElement(i.a,{exact:!0,path:"/features",component:B}),n.a.createElement(i.a,{exact:!0,path:"/about",component:D}),n.a.createElement(i.a,{exact:!0,path:"/documentation",component:S}),n.a.createElement(i.a,{exact:!0,path:"/validationdetails",component:H}),n.a.createElement(i.a,{exact:!0,path:"/examplefiles",component:C}))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(z,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4b1a6243.chunk.js.map