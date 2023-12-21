(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5911)}])},3779:function(e,t,n){"use strict";var s=n(5893),o=(n(7294),n(8768)),r=n.n(o);t.Z=function(e){var t=e.text;return(0,s.jsxs)("button",{type:"button",className:"".concat(r().btn," ").concat(r().cube," mt-4"),children:[(0,s.jsx)("div",{className:r().bgTop,children:(0,s.jsx)("div",{className:r().bgInner})}),(0,s.jsx)("div",{className:r().bgRight,children:(0,s.jsx)("div",{className:r().bgInner})}),(0,s.jsx)("div",{className:r().bg,children:(0,s.jsx)("div",{className:r().bgInner})}),(0,s.jsx)("div",{className:r().btnText,children:t})]})}},5911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var s=n(5893),o=n(9008),r=n(1664),a=n(7160),i=n.n(a),c=n(4184),l=n.n(c),d=n(7294),m=n(5446),u=n(6792),h=n(6518);function x(e,t){return Array.isArray(e)?e.includes(t):e===t}const f=d.createContext({});f.displayName="AccordionContext";var p=f;const g=d.forwardRef((({as:e="div",bsPrefix:t,className:n,children:o,eventKey:r,...a},i)=>{const{activeEventKey:c}=(0,d.useContext)(p);return t=(0,u.vE)(t,"accordion-collapse"),(0,s.jsx)(h.Z,{ref:i,in:x(c,r),...a,className:l()(n,t),children:(0,s.jsx)(e,{children:d.Children.only(o)})})}));g.displayName="AccordionCollapse";var y=g;const j=d.createContext({eventKey:""});j.displayName="AccordionItemContext";var v=j;const _=d.forwardRef((({as:e="div",bsPrefix:t,className:n,...o},r)=>{t=(0,u.vE)(t,"accordion-body");const{eventKey:a}=(0,d.useContext)(v);return(0,s.jsx)(y,{eventKey:a,children:(0,s.jsx)(e,{ref:r,...o,className:l()(n,t)})})}));_.displayName="AccordionBody";var w=_;const b=d.forwardRef((({as:e="button",bsPrefix:t,className:n,onClick:o,...r},a)=>{t=(0,u.vE)(t,"accordion-button");const{eventKey:i}=(0,d.useContext)(v),c=function(e,t){const{activeEventKey:n,onSelect:s,alwaysOpen:o}=(0,d.useContext)(p);return r=>{let a=e===n?null:e;o&&(a=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==s||s(a,r),null==t||t(r)}}(i,o),{activeEventKey:m}=(0,d.useContext)(p);return"button"===e&&(r.type="button"),(0,s.jsx)(e,{ref:a,onClick:c,...r,"aria-expanded":i===m,className:l()(n,t,!x(m,i)&&"collapsed")})}));b.displayName="AccordionButton";var B=b;const N=d.forwardRef((({as:e="h2",bsPrefix:t,className:n,children:o,onClick:r,...a},i)=>(t=(0,u.vE)(t,"accordion-header"),(0,s.jsx)(e,{ref:i,...a,className:l()(n,t),children:(0,s.jsx)(B,{onClick:r,children:o})}))));N.displayName="AccordionHeader";var k=N;const T=d.forwardRef((({as:e="div",bsPrefix:t,className:n,eventKey:o,...r},a)=>{t=(0,u.vE)(t,"accordion-item");const i=(0,d.useMemo)((()=>({eventKey:o})),[o]);return(0,s.jsx)(v.Provider,{value:i,children:(0,s.jsx)(e,{ref:a,...r,className:l()(n,t)})})}));T.displayName="AccordionItem";var C=T;const I=d.forwardRef(((e,t)=>{const{as:n="div",activeKey:o,bsPrefix:r,className:a,onSelect:i,flush:c,alwaysOpen:h,...x}=(0,m.Ch)(e,{activeKey:"onSelect"}),f=(0,u.vE)(r,"accordion"),g=(0,d.useMemo)((()=>({activeEventKey:o,onSelect:i,alwaysOpen:h})),[o,i,h]);return(0,s.jsx)(p.Provider,{value:g,children:(0,s.jsx)(n,{ref:t,...x,className:l()(a,f,c&&`${f}-flush`)})})}));I.displayName="Accordion";var H=Object.assign(I,{Button:B,Collapse:y,Item:C,Header:k,Body:w}),A=n(682),D=n(5675),E=n(3779),P=n(5208),z=n.n(P),K=n(2488),S=n.n(K),W=function(e){var t=e.text;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.default,{href:"/courses",passHref:!0,children:(0,s.jsxs)("button",{className:S().arrowButton,children:[t,(0,s.jsx)("div",{className:S().arrowWrapper,children:(0,s.jsx)("div",{className:S().arrow})})]})})})},O=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:z().getStarted,children:[(0,s.jsxs)("div",{className:z().getStartedText,children:[(0,s.jsx)("h2",{style:{fontWeight:"bold"},children:"Excited to learn programming?"}),(0,s.jsx)("p",{children:"Take a look at our courses and get started today!"}),(0,s.jsx)(W,{text:"View Courses"})]}),(0,s.jsx)(D.default,{src:"/illustrations/programming.svg",alt:"learning",width:"300",height:"340","data-aos":"zoom-in-right","data-aos-once":"true"})]})})},R=n(718),V=n.n(R),Y=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:V().instructorBox,children:[(0,s.jsx)(D.default,{src:"/azam.png",alt:"learning",width:"300",height:"300","data-aos":"zoom-in-right","data-aos-once":"true",style:{borderRadius:"50%"}}),(0,s.jsxs)("div",{className:V().instructorBoxText,children:[(0,s.jsx)("h2",{style:{fontWeight:"bold"},children:"Hey! I'm Azam Ahmed."}),(0,s.jsx)("p",{children:"If you're looking to level up your programming skills and boost career opportunities, you've come to the right place! We have a variety of programming courses that will quickly take you from beginner to advanced. Take a look at our courses and get started today!"}),(0,s.jsx)(W,{text:"View Courses"})]})]})})},q=function(){return(0,s.jsxs)("div",{className:i().container,children:[(0,s.jsxs)(o.default,{children:[(0,s.jsx)("title",{children:"Bit Byte Bit"}),(0,s.jsx)("meta",{name:"description",content:"Bit Byte Bit"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{name:"title",content:"Bit Byte Bit"}),(0,s.jsx)("meta",{name:"description",content:"Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer."}),(0,s.jsx)("meta",{name:"keywords",content:"bit byte bit, coding courses, programming courses, learn programming, learn coding, programming, coding"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,s.jsx)("meta",{name:"language",content:"English"}),(0,s.jsx)("meta",{name:"author",content:"Azam Ahmed"}),(0,s.jsx)("meta",{name:"subject",content:"Bit Byte Bit: Programming Courses"}),(0,s.jsx)("meta",{name:"copyright",content:"Azam Ahmed"}),(0,s.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,s.jsx)("meta",{name:"classification",content:"Bit Byte Bit: Programming Courses"}),(0,s.jsx)("meta",{name:"distribution",content:"Global"}),(0,s.jsx)("meta",{name:"rating",content:"General"}),(0,s.jsx)("meta",{name:"owner",content:"Azam Ahmed"}),(0,s.jsx)("meta",{name:"url",content:"https://bitbytebit.dev"}),(0,s.jsx)("meta",{name:"identifier-URL",content:"https://bitbytebit.dev"}),(0,s.jsx)("meta",{name:"coverage",content:"Worldwide"}),(0,s.jsx)("meta",{property:"og:title",content:"Bit Byte Bit"}),(0,s.jsx)("meta",{property:"og:description",content:"Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer."}),(0,s.jsx)("meta",{property:"og:image",content:"https://bitbytebit.dev/android-chrome-192x192.png"}),(0,s.jsx)("meta",{property:"og:url",content:"https://bitbytebit.dev"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{name:"twitter:site",content:"Bit Byte Bit"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Bit Byte Bit"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://bitbytebit.dev/android-chrome-192x192.png"}),(0,s.jsx)("meta",{name:"twitter:url",content:"https://bitbytebit.dev"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,s.jsxs)(A.Z,{className:i().main,children:[(0,s.jsxs)("section",{className:i().sectionContainer,children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:i().title,"data-aos":"flip-up","data-aos-once":"true",children:["Learning ",(0,s.jsx)("span",{className:i().inTitle,children:"to code"})," is for everyone!"]}),(0,s.jsx)("h5",{className:i().description,"data-aos":"slide-right","data-aos-once":"true","data-aos-delay":"100",children:"Whether you're a beginner taking your first steps into the world of programming or an experienced developer looking to sharpen your skills, our diverse range of coding courses has something for everyone."}),(0,s.jsx)(r.default,{href:"/courses",passHref:!0,children:(0,s.jsx)("div",{className:i().coursesBtnWrapper,"data-aos":"slide-right","data-aos-once":"true","data-aos-delay":"200",children:(0,s.jsx)("div",{className:i().viewCoursesBtn,children:(0,s.jsx)(E.Z,{text:"View Courses"})})})})]}),(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center ".concat(i().aiImage),"data-aos":"zoom-in-right","data-aos-once":"true",children:(0,s.jsx)(D.default,{src:"/illustrations/proud-coder.svg",alt:"proud coder",width:"750",height:"400"})})]}),(0,s.jsx)("div",{className:i().marginAboveInstructor}),(0,s.jsx)(Y,{}),(0,s.jsx)("div",{className:"mt-5"}),(0,s.jsx)("h2",{className:i().sectionTitle,children:"Why Bit Byte Bit?"}),(0,s.jsx)("section",{className:"w-75",children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center flex-wrap",children:[(0,s.jsx)(D.default,{src:"/illustrations/online-learning.svg",alt:"learning",width:"400",height:"450","data-aos":"zoom-in-right","data-aos-once":"true"}),(0,s.jsxs)("div",{className:i().whyInformation,children:[(0,s.jsx)("h2",{className:i().whyTitle,children:"Engaging courses"}),(0,s.jsx)("p",{className:i().whyDescription,children:"Our engaging courses are designed to captivate your interest with clear and concise content delivered lesson by lesson. Dive into interactive lessons and reinforce your understanding with exercises at the end of each module. Enjoy the flexibility to learn at your own pace, fitting education seamlessly into your busy schedule."})]})]})}),(0,s.jsx)("section",{className:"w-75",children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center flex-wrap",children:[(0,s.jsxs)("div",{className:i().whyInformation,children:[(0,s.jsx)("h2",{className:i().whyTitle,children:"Earn certificates"}),(0,s.jsx)("p",{className:i().whyDescription,children:"Prove your mastery and showcase your achievement by earning a certificate upon successful completion of the course. Whether you're looking to boost your resume or impress your peers, our certificates validate your skills and knowledge, providing you with a tangible testament to your commitment to personal and professional growth."})]}),(0,s.jsx)(D.default,{src:"/illustrations/certificate.svg",alt:"learning",width:"270",height:"400","data-aos":"zoom-in-right","data-aos-once":"true"})]})}),(0,s.jsx)("section",{className:"w-75",children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center flex-wrap",children:[(0,s.jsx)(D.default,{src:"/illustrations/dev-focus.svg",alt:"learning",width:"400",height:"400","data-aos":"zoom-in-right","data-aos-once":"true"}),(0,s.jsxs)("div",{className:i().whyInformation,children:[(0,s.jsx)("h2",{className:i().whyTitle,children:"Real-world applications"}),(0,s.jsx)("p",{className:i().whyDescription,children:"Our courses go beyond theory, offering real-world applications that bridge the gap between knowledge and practical skills. Gain insights that can be immediately applied to your professional life, ensuring that what you learn in our courses is not just theoretical but highly relevant to your everyday challenges and tasks."})]})]})}),(0,s.jsx)("section",{className:"w-75 mb-5",children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center flex-wrap",children:[(0,s.jsxs)("div",{className:i().whyInformation,children:[(0,s.jsx)("h2",{className:i().whyTitle,children:"Money-back guarantee"}),(0,s.jsx)("p",{className:i().whyDescription,children:"Your satisfaction is our top priority, and we want you to feel confident in your investment. If, for any reason, you are not completely satisfied with your learning experience, we offer a hassle-free refund policy, ensuring that you can explore our courses risk-free. Your success is our success!"})]}),(0,s.jsx)(D.default,{src:"/illustrations/moneyback-guarantee.svg",alt:"learning",width:"400",height:"400","data-aos":"zoom-in-right","data-aos-once":"true"})]})}),(0,s.jsx)(O,{}),(0,s.jsxs)("section",{className:"".concat(i().sectionContainer5," mt-2"),children:[(0,s.jsx)("h2",{className:i().sectionTitle,children:"Frequently Asked Questions"}),(0,s.jsx)("div",{className:"mt-4 mb-5","data-aos":"flip-up","data-aos-once":"true",children:(0,s.jsxs)(H,{children:[(0,s.jsxs)(H.Item,{eventKey:"0",children:[(0,s.jsx)(H.Header,{children:"Do I need any prior programming experience to enroll in your courses?"}),(0,s.jsx)(H.Body,{children:"Our courses cater to all skill levels, from beginners to advanced programmers. We provide introductory courses for those new to coding and more advanced courses for experienced developers looking to enhance their skills."})]}),(0,s.jsxs)(H.Item,{eventKey:"1",children:[(0,s.jsx)(H.Header,{children:"How are the courses structured, and what is the learning format?"}),(0,s.jsx)(H.Body,{children:"Our courses are designed with a structured curriculum, combining video lectures, hands-on coding exercises, quizzes, and projects. You can learn at your own pace, accessing course materials 24/7, allowing flexibility to fit into your schedule."})]}),(0,s.jsxs)(H.Item,{eventKey:"2",children:[(0,s.jsx)(H.Header,{children:"Do you offer any certifications upon course completion?"}),(0,s.jsx)(H.Body,{children:"Yes, we provide certificates of completion for each course. These certificates are valuable for showcasing your skills to potential employers or clients and can be shared on professional platforms like LinkedIn."})]}),(0,s.jsxs)(H.Item,{eventKey:"3",children:[(0,s.jsx)(H.Header,{children:"Do you offer refunds if I'm not satisfied with the course?"}),(0,s.jsx)(H.Body,{children:"Yes, we have a satisfaction guarantee. If you're not satisfied with the course within a certain period, you can request a refund. Please refer to our refund policy for more details."})]})]})})]})]})]})}},2488:function(e){e.exports={arrowButton:"ArrowButton_arrowButton__NBz9y",arrowWrapper:"ArrowButton_arrowWrapper__koOjH",arrow:"ArrowButton_arrow__sqXoV"}},5208:function(e){e.exports={getStarted:"GetStarted_getStarted__i7C_F",getStartedText:"GetStarted_getStartedText__2rZ7o"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",title:"Home_title__T09hD",inTitle:"Home_inTitle__BuCJc",sectionTitle:"Home_sectionTitle__GgIAn",whyTitle:"Home_whyTitle__3DtP9",sectionContainer:"Home_sectionContainer__IVbIU",description:"Home_description__41Owk",whyDescription:"Home_whyDescription__yIoHV",whyInformation:"Home_whyInformation__BfrfN",sectionContainer2:"Home_sectionContainer2__qp_ls",sectionContainer5:"Home_sectionContainer5__w_bTz",infoCard:"Home_infoCard__HP9ii",smallIcon:"Home_smallIcon__1musk",infoBox:"Home_infoBox__HHDP2",statisticsSection:"Home_statisticsSection__VOadk",statistic:"Home_statistic__1S4Em",statisticText:"Home_statisticText__1DYh1",marginAboveInstructor:"Home_marginAboveInstructor__jvVX5",coursesBtnWrapper:"Home_coursesBtnWrapper__cDxd0",aiImage:"Home_aiImage__8MpID",viewCoursesBtn:"Home_viewCoursesBtn__a_78n"}},718:function(e){e.exports={instructorBox:"InstructorBox_instructorBox__uXKCL",instructorBoxText:"InstructorBox_instructorBoxText__2hMxt"}},8768:function(e){e.exports={btn:"ThreeDButton_btn__sBxXr",cube:"ThreeDButton_cube__3mSYY",bgTop:"ThreeDButton_bgTop__lRjE_",bgInner:"ThreeDButton_bgInner__4ggAP",bg:"ThreeDButton_bg__veJ6P",bgRight:"ThreeDButton_bgRight__W_Z7K",btnText:"ThreeDButton_btnText__Z0mwU",bounce:"ThreeDButton_bounce__iV22P"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);