import React, {useState} from "react";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);
    const handleSubmit = (event) => {
        alert(`아침 식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
          <label>
              아침식사 여부:
              <input type={"checkbox"} checked={haveBreakfast} onChange={event =>
                  setHaveBreakfast(event.target.checked)} />
          </label>
          <br/>
          <label>
              방문자 수:
              <input type={"number"} value={numberOfGuest} onChange={event =>
              setNumberOfGuest(event.target.value)}/>
          </label>
          <br/>
          <button type={"submit"}>제출</button>
      </form>
    );
}
export default Reservation;