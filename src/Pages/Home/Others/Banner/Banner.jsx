import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import "./Banner.css"

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[90vh]">

        {/* slider-1 */}
        <div className="keen-slider__slide number-slide1">
          <div className="flex flex-col w-10/12 items-center  text-center space-y-5">
            <h2 className="text-5xl font-bold">
              To have another
              <br />
              language is to possess
              <br />
              a second soul.</h2>
            <p className="text-sm">
              Global Tongues is a Language School Courses & Learning Management System Education , <br /> Work with us. Learn with us. Improve with us.</p>

            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>
        {/* slider-2 */}
        <div className="keen-slider__slide number-slide2">
          <div className="flex flex-col w-10/12 items-center  text-center space-y-5">
            <h2 className="text-5xl font-bold">
              Every student matters,
              <br />
              every moment counts
              <br />
              Success In Life</h2>
            <p className="text-sm">
              Global Tongues is a Language School Courses & Learning Management System Education , <br /> Work with us. Learn with us. Improve with us.</p>
            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>
        {/* slider-3 */}
        <div className="keen-slider__slide number-slide3">
          <div className="flex flex-col w-10/12 items-center  text-center space-y-5">
            <h2 className="text-5xl font-bold">
              Putting Children First
              <br />
              Preparing Children For
              <br />
              Success In Life</h2>
            <p className="text-sm">
              Global Tongues is a Language School Courses & Learning Management System Education , <br /> Work with us. Learn with us. Improve with us.</p>

            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Banner;j