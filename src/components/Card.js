function Card() {
  return (
    <div id="card">
      <div id="topRow">
        <i class="bi bi-house-door icon" id="houseIcon"></i>
        <div id="title">Unit 92</div>
      </div>
      <i class="bi bi-chevron-right icon" id="arrowIcon"></i>

      <div id="medium">MEDIUM</div>

      <div id="middleDiv">
        <div class="keys">
          Location: <span>Bathroom</span>
        </div>
        <div class="keys">
          Problem: <span>Face to face dynamic budgetary management</span>
        </div>
      </div>

      <div id="bottomRow">
        <i class="bi bi-calendar4-event icon" id="calendarIcon"></i>
        <div id="date">Nov 7, 2022</div>
      </div>
    </div>
  );
}

export default Card;
