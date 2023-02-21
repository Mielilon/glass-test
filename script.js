(() => {
  const stepList = document.querySelector(".section-wrapper");
  let flag = true;

  let scrollCounter = 0;
  const delay = 500;

  const scrollHandler = (e) => {
    if (stepList.getBoundingClientRect().top <= 0 && flag) {
      stepList.classList.add("section-wrapper--active");
      document.body.style.overflow = "hidden";

      const steps = document.querySelectorAll(".step");
      const mouseWheelHandler = (e) => {
        const activeStep = document.querySelector(".step--active");
        const activeStepIndex = [...steps].indexOf(activeStep);

        scrollCounter += e.deltaY;
        if (
          e.deltaY > 0 &&
          scrollCounter > delay * activeStepIndex + 1 &&
          activeStepIndex < steps.length - 1
        ) {
          activeStep.classList.remove("step--active");
          steps[activeStepIndex + 1].classList.add("step--active");
        }
        if (activeStepIndex === steps.length - 1) {
          stepList.classList.remove("section-wrapper--active");
          document.body.style.overflow = "auto";
          flag = false;
        }
      };
      document.addEventListener("mousewheel", mouseWheelHandler);
      document.addEventListener("changedTouches", mouseWheelHandler);
    }
  };
  document.addEventListener("scroll", scrollHandler);
})();
