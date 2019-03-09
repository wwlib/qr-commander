(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports={App:"App_App__3w1wv",AppHeader:"App_AppHeader__1Eapr",AppLink:"App_AppLink__xov7g",PanelContainer:"App_PanelContainer__qzzdY"}},18:function(e,a,t){e.exports={TopNav:"TopNav_TopNav__1JMcn",TopTitle:"TopNav_TopTitle__3QY-z"}},19:function(e,a,t){e.exports={QRPanel:"QRPanel_QRPanel__2M-SC",QRPanelNotes:"QRPanel_QRPanelNotes__14WVo"}},21:function(e,a,t){e.exports={QRImagePanel:"QRImagePanel_QRImagePanel__272ZF",QRImage:"QRImagePanel_QRImage__3mNKr"}},38:function(e,a,t){e.exports=t(85)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(9),o=t.n(i),r=(t(43),t(44),t(45),t(2)),c=t(3),u=t(5),m=t(4),s=t(6),h=t(17),d=t.n(h),b=t(18),f=t.n(b),p=function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){}},{key:"onButtonClicked",value:function(e){this.props.clickHandler(e)}},{key:"render",value:function(){return l.createElement("div",{className:f.a.TopNav,onClick:this.onButtonClicked.bind(this)},l.createElement("div",{className:f.a.TopTitle},l.createElement("h4",null,"QR Commander"),l.createElement("h4",null,l.createElement("a",{href:"https://github.com/wwlib/qr-commander",style:{color:"white",paddingRight:"6px"}},"github: qr-commander"))))}}]),a}(l.Component),v=t(37),g=t(19),j=t.n(g),k=function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({qrText:""})}},{key:"componentDidMount",value:function(){}},{key:"onKeyPress",value:function(e){"Enter"==e.nativeEvent.key&&this.props.clickHandler(e,{qrText:this.state.qrText})}},{key:"onButtonClicked",value:function(e){this.props.clickHandler(e,{qrText:this.state.qrText})}},{key:"handleDropdownChange",value:function(e){console.log(e),this.setState({qrText:"ESML[#]".concat(e.value)}),this.props.dropdownHandler(e)}},{key:"onQRTextChange",value:function(e){var a=e.nativeEvent;switch(a.target.name){case"qrText":"insertLineBreak"!=a.inputType&&this.setState({qrText:a.target.value})}}},{key:"render",value:function(){var e="".concat(j.a.QRPanel," well");return l.createElement("div",{className:e},l.createElement("table",{style:{width:"100%"}},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement("h4",null,"QR Text:"))),l.createElement("tr",null,l.createElement("td",null,l.createElement(v.a,{name:"Dropdown",value:{label:"Examples",value:"Examples"},options:this.props.esmlExamples,onChange:this.handleDropdownChange.bind(this)}))),l.createElement("tr",null,l.createElement("td",null,l.createElement("textarea",{name:"qrText",id:"qrText",value:this.state.qrText,rows:5,style:{},onChange:this.onQRTextChange.bind(this),onKeyPress:this.onKeyPress.bind(this)}))),l.createElement("tr",null,l.createElement("td",null,l.createElement("button",{className:"btn btn-success",id:"qrText",style:{width:120},onClick:this.onButtonClicked.bind(this)},"Generate Code"))),l.createElement("tr",null,l.createElement("td",null,l.createElement("div",{className:j.a.QRPanelNotes},l.createElement("h4",null,"Notes:"),l.createElement("ul",null,l.createElement("li",null,"Jibo software version >= 2.0.0 is required"),l.createElement("li",null,"use Jibo's menu to enable qr-commander"),l.createElement("li",null,"show qr-commander-generated codes to Jibo to give him things to say"),l.createElement("li",null,"codes must start with `ESML[#]` followed by text or ESML (Embodied Speech Markup Language)"),l.createElement("li",null,"see the Examples pulldown for ESML examples"),l.createElement("li",null,"github repo: ",l.createElement("a",{href:"https://github.com/wwlib/qr-commander"},"https://github.com/wwlib/qr-commander")),l.createElement("li",null,l.createElement("a",{href:"https://medium.com/@andrew.rapo/keep-your-jibo-talking-and-dancing-with-qr-commander-e1f418bdac4c"},"medium article about qr-commander")))))))))}}]),a}(l.Component),w=t(21),y=t.n(w),B=function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){}},{key:"onButtonClicked",value:function(e){this.props.clickHandler(e)}},{key:"render",value:function(){var e="".concat(y.a.QRImagePanel," well");return l.createElement("div",{className:e,onClick:this.onButtonClicked.bind(this)},l.createElement("div",null,l.createElement("h4",null,"QR Image")),l.createElement("img",{className:y.a.QRImage,src:this.props.QRImage}))}}]),a}(l.Component),E=t(61),T=function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({QRImage:""})}},{key:"onTopNavClick",value:function(e){e.nativeEvent.target.id}},{key:"onDropdownChange",value:function(e){}},{key:"onPanelClick",value:function(e,a){var t=this,l=e.nativeEvent;switch(console.log("onPanelClick: ",l.target.id),l.target.id){case"qrText":E.toDataURL(a.qrText,{errorCorrectionLevel:"M",type:"image/png",scale:8,color:{dark:"#000",light:"#FFF"}},function(e,a){e?console.log(e):(console.log(a),t.setState({QRImage:a}))})}}},{key:"render",value:function(){return n.a.createElement("div",{className:d.a.App},n.a.createElement(p,{clickHandler:this.onTopNavClick.bind(this)}),n.a.createElement("div",{className:d.a.PanelContainer},n.a.createElement(k,{clickHandler:this.onPanelClick.bind(this),dropdownHandler:this.onDropdownChange.bind(this),esmlExamples:this.props.model.esmlExamples}),n.a.createElement(B,{clickHandler:this.onPanelClick.bind(this),QRImage:this.state.QRImage})))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(12),I=t(35),x=(t(82),t(23),function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this))).statusMessages=void 0,e.panelZIndexMap=void 0,e.esmlExamples=void 0,e.panelZIndexMap=new Map,e.statusMessages="",e.esmlExamples=[{label:"hello world",value:"hello world!"},{label:"happy",value:"This is a happy sound <ssa cat='happy'/>"},{label:"three-happy",value:"Here are three happy sounds <ssa cat='happy' loop='3'/>"},{label:"worried",value:"<ssa cat='worried'/> That was my worried noise"},{label:"penguins",value:"<ssa cat='affection' nonBlocking='true'/> I love penguins"},{label:"trust-moose",value:"Not sure <break size='0.5'/> if trust moose"},{label:"break",value:"I won\u2019t talk for 2 seconds. <break size='2'/> See?"},{label:"bono-moose1",value:"Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?"},{label:"bono-moose2",value:"Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?"},{label:"hi-pitched",value:"<pitch add='200'> Hi </pitch> <pitch mult='1.2'> there </pitch> <break size='1'/> I'm Jibo"},{label:"pitch",value:"This is a <pitch mult='2.2'> pitch </pitch> test"},{label:"duration",value:"This is a <duration stretch='3'> duration </duration> test"},{label:"duration-pitch",value:"<duration stretch='3.0'> <pitch halftone='-5'> This is a duration and pitch test </pitch></duration>"},{label:"hi",value:"<pitch band='1.2'> Hi there, I'm Jibo </pitch>"},{label:"spell-jibo",value:"*Jibo is spelled <say-as spell='jibo'/>"},{label:"flower",value:"<anim cat='emoji' filter='flower'> This is a flower </anim>"},{label:"dance",value:"<anim cat='dance' filter='music, rom-upbeat'/>."},{label:"ssa",value:"This is a happy sound <ssa cat='happy'/>"},{label:"flower",value:"<anim cat='emoji' filter='flower'> This is a flower </anim>"},{label:"turtle",value:"<anim cat='emoji' filter='?flower, ?turtle'> This is either a flower or a turtle </anim>"},{label:"not flower",value:"<anim cat='emoji' filter='!flower'/> This is not a flower"},{label:"emoji",value:"<anim cat='emoji' filter='flower, !blue, !white'/> This is flower that isn't blue or white"},{label:"twerk",value:"<anim cat='dance' filter='rom-twerk'/> I'm a twerking robot"},{label:"emoji",value:"<anim cat='emoji' filter='?(flower, turtle)'> This is either a flower or a turtle </anim>"},{label:"emoji",value:"<anim cat='emoji' filter='&(flower), !(blue, white)'/> This is flower that isn't blue"},{label:"emoji",value:"<anim cat='emoji' filter='&(hf, flower)'/> This is a flower hotframe"},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(flower)'/> This is my full flower emoji"},{label:"dance",value:"<anim cat='dance' filter='&(music)'/> I'm dancing to music"},{label:"dance",value:"<anim cat='dance' filter='!(music)'/> I'm dancing without music"},{label:"dance",value:"I can dance <anim cat=\u2018dance\u2019 filter=\u2018music\u2019/> There it was"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019> I\u2019m dancing right now </anim>"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 nonBlocking='true'/> I\u2019m dancing right now"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 loop='0'> Look at me, I\u2019m dancing right now, for an extended period of time </anim>"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 loop='3'/> I just danced 3 times"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 loop='3' nonBlocking='true'/> I\u2019m dancing right now, 3 times"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 endNeutral='true'/> I\u2019m dancing right now"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 endNeutral='true' nonBlocking='true'/> I\u2019m dancing right now"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 layers='!screen'/> I'm dancing with no screen animations"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 layers='screen\u2019/> I'm dancing with only screen animations"},{label:"dance",value:"<anim cat=\u2018dance\u2019 filter=\u2018music\u2019 layers='screen, body'/> I'm dancing with screen and body animations"},{label:"ssa",value:"This is a happy sound <ssa cat='happy'/>"},{label:"ssa",value:"Here are three happy sounds <ssa cat='happy' loop='3'/>"},{label:"ssa",value:"<ssa cat='worried'/> That was my worried noise."},{label:"ssa",value:"<ssa cat='affection' nonBlocking='true'/> I love penguins."},{label:"pitch",value:"<pitch add='200'> Hi </pitch><pitch mult='1.2'> there </pitch><break size='1'/> I'm Jibo"},{label:"pitch",value:"This is a <pitch mult='2.2'> pitch </pitch> test"},{label:"pitch",value:"<pitch band='1.2'> Hi there, I'm Jibo </pitch>"},{label:"pitch",value:"<pitch halftone='-5'> This is a pitch test </pitch>"},{label:"duration",value:"This is a <duration stretch='3'> duration </duration> test"},{label:"duration",value:"<duration stretch='3.0'> This is a duration test </duration>"},{label:"spell",value:"Jibo is spelled <say-as spell='jibo'/>"},{label:"phoneme",value:"Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?"},{label:"phoneme",value:"Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?"},{label:"style",value:"<style set='enthusiastic'> This is great </style> But, <style set='confused'> how did they do that? </style>"},{label:"category",value:"<anim cat='affection' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='confused' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='dance' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='embarrassed' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='excited' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='frustrated' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='happy' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='laughing' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='no' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='proud' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='relieved ' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='sad' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='scared' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='surprised' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='worried' nonBlocking='true' endNeutral='true' />."},{label:"category",value:"<anim cat='yes' nonBlocking='true' endNeutral='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(airplane)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(basketball)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(beach)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(car)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(disco-spin)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(football)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(soccer)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(trophy)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(music)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(question-mark)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(star)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(beer)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(cake)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(cheese)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(drumstick)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(coffee)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(fork)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(fish)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(groceries)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(burger)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(hotdog)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(icecream)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(pizza)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(wine)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(christmas-tree)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(fireworks)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(halloween)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(hanukkah)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(thanksgiving)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(clover)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(valentines)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(chocolate)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(bicycle)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(cat)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(laptop)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(dog)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(gift)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(house)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(laundry)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(lightbulb)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(money)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(popcorn)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(party)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(phone)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(robot)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(sunglasses)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(toilet-paper)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(trash)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(umbrella)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(video-game)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(bird)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(cow)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(earth)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(flower)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(lightning-bolt)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(moon)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(mountain)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(mouse)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(penguin)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(pig)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(bunny)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(rainbow)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(baby)' nonBlocking='true' />."},{label:"emoji",value:"<anim cat='emoji' filter='!(hf), &(heart)' nonBlocking='true' />."},{label:"dance",value:"<anim cat='dance' filter='music, rom-upbeat'/>."},{label:"dance",value:"<anim cat='dance' filter='music, rom-ballroom'/>."},{label:"dance",value:"<anim cat='dance' filter='music, rom-silly'/>."},{label:"dance",value:"<anim cat='dance' filter='music, rom-slowdance'/>."},{label:"dance",value:"<anim cat='dance' filter='music, rom-eletronic'/>."},{label:"dance",value:"<anim cat='dance' filter='music, rom-twerk'/>."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-upbeat)' />."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-ballroom)' />."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-silly)' />."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-slowdance)' />."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-eletronic)' />."},{label:"dance",value:"<anim cat='dance' filter='!(music), &(rom-twerk)' />."},{label:"ssa",value:"This is a happy sound <ssa cat='happy'/>"},{label:"ssa",value:"Here are three happy sounds <ssa cat='happy' loop='3'/>"},{label:"ssa",value:"<ssa cat='worried'/> That was my worried noise"},{label:"ssa",value:"<ssa cat='affection' nonBlocking='true'/> I love penguins"},{label:"tts",value:"Not sure <break size='0.5'/> if trust moose"},{label:"tts",value:"I won\u2019t talk for 2 seconds. <break size='2'/> See?"},{label:"tts",value:"Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?"},{label:"tts",value:"Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?"},{label:"tts",value:"<pitch add='200'> Hi </pitch> <pitch mult='1.2'> there </pitch> <break size='1'/> I'm Jibo"},{label:"tts",value:"This is a <pitch mult='2.2'> pitch </pitch> test"},{label:"tts",value:"This is a <duration stretch='3'> duration </duration> test"},{label:"tts",value:"<duration stretch='3.0'> <pitch halftone='-5'> This is a duration and pitch test </pitch></duration>"},{label:"tts",value:"<pitch band='1.2'> Hi there, I'm Jibo </pitch>"},{label:"tts",value:"*Jibo is spelled <say-as spell='jibo'/>"}],e.emit("ready",Object(N.a)(e)),e}return Object(s.a)(a,e),Object(c.a)(a,[{key:"updateAppStatusMessages",value:function(e,a){return a=a||"",arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&(this.statusMessages=""),this.statusMessages="".concat(a,": ").concat(this.statusMessages,"\n").concat(e),this.onUpdate(),this.statusMessages}},{key:"onUpdate",value:function(){this.emit("updateModel")}},{key:"dispose",value:function(){}},{key:"appVerison",get:function(){return"0.1.0"}}]),a}(I.EventEmitter));console.log("process.env: ",Object({NODE_ENV:"production",PUBLIC_URL:"."})),"electron"==Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_MODE&&console.log("Running in Electron: Filesystem access is enabled.");var C=new x;o.a.render(n.a.createElement(T,{model:C}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.5c252181.chunk.js.map