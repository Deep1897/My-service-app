import React from 'react';
import Navbar from "../components/Navbar.js"
import LogisticService from "../components/LogisticService.js"
import BpsDelivery from "../components/BpsDelivery.js"
import State from "../components/State.js"
import ThreeCards from "../components/ThreeCards.js"
import AnyQuestion from "../components/AnyQuestion.js"
import LogisticFooter from "../components/LogisticFooter.js"
function LogService() {
  return (
    <div>
      <Navbar/>
      <LogisticService/>
      <BpsDelivery/>
      <State/>
      <ThreeCards/>
      <AnyQuestion/>
      <LogisticFooter/>
    </div>
  );
}

export default LogService;
