import React , {useState} from "react";

const TopBtn = () => {
    const [iconAnimation , setIconAnimation] = useState(false);
    window.addEventListener('scroll' , () => {
        (window.scrollY > 100) ? setIconAnimation(true) : setIconAnimation(false);
    })

    const topBar = () => {
      window.scrollTo({
        top : 0,
        behavior : 'smooth',
      })
    }

  return (
    <div
      className={`top-icon ${iconAnimation ? "animateIcon" : ""}`}
      onClick={topBar}
    >
      <span className="icon-animation">
        {/* <FaAngleUp/> */}
        <i className="fa-solid fa-arrow-up"></i>
      </span>
    </div>
  );
};

export default TopBtn;
