import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import "./Banner.css"
// import { Link } from "react-router-dom"

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
    <>
      <div ref={sliderRef} className="keen-slider h-[60vh]">

        {/* slider-1 */}
        <div className="keen-slider__slide number-slide1">
          <div className="flex flex-col w-10/12 items-end  text-center space-y-5">
            <h2 className="text-4xl">
              Putting Children First
              <br />

              Preparing Children For
              <br />
              Success In Life</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque, sint magni porro eaque inventore a sit nisi ratione dicta ut, <br /> perspiciatis veritatis repellendus aut fuga quia, debitis totam enim.</p>

            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>
        {/* slider-2 */}
        <div className="keen-slider__slide number-slide2">
          <div className="flex flex-col w-10/12 items-end  text-center space-y-5">
            <h2 className="text-4xl">
              Putting Children First
              <br />

              Preparing Children For
              <br />
              Success In Life</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque, sint magni porro eaque inventore a sit nisi ratione dicta ut, <br /> perspiciatis veritatis repellendus aut fuga quia, debitis totam enim.</p>

            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>
        {/* slider-3 */}
        <div className="keen-slider__slide number-slide3">
          <div className="flex flex-col w-10/12 items-end  text-center space-y-5">
            <h2 className="text-4xl">
              Putting Children First
              <br />

              Preparing Children For
              <br />
              Success In Life</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque, sint magni porro eaque inventore a sit nisi ratione dicta ut, <br /> perspiciatis veritatis repellendus aut fuga quia, debitis totam enim.</p>

            <button className="btn btn-sm">Learn More</button>
          </div>
        </div>



      </div>
    </>
  )
}

export default Banner;