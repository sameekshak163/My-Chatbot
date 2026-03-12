// import React, { useState } from "react";
// import Loader from "./Loader";
// import Chatbot from "./Chatbot";
// import GetStartedButton from "./GetStartedButton";

// export default function GetStartedFlow() {
//   const [showLoader, setShowLoader] = useState(false);
//   const [showChatbot, setShowChatbot] = useState(false);

//   const handleGetStarted = () => {
//     setShowLoader(true);
//     setTimeout(() => {
//       setShowLoader(false);
//       setShowChatbot(true);
//     }, 5000);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {!showLoader && !showChatbot && (
//         <GetStartedButton onClick={handleGetStarted} />
//       )}
//       {showLoader && <Loader />}
//       {showChatbot && <Chatbot />}
//     </div>
//   );
// }