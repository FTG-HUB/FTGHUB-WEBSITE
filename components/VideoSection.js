showReview();
function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
            <div class="col-12 col-md-6 py-5">
              <h2>FTG Hub was a dream to work with</h2>
              <p class="my-4">
                "Working with FTG Hub was an absolute game-changer for our business. Their team not only understood our vision but delivered a custom software solution that exceeded our expectations. Their professionalism, expertise, and commitment to our success made the entire process seamless. I highly recommend FTG Hub to any business looking for innovative and reliable tech solutions."
              </p>

              <figcaption class="reviewer-info d-flex align-items-center mt-5">
                <img
                  class="rounded-circle"
                  src="./images/person-img.png"
                  alt=""
                  srcset=""
                  style="width: 50px; height: 50px"
                />
                <div class="px-3">
                  <div class="fs-6 cl-blue-700 fw-bold">Monsuru Okuniyi</div>
                  <span class="mt-1 cl-primary">COO at Houseparry</span>
                </div>
              </figcaption>
            </div>
            <div
              class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
            >
              <div
                class="action-wrapper position-absolute d-flex align-items-center text-white"
                style="bottom: 10%; left: 6%"
              >
                <i class="bi bi-play-circle-fill fs-1"></i>
                <a href="" class="mx-3 text-decoration-none text-white"
                  >Play Video</a
                >
              </div>
              <a href="#">
                <img
                  class="img-fit-cover"
                  src="./images/Videosection-Img.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}
